<template>
  <div>
    <div class="top-text">
      {{ TopText }}
    </div>
    <!-- <TextCard /> -->
    <BigCard
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
import BigCard from "./components/BigCard.vue";
export default {
  name: "Standard",
  components: {
    BigCard,
  },
  data() {
    return {
      TopText: "큰 심볼 박스",
    };
  },
};
</script>

<style scoped>
</style>