<template>
  <div style="height: 1080px">
    <img
      :src="require(`@/img/dm09/hospital/full_img/${$route.query.img}.png`)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  // 환자 권리와 의무
  name: "RightsAndDuties",
  props: {
    img: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>