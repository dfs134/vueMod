<template>
  <div class="flex-wrap">
    <div class="guide-left">
      <div class="guide-top">
        <div>
          <h1 class="txt-bold txt-40">식단 안내</h1>
        </div>
        <ul class="txt-medium txt-25">
          <li v-for="item in meal" :key="item" v-on:click="menuClk">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
      <div class="guide-bottom zidx-2">
        <h2 class="txt-medium txt-40">{{ subDate }}</h2>
      </div>
      <BottomCircle />
    </div>
    <div class="guide-right">
      <div class="top-text">
        <h3 class="txt-medium txt-40">
          {{ TopText }} <strong class="txt-bold">{{ DietType }}</strong>
        </h3>
        <h5 class="txt-medium txt-25">{{ BottomText }}</h5>
      </div>
      <DietGrideCard
        :day="[
          { meal0: nowDate, menu1: '오늘' },
          { meal0: nextDate, menu1: '내일' },
          { meal0: twoDate, menu1: '모레' },
        ]"
        :pages="[
          {
            meal: morning,
            menu: diet[0].menu1,
          },
          {
            menu: diet[1].menu2,
          },
          {
            menu: diet[2].menu3,
          },
          {
            meal: lunch,
            menu: diet[3].menu4,
          },
          {
            menu: diet[4].menu5,
          },
          {
            menu: diet[5].menu6,
          },
          {
            meal: dinner,
            menu: diet[6].menu7,
          },
          {
            menu: diet[7].menu8,
          },
          {
            menu: diet[8].menu9,
          },
        ]"
      />
    </div>
  </div>
  <div class="overflow"></div>
</template>

<script>
import DietGrideCard from "./components/DietGrideCard.vue";
import BottomCircle from "@/components/BottomCircle.vue";

