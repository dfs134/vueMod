<template>
  <div class="flex-content small-list">
    <div class="content-text bg-light">
      <div class="list top-text">
        <h2>
          <strong>{{ TopText }}</strong>
        </h2>
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
    <div class="content-img" v-show="medicalImg">
      <img :src="require(`@/img/dm09/hospital/FloorGuide/${img}.png`)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FloorGuide",
  components: {},
  data() {
    return {
      medicalImg: true,
      medicalDoctor: false,
      img: "본관",
      TopText: "층별안내",
      content: [
        { idx : 1 , TextList: "본관" },
        { idx : 2 , TextList: "신관" },
        { idx : 3 , TextList: "암센터" },
        { idx : 4 , TextList: "연구2동" },
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