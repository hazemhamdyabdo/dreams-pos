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
                        class="picker cal-icon"
                        :editable="true"
                        :clearable="false"
                      />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Reference" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Choose" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Status" placeholder="Status" />
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
                    <a class="product-img">
                      <img
                        :src="require(`../../../assets/img/product/${record.img}`)"
                        alt="product"
                      /> </a
                  ></template>
                  <template v-else-if="column.key === 'Status'">
                    <span
                      class="badges bg-lightgreen"
                      v-if="record.Status === 'Received'"
                      >{{ record.Status }}</span
                    >
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
                  <template v-else-if="column.key === 'pay'">
                    <span
                      class="badges bg-lightgreen"
                      v-if="record.PaymentStatus === 'Paid'"
                      >{{ record.PaymentStatus }}</span
                    >
                    <span
                      class="badges bg-lightyellow"
                      v-else-if="record.PaymentStatus === 'Partial'"
                      >{{ record.PaymentStatus }}</span
                    >
                    <span
                      class="badges bg-lightred"
                      v-else="record.PaymentStatus === 'Unpaid'"
                      >{{ record.PaymentStatus }}</span
                    ></template
                  >
                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editpurchasereturn">
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
    title: "Image",
    dataIndex: "img",
    key: "id",
    sorter: {
      compare: (a, b) => {
        a = a.Date.toLowerCase();
        b = b.Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date",
    dataIndex: "Date",
    sorter: (a, b) => a.Date.localeCompare(b.Date),
  },
  {
    title: "Supplier",
    dataIndex: "Supplier",
    sorter: {
      compare: (a, b) => {
        a = a.Supplier.toLowerCase();
        b = b.Supplier.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
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
    title: "Status",
    dataIndex: "Status",
    key: "Status",
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
    title: "Paid ($)",
    dataIndex: "Paid",
    sorter: true,
  },
  {
    title: "Due ($)",
    dataIndex: "Due",
    sorter: true,
  },
  {
    title: "Payment Status",
    dataIndex: "PaymentStatus",
    key: "pay",
    sorter: {
      compare: (a, b) => {
        a = a.PaymentStatus.toLowerCase();
        b = b.PaymentStatus.toLowerCase();
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
    Date: "2/27/2022",
    Supplier: "Apex Computers",
    Reference: "PT001",
    Status: "Received",
    GrandTotal: "550",
    Paid: "120",
    Due: "550",
    PaymentStatus: "Paid",
  },
  {
    id: 2,
    img: "product2.jpg",
    Date: "1/15/2022",
    Supplier: "Modern Automobile",
    Reference: "PT002",
    Status: "Ordered",
    GrandTotal: "550",
    Paid: "120",
    Due: "550",
    PaymentStatus: "Partial",
  },
  {
    id: 3,
    img: "product3.jpg",
    Date: "3/24/2022",
    Supplier: "AIM Infotech",
    Reference: "PT003",
    Status: "Pending",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Unpaid",
  },
  {
    id: 4,
    img: "product4.jpg",
    Date: "1/15/2022",
    Supplier: "Best Power Tools",
    Reference: "PT004",
    Status: "Received",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Paid",
  },
  {
    id: 5,
    img: "product5.jpg",
    Date: "1/15/2022",
    Supplier: "AIM Infotech",
    Reference: "PT005",
    Status: "Pending",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "UnPaid",
  },
  {
    id: 6,
    img: "product6.jpg",
    Date: "3/24/2022",
    Supplier: "Best Power Tools",
    Reference: "PT006",
    Status: "Received",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "paid",
  },
  {
    id: 7,
    img: "product7.jpg",
    Date: "1/15/2022",
    Supplier: "Apex Computers",
    Reference: "PT007",
    Status: "Ordered",
    GrandTotal: "1000",
    Paid: "500",
    Due: "1000",
    PaymentStatus: "Partial",
  },
  {
    id: 8,
    img: "product8.jpg",
    Date: "3/24/2022",
    Supplier: "Best Power Tools",
    Reference: "PT008",
    Status: "Received",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "paid",
  },
  {
    id: 9,
    img: "product9.jpg",
    Date: "3/24/2022",
    Supplier: "Hatimi Hardware & Tools",
    Reference: "PT009",
    Status: "Pending",
    GrandTotal: "5500",
    Paid: "550",
    Due: "5500",
    PaymentStatus: "Unpaid",
  },
  {
    id: 10,
    img: "product10.jpg",
    Date: "3/24/2022",
    Supplier: "Best Power Tools",
    Reference: "PT0010",
    Status: "Pending",
    GrandTotal: "2580",
    Paid: "1250",
    Due: "2580",
    PaymentStatus: "Unpaid",
  },
  {
    id: 11,
    img: "product5.jpg",
    Date: "3/24/2022",
    Supplier: "Best Power Tools",
    Reference: "PT0011",
    Status: "Pending",
    GrandTotal: "2580",
    Paid: "1250",
    Due: "2580",
    PaymentStatus: "Unpaid",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Purchase Return Lis",
      title1: "Manage your Returns",
      items: [
        {
          text: "Add Purchase Return",
          addname: "/createpurchasereturn",
        },
      ],
      data,
      columns,
      startdate: currentDate,
      Choose: ["Choose Supplier", "Supplier"],
      Status: ["Choose Status", "Inprogress"],
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
  name: "purchasereturnlist",
};
</script>
