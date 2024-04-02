<template>
  <div>
    <div class="top-text">
      <strong>청소요청</strong>
      <h3 class="bg-black">청소가 필요한 곳이 있으시면 요청해주세요.</h3>
      <h3 class="bg-black">
        건양대학교병원은 청결하고 쾌적한 환경을 위해 항상 노력하겟습니다.
      </h3>
    </div>
    <form action="/Main" name="MealSatisfaction" method="get">
      <div class="container-xl servey"></div>
      <div class="select">
        <ul class="table-head">
          <li class="th01">청소 요청</li>
          <li class="th02">신청 내역</li>
          <li class="th03">현재 시간 : {{ nowTime }}</li>
          <li class="th03 line">|</li>
          <li class="th03">사용자 : 97병동 0076321 3번 침상</li>
        </ul>
        <table class="table">
          <tbody class="table-group-divider">
            <tr v-for="({ select, clean }, index) of sel" :key="index">
              <th scope="row">
                {{ select }} <strong style="color: red">&nbsp;*</strong>
              </th>
              <td class="td01">
                <input
                  type="checkbox"
                  class="first-focus form-check-input"
                  :name="clean"
                  tabindex="1"
                />
                <label :for="clean" v-if="clean == '1'">병실 내 화장실</label>
                <label :for="clean" v-else>공용샤워장</label>
              </td>
              <td class="td02">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :name="clean"
                  tabindex="1"
                />
                <label :for="clean" v-if="clean == '1'">침상 청소</label>
                <label :for="clean" v-else>공용화장실(남)</label>
              </td>
              <td class="td03">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :name="clean"
                  tabindex="1"
                />
                <label :for="clean" v-if="clean == '1'">병실 바닥</label>
                <label :for="clean" v-else>공용화장실(여)</label>
              </td>
              <td class="td04">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :name="clean"
                  tabindex="1"
                />
                <label :for="clean" v-if="clean == '1'">쓰레기통 비우기</label>
                <label :for="clean" v-else>장애인 화장실</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text">
        <p class="txt-medium txt-25">
          ※ 청소 요청에 따른 접수는 평일 9시부터 16시 30분까지입니다. 이후 접수
          건은 다음날 확인합니다.
        </p>
        <p class="txt-medium txt-25">
          ※ 긴급한 청소 요청이나, 문의사항이 있을 시 미화부(010-5473-3660)로
          연락주세요
        </p>
      </div>
      <div class="button-submit">
        <button type="button" @click="submit">요청하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "KyMealSatisfaction",
  components: {},
  data() {
    return {
      nowTime: "",
      sel: [
        {
          select: "병실 내부",
          clean: "1",
        },
        {
          select: "병실 외부",
          clean: "2",
        },
      ],
    };
  },
  methods: {
    setTime: function () {
      let moment = require("moment");
      this.nowTime = moment().format("HH:mm:ss");
    },
    submit: function () {
      console.log("submit");
    },
  },
  mounted() {
    this.setTime();
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
};
</script>

<style lang="css" scoped src="./css/CleaningRequest.css"></style>