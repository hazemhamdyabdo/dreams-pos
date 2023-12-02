<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <div class="col-md-12">
            <!-- Basic Examples -->
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Basic Examples</h4>
              </div>
              <div class="card-body">
                <p>
                  SweetAlert automatically centers itself on the page and looks great no
                  matter if you're using a desktop computer, mobile or tablet. It's even
                  highly customizable, as you can see below!
                </p>
                <button
                  type="button"
                  class="btn btn-outline-primary me-1 mb-1"
                  @click="basicAlert"
                >
                  Basic
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary me-1 mb-1"
                  @click="withTitle"
                >
                  With Title
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary me-1 mb-1"
                  @click="footerAlert"
                >
                  With Footer
                </button>
              </div>
            </div>
            <!-- /Basic Examples -->

            <!-- Position -->
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Position</h4>
              </div>
              <div class="card-body">
                <p>
                  You can specify position of your alert with
                  <code
                    >position : { top-start | top-end | bottom-start | bottom-end }</code
                  >
                  in js.
                </p>
                <button
                  class="btn btn-outline-success me-1 mb-1"
                  @click="positionTopstart"
                >
                  Top Start
                </button>
                <button class="btn btn-outline-success me-1 mb-1" @click="positionTopend">
                  Top End
                </button>
                <button
                  class="btn btn-outline-success me-1 mb-1"
                  @click="positionBottomstart"
                >
                  Bottom Starts
                </button>
                <button
                  class="btn btn-outline-success me-1 mb-1"
                  @click="positionBottomend"
                >
                  Bottom End
                </button>
              </div>
            </div>
            <!-- \Position -->

            <!-- Types -->
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Types</h4>
              </div>
              <div class="card-body">
                <p>
                  The type of the modal. SweetAlert comes with 4 built-in types which will
                  show a corresponding icon animation: "warning", "error", "success" and
                  "info". You can also set it as "input" to get a prompt modal. It can
                  either be put in the object under the key "icon" or passed as the third
                  parameter of the function.
                </p>
                <button
                  type="button"
                  class="btn btn-outline-success me-1 mb-1"
                  @click="typeSuccess"
                >
                  Success
                </button>
                <button
                  type="button"
                  class="btn btn-outline-info me-1 mb-1"
                  @click="typeInfo"
                >
                  Info
                </button>
                <button
                  type="button"
                  class="btn btn-outline-warning me-1 mb-1"
                  @click="typeWarning"
                >
                  Warning
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger me-1 mb-1"
                  @click="typeError"
                >
                  Error
                </button>
              </div>
            </div>
            <!-- \Types -->

            <!-- Options -->
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Options</h4>
              </div>
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-primary me-1 mb-1"
                  @click="autoClose"
                >
                  Auto Close
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary me-1 mb-1"
                  @click="outsideClick"
                >
                  Click Outside
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary me-1 mb-1"
                  @click="promptFunction"
                >
                  Question
                </button>
              </div>
            </div>
            <!-- \Options -->

            <!-- Confirm Options -->
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Confirm Options</h4>
              </div>
              <div class="card-body">
                <h5>Confirm Button Text</h5>
                <p>
                  Use <code>confirmButtonText: "Your text here!"</code> option to change
                  the text of the "Confirm" button.
                </p>
                <button
                  type="button"
                  class="btn btn-outline-primary mb-3"
                  @click="confirmText"
                >
                  Confirm Text
                </button>
                <h5>Confirm Button Color</h5>
                <p>
                  Use <code>confirmButtonClass: "btn btn-{colorName}"</code> option to
                  change the color of the "Confirm" button.
                </p>
                <button
                  type="button"
                  class="btn btn-outline-primary mb-2"
                  @click="confirmColor"
                >
                  Confirm Button Color
                </button>
              </div>
            </div>
            <!-- \Confirm Options -->
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
      title: "Sweetalerts",
      text: "Dashboard",
      text1: "Sweetalerts",
      name: "/index",
    };
  },
  methods: {
    basicAlert() {
      Swal.fire("Any fool can use a computer");
    },
    withTitle() {
      Swal.fire({
        title: "The Internet?,",
        text: "That thing is still around?",
      });
    },
    footerAlert() {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>",
      });
    },
    positionTopstart() {
      Swal.fire({
        position: "top-start",
        type: "success",
        title: "Your work has been saved",
        timer: 1500,
        showConfirmButton: !1,
      });
    },
    positionTopend() {
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "Your work has been saved",
        timer: 1500,
        showConfirmButton: !1,
      });
    },
    positionBottomstart() {
      Swal.fire({
        position: "bottom-start",
        type: "success",
        title: "Your work has been saved",
        timer: 1500,
        showConfirmButton: !1,
      });
    },
    positionBottomend() {
      Swal.fire({
        position: "bottom-end",
        type: "success",
        title: "Your work has been saved",
        timer: 1500,
        showConfirmButton: !1,
      });
    },
    typeSuccess() {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        type: "success",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    typeInfo() {
      Swal.fire({
        title: "Info!",
        text: "You clicked the button!",
        type: "info",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    typeWarning() {
      Swal.fire({
        title: "Warning!",
        text: " You clicked the button!",
        type: "warning",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    typeError() {
      Swal.fire({
        title: "Error!",
        text: " You clicked the button!",
        type: "error",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    autoClose() {
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <strong></strong> seconds.",
        timer: 2e3,
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
        onBeforeOpen: function () {
          swal.showLoading(),
            (t = setInterval(function () {
              swal.getContent().querySelector("strong").textContent = Swal.getTimerLeft();
            }, 100));
        },
        onClose: function () {
          clearInterval(t);
        },
      }).then(function (t) {
        t.dismiss === swal.DismissReason.timer &&
          console.log("I was closed by the timer");
      });
    },
    outsideClick() {
      Swal.fire({
        title: "Click outside to close!",
        text: "This is a cool message!",
        allowOutsideClick: !0,
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    promptFunction() {
      Swal.fire({
        input: "text",
        confirmButtonText: "Next &rarr;",
        showCancelButton: !0,
        progressSteps: ["1", "2", "3"],
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
        cancelButtonClass: "btn btn-danger ml-1",
      })
        .queue([
          { title: "Question 1", text: "Chaining swal2 modals is easy" },
          "Question 2",
          "Question 3",
        ])
        .then(function (t) {
          t.value &&
            Swal.fire({
              title: "All done!",
              html:
                "Your answers: <pre><code>" + JSON.stringify(t.value) + "</code></pre>",
              confirmButtonText: "Lovely!",
            });
        });
    },
    confirmText() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: !1,
      }).then(function (t) {
        t.value &&
          Swal.fire({
            type: "success",
            title: "Deleted!",
            text: "Your file has been deleted.",
            confirmButtonClass: "btn btn-success",
          });
      });
    },
    confirmColor() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: !1,
      }).then(function (t) {
        t.value
          ? Swal.fire({
              type: "success",
              title: "Deleted!",
              text: "Your file has been deleted.",
              confirmButtonClass: "btn btn-success",
            })
          : t.dismiss === Swal.DismissReason.cancel &&
            Swal.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              type: "error",
              confirmButtonClass: "btn btn-success",
            });
      });
    },
  },
  name: "sweetalerts",
};
</script>
