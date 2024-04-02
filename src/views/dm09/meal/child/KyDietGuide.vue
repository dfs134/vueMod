<template>
  <div class="flex-wrap">
    <div class="guide-left">
      <div class="guide-top">
        <div>
          <h1 class="txt-bold txt-40">식단 안내</h1>
        </div>
        <ul class="txt-medium txt-25">
          <li
            v-for="(meal, index) in KyMeal"
            :key="index"
            v-on:click="menuClk($event, index)"
          >
            <button class="first-focus">{{ meal.name }}</button>
          </li>
        </ul>
      </div>
      <div class="guide-bottom zidx-2">
        <h2 class="txt-medium txt-40">{{ nowWeek }}</h2>
      </div>
      <bottom-circle />
    </div>
    <div class="guide-right">
      <div class="top-text">
        <h3 class="txt-medium txt-40">
          {{ TopText }} <strong class="txt-bold">{{ DietType }}</strong>
        </h3>
        <h5 class="txt-medium txt-25">{{ BottomText }}</h5>
      </div>
      <ky-diet-gride-card
        :day="[
          { meal0: nowDate, menu1: '오늘' },
          { meal0: nextDate, menu1: '내일' },
          { meal0: twoDate, menu1: '모레' },
        ]"
        :today="[
          {
            meal: morning,
            item: diet1[0].menu,
          },
          {
            meal: lunch,
            item: diet1[1].menu,
          },
          {
            meal: dinner,
            item: diet1[2].menu,
          },
        ]"
        :tomorrow="[
          {
            item: diet2[0].menu,
          },
          {
            item: diet2[1].menu,
          },
          {
            item: diet2[2].menu,
          },
        ]"
        :twodays="[
          {
            item: diet3[0].menu,
          },
          {
            item: diet3[1].menu,
          },
          {
            item: diet3[2].menu,
          },
        ]"
      />
    </div>
  </div>
  <div class="overflow"></div>
</template>

<script>
import KyDietGrideCard from "./components/KyDietGrideCard.vue";
import BottomCircle from "@/components/BottomCircle.vue";
import KyDietGuide from "@/json/KyDietGuide.json";
import KyMeal from "@/json/KyMeal.json";

export default {
  name: "DietGuide",
  components: {
    KyDietGrideCard,
    BottomCircle,
  },
  data() {
    return {
      KyDietGuide: KyDietGuide,
      KyMeal: KyMeal,
      TopText: "일반식",
      DietType: "상식",
      BottomText:
        "잡곡밥 형태로 제공되며, 간식은 환자의 질환 및 영양요구량에 근거하여 다르게 제공됩니다.",
      meal: [],
      nowWeek: "",
      nowDate: "",
      nextDate: "",
      twoDate: "",
      morning: "조식",
      lunch: "중식",
      dinner: "석식",
      diet1: [{ menu: "" }, { menu: "" }, { menu: "" }],
      diet2: [{ menu: "" }, { menu: "" }, { menu: "" }],
      diet3: [{ menu: "" }, { menu: "" }, { menu: "" }],
    };
  },
  methods: {
    setTime: function () {
      let moment = require("moment");
      this.nowTime = moment().format("HH:mm");
      this.nowWeek = moment.utc().locale("ko").format("MM월 DD일");
      this.nowDate = moment.utc().locale("ko").format("MM월 DD일 dddd");
      this.nextDate = moment
        .utc()
        .locale("ko")
        .add(1, "days")
        .format("MM월 DD일 dddd");
      this.twoDate = moment
        .utc()
        .locale("ko")
        .add(2, "days")
        .format("MM월 DD일 dddd");
    },
    menuClk: function (evt, index) {
      const chk = document.querySelectorAll("ul.txt-medium li button");
      chk.forEach(function (item) {
        if (item.classList.contains("on-active")) {
          item.classList.remove("on-active");
        }
      });
      const EvtTarget = evt.target;
      EvtTarget.classList.add("on-active");

      if (index >= 0 && index <= KyDietGuide.length) {
        const meal = KyDietGuide[index];
        if (index == 0 || index == 4) {
          meal.preventDefault();
        }
        this.TopText = meal.top;
        this.DietType = meal.select;
        for (let i = 0; i < 3; i++) {
          this.diet1[i].menu = meal.today[i].menu;
          this.diet2[i].menu = meal.nextDay[i].menu;
          this.diet3[i].menu = meal.twoNextDay[i].menu;
        }
      }
    },
    changeMenu : function(){
      let styles = {
        color: "#fff",
        padding: "20px 30px 0",
      };
      const newEle = document.querySelectorAll(".txt-medium li");
      newEle[0].outerHTML = '<h3 tabindex="-1">일반식</h3>';
      newEle[4].outerHTML = '<h3 tabindex="-1">치료식</h3>';
      const newTxt = document.querySelectorAll(".txt-medium h3");
      Object.assign(newTxt[0].style, styles);
      Object.assign(newTxt[1].style, styles);
    },
    firstChk: function () {
      const first = document.querySelector("ul.txt-medium li button");
      first.classList.add("on-active");
    },
    firstData : function(){
      this.TopText = KyDietGuide[1].top;
      this.DietType = KyDietGuide[1].select;
      for (let i = 0; i < 3; i++) {
        this.diet1[i].menu = KyDietGuide[1].today[i].menu;
        this.diet2[i].menu = KyDietGuide[1].nextDay[i].menu;
        this.diet3[i].menu = KyDietGuide[1].twoNextDay[i].menu;
      }

    }
  },
  created() {
    this.firstData();
  },
  mounted() {
    this.changeMenu();
    this.setTime();
    this.firstChk();
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
  computed:{
    
  }
};
</script>
<style lang="css" src="./css/KyDietGuide.css" scoped></style>
