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
                  <div class="col-lg col-sm-6 col-12">
                    <div class="form-group">
                      <datepicker
                        v-model="startdate"
                        class="picker cal-icon"
                        :editable="true"
                        :clearable="false"
                      />
                    </div>
                  </div>
                  <div class="col-lg col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Reference" />
                    </div>
                  </div>
                  <div class="col-lg col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Choose" placeholder="Choose Supplier" />
                    </div>
                  </div>
                  <div class="col-lg col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Status" placeholder="Choose Status" />
                    </div>
                  </div>
                  <div class="col-lg col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select
                        :options="Payment"
                        placeholder="Choose Payment Status"
                      />
                    </div>
                  </div>
                  <div class="col-lg-1 col-sm-6 col-12">
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
                    <span
                      class="badges bg-lightgreen"
                      v-if="record.PaymentStatus === 'Paid'"
                      >{{ record.PaymentStatus }}</span
                    >
                    <span
                      class="badges bg-lightred"
                      v-else-if="record.PaymentStatus === 'Unpaid'"
                      >{{ record.PaymentStatus }}</span
                    >
                    <span
                      class="badges bg-lightyellow"
                      v-else="record.PaymentStatus === 'Partial'"
                      >{{ record.PaymentStatus }}</span
                    ></template
                  >
                  <template v-else-if="column.key === 'pay'">
                    <span
                      class="badges bg-lightgreen"
                      v-if="record.Status === 'Received'"
                      >{{ record.Status }}</span
                    >
                    <span
                      class="badges bg-lightred"
                      v-else-if="record.Status === 'Pending'"
                      >{{ record.Status }}</span
                    >
                    <span
                      class="badges bg-lightyellow"
                      v-else="record.Status === 'Ordered'"
                      >{{ record.Status }}</span
                    ></template
                  >
                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editpurchase">
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
    title: "Supplier Name",
    dataIndex: "SupplierName",
    sorter: {
      compare: (a, b) => {
        a = a.SupplierName.toLowerCase();
        b = b.SupplierName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Reference",
    dataIndex: "Reference",
    sorter: (a, b) => a.Reference.localeCompare(b.Reference),
  },
  {
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => {
        a = a.Date.toLowerCase();
        b = b.Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "pay",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Grand Total",
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
    title: "Paid",
    dataIndex: "Paid",
    sorter: {
      compare: (a, b) => {
        a = a.Paid.toLowerCase();
        b = b.Paid.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Due",
    dataIndex: "Due",
    sorter: {
      compare: (a, b) => {
        a = a.Due.toLowerCase();
        b = b.Due.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payment Status",
    dataIndex: "PaymentStatus",
    key: "id",
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
    SupplierName: "Apex Computers",
    Reference: "PT001",
    Date: "19 Nov 2022",
    Status: "Received",
    GrandTotal: "550",
    Paid: "120",
    Due: "550",
    PaymentStatus: "Paid",
  },
  {
    id: 2,
    SupplierName: "Modern Automobile",
    Reference: "PT002",
    Date: "19 Nov 2022",
    Status: "Received",
    GrandTotal: "410",
    Paid: "410",
    Due: "410",
    PaymentStatus: "Paid",
  },
  {
    id: 3,
    SupplierName: "AIM Infotech",
    Reference: "PT003",
    Date: "19 Nov 2022",
    Status: "Pending",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Unpaid",
  },
  {
    id: 4,
    SupplierName: "Best Power Tools",
    Reference: "PT004",
    Date: "19 Nov 2022",
    Status: "Received",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Unpaid",
  },
  {
    id: 5,
    SupplierName: "Best Power Tools",
    Reference: "PT005",
    Date: "19 Nov 2022",
    Status: "Pending",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Unpaid",
  },
  {
    id: 6,
    SupplierName: "Best Power Tools",
    Reference: "PT006",
    Date: "19 Nov 2022",
    Status: "Received",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Paid",
  },
  {
    id: 7,
    SupplierName: "Apex Computers",
    Reference: "PT007",
    Date: "19 Nov 2022",
    Status: "Ordered",
    GrandTotal: "1000",
    Paid: "500",
    Due: "1000",
    PaymentStatus: "Partial",
  },
  {
    id: 8,
    SupplierName: "Apex Computers",
    Reference: "PT008",
    Date: "19 Nov 2022",
    Status: "Received",
    GrandTotal: "550",
    Paid: "120",
    Due: "550",
    PaymentStatus: "Paid",
  },
  {
    id: 9,
    SupplierName: "Modern Automobile",
    Reference: "PT009",
    Date: "19 Nov 2022",
    Status: "Received",
    GrandTotal: "410",
    Paid: "410",
    Due: "410",
    PaymentStatus: "Paid",
  },
  {
    id: 10,
    SupplierName: "AIM Infotech",
    Reference: "PT010",
    Date: "19 Nov 2022",
    Status: "Pending",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Unpaid",
  },
  {
    id: 11,
    SupplierName: "Best Power Tools",
    Reference: "PT011",
    Date: "19 Nov 2022",
    Status: "Received",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Unpaid",
  },
  {
    id: 12,
    SupplierName: "Best Power Tools",
    Reference: "PT012",
    Date: "19 Nov 2022",
    Status: "Pending",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Unpaid",
  },
  {
    id: 13,
    SupplierName: "Best Power Tools",
    Reference: "PT013",
    Date: "19 Nov 2022",
    Status: "Received",
    GrandTotal: "210",
    Paid: "120",
    Due: "210",
    PaymentStatus: "Paid",
  },
  {
    id: 14,
    SupplierName: "Apex Computers",
    Reference: "PT014",
    Date: "19 Nov 2022",
    Status: "Ordered",
    GrandTotal: "1000",
    Paid: "500",
    Due: "1000",
    PaymentStatus: "Partial",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "PURCHASE LIST",
      title1: "Manage your purchases",
      items: [
        {
          text: "Add New Purchases",
          addname: "/addpurchase",
        },
      ],
      data,
      columns,
      startdate: currentDate,
      Choose: ["Choose Supplier", "Supplier"],
      Status: ["Choose Status", "Inprogress"],
      Payment: ["Choose Payment Status", "Payment Status"],
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
  name: "purchaselist",
};
</script>
