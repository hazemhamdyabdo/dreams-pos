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
                      <input type="text" placeholder="Store Name" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Disable" placeholder="Disable" />
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
                    <div
                      class="status-toggle d-flex justify-content-between align-items-center"
                    >
                      <input
                        type="checkbox"
                        :id="record.userid"
                        class="check"
                        :checked="record.checked"
                      />
                      <label :for="record.userfor" class="checktoggle">{{
                        record.Status
                      }}</label>
                    </div></template
                  >

                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editstore">
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
  <storelistmodal></storelistmodal>
</template>
<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "Store name",
    dataIndex: "Storename",
    sorter: {
      compare: (a, b) => {
        a = a.Storename.toLowerCase();
        b = b.Storename.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "User name",
    dataIndex: "Username",
    sorter: (a, b) => a.Username.localeCompare(b.Username),
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => {
        a = a.Phone.toLowerCase();
        b = b.Phone.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => {
        a = a.email.toLowerCase();
        b = b.email.toLowerCase();
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
    Storename: "Thomas",
    Username: "Thomas21",
    Phone: "12163547758",
    email: "thomas@example.com",
    Status: "checkbox",
    userid: "user1",
    userfor: "user1",
  },
  {
    id: 2,
    Storename: "Benjamin",
    Username: "504Benjamin",
    Phone: "123-456-888",
    email: "customer@example.com",
    Status: "checkbox",
    userid: "user2",
    userfor: "user2",
    checked: "checked",
  },
  {
    id: 3,
    Storename: "James",
    Username: "James 524",
    Phone: "12163547758",
    email: "james@example.com",
    Status: "checkbox",
    userid: "user3",
    userfor: "user3",
    checked: "checked",
  },
  {
    id: 4,
    Storename: "Bruklin",
    Username: "Bruklin2022",
    Phone: "123-456-888",
    email: "bruklin@example.com",
    Status: "checkbox",
    userid: "user4",
    userfor: "user4",
    checked: "checked",
  },
  {
    id: 5,
    Storename: "Franklin",
    Username: "BeverlyWIN25",
    Phone: "12163547758",
    email: "Beverly@example.com",
    Status: "checkbox",
    userid: "user5",
    userfor: "user5",
  },
  {
    id: 6,
    Storename: "B. Huber",
    Username: "BeverlyWIN25",
    Phone: "12163547758",
    email: "Huber@example.com",
    Status: "checkbox",
    userid: "user6",
    userfor: "user6",
  },
  {
    id: 7,
    Storename: "Alwin",
    Username: "Alwin243",
    Phone: "12163547758",
    email: "customer@example.com",
    Status: "checkbox",
    userid: "user7",
    userfor: "user7",
  },
  {
    id: 8,
    Storename: "Fred john",
    Username: "FredJ25",
    Phone: "12163547758",
    email: "john@example.com",
    Status: "checkbox",
    userid: "user8",
    userfor: "user8",
  },
  {
    id: 9,
    Storename: "Rasmussen",
    Username: "Cras56",
    Phone: "12163547758",
    email: "Rasmussen@example.com",
    Status: "checkbox",
    userid: "user9",
    userfor: "user9",
    checked: "checked",
  },
  {
    id: 10,
    Storename: "Grace",
    Username: "Grace2022",
    Phone: "12163547758",
    email: "customer@example.com",
    Status: "checkbox",
    userid: "user10",
    userfor: "user10",
    checked: "checked",
  },
  {
    id: 11,
    Storename: "Rasmussen",
    Username: "Cras56",
    Phone: "12163547758",
    email: "Rasmussen@example.com",
    Status: "checkbox",
    userid: "user11",
    userfor: "user11",
    checked: "checked",
  },
  {
    id: 12,
    Storename: "Grace",
    Username: "Grace2022",
    Phone: "12163547758",
    email: "customer@example.com",
    Status: "checkbox",
    userid: "user12",
    userfor: "user12",
    checked: "checked",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Store List",
      title1: "Manage your Store",
      items: [
        {
          text: "Add Store",
          addname: "/addstore",
        },
      ],
      data,
      columns,
      Disable: ["Disable", "Enable"],
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
  name: "storelist",
};
</script>
