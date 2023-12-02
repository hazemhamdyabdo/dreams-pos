<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />

        <!-- /add -->
        <div class="row">
          <div class="col-lg-8 col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="bar-code-view">
                  <img src="../../../assets/img/barcode1.png" alt="barcode" />
                  <a class="printimg">
                    <img src="../../../assets/img/icons/printer.svg" alt="print" />
                  </a>
                </div>
                <div class="productdetails">
                  <ul class="product-bar">
                    <li v-for="item in productdetails" :key="item.id">
                      <h4>{{ item.header }}</h4>
                      <h6>{{ item.header2 }}</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="slider-product-details">
                  <carousel>
                    <slide
                      v-for="slide in 2"
                      :key="slide"
                      class="owl-carousel owl-theme product-slide"
                    >
                      <div class="slider-product">
                        <img src="../../../assets/img/product/product69.jpg" alt="img" />
                        <h4>macbookpro.jpg</h4>
                        <h6>581kb</h6>
                      </div>
                    </slide>
                    <template #addons>
                      <navigation />
                    </template>
                  </carousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- /add -->
      </div>
    </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import productdetails from "../../../assets/json/productdetails.json";
export default {
  data() {
    return {
      productdetails: productdetails,
      title: "Product Details",
      title1: "Full details of a product",
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  name: "product-details",
};
</script>
