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
        :src="require(`@/img/dm09/hospital/HealthCheckInfo/${img}.png`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  // 건강검진 안내
  name: "HealthCheckInfo",
  data() {
    return {
      // 한글기준 5글자 제한
      TopText: "건강검진 안내",
      img: "일반검진",
      content: [
        { idx : 1 , TextList: "일반검진" },
        { idx : 2 , TextList: "암검진" },
        { idx : 3 , TextList: "종합검진 선택검진" },
        { idx : 4 , TextList: "특성화검진" },
        { idx : 5 , TextList: "예약 안내" },
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
