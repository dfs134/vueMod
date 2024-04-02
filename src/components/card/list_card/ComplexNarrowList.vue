<template>
    <div class="contain text-start">
      <router-link to="" v-for="{TextList}, index of content" :key="index">
        <div class="row">
          <div class="col">
            <h5>
              {{TextList}}
            </h5>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
    name:"ComplexNarrowList",
    props:{
        content:{
            type:Array,
            required: true,
            TextList:String,
        }
    }
}
</script>

<style scoped>
  .row{
    margin: 10px 0;
    width: 300px;
  }
  .col{
    background-color: #eee;
    border: 2px solid #999999;
    border-radius: 50px;
    width: 30% !important;
    height: 100px;
  }
  .col h5{
    margin: 0;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-size: 40px;
    font-weight: 400;
    padding: 10px;
    overflow: hidden;
  }

</style>