<template>
  <div class="flex-content standard-list">
    <div class="content-text bg-light">
      <div class="top-text">
        {{ TopText }}
      </div>
      <div class="contain text-start standard">
        <div class="row" v-for="({ TextList }, index) of content" :key="index">
          <button class="first-focus col" v-on:focus="changeImg">
            <h5>
              {{ TextList }}
            </h5>
          </button>
        </div>
      </div>
    </div>
    <div class="content-img">
      <img
        :src="require(`@/img/dm09/hospital/LocationPark/${img}.png`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  // 병원위치 및 주차 안내
  name: "LocationPark",
  data() {
    return {
      // 한글기준 5글자 제한
      TopText: "병원 위치, 주차",
      img: "병원위치및교통안내",
      content: [
        { idx : 1 , TextList: "병원위치및교통안내" },
        { idx : 2 , TextList: "주차장요금안내" },
        { idx : 3 , TextList: "차량등록안내" },
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
