<template>
  <div class="flex-content">
    <div class="top-text">
      {{ TopText }}
    </div>
    <PacsListName :content="pacsList" />
  </div>
</template>
  
<script>
import PacsListName from "./components/PacsListName.vue";
import PacsList from "@/json/PacsList.json";
export default {
  name: "PacsList",
  components: {
    PacsListName,
  },
  data() {
    return {
      PacsList: PacsList,
      TopText: "PACS",
      pacsList: PacsList,
    };
  },
  methods: {
    routerLink: function () {
      let i = 0;
      for (i; i < this.PacsList.length; i++) {
        this.PacsList[i].idx = i;
        this.PacsList[i].url = "child/Pacs?idx=" + this.PacsList[i].idx;
      }
    },
  },
  mounted() {
    this.routerLink();
  },
};
</script>
  
 <style scoped>
.flex-content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  padding: 70px 0 0 130px;
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
  