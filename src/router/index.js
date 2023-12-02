import {createRouter, createWebHistory} from 'vue-router';

import Activities from '../views/pages/activite/activities'
import Addbrand from '../views/pages/product/addbrand'
import Addcategory from '../views/pages/product/addcategory'
import Addproduct from '../views/pages/product/addproduct'
import Brandlist from '../views/pages/product/brandlist'
import Categorylist from '../views/pages/product/categorylist'
import Editbrand from '../views/pages/product/editbrand'
import Editcategory from '../views/pages/product/editcategory'
import Editproduct from '../views/pages/product/editproduct'
import Editsubcategory from '../views/pages/product/editsubcategory'
import Importproduct from '../views/pages/product/importproduct'
import ProductDetails from '../views/pages/product/product-details'
import Productlist from '../views/pages/product/productlist'
import Subaddcategory from '../views/pages/product/subaddcategory'
import Subcategorylist from '../views/pages/product/subcategorylist'
import Addsale from '../views/pages/sales/add-sales'
import createsalesreturns from '../views/pages/sales/createsalesreturns'
import Editsales from '../views/pages/sales/edit-sales'
import Editsalesreturns from '../views/pages/sales/editsalesreturns'
import Salesdetails from '../views/pages/sales/sales-details'
import Saleslist from '../views/pages/sales/saleslist'
import Addpurchase from '../views/pages/purchase/addpurchase'
import Editpurchase from '../views/pages/purchase/editpurchase'
import Importpurchase from '../views/pages/purchase/importpurchase'
import Purchaselist from '../views/pages/purchase/purchaselist'
import Index from '../views/pages/dashboard/index'
import IndexOne from '../views/pages/dashboard/index-one'
import IndexTwo from '../views/pages/dashboard/index-two'
import IndexThree from '../views/pages/dashboard/index-three'
import IndexFour from '../views/pages/dashboard/index-four'
import createexpense from '../views/pages/expense/createexpense'
import Editexpense from '../views/pages/expense/editexpense'
import Expensecategory from '../views/pages/expense/expensecategory'
import Expenselist from '../views/pages/expense/expenselist'
import Addquotation from '../views/pages/quotation/addquotation'
import Editquotation from '../views/pages/quotation/editquotation'
import Quotationlist from '../views/pages/quotation/quotationlist'
import Addtransfer from '../views/pages/transfer/addtransfer'
import Edittransfer from '../views/pages/transfer/edittransfer'
import Importtransfer from '../views/pages/transfer/importtransfer'
import transferlist from '../views/pages/transfer/transferlist'
import createpurchasereturn from '../views/pages/return/createpurchasereturn'
import createsalesreturn from '../views/pages/return/createsalesreturn'
import Editpurchasereturn from '../views/pages/return/editpurchasereturn'
import Editsalesreturn from '../views/pages/return/editsalesreturn'
import Purchasereturnlist from '../views/pages/return/purchasereturnlist'
import Salesreturnlist from '../views/pages/return/salesreturnlist'
import Salesreturnlists from '../views/pages/return/salesreturnlists'
import Addcustomer from '../views/pages/people/addcustomer'
import Addstore from '../views/pages/people/addstore'
import Addsupplier from '../views/pages/people/addsupplier'
import Adduser from '../views/pages/people/adduser'
import Editcustomer from '../views/pages/people/editcustomer'
import Editstore from '../views/pages/people/editstore'
import Editsupplier from '../views/pages/people/editsupplier'
import Edituser from '../views/pages/people/edituser'
import Supplierlist from '../views/pages/people/supplierlist'
import userlist from '../views/pages/people/userlist'
import customerlist from '../views/pages/people/customer/customerlist'
import Editcountry from '../views/pages/places/editcountry'
import Editstate from '../views/pages/places/editstate'
import Newcountry from '../views/pages/places/newcountry'
import Newstate from '../views/pages/places/newstate'
import Statelist from '../views/pages/places/statelist'
import Storelist from '../views/pages/places/storelist'
import Countrieslist from '../views/pages/places/countrylist/countrieslist'
import Blankpage from '../views/pages/blankpage'
import Profile from '../views/pages/profile'
import Component from '../views/pages/components/components'
import Error404 from '../views/pages/error/error-404'
import Error500 from '../views/pages/error/error-500'
import clipboard from '../views/pages/elements/clipboard'
import counter from '../views/pages/elements/counter'
import Dragdrop from '../views/pages/elements/drag-drop'
import Lightbox from '../views/pages/elements/lightbox'
import notification from '../views/pages/elements/notification'
import Barcode from '../views/pages/product/barcodeproduct/barcode'
import Popover from '../views/pages/elements/popover'
import Rangeslider from '../views/pages/elements/rangeslider'
import Rating from '../views/pages/elements/rating'
import Ribbon from '../views/pages/elements/ribbon'
import Scrollbar from '../views/pages/elements/scrollbar'
import Spinner from '../views/pages/elements/spinner'
import Stickynote from '../views/pages/elements/stickynote'
import Sweetalerts from '../views/pages/elements/sweetalerts'
import Texteditor from '../views/pages/elements/text-editor'
import timeline from '../views/pages/elements/timeline'
import toastr from '../views/pages/elements/toastr'
import tooltip from '../views/pages/elements/tooltip'
import Chartapex from '../views/pages/charts/apex/chart-apex'  
import Chartc3 from '../views/pages/charts/c3/chart-c3'
import chartflot from '../views/pages/charts/flot/chart-flot'
import chartmorris from '../views/pages/charts/morris/chart-morris'
import Iconfeather from '../views/pages/icons/icon-feather'
import Iconflag from '../views/pages/icons/icon-flag'
import Iconfontawesome from '../views/pages/icons/icon-fontawesome'
import Iconionic from '../views/pages/icons/icon-ionic'
import Iconpe7 from '../views/pages/icons/icon-pe7'
import Iconsimpleline from '../views/pages/icons/icon-simpleline'
import Iconthemify from '../views/pages/icons/icon-themify'
import Icontypicon from '../views/pages/icons/icon-typicon'
import Iconweather from '../views/pages/icons/icon-weather'
import iconmaterial from '../views/pages/icons/icon-material'
import Formbasicinputs from '../views/pages/forms/form-basic-inputs'
import Formfileupload from '../views/pages/forms/form-fileupload'
import Formhorizontal from '../views/pages/forms/horizontal/form-horizontal'
import Forminputgroups from '../views/pages/forms/form-input-groups'
import Formmask from '../views/pages/forms/form-mask'
import Formselect2 from '../views/pages/forms/form-select2'
import Formvalidation from '../views/pages/forms/form-validation'
import Formvertical from '../views/pages/forms/form-vertical'
import FormWizard from '../views/pages/forms/form-wizard'
import chartJS from '../views/pages/charts/js/chart-js' 
import Datatable from '../views/pages/table/data-tables'
import Tablesbasic from '../views/pages/table/tables-basic'
import calendar from '../views/pages/application/calendar/calendar'
import chat from '../views/pages/application/chat'
import Email from '../views/pages/application/email'
import customerreport from '../views/pages/report/customerreport'
import Inventoryreport from '../views/pages/report/inventoryreport'
import Invoicereport from '../views/pages/report/invoicereport'
import Purchaseorderreport from '../views/pages/report/purchaseorderreport'
import Purchasereport from '../views/pages/report/purchasereport'
import Salesreport from '../views/pages/report/salesreport'
import Supplierreport from '../views/pages/report/supplierreport/supplierreport'
import Newuser from '../views/pages/users/newuser'
import Newuseredit from '../views/pages/users/newuseredit'
import userlists from '../views/pages/users/userlists'
import currencysettings from '../views/pages/settings/currencysetting/currencysettings'
import createpermission from '../views/pages/settings/createpermission'
import Editpermission from '../views/pages/settings/editpermission'
import Emailsettings from '../views/pages/settings/emailsettings'
import Generalsettings from '../views/pages/settings/generalsettings'
import Grouppermissions from '../views/pages/settings/grouppermissions'
import Paymentsettings from '../views/pages/settings/paymentsettings'
import Taxrates from '../views/pages/settings/taxrates'
import Signin from '../views/pages/auth/signin'
import Signup from '../views/pages/auth/signup'
import Forgetpassword from '../views/pages/auth/forgetpassword'
import Resetpassword from '../views/pages/auth/resetpassword'
import Pos from '../views/pages/pos/pos'

