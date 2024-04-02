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
          <label class="form-check-label" for="flexRadioDefault1" tabindex="-1"
            >아침</label
          >
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          />
        </div>
        <div class="form-check">
          <label class="form-check-label" for="flexRadioDefault2" tabindex="-1"
            >점심</label
          >
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
        </div>
        <div class="form-check">
          <label class="form-check-label" for="flexRadioDefault2" tabindex="-1"
            >저녁</label
          >
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
                <input
                  type="radio"
                  class="first-focus form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  class="form-check-input"
                  :name="taste"
                  tabindex="1"
                />
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
        <button type="button" @click="submit">전송</button>
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
  methods: {
    submit: function () {
      console.log("submit");
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

<style lang="css" src="./css/KyMealSatisfaction.css" scoped>
</style>