<template>
  <div>
    <div class="top-text">
      <img src="@/img/common/profile.png" alt="" />
      <div>
        <h2 class="txt-medium txt-40">
          <strong>{{ name }}</strong> 님이 사용중입니다.
        </h2>
        <h3 class="txt-medium txt-25">환자번호({{ number }})</h3>
      </div>
    </div>
    <div class="contain info-wrap">
      <div class="info-contents w38">
        <h2>환자 정보</h2>
        <div class="contents-01">
          <h2>{{ name }}</h2>
          <h3>환자정보 ({{ number }})</h3>
          <h3>{{ hospitalClass }}</h3>
        </div>
        <div class="contents-01">
          <h3>입원일자</h3>
          <h2>{{ AdmissionDate }}</h2>
          <h3>퇴원 예정 일자</h3>
          <h2>{{ expectedDate }}</h2>
        </div>
      </div>
      <div class="info-contents w57">
        <h2>환자 스케줄</h2>
        <div class="contents-02">
          <h3 v-for="item in schedule" :key="item">{{ item }}</h3>
        </div>
      </div>
      <div class="info-contents w57">
        <h2>주치의</h2>
        <div class="contents-02">
          <div class="flex-wrap">
            <img :src="require(`@/img/doctor2/${img}.jpg`)" alt="" />
            <ul class="name-card">
              <li>
                <h3>{{ hospitalClass }}</h3>
              </li>
              <li>
                <h2>{{ doctor }} 교수</h2>
              </li>
            </ul>
          </div>
          <div class="flex-column">
            <h3>회진시간</h3>
            <h3>{{ roundsTime }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientInfo",
  data() {
    return {
      name: "신○순",
      number: "0076231",
      hospitalClass: "신장내과",
      AdmissionDate: "2022-05-05",
      expectedDate: "정보없음",
      schedule: ["예정일정이 없습니다"],
      doctor: "황정민",
      roundsTime: "화 08:45 ~ 10:00",
      img: "1",
    };
  },
};
</script>

<style scoped>
.w38 {
  /* width: calc(100% / 3 - 150px); */
  width: 380px;
}
.w57 {
  /* width: calc(100% / 3 + 30px); */
  width: 570px;
}
h2 {
  letter-spacing: 0em;
  color: #000;
}
h3 {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0em;
  color: #000;
}
.top-text {
  padding-bottom: 67px;
}
.top-text h2 {
  margin-bottom: 10px;
}
.top-text img {
  width: 171px;
  height: 171px;
}
.info-wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.contain {
  margin: 0 170px 0 150px;
}
.info-wrap .info-contents {
  display: flex;
  flex-flow: column;
}
.info-wrap .info-contents h2 {
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 28px;
}
.info-wrap .info-contents .contents-01 {
  width: 100%;
  height: 293px;
  background-color: #006940;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 5px rgba(51, 51, 51, 0.25);
  margin-bottom: 20px;
  padding: 42px 0 0 40px;
}
.info-wrap .info-contents .contents-01:last-child {
  margin-bottom: 0;
  margin-top: 20px;
}
.info-wrap .info-contents .contents-01 h2,
.info-wrap .info-contents .contents-01 h3 {
  color: #fefefe;
}
.info-wrap .info-contents .contents-02 {
  width: 100%;
  height: 620px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 4px 4px 10px 5px rgba(51, 51, 51, 0.25);
  padding: 40px;
}
.info-wrap .info-contents .contents-02 h3 {
  font-size: 40px;
  font-weight: 300;
}
.info-wrap .info-contents .contents-02 .flex-wrap {
  display: flex;
  flex-flow: row nowrap;
}
.info-wrap .info-contents .contents-02 .flex-wrap img {
  /* width: calc(100% / 2 - 30px); */
  width: 226px;
  height: 293px;
}
.info-wrap .info-contents .contents-02 .flex-wrap h3 {
  font-size: 25px;
}
.info-wrap .info-contents .contents-02 .flex-wrap .name-card {
  padding-top: 10px;
}
.info-wrap .info-contents .contents-02 .flex-wrap .name-card h3 {
  font-weight: 400;
}
.info-wrap .info-contents .contents-02 .flex-wrap h2 {
  font-size: 40px;
}
.info-wrap .info-contents .contents-02 .flex-column {
  display: flex;
  flex-flow: column;
  padding-top: 8rem;
}
.info-wrap .info-contents .contents-02 .flex-column h3 {
  border-bottom: 1px solid #b8b8b8;
  padding: 13px 23px;
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 500;
  height: 55px;
  display: table-cell;
  vertical-align: middle;
}
.info-wrap .info-contents .contents-02 .flex-column h3:first-child {
  background-color: #f2f2f2;
  font-weight: 400;
}
</style>