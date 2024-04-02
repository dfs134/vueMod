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
                { title: listTitle, values, icon, color }, index
              ) in lists"
              :key="index"
            >
              <td>
                <div class="py-1 d-flex">
                  <div
                    class="d-flex flex-column justify-content-center padding"
                  >
                    <h6>{{ listTitle }}</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <div
                  class="text-center py-1 d-flex justify-content-start align-items-center padding"
                >
                  <p class="mb-0" :class="`${color}`">
                    {{ values[0] }}
                  </p>
                  <i class="fa-2x ms-1" :class="`bi bi-${icon}`"></i>
                </div>
              </td>
              <td class="align-middle">
                <p class="text-start">
                  {{ values[1] }}
                </p>
              </td>
              <td class="align-middle">
                <div
                  class="text-center py-1 d-flex justify-content-start align-items-center padding"
                >
                  <p class="text-center">
                    {{ values[2] }}
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
      default: () => [],
    },
    lists: {
      type: Array,
      required: true,
      values: Array,
      title: String,
      order: String,
      info: String,
      img: String,
      icon: String,
      color: String,
    },
  },
};
</script>

<style scoped>
.width-40 {
  width: 40%;
}
.card {
  box-shadow: none;
}

.table thead {
  background-color: #7dc242;
}
.table thead th {
  font-size: 25px;
  font-weight: 400;
  color: #fff;
  padding: 14px 24px 8px 30px;
  height: 70px;
}
.table tbody td {
  padding-left: 30px;
  height: 70px;
}
.table tbody tr td h6,
.table tbody tr td p {
  font-size: 25px;
  font-weight: 400;
  color: #666666;
}
.contain .table {
  display: table-cell;
  width: 1380px;
  text-align: center;
}
.table td {
  padding-bottom: 0;
}
.table td p,
.table td h6 {
  margin-bottom: 0;
}
.padding {
  margin: 10px 0;
}
.contain .table thead {
  width: 100%;
}
.red {
  color: #ff0000 !important;
}
.blue {
  color: #0038ff !important;
}
.table > tbody > tr:nth-child(even) > td {
  background-color: #ebf5df;
}
.text-center .ms-1 {
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>
