<template>
  <div id="global-loader">
    <div class="whirly-loader"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(function () {
      $("#global-loader");
      setTimeout(function () {
        $("#global-loader").fadeOut("slow");
      }, 100);
    }, 500);
  },
};
</script>
