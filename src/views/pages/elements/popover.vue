<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <!-- Popover -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Basic Popover</h5>
              </div>
              <div class="card-body">
                <div class="popover-list">
                  <a-popover title="Popover title" trigger="click" placement="right">
                    <template #content>
                      <span
                        >And here's some amazing content. It's very engaging. Right?</span
                      >
                    </template>
                    <b-button variant="primary me-1">Click to toggle popover</b-button>
                  </a-popover>
                  <a-popover title="Popover title" trigger="click" placement="right">
                    <template #content>
                      <span
                        >And here's some amazing content. It's very engaging. Right?</span
                      >
                    </template>
                    <b-button variant="primary me-1">Dismissible popover</b-button>
                  </a-popover>
                  <a-popover title="Popover title" trigger="hover" placement="top">
                    <template #content>
                      <span
                        >Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span
                      >
                    </template>
                    <b-button variant="primary me-1">On Hover Tooltip</b-button>
                  </a-popover>
                </div>
              </div>
            </div>
          </div>
          <!-- /Popover -->

          <!-- Popover -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Direction Popover</h5>
              </div>
              <div class="card-body">
                <div class="popover-list">
                  <a-popover title="Popover title" trigger="click" placement="top">
                    <template #content>
                      <span
                        >Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span
                      >
                    </template>
                    <b-button variant="primary me-1">Popover on top</b-button>
                  </a-popover>
                  <a-popover trigger="click" placement="right">
                    <template #content>
                      <span
                        >Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span
                      >
                    </template>
                    <b-button variant="primary me-1">Popover on right</b-button>
                  </a-popover>
                  <a-popover trigger="click" placement="bottom">
                    <template #content>
                      <span
                        >Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span
                      >
                    </template>
                    <b-button variant="primary me-1">Popover on bottom</b-button>
                  </a-popover>
                  <a-popover trigger="click" placement="left">
                    <template #content>
                      <span
                        >Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span
                      >
                    </template>
                    <b-button variant="primary me-1">Popover on left</b-button>
                  </a-popover>
                </div>
              </div>
            </div>
          </div>
          <!-- /Popover -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Popover",
      text: "Dashboard",
      text1: "Popover",
      name: "/index",
    };
  },
  name: "popover",
};
</script>
