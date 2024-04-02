<template>
  <div class="flex-wrap">
    <div class="guide-left">
      <div class="guide-top">
        <div>
          <h1 class="txt-bold txt-40">투약 안내</h1>
        </div>
      </div>
      <div class="guide-bottom zidx-2">
        <h2 class="txt-medium txt-40">{{ subDate }}</h2>
      </div>
      <bottom-circle />
    </div>
    <div class="guide-right">
      <div class="top-text">
        <h3 class="txt-bold txt-70">
          <strong class="txt-bold">복약 안내</strong>
        </h3>
      </div>
      <div class="contain">
        <table class="table .table-bordered border-dark txt-medium txt-25">
          <thead>
            <tr>
              <th style="width: 14%">분류</th>
              <th style="width: 35%">약 이름</th>
              <th style="width: 8%">1회 투여량</th>
              <th style="width: 8%">1일 투여</th>
              <th style="width: 35%">용법 / 비고</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(dataType, index) in typeSet" :key="index">
              <template
                v-for="(listItem, index2) in processedList.get(dataType)"
                :key="index2"
              >
                <tr>
                  <td
                    :rowspan="processedList.get(dataType).length"
                    v-if="index2 === 0"
                  >
                    {{ dataType }}
                  </td>
                  <td class="bg-color">{{ listItem.medicineName }}</td>
                  <td>{{ listItem.adjustableAmount }}</td>
                  <td class="bg-color">{{ listItem.oneDose }}</td>
                  <td class="align-start">{{ listItem.note }}</td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
    
<script>
import BottomCircle from "@/components/BottomCircle.vue";
import MedicineGrideInfo from "@/json/MedicineGrideInfo.json"
export default {
  components: {
    BottomCircle,
  },
  data() {
    return {
      MedicineGrideInfo:MedicineGrideInfo,
      subDate: "",
      medicine: MedicineGrideInfo,
    };
  },
  methods: {
    setTime: function () {
      let moment = require("moment");
      this.subDate = moment.utc().locale("ko").format("MM월 DD일");
    },
  },
  mounted() {
    this.setTime();
  },
  computed: {
    processedList() {
      return this.medicine.reduce((map, item) => {
        const tempArray = map.get(item.classification) || [];
        tempArray.push({
          medicineName: item.medicineName,
          adjustableAmount: item.adjustableAmount,
          oneDose: item.oneDose,
          note: item.note,
        });
        map.set(item.classification, tempArray);
        return map;
      }, new Map());
    },
    typeSet() {
      return this.medicine
        .map((o) => o.classification)
        .reduce((set, item) => {
          if (!set.includes(item)) {
            set.push(item);
          }
          return set;
        }, []);
    },
  },
};
</script>
    
<style lang="css" src="./css/MedicineGrideInfo.css" scoped>
</style>