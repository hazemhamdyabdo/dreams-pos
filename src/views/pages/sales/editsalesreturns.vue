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
                  <label>Customer Name</label>
                  <div class="row">
                    <div class="col-lg-10 col-sm-10 col-10">
                      <vue-select :options="Thomas" placeholder="Thomas" />
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
                  <label>Quotation Date</label>
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
                  <label>Reference No.</label>
                  <input type="text" placeholder="555444" />
                </div>
              </div>
              <div class="col-lg-12 col-sm-6 col-12">
                <div class="form-group">
                  <label>Product</label>
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
                      <th>Net Unit Price($)</th>
                      <th>Stock</th>
                      <th>QTY</th>
                      <th>Discount($)</th>
                      <th>Tax %</th>
                      <th>Subtotal ($)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in createsalesreturn" :key="item.id">
                      <td class="productimgname">
                        <a class="product-img">
                          <img
                            :src="require('../../../assets/img/product/' + item.img)"
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">{{ item.name }}</a>
                      </td>
                      <td>{{ item.price }}</td>
                      <td>{{ item.stock }}</td>
                      <td>{{ item.qty }}</td>
                      <td>{{ item.discount }}</td>
                      <td>{{ item.tax }}</td>
                      <td>{{ item.subtotal }}</td>
                      <td>
                        <a class="delete-set" @click="deleteEvent(createsalesreturn)"
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
                      <h5>$ 20000.00</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Order Tax</label>
                  <input type="text" placeholder="0" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Discount</label>
                  <input type="text" placeholder="0" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Shipping</label>
                  <input type="text" placeholder="0" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="form-group">
                  <label>Status</label>
                  <vue-select :options="Status" placeholder="Choose Status" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <a class="btn btn-submit me-2">Update</a>
                <router-link to="salesreturnlist" class="btn btn-cancel"
                  >Cancel</router-link
                >
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
import createsalesreturn from "../../../assets/json/createsalesreturn.json";
export default {
  data() {
    return {
      filter: false,
      title: "Edit Create Sales Return",
      title1: "Add/Update Sales Return",
      createsalesreturn: createsalesreturn,
      startdate: currentDate,
      Thomas: ["Thomas", "Customer"],
      Status: ["Choose Status", "Completed", "Inprogress"],
    };
  },
  methods: {
    deleteEvent: function (createsalesreturn) {
      this.createsalesreturn.splice(this.createsalesreturn.indexOf(createsalesreturn), 1);
    },
  },
  name: "editsalesreturns",
};
</script>
