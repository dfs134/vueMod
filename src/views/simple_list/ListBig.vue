<template>
  <div class="flex-content">
    <div class="top-text">
      {{ TopText }}
    </div>
    <SimpleBigList
      :content="[
        {
          TextList: 'HeadLine 01',
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
import SimpleBigList from "./components/SimpleBigList.vue";
export default {
  name: "Automotive",
  components: {
    SimpleBigList,
  },
  data() {
    return {
      TopText: "List 크게",
    };
  },
};
</script>
  
 <style scoped>
.flex-content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  margin: 70px 0 0 130px;
}
.top-text {
  width: 20%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}
.contain.text-start {
  width: 80%;
  margin: 90px 170px 0 0;
}
.top-text img {
  width: 200px;
  height: 200px;
  margin-right: 35px;
}
</style>
  