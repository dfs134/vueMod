<template>
  <div style="height: 1080px">
    <img
      :src="require(`@/img/dm09/my_menu/full_img/${$route.query.bigImg}.png`)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  // 환자 권리와 의무
  name: "MyImgFull",
  props: {
    bigImg: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>