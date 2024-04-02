<template>
  <div>
    <div class="top-text">
      {{ TopText }}
    </div>
    <!-- <TextCard /> -->
    <StandardCard
      :pages="[
        {
          img: '썸네일_건강검진',
        },
        {
          img: '썸네일_병원위치와주차안내',
        },
        {
          img: '썸네일_의료진소개',
        },
        {
          img: '썸네일_입원생활안내',
        },
        {
          img: '썸네일_입원생활안전관리',
        },
        {
          img: '썸네일_종교생활안내',
        },
        {
          img: '썸네일_층별안내',
        },
        {
          img: '썸네일_퇴원안내',
        },
        {
          img: '썸네일_환자의권리와의무',
        },
      ]"
    />
  </div>
</template>

<script>
import StandardCard from "./components/StandardCard.vue";
export default {
  name: "Standard",
  components: {
    StandardCard,
  },
  data() {
    return {
      TopText: "표준 심볼 박스",
    };
  },
};
</script>

<style scoped>
</style>