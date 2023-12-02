<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content container-fluid">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <div class="col-xl-6 d-flex">
            <div class="card flex-fill">
              <div class="card-header">
                <h5 class="card-title">Basic Form</h5>
              </div>
              <basicform />
            </div>
          </div>
          <div class="col-xl-6 d-flex">
            <div class="card flex-fill">
              <div class="card-header">
                <h5 class="card-title">Address Form</h5>
              </div>
              <addressform />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Two Column Horizontal Form</h5>
              </div>
              <personalinformation />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Two Column Horizontal Form</h5>
              </div>
              <personaldetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Select: ["Select", "A+", "O+", "B+", "AB+"],
      State: ["Select State", "California", "Texas", "Florida"],
      Country: ["Select Country", "USA", "France", "India", "Spain"],
      title: "Horizontal Form",
      text: "Dashboard",
      text1: "Horizontal Form",
      name: "/index",
    };
  },

  name: "form-horizontal",
};
</script>
