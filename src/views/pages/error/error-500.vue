<template>
  <div class="error-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="error-box">
        <h1>500</h1>
        <h3 class="h2 mb-3">
          <i class="fas fa-exclamation-circle"></i> Oops! Something went wrong
        </h3>
        <p class="h4 font-weight-normal">The page you requested was not found.</p>
        <router-link to="index" class="btn btn-primary">Back to Home</router-link>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
export default {
  name: "error-500",
};
</script>
