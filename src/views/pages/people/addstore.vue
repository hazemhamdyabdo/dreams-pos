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
                  <label>Store Name</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>User Name</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Password</label>
                  <div class="pass-group">
                    <input
                      v-if="showPassword"
                      type="text"
                      class="pass-input"
                      v-model="password"
                    />
                    <input v-else type="password" class="pass-input" v-model="password" />
                    <span
                      class="fas toggle-password"
                      @click="toggleShow"
                      :class="{
                        'fa-eye': showPassword,
                        'fa-eye-slash': !showPassword,
                      }"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Phone</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label> Store Image</label>
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
                <router-link to="storelist" class="btn btn-cancel">Cancel</router-link>
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
      showPassword: false,
      password: null,
      title: "Store Management",
      title1: "Add/Update Store",
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  name: "addstore",
};
</script>
