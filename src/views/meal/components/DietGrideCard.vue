<template>
  <div class="contain text-center">
    <div class="row row-cols-3">
      <div
        class="card day"
        v-for="({ meal0, menu1 }, index) of day"
        :key="index"
      >
        <p class="txt-25">{{ meal0 }}</p>
        <p class="txt-25">{{ menu1 }}</p>
      </div>
    </div>
    <div class="row row-cols-3">
      <table
        class="card menu"
        v-for="({ meal, menu }, index) of pages"
        :key="index"
      >
        <thead>
          <tr>
            <th>
              <h3 class="txt-bold txt-25">{{ meal }}</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4 class="txt-medium txt-20" v-html="handleNewLine(menu)"></h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "StandardCard",
  props: {
    pages: {
      type: Array,
      required: true,
      meal: String,
      menu: String,
    },
    day: {
      type: Array,
      required: true,
      meal0: String,
      menu1: String,
    },
  },
  mounted() {},
  methods: {
    handleNewLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, "</br>");
    },
  },
};
</script>

<style scoped>
.contain {
  margin: 0 120px;
}
.row .card.day {
  /* width: calc(100% / 3 - 20px); */
  width: 454px;
  height: 71px;
  overflow: hidden;
  margin-bottom: 11px;
  margin-right: 11px;
  box-shadow: 2px 2px 10px 2px #33333340;
  z-index: 2;
  padding: 0;
  background-color: #006940;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 21px;
  border-radius: 0;
}
.row .card.day p:last-child {
  background: #257f5c;
  height: 100%;
  width: 103px;
  border-radius: 35.5px 0 0 35.5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
}
.row .card.day p {
  line-height: 30px;
  letter-spacing: 0em;
  margin: 0;
  font-weight: 500;
  color: white;
}
.row .card.day:nth-of-type(2),
.row .card.day:nth-of-type(3) {
  background: #7dc242;
}
.row .card.day:nth-child(2) p:last-child,
.row .card.day:nth-child(3) p:last-child {
  background: #95cd67;
}
.row .card.day:nth-of-type(2) p,
.row .card.day:nth-of-type(3) p {
  font-weight: 400;
}
.row .card.menu {
  /* width: calc(100% / 3 - 20px); */
  width: 454px;
  height: 246px;
  overflow: hidden;
  margin-bottom: 11px;
  margin-right: 11px;
  padding: 15px 21px;
  box-shadow: 2px 2px 10px 2px #33333340;
  z-index: 2;
  border-radius: 0;
}
.row .card.menu tbody {
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.row .card.menu:nth-of-type(7),
.row .card.menu:nth-of-type(8),
.row .card.menu:nth-of-type(9) {
  margin-bottom: 0;
}
.row .card.menu h3 {
  line-height: 30px;
  color: #006940;
  position: absolute;
}
.row .card.menu h4 {
  color: #000000;
  margin: 0 auto;
  line-height: 34px;
  font-weight: 400;
  font-size: 20px;
}
.row .card.menu:nth-of-type(2) h4,
.row .card.menu:nth-of-type(3) h4,
.row .card.menu:nth-of-type(5) h4,
.row .card.menu:nth-of-type(6) h4,
.row .card.menu:nth-of-type(8) h4,
.row .card.menu:nth-of-type(9) h4 {
  color: #666666;
}

@media (max-width: 1500px) {
  .row .card.day p {
    font-size: 20px;
  }
  .row .card.menu h3 {
    font-size: 25px;
  }
  .row .card.menu h4 {
    font-size: 19px;
  }
}
@media (max-width: 1100px) {
}
</style>