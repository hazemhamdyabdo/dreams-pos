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
                  <label>Supplier Name</label>
                  <div class="row">
                    <div class="col-lg-10 col-sm-10 col-10">
                      <vue-select :options="Select" placeholder="Select" />
                    </div>
                    <div class="col-lg-2 col-sm-2 col-2 ps-0">
                      <div class="add-icon">
                        <a href="javascript:void(0);"
                          ><img src="../../../assets/img/icons/plus1.svg" alt="img"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Purchase Date </label>
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
                  <label>Product Name</label>
                  <vue-select :options="Choose" placeholder="Choose" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Reference No.</label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-12 col-sm-6 col-12">
                <div class="form-group">
                  <label>Product Name</label>
                  <div class="input-groupicon">
                    <input
                      type="text"
                      placeholder="Scan/Search Product by code and select..."
                    />
                    <div class="addonset">
                      <img src="../../../assets/img/icons/scanners.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>QTY</th>
                      <th>Purchase Price($)</th>
                      <th>Discount($)</th>
                      <th>Tax %</th>
                      <th>Tax Amount($)</th>
                      <th class="text-end">Unit Cost($)</th>
                      <th class="text-end">Total Cost ($)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in addpurchase" :key="item.id">
                      <td class="productimgname">
                        <a class="product-img">
                          <img
                            :src="require('../../../assets/img/product/' + item.img)"
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">{{ item.name }}</a>
                      </td>
                      <td>{{ item.qty }}</td>
                      <td>{{ item.price }}</td>
                      <td>{{ item.discount }}</td>
                      <td>{{ item.tax }}</td>
                      <td>{{ item.subtotal }}</td>
                      <td class="text-end">{{ item.unit }}</td>
                      <td class="text-end">{{ item.total }}</td>
                      <td>
                        <a class="delete-set" @click="deleteEvent(addpurchase)"
                          ><img src="../../../assets/img/icons/delete.svg" alt="svg"
                        /></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 float-md-right">
                <div class="total-order">
                  <ul>
                    <li>
                      <h4>Order Tax</h4>
                      <h5>$ 0.00 (0.00%)</h5>
                    </li>
                    <li>
                      <h4>Discount</h4>
                      <h5>$ 0.00</h5>
                    </li>
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
                  <vue-select :options="Status" placeholder="Status" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <a href="javascript:void(0);" class="btn btn-submit me-2">Submit</a>
                <router-link to="purchaselist" class="btn btn-cancel">Cancel</router-link>
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
import addpurchase from "../../../assets/json/addpurchase.json";
export default {
  data() {
    return {
      title: "Purchase Add",
      title1: "Add/Update Purchase",
      addpurchase: addpurchase,
      startdate: currentDate,
      Select: ["Select", "Supplier"],
      Choose: ["Choose", "Supplier Name"],
      Status: ["Choose Status", "Completed", "Inprogress"],
    };
  },
  methods: {
    deleteEvent: function (addpurchase) {
      this.addpurchase.splice(this.addpurchase.indexOf(addpurchase), 1);
    },
  },
  name: "addpurchase",
};
</script>
