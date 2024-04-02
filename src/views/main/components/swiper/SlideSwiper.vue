<template>
  <div class="wiper-width">
    <swiper
      tabindex="-1"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      loop=""
      effect="fade"
      :slides-per-view="1"
      :speed="1200"
      navigation
      :parallax="false"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <!-- 슬라이드 1개 -->
      <swiper-slide class="wrap-swiper" tabindex="-1">
        <div class="title title-left" data-swiper-parallax="-200">
          <div class="banner-top">
            <div class="name">
              <strong>{{ patient.name }}</strong> 님 반갑습니다.
            </div>
            <div class="info">퇴원예정일자 : {{ patient.discharge }}</div>
          </div>
          <div class="banner-bottom">
            <div>
              <h3>주치의 (회진시간 {{ doctor.time }})</h3>
            </div>
            <div>
              <mini-info-card
                :icon="{
                  component: 'ni ni-curved-next',
                  background: 'success',
                }"
                :department="doctor.class"
                :name="doctor.name"
                :description="doctor.medical"
              />
            </div>
          </div>
        </div>
        <div class="title title-right">
          <div class="name">
            <span>오늘의 일정</span>
          </div>
          <ul>
            <li v-for="item in schedule" :key="item">
              <span><CircleOrigin /></span><span>{{ item.time }}</span>
              <span>{{ item.msg }}</span>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <!-- 이미지 슬라이드 -->
      <swiper-slide class="wrap-swiper" v-for="imgs in bannerImg" :key="imgs">
        <router-link tabindex="-1" v-bind:to="`/${imgs.router}`"
          ><img
            :src="require(`@/img/main/${imgs.img}.png`)"
            alt=""
            class="swiper-img"
        /></router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  Autoplay,
  Parallax,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import MiniInfoCard from "./MiniInfoCard.vue";
import CircleOrigin from "@/components/icons/CircleOrigin.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MiniInfoCard,
    CircleOrigin,
  },
  data() {
    return {
      patient: {
        name: "홍○동",
        discharge: "정보 없음",
      },
      doctor: {
        time: "10:00",
        class: "영상의학과",
        name: "홍○동",
        medical: "간질환",
      },
      schedule: [
        { time: "06:40", msg: "혈액검사" },
        { time: "07:30", msg: "혈당검사" },
        { time: "10:00", msg: "CT" },
        { time: "15:40", msg: "수술" },
      ],
      bannerImg: [
        { img: "슬라이드1", router: "Main" },
        { img: "슬라이드2", router: "Main" },
      ],
    };
  },
  setup() {
    const onSwiper = () => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [
        Navigation,
        Pagination,
        Scrollbar,
        EffectFade,
        Autoplay,
        Parallax,
      ],
    };
  },
  methods: {
    tabIndex: function () {
      const prev = document.querySelector(".swiper-button-prev");
      const next = document.querySelector(".swiper-button-next");
      const pagination = document.querySelectorAll(".swiper-pagination-bullet");
      prev.tabIndex = "-1";
      next.tabIndex = "-1";
      pagination.forEach(function (item) {
        item.tabIndex = "-1";
      });
    },
  },
  mounted() {
    this.tabIndex();
  },
};
</script>

<style lang="css" src="./css/SlideSwiper.css" scoped>
</style>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comforter&family=Noto+Sans+KR:wght@700&family=Roboto:wght@700&display=swap");

.wrap-swiper {
  position: relative;
  font-family: "Roboto", "Noto Sans KR", sans-serif;
  img {
    filter: brightness(85%);
    z-index: 2;
    width: 100%;
  }
  .title {
    width: 30%;
  }
  .title-left {
    position: absolute;
    z-index: 1;
    top: 8%;
    left: 127px;
    color: black;
    .banner-bottom {
      margin-top: 5%;
    }
  }
  .title-right {
    position: absolute;
    z-index: 1;
    top: 10%;
    right: 11%;
    color: black;

    ul {
      padding-left: 0;
      padding-top: 30px;
    }
  }
  @media (max-width: 1000px) {
    .title {
      font-size: 25px;
      position: absolute;
      z-index: 1;
      color: black;
    }
    img {
      width: 800px;
    }
  }
}
.sliderWrapper {
  :global(.swiper-pagination-bullet) {
    background-color: white;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    opacity: 1;
  }

  :global(.swiper-pagination-bullet-active) {
    background-color: rgb(42, 201, 60);
    height: 1rem;
    border-radius: 0.5rem;
  }
  :global(.swiper-pagination-bullet:focus) {
    border: 3px solid rgb(42, 201, 60);
  }

  :global(.swiper-button-prev:focus) {
    border: 3px solid rgb(42, 201, 60);
  }
  :global(.swiper-button-next:focus) {
    border: 3px solid rgb(42, 201, 60);
  }
  :global(.swiper-slide:focus) {
    border: 3px solid rgb(42, 201, 60);
  }
}
</style>