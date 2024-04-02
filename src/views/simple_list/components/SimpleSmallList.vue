<template>
  <div class="contain text-start small">
    <router-link to="" v-for="({ TextList }, index) of content" :key="index">
      <div class="row">
        <div class="col">
          <h5>
            {{ TextList }}
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SimpleSmallList",
  props: {
    content: {
      type: Array,
      required: true,
      TextList: String,
    },
  },
};
</script>

<style scoped>
.row {
  margin: 10px 0;
}
.col {
  background-color: #fff;
  border: 2px solid #999999;
  border-radius: 50px;
  width: 30% !important;
  height: 70px;
}
.col h5 {
  margin: 0;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  color: #000000;
  font-size: 25px;
  font-weight: 700;
  padding: 0 0 0 50px;
}
</style>