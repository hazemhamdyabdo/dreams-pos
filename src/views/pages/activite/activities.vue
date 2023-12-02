<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />
        <!-- /product list -->
        <div class="activity">
          <div class="activity-box">
            <ul class="activity-list">
              <li v-for="item in activities" :key="item.id">
                <div class="activity-user">
                  <router-link
                    to="profile"
                    title=""
                    data-toggle="tooltip"
                    data-original-title="Lesley Grauer"
                  >
                    <img
                      alt="Lesley Grauer"
                      :src="require(`../../../assets/img/customer/${item.img}`)"
                      class="img-fluid"
                    />
                  </router-link>
                </div>
                <div class="activity-content">
                  <div class="timeline-content">
                    <router-link to="profile" class="name">{{ item.name }}</router-link>
                    {{ item.product }}
                    <a href="javascript:void(0);">{{ item.phone }}</a>
                    <span class="time">{{ item.time }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- /product list -->
      </div>
    </div>
  </div>
</template>
<script>
import activities from "../../../assets/json/activities.json";
export default {
  data() {
    return {
      activities: activities,
      title: "All Notifications",
      title1: "View your all activities",
    };
  },
  name: "activities",
};
</script>
