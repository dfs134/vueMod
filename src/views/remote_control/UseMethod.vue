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
        :src="require(`@/img/remote_control/${img}.png`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UseMethod",
  data() {
    return {
      TopText: "리모컨 사용방법",
      img: "리모컨 사용방법",
      content: [
        { idx : 1 , TextList: "리모컨 사용방법" },
        { idx : 2 , TextList: "스피커 사용" },
        { idx : 3 , TextList: "안내사항" },
        { idx : 4 , TextList: "고객센터" },
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