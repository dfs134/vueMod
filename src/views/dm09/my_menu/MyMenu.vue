<template>
  <div>
    <div class="top-text">
      {{ TopText }}
    </div>
    <!-- <TextCard /> -->
    <standard-card :pages="myMenu" />
  </div>
</template>

<script>
import StandardCard from "./components/StandardCard.vue";
export default {
  name: "MyMenu",
  components: {
    StandardCard,
  },
  data() {
    return {
      TopText: "나의 메뉴",
      myMenu: [
        {
          router: "dm09/my_menu/MyMenu/child/PatientInfomation",
          img: "thumb2_환자정보",
        },
        {
          router: "dm09/my_menu/MyMenu/child/MedicineGrideInfo",
          img: "thumb2_복약안내",
        },
        {
          router: "dm09/my_menu/MyMenu/child/TestResultsInfo",
          img: "thumb2_검가결과조회",
        },
        {
          // 퇴원 예고
          img: "thumb2_퇴원예고안내",
        },
        {
          router: "dm09/my_menu/MyMenu/child/MediumCost",
          img: "thumb2_중간진료비",
        },
        {
          // 재증명 신청
          img: "thumb2_제증명신청",
        },
        {
          // 환자의 권리와 의무
          // router:'dm09/my_menu/MyMenu/child/MyImgFull',
          img: "썸네일_환자권리장전",
        },
      ],
    };
  },
  methods: {
    routerLink: function () {
      const page = document.querySelectorAll(".row a");
      const me = this;
      page[3].addEventListener("click", function () {
        me.$router.replace({
          name: "MyImgFull",
          query: { bigImg: "퇴원_예고_안내" },
        });
      });
      page[5].addEventListener("click", function () {
        me.$router.replace({
          name: "MyImgFull",
          query: { bigImg: "제증명_신청_안내" },
        });
      });
      page[6].addEventListener("click", function () {
        me.$router.replace({
          name: "MyImgFull",
          query: { bigImg: "환자권리장전" },
        });
      });
    },
  },
  mounted() {
    this.routerLink();
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
};
</script>
