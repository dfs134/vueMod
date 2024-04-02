<template>
  <div>
    <video
      controls
      autoplay
      loop
      muted
      src="@/img/template/speaker.mp4"
    ></video>
  </div>
</template>

<script>
export default {
  name: "NewAudio",
};
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
}
</style>