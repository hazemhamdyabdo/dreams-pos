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
                      <input type="text" placeholder="Enter Supplier Code" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Supplier" />
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
                    <div class="productimgname">
                      <a href="javascript:void(0);" class="product-img">
                        <img
                          src="../../../assets/img/product/noimage.png"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">{{ record.SupplierName }}</a>
                    </div></template
                  >

                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editsupplier">
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
  <supplierlistmodal></supplierlistmodal>
</template>
<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "Supplier Name",
    dataIndex: "SupplierName",
    key: "id",
    sorter: {
      compare: (a, b) => {
        a = a.SupplierName.toLowerCase();
        b = b.SupplierName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "code",
    dataIndex: "code",
    sorter: true,
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
    title: "Country",
    dataIndex: "Country",
    sorter: {
      compare: (a, b) => {
        a = a.Country.toLowerCase();
        b = b.Country.toLowerCase();
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
    SupplierName: "Apex Computers",
    code: "201",
    Phone: "+12163547758",
    email: "thomas@example.com",
    Country: "China",
  },
  {
    id: 2,
    SupplierName: "Modern Automobile",
    code: 202,
    Phone: "123-456-888",
    email: "customer@example.com",
    Country: "USA",
  },
  {
    id: 3,
    SupplierName: "AIM Infotech",
    code: 521,
    Phone: "123-456-888",
    email: "customer@example.com",
    Country: "USA",
  },
  {
    id: 4,
    SupplierName: "Best Power Tools",
    code: 555,
    Phone: "123-456-888",
    email: "bruklin@example.com",
    Country: "Thailand",
  },
  {
    id: 5,
    SupplierName: "AIM Infotech",
    code: 325,
    Phone: "+12163547758",
    email: "Beverly@example.com",
    Country: "Phuket island",
  },
  {
    id: 6,
    SupplierName: "Best Power Tools",
    code: 589,
    Phone: "123-456-888",
    email: "Huber@example.com",
    Country: "Germany",
  },
  {
    id: 7,
    SupplierName: "Apex Computers",
    code: 254,
    Phone: "+12163547758",
    email: "customer@example.com",
    Country: "Angola",
  },
  {
    id: 8,
    SupplierName: "Vinayak Tools",
    code: 681,
    Phone: "123-456-888",
    email: "john@example.com",
    Country: "Albania",
  },
  {
    id: 9,
    SupplierName: "Best Power Tools",
    code: 555,
    Phone: "123-456-888",
    email: "bruklin@example.com",
    Country: "Thailand",
  },
  {
    id: 10,
    SupplierName: "AIM Infotech",
    code: 325,
    Phone: "+12163547758",
    email: "Beverly@example.com",
    Country: "Phuket island",
  },
  {
    id: 11,
    SupplierName: "Best Power Tools",
    code: 589,
    Phone: "123-456-888",
    email: "Huber@example.com",
    Country: "Germany",
  },
  {
    id: 12,
    SupplierName: "Apex Computers",
    code: 254,
    Phone: "+12163547758",
    email: "customer@example.com",
    Country: "Angola",
  },
  {
    id: 13,
    SupplierName: "Vinayak Tools",
    code: 681,
    Phone: "123-456-888",
    email: "john@example.com",
    Country: "Albania",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Supplier List",
      title1: "Manage your Supplier",
      items: [
        {
          text: "Add Supplier",
          addname: "/addsupplier",
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
  name: "supplierlist",
};
</script>
