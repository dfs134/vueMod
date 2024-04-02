<template>
  <div class="login-wrap">
    <div class="login">
      <div class="text-info">
        <img src="@/img/common/profile.png" alt="" />
        <div class="text">
          <h3>MOD TV를 이용하시려면</h3>
          <h3>환자 등록 번호를 입력해 주세요.</h3>
        </div>
      </div>
      <div class="login-number"></div>
      <form action="">
        <div class="see-input">
          <input
            id="RegNumber"
            type="text"
            placeholder="환자 등록 번호"
            maxlength="8"
            v-bind="num"
          />
          <p>#키로 환자 등록 번호를 수정할 수 있습니다</p>
        </div>
        <div class="submit-login">
          <button>Log in</button>
        </div>
      </form>
    </div>
    <div class="back-img">
      <img src="@/img/login/login_banner.png" alt="" />
    </div>
  </div>
</template>

<script>
import numberKeypad from "@/js/numberKeypad";

export default {
  name: "login",
  data() {
    return {
      num: "",
    };
  },
  methods: {
    numberKeypad: function () {
      return numberKeypad;
    },
  },
  mounted() {
    $(function () {
      $("input").numberKeypad({
        wrap: ".login-number",
      });
    });
  },
};
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.login-wrap .login {
  width: 41%;
}
.login-wrap .back-img {
  width: 59%;
  background: #ebf5df;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-end;
}
.login-wrap .login {
  display: flex;
  flex-flow: column;
  padding: 153px 171px;
}
.login-wrap .login .text-info {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.login-wrap .login .text-info img {
  width: 88px;
  height: 88px;
  margin-right: 17px;
}
.login-wrap .login .text-info .text h3 {
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 0;
  color: #000;
}
.see-input input {
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #666666;
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 15px;
}
.see-input input::placeholder {
  color: #000;
}
.see-input p {
  text-align: center;
  color: #666666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 58px;
}
.submit-login button {
  width: 100%;
  height: 70px;
  color: #fff;
  border: none;
  background-color: #006940;
  font-size: 30px;
  font-weight: 500;
  border-radius: 10px;
}
</style>

<style>
.login-number .keypad {
  margin-top: 67px;
  margin-bottom: 36px;
  border-radius: 10px;
  border: 1px solid #666;
}
.login-number .keypad .item a {
  width: 147px;
  height: 89px;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: 95px;
  color: #000;
}
.login-number .keypad .item a:first-child,
.login-number .keypad .item a:nth-of-type(2) {
  border-right: 1px solid;
}
.login-number .keypad .item a {
  border-bottom: 1px solid;
}
.login-number .keypad .item:last-child a {
  border-bottom: 0;
}
</style>