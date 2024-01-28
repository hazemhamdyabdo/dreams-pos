<template>
  <div>
    <div class="search-sort">
      <a class="btn btn-searchset"><img src="@/assets/img/icons/search-white.svg" alt="img" /></a>
      <input v-model="searchQuery" @input="updateSearch" placeholder="Search..." />
    </div>
    <div class="pagination-container">
      <div class="entries">
        <span>{{ $t("pages count") }}</span>
        <select v-model="itemsPerPage" @change="changeItemsPerPage">
          <option v-for="option in perPageOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1" class="prev">
          &lt;
        </button>
        <template v-for="page in totalPages" :key="page">
          <button @click="goToPage(page)" :class="{ active: page === currentPage }" class="page">
            {{ page }}
          </button>
        </template>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="next">
          &gt;
        </button>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            <div class="">
              <span class="sort-icon">
                <span @click="sortData(column)">
                  {{ column }}
                  <span style="font-size: 0.6rem">▲</span>
                  <span style="font-size: 0.6rem">▼</span>
                </span>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedData" :key="index">
          <td v-for="(column, colIndex) in columns" :key="colIndex">
            {{ item[column] }}
          </td>
          <td>
            <router-link class="me-3" :to="{ name: 'product-details', params: { id: index } }">
              <img src="@/assets/img/icons/eye.svg" alt="img" />
            </router-link>
            <router-link class="me-3" :to="{ name: 'editproduct', params: { id: index } }">
              <img src="@/assets/img/icons/edit.svg" alt="img" />
            </router-link>
            <a class="confirm-text" href="javascript:void(0);" @click="showAlert">
              <img src="@/assets/img/icons/delete.svg" alt="img" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    initialItemsPerPage: {
      type: Number,
      default: 10,
    },
    perPageOptions: {
      type: Array,
      default: () => [3, 5, 10, 25, 50],
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: this.initialItemsPerPage,
      sortBy: null,
      sortOrder: 1,
      searchQuery: "",
      selectedSort: "",
    };
  },
  computed: {
    sortedData() {
      if (this.sortBy) {
        return this.data.slice().sort((a, b) => {
          const aValue = a[this.sortBy];
          const bValue = b[this.sortBy];
          return (
            this.sortOrder * (aValue > bValue ? 1 : aValue < bValue ? -1 : 0)
          );
        });
      } else {
        return this.data;
      }
    },
    filteredData() {
      const query = this.searchQuery.toLowerCase();
      return this.sortedData.filter((item) =>
        this.columns.some((column) => {
          return String(item[column]).toLowerCase().includes(query)
        }
        )
      );
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
    paginatedData() {
      console.log(this.currentPage, "currentPage")
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredData.slice(startIndex, endIndex);
    },
  },
  methods: {
    sortData(column) {
      if (this.sortBy === column) {
        this.sortOrder *= -1;
      } else {
        this.sortBy = column;
        this.sortOrder = 1;
      }
      this.$emit("field-sort", this.sortBy, this.sortOrder);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.showRestOfData();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.showRestOfData();
      }
    },
    showAlert() {
      // Use sweetalert2
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#FF9F43",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.");
        }
      });
    },
    goToPage(page) {
      if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.showRestOfData();
      }
    },
    changeItemsPerPage() {
      this.currentPage = 1;
      this.showRestOfData();
    },
    showRestOfData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const remainingData = this.filteredData.slice(startIndex);
      const extraPages = Math.ceil(remainingData.length / this.itemsPerPage);

      if (extraPages > 1) {
        // Show the remaining data in additional pages
        for (let i = 2; i <= extraPages; i++) {
          this.$emit(
            "page-change",
            i + this.currentPage - 1,
            this.itemsPerPage
          );
        }
      }
    },
    updateSearch() {
      this.currentPage = 1;
      this.showRestOfData();
      this.$emit("search-change", this.searchQuery);
    },
    updateSort() {
      this.sortBy = this.selectedSort;
      this.$emit("field-sort", this.sortBy, this.sortOrder);
    },
    updateSortOrder() {
      this.$emit("field-sort", this.sortBy, this.sortOrder);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

th,
td {
  padding: 8px;
  text-align: left;
}

th {
  font-weight: 700;
}

tbody>tr:nth-child(odd) {
  background-color: #f2f2f2;
}

th span {
  cursor: pointer;
}

.search-sort {
  margin-bottom: 10px;
  margin: 0 auto;
  position: relative;
}

.search-sort input,
.search-sort select {
  margin-right: 10px;
  border: 1px solid gainsboro;
}

.pagination {
  margin-top: 10px;
}

.pagination button {
  margin: 0 5px;
}

.sort-icon {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 1rem;
}

.entries {
  margin-top: 10px;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.entries select {
  width: 5rem;
  text-align: center;
  border: 1px solid gainsboro;
}

.btn-searchset {
  position: absolute;
  right: 10.5%;
  top: -3px;
}

.prev,
.next,
.page {
  padding: 0.3rem 0.7rem;
  border-radius: 50%;
  font-weight: 700;
  border: 1px solid gainsboro;
}

.next:hover,
.prev:hover,
.page:hover {
  background-color: orange;
  cursor: pointer;
  color: white;
}

.active {
  background-color: orange;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
}
</style>
