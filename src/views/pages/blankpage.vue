<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper pagehead">
      <div class="content">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
        <div class="row">
          <div class="col-sm-12">Contents here</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Blank Page",
      text: "Dashboard",
      text1: "Blank Page",
      name: "/index",
    };
  },
  name: "blankpage",
};
</script>
