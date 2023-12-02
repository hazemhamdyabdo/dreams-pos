<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-primary">Ribbon</div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-secondary">Ribbon</div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-success">Ribbon</div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-primary ribbon-right">Ribbon</div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-secondary ribbon-right">Ribbon</div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-success ribbon-right">Ribbon</div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-vertical-left-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-primary ribbon-vertical-left">
                  <i class="fas fa-gift"></i>
                </div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-vertical-left-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-secondary ribbon-vertical-left">
                  <i class="fas fa-gift"></i>
                </div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-vertical-left-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-success ribbon-vertical-left">
                  <i class="fas fa-gift"></i>
                </div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-vertical-right-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-primary ribbon-vertical-right">
                  <i class="fas fa-gift"></i>
                </div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-vertical-right-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-secondary ribbon-vertical-right">
                  <i class="fas fa-gift"></i>
                </div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->

          <!-- Ribbon -->
          <div class="col-md-4 col-sm-6">
            <div class="ribbon-vertical-right-wrapper card">
              <div class="card-body">
                <div class="ribbon ribbon-success ribbon-vertical-right">
                  <i class="fas fa-gift"></i>
                </div>
                <p>
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
          <!-- /Ribbon -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      title: "Ribbons",
      text: "Dashboard",
      text1: "Ribbons",
      name: "/index",
    };
  },
  name: "ribbon",
};
</script>
