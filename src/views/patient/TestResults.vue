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
      <BottomCircle />
    </div>
    <div class="guide-right">
      <div class="top-text">
        <div>
          <h2 class="txt-medium txt-40">
            <strong>{{ name }}</strong> 님의 검사결과 입니다
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

export default {
  name: "",
  components: {
    OrdersListCard: OrdersListCard,
    BottomCircle,
  },
  data() {
    return {
      name: "신○순",
      subDate: "",
      users: [
        {
          // icon -> caret-up-fill : 화살표 위로, caret-down-fill : 화살표 아래로
          // text-primary : 파란색, text-danger : 빨간색
          title: "화학검사(일반) > 음이온차",
          icon: "",
          values: ["9.1", "-", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "",
        },
        {
          title: "화학검사(일반) > 시스타틴 C",
          icon: "caret-up-fill red",
          values: ["5.34", "0.51~1.05", "mg/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "red",
        },
        {
          title: "화학검사(일반) > 이산화탄소",
          icon: "",
          values: ["27.4", "21~31", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "",
        },
        {
          title: "화학검사(일반) > 염소",
          icon: "caret-down-fill blue",
          values: ["96.5", "99~109", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "blue",
        },
        {
          title: "화학검사(일반) > 염소",
          icon: "",
          values: ["3.79", "3.5~5.0", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "",
        },
        {
          title: "화학검사(일반) > 나트륨",
          icon: "caret-down-fill blue",
          values: ["133", "135~145", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "blue",
        },
        {
          title: "화학검사(일반) > 총빌리루빈",
          icon: "",
          values: ["0.98", "0.2~1.3", "mg/㎗"],
          info: "Refund rate is lower with 97% than other products",
          color: "",
        },
        {
          title: "화학검사(일반) > 시스타틴 C",
          icon: "caret-down-fill blue",
          values: ["5.34", "0.51~1.05", "mg/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "blue",
        },
        {
          title: "화학검사(일반) > 이산화탄소",
          icon: "",
          values: ["27.4", "21~31", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "",
        },
        {
          title: "화학검사(일반) > 염소",
          icon: "",
          values: ["96.5", "99~109", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "",
        },
        {
          title: "화학검사(일반) > 염소",
          icon: "caret-down-fill blue",
          values: ["3.79", "3.5~5.0", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "blue",
        },
        {
          title: "화학검사(일반) > 나트륨",
          icon: "",
          values: ["133", "135~145", "mmol/L"],
          info: "Refund rate is lower with 97% than other products",
          color: "",
        },
        {
          title: "화학검사(일반) > 총빌리루빈",
          icon: "caret-up-fill red",
          values: ["0.98", "0.2~1.3", "mg/㎗"],
          info: "Refund rate is lower with 97% than other products",
          color: "red",
        },
      ],
    };
  },
  methods: {
    setNowTimes() {
      let myDate = new Date();
      let mm = myDate.getMonth() + 1;
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      this.subDate = mm + "월 " + dd + "일";
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);

    const change1 = document.querySelectorAll(
      ".align-middle > .text-center .mb-0"
    );
    const change2 = document.querySelectorAll(
      ".align-middle > .text-center .mt-1"
    );
    console.log(change1);
    console.log(change2);
  },
};
</script>

<style scoped>
.flex-wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
}
.guide-left {
  /* padding: 80px 0 50px 50px; */
  width: 250px;
  height: 1080px;
  background-color: #006940;
  display: flex;
  flex-flow: column;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.guide-left h1 {
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  padding-top: 78px;
}
.guide-bottom h2 {
  color: #fff;
  text-align: center;
  padding-bottom: 67px;
}
.guide-right {
  width: 86%;
  height: 100%;
  overflow-y: scroll;
}
.top-text {
  flex-flow: column;
  align-items: flex-start;
  margin: 0px 100px;
  padding-top: 78px;
  padding-bottom: 74px;
}
.top-text h2,
.top-text h3 {
  color: #000;
}
.guide-right .contain {
  margin: 0 170px 0 100px;
}
</style>