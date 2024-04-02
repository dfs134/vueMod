<!--
=========================================================
* Vue Argon Dashboard 2 PRO - v3.0.1
=========================================================

* Product Page: https://creative-tim.com/product/vue-argon-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->

<template>
  <main class="main-content position-relative" v-bind:style="computedStyle">
    <router-view @changeImg="changeListImg" :img="img" />
  </main>
  <HomeButtonVue v-if="$route.name !== 'Main'" />
</template>
<script>
import { mapState } from "vuex";
import "./css/app.css";
import HomeButtonVue from "./components/HomeButton.vue";
import "./css/focus.css";

export default {
  name: "App",
  components: {
    HomeButtonVue,
  },
  data() {
    return {
      img:''
    }
  },  
  methods: {
    changeListImg: function (TextList) {
      const EvtTarget = event.currentTarget;
      const bgColor = document.querySelectorAll(".row .col");
      const EvtChild = event.currentTarget.childNodes;
      bgColor.forEach(function (item) {
        if (item.classList.contains("border-2")) {
          item.classList.remove("border-2");
          item.children[0].classList.remove("bg-green");
        }
      });
      EvtTarget.classList.add("border-2");
      EvtChild[0].classList.add("bg-green");
      this.img = TextList
    },
  },
  computed: {
    ...mapState(["layout", "showSidenav", "showFooter", "showConfig"]),
    computedStyle() {
      switch (this.$route.name) {
        case 'MealInfo':
        case 'KyMealInfo':
        case 'MealSatisfaction':
        case 'KyMealSatisfaction':
          return { backgroundColor: '#EBF5DF' };
        case 'PacsList':
          return { backgroundColor: '#E9ECEF' };
        case 'TestResults':
        case 'MedicineGuide':
        case 'Login':
        case 'MedicineGrideInfo':
        case 'TestResultsInfo':
          return { height: '1080px' };
        default:
          return { backgroundColor: 'white' };
      }
    }
  },
  created: function () {},
  mounted() {},
};
</script>

<style>
@font-face {
  font-family: "Gmarket Sans";
  src: url("assets/fonts/GmarketSansTTFLight.ttf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "Gmarket Sans";
  src: url("assets/fonts/GmarketSansTTFMedium.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Gmarket Sans";
  src: url("assets/fonts/GmarketSansTTFBold.ttf") format("truetype");
  font-weight: 500;
}
</style>
<style lang="css" src="./css/card-templete.css"></style>
<style lang="css" src="./css/list-templete.css"></style>