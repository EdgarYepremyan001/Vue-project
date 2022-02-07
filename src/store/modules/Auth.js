export default {
  namespaced:true,
  state:{
    users: localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')) : [],
  },
  mutations:{
    storeUser:(state,data)=>{
      state.user = data;
    }
  },
  getters:{
    getUsers: state => state.user,
  },
  actions:{
    getAPILogin(context,data){
      let user = context.state.user;
      axios.post("http://127.0.0.1:8000/api/users/login",data).then(response => {
        user = response.data.user;
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("access_token",response.data.access_token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
        context.commit("storeUser");
        this.$router.push("/posts");


      })

    }
  }
}
