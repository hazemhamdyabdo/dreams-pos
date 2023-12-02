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
                    <span class="badges bg-lightgreen" v-if="record.Status === 'Paid'">{{
                      record.Status
                    }}</span>
                    <span
                      class="badges bg-lightred"
                      v-else-if="record.Status === 'Overdue'"
                      >{{ record.Status }}</span
                    >
                    <span
                      class="badges bg-lightgrey"
                      v-else="record.Status === 'Unpaid'"
                      >{{ record.Status }}</span
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
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const columns = [
  {
    sorter: true,
  },

  {
    title: "Invoice number",
    dataIndex: "Invoicenumber",
    sorter: (a, b) => a.Invoicenumber.localeCompare(b.Invoicenumber),
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
    title: "Due date",
    dataIndex: "Duedate",
    sorter: (a, b) => a.Duedate.localeCompare(b.Duedate),
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
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
];
const data = [
  {
    id: "1",
    Invoicenumber: "INV001",
    Customername: "Thomas21",
    Duedate: "29-03-2022",
    Amount: "1500.00",
    Paid: "1500.00",
    Amountdue: "1500.00",
    Status: "Paid",
  },
  {
    id: "2",
    Invoicenumber: "INV002",
    Customername: "504Benjamin",
    Duedate: "29-03-2022",
    Amount: "10.00",
    Paid: "10.00",
    Amountdue: "10.00",
    Status: "Overdue",
  },
  {
    id: "3",
    Invoicenumber: "INV003",
    Customername: "James 524",
    Duedate: "29-03-2022",
    Amount: "10.00",
    Paid: "10.00",
    Amountdue: "10.00",
    Status: "Overdue",
  },
  {
    id: "4",
    Invoicenumber: "INV004",
    Customername: "Bruklin2022",
    Duedate: "29-03-2022",
    Amount: "10.00",
    Paid: "10.00",
    Amountdue: "10.00",
    Status: "Paid",
  },
  {
    id: "5",
    Invoicenumber: "INV005",
    Customername: "BeverlyWIN25",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Overdue",
  },
  {
    id: "6",
    Invoicenumber: "INV006",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Paid",
  },
  {
    id: "7",
    Invoicenumber: "INV007",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Paid",
  },
  {
    id: "8",
    Invoicenumber: "INV008",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Unpaid",
  },
  {
    id: "9",
    Invoicenumber: "INV009",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Unpaid",
  },
  {
    id: "10",
    Invoicenumber: "INV0010",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Unpaid",
  },
  {
    id: "11",
    Invoicenumber: "INV007",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Paid",
  },
  {
    id: "12",
    Invoicenumber: "INV008",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Unpaid",
  },
  {
    id: "13",
    Invoicenumber: "INV009",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Unpaid",
  },
  {
    id: "14",
    Invoicenumber: "INV0010",
    Customername: "BHR256",
    Duedate: "29-03-2022",
    Amount: "150.00",
    Paid: "150.00",
    Amountdue: "150.00",
    Status: "Unpaid",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Invoice Report",
      title1: "Manage your Invoice Report",
      startdate: currentDate,
      data,
      columns,
    };
  },
  name: "invoicereport",
};
</script>
