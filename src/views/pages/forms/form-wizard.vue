<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content container-fluid">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <!-- Lightbox -->
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title mb-0">Basic Wizard</h4>
              </div>
              <div class="card-body">
                <form-wizard @on-complete="onComplete">
                  <tab-content :before-change="before">
                    <div class="tab-pane active">
                      <div class="mb-4">
                        <h5>Enter Your Personal Details</h5>
                      </div>
                      <form>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-firstname-input">First name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-firstname-input"
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-lastname-input">Last name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-lastname-input"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-phoneno-input">Phone</label>
                              <input
                                type="text"
                                class="form-control"
                                id="basicpill-phoneno-input"
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="basicpill-email-input">Email</label>
                              <input
                                type="email"
                                class="form-control"
                                id="basicpill-email-input"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </tab-content>
                  <tab-content>
                    <div class="tab-pane">
                      <div>
                        <div class="mb-4">
                          <h5>Payment Details</h5>
                        </div>
                        <form>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="basicpill-namecard-input">Name on Card</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basicpill-namecard-input"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label>Credit Card Type</label>
                                <vue-select
                                  :options="type"
                                  placeholder="Select Card Type"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="basicpill-cardno-input"
                                  >Credit Card Number</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basicpill-cardno-input"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="basicpill-card-verification-input"
                                  >Card Verification Number</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basicpill-card-verification-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="basicpill-expiration-input"
                                  >Expiration Date</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basicpill-expiration-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </tab-content>
                  <tab-content>
                    <div class="tab-pane">
                      <div>
                        <div class="mb-4">
                          <h5>Enter Your Address</h5>
                        </div>
                        <form>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="basicpill-pancard-input">Address 1</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basicpill-pancard-input"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="basicpill-vatno-input">Address 2</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basicpill-vatno-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="basicpill-cstno-input">Landmark</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basicpill-cstno-input"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="basicpill-servicetax-input">Town</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basicpill-servicetax-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </tab-content>
                </form-wizard>
              </div>
              <!-- end card body -->
            </div>
          </div>
          <!-- /Wizard -->

          <!-- Wizard -->
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title mb-0">Wizard with Progressbar</h4>
              </div>
              <form-wizard @on-complete="onComplete" class="twitter-bs-wizard mt-4">
                <tab-content :before-change="before">
                  <div id="bar" class="progress mb-4">
                    <div
                      class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                      style="width: 33.3333%"
                    ></div>
                  </div>
                  <div class="tab-pane active" id="progress-seller-details">
                    <div class="mb-4">
                      <h5>User Details</h5>
                    </div>
                    <form>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="progresspill-firstname-input">First name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="progresspill-firstname-input"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="progresspill-lastname-input">Last name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="progresspill-lastname-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="progresspill-phoneno-input">Phone</label>
                            <input
                              type="text"
                              class="form-control"
                              id="progresspill-phoneno-input"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="progresspill-email-input">Email</label>
                            <input
                              type="email"
                              class="form-control"
                              id="progresspill-email-input"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </tab-content>

                <tab-content>
                  <div id="bar" class="progress mb-4">
                    <div
                      class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                      style="width: 100%"
                    ></div>
                  </div>
                  <div class="tab-pane" id="progress-bank-detail">
                    <div>
                      <div class="mb-4">
                        <h5>Payment Details</h5>
                      </div>
                      <form>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-namecard-input"
                                >Name on Card</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-namecard-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label>Credit Card Type</label>
                              <vue-select
                                :options="type"
                                placeholder="Select Card Type"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-cardno-input"
                                >Credit Card Number</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-cardno-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-card-verification-input"
                                >Card Verification Number</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-card-verification-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-expiration-input"
                                >Expiration Date</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-expiration-input"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </tab-content>
                <tab-content>
                  <div id="bar" class="progress mb-4">
                    <div
                      class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                      style="width: 66.6667%"
                    ></div>
                  </div>
                  <div class="tab-pane" id="progress-company-document">
                    <div>
                      <div class="mb-4">
                        <h5>Location Details</h5>
                      </div>
                      <form>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-pancard-input"
                                >Address Line 1</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-pancard-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-vatno-input">Address Line 2</label>
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-vatno-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-cstno-input">Landmark</label>
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-cstno-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-servicetax-input">City</label>
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-servicetax-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-companyuin-input">State</label>
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-companyuin-input"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="progresspill-declaration-input">Country</label>
                              <input
                                type="text"
                                class="form-control"
                                id="progresspill-declaration-input"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </tab-content>
              </form-wizard>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <!-- /Wizard -->
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade confirmModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-3">
        <div class="modal-header border-bottom-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <h5 class="mb-3">Confirm Save Changes</h5>
            <b-button class="dark w-md me-1" data-bs-dismiss="modal"> Close </b-button>
            <b-button class="primary w-md" data-bs-dismiss="modal">
              Save changes
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Form Wizard",
      text: "Dashboard",
      text1: "Form Wizard",
      name: "/index",
      type: ["American Express", "Visa", "MasterCard", "Discover"],
    };
  },
  methods: {
    onComplete: function () {
      // alert("Yay. Done!");
    },
    before: function () {
      // alert("before");
      return true;
    },
  },
};
</script>
