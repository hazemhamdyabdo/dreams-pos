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
                    <span class="badges bg-lightgreen">{{
                      record.Status
                    }}</span></template
                  >

                  <template v-else-if="column.key === 'action'">
                    <div class="text-end">
                      <router-link class="me-3" to="editpermission">
                        <img src="../../../assets/img/icons/edit.svg" alt="img" />
                      </router-link>
                      <a
                        class="me-3 confirm-text"
                        href="javascript:void(0);"
                        @click="showAlert"
                      >
                        <img src="../../../assets/img/icons/delete.svg" alt="img" />
                      </a>
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
</template>
<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "Role",
    dataIndex: "role",
    sorter: {
      compare: (a, b) => {
        a = a.role.toLowerCase();
        b = b.role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "description",
    dataIndex: "description",
    sorter: (a, b) => a.description.localeCompare(b.description),
  },
  {
    title: "Status",
    key: "id",
    sorter: true,
  },
  {
    title: "Action",
    key: "action",
    class: "text-end",
    sorter: true,
  },
];
const data = [
  {
    id: "1",
    role: "Admin",
    description: "Owner",
    Status: "Active",
  },
  {
    id: "2",
    role: "Purchase",
    description: "Purchase Permission",
    Status: "Active",
  },
  {
    id: "3",
    role: "Sales",
    description: "Sales Permission",
    Status: "Active",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Group Permissions",
      title1: "Manage Group Permissions",
      items: [
        {
          text: "Add Group Permission",
          addname: "/createpermission",
        },
      ],
      data,
      columns,
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
  name: "grouppermissions",
};
</script>
