<template>
  <div class="contain text-start big">
    <router-link
      v-bind:to="`${url}`"
      v-for="({ url, TextList }, index) of content"
      :key="index"
      v-on:focus="changeImg"
    >
      <div class="row">
        <div class="col">
          <h5>
            {{ TextList.replace(/^(.)(.)/, "$1$2_") }}
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SimpleBigList",
  props: {
    content: {
      type: Array,
      required: true,
      TextList: String,
    },
  },
  methods: {
    changeImg: function (evt) {
      var idx = evt.target.textContent;

      const EvtTarget = evt.target.childNodes[0];
      const bgColor = document.querySelectorAll(".row");

      bgColor.forEach(function (item) {
        if (item.classList.contains("focus-btn")) {
          item.classList.remove("focus-btn");
          item.lastChild.firstChild.classList.remove("bg-green");
        }
      });

      EvtTarget.classList.add("focus-btn");
      EvtTarget.firstChild.lastChild.classList.add("bg-green");
      return (this.img = idx);
    },
    firstChk: function () {
      const first = document.querySelector(".row");
      first.classList.add("focus-btn");
      first.lastChild.firstChild.classList.add("bg-green");
    },
  },
  mounted() {
    this.firstChk();
  },
};
</script>

<style scoped>
.row {
  margin: 10px 0;
  border: 2px solid #999999;
  background-color: #fff;
  border-radius: 500px;
}
.col {
  width: 30% !important;
  height: 120px;
}
.col h5 {
  margin: 0;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  color: #000000;
  font-size: 70px;
  font-weight: 400;
  padding-left: 65px;
  padding-top: 10px;
}
.focus-btn {
  background-color: #7dc242 !important;
  outline: 5px solid yellow;
  border-radius: 500px;
}
</style>