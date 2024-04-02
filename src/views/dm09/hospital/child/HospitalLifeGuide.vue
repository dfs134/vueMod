<template>
  <div class="flex-content standard-list">
    <div class="content-text bg-light">
      <div class="top-text">
        {{ TopText }}
      </div>
      <div class="contain text-start standard">
        <div class="row" v-for="({ TextList }, index) of content" :key="index">
          <button class="first-focus col" v-on:focus="$emit('changeImg',TextList)" id="">
            <h5>
              {{ TextList }}
            </h5>
          </button>
        </div>
      </div>
    </div>
    <div class="content-img">   
      <img v-if="img"
        :src="require(`@/img/dm09/hospital/HospitalLifeGuide/${img}.png`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  // 입원생활 안내
  name: "HospitalLifeGuide",
  props:{
    img:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      // 한글기준 5글자 제한
      TopText: "입원생활 안내",
      // img: '',
      content: [
        { idx : 1 , TextList: "입원 시 준수 사항" },
        { idx : 2 , TextList: "샤워 수전 이용 안내" },
        { idx : 3 , TextList: "병실생활 에티켓" },
        { idx : 4 , TextList: "환의 및 침구" },
        { idx : 5 , TextList: "간병인 안내" },
        { idx : 6 , TextList: "병동 및 병실 안내" },
        { idx : 7 , TextList: "엘레베이터 이용 안내" },
        { idx : 8 , TextList: "간호·간병 통합서비스 병동 안내" },
        { idx : 9 , TextList: "가정 간호" },
        { idx : 10 , TextList: "병문안 시간 안내" },
        { idx : 11 , TextList: "병문안 규칙" },
        { idx : 12 , TextList: "귀중품 보관 안내" },
        { idx : 13 , TextList: "불편 사항 접수 안내" },
      ],
    };
  },
  methods: {
    firstChk: function () {
      const first = document.querySelector(".row .col");
      first.classList.add("border-2");
      first.firstChild.classList.add("bg-green");

      const element = document.querySelector(".first-focus");
      if (element) {
        element.focus();
      }
    },
  },
  mounted() {
    this.firstChk();
  },
};
</script>