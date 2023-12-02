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
                  <template v-if="column.key === 'img'">
                    <div class="productimgname">
                      <a href="javascript:void(0);" class="product-img">
                        <img
                          :src="require('../../../assets/img/customer/' + record.img)"
                          alt="product"
                        />
                      </a></div
                  ></template>
                  <template v-else-if="column.key === 'id'">
                    <div
                      class="status-toggle d-flex justify-content-between align-items-center"
                    >
                      <input
                        type="checkbox"
                        :id="record.userid"
                        class="check"
                        :checked="record.checked"
                      />
                      <label :for="record.userfor" class="checktoggle">checkbox</label>
                    </div></template
                  >

                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="edituser">
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
  <userlistmodal></userlistmodal>
</template>
<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "Profile",
    dataIndex: "img",
    key: "img",
    sorter: {
      compare: (a, b) => {
        a = a.img.toLowerCase();
        b = b.img.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "First name",
    dataIndex: "fname",
    sorter: (a, b) => a.fname.localeCompare(b.fname),
  },
  {
    title: "Last name",
    dataIndex: "lname",
    sorter: {
      compare: (a, b) => {
        a = a.lname.toLowerCase();
        b = b.lname.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "User name",
    dataIndex: "username",
    sorter: {
      compare: (a, b) => {
        a = a.username.toLowerCase();
        b = b.username.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "phone",
    sorter: {
      compare: (a, b) => {
        a = a.phone.toLowerCase();
        b = b.phone.toLowerCase();
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
    key: "id",
    sorter: true,
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
    img: "customer1.jpg",
    fname: "Thomas",
    lname: "Thomas",
    username: "Thomas21",
    phone: "+12163547758",
    email: "thomas@example.com",
    userid: "user1",
    userfor: "user1",
  },
  {
    id: 2,
    img: "customer2.jpg",
    fname: "Benjamin",
    lname: "Franklin",
    username: "504Benjamin",
    phone: "123-456-888",
    email: "customer@example.com",
    userid: "user2",
    userfor: "user2",
    checked: "checked",
  },
  {
    id: 3,
    img: "customer3.jpg",
    fname: "James",
    lname: "James",
    username: "James 524",
    phone: "+12163547758",
    email: "james@example.com",
    userid: "user3",
    userfor: "user3",
    checked: "checked",
  },
  {
    id: 4,
    img: "customer4.jpg",
    fname: "Bruklin",
    lname: "Bruklin",
    username: "Bruklin2022",
    phone: "123-456-8888",
    email: "bruklin@example.com",
    userid: "user4",
    userfor: "user4",
    checked: "checked",
  },
  {
    id: 5,
    img: "customer5.jpg",
    fname: "Franklin",
    lname: "Jacob",
    username: "BeverlyWIN25",
    phone: "+12163547758",
    email: "Beverly@example.com",
    userid: "user5",
    userfor: "user5",
  },
  {
    id: 6,
    img: "customer6.jpg",
    fname: "B. Huber",
    lname: "Jacob",
    username: "BeverlyWIN25",
    phone: "+12163547758",
    email: "Huber@example.com",
    userid: "user6",
    userfor: "user6",
  },
  {
    id: 7,
    img: "customer7.jpg",
    fname: "Alwin",
    lname: "Alwin",
    username: "Alwin243",
    phone: "+12163547758",
    email: "customer@example.com",
    userid: "user7",
    userfor: "user7",
  },
  {
    id: 8,
    img: "customer8.jpg",
    fname: "Fred john",
    lname: "john",
    username: "FredJ25",
    phone: "+12163547758",
    email: "john@example.com",
    userid: "user15",
    userfor: "user15",
  },
  {
    id: 9,
    img: "customer1.jpg",
    fname: "Rasmussen",
    lname: "Gothic",
    username: "FredJ25",
    phone: "+12163547758",
    email: "Rasmussen@example.com",
    userid: "user9",
    userfor: "user9",
    checked: "checked",
  },
  {
    id: 10,
    img: "customer1.jpg",
    fname: "Rasmussen",
    lname: "Gothic",
    username: "FredJ25",
    phone: "+12163547758",
    email: "Rasmussen@example.com",
    userid: "user10",
    userfor: "user10",
    checked: "checked",
  },
  {
    id: 11,
    img: "customer2.jpg",
    fname: "Grace",
    lname: "Halena",
    username: "Grace2022",
    phone: "+12163547758",
    email: "customer@example.com",
    userid: "user18",
    userfor: "user18",
    checked: "checked",
  },
  {
    id: 12,
    img: "customer3.jpg",
    fname: "Rasmussen",
    lname: "Gothic",
    username: "Cras56",
    phone: "+12163547758",
    email: "Rasmussen@example.com",
    userid: "user19",
    userfor: "user19",
    checked: "checked",
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
          addname: "/adduser",
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
  name: "userlist",
};
</script>
