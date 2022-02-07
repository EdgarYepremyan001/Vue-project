<template>
  <div>
    <b-container>
      <router-link
        class="btn btn-primary"
        :to="{name:'NewPost'}">New Post</router-link>
      <h1>Posts List</h1>
      <div class="post-list" v-for="post in posts">
        <post-item
          :post="post
        "></post-item>
      </div>
    </b-container>
  </div>
</template>

<script>
import PostItem from "../../components/includes/PostItem";
export default {
  name: "Post",
  components:{
    PostItem,
  },
  mounted(){
    this.$store.dispatch('Posts/getAPIPosts');
  },
  computed: {
    posts(){
      return this.$store.getters['Posts/getPosts'];
    }
  }
}

</script>

<style scoped>

</style>
