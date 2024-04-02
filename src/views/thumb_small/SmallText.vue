<template>
  <div>
    <div class="top-text">
      <img
        src="@/img/template/심볼.png"
        alt=""
        style="margin-right: 15px; padding-bottom: 10px"
      />
      {{ TopText }}
    </div>
    <!-- <TextCard /> -->
    <StandardCard
      :pages="[
        {
          img: '썸네일_건강검진',
          imgTitle: '썸네일_건강검진',
        },
        {
          img: '썸네일_병원위치와주차안내',
          imgTitle: '썸네일_병원위치와주차안내',
        },
        {
          img: '썸네일_의료진소개',
          imgTitle: '썸네일_의료진소개',
        },
        {
          img: '썸네일_입원생활안내',
          imgTitle: '썸네일_입원생활안내',
        },
        {
          img: '썸네일_입원생활안전관리',
          imgTitle: '썸네일_입원생활안전관리',
        },
        {
          img: '썸네일_종교생활안내',
          imgTitle: '썸네일_종교생활안내',
        },
        {
          img: '썸네일_층별안내',
          imgTitle: '썸네일_층별안내',
        },
        {
          img: '썸네일_퇴원안내',
          imgTitle: '썸네일_퇴원안내',
        },
        {
          img: '썸네일_환자의권리와의무',
          imgTitle: '썸네일_환자의권리와의무',
        },
        {
          img: '썸네일_건강검진',
          imgTitle: '썸네일_건강검진',
        },
        {
          img: '썸네일_병원위치와주차안내',
          imgTitle: '썸네일_병원위치와주차안내',
        },
        {
          img: '썸네일_의료진소개',
          imgTitle: '썸네일_의료진소개',
        },
        {
          img: '썸네일_입원생활안내',
          imgTitle: '썸네일_입원생활안내',
        },
        {
          img: '썸네일_입원생활안전관리',
          imgTitle: '썸네일_입원생활안전관리',
        },
        {
          img: '썸네일_종교생활안내',
          imgTitle: '썸네일_종교생활안내',
        },
        {
          img: '썸네일_층별안내',
          imgTitle: '썸네일_층별안내',
        },
        {
          img: '썸네일_퇴원안내',
          imgTitle: '썸네일_퇴원안내',
        },
        {
          img: '썸네일_환자의권리와의무',
          imgTitle: '썸네일_환자의권리와의무',
        },
      ]"
    />
  </div>
</template>

<script>
// import TextCard from '../../components/card/TextCard.vue'
import StandardCard from "./components/TextSmallCard.vue";
export default {
  name: "Standard",
  components: {
    StandardCard,
  },
  data() {
    return {
      TopText: "작은 텍스트 심볼 박스",
    };
  },
};
</script>

<style scoped>
</style>