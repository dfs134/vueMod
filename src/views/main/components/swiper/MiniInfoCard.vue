<template>
  <div class="info-card">
    <div class="card-body">
      <div class="text-center">
        <img :src="require(`@/img/main/${imgData}.png`)" alt="" tabindex="-1" />
      </div>
      <div class="text-left">
        <h5>{{ department }}</h5>
        <h6>{{ name }} 교수</h6>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniInfoCard",
  data() {
    return {
      imgData: "의사2",
    };
  },
  props: {
    icon: {
      type: Object,
      required: true,
      component: String,
      background: String,
      default: () => ({
        component: "ni ni-curved-next",
        background: "success",
      }),
    },
    department: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="css" src="./css/MiniInfoCard.css" scoped>
</style>