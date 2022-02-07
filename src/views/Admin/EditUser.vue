<template>
  <div>
    <b-container>
      <h1>Edit {{user.name}}</h1>
      <b-form @submit.prevent="updateUser" >
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
  name: "EditUser",
  data(){
    return {
      form:{
        name: '',
        email: '',
        password: '',
      }
    }
  },
  mounted(){
    this.$store.dispatch('Users/getAPIUser',this.$route.params.id);
  },
  computed:{
    user(){
      this.form.name = this.$store.getters['Users/getUser']['name'];
      this.form.email = this.$store.getters['Users/getUser']['email'];
      this.form.password = this.$store.getters['Users/getUser']['password'];
      return this.$store.getters['Users/getUser'];
    }
  },
  methods:{
    updateUser(){
      this.axios.post(`http://127.0.0.1:8000/api/admin/${this.$route.params.id}`,{_method:'put',...this.form}).then(response => {
        alert(response.data.msg);
        this.$router.push(`/admin`);
      })
    }
  }



}
</script>

<style scoped>

</style>
