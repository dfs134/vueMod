<template>
  <div style="height: 1080px">
    <!-- <img src="@/img/common/큰의사.png" alt=""> -->
    <img :src="require(`@/img/dm09/hospital/${path}/${img}.png`)" alt="" />
  </div>
</template>

<script>
export default {
  name: "ImgFull",
  props: {
    pages: {
      type: Array,
      required: true,
      path: String,
      img: String,
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>