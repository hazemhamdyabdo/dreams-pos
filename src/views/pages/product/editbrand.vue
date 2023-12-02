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
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Brand Name</label>
                  <input type="text" value="samsung" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</textarea
                  >
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
                      :style="{
                        display: filter ? 'block' : 'none',
                      }"
                    >
                      <div class="productviews">
                        <div class="productviewsimg">
                          <img src="../../../assets/img/brand/samsung.png" alt="img" />
                        </div>
                        <div class="productviewscontent">
                          <div class="productviewsname">
                            <h2>samsung</h2>
                            <h3>581kb</h3>
                          </div>
                          <a
                            href="javascript:void(0);"
                            v-on:click="filter = !filter"
                            :class="{ hideset: filter }"
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
                <router-link to="brandlist" class="btn btn-cancel">Cancel</router-link>
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
      title: "Brand Edit",
      title1: "Update your Brand",
    };
  },
  name: "editbrand",
};
</script>
