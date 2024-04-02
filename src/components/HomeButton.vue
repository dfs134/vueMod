<template>
  <!-- <router-link to="/" class="keyboard-nav">
    <button class="absolute" tabindex="1">
      <img src="@/img/common/return.png" alt="" />
    </button>
  </router-link> -->
  <button
    class="absolute"
    tabindex="1"
    @click="clk() ? $router.go(-1) : $router.push('/')"
  >
    <img src="@/img/common/return.png" alt="" />
  </button>
</template>
<script>
export default {
  name: "homeBtn",
  methods: {
    clk: function () {
      return window.history.length > 2;
    },
  },
  mounted() {},
};
</script>
<style>
.bi-house-door-fill {
  font-size: 40px;
  line-height: 22px;
  color: white;
  display: block;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
button.absolute {
  position: fixed;
  top: 70px;
  right: 70px;
  border-radius: 50px;
  background-color: inherit;
  border: none;
  z-index: 9999;
}
button.absolute:focus {
  outline: 5px solid yellow;
}
</style>
