<template>
  <div class="flex-wrap">
    <div class="guide-left">
      <div class="guide-top">
        <div>
          <h1 class="txt-bold txt-40">검사결과</h1>
        </div>
      </div>
      <div class="guide-bottom zidx-2">
        <h2 class="txt-medium txt-40">{{ subDate }}</h2>
      </div>
      <bottom-circle />
    </div>
    <div class="guide-right">
      <div class="top-text">
        <div>
          <h2 class="txt-medium txt-40">
            <strong>{{ name }}</strong
            >님의 검사결과 입니다
          </h2>
          <h3 class="txt-medium txt-25">
            기본 진단검사에 한해서만 결과를 제공합니다. 최근 검사결과를 확인하실
            수 있습니다.
          </h3>
        </div>
      </div>
      <div class="contain">
        <orders-list-card
          :headers="['검사명', '결과', '참고치', '단위']"
          :lists="users"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OrdersListCard from "./components/OrdersListCard.vue";
import BottomCircle from "@/components/BottomCircle.vue";
import TestResultsInfo from "@/json/TestResultsInfo.json"
export default {
  name: "",
  components: {
    OrdersListCard: OrdersListCard,
    BottomCircle,
  },
  data() {
    return {
      TestResultsInfo:TestResultsInfo,
      name: "신○순",
      subDate: "",
      users: TestResultsInfo, // icon -> caret-up-fill : 화살표 위로, caret-down-fill : 화살표 아래로
    };
  },
  methods: {
    setTime: function () {
      let moment = require("moment");
      this.subDate = moment.utc().locale("ko").format("MM월 DD일");
    },
    innertColor: function () {
      const iClass = document.querySelectorAll(".align-middle i");
      iClass.forEach(function (item) {
        const pClass = item.parentNode.childNodes[0];
        if (item.classList.contains("bi-caret-up-fill")) {
          item.classList.add("red");
          pClass.classList.add("red");
        } else if (item.classList.contains("bi-caret-down-fill")) {
          item.classList.add("blue");
          pClass.classList.add("blue");
        }
      });
    },
  },
  mounted() {
    this.setTime();
    this.innertColor();
  },
};
</script>
<style lang="css" src="./css/TestResultsInfo.css" scoped>
</style>