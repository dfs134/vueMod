<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <p>인증번호를 입력해주세요.</p>
          <input @input="number" :value="keyName" placeholder="인증번호" />
        </div>
        <div class="footer">
          <button
            type="button"
            class="cencel"
            data-bs-dismiss="modal"
            @click="$emit('close')"
            tabindex="1"
          >
            취소
          </button>
          <button type="button" class="check" @click="router" tabindex="1">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PopUp",
  data() {
    return {
      keyName: "",
    };
  },
  // watch: {
  //   keyName(input) {
  //     if (isNaN(input) == true) {
  //       this.keyName = "";
  //     }
  //   },
  // },
  methods: {
    number: function (e) {
      this.keyName = e.target.value;
    },
    router: function () {
      // this.$router.push("dm09/external_service/PacsList");
      const number = /[0-9]{6}$/;
      if (number.test(this.keyName)) {
        this.$router.push("dm09/external_service/PacsList");
      } else {
        this.keyName = "";
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.modal {
  display: none;
  background-color: rgba(255, 255, 255, 0.5);
}
.modal .modal-dialog {
  top: 30% !important;
  left: -2%;
}
.modal .modal-dialog .modal-content {
  width: 600px;
  height: 328px;
  box-shadow: 8px 9px 40px rgba(0, 0, 0, 0.35);
}
.modal .modal-dialog .modal-content .modal-body {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.modal .modal-dialog .modal-content .modal-body p {
  font-size: 31px;
  font-weight: 400;
}
.modal .modal-dialog .modal-content .modal-body input {
  width: 489px;
  height: 60px;
  border: 2px solid #b8b8b8;
  border-radius: 5px;
  font-size: 24px;
}
.modal .modal-dialog .modal-content .footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.modal .modal-dialog .modal-content .footer button {
  width: 50%;
  height: 80px;
  background: none;
  border: none;
  font-size: 30px;
  font-weight: 400;
}
.modal .modal-dialog .modal-content .footer button.cencel {
  background-color: #f2f2f2;
  color: #333;
}
.modal .modal-dialog .modal-content .footer button.check {
  background-color: #7dc242;
  color: #fff;
}
.modal-body input:focus {
  background: #eee;
}
.modal-content .footer button:focus {
  border: 5px solid yellow !important;
}
</style>