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
            <div class="row">
              <div class="col-lg-3 col-sm-12">
                <div class="form-group">
                  <label>Role</label>
                  <input type="text" placeholder="Admin" />
                </div>
              </div>
              <div class="col-lg-9 col-sm-12">
                <div class="form-group">
                  <label>Role Description</label>
                  <input type="text" placeholder="Owner" />
                </div>
              </div>
              <div class="col-12 mb-3">
                <div class="input-checkset">
                  <ul>
                    <li>
                      <label class="inputcheck"
                        >Select All
                        <input type="checkbox" id="check-all" />
                        <span class="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="productdetails product-respon">
                  <ul>
                    <li>
                      <h4>Users Management</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >View all records of all users
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>User Permission</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Products</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Barcode
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Import Products
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Adjustment</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Transfer</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Expenses</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Sales</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Purchase</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Quotations</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Sales Return</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Purchase Return</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Payment Sales</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Payments purchase</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Payments Return</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Customer list</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Supplier List</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Reports</h4>
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <label class="inputcheck"
                              >View
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Create
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Edit
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Delete
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="inputcheck"
                              >Select All
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
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
      title: "Edit Permission",
      title1: "Manage Edit Permissions",
    };
  },
  mounted() {
    let checkAll = document.getElementById("check-all");
    let otherCheckboxes = document.querySelectorAll(
      "input[type=checkbox]:not(#check-all)"
    );

    checkAll.addEventListener("change", onCheckAllChange);
    otherCheckboxes.forEach((input) =>
      input.addEventListener("change", onOtherCheckboxChange)
    );

    function onCheckAllChange() {
      otherCheckboxes.forEach((input) => (input.checked = checkAll.checked));
    }

    function onOtherCheckboxChange() {
      let allChecked = Array.from(otherCheckboxes).every((input) => input.checked);
      checkAll.checked = allChecked;
    }
  },
  name: "editpermission",
};
</script>
