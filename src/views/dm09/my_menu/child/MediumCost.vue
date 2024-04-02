<template>
  <div>
    <div class="top-text">
      <img src="@/img/common/profile.png" alt="" />
      <div>
        <h2 class="txt-light txt-70">
          <strong class="txt-bold">{{ name }}</strong> 님이 납부하실
          입원진료비입니다.
        </h2>
      </div>
    </div>
    <div class="contain info-wrap">
      <div class="info-contents w38">
        <h2>중간 진료비</h2>
        <div class="contents-01">
          <div class="box-01">
            <h2>{{ name }}</h2>
            <h3 class="txt-medium txt-25">님이 납부하실 입원진료비입니다.</h3>
          </div>
          <div class="box-02">
            <span class="txt-25 txt-bold">납부 예정금액</span>
            <h2 v-if="pay !== ''">{{ pay }}</h2>
            <h2 v-else>내역이 없습니다</h2>
            <p class="txt-medium txt-18">
              위 금액은 최종심사 전 금액으로<br />최종심사 후 금액이 변동될 수
              있습니다.
            </p>
          </div>
        </div>
      </div>
      <div class="info-contents w1180">
        <h2>안내사항</h2>
        <div class="contents-02">
          <ul>
            <li>
              <strong>＃납부예정금액</strong>은 어제까지 입원진료비입니다.
            </li>
            <li>
              <strong>＃산정특례 및 격리 미적용</strong>인 경우가 있사오니
              참고하시기 바랍니다.
            </li>
            <li>
              <strong>＃기타 진료비에 대한 사항</strong>은 원무팀에 문의하시기
              바랍니다.
            </li>
            <li><strong>＃납부방법</strong> : 직접 방문, 계좌 입금 등</li>
            <li>
              <strong>＃납부계좌</strong> : 683-000400-00905 KEB하나은행 (예금주
              : 건양대학교병원)
            </li>
          </ul>
          <table class="table align-middle text-center">
            <thead>
              <tr>
                <th>구분</th>
                <th>전담 층</th>
                <th>연락처</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">건강보험, 의료급여, 일반</td>
                <td>3층 ~ 6층</td>
                <td>042-612-2019</td>
              </tr>
              <tr>
                <td>7층 ~ 10층</td>
                <td>042-612-2018</td>
              </tr>
              <tr>
                <td>산재보험</td>
                <td>전층</td>
                <td>042-612-2021</td>
              </tr>
              <tr>
                <td>산재보험</td>
                <td>전층</td>
                <td>042-612-2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediumCostInfo",
  data() {
    return {
      name: "신○순",
      pay: "",
    };
  },
};
</script>
<style lang="css" src="./css/MediumCost.css" scoped>
</style>