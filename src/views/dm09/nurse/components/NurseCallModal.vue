<template>
  <div
    class="modal fade"
    id="nurse-call"
    aria-hidden="true"
    data-bs-backdrop="static"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <NomalCancle data-bs-dismiss="modal" aria-label="Close" /> -->
          <a href="#"
            ><img
              src="@/img/nurse/Vector.png"
              alt=""
              class="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
          /></a>
          <div class="modal-title fs-5" id="exampleModalToggleLabel">
            <circle-check data-bs-dismiss="modal" aria-label="Close" />
          </div>
        </div>
        <div class="modal-body">
          <h3></h3>
          <!-- <h3>{{ pages[2].callMenu }}</h3> -->
          <h5>간호사를 호출하였습니다.</h5>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#nurse-call2"
            data-bs-toggle="modal"
          >
            호출취소
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="nurse-call2"
    aria-hidden="true"
    data-bs-backdrop="static"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title fs-5" id="exampleModalToggleLabel2">
            <circle-cancle />
          </div>
        </div>
        <div class="modal-body">
          <h3></h3>
          <h5>호출을 취소하였습니다.</h5>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#exampleModalToggle"
            data-bs-dismiss="modal"
            v-on:click="nurseClk"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleCheck from "@/components/icons/CircleCheck.vue";
import CircleCancle from "@/components/icons/CircleCancle.vue";
// import NomalCancle from '@/components/icons/NomalCancle.vue';

export default {
  name: "NurseCallModal",
  components: {
    CircleCheck,
    CircleCancle,
    // NomalCancle,
  },
  props: {
    pages: {
      type: Array,
      required: true,
      callMenu: String,
    },
  },
  methods: {
    nurseClk: function () {
      const remove = document.querySelectorAll(".card");
      remove.forEach(function (item) {
        item.classList.remove("nurse-on-bgColor");
        item.childNodes[0].classList.remove("nurse-on-textColor");
      });
    },
  },
  created() {},
};
</script>

<style lang="css" src="./css/NurseCallModal.css" scoped>
</style>