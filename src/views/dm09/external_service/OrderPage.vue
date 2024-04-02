<template>
  <div class="flex-wrap">
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
      <div class="contain">
        <div class="basket">
          <input type="checkbox" name="basket" class="form-check-input" />
          <label for="basket">장바구니 비우기</label>
        </div>
        <div>
          <ShoppingBasket
            :basket="basket"
            :totalPrice="total"
            @minus="minus"
            @plus="plus"
            v-if="basket != ''"
          />
          <div v-else class="no-basket">
            <h1>장바구니에 담은 상품이 없습니다.</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShoppingBasket from "./components/ShoppingBasket.vue";
export default {
  name: "OrderPage",
  components: {
    ShoppingBasket,
  },
  data() {
    return {
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
      basket: [
        {
          idx: 1,
          name: "산모패드",
          specification: "산모패드",
          price: 3700,
          number: 1,
        },
        {
          idx: 2,
          name: "산모패드",
          specification: "산모패드",
          price: 3700,
          number: 1,
        },
      ],
      total: "",
    };
  },
  methods: {
    minus: function (index) {
      this.basket[index].number--;
    },
    plus: function (index) {
      this.basket[index].number++;
      const colne = Object.assign(this.basket[index].price);
      this.basket[index].price = colne + colne;
    },
    // 배열 sum 메소드
    totalPrice: function () {
      const value = this.basket;
      this.nums = [];
      this.sum = 0;
      for (var i = 0; i < value.length; i++) {
        this.nums.push(value[i].price);
      }
      this.nums.forEach((item) => {
        this.sum += parseInt(item);
      });
      const nm = this.sum;
      this.total = nm
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    firstChk: function () {
      const first2 = document.querySelectorAll(
        ".display-flex .select-item button a"
      );
      first2.forEach(function (item) {
        console.log(item.textContent);
        if (item.textContent == "장바구니") {
          item.classList.add("on-active2");
        }
      });
    },
  },
  created() {},
  mounted() {
    this.firstChk();
    this.totalPrice();
  },
  filters: {},
};
</script>
<style lang="css" scoped src="./css/OrderPage.css"></style>