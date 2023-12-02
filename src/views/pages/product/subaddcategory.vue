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
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="form-group">
                  <label>Parent Category</label>
                  <vue-select :options="Category" placeholder="Choose Category" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="form-group">
                  <label>Category Name</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="form-group">
                  <label>Category Code</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <a href="javascript:void(0);" class="btn btn-submit me-2">Submit</a>
                <router-link to="subcategorylist" class="btn btn-cancel"
                  >Cancel</router-link
                >
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
      Category: ["Choose Category", "Category"],
      title: "Product Add sub Category",
      title1: "Create new product Category",
    };
  },
  name: "subaddcategory",
};
</script>
