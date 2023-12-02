<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper cardhead">
      <div class="content">
        <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

        <div class="row">
          <!-- Lightbox -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <div class="card-title">Single Image Lightbox</div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div
                    class="col-md-4 mb-2 mb-md-0"
                    v-for="(src, index) in imgs"
                    :key="index"
                    @click="() => showImg(index)"
                  >
                    <img
                      :src="require(`../../../assets/img/${src.src}`)"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                  <vue-easy-lightbox
                    :visible="visible"
                    :imgs="img"
                    :index="index"
                    @hide="handleHide"
                  ></vue-easy-lightbox>
                </div>
              </div>
            </div>
          </div>
          <!-- /Lightbox -->

          <!-- Lightbox -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <div class="card-title">Image with Description</div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div
                    class="col-md-4 mb-2 mb-md-0"
                    v-for="(src, index) in images"
                    @click="() => showImg(index)"
                    :key="index"
                  >
                    <img
                      :src="require(`../../../assets/img/${src.src}`)"
                      class="img-fluid"
                      alt="work-thumbnail"
                    />
                  </div>
                  <vue-easy-lightbox
                    :visible="visible1"
                    :images="image"
                    :index="index"
                    @hide="handleHide"
                  ></vue-easy-lightbox>
                </div>
              </div>
            </div>
          </div>
          <!-- /Lightbox -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Lightbox",
      text: "Dashboard",
      text1: "Lightbox",
      name: "/index",
      visible: false,
      visible1: false,
      index: 0, // default: 0
      imgs: [
        {
          src: "img-01.jpg",
        },
        {
          src: "img-02.jpg",
        },
      ],
      images: [
        {
          src: "img-03.jpg",
        },
        {
          src: "img-04.jpg",
        },
        {
          src: "img-05.jpg",
        },
      ],
      img: [
        {
          src: "https://picsum.photos/785/501",
        },
        {
          src: "https://picsum.photos/785/502",
        },
      ],
      image: [
        {
          title: "Title 01",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
          src: "https://picsum.photos/785/503",
        },
        {
          title: "Title 02",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
          src: "https://picsum.photos/785/504",
        },
        {
          title: "Title 03",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
          src: "https://picsum.photos/785/505",
        },
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  name: "lightbox",
};
</script>
