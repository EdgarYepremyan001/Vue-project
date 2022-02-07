<template>
  <div>
    <b-container>
      <b-form @submit.prevent="createUser" >
        <b-form-group
          id="name"
          label="First Name:"
          label-for="name"
        >
          <b-form-input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter First Name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="email"
          label="E-mail:"
          label-for="email">
          <b-form-input
            id="email"
            v-model="form.email"
            type="text"
            placeholder="Enter E-mail"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="password"
          label="Password:"
          label-for="password">
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="******************"
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
  name: "NewUser",
  data(){
    return {
      form: {
        name: '',
        email:'',
        password:'',

      }
    }
  },
  methods:{
    createUser(){
      this.axios.post("http://127.0.0.1:8000/api/admin/new",this.form).then(response => {
        alert(response.data.msg);
        this.$router.push('/admin');
      })
    }
  }
}
</script>

<style scoped>

</style>
