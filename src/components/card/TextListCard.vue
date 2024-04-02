<template>
    <div class="container text-start">
      <router-link to="" v-for="{TextList}, index of content" :key="index">
        <div class="row">
          <div class="col">
            <h5>
              {{TextList}}
            </h5>
          </div>
        </div>
      </router-link>
      <div class="subContents">
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusantium nemo dignissimos, sapiente non pariatur, omnis debitis qui necessitatibus minima repellat voluptate sit iure animi optio officiis possimus corrupti aut.</h6>
        <img src="../../img/병원2.jpg" alt="">
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusantium nemo dignissimos, sapiente non pariatur</h6>
      </div>
    </div>
</template>

<script>
export default {
    name:"TextListCard",
    props:{
        content:{
            type:String,
            TextList:String,
        }
    }
}
</script>

<style scoped>
    .top-text{
        font-size: 1.7rem;
        color: black;
        font-weight: bold;
        margin:30px 20px 40px;
    }
    .col{
        background-color: #eee;
        border: 1px solid rgb(187, 187, 239);
        box-shadow: 10px 15px 22px 0px rgb(0 0 0 / 50%);
        padding: 20px 10px;
        border-radius: 10px;
        width: 30% !important;
        margin: 10px;
    }
    .container .subContents{
        background-color: #fff;
        padding: 50px 70px;
        border-radius: 20px;
    }
    .container .subContents img{
        width: 100%;
        height: 300px;
    }
</style>