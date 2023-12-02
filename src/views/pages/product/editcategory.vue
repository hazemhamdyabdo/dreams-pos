<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />

        <!-- /add -->
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-12">
                <div class="form-group">
                  <label>Category Name</label>
                  <input type="text" value="Computers" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-12">
                <div class="form-group">
                  <label>Category Code</label>
                  <input type="text" value="CT001" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control">Computers Description</textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label> Product Image</label>
                  <div class="image-upload">
                    <input type="file" />
                    <div class="image-uploads">
                      <img src="../../../assets/img/icons/upload.svg" alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="product-list">
                  <ul class="row">
                    <li
                      class="ps-0"
                      :style="{
                        display: filter ? 'block' : 'none',
                      }"
                    >
                      <div class="productviews">
                        <div class="productviewsimg">
                          <img src="../../../assets/img/icons/macbook.svg" alt="img" />
                        </div>
                        <div class="productviewscontent">
                          <div class="productviewsname">
                            <h2>macbookpro.jpg</h2>
                            <h3>581kb</h3>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="hideset"
                            v-on:click="filter = !filter"
                            >x</a
                          >
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-12">
                <a href="javascript:void(0);" class="btn btn-submit me-2">Submit</a>
                <router-link to="categorylist" class="btn btn-cancel">Cancel</router-link>
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
export default {
  data() {
    return {
      filter: true,
      title: "Product Edit Category",
      title1: "Edit a product Category",
    };
  },
  name: "editcategory",
};
</script>
