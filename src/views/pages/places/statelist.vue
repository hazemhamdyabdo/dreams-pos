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
                      <vue-select :options="Choose" placeholder="Choose State" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Country" placeholder="Choose Country" />
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
                    <router-link class="me-3" to="editstate">
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
  <statelistmodal></statelistmodal>
</template>
<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "State Name",
    dataIndex: "StateName",
    sorter: {
      compare: (a, b) => {
        a = a.StateName.toLowerCase();
        b = b.StateName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Country Name",
    dataIndex: "CountryName",
    sorter: (a, b) => a.CountryName.localeCompare(b.CountryName),
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
    StateName: "Beijing",
    CountryName: "China",
    Status: "checkbox",
    userid: "user1",
    userfor: "user1",
  },
  {
    id: 2,
    StateName: "Newyork",
    CountryName: "USA",
    Status: "checkbox",
    userid: "user2",
    userfor: "user2",
    checked: "checked",
  },
  {
    id: 3,
    StateName: "Athens",
    CountryName: "Greece",
    Status: "checkbox",
    userid: "user3",
    userfor: "user3",
    checked: "checked",
  },
  {
    id: 4,
    StateName: "Thailand",
    CountryName: "Bangkok",
    Status: "checkbox",
    userid: "user4",
    userfor: "user4",
    checked: "checked",
  },
  {
    id: 5,
    StateName: "Phuket island",
    CountryName: "Mueang Phuket",
    Status: "checkbox",
    userid: "user5",
    userfor: "user5",
  },
  {
    id: 6,
    StateName: "Germany",
    CountryName: "Berlin",
    Status: "checkbox",
    userid: "user6",
    userfor: "user6",
  },
  {
    id: 7,
    StateName: "Angola",
    CountryName: "Luanda",
    Status: "checkbox",
    userid: "user7",
    userfor: "user7",
  },
  {
    id: 8,
    StateName: "Albania",
    CountryName: "Albania",
    Status: "checkbox",
    userid: "user8",
    userfor: "user8",
  },
  {
    id: 9,
    StateName: "Turkey",
    CountryName: "Ankara",
    Status: "checkbox",
    userid: "user9",
    userfor: "user9",
    checked: "checked",
  },
  {
    id: 10,
    StateName: "Phuket island",
    CountryName: "Mueang Phuket",
    Status: "checkbox",
    userid: "user10",
    userfor: "user10",
  },
  {
    id: 11,
    StateName: "Germany",
    CountryName: "Berlin",
    Status: "checkbox",
    userid: "user11",
    userfor: "user11",
  },
  {
    id: 12,
    StateName: "Angola",
    CountryName: "Luanda",
    Status: "checkbox",
    userid: "user12",
    userfor: "user12",
  },
  {
    id: 13,
    StateName: "Albania",
    CountryName: "Albania",
    Status: "checkbox",
    userid: "user15",
    userfor: "user15",
  },
  {
    id: 14,
    StateName: "Turkey",
    CountryName: "Ankara",
    Status: "checkbox",
    userid: "user17",
    userfor: "user17",
    checked: "checked",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "State List",
      title1: "Manage your State",
      items: [
        {
          text: "Add State",
          addname: "/newstate",
        },
      ],
      data,
      columns,
      Choose: ["Choose State", "Beijing", "Newyork", "Greece"],
      Country: ["Choose Country", "China", "USA", "Athens"],
      Status: ["Choose Status", "Disable", "Enable"],
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
  name: "statelist",
};
</script>
