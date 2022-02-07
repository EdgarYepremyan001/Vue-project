import axios from "axios";
export default {
  namespaced:true,

  state:{
    posts:[],
    post:[],
  },
  mutations:{
    storePosts:(state,data) => {
      state.posts = data
    },
    storePost:(state,data) => {
      state.post = data
    }
  },
  getters:{
    getPosts: state => state.posts,
    getPost: state => state.post,
  },
  actions:{
    getAPIPosts(context){
      axios.get("http://127.0.0.1:8000/api/posts/").then(response => {
        context.commit('storePosts',response.data);
      })
    },

    getAPIPost(context,id){
      axios.get(`http://127.0.0.1:8000/api/posts/${id}`).then(response => {
        context.commit('storePost',response.data);
      })
    }
  }
}
