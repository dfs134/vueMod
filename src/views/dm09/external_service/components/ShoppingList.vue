<template>
  <table class="table align-middle text-center">
    <colgroup>
      <col width="300px" />
      <col width="400px" />
      <col width="224px" />
      <col width="224px" />
      <col width="224px" />
      <col width="224px" />
    </colgroup>
    <thead>
      <tr>
        <th scope="col">주문일</th>
        <th scope="col">상품명</th>
        <th scope="col">가격</th>
        <th scope="col">결제수단</th>
        <th scope="col">상태</th>
        <th scope="col">주문취소</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in basket" :key="index">
        <td>{{ item.orderDate }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}<small>원</small></td>
        <td>{{ item.payment }}</td>
        <td>{{ item.deliveryStatus }}</td>
        <td>{{ item.cancel }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6">
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
      orderDate: String,
      name: String,
      price: Number,
      payment: String,
      deliveryStatus: String,
      cancel: String,
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
  height: 125px;
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
  color: #652d8d;
}
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
</style>