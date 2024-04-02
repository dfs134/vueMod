<template>
    <div class="container text-center">
      <div class="row row-cols-3">
        <router-link to="" v-for="text in TextData" :key="text" class="col">
          <div>      
            <h5>
              {{text.top}}
            </h5>
            <p>
              {{text.bottom}}
            </p>
          </div>
      </router-link>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TextCard',
    props:{
        TextData:[
            
        ]
    }
}
</script>