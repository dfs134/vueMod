<template>
  <div class="flex-content">
    <div class="content-text bg-light">
      <div class="top-text">
        {{ PacsList[$route.query.idx].TextList }}
      </div>
      <div class="contain text-start standard">
        <div
          class="row"
          v-for="Pacs in PacsList[$route.query.idx].text"
          :key="Pacs.idx"
        >
          <button class="first-focus col" v-on:focus="changeImg" tabindex="1">
            <h5>
              {{ Pacs.TextList }}
            </h5>
          </button>
        </div>
      </div>
    </div>
    <div class="content-img">
      <img :src="require(`@/img/dm09/pacs/pacs_list/${img}.jpg`)" alt="" />
    </div>
  </div>
</template>

<script>
import Pacs from "@/json/Pacs.json";
import PacsList from "@/json/PacsList.json";
export default {
  // 건강검진 안내
  name: "Pacs",
  data() {
    return {
      PacsList: PacsList,
      Pacs: Pacs,
      // 한글기준 5글자 제한
      img: "DX-21399-275",
      content: [],
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
<style lang="css" src="../css/Pacs.css" scoped>
</style>