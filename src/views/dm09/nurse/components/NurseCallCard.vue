<template>
  <div class="contain text-center">
    <div class="row row-cols-3">
      <keep-alive>
        <div
          v-for="({ callMenu }, index) of pages"
          :key="index"
          class="nurse-btn"
        >
          <button
            class="first-focus card"
            data-bs-target="#nurse-call"
            data-bs-toggle="modal"
            v-on:click="nurseClk"
            tabindex="1"
          >
            <h6>{{ callMenu }}</h6>
          </button>
        </div>
      </keep-alive>
    </div>
  </div>
  <nurse-call-modal :pages="pages" />
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
  mounted() {
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
};
</script>

<style lang="css" src="./css/NurseCallCard.css" scoped>
</style>