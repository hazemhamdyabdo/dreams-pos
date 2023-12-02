<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
const images = require("@/assets/img/icons/sidebar-icon-01.png");
const images2 = require("@/assets/img/icons/sidebar-icon-02.png");
const images3 = require("@/assets/img/icons/sidebar-icon-03.png");
const images4 = require("@/assets/img/icons/close-icon.png");
const images5 = require("@/assets/img/icons/sun-icon.png");
const images6 = require("@/assets/img/layout-ltr.png");
const images7 = require("@/assets/img/layout-rtl.png");
const images8 = require("@/assets/img/layout-04.png");
const images9 = require("@/assets/img/layout-01.png");
const images11 = require("@/assets/img/layout-03.png");
const images12 = require("@/assets/img/layout-01.png");
const images13 = require("@/assets/img/layout-04.png");
const images14 = require("@/assets/img/layout-03.png");
export default {
  name: "App",
  data: function () {
    return { status: false };
  },
  mounted() {
    // Sidebar Visible

    $(".open-layout").on("click", function (s) {
      s.preventDefault();
      $(".sidebar-layout").addClass("show-layout");
      $(".sidebar-settings").removeClass("show-settings");
    });
    $(".btn-closed").on("click", function (s) {
      s.preventDefault();
      $(".sidebar-layout").removeClass("show-layout");
    });
    $(".open-settings").on("click", function (s) {
      s.preventDefault();
      $(".sidebar-settings").addClass("show-settings");
      $(".sidebar-layout").removeClass("show-layout");
    });

    $(".btn-closed").on("click", function (s) {
      s.preventDefault();
      $(".sidebar-settings").removeClass("show-settings");
    });

    $(".open-siderbar").on("click", function (s) {
      s.preventDefault();
      $(".siderbar-view").addClass("show-sidebar");
    });

    $(".btn-closed").on("click", function (s) {
      s.preventDefault();
      $(".siderbar-view").removeClass("show-sidebar");
    });

    if ($(".toggle-switch").length > 0) {
      const toggleSwitch = document.querySelector(
        '.toggle-switch input[type="checkbox"]'
      );
      const currentTheme = localStorage.getItem("theme");
      var app = document.getElementsByTagName("BODY")[0];

      if (currentTheme) {
        app.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
          toggleSwitch.checked = true;
        }
      }

      function switchTheme(e) {
        if (e.target.checked) {
          app.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        } else {
          app.setAttribute("data-theme", "light");
          localStorage.setItem("theme", "light");
        }
      }

      toggleSwitch.addEventListener("change", switchTheme, false);
    }

    if (window.location.hash == "#LightMode") {
      localStorage.setItem("theme", "dark");
    } else {
      if (window.location.hash == "#DarkMode") {
        localStorage.setItem("theme", "light");
      }
    }

    $("ul.tabs li").click(function () {
      var $this = $(this);
      var $theTab = $(this).attr("id");
      console.log($theTab);
      if ($this.hasClass("active")) {
        // do nothing
      } else {
        $this
          .closest(".tabs_wrapper")
          .find("ul.tabs li, .tabs_container .tab_content")
          .removeClass("active");
        $(
          '.tabs_container .tab_content[data-tab="' +
            $theTab +
            '"], ul.tabs li[id="' +
            $theTab +
            '"]'
        ).addClass("active");
      }
    });
    var customize_link = `<div class="customizer-links"> 
			<ul class="sticky-sidebar">
				<li class="sidebar-icons">
					<a href="#" class="add-setting" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Tooltip on left">
						<img src=${images} class="feather-five" alt="">
					</a>
				</li>
				<li class="sidebar-icons">
					<a href="#" class="navigation-add" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Tooltip on left">
						<img src=${images2} class="feather-five" alt="">
					</a>
				</li>
				<li class="sidebar-icons">
					<a href="https://themeforest.net/item/dreamspos-pos-inventory-management-admin-dashboard-template/38834413" target="_blank" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Tooltip on left">
						<img src=${images3} class="feather-five" alt="">
					</a>
				</li>
			</ul>
		</div>

		<div class="sidebar-settings preview-toggle">
			<div class="sidebar-content sticky-sidebar-one">
				<div class="sidebar-header">
					<h5>Preview Settings</h5>
					<a class="sidebar-close" href="#"><img src=${images4} alt=""></a>
				</div>
				<div class="sidebar-body">
					<h6 class="theme-title">Choose Mode</h6>
					<div class="switch-wrapper">
						<div id="dark-mode-toggle">
							<span class="light-mode active"> <img src=${images5} class="me-2" alt=""> Light</span>
							<span class="dark-mode"><i class="far fa-moon me-2"></i> Dark</span>
						</div>
					</div>
					<div class="row  ">
						<div class="col-xl-6 ere">
							<div class="layout-wrap">								
								<div class="d-flex align-items-center">
									<div class="status-toggle d-flex align-items-center me-2">
										<input type="checkbox" id="1" class="check">
										<label for="1" class="checktoggle"><a  href="https://dreamspos.dreamguystech.com/vuejs/template/index" class="layout-link">checkbox</a> </label> 
									</div>
									<span class="status-text">LTR</span>
								</div>
								<div class="layout-img">
									<img class="img-fliud" src=${images6} alt="layout">
								</div>
							</div>
						</div>
						<div class="col-xl-6 ere">
							<div class="layout-wrap">								
								<div class="d-flex align-items-center">
									<div class="status-toggle d-flex align-items-center me-2">
										<input type="checkbox" id="1" class="check">
										<label for="1" class="checktoggle"><a  href="https://dreamspos.dreamguystech.com/vuejs/template-rtl/index" class="layout-link">checkbox</a> </label> 
									</div>
									<span class="status-text">RTL</span>
								</div>
								<div class="layout-img">
									<img class="img-fliud" src=${images7} alt="layout">
								</div>
							</div>
						</div>
					</div>
					<div class="row  ">
						<div class="col-xl-6 ere">
							<div class="layout-wrap">								
								<div class="d-flex align-items-center">
									<div class="status-toggle d-flex align-items-center me-2">
										<input type="checkbox" id="3" class="check">
										<label for="3" class="checktoggle"><a  href="index-three"class="layout-link">checkbox</a> </label> 
									</div>
									<span class="status-text">Boxed</span>
								</div>
								<div class="layout-img">
									<img class="img-fliud" src=${images8} alt="layout">
								</div>
							</div>
						</div>
						<div class="col-xl-6 ere">
						 	<div class="layout-wrap">								
								<div class="d-flex align-items-center">
								 	<div class="status-toggle d-flex align-items-center me-2">
									 	<input type="checkbox" id="3" class="check">
									 	<label for="3" class="checktoggle"><a  href="index-four"class="layout-link">checkbox</a> </label> 
								 	</div>
								 	<span class="status-text">Collapsed</span>
								</div>
							 	<div class="layout-img">
									 <img class="img-fliud" src=${images9} alt="layout">
							 	</div>
						 	</div>
						</div>
					</div>
				</div>
			</div>
	 	</div>
		
		<div class="sidebar-settings nav-toggle">
			<div class="sidebar-content sticky-sidebar-one">
				<div class="sidebar-header">
					<h5>Navigation Settings</h5>
				 	<a class="sidebar-close" href="#"><img src=${images4} alt=""></a>
				</div>
			 	<div class="sidebar-body">
				 	<h6 class="theme-title">Navigation Type</h6>
				 	<div class="row  ">
						<div class="col-xl-6 ere">
							<div class="layout-wrap">								
								<div class="d-flex align-items-center">
									<div class="status-toggle d-flex align-items-center me-2">
										<input type="checkbox" id="1" class="check">
										<label for="1" class="checktoggle"><a href="index"class="layout-link">checkbox</a> </label> 
									</div>
									<span class="status-text">Vertical</span>
								</div>
								<div class="layout-img">
									<img class="img-fliud" src=${images11} alt="layout">
								</div>
							</div>
						</div>
						<div class="col-xl-6 ere">
						 	<div class="layout-wrap">								
								<div class="d-flex align-items-center">
								 	<div class="status-toggle d-flex align-items-center me-2">
									 	<input type="checkbox" id="2" class="check">
									 	<label for="2" class="checktoggle"><a  href="index-one"class="layout-link">checkbox</a> </label> 
								 	</div>
								 	<span class="status-text">Horizontal</span>
								</div>
							 	<div class="layout-img">
									 <img class="img-fliud" src=${images9} alt="layout">
							 	</div>
						 	</div>
						</div>
						<div class="col-xl-6 ere">
						 	<div class="layout-wrap">								
								<div class="d-flex align-items-center">
								 	<div class="status-toggle d-flex align-items-center me-2">
									 	<input type="checkbox" id="3" class="check">
									 	<label for="3" class="checktoggle"><a  href="index-four"class="layout-link">checkbox</a> </label> 
								 	</div>
								 	<span class="status-text">Collapsed</span>
								</div>
							 	<div class="layout-img">
									 <img class="img-fliud" src=${images12} alt="layout">
							 	</div>
						 	</div>
						</div>
						<div class="col-xl-6 ere">
						 	<div class="layout-wrap">								
								<div class="d-flex align-items-center">
								 	<div class="status-toggle d-flex align-items-center me-2">
									 	<input type="checkbox" id="3" class="check">
									 	<label for="3" class="checktoggle"><a  href="index-three"class="layout-link">checkbox</a> </label> 
								 	</div>
								 	<span class="status-text">Modern</span>
								</div>
							 	<div class="layout-img">
									 <img class="img-fliud" src=${images13} alt="layout">
							 	</div>
						 	</div>
						</div>
						<div class="col-xl-6 ere">
						 	<div class="layout-wrap">								
								<div class="d-flex align-items-center">
								 	<div class="status-toggle d-flex align-items-center me-2">
									 	<input type="checkbox" id="3" class="check">
									 	<label for="3" class="checktoggle"><a  href="index-two"class="layout-link">checkbox</a> </label> 
								 	</div>
								 	<span class="status-text">Boxed</span>
								</div>
							 	<div class="layout-img">
									 <img class="img-fliud" src=${images14} alt="layout">
							 	</div>
						 	</div>
						</div>
					</div>
				</div>
		 	</div>
	  	</div>`;

    $("body").append(customize_link);

    $(".add-setting").on("click", function (e) {
      e.preventDefault();
      $(".preview-toggle.sidebar-settings").addClass("show-settings");
    });
    $(".sidebar-close").on("click", function (e) {
      e.preventDefault();
      $(".preview-toggle.sidebar-settings").removeClass("show-settings");
    });
    $(".navigation-add").on("click", function (e) {
      e.preventDefault();
      $(".nav-toggle.sidebar-settings").addClass("show-settings");
    });
    $(".sidebar-close").on("click", function (e) {
      e.preventDefault();
      $(".nav-toggle.sidebar-settings").removeClass("show-settings");
    });

    // DarkMode with LocalStorage
    if ($("#dark-mode-toggle").length > 0) {
      $("#dark-mode-toggle").children(".light-mode").addClass("active");
      let darkMode = localStorage.getItem("darkMode");

      const darkModeToggle = document.querySelector("#dark-mode-toggle");

      const enableDarkMode = () => {
        document.body.setAttribute("data-theme", "dark");
        $("#dark-mode-toggle").children(".dark-mode").addClass("active");
        $("#dark-mode-toggle").children(".light-mode").removeClass("active");
        localStorage.setItem("darkMode", "enabled");
      };

      const disableDarkMode = () => {
        document.body.removeAttribute("data-theme", "dark");
        $("#dark-mode-toggle").children(".dark-mode").removeClass("active");
        $("#dark-mode-toggle").children(".light-mode").addClass("active");
        localStorage.setItem("darkMode", null);
      };

      if (darkMode === "enabled") {
        enableDarkMode();
      }

      darkModeToggle.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");

        if (darkMode !== "enabled") {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      });
    }
  },
};
</script>
