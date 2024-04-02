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
          <div>
            <input type="radio" name="basket" class="form-check-input" />
            <label for="basket">주문</label>
            <input type="radio" name="basket" class="form-check-input" />
            <label for="basket">배송완료</label>
            <input type="radio" name="basket" class="form-check-input" />
            <label for="basket">배송취소</label>
          </div>
          <div class="refresh">
            <button><img src="@/img/dm09/cu/refresh.png" alt="" /></button>
            <h3>새로고침</h3>
          </div>
        </div>
        <div>
          <ShoppingList
            :basket="basket"
            :totalPrice="total"
            @minus="minus"
            @plus="plus"
            v-if="basket != ''"
          />
          <div v-else class="no-basket">
            <h1>주문내역이 없습니다.</h1>
          </div>
        </div>
        <div class="infomation">
          <h3>※ 현재 주문목록 및 배송 상태입니다.</h3>
          <h3>※ 배송 안내 : 요일무관, 08:00 ~ 20:00에 상시 수행합니다.</h3>
          <h3>※ 전화 문의 : CU편의점 042-543-6301 / 010-5442-4951</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShoppingList from "./components/ShoppingList.vue";
export default {
  name: "OrderPage",
  components: {
    ShoppingList,
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
          orderDate: "2023.00.00",
          name: "산모패드",
          price: 3700,
          payment: "카드",
          deliveryStatus: "배송중",
          cancel: "-",
        },
        {
          idx: 2,
          orderDate: "2023.00.00",
          name: "산모패드",
          price: 3700,
          payment: "카드",
          deliveryStatus: "배송중",
          cancel: "-",
        },
      ],
      total: "",
    };
  },
  methods: {
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
        if (item.textContent == "주문목록") {
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
<style lang="css" scoped src="./css/OrderList.css"></style>
