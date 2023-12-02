<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <!-- Editor -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Editor</h5>
              </div>
              <div class="card-body">
                <SummernoteEditor
                  v-model="myValue"
                  @update:modelValue="summernoteChange($event)"
                  @summernoteImageLinkInsert="summernoteImageLinkInsert"
                />
              </div>
            </div>
          </div>
          <!-- /Editor -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SummernoteEditor from "vue3-summernote-editor";
export default {
  components: {
    SummernoteEditor,
  },
  data() {
    return {
      myValue: "",
      title: "Text Editor",
      text: "Dashboard",
      text1: "Text Editor",
      name: "/index",
    };
  },
  methods: {
    summernoteChange(newValue) {
      console.log("summernoteChange", newValue);
    },
    summernoteImageLinkInsert(...args) {
      console.log("summernoteImageLinkInsert()", args);
    },
  },
  name: "text-editor",
};
</script>
