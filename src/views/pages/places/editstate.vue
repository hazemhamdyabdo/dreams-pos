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
                  <label>State Name</label>
                  <input type="text" placeholder="Abu Dhabi" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Country</label>
                  <vue-select :options="Arab" placeholder="United Arab Emirates" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </textarea
                  >
                </div>
              </div>
              <div class="col-lg-12">
                <a class="btn btn-submit me-2">Update</a>
                <a class="btn btn-cancel">Cancel</a>
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
      title: "Places Management",
      title1: "Edit/Update Places",
      Arab: ["United Arab Emirates", "China"],
    };
  },
  name: "editstate",
};
</script>
