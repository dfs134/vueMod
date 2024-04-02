<template>
  <div>
    <div class="top-text">
      {{ TopText }}
    </div>
    <DoctorInfoCard
      :pages="[
        {
          img: '2',
          Department: '소화기내과',
          doctor: '강형욱',
          docterMenu: '간질환',
        },
        {
          img: '2',
          Department: '영상의학과',
          doctor: '홍○동',
          docterMenu: '췌·담도질환(담석), 췌장암, 초음파 내시경',
        },
        {
          img: '3',
          Department: '심리치료학과',
          doctor: '둘리',
          docterMenu:
            '위장관질환, 장클리닉(염증성질환, 대장암, 변비), 치료내시경',
        },
        {
          img: '4',
          Department: '심리치료학과',
          doctor: '둘리',
          docterMenu: '간질환',
        },
        {
          img: '4',
          Department: '심리치료학과',
          doctor: '둘리',
          docterMenu: '위장관질환, 초음파내시경, 치료내시경',
        },
        {
          img: '4',
          Department: '심리치료학과',
          doctor: '둘리',
          docterMenu: '위장관질환, 초음파내시경, 치료내시경.',
        },
        {
          img: '4',
          Department: '심리치료학과',
          doctor: '둘리',
          docterMenu: '위장관질환, 초음파내시경, 치료내시경',
        },
        {
          img: '4',
          Department: '심리치료학과',
          doctor: '둘리',
          docterMenu: '위장관질환, 초음파내시경, 치료내시경',
        },
        {
          img: '4',
          Department: '심리치료학과',
          doctor: '둘리',
          docterMenu: '위장관질환, 초음파내시경, 치료내시경',
        },
        {
          img: '4',
          Department: '심리치료학과',
          doctor: '둘리',
          docterMenu: '위장관질환, 초음파내시경, 치료내시경',
        },
      ]"
    />
  </div>
</template>

<style scoped>
</style>

<script>
import DoctorInfoCard from "./components/DoctorCardInfo.vue";
export default {
  components: {
    DoctorInfoCard,
  },
  data() {
    return {
      TopText: "의사 카드",
    };
  },
};
</script>