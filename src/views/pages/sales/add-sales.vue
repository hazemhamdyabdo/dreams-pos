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
                  <label>Customer</label>
                  <div class="row">
                    <div class="col-lg-10 col-sm-10 col-10">
                      <vue-select :options="Choose" placeholder="Choose" />
                    </div>
                    <div class="col-lg-2 col-sm-2 col-2 ps-0">
                      <div class="add-icon">
                        <span
                          ><img src="../../../assets/img/icons/plus1.svg" alt="img"
                        /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Customer</label>
                  <div class="input-groupicon">
                    <datepicker
                      v-model="startdate"
                      class="picker"
                      :editable="true"
                      :clearable="false"
                    />
                    <a class="addonset">
                      <img src="../../../assets/img/icons/calendars.svg" alt="img" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Supplier</label>
                  <vue-select :options="Supplier" placeholder="Choose" />
                </div>
              </div>
              <div class="col-lg-12 col-sm-6 col-12">
                <div class="form-group">
                  <label>Product Name</label>
                  <div class="input-groupicon">
                    <input
                      type="text"
                      placeholder="Please type product code and select..."
                    />
                    <div class="addonset">
                      <img src="../../../assets/img/icons/scanners.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="table-responsive mb-3">
                <table class="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>QTY</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Tax</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in addsale" :key="item.id">
                      <td>{{ item.num }}</td>
                      <td class="productimgname">
                        <a class="product-img">
                          <img
                            :src="require('../../../assets/img/product/' + item.img)"
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">{{ item.productname }}</a>
                      </td>
                      <td>{{ item.qty }}</td>
                      <td>{{ item.price }}</td>
                      <td>{{ item.discount }}</td>
                      <td>{{ item.tax }}</td>
                      <td>{{ item.subtotal }}</td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="delete-set"
                          @click="deleteEvent(addsale)"
                          ><img src="../../../assets/img/icons/delete.svg" alt="svg"
                        /></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Order Tax</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Discount</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Shipping</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Status</label>
                  <vue-select :options="Status" placeholder="Choose Status" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="total-order w-100 max-widthauto m-auto mb-4">
                    <ul>
                      <li>
                        <h4>Order Tax</h4>
                        <h5>$ 0.00 (0.00%)</h5>
                      </li>
                      <li>
                        <h4>Discount</h4>
                        <h5>$ 0.00</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="total-order w-100 max-widthauto m-auto mb-4">
                    <ul>
                      <li>
                        <h4>Shipping</h4>
                        <h5>$ 0.00</h5>
                      </li>
                      <li class="total">
                        <h4>Grand Total</h4>
                        <h5>$ 0.00</h5>
                      </li>
                    </ul>
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
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
import addsale from "../../../assets/json/addsale.json";
export default {
  data() {
    return {
      title: "Add Sale",
      title1: "Add your new sale",
      addsale: addsale,
      startdate: currentDate,
      Choose: ["Choose", "Customer Name"],
      Supplier: ["Choose", "Supplier Name"],
      Status: ["Choose Status", "Completed", "Inprogress"],
    };
  },
  methods: {
    deleteEvent: function (addsale) {
      this.addsale.splice(this.addsale.indexOf(addsale), 1);
    },
  },
  name: "add-sales",
};
</script>
