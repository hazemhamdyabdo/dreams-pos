<template>
  <div class="account-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="account-content">
        <div class="login-wrapper">
          <div class="login-content">
            <div class="login-userset">
              <div class="login-logo logo-normal">
                <img src="../../../assets/img/logo.png" alt="img" />
              </div>
              <router-link to="/index" class="login-logo logo-white">
                <img src="../../../assets/img/logo-white.png" alt="" />
              </router-link>
              <div class="login-userheading">
                <h3>Create an Account</h3>
                <h4>Continue where you left off</h4>
              </div>
              <Form
                class="register"
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="form-login">
                  <label>Email</label>
                  <div class="form-addons">
                    <Field
                      name="email"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.email }"
                    />
                    <img src="../../../assets/img/icons/mail.svg" alt="img" />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                    <div class="emailshow text-danger" id="email"></div>
                  </div>
                </div>
                <div class="form-login">
                  <label>Password</label>
                  <div class="pass-group">
                    <Field
                      v-if="showPassword"
                      name="password"
                      type="text"
                      class="form-control pass-input"
                      placeholder="Password"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <Field
                      v-else
                      name="password"
                      type="password"
                      class="form-control pass-input"
                      placeholder="Password"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <span
                      @click="toggleShow"
                      class="fas toggle-password"
                      :class="{
                        'fa-eye': showPassword,
                        'fa-eye-slash': !showPassword,
                      }"
                    ></span>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                </div>
                <div class="form-login">
                  <label>Repeat Password</label>
                  <div class="form-addons pass-group">
                    <Field
                      v-if="showPassword1"
                      name="confirmpassword"
                      type="text"
                      class="form-control pass-inputs"
                      placeholder="Confirm Password"
                      :class="{ 'is-invalid': errors.confirmpassword }"
                    />
                    <Field
                      v-else
                      name="confirmpassword"
                      type="password"
                      class="form-control pass-inputs"
                      placeholder="Confirm Password"
                      :class="{ 'is-invalid': errors.confirmpassword }"
                    />
                    <span
                      @click="toggleShow1"
                      class="fas toggle-passwords"
                      :class="{
                        'fa-eye': showPassword1,
                        'fa-eye-slash': !showPassword1,
                      }"
                    ></span>
                    <div class="invalid-feedback">{{ errors.confirmpassword }}</div>
                    <div class="emailshow text-danger" id="confirmpassword"></div>
                  </div>
                </div>
                <div class="form-login">
                  <a class="btn btn-login">Sign Up</a>
                </div>
              </Form>
              <div class="signinform text-center">
                <h4>
                  Already a user?
                  <router-link to="/" class="hover-a">Sign In</router-link>
                </h4>
              </div>
              <div class="form-setlogin">
                <h4>Or sign up with</h4>
              </div>
              <div class="form-sociallink">
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="../../../assets/img/icons/google.png"
                        class="me-2"
                        alt="google"
                      />
                      Sign Up using Google
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="../../../assets/img/icons/facebook.png"
                        class="me-2"
                        alt="google"
                      />
                      Sign Up using Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="login-img">
            <img src="../../../assets/img/login.jpg" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { Form, Field } from "vee-validate";
import { router } from "../../../router";
import VueRouter from "vue-router";
import * as Yup from "yup";
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      showPassword1: false,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabel() {
      return this.showPassword1 ? "Hide" : "Show";
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
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Confirm password is required"),
    });
    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem("storedData");
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email == values.email);
        if (Eresult) {
          document.getElementById("email").innerHTML = "This email are already exist";
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push("/index");
          localStorage.setItem("storedData", jsonData);
        }
      } else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching";
      }
    };
    return {
      schema,
      onSubmit,
    };
  },
};
</script>
