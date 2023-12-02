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
                  <b-form-input type="text" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-12">
                <div class="form-group">
                  <label>Category Code</label>
                  <b-form-input type="text" />
                </div>
              </div>

              <div class="col-lg-12">
                <div class="form-group">
                  <label>Description</label>
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
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
      title: "Product Add Category",
      title1: "Create new product Category",
    };
  },
  name: "addcategory",
};
</script>
