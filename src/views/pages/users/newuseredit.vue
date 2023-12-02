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
                  <label>User Name</label>
                  <input type="text" placeholder="williams1234" />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" placeholder="williams1234@example.com" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <div class="pass-group">
                    <input
                      v-if="showPassword"
                      type="text"
                      class="pass-input"
                      value="123456"
                    />
                    <input v-else type="password" class="pass-input" value="123456" />
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
                  <label>Mobile</label>
                  <input type="text" placeholder="+12163547758 " />
                </div>
                <div class="form-group">
                  <label>Role</label>
                  <vue-select :options="Manager" placeholder="Manager" />
                </div>
                <div class="form-group">
                  <label>Confirm Password</label>
                  <div class="pass-group">
                    <input
                      v-if="showPassword1"
                      type="text"
                      class="pass-input"
                      value="123456"
                    />
                    <input v-else type="password" class="pass-input" value="123456" />
                    <span
                      class="fas toggle-password"
                      @click="toggleShow1"
                      :class="{
                        'fa-eye': showPassword1,
                        'fa-eye-slash': !showPassword1,
                      }"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group uploadedimage">
                  <label> Profile Picture</label>
                  <div class="image-upload image-upload-new">
                    <div
                      class="image-uploads"
                      :style="{
                        display: filter ? 'block' : 'none',
                      }"
                    >
                      <img src="../../../assets/img/customer/customer1.jpg" alt="img" />
                      <div class="productviews">
                        <div class="productviewscontent">
                          <div class="productviewsname">
                            <h2>macbookpro.jpg</h2>
                            <h3>581kb</h3>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="hideset"
                            v-on:click="filter = !filter"
                            >x</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <a href="javascript:void(0);" class="btn btn-submit me-2">Submit</a>
                <a href="javascript:void(0);" class="btn btn-cancel">Cancel</a>
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
      filter: true,
      showPassword: false,
      showPassword1: false,
      password: null,
      password1: null,
      title: "User Management",
      title1: "Edit/Update User",
      Manager: ["Manager", "Sales Man"],
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
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
  },
  name: "newuseredit",
};
</script>
