<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content container-fluid">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Basic Table</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <b-table :items="tableitems" class="mb-0"></b-table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Striped Rows</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <b-table striped hover :items="tableitems" class="mb-0"></b-table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Bordered Table</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <b-table bordered :items="tableitems" class="mb-0"></b-table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Hover Rows</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <b-table hover :items="tableitems" class="mb-0"></b-table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <contexttable />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Basic Tables",
      text: "Dashboard",
      text1: "Basic Tables",
      name: "/index",
      tableitems: [
        { firstname: "John", lastname: "Doe", email: "john@example.com" },
        { firstname: "Mary", lastname: "Moe", email: "mary@example.com" },
        { firstname: "July", lastname: "Dooley", email: "july@example.com" },
      ],
    };
  },
  name: "tables-basic",
};
</script>
