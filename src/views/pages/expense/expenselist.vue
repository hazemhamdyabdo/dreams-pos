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
                  <a class="btn btn-searchset">
                    <img src="../../../assets/img/icons/search-white.svg" alt="img" />
                  </a>
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
                          class="picker"
                          placeholder="Choose Date"
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
                      <input type="text" placeholder="Enter Reference" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Category" placeholder="Choose Category" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Status" placeholder="Choose Status" />
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
                    <span
                      class="badges bg-lightgreen"
                      v-if="record.Status === 'Active'"
                      >{{ record.Status }}</span
                    >
                    <span
                      class="badges bg-lightred"
                      v-else="record.Status === 'In Active'"
                      >{{ record.Status }}</span
                    ></template
                  >
                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editexpense">
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
    title: "Category name",
    dataIndex: "Categoryname",
    sorter: {
      compare: (a, b) => {
        a = a.Categoryname.toLowerCase();
        b = b.Categoryname.toLowerCase();
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
    title: "Amount",
    dataIndex: "Amount",
    key: "pay",
    sorter: true,
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
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    id: "1",
    Categoryname: "Employee Benefits",
    Reference: "PT001",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 120,
    Description: "Employee Vehicle",
  },
  {
    id: "2",
    Categoryname: "Foods & Snacks",
    Reference: "PT002",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 250,
    Description: "Employee Foods",
  },
  {
    id: "3",
    Categoryname: "Entertainment",
    Reference: "PT003",
    Date: "19 Nov 2022",
    Status: "In Active",
    Amount: 120,
    Description: "Office Vehicle",
  },
  {
    id: "4",
    Categoryname: "Office Expenses & Postage",
    Reference: "PT004",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 320,
    Description: "Employee Foods",
  },
  {
    id: "5",
    Categoryname: "Employee Benefits",
    Reference: "PT005",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 250,
    Description: "Employee Vehicle",
  },
  {
    id: "6",
    Categoryname: "Foods & Snacks",
    Reference: "PT006",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 250,
    Description: "Employee Foods",
  },
  {
    id: "7",
    Categoryname: "Entertainment",
    Reference: "PT007",
    Date: "19 Nov 2022",
    Status: "In Active",
    Amount: 120,
    Description: "Office Vehicle",
  },
  {
    id: "8",
    Categoryname: "Office Expenses & Postage",
    Reference: "PT008",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 320,
    Description: "Employee Foods",
  },
  {
    id: "9",
    Categoryname: "Employee Benefits",
    Reference: "PT009",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 120,
    Description: "Employee Vehicle",
  },
  {
    id: "10",
    Categoryname: "Foods & Snacks",
    Reference: "PT010",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 250,
    Description: "Employee Foods",
  },
  {
    id: "11",
    Categoryname: "Entertainment",
    Reference: "PT011",
    Date: "19 Nov 2022",
    Status: "In Active",
    Amount: 120,
    Description: "Office Vehicle",
  },
  {
    id: "12",
    Categoryname: "Office Expenses & Postage",
    Reference: "PT012",
    Date: "19 Nov 2022",
    Status: "Active",
    Amount: 320,
    Description: "Employee Foods",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Expenses LIST",
      title1: "Manage your purchases",
      items: [
        {
          text: "Add New Expense",
          addname: "/createexpense",
        },
      ],
      data,
      columns,
      startdate: currentDate,
      Category: ["Choose Category", "Computers"],
      Status: ["Choose Status", "Completed", "Inprogress"],
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

  name: "expenselist",
};
</script>
