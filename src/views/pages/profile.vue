<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />
        <!-- /product list -->
        <div class="card">
          <div class="card-body">
            <div class="profile-set">
              <div class="profile-head"></div>
              <div class="profile-top">
                <div class="profile-content">
                  <div class="profile-contentimg">
                    <img
                      src="../../assets/img/customer/customer5.jpg"
                      alt="img"
                      id="blah"
                    />
                    <div class="profileupload">
                      <input type="file" id="imgInp" />
                      <a href="javascript:void(0);"
                        ><img src="../../assets/img/icons/edit-set.svg" alt="img"
                      /></a>
                    </div>
                  </div>
                  <div class="profile-contentname">
                    <h2>William Castillo</h2>
                    <h4>Updates Your Photo and Personal Details.</h4>
                  </div>
                </div>
                <div class="ms-auto">
                  <a href="javascript:void(0);" class="btn btn-submit me-2">Save</a>
                  <a href="javascript:void(0);" class="btn btn-cancel">Cancel</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="William" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Castilo" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" placeholder="william@example.com" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>Phone</label>
                  <input type="text" placeholder="+1452 876 5432" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="form-group">
                  <label>User Name</label>
                  <input type="text" placeholder="+1452 876 5432" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
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
              <div class="col-12">
                <a href="javascript:void(0);" class="btn btn-submit me-2">Submit</a>
                <a href="javascript:void(0);" class="btn btn-cancel">Cancel</a>
              </div>
            </div>
          </div>
        </div>
        <!-- /product list -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Profile",
      title1: "User Profile",
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
  name: "profile",
};
</script>
