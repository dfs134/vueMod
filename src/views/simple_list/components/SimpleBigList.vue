<template>
  <div class="contain text-start big">
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
  name: "SimpleBigList",
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
  border-radius: 500px;
  width: 30% !important;
  height: 120px;
}
.col h5 {
  margin: 0;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  color: #000000;
  font-size: 70px;
  font-weight: 400;
  padding-left: 65px;
}
</style>