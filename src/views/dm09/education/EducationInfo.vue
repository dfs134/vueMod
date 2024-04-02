<template>
  <div>
    <div class="top-text">
      {{ TopText }}
    </div>
    <!-- <TextCard /> -->
    <standard-text-card :pages="Education" />
  </div>
</template>
  
<script>
import StandardTextCard from "./components/StandardTextCard.vue";

export default {
  name: "education-info",
  components: {
    StandardTextCard,
  },
  data() {
    return {
      TopText: "교육 동영상",
      Education: [
        {
          img: "화재사고_예방",
          imgTitle: "화재사고_예방",
        },
        {
          img: "감염병예방",
          imgTitle: "감염병예방",
        },
        {
          img: "낙상_방지(소아)",
          imgTitle: "낙상_방지(소아)",
        },
        {
          img: "낙상_방지",
          imgTitle: "낙상_방지",
        },
        {
          img: "소방청_홍보동영상",
          imgTitle: "소방청_홍보동영상",
        },
        {
          img: "심장충격기_사용방법",
          imgTitle: "심장충격기_사용방법",
        },
        {
          img: "연명의료결정법",
          imgTitle: "연명의료결정법",
        },
        {
          img: "옥내_소화전_사용방법",
          imgTitle: "옥내_소화전_사용방법",
        },
        {
          img: "환자경험평가",
          imgTitle: "환자경험평가",
        },
      ],
    };
  },
  methods: {
    routerLink: function () {
      let i = 0;
      for (i; i < this.Education.length; i++) {
        this.Education[i].idx = i;
        this.Education[i].router =
          "/dm09/education/EducationViedo?idx=" + this.Education[i].idx;
      }
    },
  },
  mounted() {
    this.routerLink();
  },
};
</script>
