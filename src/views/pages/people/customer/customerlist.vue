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
                    <img src="../../../../assets/img/icons/filter.svg" alt="img" />
                    <span
                      ><img src="../../../../assets/img/icons/closes.svg" alt="img"
                    /></span>
                  </a>
                </div>
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
                      <input type="text" placeholder="Enter Customer Code" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Customer Name" />
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Phone Number" />
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
                        ><img
                          src="../../../../assets/img/icons/search-whites.svg"
                          alt="img"
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
                          :src="require('../../../../assets/img/customer/' + record.img)"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">{{ record.fname }}</a>
                    </div></template
                  >

                  <template v-else-if="column.key === 'action'">
                    <router-link class="me-3" to="editcustomer">
                      <img src="../../../../assets/img/icons/edit.svg" alt="img" />
                    </router-link>
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
  <custemerlistmodal></custemerlistmodal>
</template>
<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "Customer Name",
    dataIndex: "fname",
    key: "img",
    sorter: {
      compare: (a, b) => {
        a = a.fname.toLowerCase();
        b = b.fname.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "code",
    dataIndex: "code",
    sorter: (a, b) => a.code.localeCompare(b.code),
  },
  {
    title: "Customer",
    dataIndex: "custemer",
    sorter: {
      compare: (a, b) => {
        a = a.custemer.toLowerCase();
        b = b.custemer.toLowerCase();
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
    title: "Country",
    dataIndex: "country",
    sorter: {
      compare: (a, b) => {
        a = a.country.toLowerCase();
        b = b.country.toLowerCase();
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
    img: "customer1.jpg",
    fname: "Thomas",
    code: "201",
    custemer: "Thomas",
    phone: "+12163547758",
    email: "thomas@example.com",
    country: "USA",
  },
  {
    id: 2,
    img: "customer2.jpg",
    fname: "Benjamin",
    code: "202",
    custemer: "504Benjamin",
    phone: "123-456-888",
    email: "customer@example.com",
    country: "USA",
  },
  {
    id: 3,
    img: "customer3.jpg",
    fname: "James",
    code: "521",
    custemer: "James 524",
    phone: "+12163547758",
    email: "james@example.com",
    country: "USA",
  },
  {
    id: 4,
    img: "customer4.jpg",
    fname: "Bruklin",
    code: "555",
    custemer: "Bruklin2022",
    phone: "123-456-8888",
    email: "bruklin@example.com",
    country: "Thailand",
  },
  {
    id: 5,
    img: "customer5.jpg",
    fname: "Franklin",
    code: "325",
    custemer: "BeverlyWIN25",
    phone: "+12163547758",
    email: "Beverly@example.com",
    country: "Phuket island",
  },
  {
    id: 6,
    img: "customer6.jpg",
    fname: "B. Huber",
    code: "589",
    custemer: "BeverlyWIN25",
    phone: "+12163547758",
    email: "Huber@example.com",
    country: "Germany",
  },
  {
    id: 7,
    img: "customer7.jpg",
    fname: "Alwin",
    code: "254",
    custemer: "Alwin243",
    phone: "+12163547758",
    email: "customer@example.com",
    country: "Angola",
  },
  {
    id: 8,
    img: "customer8.jpg",
    fname: "Fred john",
    code: "681",
    custemer: "FredJ25",
    phone: "+12163547758",
    email: "john@example.com",
    country: "Albania",
  },
  {
    id: 9,
    img: "customer1.jpg",
    fname: "Rasmussen",
    code: "589",
    custemer: "FredJ25",
    phone: "+12163547758",
    email: "Rasmussen@example.com",
    country: "Germany",
  },
  {
    id: 10,
    img: "customer1.jpg",
    fname: "Rasmussen",
    code: "254",
    custemer: "FredJ25",
    phone: "+12163547758",
    email: "Rasmussen@example.com",
    country: "Angola",
  },
  {
    id: 11,
    img: "customer2.jpg",
    fname: "Grace",
    code: "681",
    custemer: "Grace2022",
    phone: "+12163547758",
    email: "customer@example.com",
    country: "Albania",
  },
  {
    id: 12,
    img: "customer3.jpg",
    fname: "Rasmussen",
    code: "589",
    custemer: "Cras56",
    phone: "+12163547758",
    email: "Rasmussen@example.com",
    country: "Germany",
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
  name: "customerlist",
};
</script>
