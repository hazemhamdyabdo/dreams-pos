<template>
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />
        <!-- /add -->
        <div class="card">
          <div class="card-body">
            <gform @submit="save">
              <b-row>
                <b-col md="4">
                  <gfield
                    label-text="Code"
                    name="code"
                    id="code"
                    v-model="selectedItem.Code"
                    rules="required"
                  />
                </b-col>
                <b-col md="4">
                  <gfield
                    label-text="Name"
                    name="name"
                    type="number"
                    id="name"
                    v-model="selectedItem.Name"
                  />
                  <b-row>
                    <b-col cols="12">
                      <hr />
                    </b-col>
                    <b-col cols="12" class="d-flex justify-content-end">
                      <b-button class="mx-1" variant="primary" type="submit">
                        {{ $t("save") }}
                      </b-button>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </gform>
            <g-table
              ref="area-table"
              :items="items"
              :columns="tableColumns"
              :noAction="true"
              perPage="25"
              :totalRows="totalRows"
              :createButton="{ visiable: true }"
              :searchInput="{ visiable: true }"
              @on-create="
                (v) => {
                  openModal({
                    englishName: '',
                  });
                }
              "
            >
              <template #actions="{ item }">
                <div class="text-nowrap">
                  <b-button
                    data-action-type="preview"
                    v-b-tooltip.hover.top="$t('preview')"
                    variant="custom"
                    class="btn-icon"
                    size="sm"
                    v-permission="'editAreas'"
                    @click="openModal(item)"
                  >
                    <feather-icon
                      icon="EyeIcon"
                      class="mx-1 clickable"
                      :hidden="true"
                      :id="`invoice-row-${item.id}-prev-icon`"
                    />
                  </b-button>
                  <b-button
                    data-action-type="edit"
                    v-b-tooltip.hover.top="$t('edit')"
                    variant="custom"
                    class="btn-icon"
                    size="sm"
                    v-permission="'editAreas'"
                    @click="openModal(item)"
                  >
                  <vue-feather type="edit" size="14" class="mx-1 clickable"></vue-feather>
                  </b-button>
                  <b-button
                    data-action-type="delete"
                    v-b-tooltip.hover.top="$t('delete')"
                    variant="flat-danger"
                    class="btn-icon"
                    size="sm"
                    v-permission="'deleteAreas'"
                    @click="remove(item)"
                  >
                  <vue-feather type="trash" stroke="red" size="14" class="mx-1 danger clickable"></vue-feather>
                  </b-button>
                </div>
              </template>
            </g-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GTable from '../Shared/Table.vue';

export default {
  components: {
    GTable,
  },
  data() {
    return {
      selectedItem: {
        Code: '',
      },
      totalRows: 0,
      currentPage: 1,
      perPage: 25,
      searchQuery: '',
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      items: [],
      title: 'Product Add',
      title1: 'Create new product',
      Category: ['Choose Category', 'Computers'],
      SubCategory: ['Choose Sub Category', 'Fruits'],
      Brand: ['Choose Brand', 'Brand'],
      Unit: ['Choose Unit', 'Unit'],
      Tax: ['Choose Tax', '2%'],
      Percentage: ['Percentage', '10%', '20%'],
      Closed: ['Closed', 'Open'],
    };
  },
  computed: {
    tableColumns() {
      return [
        { key: 'code', label: this.$t('Code'), sortable: true },
        { key: 'name', label: this.$t('Name'), sortable: true },
        { key: 'actions' },
      ];
    },
  },
  mounted() {
    this.items = [
      {
        code: 1,
        name: 'prod1'
      },
      {
        code: 2,
        name: 'prod2'
      },
      {
        code: 3,
        name: 'prod3'
      },
      {
        code: 4,
        name: 'prod4'
      }
    ];
    this.totalRows = this.items.length
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    save() {
      this.create({
        url: 'Banks',
        data: this.selectedItem,
      }).then((data) => {
        console.log(data);
      }).catch(error => {
        console.error('Axios error:', error);
      });
    },
  },
  name: 'addproduct',
};
</script>
