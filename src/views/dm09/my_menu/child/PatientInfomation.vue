<template>
  <div>
    <div class="top-text">
      <img src="@/img/common/profile.png" alt="" />
      <div>
        <h2 class="txt-medium txt-40">
          <strong>{{ info.name }}</strong> 님이 사용중입니다.
        </h2>
        <h3 class="txt-medium txt-25">환자번호({{ info.number }})</h3>
      </div>
    </div>
    <div class="contain info-wrap">
      <div class="info-contents w38">
        <h2>환자 정보</h2>
        <div class="contents-01">
          <h2>{{ info.name }}</h2>
          <h3>환자정보 ({{ info.number }})</h3>
          <h3>{{ info.hospitalClass }}</h3>
        </div>
        <div class="contents-01">
          <h3>입원일자</h3>
          <h2>{{ info.AdmissionDate }}</h2>
          <h3>퇴원 예정 일자</h3>
          <h2 v-if="info.expectedDate != ''">{{ info.expectedDate }}</h2>
          <h2 v-else>정보 없음</h2>
        </div>
      </div>
      <div class="info-contents w57">
        <h2>환자 스케줄</h2>
        <div class="contents-02">
          <h3 v-if="info.schedule == ''">예정일정이 없습니다.</h3>
          <h3 v-else v-for="item in info.schedule" :key="item">{{ item }}</h3>
        </div>
      </div>
      <div class="info-contents w57">
        <h2>주치의</h2>
        <div class="contents-02">
          <div class="flex-wrap">
            <img :src="require(`@/img/doctor2/${doctor.img}.jpg`)" alt="" />
            <ul class="name-card">
              <li>
                <h3>{{ doctor.hospitalClass }}</h3>
              </li>
              <li>
                <h2>{{ doctor.name }} 교수</h2>
              </li>
            </ul>
          </div>
          <div class="flex-column">
            <h3>회진시간</h3>
            <h3>{{ doctor.roundsTime }}</h3>
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
      info: {
        name: "신○순",
        number: "0076231",
        hospitalClass: "신장내과",
        AdmissionDate: "2022-05-05",
        expectedDate: "",
        schedule: [""],
      },
      doctor: {
        name: "황정민",
        hospitalClass: "신장내과",
        roundsTime: "화 08:45 ~ 10:00",
        img: "1",
      },
    };
  },
};
</script>
<style lang="css" src="./css/PatientInfomation.css" scoped>
</style>