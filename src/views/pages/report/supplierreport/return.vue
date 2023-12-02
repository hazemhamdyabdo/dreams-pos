<template>
  <div class="tab-pane fade" id="return" role="tabpanel">
    <div class="table-top">
      <div class="search-set">
        <div class="search-path">
          <a
            class="btn btn-filter"
            id="filter_search1"
            v-on:click="filter = !filter"
            :class="{ setclose: filter }"
          >
            <img src="../../../../assets/img/icons/filter.svg" alt="img" />
            <span><img src="../../../../assets/img/icons/closes.svg" alt="img" /></span>
          </a>
        </div>
        <div class="search-input">
          <a class="btn btn-searchset"
            ><img src="../../../../assets/img/icons/search-white.svg" alt="img"
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
              ><img src="../../../../assets/img/icons/pdf.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"
              ><img src="../../../../assets/img/icons/excel.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"
              ><img src="../../../../assets/img/icons/printer.svg" alt="img"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- /Filter -->
    <div
      class="card"
      id="filter_inputs1"
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
                  <img src="../../../../assets/img/icons/calendars.svg" alt="img" />
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
                  <img src="../../../../assets/img/icons/calendars.svg" alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-1 col-sm-6 col-12 ms-auto">
            <div class="form-group">
              <a class="btn btn-filters ms-auto"
                ><img src="../../../../assets/img/icons/search-whites.svg" alt="img"
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
            <span class="badges bg-lightgreen">{{ record.Status }}</span></template
          >
          <template v-else-if="column.key === 'id'">
            <span class="badges bg-lightgreen" v-if="record.PaumentStatus === 'Paid'">{{
              record.PaumentStatus
            }}</span>
            <span
              class="badges bg-lightred"
              v-else-if="record.PaumentStatus === 'Overdue'"
              >{{ record.PaumentStatus }}</span
            >
            <span
              class="badges bg-lightgrey"
              v-else="record.PaumentStatus === 'Unpaid'"
              >{{ record.PaumentStatus }}</span
            ></template
          >
        </template>
      </a-table>
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
    title: "Reference",
    dataIndex: "Reference",
    sorter: (a, b) => a.Reference.localeCompare(b.Reference),
  },
  {
    title: "Supplier name",
    dataIndex: "Suppliername",
    sorter: {
      compare: (a, b) => {
        a = a.Suppliername.toLowerCase();
        b = b.Suppliername.toLowerCase();
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
    Reference: "RT_1001",
    Suppliername: "Thomas21",
    Amount: 1500.0,
    Paid: 1500.0,
    Amountdue: 1500.0,
    Status: "Completed",
    PaumentStatus: "Paid",
  },
  {
    id: 2,
    Reference: "RT_1002",
    Suppliername: "504Benjamin",
    Amount: 10.0,
    Paid: 10.0,
    Amountdue: 10.0,
    Status: "Completed",
    PaumentStatus: "Overdue",
  },
  {
    id: 3,
    Reference: "RT_1003",
    Suppliername: "James 524",
    Amount: 10.0,
    Paid: 10.0,
    Amountdue: 10.0,
    Status: "Completed",
    PaumentStatus: "Overdue",
  },
  {
    id: 4,
    Reference: "RT_1004",
    Suppliername: "Bruklin2022",
    Amount: 10.0,
    Paid: 10.0,
    Amountdue: 10.0,
    Status: "Completed",
    PaumentStatus: "Paid",
  },
  {
    id: 5,
    Reference: "RT_1005",
    Suppliername: "BeverlyWIN25",
    Amount: 150.0,
    Paid: 150.0,
    Amountdue: 150.0,
    Status: "Completed",
    PaumentStatus: "Overdue",
  },
  {
    id: 6,
    Reference: "RT_1006",
    Suppliername: "BHR256",
    Amount: 100.0,
    Paid: 100.0,
    Amountdue: 100.0,
    Status: "Completed",
    PaumentStatus: "Overdue",
  },
  {
    id: 7,
    Reference: "RT_1007",
    Suppliername: "Alwin243",
    Amount: 5.0,
    Paid: 5.0,
    Amountdue: 5.0,
    Status: "Completed",
    PaumentStatus: "Paid",
  },
  {
    id: 8,
    Reference: "RT_1008",
    Suppliername: "FredJ25",
    Amount: 10.0,
    Paid: 10.0,
    Amountdue: 10.0,
    Status: "Completed",
    PaumentStatus: "Unpaid",
  },
  {
    id: 9,
    Reference: "RT_1009",
    Suppliername: "FredJ25",
    Amount: 10.0,
    Paid: 10.0,
    Amountdue: 10.0,
    Status: "Completed",
    PaumentStatus: "Unpaid",
  },
  {
    id: 10,
    Reference: "RT_1010",
    Suppliername: "Cras56",
    Amount: 15.0,
    Paid: 15.0,
    Amountdue: 15.0,
    Status: "Completed",
    PaumentStatus: "Unpaid",
  },
  {
    id: 11,
    Reference: "RT_1010",
    Suppliername: "Grace2022",
    Amount: 15.0,
    Paid: 15.0,
    Amountdue: 15.0,
    Status: "Completed",
    PaumentStatus: "Unpaid",
  },
  {
    id: 12,
    Reference: "RT_1011",
    Suppliername: "Cras56",
    Amount: 15.0,
    Paid: 15.0,
    Amountdue: 15.0,
    Status: "Completed",
    PaumentStatus: "Unpaid",
  },
  {
    id: 13,
    Reference: "RT_1012",
    Suppliername: "Grace2022",
    Amount: 15.0,
    Paid: 15.0,
    Amountdue: 15.0,
    Status: "Completed",
    PaumentStatus: "Unpaid",
  },
];
export default {
  data() {
    return {
      filter: false,
      startdate: currentDate,
      data,
      columns,
    };
  },
};
</script>
