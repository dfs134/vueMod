<template>
  <div class="flex-content standard-list">
    <div class="content-text bg-light">
      <div class="top-text">
        {{ TopText }}
      </div>
      <div class="contain text-start standard">
        <div class="row" v-for="({ TextList }, index) of content" :key="index">
          <button class="first-focus col" v-on:focus="changeImg" id="">
            <h5>
              {{ TextList }}
            </h5>
          </button>
        </div>
      </div>
    </div>
    <div class="content-img">
      <img
        :src="require(`@/img/dm09/hospital/SafetyMgmtInfo/${img}.png`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  // 입원생활 안전관리 안내
  name: "SafetyMgmtInfo",
  data() {
    return {
      // 한글기준 5글자 제한
      TopText: "생활 안전관리",
      img: "화재 예방 안내",
      content: [
        { idx : 1 , TextList: "화재 예방 안내" },
        { idx : 2 , TextList: "감염 예방 안내" },
        { idx : 3 , TextList: "낙상 예방 안내" },
        { idx : 4 , TextList: "낙상 예방 안내 (소아)" },
        { idx : 5 , TextList: "간호사 호출" },
        { idx : 6 , TextList: "전동 침대 사용 안내" },
        { idx : 7 , TextList: "자가 복용약" },
        { idx : 8 , TextList: "식사 안내" },
        { idx : 9 , TextList: "면회시간 병문안 안내" },
      ],
    };
  },
  methods: {
    changeImg : function(evt){
      this.img = evt.target.textContent;
      this.$emit('changeImg');
    },
    firstChk: function () {
      const first = document.querySelector(".row .col");
      first.classList.add("border-2");
      first.firstChild.classList.add("bg-green");
    },
  },
  mounted() {
    this.firstChk();
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
};
</script>
