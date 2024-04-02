<template>
  <div class="flex-wrap">
    <div class="guide-left">
      <div class="guide-top">
        <div>
          <h1 class="txt-bold txt-40">투약 안내</h1>
        </div>
      </div>
      <BottomCircle />
    </div>
    <div class="guide-right">
      <div class="top-text">
        <h3 class="txt-bold txt-70">
          {{ TopText }} <strong class="txt-bold">복약 안내</strong>
        </h3>
      </div>
      <div class="contain">
        <table class="table .table-bordered border-dark txt-medium txt-25">
          <thead>
            <tr>
              <th style="width: 14%">분류</th>
              <th style="width: 35%">약 이름</th>
              <th style="width: 8%">1회 투여량</th>
              <th style="width: 8%">1일 투여</th>
              <th style="width: 35%">용법 / 비고</th>
            </tr>
          </thead>
          <tbody>
            <!-- 1번 -->
            <tr>
              <th rowspan="3">주사</th>
              <td class="bg-color align-start">스모프카비벤주 [986mL/Bag]</td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">-</td>
            </tr>
            <tr>
              <td class="bg-color align-start">
                히시파겐씨주(고시비급여) [20mL/A]
              </td>
              <td>2</td>
              <td class="bg-color">1회</td>
              <td class="align-start">-</td>
            </tr>
            <tr>
              <td class="bg-color align-start">가스터 주 [20mg/V]</td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">-</td>
            </tr>
            <!-- 2번 -->
            <tr>
              <th rowspan="8">내복약</th>
              <td class="bg-color align-start">파리에트정 [10mg/T]</td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">1일 1회 아침 식후 30분에</td>
            </tr>
            <tr>
              <td class="bg-color align-start">렉사프로정 [10mg/T]</td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">1일 1회 저녁 식후 30분에</td>
            </tr>
            <tr>
              <td class="bg-color align-start">레코미드정 [100mg/T]</td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">1일3회 아침,점심,저녁 식후30분에</td>
            </tr>
            <tr>
              <td class="bg-color align-start">레코미드정 [100mg/T]</td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">1일3회 아침,점심,저녁 식후30분에</td>
            </tr>
            <tr>
              <td class="bg-color align-start">
                알리버 현탁액(고시비급여 )[20g/포]
              </td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">1일3회 아침,점심,저녁 식후30분에</td>
            </tr>
            <tr>
              <td class="bg-color align-start">레날민정;투석 [T]</td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">1일 1회 아침 식후 30분에</td>
            </tr>
            <tr>
              <td class="bg-color align-start">
                메게이스 내복현탁액 [10mL/포]]
              </td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">1일 1회 아침 식후 30분에</td>
            </tr>
            <tr>
              <td class="bg-color align-start">엔커버액-옥수수 [200ml/Pack]</td>
              <td>1</td>
              <td class="bg-color">1회</td>
              <td class="align-start">의사지시대로</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import BottomCircle from "@/components/BottomCircle.vue";
export default {
  components: {
    BottomCircle,
  },
};
</script>

<style scoped>
.flex-wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
}
.guide-left {
  /* padding: 80px 0 50px 50px; */
  width: 250px;
  height: 1080px;
  background-color: #006940;
  display: flex;
  flex-flow: column;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.guide-left h1 {
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  padding-top: 78px;
}
.guide-right {
  width: 86%;
  height: 100%;
  overflow-y: scroll;
}
.top-text {
  flex-flow: column;
  align-items: flex-start;
  margin: 0px 100px;
  padding-top: 78px;
  padding-bottom: 74px;
}
.contain {
  margin: 0 100px;
}
.contain .table {
  display: table-cell;
  width: 1380px;
  padding: 0 23px;
  box-shadow: 4px 4px 10px 5px rgba(51, 51, 51, 0.25);
  border-radius: 20px;
  text-align: center;
}
.contain .table thead {
  border-bottom: 2px solid;
}
.contain .table th,
td {
  font-size: 25px;
  font-weight: 400;
  vertical-align: middle;
}
.contain .table th {
  padding: 0.85rem 1.5rem 0.6rem 1.5rem;
}
.contain .table td {
  padding: 18px 0 19px;
  color: #666666;
}
.contain .table .bg-color {
  background: #ebf5df;
}
.contain .table .align-start {
  text-align: start;
  padding-left: 30px;
}
</style>