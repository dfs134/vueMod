<template>
  <div>
    <div class="top-text">
      <div>{{ TopText }}</div>
      <div>{{ BottomText }}</div>
    </div>
    <!-- <TextCard /> -->
    <StandardCard
      :pages="[
        {
          img: '나의 식사 신청 big',
        },
        {
          img: '환자 식단 안내 big',
        },
      ]"
    />
    <SmallCard
      :pages="[
        {
          img: '식사 만족도 조사',
        },
        {
          img: '식사 제공 안내',
        },
        {
          img: '영양 상담 안내',
        },
        {
          img: '원산지 안내',
        },
        {
          img: '입원 환자 식대 안내',
        },
      ]"
    />
  </div>
  <div class="bacImg"></div>
</template>
  
<script>
// import TextCard from '../../components/card/TextCard.vue'
import StandardCard from "./components/StandardCard.vue";
import SmallCard from "./components/SmallCard.vue";
export default {
  name: "meal-info",
  components: {
    StandardCard,
    SmallCard,
  },
  data() {
    return {
      TopText: "식사안내",
      BottomText: "영양정보",
    };
  },
  mounted() {},
};
</script>
  
<style scoped>
.contain {
  margin: 0 160px 0 140px;
}
.top-text {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-bottom: 110px;
}
.top-text div:last-child {
  font-weight: bold;
}
.bacImg {
  position: absolute;
  top: 0%;
  right: 0%;
  width: 60%;
  height: 100%;
  background-image: url(@/img/template/foodImg.png);
  z-index: 0;
  opacity: 90%;
  background-repeat: no-repeat;
}
</style>