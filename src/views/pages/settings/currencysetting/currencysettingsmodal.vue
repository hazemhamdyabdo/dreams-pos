<template>
  <!-- add Modal -->
  <div class="modal fade" id="addpayment" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Currency</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Currency Name<span class="manitory">*</span></label>
                <input type="text" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label>Currency Code</label>
                <input type="text" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label>Currency Symbol<span class="manitory">*</span></label>
                <input type="text" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group mb-0">
                <label>Status</label>
                <vue-select :options="Status" placeholder="Choose Status" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-submit">Confirm</button>
          <button type="button" class="btn btn-cancel" data-bs-dismiss="modal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- edit Modal -->
  <div class="modal fade" id="editpayment" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Currency</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Currency Name<span class="manitory">*</span></label>
                <input type="text" placeholder="India - Indian rupee" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label>Currency Code</label>
                <input type="text" placeholder="INR" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label>Currency Symbol<span class="manitory">*</span></label>
                <input type="text" placeholder="₹" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group mb-0">
                <label>Status</label>
                <vue-select :options="Active" placeholder="Active" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-submit">Update</button>
          <button type="button" class="btn btn-cancel" data-bs-dismiss="modal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Active: ["Active", "InActive"],
      Status: ["Choose Status", "Active", "InActive"],
    };
  },
};
</script>
