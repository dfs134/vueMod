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
            <h2>{{ pay }}</h2>
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
      pay: "내역이 없습니다",
    };
  },
};
</script>

<style scoped>
h2,
h3,
h5,
h6,
p {
  color: #000;
}
.w38 {
  width: 380px;
  margin-right: 40px;
}
.w1180 {
  width: 1180px;
}
.top-text {
  padding-bottom: 100px;
}
.top-text h2 {
  margin-bottom: 10px;
  color: #000;
}
.top-text img {
  width: 171px;
  height: 171px;
}
.info-wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.info-wrap .info-contents {
  display: flex;
  flex-flow: column;
}
.info-wrap .info-contents h2 {
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 20px;
}
.info-wrap .info-contents .contents-01 {
  width: 100%;
  height: 626px;
  background-color: #006940;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 5px rgba(51, 51, 51, 0.25);
  margin-bottom: 20px;
  padding: 42px 0 0 40px;
}
.info-wrap .info-contents .contents-01 h2,
h3,
p {
  color: #fff;
}
.info-wrap .info-contents .contents-01 .box-01 h3 {
  word-break: keep-all;
  margin-bottom: 110px;
}
.info-wrap .info-contents .contents-01 .box-02 {
  margin-top: 35%;
}
.info-wrap .info-contents .contents-01 .box-02 .txt-25 {
  background-color: #fff;
  color: #067021;
  padding: 12px 23px 6px 23px;
  border-radius: 23.5px;
}
.info-wrap .info-contents .contents-01 .box-02 h2 {
  margin-top: 19px;
}
.info-wrap .info-contents .contents-02 {
  width: 100%;
  height: 626px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 4px 4px 10px 5px rgba(51, 51, 51, 0.25);
  padding: 40px;
}
.info-wrap .info-contents .contents-02 h3 {
  font-size: 40px;
  font-weight: 300;
}
.info-wrap .info-contents .contents-02 ul {
  padding: 0;
  margin-bottom: 43px;
}
.info-wrap .info-contents .contents-02 ul li {
  font-size: 25px;
  font-weight: 300;
}
.info-wrap .info-contents .contents-02 ul li strong {
  font-weight: 400;
}
.table thead {
  background-color: #476bb4;
}
.table thead th {
  font-weight: 500;
  font-size: 25px;
  color: #fff;
  padding: 11px 1.5rem 8px;
}
.table tbody {
  background-color: #f2f2f2;
}
.table tbody td {
  font-weight: 400;
  font-size: 25px;
  color: #666;
  padding: 11px 0.5rem 8px;
}
.table tbody tr td,
.table tbody tr:last-child td {
  border-width: 1px;
  border: 1px solid #b8b8b8;
}

.table thead tr th:first-child,
.table tbody tr td:first-child {
  border-left: none;
}
.table thead tr th:last-child,
.table tbody tr td:last-child {
  border-right: none;
}
</style>