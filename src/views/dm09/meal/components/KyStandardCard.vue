<template>
  <div class="contain text-center standard standard-card">
    <div class="row row-cols-3">
      <router-link
        v-bind:to="`/${router}`"
        v-for="({ router, img }, index) of pages"
        :key="index"
        class="first-focus"
      >
        <div class="card">
          <img :src="require(`@/img/template/${img}.png`)" alt="" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "KyStandardCard",
  props: {
    pages: {
      type: Array,
      required: true,
      img: String,
    },
  },
};
</script>
