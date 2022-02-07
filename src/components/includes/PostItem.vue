<template>
  <div class="post-item">
    <h2> {{ post.title }} </h2>
    <p> {{ post.description }} </p>
    <router-link :to="{name:'ShowPost',params:{id: post.id}}" class="btn btn-success">View</router-link>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  data(){
    return {

    }
  },
  props:{
    post:{
      type:Object,
    }
  }
}
</script>

<style scoped>

</style>
