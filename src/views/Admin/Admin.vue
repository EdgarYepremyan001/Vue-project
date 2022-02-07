<template>
  <div>
    <b-container>
      <div v-for="user in users">
        <p>{{user.name}}</p>
        <p>{{user.email}}</p>
        <b-button
          @click="deleteUser(user.id)"
          variant="danger">Delete</b-button>
        <router-link
          class="btn btn-primary"
          :to="{name: 'EditUser'}"
        ></router-link>
        <router-link
          class="btn btn-primary"
          :to="{name: 'NewUser'}"
        ></router-link>
        <router-link
          class="btn btn-primary"
          :to="{name:'Post'}"></router-link>
      </div>

    </b-container>
  </div>
</template>

<script>
export default {
  name: "Admin",
  mounted(){
    this.$store.dispatch('Users/getAPIUsers');
  },
  computed: {
    users(){
      return this.$store.getters['Users/getUsers'];
    }
  },
  methods:{
    deleteUser(id){
      this.axios.delete(`http://127.0.0.1:8000/api/admin/${id}`,).then(response => {
        this.$swal(response.data.msg);
        this.$router.push('/admin');
      })
    }
  }
}

</script>

<style scoped>

</style>
