<template>
  <!-- add Modal -->
  <div class="modal fade" id="addpayment" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add payment type</h5>
          <b-button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </b-button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Payment Name</label>
                <input type="text" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group mb-0">
                <label>Status</label>
                <vue-select :options="Choose" placeholder="Choose Status" />
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
          <h5 class="modal-title">Edit payment type</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Payment Name</label>
                <input type="text" value="Cash" />
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
      Choose: ["Choose Status", "Active", "InActive"],
      Active: ["Active", "InActive"],
    };
  },
};
</script>
