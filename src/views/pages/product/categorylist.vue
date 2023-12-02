<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageaddheader :title="title" :title1="title1" :items="items" />

        <!-- /product list -->
        <div class="card">
          <div class="card-body">
            <div class="table-top">
              <div class="search-set">
                <div class="search-path">
                  <a
                    class="btn btn-filter"
                    id="filter_search"
                    v-on:click="filter = !filter"
                    :class="{ setclose: filter }"
                  >
                    <img src="../../../assets/img/icons/filter.svg" alt="img" />
                    <span
                      ><img src="../../../assets/img/icons/closes.svg" alt="img"
                    /></span>
                  </a>
                </div>
                <div class="search-input">
                  <a class="btn btn-searchset"
                    ><img src="../../../assets/img/icons/search-white.svg" alt="img"
                  /></a>
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label>
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Search..."
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="wordset">
                <ul>
                  <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"
                      ><img src="../../../assets/img/icons/pdf.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"
                      ><img src="../../../assets/img/icons/excel.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"
                      ><img src="../../../assets/img/icons/printer.svg" alt="img"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /Filter -->
            <div
              class="card"
              id="filter_inputs"
              :style="{
                display: filter ? 'block' : 'none',
              }"
            >
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Choose" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Category" placeholder="Category" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Brand" placeholder="Brand" />
                    </div>
                  </div>
                  <div class="col-lg-1 col-sm-6 col-12 ms-auto">
                    <div class="form-group">
                      <a class="btn btn-filters ms-auto"
                        ><img src="../../../assets/img/icons/search-whites.svg" alt="img"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Filter -->
            <div class="table-responsive">
              <a-table
                :columns="columns"
                :data-source="data"
                :row-selection="{
                  selectedRowKeys: selectedRowKeys,
                  onChange: onSelectChange,
                }"
                @change="onChange"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'id'">
                    <div class="productimgname">
                      <a href="javascript:void(0);" class="product-img">
                        <img
                          src="../../../assets/img/product/noimage.png"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">{{ record.name }}</a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editbrand">
                      <img src="../../../assets/img/icons/edit.svg" alt="img" />
                    </router-link>
                    <a
                      class="me-3 confirm-text"
                      href="javascript:void(0);"
                      @click="showAlert"
                    >
                      <img src="../../../assets/img/icons/delete.svg" alt="img" />
                    </a>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
        <!-- /product list -->
      </div>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "Category Name",
    dataIndex: "name",
    key: "id",
    sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Category Code",
    dataIndex: "code",
    sorter: (a, b) => a.code.localeCompare(b.code),
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: (a, b) => a.description.localeCompare(b.description),
  },
  {
    title: "Created By",
    dataIndex: "create",
    sorter: (a, b) => a.create.localeCompare(b.create),
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    name: "Computers",
    code: "CT001",
    description: "Computers Description",
    create: "Admin",
  },
  {
    id: 2,
    name: "Fruits",
    code: "CT002",
    description: "Fruits Description",
    create: "Admin",
  },
  {
    id: 3,
    name: "Fruits",
    code: "CT003",
    description: "Fruits Description",
    create: "Admin",
  },
  {
    id: 4,
    name: "Fruits",
    code: "CT004",
    description: "Fruits Description",
    create: "Admin",
  },
  {
    id: 5,
    name: "Accessories",
    code: "CT005",
    description: "Accessories Description",
    create: "Admin",
  },
  {
    id: 6,
    name: "Accessories",
    code: "CT006",
    description: "Accessories Description",
    create: "Admin",
  },
  {
    id: 7,
    name: "Accessories",
    code: "CT007",
    description: "Accessories Description",
    create: "Admin",
  },
  {
    id: 8,
    name: "Accessories",
    code: "CT008",
    description: "Accessories Description",
    create: "Admin",
  },
  {
    id: 9,
    name: "Accessories",
    code: "CT009",
    description: "Accessories Description",
    create: "Admin",
  },
  {
    id: 10,
    name: "Accessories",
    code: "CT0010",
    description: "Accessories Description",
    create: "Admin",
  },
  {
    id: 8,
    name: "Accessories",
    code: "CT008",
    description: "Accessories Description",
    create: "Admin",
  },
  {
    id: 9,
    name: "Accessories",
    code: "CT009",
    description: "Accessories Description",
    create: "Admin",
  },
  {
    id: 10,
    name: "Accessories",
    code: "CT0010",
    description: "Accessories Description",
    create: "Admin",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Product Category list",
      title1: "View/Search product Category",
      items: [
        {
          text: "Add Category",
          addname: "/addcategory",
        },
      ],
      data,
      columns,
      Choose: ["Choose Category", "Computers"],
      Category: ["Choose Sub Category", "Fruits"],
      Brand: ["Choose Sub Brand", "Iphone"],
    };
  },
  methods: {
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
  },
  name: "categorylist",
};
</script>
<style>
.ant-tooltip {
  display: none !important;
}
</style>
