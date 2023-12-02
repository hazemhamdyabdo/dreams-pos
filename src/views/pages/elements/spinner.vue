<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content container-fluid">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <!-- Spinner -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Border Spinner</h5>
              </div>
              <div class="card-body">
                <b-spinner label="Loading..."></b-spinner>
              </div>
            </div>
          </div>
          <!-- /Spinner -->

          <!-- Spinner -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Colored Spinner</h5>
              </div>
              <div class="card-body">
                <b-spinner
                  v-for="variant in variants"
                  :variant="variant"
                  :key="variant"
                  class="me-1"
                ></b-spinner>
              </div>
            </div>
          </div>
          <!-- /Spinner -->

          <!-- Spinner -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Grow Spinner</h5>
              </div>
              <div class="card-body">
                <b-spinner type="grow" label="Loading..."></b-spinner>
              </div>
            </div>
          </div>
          <!-- /Spinner -->

          <!-- Spinner -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Colored Grow Spinner</h5>
              </div>
              <div class="card-body">
                <b-spinner
                  v-for="variant in variants"
                  :variant="variant"
                  :key="variant"
                  type="grow"
                  class="me-1"
                ></b-spinner>
              </div>
            </div>
          </div>
          <!-- /Spinner -->

          <!-- Spinner -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Flex Alignment</h5>
              </div>
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <strong>Loading...</strong>
                  <b-spinner label="Loading..."></b-spinner>
                </div>
              </div>
            </div>
          </div>
          <!-- /Spinner -->

          <!-- Spinner -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Float Alignment</h5>
              </div>
              <div class="card-body">
                <div class="float-end">
                  <b-spinner label="Loading..."></b-spinner>
                </div>
              </div>
            </div>
          </div>
          <!-- /Spinner -->

          <!-- Spinner -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Different Sizes</h5>
              </div>
              <div class="card-body">
                <b-spinner small label="Small Spinner" class="me-1"></b-spinner>
                <b-spinner
                  small
                  label="Small Spinner"
                  type="grow"
                  class="me-1 mr-3"
                ></b-spinner>

                <b-spinner label="Spinner" class="me-1"></b-spinner>
                <b-spinner label="Spinner" type="grow" class="me-1 mr-3"></b-spinner>

                <b-spinner label="Large Spinner" class="me-1"></b-spinner>
                <b-spinner
                  label="Large Spinner"
                  type="grow"
                  class="me-1 mr-3"
                ></b-spinner>
              </div>
            </div>
          </div>
          <!-- /Spinner -->

          <!-- Spinner -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Buttons</h5>
              </div>
              <div class="card-body">
                <b-button variant="primary me-1 mb-1" disabled>
                  <b-spinner class="spinner-border-sm"></b-spinner>
                </b-button>
                <b-button variant="primary me-1 mb-1" disabled>
                  <b-spinner class="spinner-border-sm"></b-spinner>
                  Loading...
                </b-button>

                <b-button variant="primary me-1 mb-1" disabled>
                  <b-spinner type="grow" class="spinner-grow-sm"></b-spinner>
                </b-button>
                <b-button variant="primary me-1 mb-1" disabled>
                  <b-spinner type="grow" class="spinner-grow-sm"></b-spinner>
                  Loading...
                </b-button>
              </div>
            </div>
          </div>
          <!-- /Spinner -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Spinner",
      text: "Dashboard",
      text1: "Spinner",
      name: "/index",
      variants: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "blue",
        "pink",
      ],
    };
  },
  name: "spinner",
};
</script>
