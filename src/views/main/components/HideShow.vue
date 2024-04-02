<template>
  <div class="HideShow" style="display: none">버튼</div>
  <div
    class="nodata"
    style="background-color: black; z-index: 99999; height: 300px"
  >
    <router-link to="/thumb_standard/Standard">
      <p>표준 박스</p>
    </router-link>
    <router-link to="/thumb_standard/StandardText">
      <p>표준 텍스트박스</p>
    </router-link>
    <router-link to="/thumb_big/Big">
      <p>큰 박스</p>
    </router-link>
    <router-link to="/thumb_big/BigText">
      <p>큰 텍스트박스</p>
    </router-link>
    <router-link to="/thumb_small/Small">
      <p>작은 박스</p>
    </router-link>
    <router-link to="/thumb_small/SmallText">
      <p>작은 텍스트박스</p>
    </router-link>
    <router-link to="/simple_list/ListStandard">
      <p>표준 리스트</p>
    </router-link>
    <router-link to="/simple_list/ListBig">
      <p>큰 리스트</p>
    </router-link>
    <router-link to="/simple_list/ListSmall">
      <p>작은 리스트</p>
    </router-link>
    <router-link to="/complex_list/ListComplexStandard">
      <p>표준 복합 리스트</p>
    </router-link>
    <router-link to="/complex_list/ListComplexNarrow">
      <p>표준 좁은 리스트</p>
    </router-link>
    <router-link to="/doctor/doctor-card">
      <p>의사 카드</p>
    </router-link>
    <router-link to="/nurse/nurse-call">
      <p>간호사 호출</p>
    </router-link>
    <router-link to="/meal/meal-info">
      <p>식사/영양 정보</p>
    </router-link>
    <router-link to="/NewAudio">
      <p>비디오</p>
    </router-link>
    <router-link to="/ImgFull">
      <p>전체 이미지</p>
    </router-link>
    <router-link to="/meal/diet-guide">
      <p>식단안내</p>
    </router-link>
    <router-link to="/survey/meal-satisfaction">
      <p>식사만족도</p>
    </router-link>
    <router-link to="/patient/patient-info">
      <p>환자 정보</p>
    </router-link>
    <router-link to="/patient/medicine-guide">
      <p>복약 안내</p>
    </router-link>
    <router-link to="/patient/test-results">
      <p>검사 결과</p>
    </router-link>
    <router-link to="/patient/medium-cost-info">
      <p>중간병원비용</p>
    </router-link>
    <router-link to="/login/login">
      <p>로그인</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HideShow",
};
</script>

<style scoped>
.HideShow {
  position: absolute;
  top: 5%;
  left: 2%;
  font-size: 40px;
}
.nodata {
  visibility: hidden;
  position: absolute;
  bottom: 50px;
  color: white;
  top: 50px;
  left: 20%;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  width: 50%;
  height: 100px;
}
.nodata p {
  color: white;
  margin-right: 20px;
}
</style>