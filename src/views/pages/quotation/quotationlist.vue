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
                      <datepicker
                        v-model="startdate"
                        placeholder="Choose Date"
                        class="picker cal-icon"
                        :editable="true"
                        :clearable="false"
                      />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Reference " />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Choose" placeholder="Choose Customer" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Choose" placeholder="Choose Status" />
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
                  <template v-if="column.key === 'pay'">
                    <div class="productimgname">
                      <a href="javascript:void(0);" class="product-img">
                        <img
                          :src="require(`../../../assets/img/product/${record.img}`)"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">{{ record.ProductName }}</a>
                    </div></template
                  >
                  <template v-else-if="column.key === 'id'">
                    <span class="badges bg-lightgreen" v-if="record.Status === 'Sent'">{{
                      record.Status
                    }}</span>
                    <span
                      class="badges bg-lightyellow"
                      v-else-if="record.Status === 'Ordered'"
                      >{{ record.Status }}</span
                    >
                    <span
                      class="badges bg-lightred"
                      v-else="record.Status === 'Pending'"
                      >{{ record.Status }}</span
                    ></template
                  >

                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editquotation">
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
import { ref } from "vue";
const currentDate = ref(new Date());
const columns = [
  {
    sorter: true,
  },

  {
    title: "Product Name",
    dataIndex: "ProductName",
    key: "pay",
    sorter: (a, b) => a.ProductName.localeCompare(b.ProductName),
  },
  {
    title: "Reference",
    dataIndex: "Reference",
    sorter: {
      compare: (a, b) => {
        a = a.Reference.toLowerCase();
        b = b.Reference.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Custmer Name",
    dataIndex: "CustmerName",
    sorter: (a, b) => a.CustmerName.localeCompare(b.CustmerName),
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "id",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Grand Total ($)",
    dataIndex: "GrandTotal",
    sorter: {
      compare: (a, b) => {
        a = a.GrandTotal.toLowerCase();
        b = b.GrandTotal.toLowerCase();
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
    ProductName: "Macbook pro",
    Reference: "PT001",
    CustmerName: "walk-in-customer",
    Status: "Sent",
    GrandTotal: "550",
  },
  {
    id: 2,
    img: "product2.jpg",
    ProductName: "Orange",
    Reference: "PT002",
    CustmerName: "walk-in-customer",
    Status: "Ordered",
    GrandTotal: "410",
  },
  {
    id: 3,
    img: "product3.jpg",
    ProductName: "Stawberry",
    Reference: "PT003",
    CustmerName: "walk-in-customer",
    Status: "Pending",
    GrandTotal: "210",
  },
  {
    id: 4,
    img: "product4.jpg",
    ProductName: "Avocat",
    Reference: "PT004",
    CustmerName: "John Smith",
    Status: "Sent",
    GrandTotal: "500",
  },
  {
    id: 5,
    img: "product5.jpg",
    ProductName: "Macbook Pro",
    Reference: "PT005",
    CustmerName: "Beverly",
    Status: "Pending",
    GrandTotal: "1050",
  },
  {
    id: 6,
    img: "product6.jpg",
    ProductName: "Apple Earpods",
    Reference: "PT006",
    CustmerName: "B. Huber",
    Status: "Sent",
    GrandTotal: "2530",
  },
  {
    id: 7,
    img: "product7.jpg",
    ProductName: "iPhone 11",
    Reference: "PT007",
    CustmerName: "Thomas",
    Status: "Sent",
    GrandTotal: "550",
  },
  {
    id: 8,
    img: "product8.jpg",
    ProductName: "samsung",
    Reference: "PT008",
    CustmerName: "Benjamin",
    Status: "Ordered",
    GrandTotal: "550",
  },
  {
    id: 9,
    img: "product9.jpg",
    ProductName: "Unpaired gray",
    Reference: "PT0010",
    CustmerName: "James",
    Status: "Pending",
    GrandTotal: "210",
  },
  {
    id: 10,
    img: "product10.jpg",
    ProductName: "Apple Earpods",
    Reference: "PT006",
    CustmerName: "B. Huber",
    Status: "Sent",
    GrandTotal: "2530",
  },
  {
    id: 11,
    img: "product7.jpg",
    ProductName: "iPhone 11",
    Reference: "PT007",
    CustmerName: "Thomas",
    Status: "Sent",
    GrandTotal: "550",
  },
  {
    id: 12,
    img: "product8.jpg",
    ProductName: "samsung",
    Reference: "PT008",
    CustmerName: "Benjamin",
    Status: "Ordered",
    GrandTotal: "550",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Quotation List",
      title1: "Manage your Quotations",
      items: [
        {
          text: "Add Quotation",
          addname: "/addquotation",
        },
      ],
      data,
      columns,
      startdate: currentDate,
      Choose: ["Choose Customer", "Customer1"],
      Status: ["Choose Status", "Inprogress", "Complete"],
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
  name: "quotationlist",
};
</script>
