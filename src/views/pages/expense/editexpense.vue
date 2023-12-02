<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />

        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Expense Category</label>
                  <vue-select :options="Petrol" placeholder="Petrol" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Expense Date </label>
                  <div class="input-groupicon">
                    <datepicker
                      v-model="startdate"
                      class="picker"
                      :editable="true"
                      :clearable="false"
                    />
                    <div class="addonset">
                      <img src="../../../assets/img/icons/calendars.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Amount</label>
                  <div class="input-groupicon">
                    <input type="text" value="120" />
                    <div class="addonset">
                      <img src="../../../assets/img/icons/dollar.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Reference No.</label>
                  <input type="text" value="555444" />
                </div>
              </div>
              <div class="col-lg-12 col-sm-6 col-12">
                <div class="form-group">
                  <label>Expense for</label>
                  <input type="text" value="Employee" />
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
                <router-link to="expenselist" class="btn btn-cancel">Cancel</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      title: "Expense EDIT",
      title1: "Add/Update Expenses",
      startdate: currentDate,
      Petrol: ["Petrol", "Diesel"],
    };
  },
  components: {},
  mounted() {},
  name: "editexpense",
};
</script>
