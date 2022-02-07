<template>
  <div>
    <b-container>
      <div v-for="post in posts">
        <p>{{post.title}}</p>
        <p>{{post.description}}</p>
        <b-button
          @click="deletePost(post.id)"
          variant="danger">Delete</b-button>
        <router-link
          class="btn btn-primary"
          :to="{name: 'EditPost'}"
        ></router-link>
        <router-link
          class="btn btn-primary"
          :to="{name: 'NewPostM'}"
        ></router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Moderator",
  mounted(){
    this.$store.dispatch('Posts/getAPIPosts');
  },
  computed: {
    posts(){
      return this.$store.getters['Posts/getPosts'];
    }
  },
  methods:{
    deletePost(id){
      this.axios.delete(`http://127.0.0.1:8000/api/moderator/${id}`,).then(response => {
        alert(response.data.msg);
        this.$router.push('/moderator');
      })
    }
  }
}

</script>


<style scoped>

</style>
