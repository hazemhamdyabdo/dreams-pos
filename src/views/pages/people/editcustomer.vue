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
                  <label>Customer Name</label>
                  <input type="text" value="Thomas" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" value="Thomas@example.com" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Phone</label>
                  <input type="text" value="+12163547758 " />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Choose Country</label>
                  <vue-select :options="States" placeholder="United States" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>City</label>
                  <vue-select :options="Newyork" placeholder="Newyork" />
                </div>
              </div>
              <div class="col-lg-9 col-12">
                <div class="form-group">
                  <label>Address</label>
                  <input type="text" value="132, My Street, Kingston, New York " />
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
      title: "Edit Customer Management",
      title1: "Edit/Update Customer",
      Newyork: ["Newyork", "City"],
      States: ["United States", "India"],
    };
  },
  name: "editcustomer",
};
</script>
