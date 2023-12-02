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
                      <div class="input-groupicon">
                        <datepicker
                          v-model="startdate"
                          class="picker"
                          :editable="true"
                          :clearable="false"
                        />
                        <div class="addonset">
                          <img src="../../../assets/img/icons/calendars.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <div class="input-groupicon">
                        <datepicker
                          v-model="startdate"
                          class="picker"
                          :editable="true"
                          :clearable="false"
                        />
                        <div class="addonset">
                          <img src="../../../assets/img/icons/calendars.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-12">
                    <div class="form-group">
                      <vue-select :options="Suppliers" placeholder="Choose Suppliers" />
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
                      <a class="product-img">
                        <img
                          :src="require(`../../../assets/img/product/${record.img}`)"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">{{ record.ProductName }}</a>
                    </div></template
                  >
                </template>
              </a-table>
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
    title: "Product Name",
    dataIndex: "ProductName",
    key: "id",
    sorter: (a, b) => a.ProductName.localeCompare(b.ProductName),
  },
  {
    title: "Purchased amount",
    dataIndex: "Purchasedamount",
    sorter: {
      compare: (a, b) => {
        a = a.Purchasedamount.toLowerCase();
        b = b.Purchasedamount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchased QTY",
    dataIndex: "PurchasedQTY",
    sorter: (a, b) => a.PurchasedQTY.localeCompare(b.PurchasedQTY),
  },
  {
    title: "Instock QTY",
    dataIndex: "InstockQTY",
    sorter: {
      compare: (a, b) => {
        a = a.InstockQTY.toLowerCase();
        b = b.InstockQTY.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: 1,
    img: "product1.jpg",
    ProductName: "Macbook pro",
    Purchasedamount: "38698.00",
    PurchasedQTY: "1248",
    InstockQTY: "1356",
  },
  {
    id: 2,
    img: "product2.jpg",
    ProductName: "Orange",
    Purchasedamount: "36080.00",
    PurchasedQTY: "110",
    InstockQTY: "131",
  },
  {
    id: 3,
    img: "product3.jpg",
    ProductName: "Pineapple",
    Purchasedamount: "21000.00",
    PurchasedQTY: "106",
    InstockQTY: "131",
  },
  {
    id: 4,
    img: "product4.jpg",
    ProductName: "Strawberry",
    Purchasedamount: "110.00",
    PurchasedQTY: "105",
    InstockQTY: "100",
  },
  {
    id: 5,
    img: "product5.jpg",
    ProductName: "Sunglasses",
    Purchasedamount: "106.00",
    PurchasedQTY: "105",
    InstockQTY: "100",
  },
  {
    id: 6,
    img: "product6.jpg",
    ProductName: "Unpaired gray",
    Purchasedamount: "9984.00",
    PurchasedQTY: "50",
    InstockQTY: "50",
  },
  {
    id: 7,
    img: "product7.jpg",
    ProductName: "Avocat",
    Purchasedamount: "4500.00",
    PurchasedQTY: "41",
    InstockQTY: "29",
  },
  {
    id: 8,
    img: "product8.jpg",
    ProductName: "Banana",
    Purchasedamount: "900.00",
    PurchasedQTY: "28",
    InstockQTY: "24",
  },
  {
    id: 9,
    img: "product9.jpg",
    ProductName: "Earphones",
    Purchasedamount: "500.00",
    PurchasedQTY: "20",
    InstockQTY: "11",
  },
  {
    id: 10,
    img: "product10.jpg",
    ProductName: "Banana",
    Purchasedamount: "900.00",
    PurchasedQTY: "28",
    InstockQTY: "24",
  },
  {
    id: 11,
    img: "product11.jpg",
    ProductName: "Earphones",
    Purchasedamount: "500.00",
    PurchasedQTY: "20",
    InstockQTY: "11",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Purchase Report",
      title1: "Manage your Purchase Report",
      data,
      columns,
      startdate: currentDate,
      Suppliers: ["Choose Suppliers", "Suppliers"],
    };
  },
  name: "purchasereport",
};
</script>
