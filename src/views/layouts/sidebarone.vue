<template>
  <!-- Sidebar -->
  <div :class="$route.meta.headerthreeClass">
    <div :class="$route.meta.divClass">
      <div id="sidebar-menu" class="sidebar-menu">
        <ul class="nav">
          <li class="submenu">
            <a
              href="#sidebarMain"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarMain"
              ><img src="../../assets/img/icons/menu-icon.svg" alt="img" /><span>
                Main Menu</span
              >
              <span class="menu-arrow"></span
            ></a>
            <ul class="collapse menu-dropdown" id="sidebarMain">
              <li>
                <a href="index"
                  ><img src="../../assets/img/icons/dashboard.svg" alt="img" /><span>
                    Dashboard</span
                  >
                </a>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarProduct"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarProduct"
                  ><img src="../../assets/img/icons/product.svg" alt="img" /><span>
                    Product</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarProduct">
                  <li><a href="productlist">Product List</a></li>
                  <li><a href="addproduct">Add Product</a></li>
                  <li><a href="categorylist">Category List</a></li>
                  <li><a href="addcategory">Add Category</a></li>
                  <li><a href="subcategorylist">Sub Category List</a></li>
                  <li><a href="subaddcategory">Add Sub Category</a></li>
                  <li><a href="brandlist">Brand List</a></li>
                  <li><a href="addbrand">Add Brand</a></li>
                  <li><a href="importproduct">Import Products</a></li>
                  <li><a href="barcode">Print Barcode</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarSales"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarSales"
                  ><img src="../../assets/img/icons/sales1.svg" alt="img" /><span>
                    Sales</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarSales">
                  <li><a href="saleslist">Sales List</a></li>
                  <li><a href="pos">POS</a></li>
                  <li><a href="pos">New Sales</a></li>
                  <li><a href="salesreturnlists">Sales Return List</a></li>
                  <li><a href="createsalesreturns">New Sales Return</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarPurchase"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPurchase"
                  ><img src="../../assets/img/icons/purchase1.svg" alt="img" /><span>
                    Purchase</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarPurchase">
                  <li><a href="purchaselist">Purchase List</a></li>
                  <li><a href="addpurchase">Add Purchase</a></li>
                  <li><a href="importpurchase">Import Purchase</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarExpense"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarExpense"
                  ><img src="../../assets/img/icons/expense1.svg" alt="img" /><span>
                    Expense</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarExpense">
                  <li><a href="expenselist">Expense List</a></li>
                  <li><a href="createexpense">Add Expense</a></li>
                  <li><a href="expensecategory">Expense Category</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarQuotation"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarQuotation"
                  ><img src="../../assets/img/icons/quotation1.svg" alt="img" /><span>
                    Quotation</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarQuotation">
                  <li><a href="quotationlist">Quotation List</a></li>
                  <li><a href="addquotation">Add Quotation</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarTransfer"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarTransfer"
                  ><img src="../../assets/img/icons/transfer1.svg" alt="img" /><span>
                    Transfer</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarTransfer">
                  <li><a href="transferlist">Transfer List</a></li>
                  <li><a href="addtransfer">Add Transfer </a></li>
                  <li><a href="importtransfer">Import Transfer </a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarReturn"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarReturn"
                  ><img src="../../assets/img/icons/return1.svg" alt="img" /><span>
                    Return</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarReturn">
                  <li><a href="salesreturnlist">Sales Return List</a></li>
                  <li><a href="createsalesreturn">Add Sales Return </a></li>
                  <li><a href="purchasereturnlist">Purchase Return List</a></li>
                  <li><a href="createpurchasereturn">Add Purchase Return </a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarPeople"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPeople"
                  ><img src="../../assets/img/icons/users1.svg" alt="img" /><span>
                    People</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarPeople">
                  <li><a href="customerlist">Customer List</a></li>
                  <li><a href="addcustomer">Add Customer </a></li>
                  <li><a href="supplierlist">Supplier List</a></li>
                  <li><a href="addsupplier">Add Supplier </a></li>
                  <li><a href="userlist">User List</a></li>
                  <li><a href="adduser">Add User</a></li>
                  <li><a href="storelist">Store List</a></li>
                  <li><a href="addstore">Add Store</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarPlaces"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPlaces"
                  ><img src="../../assets/img/icons/places.svg" alt="img" /><span>
                    Places</span
                  >
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarPlaces">
                  <li><a href="newcountry">New Country</a></li>
                  <li><a href="countrieslist">Countries list</a></li>
                  <li><a href="newstate">New State </a></li>
                  <li><a href="statelist">State list</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="submenu">
            <a
              href="#sidebarUsers"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarUsers"
              ><img src="../../assets/img/icons/users1.svg" alt="img" /><span>
                Users</span
              >
              <span class="menu-arrow"></span
            ></a>
            <ul class="collapse menu-dropdown" id="sidebarUsers">
              <li><a href="newuser">New User </a></li>
              <li><a href="userlists">Users List</a></li>
            </ul>
          </li>
          <li class="submenu">
            <a
              href="#sidebarComponents"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarComponents"
              ><vue-feather type="layers"></vue-feather><span> Components </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="collapse menu-dropdown" id="sidebarComponents">
              <li>
                <a href="components"
                  ><vue-feather type="layers"></vue-feather><span> Components</span>
                </a>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarElements"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarElements"
                  ><vue-feather type="box"></vue-feather> <span>Elements </span>
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarElements">
                  <li><a href="sweetalerts">Sweet Alerts</a></li>
                  <li><a href="tooltip">Tooltip</a></li>
                  <li><a href="popover">Popover</a></li>
                  <li><a href="ribbon">Ribbon</a></li>
                  <li><a href="clipboard">Clipboard</a></li>
                  <li><a href="drag-drop">Drag & Drop</a></li>
                  <li><a href="rangeslider">Range Slider</a></li>
                  <li><a href="rating">Rating</a></li>
                  <li><a href="toastr">Toastr</a></li>
                  <li><a href="text-editor">Text Editor</a></li>
                  <li><a href="counter">Counter</a></li>
                  <li><a href="scrollbar">Scrollbar</a></li>
                  <li><a href="spinner">Spinner</a></li>
                  <li><a href="notification">Notification</a></li>
                  <li><a href="lightbox">Lightbox</a></li>
                  <li><a href="stickynote">Sticky Note</a></li>
                  <li><a href="timeline">Timeline</a></li>
                  <li><a href="form-wizard">Form Wizard</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarCharts"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarCharts"
                  ><vue-feather type="bar-chart-2"></vue-feather> <span> Charts </span>
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarCharts">
                  <li><a href="chart-apex">Apex Charts</a></li>
                  <li><a href="chart-js">Chart Js</a></li>
                  <li><a href="chart-morris">Morris Charts</a></li>
                  <li><a href="chart-flot">Flot Charts</a></li>
                  <li><a href="chart-peity">Peity Charts</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarIcons"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarIcons"
                  ><vue-feather type="award"></vue-feather><span> Icons </span>
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarIcons">
                  <li><a href="icon-fontawesome">Fontawesome Icons</a></li>
                  <li><a href="icon-feather">Feather Icons</a></li>
                  <li><a href="icon-ionic">Ionic Icons</a></li>
                  <li><a href="icon-material">Material Icons</a></li>
                  <li><a href="icon-pe7">Pe7 Icons</a></li>
                  <li><a href="icon-simpleline">Simpleline Icons</a></li>
                  <li><a href="icon-themify">Themify Icons</a></li>
                  <li><a href="icon-weather">Weather Icons</a></li>
                  <li><a href="icon-typicon">Typicon Icons</a></li>
                  <li><a href="icon-flag">Flag Icons</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarForms"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarForms"
                  ><vue-feather type="columns"></vue-feather> <span> Forms </span>
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarForms">
                  <li><a href="form-basic-inputs">Basic Inputs </a></li>
                  <li><a href="form-input-groups">Input Groups </a></li>
                  <li><a href="form-horizontal">Horizontal Form </a></li>
                  <li><a href="form-vertical"> Vertical Form </a></li>
                  <li><a href="form-mask">Form Mask </a></li>
                  <li><a href="form-validation">Form Validation </a></li>
                  <li><a href="form-select2">Form Select2 </a></li>
                  <li><a href="form-fileupload">File Upload </a></li>
                </ul>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarTable"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarTable"
                  ><vue-feather type="layout"></vue-feather> <span> Table </span>
                  <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarTable">
                  <li><a href="tables-basic">Basic Tables </a></li>
                  <li><a href="data-tables">Data Table </a></li>
                </ul>
              </li>
              <li>
                <a href="blankpage"
                  ><vue-feather type="file"></vue-feather><span> Blank Page</span>
                </a>
              </li>
              <li class="submenu">
                <a
                  href="#sidebarError"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarError"
                  ><vue-feather type="alert-octagon"></vue-feather>
                  <span> Error Pages </span> <span class="menu-arrow"></span
                ></a>
                <ul class="collapse menu-dropdown" id="sidebarError">
                  <li><a href="error-404">404 Error </a></li>
                  <li><a href="error-500">500 Error </a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="submenu">
            <a
              href="#sidebarApplication"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarApplication"
              ><img src="../../assets/img/icons/product.svg" alt="img" /><span>
                Application</span
              >
              <span class="menu-arrow"></span
            ></a>
            <ul class="collapse menu-dropdown" id="sidebarApplication">
              <li><a href="chat">Chat</a></li>
              <li><a href="calendar">Calendar</a></li>
              <li><a href="email">Email</a></li>
            </ul>
          </li>
          <li class="submenu">
            <a
              href="#sidebarReport"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarReport"
              ><img src="../../assets/img/icons/time.svg" alt="img" /><span> Report</span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="collapse menu-dropdown" id="sidebarReport">
              <li><a href="purchaseorderreport">Purchase order report</a></li>
              <li><a href="inventoryreport">Inventory Report</a></li>
              <li><a href="salesreport">Sales Report</a></li>
              <li><a href="invoicereport">Invoice Report</a></li>
              <li><a href="purchasereport">Purchase Report</a></li>
              <li><a href="supplierreport">Supplier Report</a></li>
              <li><a href="customerreport">Customer Report</a></li>
            </ul>
          </li>
          <li class="submenu">
            <a
              href="#sidebarSettings"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarSettings"
              ><img src="../../assets/img/icons/settings.svg" alt="img" /><span>
                Settings</span
              >
              <span class="menu-arrow"></span
            ></a>
            <ul class="collapse menu-dropdown" id="sidebarSettings">
              <li><a href="generalsettings">General Settings</a></li>
              <li><a href="emailsettings">Email Settings</a></li>
              <li><a href="paymentsettings">Payment Settings</a></li>
              <li><a href="currencysettings">Currency Settings</a></li>
              <li><a href="grouppermissions">Group Permissions</a></li>
              <li><a href="taxrates">Tax Rates</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /Sidebar -->
</template>
