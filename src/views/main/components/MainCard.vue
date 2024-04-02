<template>
  <div class="img-flex">
    <div
      v-for="({ router, contents, types }, index) of ImgData"
      :key="index"
      :class="[types === 1 ? 'big-img' : 'small-img']"
      class="key-nav"
    >
      <a
        href="#"
        v-if="contents == 'PACS'"
        v-on:focus="scroll"
        @click="$emit('modalBtn')"
        class="pacs"
      >
        <img
          :src="require(`@/img/template/contents/${contents}.png`)"
          alt=""
          class="coordinate"
        />
      </a>
      <router-link
        v-else
        v-bind:to="`/${router}`"
        v-on:focus="scroll"
        class="first-focus"
      >
        <img
          :src="require(`@/img/template/contents/${contents}.png`)"
          alt=""
          class="coordinate"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    ImgData: {
      type: Array,
      required: true,
      router: String,
      contents: String,
      types: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    scroll: function (evt) {
      const elem = evt.target;
      const clientRect = elem.getBoundingClientRect();
      const relativeTop = clientRect.top;
      const scrolledTopLength = window.pageYOffset;
      const absoluteTop = scrolledTopLength + relativeTop;
      console.log(absoluteTop);
      if (absoluteTop >= 870 && absoluteTop <= 885) {
        window.scrollTo(0, 0);
      } else if (absoluteTop >= 1152 && absoluteTop <= 1155) {
        window.scrollTo(0, 1425);
      }
    },
  },
  created() {},
  mounted() {
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
};
</script>
<style lang="css" src="./css/MainCard.css" scoped>
</style>