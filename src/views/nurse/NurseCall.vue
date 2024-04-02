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
    <NurseCallCard :pages="pages" />
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
      pages: [
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
  
<style scoped>
.top-text {
  margin-right: 59px;
}
.top-text img {
  width: 171px;
  height: 171px;
}
.bg-color {
  background-color: #7dc242;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
}
.bg-color .top-text h1,
.bg-color .top-text h3 {
  color: #fff;
}
.bg-color .top-text h1 {
  font-size: 70px;
  font-weight: 500;
  line-height: 84px;
}
.bg-color .top-text h3 {
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
}
.bg-color .nurse-img {
  align-self: flex-end;
}
</style>