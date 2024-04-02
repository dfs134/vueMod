<template>
  <div class="flex-content small-list">
    <div class="content-text">
      <div class="list top-text">
        <!-- <h2><strong>{{$route.query.TopText}}</strong></h2>  -->
        <h2>
          <strong>{{ DoctorName[$route.query.idx].TopText }}</strong>
        </h2>
        <h2>의료진 소개</h2>
      </div>
      <div class="contain text-start standard">
        <div class="row">
          <button class="first-focus col" @focus="firstChangImg">
            <h5 class="bg-black">진료과 소개</h5>
          </button>
        </div>
        <div
          class="row"
          v-for="doctorInfo in DoctorName[$route.query.idx].content"
          :key="doctorInfo.idx"
        >
          <button
            class="col"
            v-on:focus="changeImg($event, doctorInfo.idx)"
            @click="chkColor"
          >
            <h5 class="bg-black">{{ doctorInfo.name }} 교수</h5>
          </button>
        </div>
      </div>
    </div>
    <div class="content-img" v-show="medicalImg">
      <img
        :src="
          require(`@/img/dm09/hospital/MedicalIntorduction/Medical_staff/${
            DoctorName[$route.query.idx].img
          }.png`)
        "
        alt=""
      />
    </div>
    <div class="content-img" v-show="medicalDoctor">
      <doctor-card
        :name="doctorInfo.name"
        :doctorField="doctorInfo.doctorField"
        :career="doctorInfo.career"
        :doctorImg="doctorInfo.doctorImg"
        :morning="doctorInfo.morning"
        :afternoon="doctorInfo.afternoon"
        :other="doctorInfo.other"
      />
    </div>
  </div>
</template>
  
<script>
import doctorCard from "./components/doctorCard.vue";
import DoctorInfo from "@/json/DoctorInfo.json";
import DoctorName from "@/json/DoctorName.json";

export default {
  name: "MedicalStaffIntro",
  components: {
    doctorCard,
  },
  data() {
    return {
      DoctorInfo: DoctorInfo,
      DoctorName: DoctorName,
      medicalImg: true,
      medicalDoctor: false,
      doctorInfo: {
        name: "",
        doctorField: "",
        career: [],
        morning: {
          mon: "",
          tue: "",
          wen: "",
          thr: "",
          fir: "",
          sat: "",
        },
        afternoon: {
          mon: "",
          tue: "",
          wen: "",
          thr: "",
          fir: "",
          sat: "",
        },
        other: {
          first: "",
          second: "",
        },
        doctorImg: "박요한_교수",
      },
    };
  },
  methods: {
    firstChangImg: function () {
      this.medicalImg = true;
      this.medicalDoctor = false;
      this.$emit('changeImg');
    },
    changeImg: function (idx, doctorIdx) {
      this.medicalImg = false;
      this.medicalDoctor = true;
      
      const doctorType = `type${DoctorName[this.$route.query.idx].index}`;
      const { name, doctorField, career, morning, afternoon, other, doctorImg } = this.DoctorInfo[doctorType][doctorIdx];
      Object.assign(this.doctorInfo, { name, doctorField, career, morning, afternoon, other, doctorImg });

      this.$emit('changeImg');
    },
    firstChk: function () {
      const first = document.querySelector(".row .col");
      first.classList.add("border-2");
      first.firstChild.classList.add("bg-green");
    },
  },
  created() {},
  mounted() {
    this.firstChk();
    const element = document.querySelector(".first-focus");
    if (element) {
      element.focus();
    }
  },
  props: {
    img: String,
    TopText: String,
    content: Array,
  },
  computed: {},
};
</script>
  