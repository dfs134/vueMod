<template>
  <div class="header">
    <div class="header-img" tabindex="-1">
      <img :src="require(`@/img/main/${logo}.png`)" alt="" tabindex="-1" />
    </div>
    <!-- <div class="header-text" tabindex="-1">
      <p>BEST CARE, FAST CURE</p>
      <h6>마음을 담은 진료, 희망을 여는 병원</h6>
      <h6>건양대학교 병원</h6>
    </div> -->
    <div class="header-day" tabindex="-1">
      <div class="now-weather">
        <img tabindex="-1" :src="weatherImg" alt="" />
        <p>{{ weatherText }} °C</p>
      </div>
      <div class="now-time">
        <h1>{{ nowTime }}</h1>
        <h6>{{ nowWeek }}</h6>
      </div>
    </div>
  </div>
  <div class="banner">
    <slide-swiper />
  </div>
  <div class="contents">
    <div class=".container-lg">
      <main-card :ImgData="content" @modalBtn="modalBtn" />
    </div>
  </div>
  <!-- <PopUp v-show="modal" @close="close" /> -->
  <PopUp @close="close" />
  <!-- 템플릿 -->
  <HideShow />
</template>

<script>
import SlideSwiper from "./components/swiper/SlideSwiper.vue";
import MainCard from "./components/MainCard.vue";
import HideShow from "./components/HideShow.vue";
import PopUp from "./components/PopUp.vue";

export default {
  name: "Home",
  data() {
    return {
      // modal: false,
      timer: null,
      nowWeek: "",
      nowTime: "",
      logo: "logo",
      weatherImg: "",
      weatherText: "",
      content: [
        {
          router: "dm09/hospital/hospitalLife",
          contents: "썸네일_입원생활안내",
          types: 1,
        },
        {
          router: "Main",
          contents: "mod_tv",
          types: 2,
        },
        {
          router: "dm09/meal/KyMealInfo",
          contents: "환자_식단안내",
          types: 1,
        },
        {
          router: "dm09/hospital/nurse/CallNurse",
          contents: "간호사 호출",
          types: 2,
        },
        {
          router: "dm09/my_menu/MyMenu",
          contents: "나의메뉴",
          types: 2,
        },
        {
          router: "dm09/hospital/child/MedicalIntorduction",
          contents: "썸네일_의료진소개",
          types: 1,
        },
        {
          router: "dm09/external_service/CU",
          contents: "cu",
          types: 2,
        },
        {
          router: "dm09/external_service/CleaningRequest",
          contents: "청소요청",
          types: 2,
        },
        {
          router: "dm09/external_service/PacsList",
          contents: "PACS",
          types: 2,
        },
        {
          router: "dm09/hospital/child/HospitalIntroVidio",
          contents: "home_병원소개영상",
          types: 2,
        },
        {
          router: "dm09/hospital/child/HealthCheckInfo",
          contents: "home_건강검진",
          types: 2,
        },
        {
          router: "dm09/hospital/child/FloorGuide",
          contents: "home_층별안내",
          types: 2,
        },
        {
          router: "dm09/education/EducationInfo",
          contents: "home_교육동영상",
          types: 2,
        },
        {
          router: "remote_control/UseMethod",
          contents: "home_교육동영상",
          types: 2,
        },
      ],
    };
  },
  components: {
    SlideSwiper,
    MainCard,
    HideShow,
    PopUp,
  },
  methods: {
    // 시간 moment npm
    setTime: function () {
      let moment = require("moment");
      this.nowTime = moment().format("HH:mm");
      this.nowWeek = moment.utc().locale("ko").format("MM월 DD일 dddd");
    },
    // 날씨API
    weather: function () {
      const key = "704f2257c5a2ab16a52f82ee3314545e";
      this.$axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=36.3504119&lon=127.3845475&appid=${key}`
        )
        .then((response) => {
          // console.log(response);
          const weatherImg = response.data.weather[0].icon;
          this.weatherImg = `https://openweathermap.org/img/wn/${weatherImg}@2x.png`;
          const temp = response.data.main.temp;
          const change = Math.floor(temp - 273.15);
          this.weatherText = change;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 팍스 팝업
    modalBtn: function () {
      const open = document.querySelector(".modal");
      open.classList.add("add-block");
      // this.modal = true;
    },
    close: function () {
      const open = document.querySelector(".modal");
      open.classList.remove("add-block");
      // this.modal = false;
    },
  },
  created() {
    this.weather();
  },
  mounted() {
    var show = document.querySelector(".HideShow");
    var nodata = document.querySelector(".nodata");
    show.addEventListener("click", function () {
      nodata.style.visibility = "visible";
    });

    // 서비스 준비중
    const page = document.querySelectorAll(".small-img a");
    page[0].addEventListener("click", function () {
      alert("서비스 준비중 입니다.");
    });

    this.setTime();
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
};
</script>
<style lang="css" scoped src="./css/Main.css"></style>
