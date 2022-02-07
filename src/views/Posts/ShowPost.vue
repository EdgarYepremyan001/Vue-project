<template>
  <div>
    <b-container>
      <h2> {{ post.title }} </h2>
      <p> {{ post.description }} </p>


      <b-button
        @click="deletePost(post.id)"
        variant="danger">Delete</b-button>
      <router-link
        :to="{
        name: 'EditPost',
        params:{
          id:post.id
        }
      }" class="btn btn-success">Edit</router-link>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ShowPost",
  mounted(){
    this.$store.dispatch('Posts/getAPIPost',this.$route.params.id);
  },
  computed:{
    user(){
      return this.$store.getters['Posts/getPost'];
    }
  },
  methods:{
    deletePost(id){
      this.axios.delete(`http://127.0.0.1:8000/api/posts/${id}`,).then(response => {
        alert(response.data.msg);
        this.$router.push('/posts');
      })
    }
  }
}
</script>

<style scoped>

</style>
