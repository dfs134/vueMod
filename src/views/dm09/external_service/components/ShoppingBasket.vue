<template>
  <table class="table align-middle text-center">
    <colgroup>
      <col width="300px" />
      <col width="400px" />
      <col width="300px" />
      <col width="300px" />
      <col width="300px" />
    </colgroup>
    <thead>
      <tr>
        <th scope="col">상품 이미지</th>
        <th scope="col">상품명</th>
        <th scope="col">상품사양</th>
        <th scope="col">수량</th>
        <th scope="col">가격</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in basket" :key="index">
        <td></td>
        <td>{{ item.name }}</td>
        <td>{{ item.specification }}</td>
        <td>
          <div class="price-change">
            <button
              type="button"
              @click="$emit('minus', index)"
              :disabled="item.number <= 1"
              tabindex="1"
            >
              <img src="@/img/dm09/cu/minus.png" alt="" />
            </button>
            <h5>{{ item.number }}</h5>
            <button type="button" @click="$emit('plus', index)" tabindex="1">
              <img src="@/img/dm09/cu/plus.png" alt="" />
            </button>
          </div>
        </td>
        <td>{{ item.price }}<small>원</small></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          총 결제예상금액 <span>{{ totalPrice }}원</span>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "ShoppingBasket",
  props: {
    basket: {
      type: Array,
      name: String,
      specification: String,
      price: Number,
      number: Number,
    },
    totalPrice: String,
  },
};
</script>

<style scoped>
.table thead {
  background-color: #f2f2f2;
  height: 67px;
}

.table thead th {
  font-weight: 400;
  font-size: 30px;
  color: #000;
  padding: 11px 1.5rem 8px;
  border-bottom: 1px solid #666;
}
.table thead tr {
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
}
.table tbody {
  border-top: 1px solid #666;
}
.table tbody tr {
  height: 247px;
}
.table tbody td {
  font-weight: 400;
  font-size: 30px;
  color: #000;
  padding: 11px 0.5rem 8px;
}
.table tfoot tr td {
  height: 67px;
  padding-top: 13px;
  font-size: 30px;
  font-weight: 400;
  border-bottom: 1px solid #666;
}
.table tfoot tr td span {
  color: #006940;
}
.table tbody tr td:first-child,
.table tfoot tr td {
  background-color: #f2f2f2;
}
.table tbody tr td,
.table tbody tr:last-child td {
  border-width: 1px;
  border: 1px solid #666;
}

.table thead tr th:first-child,
.table tbody tr td:first-child {
  border-left: none;
}

.table thead tr th:last-child,
.table tbody tr td:last-child {
  border-right: none;
}
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: #666;
}

.price-change {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bbb;
  width: 55%;
  margin: 0 auto;
}
.price-change h5 {
  margin: 0;
  padding-top: 5px;
  font-size: 25px;
  font-weight: 400;
  color: #333;
}
.price-change button {
  font-size: 25px;
  padding: 5px 10px 0 10px;
  border: none;
  background: none;
}
.table small {
  font-weight: 400;
  font-size: 20px;
}

.price-change button:focus {
  outline: 5px solid yellow;
}
</style>