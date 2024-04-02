<template>
  <div class="flex-column">
    <div class="doctor-head">
      <h3 class="bg-black">{{ hospitalClass }}</h3>
      <h1 class="bg-black">{{ name }}</h1>
    </div>
    <div class="doctor-field">
      <h3>전문분야</h3>
      <h5>{{ doctorField }}</h5>
    </div>
    <div class="doctor-time">
      <h3>진료시간표</h3>
      <table class="table">
        <colgroup>
          <col width="93.5px" />
          <col width="91.5px" />
          <col width="91.5px" />
          <col width="91.5px" />
          <col width="91.5px" />
          <col width="91.5px" />
          <col width="91.5px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">월</th>
            <th scope="col">화</th>
            <th scope="col">수</th>
            <th scope="col">목</th>
            <th scope="col">금</th>
            <th scope="col">토</th>
          </tr>
        </thead>
        <tbody>
          <tr class="clinic-hours">
            <th scope="row">오전</th>
            <td>{{ morning.mon }}</td>
            <td>{{ morning.tue }}</td>
            <td>{{ morning.wen }}</td>
            <td>{{ morning.thr }}</td>
            <td>{{ morning.fir }}</td>
            <td>{{ morning.sat }}</td>
          </tr>
          <tr class="clinic-hours">
            <th scope="row">오후</th>
            <td>{{ afternoon.mon }}</td>
            <td>{{ afternoon.tue }}</td>
            <td>{{ afternoon.wen }}</td>
            <td>{{ afternoon.thr }}</td>
            <td>{{ afternoon.fir }}</td>
            <td>{{ afternoon.sat }}</td>
          </tr>
          <tr class="other">
            <th>비고</th>
            <td colspan="3">{{ other.first }}</td>
            <td colspan="3">{{ other.second }}</td>
          </tr>
        </tbody>
      </table>
      <p>학회 및 출장 등의 이유로 실제 진료스케줄과 차이가 있을 수 있습니다.</p>
    </div>
    <div class="doctor-career">
      <h3>경력</h3>
      <ul>
        <li v-for="item in career" :key="item">
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>
    <div class="absolute-img">
      <img
        :src="
          require(`@/img/dm09/hospital/MedicalIntorduction/Medical_staff/${doctorImg}.png`)
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "doctorCard",
  data() {
    return {};
  },
  props: {
    name: String,
    doctorField: String,
    career: Array,
    doctorImg: String,
    hospitalClass: String,
    morning: {
      mon: String,
      tue: String,
      wen: String,
      thr: String,
      fir: String,
      sat: String,
    },
    afternoon: {
      mon: String,
      tue: String,
      wen: String,
      thr: String,
      fir: String,
      sat: String,
    },
    other: {
      first: String,
      second: String,
    },
  },
};
</script>

<style lang="css" src="./css/doctorCard.css" scoped>
</style>