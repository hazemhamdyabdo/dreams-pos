<template>
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />
        <!-- /add -->
        <div class="card">
          <div class="card-body">
            <gform>
      <b-row>
        <b-col md='4'>
          <gfield
            label-text="Code"
            rules="required"
          />
        </b-col>
        <b-col md="4">
          <gfield
          label-text="Name"
          >
          </gfield>
        </b-col>
    </b-row>
    </gform>
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
      selectedItem:{
       Code: ''
      },
      title: 'Product Add',
      title1: 'Create new product',
      Category: ['Choose Category', 'Computers'],
      SubCategory: ['Choose Sub Category', 'Fruits'],
      Brand: ['Choose Brand', 'Brand'],
      Unit: ['Choose Unit', 'Unit'],
      Tax: ['Choose Tax', '2%'],
      Percentage: ['Percentage', '10%', '20%'],
      Closed: ['Closed', 'Open'],
    };
  },
  name: 'addproduct',
};
</script>