export default {
  name: "DietGuide",
  components: {
    DietGrideCard,
    BottomCircle,
  },
  data() {
    return {
      TopText: "일반식",
      DietType: "상식",
      BottomText:
        "잡곡밥 형태로 제공되며, 간식은 환자의 질환 및 영양요구량에 근거하여 다르게 제공됩니다.",
      meal: [
        "일반식",
        "상식",
        "연식",
        "선택식",
        "치료식",
        "당뇨식",
        "신부전식",
        "투석식",
      ],
      timer: null,
      subDate: "",
      nowDate: "",
      nextDate: "",
      twoDate: "",
      morning: "조식",
      lunch: "중식",
      dinner: "석식",
      diet: [
        {
          menu1:
            "계란파국\n우사태찢은장조림\n꽃맛살샐러드\n고구마순나물\n볶음김치",
        },
        {
          menu2: "콩나물파국\n쭈꾸미볶음\n닭볶음탕\n청경채겉절이\n볶음김치",
        },
        {
          menu3:
            "된장국\n가자미콩나물찜\n닭볶음탕\n유자소스고구마맛탕\n볶음김치",
        },
        {
          menu4: "김치찌개\n두부&김치볶음\n닭볶음탕\n매콤호박볶음\n볶음김치",
        },
        {
          menu5: "미역국\n방어양념구이\n닭볶음탕\n오미무침\n볶음김치",
        },
        {
          menu6: "청국장\n수제닭강정\n닭볶음탕\n돈채볶음&꽃빵\n볶음김치",
        },
        {
          menu7: "매생이국\n치킨너겟\n닭볶음탕\n골뱅이무침\n볶음김치",
        },
        {
          menu8: "오뎅탕\n수제닭강정\n소시지볶음\n계란말이\n볶음김치",
        },
        {
          menu9: "부대찌개\n미역줄기볶음\n닭볶음탕\n돈까스\n볶음김치",
        },
      ],
      diet1: [
        {
          menu1:
            "계란파국\n우사태찢은장조림\n꽃맛살샐러드\n고구마순나물\n볶음김치",
        },
        {
          menu2: "콩나물파국\n쭈꾸미볶음\n닭볶음탕\n청경채겉절이\n볶음김치",
        },
        {
          menu3:
            "된장국\n가자미콩나물찜\n닭볶음탕\n유자소스고구마맛탕\n볶음김치",
        },
        {
          menu4: "김치찌개\n두부&김치볶음\n닭볶음탕\n매콤호박볶음\n볶음김치",
        },
        {
          menu5: "미역국\n방어양념구이\n닭볶음탕\n오미무침\n볶음김치",
        },
        {
          menu6: "청국장\n수제닭강정\n닭볶음탕\n돈채볶음&꽃빵\n볶음김치",
        },
        {
          menu7: "매생이국\n치킨너겟\n닭볶음탕\n골뱅이무침\n볶음김치",
        },
        {
          menu8: "오뎅탕\n수제닭강정\n소시지볶음\n계란말이\n볶음김치",
        },
        {
          menu9: "부대찌개\n미역줄기볶음\n닭볶음탕\n돈까스\n볶음김치",
        },
      ],
      diet2: [
        {
          menu1:
            "계란파국2\n우사태찢은장조림\n꽃맛살샐러드\n고구마순나물\n볶음김치",
        },
        {
          menu2: "콩나물파국2\n쭈꾸미볶음\n닭볶음탕\n청경채겉절이\n볶음김치",
        },
        {
          menu3:
            "된장국2\n가자미콩나물찜\n닭볶음탕\n유자소스고구마맛탕\n볶음김치",
        },
        {
          menu4: "김치찌개2\n두부&김치볶음\n닭볶음탕\n매콤호박볶음\n볶음김치",
        },
        {
          menu5: "미역국2\n방어양념구이\n닭볶음탕\n오미무침\n볶음김치",
        },
        {
          menu6: "청국장2\n수제닭강정\n닭볶음탕\n돈채볶음&꽃빵\n볶음김치",
        },
        {
          menu7: "매생이국2\n치킨너겟\n닭볶음탕\n골뱅이무침\n볶음김치",
        },
        {
          menu8: "오뎅탕2\n수제닭강정\n소시지볶음\n계란말이\n볶음김치",
        },
        {
          menu9: "부대찌개2\n미역줄기볶음\n닭볶음탕\n돈까스\n볶음김치",
        },
      ],
      diet3: [
        {
          menu1:
            "계란파국3\n우사태찢은장조림\n꽃맛살샐러드\n고구마순나물\n볶음김치",
        },
        {
          menu2: "콩나물파국3\n쭈꾸미볶음\n닭볶음탕\n청경채겉절이\n볶음김치",
        },
        {
          menu3:
            "된장국3\n가자미콩나물찜\n닭볶음탕\n유자소스고구마맛탕\n볶음김치",
        },
        {
          menu4: "김치찌개3\n두부&김치볶음\n닭볶음탕\n매콤호박볶음\n볶음김치",
        },
        {
          menu5: "미역국3\n방어양념구이\n닭볶음탕\n오미무침\n볶음김치",
        },
        {
          menu6: "청국장3\n수제닭강정\n닭볶음탕\n돈채볶음&꽃빵\n볶음김치",
        },
        {
          menu7: "매생이국3\n치킨너겟\n닭볶음탕\n골뱅이무침\n볶음김치",
        },
        {
          menu8: "오뎅탕3\n수제닭강정\n소시지볶음\n계란말이\n볶음김치",
        },
        {
          menu9: "부대찌개3\n미역줄기볶음\n닭볶음탕\n돈까스\n볶음김치",
        },
      ],
    };
  },
  methods: {
    setNowTimes() {
      let myDate = new Date();
      let wk = myDate.getDay();
      let mm = myDate.getMonth() + 1;
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let weeks = [" 일", " 월", " 화", " 수", " 목", " 금", " 토"];
      let week = weeks[wk];
      this.subDate = mm + "월 " + dd + "일";
      this.nowDate = mm + "월 " + dd + "일" + week + "요일";

      let wk2 = myDate.getDay() + 1;
      let mm2 = myDate.getMonth() + 1;
      let dd2 = String(
        myDate.getDate() < 10
          ? "0" + myDate.getDate() + 1
          : myDate.getDate() + 1
      );
      let weeks2 = [" 일", " 월", " 화", " 수", " 목", " 금", " 토"];
      let week2 = weeks2[wk2];
      this.nextDate = mm2 + "월 " + dd2 + "일" + week2 + "요일";

      let wk3 = myDate.getDay() + 2;
      let mm3 = myDate.getMonth() + 1;
      let dd3 = String(
        myDate.getDate() < 10
          ? "0" + myDate.getDate() + 2
          : myDate.getDate() + 2
      );
      let weeks3 = [" 일", " 월", " 화", " 수", " 목", " 금", " 토", " 일"];
      let week3 = weeks3[wk3];
      this.twoDate = mm3 + "월 " + dd3 + "일" + week3 + "요일";
    },
    menuClk: function (evt) {
      var idx = evt.target.textContent;
      if (idx == "상식") {
        return (
          (this.diet = this.diet1),
          (this.DietType = idx),
          (this.TopText = "일반식")
        );
      } else if (idx == "연식") {
        return (
          (this.diet = this.diet2),
          (this.DietType = idx),
          (this.TopText = "일반식")
        );
      } else if (idx == "선택식") {
        return (
          (this.diet = this.diet3),
          (this.DietType = idx),
          (this.TopText = "일반식")
        );
      } else if (idx == "당뇨식") {
        return (
          (this.diet = this.diet3),
          (this.DietType = idx),
          (this.TopText = "치료식")
        );
      } else if (idx == "신부전식") {
        return (
          (this.diet = this.diet2),
          (this.DietType = idx),
          (this.TopText = "치료식")
        );
      } else if (idx == "투석식") {
        return (
          (this.diet = this.diet3),
          (this.DietType = idx),
          (this.TopText = "치료식")
        );
      }
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);

    let styles = {
      color: "#fff",
      padding: "20px 30px 0",
    };
    const newEle = document.querySelectorAll(".txt-medium li");
    newEle[0].innerHTML = "<h3>일반식</h3>";
    newEle[4].innerHTML = "<h3>치료식</h3>";
    const newTxt = document.querySelectorAll(".txt-medium li h3");
    Object.assign(newTxt[0].style, styles);
    Object.assign(newTxt[1].style, styles);
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
.guide-left ul {
  padding-top: 105px;
}
.guide-left li p {
  color: #fff;
  padding: 20px 0 18px 50px;
  line-height: 27px;
  font-size: 25px;
  margin-bottom: 0;
}

.guide-left li:hover p,
.guide-left li:focus p,
.guide-left li:active p {
  font-weight: 500;
  background: #ffffff;
  color: #006940;
  border-right: 0;
  border-radius: 35.5px 0 0 35.5px;
}
.guide-bottom h2 {
  color: #fff;
  text-align: center;
  padding-bottom: 67px;
}
.guide-right {
  width: 85%;
  height: 100%;
}
.top-text {
  flex-flow: column;
  align-items: flex-start;
  margin: 0px 110px;
  padding-top: 78px;
  padding-bottom: 74px;
}
.top-text h3 {
  line-height: 48px;
  color: #000;
  margin-bottom: 10px;
}
.top-text h5 {
  line-height: 30px;
  letter-spacing: 0em;
  color: #000;
  margin-bottom: 0;
}

@media (max-width: 1500px) {
  .guide-left {
    padding: 80px 0 50px 0;
  }
  .guide-left h1,
  .guide-bottom h2 {
    text-align: center;
    font-size: 35px;
  }
}
</style>