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
                          placeholder="Choose Date"
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
                          placeholder="Choose Date"
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
    key: "id",
    dataIndex: "ProductName",
    sorter: (a, b) => a.ProductName.localeCompare(b.ProductName),
  },
  {
    title: "SKU",
    dataIndex: "SKU",
    sorter: {
      compare: (a, b) => {
        a = a.SKU.toLowerCase();
        b = b.SKU.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Category",
    dataIndex: "Category",
    sorter: (a, b) => a.Category.localeCompare(b.Category),
  },
  {
    title: "Brand",
    dataIndex: "Brand",
    sorter: {
      compare: (a, b) => {
        a = a.Brand.toLowerCase();
        b = b.Brand.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Price",
    dataIndex: "Price",
    sorter: {
      compare: (a, b) => {
        a = a.Price.toLowerCase();
        b = b.Price.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Unit",
    dataIndex: "Unit",
    sorter: {
      compare: (a, b) => {
        a = a.Unit.toLowerCase();
        b = b.Unit.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Instock qty",
    dataIndex: "Instockqty",
    sorter: {
      compare: (a, b) => {
        a = a.Instockqty.toLowerCase();
        b = b.Instockqty.toLowerCase();
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
    SKU: "PT001",
    Category: "Computer",
    Brand: "N/D",
    Price: "1500",
    Unit: "pc",
    Instockqty: "1356",
  },
  {
    id: 2,
    img: "product2.jpg",
    ProductName: "Orange",
    SKU: "PT002",
    Category: "Fruits",
    Brand: "N/D",
    Price: "10",
    Unit: "kg",
    Instockqty: "131",
  },
  {
    id: 3,
    img: "product3.jpg",
    ProductName: "Pineapple",
    SKU: "PT003",
    Category: "Fruits",
    Brand: "N/D",
    Price: "10",
    Unit: "kg",
    Instockqty: "72",
  },
  {
    id: 4,
    img: "product4.jpg",
    ProductName: "Strawberry",
    SKU: "PT004",
    Category: "Fruits",
    Brand: "N/D",
    Price: "10",
    Unit: "kg",
    Instockqty: "100",
  },
  {
    id: 5,
    img: "product5.jpg",
    ProductName: "Sunglasses",
    SKU: "PT005",
    Category: "Accessories",
    Brand: "N/D",
    Price: "10",
    Unit: "pc",
    Instockqty: "100",
  },
  {
    id: 6,
    img: "product6.jpg",
    ProductName: "Unpaired gray",
    SKU: "PT006",
    Category: "Shoes",
    Brand: "Adidas",
    Price: "100",
    Unit: "pc",
    Instockqty: "50",
  },
  {
    id: 7,
    img: "product7.jpg",
    ProductName: "Avocat",
    SKU: "PT007",
    Category: "Fruits",
    Brand: "N/D",
    Price: "5",
    Unit: "kg",
    Instockqty: "29",
  },
  {
    id: 8,
    img: "product8.jpg",
    ProductName: "Banana",
    SKU: "PT008",
    Category: "Fruits",
    Brand: "N/D",
    Price: "10",
    Unit: "kg",
    Instockqty: "24",
  },
  {
    id: 9,
    img: "product9.jpg",
    ProductName: "Earphones",
    SKU: "PT009",
    Category: "Computers",
    Brand: "N/D",
    Price: "15",
    Unit: "pc",
    Instockqty: "11",
  },
  {
    id: 10,
    img: "product8.jpg",
    ProductName: "Banana",
    SKU: "PT010",
    Category: "Health Care",
    Brand: "N/D",
    Price: "5",
    Unit: "kg",
    Instockqty: "16",
  },
  {
    id: 11,
    img: "product6.jpg",
    ProductName: "Unpaired gray",
    SKU: "PT006",
    Category: "Shoes",
    Brand: "Adidas",
    Price: "100",
    Unit: "pc",
    Instockqty: "50",
  },
  {
    id: 12,
    img: "product7.jpg",
    ProductName: "Avocat",
    SKU: "PT007",
    Category: "Fruits",
    Brand: "N/D",
    Price: "5",
    Unit: "kg",
    Instockqty: "29",
  },
  {
    id: 13,
    img: "product8.jpg",
    ProductName: "Banana",
    SKU: "PT008",
    Category: "Fruits",
    Brand: "N/D",
    Price: "10",
    Unit: "kg",
    Instockqty: "24",
  },
  {
    id: 14,
    img: "product9.jpg",
    ProductName: "Earphones",
    SKU: "PT009",
    Category: "Computers",
    Brand: "N/D",
    Price: "15",
    Unit: "pc",
    Instockqty: "11",
  },
  {
    id: 15,
    img: "product8.jpg",
    ProductName: "Banana",
    SKU: "PT010",
    Category: "Health Care",
    Brand: "N/D",
    Price: "5",
    Unit: "kg",
    Instockqty: "16",
  },
];
export default {
  data() {
    return {
      filter: false,
      title: "Inventory Report",
      title1: "Manage your Inventory Report",
      data,
      columns,
      startdate: currentDate,
      Suppliers: ["Choose Suppliers", "Suppliers"],
    };
  },

  name: "inventoryreport",
};
</script>
