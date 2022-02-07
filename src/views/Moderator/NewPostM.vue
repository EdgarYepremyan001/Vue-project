<template>
  <div>
    <b-container>
      <h1>Edit {{post.title}}</h1>
      <b-form @submit.prevent="createUser" >

        <b-form-group
          id="user_id"
          label="User_id:"
          label-for="user_id"
        >
          <b-form-input
            id="user_id"
            v-model="form.user_id"
            type="text"
            placeholder="Enter user_id"
            required
          ></b-form-input>
        </b-form-group>

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
  name: "NewPostM",
  date(){
    return {
      form:{
        user_id:'',
        title:'',
        description:'',
      }
    }
  },
  methods:{
    createUser(){
      axios.post("http://127.0.0.1:8000/api/moderator/new",this.form).then(response => {
        alert(response.data.msg);
        this.$router.push("/moderator");
      })
    }
  }
}
</script>

<style scoped>

</style>
