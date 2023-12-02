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
                      <label>Category</label>
                      <vue-select :options="Category" placeholder="Choose Category" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <label>Sub Category</label>
                      <vue-select :options="Choose" placeholder="Choose Sub Category" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <label>Category Code</label>
                      <vue-select :options="CT001" placeholder="CT001" />
                    </div>
                  </div>
                  <div class="col-lg-1 col-sm-6 col-12 ms-auto">
                    <div class="form-group">
                      <label>&nbsp;</label>
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
                    <a class="product-img">
                      <img
                        :src="require('../../../assets/img/product/' + record.img)"
                        alt="product"
                      />
                    </a>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editsubcategory">
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
    title: "Image",
    dataIndex: "img",
    key: "id",
    sorter: true,
  },
  {
    title: "Category",
    dataIndex: "Category",
    sorter: (a, b) => a.Category.localeCompare(b.Category),
  },
  {
    title: "Parent category",
    dataIndex: "Parentcategory",
    sorter: {
      compare: (a, b) => {
        a = a.Parentcategory.toLowerCase();
        b = b.Parentcategory.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Category Code",
    dataIndex: "CategoryCode",
    sorter: {
      compare: (a, b) => {
        a = a.CategoryCode.toLowerCase();
        b = b.CategoryCode.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase();
        b = b.Description.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created By",
    dataIndex: "CreatedBy",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedBy.toLowerCase();
        b = b.CreatedBy.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
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
    img: "product1.jpg",
    Category: "Computers",
    Parentcategory: "Computers",
    CategoryCode: "CT001",
    Description: "Computers Description",
    CreatedBy: "Admin",
  },
  {
    id: 2,
    img: "product2.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT002",
    Description: "Fruits Description",
    CreatedBy: "Admin",
  },
  {
    id: 3,
    img: "product3.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT003",
    Description: "Fruits Description",
    CreatedBy: "Admin",
  },
  {
    id: 4,
    img: "product4.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT004",
    Description: "Fruits Description",
    CreatedBy: "Admin",
  },
  {
    id: 5,
    img: "product5.jpg",
    Category: "Accessories",
    Parentcategory: "Accessories",
    CategoryCode: "CT005",
    Description: "Accessories Description",
    CreatedBy: "Admin",
  },
  {
    id: 6,
    img: "product6.jpg",
    Category: "Shoes",
    Parentcategory: "Shoes",
    CategoryCode: "CT006",
    Description: "Shoes Description",
    CreatedBy: "Admin",
  },
  {
    id: 7,
    img: "product7.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT007",
    Description: "Fruits Description",
    CreatedBy: "Admin",
  },
  {
    id: 8,
    img: "product8.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT008",
    Description: "Fruits Description",
    CreatedBy: "Admin",
  },
  {
    id: 9,
    img: "product9.jpg",
    Category: "Computers",
    Parentcategory: "Computers",
    CategoryCode: "CT009",
    Description: "Computers Description",
    CreatedBy: "Admin",
  },
  {
    id: 10,
    img: "product10.jpg",
    Category: "Health Care",
    Parentcategory: "Health Care",
    CategoryCode: "CT0010",
    Description: "Health Care Description",
    CreatedBy: "Admin",
  },
  {
    id: 11,
    img: "product4.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT004",
    Description: "Fruits Description",
    CreatedBy: "Admin",
  },
  {
    id: 12,
    img: "product5.jpg",
    Category: "Accessories",
    Parentcategory: "Accessories",
    CategoryCode: "CT005",
    Description: "Accessories Description",
    CreatedBy: "Admin",
  },
  {
    id: 13,
    img: "product6.jpg",
    Category: "Shoes",
    Parentcategory: "Shoes",
    CategoryCode: "CT006",
    Description: "Shoes Description",
    CreatedBy: "Admin",
  },
  {
    id: 14,
    img: "product7.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT007",
    Description: "Fruits Description",
    CreatedBy: "Admin",
  },
  {
    id: 15,
    img: "product8.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT008",
    Description: "Fruits Description",
    CreatedBy: "Admin",
  },
  {
    id: 16,
    img: "product9.jpg",
    Category: "Computers",
    Parentcategory: "Computers",
    CategoryCode: "CT009",
    Description: "Computers Description",
    CreatedBy: "Admin",
  },
  {
    id: 17,
    img: "product10.jpg",
    Category: "Health Care",
    Parentcategory: "Health Care",
    CategoryCode: "CT0010",
    Description: "Health Care Description",
    CreatedBy: "Admin",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Product Sub Category list",
      title1: "View/Search product Category",
      items: [
        {
          text: "Add Sub Category",
          addname: "/subaddcategory",
        },
      ],
      Category: ["Choose Category", "Computers"],
      Choose: ["Choose Sub Category", "Fruits"],
      CT001: ["CT001", "CT002"],
      data,
      columns,
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
  name: "subcategorylist",
};
</script>
