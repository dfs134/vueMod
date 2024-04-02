<template>
  <div class="mb-4 card">
    <div class="px-0 pt-0 pb-2 card-body">
      <div>
        <table class="table align-items-center">
          <thead class="text-start">
            <tr>
              <th
                v-for="(header, index) of headers"
                :key="index"
                class="text-uppercase"
                :class="index >= 1 ? 'width-40' : ''"
                style="width: 15%"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                { title , icon, color, result, reference, unit }, index
              ) in lists"
              :key="index"
            >
              <td>
                <div class="py-1 d-flex">
                  <div
                    class="d-flex flex-column justify-content-center padding"
                  >
                    <h6>{{ title.main }} > {{ title.low }}</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <div
                  class="text-center py-1 d-flex justify-content-start align-items-center padding"
                >
                  <p class="mb-0" :class="`${color}`">
                    {{ result }}
                  </p>
                  <i class="fa-2x ms-1" :class="`bi bi-${icon}`"></i>
                </div>
              </td>
              <td class="align-middle">
                <p class="text-start" v-if="reference.min || reference.max !== '' ">
                  {{ reference.min }} ~ {{ reference.max }}
                </p>
                <p class="text-start" v-else>-</p>
              </td>
              <td class="align-middle">
                <div
                  class="text-center py-1 d-flex justify-content-start align-items-center padding"
                >
                  <p class="text-center">
                    {{ unit }}
                  </p>
                </div>
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
  name: "OrdersListCard",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    headers: {
      type: Array,
    },
    lists: {
      type: Array,
      required: true,
      result: String,
      reference: {
        min:String,
        max:String
      },
      unit: String,
      title: {
        main:String,
        low:String,
      },
      order: String,
      info: String,
      img: String,
      icon: String,
      color: String,
    },
  },
};
</script>

<style lang="css" src="./css/OrdersListCard.css" scoped>
</style>