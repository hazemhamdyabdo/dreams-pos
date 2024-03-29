<!-- DataTable.vue -->

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            <span @click="sortData(column)">{{ column }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedData" :key="index">
          <td v-for="(column, colIndex) in columns" :key="colIndex">
            {{ item[column] }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <template v-for="page in totalPages" :key="page">
        <button
          @click="goToPage(page)"
          :class="{ active: page === currentPage }"
        >
          {{ page }}
        </button>
      </template>
    </div>

    <div class="entries">
      <select v-model="itemsPerPage" @change="changeItemsPerPage">
        <option v-for="option in perPageOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
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
      default: 5,
    },
    perPageOptions: {
      type: Array,
      default: () => [5, 10, 25, 50],
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: this.initialItemsPerPage,
      sortBy: null,
      sortOrder: 1,
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
    totalPages() {
      return Math.ceil(this.sortedData.length / this.itemsPerPage);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.sortedData.slice(startIndex, endIndex);
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
      const remainingData = this.sortedData.slice(startIndex);
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
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th span {
  cursor: pointer;
}

.pagination {
  margin-top: 10px;
}

.pagination button {
  margin: 0 5px;
}

.entries {
  margin-top: 10px;
}
</style>
