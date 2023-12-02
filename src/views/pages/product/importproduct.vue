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
            <div class="requiredfield">
              <h4>Field must be in csv format</h4>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <a class="btn btn-submit w-100">Download Sample File</a>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label> Upload CSV File</label>
                  <div class="image-upload">
                    <input type="file" />
                    <div class="image-uploads">
                      <img src="../../../assets/img/icons/upload.svg" alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="productdetails productdetailnew">
                  <ul class="product-bar">
                    <li v-for="item in importproduct" :key="item.id">
                      <h4>{{ item.header }}</h4>
                      <h6
                        class="manitorygreen"
                        v-if="item.header2 === 'This Field is required'"
                      >
                        {{ item.header2 }}
                      </h6>
                      <h6 class="manitoryblue" v-else="item.header2 === 'Field optional'">
                        {{ item.header2 }}
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="productdetails productdetailnew">
                  <ul class="product-bar">
                    <li v-for="item in importproductbrand" :key="item.id">
                      <h4>{{ item.header }}</h4>
                      <h6 class="manitoryblue">{{ item.header2 }}</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-0">
                  <a href="javascript:void(0);" class="btn btn-submit me-2">Submit</a>
                  <a href="javascript:void(0);" class="btn btn-cancel">Cancel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /product list -->
      </div>
    </div>
  </div>
</template>
<script>
import importproduct from "../../../assets/json/importproduct.json";
import importproductbrand from "../../../assets/json/importproductbrand.json";
export default {
  data() {
    return {
      importproduct: importproduct,
      importproductbrand: importproductbrand,
      title: "Import Products",
      title1: "Bulk upload your products",
    };
  },

  name: "importproduct",
};
</script>
