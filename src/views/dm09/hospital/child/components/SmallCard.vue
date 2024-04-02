<template>
  <div class="contain text-center small small-card">
    <div class="row row-cols-3">
      <router-link
        v-bind:to="`${url}`"
        v-for="({ url, path, img }, index) of pages"
        :key="index"
        class="first-focus"
        @click="$emit('clk', index)"
      >
        <div class="card">
          <img
            :src="require(`@/img/dm09/hospital/${path}/${img}.png`)"
            alt=""
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallCard",
  props: {
    pages: {
      type: Array,
      required: true,
      path: String,
      img: String,
      url: String,
    },
  },
};
</script>