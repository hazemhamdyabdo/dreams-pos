import { createRouter, createWebHistory } from 'vue-router';
import Addbrand from '../views/pages/product/addbrand';
import Addcategory from '../views/pages/product/addcategory';
import Addproduct from '../views/pages/product/addproduct';
import Brandlist from '../views/pages/product/brandlist';
import Categorylist from '../views/pages/product/categorylist';
import Editbrand from '../views/pages/product/editbrand';
import Editcategory from '../views/pages/product/editcategory';
import Editproduct from '../views/pages/product/editproduct';
import Editsubcategory from '../views/pages/product/editsubcategory';
import Importproduct from '../views/pages/product/importproduct';
import ProductDetails from '../views/pages/product/product-details';
import Productlist from '../views/pages/product/productlist';
import Subaddcategory from '../views/pages/product/subaddcategory';
import Subcategorylist from '../views/pages/product/subcategorylist';
import Index from '../views/pages/dashboard/index';
import IndexOne from '../views/pages/dashboard/index-one';
import IndexTwo from '../views/pages/dashboard/index-two';
import IndexThree from '../views/pages/dashboard/index-three';
import IndexFour from '../views/pages/dashboard/index-four';
import Barcode from '../views/pages/product/barcodeproduct/barcode';
import Newuser from '../views/pages/users/newuser';
import Newuseredit from '../views/pages/users/newuseredit';
import Signin from '../views/pages/auth/signin';
import Signup from '../views/pages/auth/signup';
import Forgetpassword from '../views/pages/auth/forgetpassword';
import banks from '../views/pages/PublicCodes/banks/List.vue';
import EditBanks from '../views/pages/PublicCodes/banks/Edit.vue';
import AddBank from '../views/pages/PublicCodes/banks/Edit.vue';
import PaymentMehtod from '../views/pages/PublicCodes/Paymentmethods/List.vue'
const routes = [
  {
    path: '/',
    name: 'signin',
    component: Signin,
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
      sidebarClass: '',
    },
  },
  {
    path: '/index-one',
    name: 'index-one',
    component: IndexOne,
    meta: {
      headerClass: 'header header-one',
      headerthreeClass: 'sidebar new-header sidebar-one',
      sidebarClass: 'sidebar-one hide-sidebar',
    },
  },
  {
    path: '/index-two',
    name: 'index-two',
    component: IndexTwo,
    meta: {
      headerClass: 'header header-two',
      divClass: 'container',
    },
  },
  {
    path: '/index-three',
    name: 'index-three',
    component: IndexThree,
    meta: {
      headerClass: 'header header-three',
      headerthreeClass: 'sidebar side-three new-header',
      divClass: 'container',
      sidebarClass: 'sidebar-three hide-sidebar',
    },
  },
  {
    path: '/index-four',
    name: 'index-four',
    component: IndexFour,
    meta: {
      headerClass: 'header header-four',
      hideClass: 'v-cloak',
    },
  },
  {
    path: '/addbrand',
    name: 'addbrand',
    component: Addbrand,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/addcategory',
    name: 'addcategory',
    component: Addcategory,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: Addproduct,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/brandlist',
    name: 'brandlist',
    component: Brandlist,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/categorylist',
    name: 'categorylist',
    component: Categorylist,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/editbrand',
    name: 'editbrand',
    component: Editbrand,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/editcategory',
    name: 'editcategory',
    component: Editcategory,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/editproduct',
    name: 'editproduct',
    component: Editproduct,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/editsubcategory',
    name: 'editsubcategory',
    component: Editsubcategory,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/importproduct',
    name: 'importproduct',
    component: Importproduct,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/product-details',
    name: 'product-details',
    component: ProductDetails,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: Productlist,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/subaddcategory',
    name: 'subaddcategory',
    component: Subaddcategory,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/subcategorylist',
    name: 'subcategorylist',
    component: Subcategorylist,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/newuser',
    name: 'newuser',
    component: Newuser,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/banks',
    name: 'banks',
    component: banks,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/addBank',
    name: 'addBank',
    component: EditBanks,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/editBank/id',
    name: 'editBank',
    component: AddBank,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/PaymentMehtod',
    name: 'PaymentMehtod',
    component: PaymentMehtod,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/newuseredit',
    name: 'newuseredit',
    component: Newuseredit,
    meta: {
      headerClass: 'header',
      sidebarClass: '',
    },
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: Forgetpassword,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  // linkActiveClass: 'active',
  routes,
});
