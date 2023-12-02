<template>
  <!-- Header -->
  <div :class="$route.meta.headerClass">
    <headerlogo1 />

    <a id="mobile_btn" class="mobile_btn" href="#sidebar">
      <span class="bar-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </a>

    <headermenu />

    <mobilemenu />
  </div>
  <!-- Header -->
</template>
<script>
export default {
  components: {},
};
</script>
