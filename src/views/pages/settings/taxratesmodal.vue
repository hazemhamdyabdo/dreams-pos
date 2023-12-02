<template>
<!-- add Modal -->
<div class="modal fade" id="addpayment" tabindex="-1" role="dialog"   aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" >Add TAX </h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label>Tax Name<span class="manitory">*</span></label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>Tax Rate(%)<span class="manitory">*</span></label>
                            <input type="text">
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
                <button type="button" class="btn btn-submit">Confirm</button>
                <button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>

<!-- edit Modal -->
<div class="modal fade" id="editpayment" tabindex="-1" role="dialog"    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" >Edit  Tax</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label>Tax Name<span class="manitory">*</span></label>
                            <input type="text" value="SGST 4.5%	">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>Tax Rate(%)<span class="manitory">*</span></label>
                            <input type="text" value="4.50">
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
                <button type="button" class="btn btn-submit">Update</button>
                <button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
        Active: ["Active", "InActive"],
        Choose: ["Choose Status", "Active", "InActive"],
    }
    },
    components: {
        
    },
    mounted() {
     
	
    },
    
  }
</Script>
