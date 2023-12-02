<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />

        <!-- /product list -->
        <div class="card">
          <div class="card-body">
            <div class="tabs-set">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="purchase-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#purchase"
                    type="button"
                    role="tab"
                    aria-controls="purchase"
                    aria-selected="true"
                  >
                    Purchase
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="payment-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#payment"
                    type="button"
                    role="tab"
                    aria-controls="payment"
                    aria-selected="false"
                  >
                    Payment
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="return-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#return"
                    type="button"
                    role="tab"
                    aria-controls="return"
                    aria-selected="false"
                  >
                    Return
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="purchase"
                  role="tabpanel"
                  aria-labelledby="purchase-tab"
                >
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
                          ><img
                            src="../../../../assets/img/icons/search-white.svg"
                            alt="img"
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
                          <a
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="excel"
                            ><img src="../../../../assets/img/icons/excel.svg" alt="img"
                          /></a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="print"
                            ><img
                              src="../../../../assets/img/icons/printer.svg"
                              alt="img"
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
                                placeholder="Choose Date"
                                class="picker"
                                :editable="true"
                                :clearable="false"
                              />
                              <div class="addonset">
                                <img
                                  src="../../../../assets/img/icons/calendars.svg"
                                  alt="img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-12">
                          <div class="form-group">
                            <div class="input-groupicon">
                              <datepicker
                                v-model="startdate"
                                placeholder="Choose Date"
                                class="picker"
                                :editable="true"
                                :clearable="false"
                              />
                              <div class="addonset">
                                <img
                                  src="../../../../assets/img/icons/calendars.svg"
                                  alt="img"
                                />
                              </div>
                            </div>
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
                        <template v-if="column.key === 'id'">
                          <div class="productimgname">
                            <a class="product-img">
                              <img
                                :src="
                                  require(`../../../../assets/img/product/${record.img}`)
                                "
                                alt="product"
                              />
                            </a>
                            <a href="javascript:void(0);">{{ record.pRODUCTnAME }}</a>
                          </div></template
                        >
                        <template v-else-if="column.key === 'status'">
                          <span class="badges bg-lightgrey">{{
                            record.Status
                          }}</span></template
                        >
                      </template>
                    </a-table>
                  </div>
                </div>
                <payment />
                <return />
              </div>
            </div>
          </div>
        </div>
        <!-- /product list -->
      </div>
    </div>
  </div>
  <searchpart></searchpart>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const columns = [
  {
    sorter: true,
  },

  {
    title: "purchased Date",
    dataIndex: "purchasedDate",
    sorter: (a, b) => a.purchasedDate.localeCompare(b.purchasedDate),
  },
  {
    title: "pRODUCT nAME",
    dataIndex: "pRODUCTnAME",
    key: "id",
    sorter: {
      compare: (a, b) => {
        a = a.pRODUCTnAME.toLowerCase();
        b = b.pRODUCTnAME.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchasedamount",
    dataIndex: "Purchasedamount",
    sorter: true,
  },
  {
    title: "purchased QTY",
    dataIndex: "purchasedQTY",
    sorter: true,
  },
  {
    title: "Paid",
    dataIndex: "Paid",
    sorter: true,
  },
  {
    title: "balance",
    dataIndex: "balance",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: 1,
    img: "product1.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Macbook pro",
    Purchasedamount: 38698,
    purchasedQTY: 1248,
    Paid: 0,
    balance: 38698,
    Status: "Recieved",
  },
  {
    id: 2,
    img: "product2.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Orange",
    Purchasedamount: 36080,
    purchasedQTY: 110,
    Paid: 0,
    balance: 36080,
    Status: "Recieved",
  },
  {
    id: 3,
    img: "product3.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Pineapple",
    Purchasedamount: 21000,
    purchasedQTY: 106,
    Paid: 0,
    balance: 21000,
    Status: "Recieved",
  },
  {
    id: 4,
    img: "product4.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Strawberry",
    Purchasedamount: 11000,
    purchasedQTY: 105,
    Paid: 0,
    balance: 11000,
    Status: "Recieved",
  },
  {
    id: 5,
    img: "product5.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Sunglasses",
    Purchasedamount: 10100,
    purchasedQTY: 100,
    Paid: 0,
    balance: 10600,
    Status: "Recieved",
  },
  {
    id: 6,
    img: "product6.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Unpaired gray",
    Purchasedamount: 1210,
    purchasedQTY: 105,
    Paid: 0,
    balance: 12100,
    Status: "Recieved",
  },
  {
    id: 7,
    img: "product7.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Avocat",
    Purchasedamount: 4500,
    purchasedQTY: 41,
    Paid: 0,
    balance: 4500,
    Status: "Recieved",
  },
  {
    id: 8,
    img: "product8.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Banana",
    Purchasedamount: 900,
    purchasedQTY: 28,
    Paid: 0,
    balance: 900,
    Status: "Recieved",
  },
  {
    id: 9,
    img: "product9.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Earphones",
    Purchasedamount: 500,
    purchasedQTY: 28,
    Paid: 0,
    balance: 500,
    Status: "Recieved",
  },
  {
    id: 10,
    img: "product10.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Limon",
    Purchasedamount: 1500,
    purchasedQTY: 28,
    Paid: 0,
    balance: 500,
    Status: "Recieved",
  },
  {
    id: 11,
    img: "product8.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Banana",
    Purchasedamount: 900,
    purchasedQTY: 28,
    Paid: 0,
    balance: 900,
    Status: "Recieved",
  },
  {
    id: 12,
    img: "product9.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Earphones",
    Purchasedamount: 500,
    purchasedQTY: 28,
    Paid: 0,
    balance: 500,
    Status: "Recieved",
  },
  {
    id: 13,
    img: "product10.jpg",
    purchasedDate: "07/12/2021 06:58:25",
    pRODUCTnAME: "Limon",
    Purchasedamount: 1500,
    purchasedQTY: 28,
    Paid: 0,
    balance: 500,
    Status: "Recieved",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Supplier Report",
      title1: "Manage your Supplier Report",
      data,
      columns,
      startdate: currentDate,
    };
  },
  name: "supplierreport",
};
</script>
