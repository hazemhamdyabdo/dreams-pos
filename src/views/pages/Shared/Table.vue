<template>
  <div>
    <div class="my-2">
      <!-- Table Top -->
      <b-form-input
        v-model="searchQuery"
        :clearable="true"
        :placeholder="$t('search')"
      />
      <b-row align-h="between">
        <!-- Search -->
        <b-col cols="12" md="4" class="d-none">
          <div
            v-if="true"
            class="d-flex align-items-center justify-content-end"
          >
            <b-form-input
              v-model="searchQuery"
              :clearable="true"
              :placeholder="$t('search')"
            />
          </div>
        </b-col>

        <b-col
          cols="12"
          md="12"
          class="d-flex align-items-center justify-content-end mb-1 mb-md-0"
        >
          <b-button
            variant="primary"
            data-action-type="new"
            v-if="createButton.visiable"
            @click="
              (v) => {
                $emit('on-create', v);
              }
            "
          >
            {{ createButton.text ? $t(createButton.text) : $t("new") }}
          </b-button>
        </b-col>
      </b-row>
    </div>

    <b-row>
      <b-col
        cols="12"
        class="printDiv"
        id="printDiv"
        ref="printDiv"
        style="word-wrap: normal; letter-spacing: normal"
      >
        <b-table
          v-bind="$attrs"
          ref="gtable"
          :items="paginatedData"
          :fields="columns"
          primary-key="id"
          id="mainTable"
          show-empty
          striped
          hover
          responsive
          class="position-relative"
          :per-page="perPage"
          filter-debounce="700"
          :current-page="currentPage"
          :sort-by="sortBy"
          :sort-desc="isSortDirDesc"
          :sort-direction="sortDirection"
          :filter="searchQuery"
          :filter-included-fields="filterOn"
          :busy="isBusy"
          @filtered="onFiltered"
          :empty-text="$t('noMatchingRecordsFound')"
        >
          <template #head(actions)>
            <span></span>
          </template>
          <template #table-colgroup="scope">
            <col
              v-for="field in scope.fields"
              :key="field.key"
              :style="field.style"
            />
          </template>

          <template
            v-for="field in columns"
            v-slot:[`cell(${field.key})`]="{ value }"
          >
            <span v-if="field.isLocale" :key="field.key">
              {{ field.isLocale ? $t(value) : value }}
            </span>
            <!-- <span v-else-if="field.type === 'number'"
              :key="field.key"
            >
              {{ value | fraction('number', 2) }}
            </span> -->
            <span v-else :key="field.key1" v-html="value"> </span>
          </template>
          <template #cell(isReviewed)="data">
            <slot name="isReviewed" v-bind:item="data.item" />
          </template>
          <template #cell(updatedNAme)="data">
            <slot name="updatedNAme" v-bind:item="data.item" />
          </template>
          <template #cell(fullName)="data">
            <slot name="fullName" v-bind:item="data.item" />
          </template>
          <template #cell(actions)="data" v-if="hideActions === false">
            <slot name="actions" v-bind:item="data.item" />
            <div v-if="!slots.actions" class="text-nowrap">
              <b-button
                v-if="editButton.visiable"
                v-b-tooltip.hover.top="$t(editButton.text || 'edit')"
                variant="flat-primary"
                small
                size="sm"
                @click="
                  () => {
                    if (editButton.handler) editButton.handler(data.item);
                  }
                "
              >
                <feather-icon
                  :id="`invoice-row-${data.item.id}-preview-icon`"
                  :icon="editButton.icon || 'EditIcon'"
                  class="clickable"
                />
              </b-button>
              <b-button
                v-if="deleteButton.visiable"
                v-b-tooltip.hover.top="$t(deleteButton.text || 'edit')"
                variant="flat-danger"
                small
                size="sm"
                @click="
                  () => {
                    if (deleteButton.handler) deleteButton.handler(data.item);
                  }
                "
              >
                <feather-icon
                  :icon="deleteButton.icon || 'TrashIcon'"
                  stroke="red"
                  class="clickable danger"
                  :id="`invoice-row-${data.item.id}-delete-icon`"
                />
              </b-button>
            </div>
          </template>
          <template v-for="field in columns" #[`foot(${field.key})`]>
            {{ typeof field.footer === "function" ? field.footer() : "" }}
          </template>
        </b-table>
      </b-col>
      <div v-html="template" id="printPdf"></div>
    </b-row>
    <b-card-body
      class="d-flex justify-content-between flex-wrap pt-0"
      v-if="!hideOptions"
    >
      <!-- page length -->
      <b-form-group
        :label="$t('entries')"
        label-cols="6"
        label-align="left"
        label-size="sm"
        label-for="sortBySelect"
        class="text-nowrap mb-md-0 mr-1"
      >
        <b-form-select
          id="perPageSelect"
          v-model="perPage"
          size="sm"
          inline
          @change="
            (v) => {
              if (perPage === 'الكل') {
                perPage = 10000;
              }
            }
          "
          :options="perPageOptions"
        />
      </b-form-group>
      <!-- pagination -->
      <div>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows || items.length"
          :per-page="perPage"
          first-number
          last-number
          prev-class="prev-item"
          next-class="next-item"
          class="mb-0 mr-1"
        >
          <template #prev-text>
            <feather-icon
              @change="changeItemsPerPage"
              icon="ChevronLeftIcon"
              size="18"
            />
          </template>
          <template #next-text>
            <feather-icon
              @change="changeItemsPerPage"
              icon="ChevronRightIcon"
              size="18"
            />
          </template>
        </b-pagination>
      </div>
      <!-- pagination -->
      <div class="pagination-container">
        <div class="entries">
          <span>{{ $t("pages count") }}</span>
          <select v-model="perPage" @change="changeItemsPerPage">
            <option
              v-for="option in perPageOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1" class="prev">
            &lt;
          </button>
          <template v-for="page in totalPages" :key="page">
            <button
              @click="goToPage(page)"
              :class="{ active: page === currentPage }"
              class="page"
            >
              {{ page }}
            </button>
          </template>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="next"
          >
            &gt;
          </button>
        </div>
      </div>
    </b-card-body>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: [Array, Function],
      default: () => [],
    },
    hideOptions: {
      type: Boolean,
      default: false,
    },
    hideSearch: {
      type: Boolean,
      default: false,
    },
    isBusy: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    totalRows: {
      type: Number,
      default: 0,
    },
    perPageOptions: {
      type: Array,
      default: () => [3, 5, 10, 25, 50],
    },
  },
  emits: ["on-edit", "on-delete", "on-view", "on-create"],
  setup(props, context) {
    let { attrs } = context;
    // console.log(props.items, "attrs")

    const {
      perPage,
      sortDirection,
      isSortDirDesc,
      currentPage,
      sortBy,
      createLabel,
      editButton,
      deleteButton,
      noAction,
      createButton,
      excelButton,
      pdfButton,
      searchInput,
      rowClass,
    } = attrs;

    const defaults = {
      perPage: perPage || 2,
      sortDirection: sortDirection || "asc",
      isSortDirDesc: isSortDirDesc || "",
      currentPage: currentPage || 1, // parseInt(localStorage.getItem('currentPage')) !== 1 ? parseInt(localStorage.getItem('currentPage')) :
      sortBy: sortBy || "",
      createLabel: createLabel || "",
      noAction: noAction || false,
      editButton: editButton || {
        visiable: true,
        icon: "EditIcon",
        text: "",
        handler: "",
      },
      deleteButton: deleteButton || {
        visiable: true,
        icon: "",
        text: "",
        handler: "",
      },
      createButton: createButton || {
        visiable: true,
        icon: "",
        text: "",
        handler: "",
      },
      searchInput: searchInput || {
        visiable: true,
        icon: "",
        text: "",
        handler: "",
      },
      slots: context.slots,
      rowClass,
    };

    attrs = Object.entries(attrs).reduce((obj, val) => {
      /* eslint-disable prefer-destructuring */
      if (
        [...Object.keys(props), ...Object.keys(defaults)].indexOf(val[0]) === -1
      )
        obj[val[0]] = val[1];
      return obj;
    }, {});
    return defaults;
  },
  data() {
    return {
      item: "",
      searchQuery: "",
      filterOn: [],
      itemsArray: [],
      template: "",
      hideActions: false,
    };
  },
  computed: {
    filteredData() {
      console.log(this.currentPage, "items");
      this.currentPage;
      const query = this.searchQuery.toLowerCase();
      return this.items.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(query);
        });
      });
    },

    totalPages() {
      return Math.ceil(this.filteredData.length / this.perPage);
    },
    paginatedData() {
      console.log(this.currentPage, "ex");
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.filteredData.slice(start, end);
    },
    // currentP: {
    //   get() {
    //     return this.currentPage;
    //   },
    //   set(value) {
    //     // You can define additional logic or side effects here
    //     this.currentPage = value;
    //   },
    // },
  },
  mounted() {
    // this.$refs.gtable.$slots = { ...this.$refs.gtable.$slots, ...this.slots };
    // this.columns.forEach((res) => {
    //   res.field = res.key
    // });
  },
  methods: {
    showRestOfData: function () {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const remainingData = this.filteredData.slice(startIndex);
      const extraPages = Math.ceil(remainingData.length / this.perPage);
      if (extraPages > 1) {
        for (let i = 2; i <= extraPages; i++) {
          this.$emit("page-change", i + this.currentPage - 1, this.perPage);
        }
      }
    },
    updateSearch() {
      this.currentPage = 1;
      this.showRestOfData();
      this.$emit("search-change", this.searchQuery);
    },
    goToPage(page) {
      if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
        this.currentPage = page++;
        this.showRestOfData();
        console.log(this.currentPage, "after");
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.showRestOfData();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.showRestOfData();
      }
    },
    changeItemsPerPage() {
      this.currentPage = 1;
      this.showRestOfData();
    },
    // updateComputedProperty() {
    //   this.currentPage = this.currentPage; // Update the underlying data property
    // },
    handlePageChange(page) {
      // this.$router.replace({ query: { page: page.toString() } });
      // this.currentPage = page;
    },
    restorePage() {
      // // const routePage = this.$route.query.page;
      // if (routePage) {
      //   // this.currentPage = parseInt(routePage);
      // } else {
      // }
      // this.currentPage = 1
    },
    hide() {
      this.hideActions = true;
    },
    refreshTable() {
      // this.$refs.gtable.refresh();
    },
    // onFiltered(filteredItems) {
    //   this.totalRows = filteredItems.length;
    //   this.currentPage = 1;
    // },
  },
  created() {
    // Call the restorePage method when the component is created to restore the page
    // this.restorePage();
  },
};
</script>

<style>
.table.b-table th {
  word-wrap: normal;
  letter-spacing: normal;
  text-align: center;
}
</style>
