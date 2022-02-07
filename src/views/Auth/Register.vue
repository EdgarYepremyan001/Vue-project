<template>
  <div>
    <b-container>
      <b-form @submit.prevent="register">
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
            type="email"
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

        <b-button type="submit" variant="primary">Register</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      form:{
        name:'',
        email:'',
        password:'',
      }
    }
  },
  methods:{
    register(){
      axios.post("/api/users/register", this.form).then(response => {
        alert(response.data.msg);
        this.$router.push("/posts");
      })
    }
  }
}
</script>

<style scoped>

</style>
