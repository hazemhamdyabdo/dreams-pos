<template>
  <!-- Add Event Modal -->
  <div id="add_event" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Event</h5>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </b-button>
        </div>
        <div class="modal-body">
          <b-form>
            <div class="form-group">
              <label>Event Name <span class="text-danger">*</span></label>
              <b-form-input class="form-control" type="text" />
            </div>
            <div class="form-group">
              <label>Event Date <span class="text-danger">*</span></label>
              <div class="cal-icon">
                <b-form-input class="form-control" type="text" />
              </div>
            </div>
            <div class="submit-section">
              <b-button class="btn btn-primary submit-btn">Submit</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Event Modal -->

  <!-- Add Event Modal -->
  <div class="modal custom-modal fade none-border" id="my_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Event</h4>
          <b-button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            &times;
          </b-button>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer justify-content-center">
          <b-button type="button" class="btn btn-success save-event submit-btn">
            Create event
          </b-button>
          <b-button
            type="button"
            class="btn btn-danger delete-event submit-btn"
            data-dismiss="modal"
          >
            Delete
          </b-button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Event Modal -->

  <!-- Add Category Modal -->
  <div class="modal custom-modal fade" id="add_new_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Category</h4>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-hidden="true"
          >
            <span aria-hidden="true">×</span>
          </b-button>
        </div>
        <div class="modal-body">
          <b-form>
            <div class="form-group">
              <label>Category Name</label>
              <input
                class="form-control form-white"
                placeholder="Enter name"
                type="text"
                name="category-name"
              />
            </div>
            <div class="form-group mb-0">
              <label>Choose Category Color</label>
              <select
                class="form-control form-white"
                data-placeholder="Choose a color..."
                name="category-color"
              >
                <option value="success">Success</option>
                <option value="danger">Danger</option>
                <option value="info">Info</option>
                <option value="primary">Primary</option>
                <option value="warning">Warning</option>
                <option value="inverse">Inverse</option>
              </select>
            </div>
            <div class="submit-section">
              <b-button
                type="button"
                class="btn btn-primary save-category submit-btn"
                data-dismiss="modal"
              >
                Save
              </b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Category Modal -->
</template>
