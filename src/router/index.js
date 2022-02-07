import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewPostM from "../views/Moderator/NewPostM";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Post from "../views/Posts/Post";
import NewPost from "../views/Posts/NewPost";
import ShowPost from "../views/Posts/ShowPost";
import EditPost from "../views/Posts/EditPost";
import Admin from "../views/Admin/Admin";
import NewUser from "../views/Admin/NewUser";
import EditUser from "../views/Admin/EditUser";
import Moderator from "../views/Moderator/Moderator";
import admin from "../middleware/admin";
import moderator from "../middleware/moderator";

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path: '/login',name: 'Login',component: Login},
    {path: '/register',name: 'Register',component: Register},
    {path: '/posts',name: 'Post',component: Post},
    {path: '/posts/new',name: 'NewPost',component: NewPost},
    {path: '/posts/:id',name: 'ShowPost',component: ShowPost},
    {path: '/posts/:id/edit',name: 'EditPost',component: EditPost},
    {path: '/admin',name: 'Admin',component: Admin,meta:{middleware:admin}},
    {path: '/admin/new',name: 'NewUser',component: NewUser,meta:{middleware:admin}},
    {path: '/admin/:id/edit',name: 'EditUser',component: EditUser,meta:{middleware:admin}},
    {path: '/moderator',name: 'Moderator',component: Moderator,meta:{middleware:moderator}},
    {path: '/moderator/new',name: 'NewPostM',component: NewPostM,meta:{middleware:moderator}},
  ]
})

