<template>
  <div>
    <div class="top-text">
      <img
        src="@/img/template/심볼.png"
        alt=""
        style="margin-right: 15px; padding-bottom: 10px"
      />
      <span>{{ TopText }}</span>
    </div>
    <!-- <TextCard /> -->
    <small-card :pages="temp" @clk="clk($event, index)" />
  </div>
</template>
  
<script>
import SmallCard from "./components/SmallCard.vue";
export default {
  // 의료진 소개
  name: "MedicalIntorduction",
  components: {
    SmallCard,
  },
  data() {
    return {
      TopText: "의료진 소개",
      temp: [
        {
          path: "MedicalIntorduction",
          img: "신장내과",
        },
        {
          path: "MedicalIntorduction",
          img: "감염내과",
        },
        {
          path: "MedicalIntorduction",
          img: "내분비내과",
        },
        {
          path: "MedicalIntorduction",
          img: "류마티스내과",
        },
        {
          path: "MedicalIntorduction",
          img: "비뇨의학과",
        },
        {
          path: "MedicalIntorduction",
          img: "산부인과",
        },
        {
          path: "MedicalIntorduction",
          img: "성형외과",
        },
        {
          path: "MedicalIntorduction",
          img: "소아청소년과",
        },
        {
          path: "MedicalIntorduction",
          img: "소화기내과",
        },
        {
          path: "MedicalIntorduction",
          img: "신경과",
        },
        {
          path: "MedicalIntorduction",
          img: "신경외과",
        },
        {
          path: "MedicalIntorduction",
          img: "심장내과",
        },
        {
          path: "MedicalIntorduction",
          img: "안과",
        },
        {
          path: "MedicalIntorduction",
          img: "외과",
        },
        {
          path: "MedicalIntorduction",
          img: "유방·갑상선클리닉",
        },
        {
          path: "MedicalIntorduction",
          img: "유전상담클리닉",
        },
        {
          path: "MedicalIntorduction",
          img: "이비인후과",
        },
        {
          path: "MedicalIntorduction",
          img: "재활의학과",
        },
        {
          path: "MedicalIntorduction",
          img: "정신건강의학과",
        },
        {
          path: "MedicalIntorduction",
          img: "정형외과",
        },
        {
          path: "MedicalIntorduction",
          img: "피부과",
        },
        {
          path: "MedicalIntorduction",
          img: "혈액종양내과",
        },
        {
          path: "MedicalIntorduction",
          img: "호흡기·알레르기내과",
        },
      ],
    };
  },
  methods: {
    routerLink: function () {
      let i = 0;
      for (i; i < this.temp.length; i++) {
        this.temp[i].idx = i;
        this.temp[i].url =
          "/dm09/hospital/child_second/MedicalStaffIntro?idx=" +
          this.temp[i].idx;
      }
    },
    // routerLink: function () {
    //   let i = 0;
    //   for (i; i < this.temp.length; i++) {
    //     this.temp[i].idx = i;
    //     if (this.temp[i].idx == 0) {
    //       this.temp[0].url =
    //         "/dm09/hospital/child_second/MedicalStaffIntro?idx=" +
    //         this.temp[0].idx;
    //     } else if (this.temp[i].idx == 1) {
    //       this.temp[1].url =
    //         "/dm09/hospital/child_second/MedicalStaffIntro?idx=" +
    //         this.temp[1].idx;
    //     } else {
    //       this.temp[i].url = "/dm09/hospital/child/MedicalIntorduction";
    //     }
    //   }
    // },
    // clk: function (index) {
    //   if (index === 0 || index === 1) {
    //     console.log("this");
    //   } else {
    //     alert("서비스 준비중 입니다.");
    //   }
    // },
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
  
<style scoped>
</style>