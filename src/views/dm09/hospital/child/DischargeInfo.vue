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
        :src="require(`@/img/dm09/hospital/DischargeInfo/${img}.png`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  // 퇴원 안내
  name: "DischargeInfo",
  data() {
    return {
      // 한글기준 5글자 제한
      TopText: "퇴원 안내",
      img: "퇴원절차및안내",
      content: [
        { idx : 1 , TextList: "퇴원절차및안내" },
        { idx : 2 , TextList: "서류신청안내" },
        { idx : 3 , TextList: "제증명신청안내" },
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