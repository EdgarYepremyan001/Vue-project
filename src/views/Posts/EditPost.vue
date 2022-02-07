<template>
  <div>
    <b-container>
      <h1>Edit {{post.title}}</h1>
      <b-form @submit.prevent="newPost" >
        <b-form-group
          id="title"
          label="Title:"
          label-for="title"
        >
          <b-form-input
            id="title"
            v-model="form.title"
            type="text"
            placeholder="Enter new title"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="description"
          label="Description :"
          label-for="description">
          <b-form-input
            id="description"
            v-model="form.description"
            type="text"
            placeholder="Enter description"
            required
          ></b-form-input>

        </b-form-group>

        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-container>
  </div>
</template>


<script>
export default {
  name: "EditPost",
  data(){
    return {
      form:{
        title:'',
        description:'',
      }
    }
  },
  mounted(){
    this.$store.dispatch('Posts/getAPIPost',this.$route.params.id);
  },
  computed:{
    post(){
      this.form.title = this.$store.getters['Posts/getPost']['title'];
      this.form.description = this.$store.getters['Posts/getPost']['description'];
      return this.$store.getters['Posts/getPost'];
    }
  },
  methods:{
    newPost(){
      this.axios.post(`http://127.0.0.1:8000/api/posts/${this.$route.params.id}`,{_method:'put',...this.form}).then(response => {
        alert(response.data.msg);
        this.$router.push(`/posts/${this.$route.params.id}`);
      })
    }
  }



}
</script>

<style scoped>

</style>
