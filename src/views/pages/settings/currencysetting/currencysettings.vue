<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <div class="page-header">
          <div class="page-title">
            <h4>Currency Settings</h4>
            <h6>Manage Currency Settings</h6>
          </div>
          <div class="page-btn">
            <a class="btn btn-added" data-bs-toggle="modal" data-bs-target="#addpayment"
              ><img
                src="../../../../assets/img/icons/plus.svg"
                alt="img"
                class="me-1"
              />Add New Currency</a
            >
          </div>
        </div>
        <!-- /product list -->
        <div class="card">
          <div class="card-body">
            <div class="table-top">
              <div class="search-set">
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
                        :id="record.Statusid"
                        class="check"
                        checked=""
                      />
                      <label :for="record.Statusfor" class="checktoggle">checkbox</label>
                    </div></template
                  >
                  <template v-else-if="column.key === 'action'">
                    <a
                      class="me-3"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#editpayment"
                    >
                      <img src="../../../../assets/img/icons/edit.svg" alt="img" />
                    </a>
                    <a
                      class="me-3 confirm-text"
                      href="javascript:void(0);"
                      @click="showAlert"
                    >
                      <img src="../../../../assets/img/icons/delete.svg" alt="img" />
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
  <currencysettingsmodal></currencysettingsmodal>
</template>
<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "Currency name",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Currency code",
    dataIndex: "code",
    sorter: (a, b) => a.code.localeCompare(b.code),
  },
  {
    title: "Currency symbol",
    dataIndex: "symbol",
    sorter: {
      compare: (a, b) => {
        a = a.symbol.toLowerCase();
        b = b.symbol.toLowerCase();
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
    name: "India - Indian rupee",
    code: "INR",
    symbol: "₹",
    Statusid: "user1",
    Statusfor: "user1",
  },
  {
    id: 2,
    name: "US dollar",
    code: "USD",
    symbol: "$",
    Statusid: "user2",
    Statusfor: "user2",
  },
];
export default {
  data() {
    return {
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
  name: "currencysettings",
};
</script>
