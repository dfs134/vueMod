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
          <button class="col" v-on:focus="changeImg">
            <h5>
              {{ TextList }}
            </h5>
          </button>
        </div>
      </div>
    </div>
    <div class="content-img" v-show="medicalImg">
      <img :src="require(`@/img/template/${img}.png`)" alt="" />
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ListNarrow",
  components: {},
  data() {
    return {
      medicalImg: true,
      medicalDoctor: false,
      img: "가정간호",
      // 한글 기준 4글자 제한
      TopText: "복합 (좁게)",
      content: [
        { idx : 1 , TextList: "본관" },
        { idx : 2 , TextList: "신관" },
        { idx : 3 , TextList: "암센터" },
        { idx : 4 , TextList: "연구2동" },
        { idx : 5 , TextList: "본관" },
        { idx : 6 , TextList: "신관" },
        { idx : 7 , TextList: "암센터" },
        { idx : 8 , TextList: "연구2동" },
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
  
  