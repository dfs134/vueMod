<template>
  <div>
    <video
      autoplay
      loop
      muted
      :src="require(`@/img/dm09/${EducationVideo[$route.query.idx].url}.mp4`)"
    ></video>
  </div>
</template>

<script>
import EducationVideo from "@/json/EducationViedo.json";
export default {
  name: "NewVideo",
  data() {
    return {
      EducationVideo: EducationVideo,
    };
  },
  methods: {
    videoName: function () {
      console.log(this.EducationVideo);
    },
  },
  created() {},
  mounted() {
    this.videoName();
  },
  props: {
    url: String,
  },
};
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
}
</style>