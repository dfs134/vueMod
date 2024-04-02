<template>
  <div class="contain text-center doctor">
    <div class="row row-cols-3">
      <router-link
        to=""
        class="col"
        v-for="({ img, Department, doctor, docterMenu }, index) of pages"
        :key="index"
      >
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <!-- <img :src="img" class="img-fluid rounded-start" alt="..."> -->
              <img :src="require(`@/img/template/${img}.png`)" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h6 class="card-text">{{ Department }}</h6>
                <h5 class="card-title">{{ doctor }} 교수</h5>
                <p class="card-text">{{ docterMenu }}</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "doctor-card-info",
  components: {},
  data() {
    return {};
  },
  props: {
    pages: {
      type: Array,
      required: true,
      img: String,
      Department: String,
      doctor: String,
      docterMenu: String,
    },
  },
  methods: {},
};
</script>

<style scoped>
.col {
  border: none;
  box-shadow: none;
  background: none;
}
.card {
  overflow-y: hidden;
  border: 1px solid #666;
  box-shadow: 10px 15px 22px 0px rgb(0 0 0 / 50%);
  height: 210px;
}
.card .card-body {
  padding: 1rem;
  text-align: start;
  padding-bottom: 0;
}
.card .row,
.card .row .col {
  height: 100%;
}
.card .row img {
  height: 100%;
  width: 100%;
  border-right: 1px solid #666;
}
.card-body h6 {
  margin-bottom: 0;
  font-size: 1.5rem;
}
.card-body .card-title {
  font-size: 2em;
}
.card-body p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 1500px) {
  .row a {
    width: 45%;
  }
}
@media (max-width: 1100px) {
  .row a {
    width: 45%;
    margin: 30px auto;
  }
}
</style>