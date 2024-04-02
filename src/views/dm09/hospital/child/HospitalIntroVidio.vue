<template>
  <div class="video">
    <video
      controls
      autoplay
      loop
      muted
      src="@/img/dm09/dm09_intro_vs2.mp4"
      id="vedio"
    ></video>
  </div>
</template>

<script>
export default {
  // 병원 소개영상
  name: "HospitalIntroVedio",
  mounted() {},
};
</script>
<style scoped>
.video {
  width: 1920px;
  height: 1080px;
}
video {
  width: 100%;
  height: 100%;
}
</style>