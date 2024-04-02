<template>
  <div>
    <div class="top-text">
      {{ TopText }}
    </div>
    <!-- <TextCard /> -->
    <hospitalLifeCard
      :pages="pages"
    />
  </div>
</template>

<script>
import hospitalLifeCard from "./components/hospitalLifeCard.vue";
export default {
  name: "hospitalLife",
  components: {
    hospitalLifeCard,
  },
  data() {
    return {
      TopText: "병원안내",
      pages : [
      {
          img: '썸네일_환자권리장전', // 환자 권리와 의무
        },
        {
          router: '/dm09/hospital/child/MedicalIntorduction',
          img: '썸네일_의료진소개', // 의료진 소개
        },
        {
          router: '/dm09/hospital/child/HospitalLifeGuide',
          img: '썸네일_입원생활안내', // 입원생활 안내
        },
        {
          router: '/dm09/hospital/child/SafetyMgmtInfo',
          img: '썸네일_입원생활안전관리', // 입원생활 안전관리 안내
        },
        {
          router: '/dm09/hospital/child/FloorGuide',
          img: '썸네일_층별안내', // 층별안내
        },
        {
          router: '/dm09/hospital/child/HealthCheckInfo',
          img: '썸네일_건강검진', // 건강검진 안내
        },
        {
          // router:'dm09/hospital/child/ReligiousLife',
          img: '썸네일_종교생활안내', // 종교생활 안내
        },
        {
          router: '/dm09/hospital/child/DischargeInfo',
          img: '썸네일_퇴원안내', // 퇴원안내
        },
        {
          router: '/dm09/hospital/child/LocationPark',
          img: '썸네일_병원위치와주차안내', // 병원 위치 및 주차안내
        },
        {
          router: '/dm09/hospital/child/HospitalIntroVidio',
          img: '썸네일_병원소개영상', // 병원 소개영상 시청
        },
      ]
    };
  },
  methods: {
    chingAtr: function () {
      const page = document.querySelectorAll(".row a");
      const me = this;
      page[0].addEventListener("click", function () {
        me.$router.replace({
          name: "RightsAndDuties",
          query: { img: "환자권리장전" },
        });
      });
      page[6].addEventListener("click", function () {
        me.$router.replace({
          name: "RightsAndDuties",
          query: { img: "종교_생활_안내" },
        });
      });
    },
  },
  created() {},
  mounted() {
    this.chingAtr();
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
};
</script>