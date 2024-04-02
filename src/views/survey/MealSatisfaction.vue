<template>
  <div>
    <div class="top-text">
      <strong>{{ name }}</strong
      >님 {{ TopText }}
    </div>
    <form action="/Main" name="MealSatisfaction" method="get">
      <div class="container-xl servey">
        <div>
          <h6 class="form-check-label" for="">끼니선택</h6>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="flexRadioDefault1">아침</label>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          />
        </div>
        <div class="form-check">
          <label class="form-check-label" for="flexRadioDefault2">점심</label>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
        </div>
        <div class="form-check">
          <label class="form-check-label" for="flexRadioDefault2">저녁</label>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
        </div>
      </div>
      <div class="select">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style="width: 20%">만족도 점수</th>
              <th scope="col" style="width: 8%">1점(불만족)</th>
              <th scope="col" style="width: 8%">2점</th>
              <th scope="col" style="width: 8%">3점</th>
              <th scope="col" style="width: 8%">4점</th>
              <th scope="col" style="width: 8%">5점</th>
              <th scope="col" style="width: 8%">6점</th>
              <th scope="col" style="width: 8%">7점</th>
              <th scope="col" style="width: 8%">8점</th>
              <th scope="col" style="width: 8%">9점</th>
              <th scope="col" style="width: 8%">10점</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="({ select, taste }, index) of sel" :key="index">
              <th scope="row">{{ select }}</th>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
              <td>
                <input type="radio" class="form-check-input" :name="taste" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text">
        <p class="txt-medium txt-25">
          식사 서비스 품질 개선을 위해 환자 및 보호자님의 의견을 경청하는
          건양대학교병원 영양팀이 되겠습니다.
        </p>
      </div>
      <div class="button-submit">
        <button type="submit">전송</button>
      </div>
    </form>
  </div>
</template>

<script>
// import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "",
  components: {
    // ArgonButton,
  },
  data() {
    return {
      name: "신○순",
      TopText: "식사 만족도 조사",
      sel: [
        {
          select: "식사의 맛",
          taste: "1",
        },
        {
          select: "메뉴의 다양성",
          taste: "2",
        },
        {
          select: "음식의 온도 적절성",
          taste: "3",
        },
        {
          select: "식기류 위상 상태",
          taste: "4",
        },
        {
          select: "배식원의 친절",
          taste: "5",
        },
      ],
    };
  },
};
</script>

<style scoped>
.top-text {
  font-weight: 300;
}
.container-xl.servey {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.container-xl.servey h6 {
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.05em;
  text-align: left;
  margin-right: 20px;
  color: #000000;
}
.container-xl.servey label {
  font-size: 30px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: -0.05em;
  text-align: left;
  color: #000000;
}
.container-xl.servey .form-check {
  padding-left: 40px;
}

.container-xl.servey .form-check-input[type="radio"],
.select table tr td input[type="radio"] {
  border-radius: 0;
  width: 36px;
  height: 36px;
  border: 1px solid;
  background-color: #ebf5df;
}
.container-xl.servey .form-check-input[type="radio"]:checked,
.select table tr td input[type="radio"]:checked {
  background: #7dc242;
  border: none;
}
.container-xl.servey .form-check-input[type="radio"]::after,
.select table tr td input[type="radio"]::after {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-left: 3px;
  border-radius: 100%;
  vertical-align: middle;
  cursor: pointer;
}
.container-xl.servey .form-check-input[type="radio"]:checked:after {
  width: 25px;
  height: 25px;
  background: url(@/img/check.png) 0 0 no-repeat;
  background-size: auto;
  border: 1px #fff;
  top: 9px;
  left: 5px;
}
.select table tr td input[type="radio"]:checked::after {
  width: 25px;
  height: 25px;
  background: url(@/img/check.png) 0 0 no-repeat;
  background-size: auto;
  border: 1px #fff;
  margin-left: 9px;
  margin-top: 9px;
}
.container-xl.servey .form-check .form-check-input {
  float: right;
  margin-left: 0;
  margin-left: 11px;
}
th,
td {
  text-align: center;
}
th:first-child {
  text-align: start;
}
.select {
  margin: 0 150px;
}
.select .table thead {
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  height: 85px;
}
.select .table thead th {
  padding: 24px;
}
.select .table tbody tr {
  border-bottom: 1px solid #666666;
}
.select th {
  font-size: 25px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.1em;
  text-align: left;
  color: #000000;
  text-align: center;
}
.select th:first-child {
  text-align: start;
}
.select .table tbody tr th {
  padding-left: 1.5rem;
  line-height: 85px;
}
.select .table tbody th,
.select .table tbody td {
  padding-top: 0;
  padding-bottom: 0;
}
.select .form-check-input {
  border-radius: 0;
  width: 36px;
  height: 36px;
  margin: 25px 0;
  border: 1px solid;
  background-color: #ebf5df;
}
.text p {
  margin: 35px 0;
  text-align: center;
  color: #666;
}
.button-submit {
  text-align: center;
}
.button-submit button {
  /* width: calc(100% / 5 - 20px); */
  background-color: #666;
  color: #fff;
  width: 406px;
  height: 100px;
  font-size: 30px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
}
</style>