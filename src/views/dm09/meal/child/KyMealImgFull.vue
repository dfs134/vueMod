<template>
  <div style="height: 1080px">
    <img
      :src="
        require(`@/img/dm09/meal/full_img/${
          MealInfo[$route.query.idx].bigImg
        }.png`)
      "
      alt=""
    />
  </div>
</template>

<script>
import MealInfo from "@/json/MealInfo.json";
export default {
  // 환자 권리와 의무
  name: "KyMealImgFull",
  data() {
    return {
      MealInfo: MealInfo,
    };
  },
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