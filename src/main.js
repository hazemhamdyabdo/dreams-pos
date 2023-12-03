import { createApp } from 'vue';
import { router } from './router';
import App from "./App.vue";
import {BootstrapVue3, BToastPlugin} from 'bootstrap-vue-3'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import FlagIcon from 'vue-flag-icon';
import VueSelect from 'vue3-select2-component'
import DatePicker from 'vue3-datepicker'
import Vue3Autocounter from 'vue3-autocounter';
import Toaster from '@meforma/vue-toaster'
import SummernoteEditor from 'vue3-summernote-editor';
import VueSweetalert2 from 'vue-sweetalert2' 
import 'sweetalert2/dist/sweetalert2.min.css';
import StarRating from 'vue-star-rating'
import VueFeather from 'vue-feather';
import VueApexCharts from "vue3-apexcharts"; 
import VueEasyLightbox from "vue-easy-lightbox";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import VueFormWizard from "vue3-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

//shared
import GForm from './components/form/index.vue';
import GField from './components/form/inputs/field.vue';
import i18n from '@/libs/i18n';
/*********Header component**********/
import Header from './views/layouts/header.vue'
import Headertwo from './views/layouts/header-two.vue'
import HeaderPos from './views/layouts/headerpos.vue'
import Loader from './views/layouts/loader.vue'
import Headermenu from './components/headermenu.vue'
import Headertwomenu from './components/headertwomenu.vue'
import Mobilemenu from './components/mobilemenu.vue'
import Headerlogo from './components/headerlogo.vue'
import Headerlogo1 from './components/headerlogo1.vue'
/*********Sidebar component**********/
import Sidebar from './views/layouts/sidebar.vue'
import SidebarOne from './views/layouts/sidebarone.vue'
import Sidebarfour from './views/layouts/sidebarfour.vue'
import Indextwomenu from './components/indextwomenu.vue'
/*********Pageheader component**********/
import PageHeader from './components/pageheader/pageheader.vue'
import PageaddHeader from './components/pageheader/pageaddheader.vue'
import breadcrumb from './components/pageheader/breadcrumb.vue'
/*********Dashboard**********/
import DashboardPage from './views/pages/dashboard/indexpage.vue'
import Searchpart from './views/pages/charts/searchpart.vue'
import Addressform from './views/pages/forms/horizontal/addressform'
import Basicform from './views/pages/forms/horizontal/basicform'
import Personaldetail from './views/pages/forms/horizontal/personaldetail'
import Personalinformation from './views/pages/forms/horizontal/personalinformation'
import SupplierPaymentreport from './views/pages/report/supplierreport/payment'
import Supplierreturnreport from './views/pages/report/supplierreport/return'
import Contexttable from './views/pages/table/contexttable'

/*********Modal component**********/
import SalesListModal from './views/pages/sales/saleslistmodal.vue'
import SupplierListmodal from './views/pages/people/supplierlistmodal.vue'
import Userlistmodal from './views/pages/people/userlistmodal.vue'
import StateListmodal from './views/pages/places/statelistmodal.vue'
import StoreListmodal from './views/pages/places/storelistmodal.vue'
import CountrylistModal from './views/pages/places/countrylist/countrylistmodal.vue'
import CalendarModal from './views/pages/application/calendar/calendarmodal.vue'
import CurrencysettingsModal from './views/pages/settings/currencysetting/currencysettingsmodal'
import paymentsetmodal from './views/pages/settings/paymentsetmodal'
import TaxrateSmodal from './views/pages/settings/taxratesmodal'
import POSmodal from './views/pages/pos/posmodal.vue'

import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'./assets/plugins/summernote/dist/summernote-lite.min.css';
import'./assets/plugins/summernote/dist/summernote-lite.min.js';
import 'ionicons-npm/css/ionicons.css';
import 'material-icons/css/material-icons.min.css';
import 'material-icons/css/material-icons.css';
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
import 'typicons.font/src/font/typicons.css';
import 'weathericons/css/weather-icons.css'
import './assets/css/vue-form-wizard.css';
import './assets/css/style.css';
import swal from 'sweetalert2';
window.Swal = swal;
const app = createApp(App)
/*********Header component**********/
app.component('layouts', Header)
app.component('layoutstwo', Headertwo)
app.component('headerpos', HeaderPos)
app.component('loader', Loader)
app.component('headermenu', Headermenu)
app.component('headertwomenu', Headertwomenu)
app.component('mobilemenu', Mobilemenu)
app.component('headerlogo', Headerlogo)
app.component('headerlogo1', Headerlogo1)
/*********Sidebar component**********/
app.component('sidebar', Sidebar)
app.component('sidebarone', SidebarOne)
app.component('sidebarfour', Sidebarfour)
app.component('indextwosidebar', Indextwomenu)

/*********Pageheader component**********/
app.component('pageheader', PageHeader)
app.component('pageaddheader', PageaddHeader)
app.component('breadcrumb', breadcrumb)

/*********Modal component**********/
app.component('saleslistmodal', SalesListModal);
app.component('supplierlistmodal', SupplierListmodal);
app.component('userlistmodal', Userlistmodal);
app.component('statelistmodal', StateListmodal);
app.component('storelistmodal', StoreListmodal);
app.component('countrylistmodal', CountrylistModal);
app.component('calendarmodal', CalendarModal);
app.component('currencysettingsmodal', CurrencysettingsModal);
app.component('paymentsetmodal', paymentsetmodal);
app.component('taxratesmodal', TaxrateSmodal);
app.component('posmodal', POSmodal);

/*********Dashboard**********/
app.component('indexpage', DashboardPage);
app.component('searchpart', Searchpart)
app.component('personaldetail', Personaldetail);
app.component('personalinformation', Personalinformation);
app.component('payment', SupplierPaymentreport);
app.component('return', Supplierreturnreport);
app.component('addressform', Addressform);
app.component('basicform', Basicform);
app.component('contexttable', Contexttable);


app.component('vue-select', VueSelect);
app.component('datepicker', DatePicker);
app.component('vue3-autocounter', Vue3Autocounter)
app.component(VueFeather.name, VueFeather);
app.component('star-rating', StarRating)
app.component('SummernoteEditor', SummernoteEditor);
//shaared
app.component('gform',GForm);
app.component('gfield', GField);
app.use(Toaster, {
    position: "top-right",
  });
  app.use(i18n);
app.use(CoolLightBox);
app.use(VueSweetalert2)
app.use(VueEasyLightbox);
app.use(VueApexCharts)
app.use(FlagIcon)
.use(VueFormWizard)
.use(Antd)
.use(BootstrapVue3)
.use(BToastPlugin)
app.use(router).mount('#app');

