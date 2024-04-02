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
      <div class="dis-grid">
        <table
          class="card menu"
          v-for="({ meal, item }, index) of today"
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
                <h4 class="txt-medium txt-20" v-html="handleNewLine(item)"></h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="dis-grid">
        <table
          class="card menu"
          v-for="({ item }, index) of tomorrow"
          :key="index"
        >
          <tbody>
            <tr>
              <td>
                <h4 class="txt-medium txt-20" v-html="handleNewLine(item)"></h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="dis-grid">
        <table
          class="card menu"
          v-for="({ item }, index) of twodays"
          :key="index"
        >
          <tbody>
            <tr>
              <td>
                <h4 class="txt-medium txt-20" v-html="handleNewLine(item)"></h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KyDietGrideCard",
  props: {
    today: {
      type: Array,
      required: true,
      meal: String,
      item: String,
    },
    tomorrow: {
      type: Array,
      required: true,
      item: String,
    },
    twodays: {
      type: Array,
      required: true,
      item: String,
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

<style lang="css" src="./css/KyDietGrideCard.css" scoped>
</style>