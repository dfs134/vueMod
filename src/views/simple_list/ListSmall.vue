<template>
  <div>
    <div class="top-text">
      {{ TopText }}
    </div>
    <SimpleStandardList
      :content="[
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
        {
          TextList: '가나다라마',
        },
      ]"
    />
  </div>
</template>
  
<script>
import SimpleStandardList from "./components/SimpleSmallList.vue";
export default {
  name: "Automotive",
  components: {
    SimpleStandardList,
  },
  data() {
    return {
      TopText: "List 작게",
    };
  },
};
</script>
  
 <style scoped>
</style>
  