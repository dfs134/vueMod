<template>
  <div>
    <div class="bg-color">
      <div class="top-text">
        <img src="@/img/nurse/calling.png" alt="" />
        <div>
          <h1>{{ TopText }}</h1>
          <h3>{{ BottomText }}</h3>
        </div>
      </div>
      <div class="nurse-img">
        <img src="@/img/nurse/nurse.png" alt="" />
      </div>
    </div>
    <!-- <TextCard /> -->
    <nurse-call-card :pages="calling" />
  </div>
</template>
  
<script>
import NurseCallCard from "./components/NurseCallCard.vue";

export default {
  name: "Standard",
  components: {
    NurseCallCard,
  },
  data() {
    return {
      TopText: "간호사 호출",
      BottomText: "필요한 사항을 선택하여 간호사 호출을 하실 수 있습니다.",
      calling: [
        {
          callMenu: "긴급 호출",
        },
        {
          callMenu: "환의 교환",
        },
        {
          callMenu: "침대시트 교환",
        },
        {
          callMenu: "폴대 요청",
        },
        {
          callMenu: "수액 교체",
        },
        {
          callMenu: "기타 문의",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="css" src="./css/CallNurse.css" scoped>
</style>