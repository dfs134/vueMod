<template>
  <div class="contain">
    <div v-for="(item, index) in Cu" :key="index" class="cu-card">
      <div class="reletive" tabindex="1">
        <img
          :src="require(`@/img/dm09/cu/menu_list/${item.img}.png`)"
          class="menu-img"
          alt=""
        />
        <img class="cart" src="@/img/dm09/cu/menu_list/쇼핑카트.png" />
      </div>
      <div>
        <div class="Goods-name">
          <h3>{{ item.imgName }}</h3>
        </div>
        <div class="price-wrap">
          <h3>{{ item.price }}<small>원</small></h3>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArgonAvatar",
  props: {
    Cu: {
      type: Array,
      img: String,
      imgName: String,
      price: String,
      number: Number,
    },
  },
};
</script>

<style scoped>
.cu-card {
  width: 304px;
  /* margin-left: 56px; */
  margin-left: 0;
  margin-right: 53px;
  margin-bottom: 70px;
}
.reletive {
  position: relative;
}
.cart {
  background-color: #aace37;
  padding: 12px;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  left: 220px;
}
.Goods-name h3 {
  margin-top: 19px;
  font-size: 25px;
  font-weight: 400;
  color: #666666;
}
.price-wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
.price-wrap h3 {
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 0;
  padding-top: 5px;
  color: #000;
}
.price-wrap h3 small {
  font-weight: 400;
  font-size: 30px;
  font-size: 20px;
}
.price-wrap .price-change {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bbb;
  width: 135px;
}
.price-wrap .price-change h5 {
  margin: 0;
  padding-top: 5px;
  font-size: 25px;
  font-weight: 400;
  color: #333;
}
.price-wrap .price-change button {
  font-size: 25px;
  padding: 5px 10px 0 10px;
  border: none;
  background: none;
}

.reletive:focus img.menu-img {
  outline: 5px solid yellow;
}
.price-change button:focus {
  outline: 5px solid yellow;
}
</style>