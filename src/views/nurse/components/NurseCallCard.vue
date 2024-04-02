<template>
  <div class="contain text-center">
    <div class="row row-cols-3">
      <div v-for="({ callMenu }, index) of pages" :key="index">
        <button
          class="card"
          data-bs-target="#nurse-call"
          data-bs-toggle="modal"
          v-on:click="nurseClk"
        >
          <h6>{{ callMenu }}</h6>
        </button>
      </div>
    </div>
  </div>
  <NurseCallModal :pages="pages" />
</template>

<script>
import NurseCallModal from "./NurseCallModal.vue";
export default {
  name: "NurseCallCard",
  components: {
    NurseCallModal,
  },
  props: {
    pages: {
      type: Array,
      required: true,
      callMenu: String,
    },
  },
  methods: {
    nurseClk: function (evt) {
      const EvtTarget = evt.currentTarget;
      const EvtChild = evt.currentTarget.childNodes;
      const bgColor = document.querySelectorAll(".row button");

      bgColor.forEach(function (item) {
        if (item.classList.contains("nurse-on-bgColor")) {
          item.classList.remove("nurse-on-bgColor");
          item.children[0].classList.remove("nurse-on-textColor");
        }
      });
      EvtTarget.classList.add("nurse-on-bgColor");
      EvtChild[0].classList.add("nurse-on-textColor");

      const modalBody = document.querySelectorAll(".modal-body h3");
      modalBody.forEach(function (item) {
        item.innerHTML = EvtTarget.innerText;
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.card {
  background: none;
}

.contain {
  margin: 151px 172px 0 148px;
}

.row div {
  width: 500px;
  height: 208px;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 52px;
  margin-right: 52px;
  padding: 0;
  box-shadow: 4px 4px 10px 5px #33333340;
}

.row div:nth-of-type(3),
.row div:nth-of-type(6),
.row div:nth-of-type(9) {
  margin-right: 0;
}

.row div .card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.row div .card h6 {
  font-size: 50px;
  font-weight: 400;
  line-height: 50px;
  color: #7dc242;
}
</style>