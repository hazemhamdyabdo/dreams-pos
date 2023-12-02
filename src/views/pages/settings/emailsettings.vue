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
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Mail Host <span class="manitory">*</span></label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Mail Port<span class="manitory">*</span></label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Mail Address <span class="manitory">*</span></label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Password <span class="manitory">*</span></label>
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
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Mail From Name<span class="manitory">*</span></label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Encryption <span class="manitory">*</span></label>
                  <vue-select :options="Choose" placeholder="Choose" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <a href="javascript:void(0);" class="btn btn-submit me-2">Submit</a>
                  <a href="javascript:void(0);" class="btn btn-cancel">Cancel</a>
                </div>
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
      title: "Email Setting",
      title1: "Manage Email Setting",
      Choose: ["Choose", "Encryption"],
      showPassword: false,
      password: null,
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
  name: "emailsettings",
};
</script>
