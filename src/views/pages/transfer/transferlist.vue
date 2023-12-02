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
                      <input type="text" placeholder="Enter Reference" />
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
                      v-if="record.Status === 'Completed'"
                      >{{ record.Status }}</span
                    >
                    <span
                      class="badges bg-lightred"
                      v-else="record.Status === 'Pending'"
                      >{{ record.Status }}</span
                    ></template
                  >

                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="edittransfer">
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
    title: "Reference",
    dataIndex: "Reference",
    sorter: (a, b) => a.Reference.localeCompare(b.Reference),
  },
  {
    title: "From",
    dataIndex: "From",
    sorter: {
      compare: (a, b) => {
        a = a.From.toLowerCase();
        b = b.From.toLowerCase();
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
    title: "items",
    dataIndex: "items",
    sorter: {
      compare: (a, b) => {
        a = a.items.toLowerCase();
        b = b.items.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Grand total",
    dataIndex: "Grandtotal",
    sorter: {
      compare: (a, b) => {
        a = a.Grandtotal.toLowerCase();
        b = b.Grandtotal.toLowerCase();
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
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    Date: "19 Nov 2022",
    Reference: "TR0101",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "1500.00",
    Status: "Completed",
  },
  {
    id: 2,
    Date: "19 Nov 2022",
    Reference: "TR0102",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "45000.00",
    Status: "Completed",
  },
  {
    id: 3,
    Date: "19 Nov 2022",
    Reference: "TR0103",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "2400.00",
    Status: "Completed",
  },
  {
    id: 4,
    Date: "19 Nov 2022",
    Reference: "TR0104",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "2400.00",
    Status: "Completed",
  },
  {
    id: 5,
    Date: "19 Nov 2022",
    Reference: "TR0105",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "2400.00",
    Status: "Completed",
  },
  {
    id: 6,
    Date: "19 Nov 2022",
    Reference: "TR0106",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "8456.00",
    Status: "Completed",
  },
  {
    id: 7,
    Date: "19 Nov 2022",
    Reference: "TR0107",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "150.00",
    Status: "Completed",
  },
  {
    id: 8,
    Date: "19 Nov 2022",
    Reference: "TR0108",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "365.00",
    Status: "Pending",
  },
  {
    id: 9,
    Date: "19 Nov 2022",
    Reference: "TR0109",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "365.00",
    Status: "Pending",
  },
  {
    id: 10,
    Date: "19 Nov 2022",
    Reference: "TR01010",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "365.00",
    Status: "Pending",
  },
  {
    id: 11,
    Date: "19 Nov 2022",
    Reference: "TR0111",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "365.00",
    Status: "Pending",
  },
  {
    id: 12,
    Date: "19 Nov 2022",
    Reference: "TR0112",
    From: "Store1",
    Paid: "Store2",
    items: "10.00",
    Grandtotal: "365.00",
    Status: "Pending",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Transfer List",
      title1: "Transfer your stocks to one store another store.",
      items: [
        {
          text: "Add Transfer",
          addname: "/addtransfer",
        },
      ],
      data,
      columns,
      startdate: currentDate,
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
  name: "transferlist",
};
</script>
