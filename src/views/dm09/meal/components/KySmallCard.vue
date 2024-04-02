<template>
  <div class="contain text-center small small-card">
    <div class="row row-cols-3">
      <router-link
        v-bind:to="`${router}`"
        v-for="({ router, img }, index) of pages"
        :key="index"
      >
        <div class="card">
          <img :src="require(`@/img/dm09/meal/${img}.png`)" alt="" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "KySmallCard",
  props: {
    pages: {
      type: Array,
      required: true,
      img: String,
    },
  },
};
</script>