<template>
  <div class="tab-pane fade" id="payment" role="tabpanel">
    <div class="table-top">
      <div class="search-set">
        <div class="search-path">
          <a
            class="btn btn-filter"
            id="filter_search2"
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
      id="filter_inputs2"
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
    title: "DATE",
    dataIndex: "DATE",
    sorter: (a, b) => a.DATE.localeCompare(b.DATE),
  },
  {
    title: "Purchase",
    dataIndex: "Purchase",
    sorter: {
      compare: (a, b) => {
        a = a.Purchase.toLowerCase();
        b = b.Purchase.toLowerCase();
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
    sorter: true,
  },
  {
    title: "Paid",
    dataIndex: "Paid",
    sorter: true,
  },
  {
    title: "paid by",
    dataIndex: "paidby",
    sorter: {
      compare: (a, b) => {
        a = a.paidby.toLowerCase();
        b = b.paidby.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: 1,
    DATE: "2022-03-10",
    Purchase: "PR_1001",
    Reference: "INV/PR_1001",
    Suppliername: "Thomas21",
    Amount: 1500.0,
    Paid: 1500.0,
    paidby: "Cash",
  },
  {
    id: 2,
    DATE: "2022-03-10",
    Purchase: "PR_1002",
    Reference: "INV/PR_1002",
    Suppliername: "504Benjamin",
    Amount: 10.0,
    Paid: 10.0,
    paidby: "Cash",
  },
  {
    id: 3,
    DATE: "2022-03-10",
    Purchase: "PR_1003",
    Reference: "INV/PR_1003",
    Suppliername: "James 524",
    Amount: 10.0,
    Paid: 10.0,
    paidby: "Cash",
  },
  {
    id: 4,
    DATE: "2022-03-10",
    Purchase: "PR_1004",
    Reference: "INV/PR_1004",
    Suppliername: "Bruklin2022",
    Amount: 10.0,
    Paid: 10.0,
    paidby: "Cash",
  },
  {
    id: 5,
    DATE: "2022-03-10",
    Purchase: "PR_1005",
    Reference: "INV/PR_1005",
    Suppliername: "BeverlyWIN25",
    Amount: 150.0,
    Paid: 150.0,
    paidby: "Cash",
  },
  {
    id: 6,
    DATE: "2022-03-10",
    Purchase: "PR_1006",
    Reference: "INV/PR_1006",
    Suppliername: "BHR256",
    Amount: 100.0,
    Paid: 100.0,
    paidby: "Cash",
  },
  {
    id: 7,
    DATE: "2022-03-10",
    Purchase: "PR_1007",
    Reference: "INV/PR_1007",
    Suppliername: "Alwin243",
    Amount: 5.0,
    Paid: 5.0,
    paidby: "Cash",
  },
  {
    id: 8,
    DATE: "2022-03-10",
    Purchase: "PR_1008",
    Reference: "INV/PR_1008",
    Suppliername: "FredJ25",
    Amount: 10.0,
    Paid: 10.0,
    paidby: "Cash",
  },
  {
    id: 9,
    DATE: "2022-03-10",
    Purchase: "PR_1009",
    Reference: "INV/PR_1009",
    Suppliername: "Cras56",
    Amount: 15,
    Paid: 15,
    paidby: "Cash",
  },
  {
    id: 10,
    DATE: "2022-03-10",
    Purchase: "PR_1010",
    Reference: "INV/PR_1010",
    Suppliername: "Cras56",
    Amount: 15,
    Paid: 15,
    paidby: "Cash",
  },
  {
    id: 11,
    DATE: "2022-03-10",
    Purchase: "PR_1011",
    Reference: "INV/PR_1011",
    Suppliername: "FredJ25",
    Amount: 10.0,
    Paid: 10.0,
    paidby: "Cash",
  },
  {
    id: 12,
    DATE: "2022-03-10",
    Purchase: "PR_1012",
    Reference: "INV/PR_1012",
    Suppliername: "Cras56",
    Amount: 15,
    Paid: 15,
    paidby: "Cash",
  },
  {
    id: 13,
    DATE: "2022-03-10",
    Purchase: "PR_1013",
    Reference: "INV/PR_1013",
    Suppliername: "Cras56",
    Amount: 15,
    Paid: 15,
    paidby: "Cash",
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
