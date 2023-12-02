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
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Name" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Reference No" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Completed" placeholder="Completed" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
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
                      v-if="record.Status === 'Completed'"
                      >{{ record.Status }}</span
                    >
                    <span
                      class="badges bg-lightred"
                      v-else="record.Status === 'Pending'"
                      >{{ record.Status }}</span
                    ></template
                  >
                  <template v-else-if="column.key === 'pay'">
                    <span class="badges bg-lightgreen" v-if="record.Payment === 'Paid'">{{
                      record.Payment
                    }}</span>
                    <span class="badges bg-lightred" v-else="record.Payment === 'Due'">{{
                      record.Payment
                    }}</span></template
                  >
                  <template v-else-if="column.key === 'action'">
                    <div class="text-center">
                      <a
                        class="action-set"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <router-link to="sales-details" class="dropdown-item"
                            ><img
                              src="../../../assets/img/icons/eye1.svg"
                              class="me-2"
                              alt="img"
                            />Sale Detail</router-link
                          >
                        </li>
                        <li>
                          <router-link to="edit-sales" class="dropdown-item"
                            ><img
                              src="../../../assets/img/icons/edit.svg"
                              class="me-2"
                              alt="img"
                            />Edit Sale</router-link
                          >
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#showpayment"
                            ><img
                              src="../../../assets/img/icons/dollar-square.svg"
                              class="me-2"
                              alt="img"
                            />Show Payments</a
                          >
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#createpayment"
                            ><img
                              src="../../../assets/img/icons/plus-circle.svg"
                              class="me-2"
                              alt="img"
                            />Create Payment</a
                          >
                        </li>
                        <li>
                          <a href="ja  vascript:void(0);" class="dropdown-item"
                            ><img
                              src="../../../assets/img/icons/download.svg"
                              class="me-2"
                              alt="img"
                            />Download pdf</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item confirm-text"
                            ><img
                              src="../../../assets/img/icons/delete1.svg"
                              class="me-2"
                              alt="img"
                            />Delete Sale</a
                          >
                        </li>
                      </ul>
                    </div>
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
  <saleslistmodal></saleslistmodal>
</template>
<script>
const columns = [
  {
    sorter: true,
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
    title: "Customer Name",
    dataIndex: "CustomerName",
    sorter: (a, b) => a.CustomerName.localeCompare(b.CustomerName),
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
    title: "Payment",
    dataIndex: "Payment",
    key: "pay",
    sorter: {
      compare: (a, b) => {
        a = a.Payment.toLowerCase();
        b = b.Payment.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total",
    dataIndex: "Total",
    sorter: {
      compare: (a, b) => {
        a = a.Total.toLowerCase();
        b = b.Total.toLowerCase();
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
    title: "Biller",
    dataIndex: "Biller",
    sorter: {
      compare: (a, b) => {
        a = a.Biller.toLowerCase();
        b = b.Biller.toLowerCase();
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
    Date: "walk-in-customer",
    CustomerName: "19 Nov 2022",
    Reference: "SL0101",
    Status: "Completed",
    Payment: "Paid",
    Total: "0.00",
    Paid: "0.00",
    Due: "100.00",
    Biller: "Admin",
  },
  {
    id: 2,
    Date: "walk-in-customer",
    CustomerName: "19 Nov 2022",
    Reference: "SL0102",
    Status: "Completed",
    Payment: "Paid",
    Total: "0.00",
    Paid: "0.00",
    Due: "100.00",
    Biller: "Admin",
  },
  {
    id: 3,
    Date: "walk-in-customer",
    CustomerName: "19 Nov 2022",
    Reference: "SL0103",
    Status: "Completed",
    Payment: "Paid",
    Total: "0.00",
    Paid: "100.00",
    Due: "0.00",
    Biller: "Admin",
  },
  {
    id: 4,
    Date: "Fred C. Rasmussen",
    CustomerName: "19 Nov 2022",
    Reference: "SL0104",
    Status: "Pending",
    Payment: "Due",
    Total: "0.00",
    Paid: "100.00",
    Due: "0.00",
    Biller: "Admin",
  },
  {
    id: 5,
    Date: "Thomas M. Martin",
    CustomerName: "19 Nov 2022",
    Reference: "SL0105",
    Status: "Pending",
    Payment: "Due",
    Total: "0.00",
    Paid: "0.00",
    Due: "100.00",
    Biller: "Admin",
  },
  {
    id: 6,
    Date: "Thomas M. Martin",
    CustomerName: "19 Nov 2022",
    Reference: "SL0106",
    Status: "Completed",
    Payment: "Paid",
    Total: "0.00",
    Paid: "0.00",
    Due: "100.00",
    Biller: "Admin",
  },
  {
    id: 7,
    Date: "walk-in-customer",
    CustomerName: "19 Nov 2022",
    Reference: "SL0107",
    Status: "Completed",
    Payment: "Paid",
    Total: "0.00",
    Paid: "0.00",
    Due: "100.00",
    Biller: "Admin",
  },
  {
    id: 8,
    Date: "walk-in-customer",
    CustomerName: "19 Nov 2022",
    Reference: "SL0108",
    Status: "Pending",
    Payment: "Due",
    Total: "0.00",
    Paid: "100.00",
    Due: "0.00",
    Biller: "Admin",
  },
  {
    id: 9,
    Date: "walk-in-customer",
    CustomerName: "19 Nov 2022",
    Reference: "SL0109",
    Status: "Pending",
    Payment: "Due",
    Total: "0.00",
    Paid: "100.00",
    Due: "0.00",
    Biller: "Admin",
  },
  {
    id: 10,
    Date: "walk-in-customer",
    CustomerName: "19 Nov 2022",
    Reference: "SL0110",
    Status: "Pending",
    Payment: "Due",
    Total: "0.00",
    Paid: "100.00",
    Due: "0.00",
    Biller: "Admin",
  },
  {
    id: 11,
    Date: "walk-in-customer",
    CustomerName: "19 Nov 2022",
    Reference: "SL0111",
    Status: "Pending",
    Payment: "Due",
    Total: "0.00",
    Paid: "0.00",
    Due: "0.00",
    Biller: "Admin",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Sales List",
      title1: "Manage your sales",
      items: [
        {
          text: "Add Sales",
          addname: "/add-sales",
        },
      ],
      data,
      columns,
      Completed: ["Completed", "Paid"],
    };
  },
  name: "saleslist",
};
</script>
