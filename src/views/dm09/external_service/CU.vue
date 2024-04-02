<template>
  <div class="flex-wrap">
    <div class="guide-left">
      <div class="guide-top">
        <div>
          <img src="@/img/dm09/cu/banner.png" alt="" />
        </div>
        <ul class="selet-type">
          <li v-for="text in selectType" :key="text" @click="change">
            <h3 tabindex="1">{{ text }}</h3>
          </li>
        </ul>
      </div>
      <div class="guide-bottom zidx-2">
        <h2 class="txt-medium txt-40">042-543-6301</h2>
      </div>
    </div>
    <div class="guide-right">
      <div class="top-text">
        <div>
          <h2 class="txt-medium txt-40 bg-black">
            <strong>CU</strong> 주문/배송 서비스
          </h2>
        </div>
        <div class="display-flex">
          <div class="select-item">
            <button v-for="({ menu, router }, index) in select" :key="index">
              <router-link tabindex="1" v-bind:to="`/${router}`">{{
                menu
              }}</router-link>
            </button>
          </div>
          <div class="patient-info">
            <h3>사용자</h3>
            <p>97병동 0076321 3번침상</p>
          </div>
        </div>
      </div>
      <div>
        <PriceCard :Cu="item" @minus="minus" @plus="plus" />
      </div>
    </div>
  </div>
</template>

<script>
import HygieneProducts from "@/json/HygieneProducts.json";
import Food from "@/json/Food.json";
import PriceCard from "./components/PriceCard.vue";
export default {
  name: "Cu",
  components: {
    PriceCard,
  },
  data() {
    return {
      HygieneProducts: HygieneProducts,
      Food: Food,
      selectType: ["위생용품", "식품"],
      select: [
        {
          router: "dm09/external_service/CU",
          idx: 1,
          menu: "상품목록",
        },
        {
          router: "dm09/external_service/OrderPage",
          idx: 2,
          menu: "장바구니",
        },
        {
          router: "dm09/external_service/OrderList",
          idx: 3,
          menu: "주문목록",
        },
      ],
      item: [],
    };
  },
  computed: {},
  methods: {
    minus: function (index) {
      this.item[index].number--;
    },
    plus: function (index) {
      this.item[index].number++;
    },
    firstChk: function () {
      this.item = this.HygieneProducts;

      const first = document.querySelector(".selet-type h3");
      first.classList.add("on-active");

      const first2 = document.querySelectorAll(
        ".display-flex .select-item button a"
      );
      first2.forEach(function (item) {
        if (item.textContent == "상품목록") {
          item.classList.add("on-active2");
        }
      });
    },
    change: function (evt) {
      const chk = document.querySelectorAll(".selet-type h3");
      chk.forEach(function (item) {
        if (item.classList.contains("on-active")) {
          item.classList.remove("on-active");
        }
      });
      const EvtTarget = evt.target;
      EvtTarget.classList.add("on-active");

      const tgt = evt.target.textContent;
      if (tgt == "위생용품") {
        return (this.item = this.HygieneProducts);
      } else if (tgt == "식품") {
        return (this.item = this.Food);
      }
    },
  },
  created() {},
  mounted() {
    this.firstChk();
  },
};
</script>
<style lang="css" scoped src="./css/CU.css"></style>