const routes = [
  {
    path: '/',
    name: 'signin',
    component: Signin
  },   
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/index-one',
    name: 'index-one',
    component: IndexOne,
    meta: {
      headerClass: 'header header-one',
      headerthreeClass: 'sidebar new-header sidebar-one',
      sidebarClass: 'sidebar-one hide-sidebar'
 }
  },
  {
    path: '/index-two',
    name: 'index-two',
    component: IndexTwo,
    meta: {
      headerClass: 'header header-two',
      divClass: 'container',
 }
  },
  {
    path: '/index-three',
    name: 'index-three',
    component: IndexThree,
    meta: {
      headerClass: 'header header-three',
      headerthreeClass: 'sidebar side-three new-header',
      divClass: 'container',
      sidebarClass: 'sidebar-three hide-sidebar'
 }
  },
  {
    path: '/index-four',
    name: 'index-four',
    component: IndexFour,
    meta: {
      headerClass: 'header header-four',
      hideClass: 'v-cloak',
 }
  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addbrand',
    name: 'addbrand',
    component: Addbrand,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addcategory',
    name: 'addcategory',
    component: Addcategory,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: Addproduct,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/brandlist',
    name: 'brandlist',
    component: Brandlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/categorylist',
    name: 'categorylist',
    component: Categorylist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editbrand',
    name: 'editbrand',
    component: Editbrand,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editcategory',
    name: 'editcategory',
    component: Editcategory,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editproduct',
    name: 'editproduct',
    component: Editproduct,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editsubcategory',
    name: 'editsubcategory',
    component: Editsubcategory,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/importproduct',
    name: 'importproduct',
    component: Importproduct,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/product-details',
    name: 'product-details',
    component: ProductDetails,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: Productlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/subaddcategory',
    name: 'subaddcategory',
    component: Subaddcategory,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/subcategorylist',
    name: 'subcategorylist',
    component: Subcategorylist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/add-sales',
    name: 'add-sales',
    component: Addsale,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/createsalesreturns',
    name: 'createsalesreturns',
    component: createsalesreturns,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/edit-sales',
    name: 'edit-sales',
    component: Editsales,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editsalesreturns',
    name: 'editsalesreturns',
    component: Editsalesreturns,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/sales-details',
    name: 'sales-details',
    component: Salesdetails,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/saleslist',
    name: 'saleslist',
    component: Saleslist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addpurchase',
    name: 'addpurchase',
    component: Addpurchase,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editpurchase',
    name: 'editpurchase',
    component: Editpurchase,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/importpurchase',
    name: 'importpurchase',
    component: Importpurchase,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/purchaselist',
    name: 'purchaselist',
    component: Purchaselist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/createexpense',
    name: 'createexpense',
    component: createexpense,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editexpense',
    name: 'editexpense',
    component: Editexpense,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/expensecategory',
    name: 'expensecategory',
    component: Expensecategory,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/expenselist',
    name: 'expenselist',
    component: Expenselist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addquotation',
    name: 'addquotation',
    component: Addquotation,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editquotation',
    name: 'editquotation',
    component: Editquotation,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/quotationlist',
    name: 'quotationlist',
    component: Quotationlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addtransfer',
    name: 'addtransfer',
    component: Addtransfer,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/edittransfer',
    name: 'edittransfer',
    component: Edittransfer,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/importtransfer',
    name: 'importtransfer',
    component: Importtransfer,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/transferlist',
    name: 'transferlist',
    component: transferlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/createpurchasereturn',
    name: 'createpurchasereturn',
    component: createpurchasereturn,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/createsalesreturn',
    name: 'createsalesreturn',
    component: createsalesreturn,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editpurchasereturn',
    name: 'editpurchasereturn',
    component: Editpurchasereturn,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editsalesreturn',
    name: 'editsalesreturn',
    component: Editsalesreturn,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/purchasereturnlist',
    name: 'purchasereturnlist',
    component: Purchasereturnlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/salesreturnlist',
    name: 'salesreturnlist',
    component: Salesreturnlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/salesreturnlists',
    name: 'salesreturnlists',
    component: Salesreturnlists,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addcustomer',
    name: 'addcustomer',
    component: Addcustomer,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addstore',
    name: 'addstore',
    component: Addstore,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/addsupplier',
    name: 'addsupplier',
    component: Addsupplier,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/adduser',
    name: 'adduser',
    component: Adduser,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editcustomer',
    name: 'editcustomer',
    component: Editcustomer,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editstore',
    name: 'editstore',
    component: Editstore,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editsupplier',
    name: 'editsupplier',
    component: Editsupplier,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/edituser',
    name: 'edituser',
    component: Edituser,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/supplierlist',
    name: 'supplierlist',
    component: Supplierlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: userlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/customerlist',
    name: 'customerlist',
    component: customerlist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editcountry',
    name: 'editcountry',
    component: Editcountry,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/editstate',
    name: 'editstate',
    component: Editstate,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/newcountry',
    name: 'newcountry',
    component: Newcountry,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/newstate',
    name: 'newstate',
    component: Newstate,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/statelist',
    name: 'statelist',
    component: Statelist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/storelist',
    name: 'storelist',
    component: Storelist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
  {
    path: '/countrieslist',
    name: 'countrieslist',
    component: Countrieslist,
    meta: {
      headerClass: 'header',
      sidebarClass: ''
 }
  },
{
  path: '/blankpage',
  name: 'blankpage',
  component: Blankpage,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/profile',
  name: 'profile',
  component: Profile,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/components',
  name: 'components',
  component: Component,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/error-404',
  name: 'error-404',
  component: Error404
},
{
  path: '/error-500',
  name: 'error-500',
  component: Error500
},
{
  path: '/clipboard',
  name: 'clipboard',
  component: clipboard,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/counter',
  name: 'counter',
  component: counter,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/drag-drop',
  name: 'drag-drop',
  component: Dragdrop,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/lightbox',
  name: 'lightbox',
  component: Lightbox,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/notification',
  name: 'notification',
  component: notification,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/barcode',
  name: 'barcode',
  component: Barcode,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/popover',
  name: 'popover',
  component: Popover,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/rangeslider',
  name: 'rangeslider',
  component: Rangeslider,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/rating',
  name: 'rating',
  component: Rating,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/ribbon',
  name: 'ribbon',
  component: Ribbon,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/scrollbar',
  name: 'scrollbar',
  component: Scrollbar,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/spinner',
  name: 'spinner',
  component: Spinner,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/stickynote',
  name: 'stickynote',
  component: Stickynote,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/sweetalerts',
  name: 'sweetalerts',
  component: Sweetalerts,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/text-editor',
  name: 'text-editor',
  component: Texteditor,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/timeline',
  name: 'timeline',
  component: timeline,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/toastr',
  name: 'toastr',
  component: toastr,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/tooltip',
  name: 'tooltip',
  component: tooltip,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/chart-apex',
  name: 'chart-apex',
  component: Chartapex,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/chart-c3',
  name: 'chart-c3',
  component: Chartc3,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/chart-flot',
  name: 'chart-flot',
  component: chartflot,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/chart-morris',
  name: 'chart-morris',
  component: chartmorris,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-feather',
  name: 'icon-feather',
  component: Iconfeather,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-flag',
  name: 'icon-flag',
  component: Iconflag,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-fontawesome',
  name: 'icon-fontawesome',
  component: Iconfontawesome,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-ionic',
  name: 'icon-ionic',
  component: Iconionic,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-pe7',
  name: 'icon-pe7',
  component: Iconpe7,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-simpleline',
  name: 'icon-simpleline',
  component: Iconsimpleline,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-themify',
  name: 'icon-themify',
  component: Iconthemify,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-typicon',
  name: 'icon-typicon',
  component: Icontypicon,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-weather',
  name: 'icon-weather',
  component: Iconweather,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/icon-material',
  name: 'icon-material',
  component: iconmaterial,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-basic-inputs',
  name: 'form-basic-inputs',
  component: Formbasicinputs,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-fileupload',
  name: 'form-fileupload',
  component: Formfileupload,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-horizontal',
  name: 'form-horizontal',
  component: Formhorizontal,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-input-groups',
  name: 'form-input-groups',
  component: Forminputgroups,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-mask',
  name: 'form-mask',
  component: Formmask,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-select2',
  name: 'form-select2',
  component: Formselect2,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-validation',
  name: 'form-validation',
  component: Formvalidation,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-vertical',
  name: 'form-vertical',
  component: Formvertical,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/form-wizard',
  name: 'form-wizard',
  component: FormWizard,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/chart-js',
  name: 'chart-js',
  component: chartJS,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/data-tables',
  name: 'data-tables',
  component: Datatable,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/tables-basic',
  name: 'tables-basic',
  component: Tablesbasic,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/calendar',
  name: 'calendar',
  component: calendar,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/chat',
  name: 'chat',
  component: chat,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/email',
  name: 'email',
  component: Email,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/customerreport',
  name: 'customerreport',
  component: customerreport,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/inventoryreport',
  name: 'inventoryreport',
  component: Inventoryreport,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/invoicereport',
  name: 'invoicereport',
  component: Invoicereport,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/purchaseorderreport',
  name: 'purchaseorderreport',
  component: Purchaseorderreport,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/purchasereport',
  name: 'purchasereport',
  component: Purchasereport,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/salesreport',
  name: 'salesreport',
  component: Salesreport,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/supplierreport',
  name: 'supplierreport',
  component: Supplierreport,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/newuser',
  name: 'newuser',
  component: Newuser,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/newuseredit',
  name: 'newuseredit',
  component: Newuseredit,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/userlists',
  name: 'userlists',
  component: userlists,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/currencysettings',
  name: 'currencysettings',
  component: currencysettings,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/createpermission',
  name: 'createpermission',
  component: createpermission,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/editpermission',
  name: 'editpermission',
  component: Editpermission,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/emailsettings',
  name: 'emailsettings',
  component: Emailsettings,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/generalsettings',
  name: 'generalsettings',
  component: Generalsettings,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/grouppermissions',
  name: 'grouppermissions',
  component: Grouppermissions,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/paymentsettings',
  name: 'paymentsettings',
  component: Paymentsettings,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/taxrates',
  name: 'taxrates',
  component: Taxrates,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/forgetpassword',
  name: 'forgetpassword',
  component: Forgetpassword
},
{
  path: '/resetpassword',
  name: 'resetpassword',
  component: Resetpassword,
  meta: {
    headerClass: 'header',
    sidebarClass: ''
}
},
{
  path: '/pos',
  name: 'pos',
  component: Pos,
  meta: {
    headerClass: 'header',
}
},
  ];
export const router = createRouter({
    history: createWebHistory('/vuejs/template-rtl/'),
    linkActiveClass: 'active',
    routes,
}); 

