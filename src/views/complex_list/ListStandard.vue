<template>
  <div class="flex-content standard-list">
    <div class="content-text bg-light">
      <div class="top-text">
        {{ TopText }}
      </div>
      <div class="contain text-start standard">
        <div class="row" v-for="({ TextList }, index) of content" :key="index">
          <button class="col" v-on:focus="changeImg">
            <h5>
              {{ TextList }}
            </h5>
          </button>
        </div>
      </div>
    </div>
    <div class="content-img">
      <img :src="require(`@/img/hospitalization-info/${img}.png`)" alt="" />
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ListStandard",
  components: {},
  data() {
    return {
      // 한글기준 5글자 제한
      TopText: "표준 복합 List",
      img: "가정간호",
      content: [
        { idx : 1 , TextList: "가정간호" },
        { idx : 2 , TextList: "간병인안내" },
        { idx : 3 , TextList: "통합서비스변동안내" },
        { idx : 4 , TextList: "병동및병실안내" },
        { idx : 5 , TextList: "병실생활 에티켓" },
        { idx : 6 , TextList: "샤워 수전 이용 안내" },
        { idx : 7 , TextList: "엘레베이터 이용 안내" },
        { idx : 8 , TextList: "입원 시 준수사항" },
        { idx : 9 , TextList: "통합서비스변동안내" },
        { idx : 10 , TextList: "환의 및 침구" },
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
  },

};
</script>
  

  