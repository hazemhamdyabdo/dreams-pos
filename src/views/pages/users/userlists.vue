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
                      <input type="text" placeholder="Enter User Name" />
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
                    <span
                      class="bg-lightgreen badges"
                      v-if="record.Status === 'Active'"
                      >{{ record.Status }}</span
                    >
                    <span
                      class="bg-lightred badges"
                      v-else="record.Status === 'Restricted'"
                      >{{ record.Status }}</span
                    ></template
                  >
                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="newuseredit">
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
    title: "User name",
    dataIndex: "Username",
    sorter: {
      compare: (a, b) => {
        a = a.Username.toLowerCase();
        b = b.Username.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: (a, b) => a.Phone.localeCompare(b.Phone),
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
    title: "Role",
    dataIndex: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created On",
    dataIndex: "CreatedOn",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedOn.toLowerCase();
        b = b.CreatedOn.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
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
    Username: "Thomas",
    Phone: "+12163547758",
    email: "thomas@example.com",
    Role: "Admin",
    CreatedOn: "3/15/2022",
    Status: "Active",
  },
  {
    id: 2,
    Username: "504Benjamin",
    Phone: "123-456-888",
    email: "customer@example.com",
    Role: "Manager",
    CreatedOn: "2/27/2022",
    Status: "Restricted",
  },
  {
    id: 3,
    Username: "James 524",
    Phone: "+12163547758",
    email: "james@example.com",
    Role: "Salesman",
    CreatedOn: "2/27/2022",
    Status: "Restricted",
  },
  {
    id: 4,
    Username: "James 524",
    Phone: "+12163547758",
    email: "james@example.com",
    Role: "Salesman",
    CreatedOn: "2/27/2022",
    Status: "Restricted",
  },
  {
    id: 5,
    Username: "Bruklin2022",
    Phone: "123-456-888",
    email: "bruklin@example.com",
    Role: "Delivery Biker",
    CreatedOn: "2/27/2022",
    Status: "Active",
  },
  {
    id: 6,
    Username: "BeverlyWIN25",
    Phone: "+12163547758",
    email: "bruklin@example.com",
    Role: "Delivery Biker",
    CreatedOn: "2/27/2022",
    Status: "Active",
  },
  {
    id: 7,
    Username: "BHR256",
    Phone: "123-456-888",
    email: "Huber@example.com",
    Role: "Sales Executive",
    CreatedOn: "3/15/2022",
    Status: "Active",
  },
  {
    id: 8,
    Username: "Thomas",
    Phone: "+12163547758",
    email: "thomas@example.com",
    Role: "Admin",
    CreatedOn: "3/15/2022",
    Status: "Active",
  },
  {
    id: 9,
    Username: "504Benjamin",
    Phone: "123-456-888",
    email: "customer@example.com",
    Role: "Manager",
    CreatedOn: "2/27/2022",
    Status: "Restricted",
  },
  {
    id: 10,
    Username: "James 524",
    Phone: "+12163547758",
    email: "james@example.com",
    Role: "Salesman",
    CreatedOn: "2/27/2022",
    Status: "Restricted",
  },
  {
    id: 11,
    Username: "James 524",
    Phone: "+12163547758",
    email: "james@example.com",
    Role: "Salesman",
    CreatedOn: "2/27/2022",
    Status: "Restricted",
  },
  {
    id: 12,
    Username: "Bruklin2022",
    Phone: "123-456-888",
    email: "bruklin@example.com",
    Role: "Delivery Biker",
    CreatedOn: "2/27/2022",
    Status: "Active",
  },
  {
    id: 13,
    Username: "BeverlyWIN25",
    Phone: "+12163547758",
    email: "bruklin@example.com",
    Role: "Delivery Biker",
    CreatedOn: "2/27/2022",
    Status: "Active",
  },
  {
    id: 14,
    Username: "BHR256",
    Phone: "123-456-888",
    email: "Huber@example.com",
    Role: "Sales Executive",
    CreatedOn: "3/15/2022",
    Status: "Active",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "User List",
      title1: "Manage your User",
      items: [
        {
          text: "Add User",
          addname: "/newuser",
        },
      ],
      data,
      columns,
      startdate: currentDate,
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
  name: "userlists",
};
</script>
