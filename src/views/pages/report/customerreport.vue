<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />

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
                      <div class="input-groupicon">
                        <datepicker
                          v-model="startdate"
                          placeholder="Choose Date"
                          class="picker"
                          :editable="true"
                          :clearable="false"
                        />
                        <div class="addonset">
                          <img src="../../../assets/img/icons/calendars.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <div class="input-groupicon">
                        <datepicker
                          v-model="startdate"
                          placeholder="Choose Date"
                          class="picker"
                          :editable="true"
                          :clearable="false"
                        />
                        <div class="addonset">
                          <img src="../../../assets/img/icons/calendars.svg" alt="img" />
                        </div>
                      </div>
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
                  <template v-if="column.key === 'status'">
                    <span class="badges bg-lightgreen">{{
                      record.Status
                    }}</span></template
                  >
                  <template v-else-if="column.key === 'id'">
                    <span
                      class="badges bg-lightgreen"
                      v-if="record.PaymentStatus === 'Paid'"
                      >{{ record.PaymentStatus }}</span
                    >
                    <span
                      class="badges bg-lightred"
                      v-else-if="record.PaymentStatus === 'Overdue'"
                      >{{ record.PaymentStatus }}</span
                    >
                    <span
                      class="badges bg-lightgrey"
                      v-else="record.PaymentStatus === 'Unpaid'"
                      >{{ record.PaymentStatus }}</span
                    ></template
                  >
                </template>
              </a-table>
            </div>
          </div>
        </div>
        <!-- /product list -->
      </div>
    </div>
  </div>
  <searchpart></searchpart>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const columns = [
  {
    sorter: true,
  },

  {
    title: "Customer code",
    dataIndex: "code",
    sorter: (a, b) => a.code.localeCompare(b.code),
  },
  {
    title: "Customer name",
    dataIndex: "Customername",
    sorter: {
      compare: (a, b) => {
        a = a.Customername.toLowerCase();
        b = b.Customername.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: (a, b) => a.Amount.localeCompare(b.Amount),
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
    title: "Amount due",
    dataIndex: "Amountdue",
    sorter: {
      compare: (a, b) => {
        a = a.Amountdue.toLowerCase();
        b = b.Amountdue.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
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
        a = a.GrandTotal.toLowerCase();
        b = b.GrandTotal.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: 1,
    code: "CT_1001",
    Customername: "Thomas21",
    Amount: "1500.00",
    Paid: "1500.00",
    Amountdue: "1500.00",
    Status: "Completed",
    PaymentStatus: "Paid",
  },
  {
    id: 2,
    code: "CT_1002",
    Customername: "504Benjamin",
    Amount: "10.00",
    Paid: "10.00",
    Amountdue: "10.00",
    Status: "Completed",
    PaymentStatus: "Overdue",
  },
  {
    id: 3,
    code: "CT_1003",
    Customername: "James 524",
    Amount: "10.00",
    Paid: "10.00",
    Amountdue: "10.00",
    Status: "Completed",
    PaymentStatus: "Overdue",
  },
  {
    id: 4,
    code: "CT_1004",
    Customername: "Bruklin2022",
    Amount: "10.00",
    Paid: "10.00",
    Amountdue: "10.00",
    Status: "Completed",
    PaymentStatus: "Paid",
  },
  {
    id: 5,
    code: "CT_1005",
    Customername: "BeverlyWIN25",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Completed",
    PaymentStatus: "Overdue",
  },
  {
    id: 6,
    code: "CT_1006",
    Customername: "BHR256",
    Amount: "100.00",
    Paid: "100.00",
    Amountdue: "100.00",
    Status: "Completed",
    PaymentStatus: "Overdue",
  },
  {
    id: 7,
    code: "CT_1007",
    Customername: "Alwin243",
    Amount: "5.00",
    Paid: "5.00",
    Amountdue: "5.00",
    Status: "Completed",
    PaymentStatus: "Paid",
  },
  {
    id: 8,
    code: "CT_1008",
    Customername: "FredJ25",
    Amount: "10.00",
    Paid: "10.00",
    Amountdue: "10.00",
    Status: "Completed",
    PaymentStatus: "Unpaid",
  },
  {
    id: 9,
    code: "CT_1009",
    Customername: "FredJ25",
    Amount: "10.00",
    Paid: "10.00",
    Amountdue: "10.00",
    Status: "Completed",
    PaymentStatus: "Unpaid",
  },
  {
    id: 10,
    code: "CT_1010",
    Customername: "Cras56",
    Amount: "15.00",
    Paid: "15.00",
    Amountdue: "15.00",
    Status: "Completed",
    PaymentStatus: "Unpaid",
  },
  {
    id: 11,
    code: "CT_1011",
    Customername: "Grace2022",
    Amount: "15.00",
    Paid: "15.00",
    Amountdue: "15.00",
    Status: "Completed",
    PaymentStatus: "Unpaid",
  },
  {
    id: 12,
    code: "CT_1011",
    Customername: "Cras56",
    Amount: "15.00",
    Paid: "15.00",
    Amountdue: "15.00",
    Status: "Completed",
    PaymentStatus: "Unpaid",
  },
  {
    id: 13,
    code: "CT_1012",
    Customername: "Grace2022",
    Amount: "15.00",
    Paid: "15.00",
    Amountdue: "15.00",
    Status: "Completed",
    PaymentStatus: "Unpaid",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Customer Report",
      title1: "Manage your Customer Report",
      startdate: currentDate,
      data,
      columns,
    };
  },
  name: "customerreport",
};
</script>
