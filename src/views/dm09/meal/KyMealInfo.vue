<template>
  <div>
    <div class="top-text">
      <div>{{ TopText }}</div>
      <div>{{ BottomText }}</div>
    </div>
    <!-- <TextCard /> -->
    <ky-standard-card :pages="BigMenu" />
    <Ky-small-card :pages="SmallMenu" />
  </div>
  <div class="bacImg"></div>
</template>
  
<script>
import KyStandardCard from "./components/KyStandardCard.vue";
import KySmallCard from "./components/KySmallCard.vue";

export default {
  name: "KyMealInfo",
  components: {
    KyStandardCard,
    KySmallCard,
  },
  data() {
    return {
      TopText: "식사안내",
      BottomText: "영양정보",
      query: [
        "식사_제공안내",
        "영양_상담안내",
        "원산지_안내",
        "입원환자_식대_안내",
      ],
      BigMenu: [
        {
          img: "나의 식사 신청 big",
        },
        {
          img: "환자 식단 안내 big",
        },
      ],
      SmallMenu: [
        {
          img: "식사 만족도 조사",
        },
        {
          img: "식사_제공_안내",
        },
        {
          img: "영양_상담_안내",
        },
        {
          img: "원산지_안내",
        },
        {
          img: "입원환자_식대안내",
        },
      ],
    };
  },
  methods: {
    routerLink: function () {
      const page = document.querySelectorAll(".row a");
      const me = this;
      page[0].addEventListener("click", function () {
        me.$router.replace({ name: "KyMealInfo" });
        alert("서비스 준비중 입니다.");
      });
      page[1].addEventListener("click", function () {
        me.$router.replace({ name: "KyDietGuide" });
      });
    },
    routerClick: function () {
      let i = 0;
      for (i; i < this.SmallMenu.length; i++) {
        this.SmallMenu[i].idx = i;
        if (this.SmallMenu[i].idx == 0) {
          this.SmallMenu[i].router = "/dm09/meal/child/KyMealSatisfaction";
        } else if (this.SmallMenu[i].idx != 0) {
          this.SmallMenu[i].router =
            "/dm09/meal/child/KyMealImgFull?idx=" + this.SmallMenu[i].idx;
        }
      }
    },
  },
  created() {},
  mounted() {
    this.routerLink();
    this.routerClick();
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
};
</script>
<style lang="css" src="./css/KyMealInfo.css" scoped>
</style>