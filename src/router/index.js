import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "../views/Inicio.vue";
import NotFound from "../views/NotFound.vue";
import SobreMi from "../views/SobreMi.vue";
import Contacto from "../views/Contacto.vue";
import Post from "../views/Post.vue";
import Articulo from "../views/Articulo.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: NotFound,
    },
    {
      path: "/",
      component: Inicio,
    },
    {
      path: "",
      component: Inicio,
    },
    {
      path: "/inicio",
      component: Inicio,
    },
    {
      path: "/sobremi",
      component: SobreMi,
    },
    {
      path: "/contacto",
      component: Contacto,
    },
    {
      path: '/post/:entrada' , 
      component: Post , 
      children: [
        {
          path: '/' , 
          component: Articulo, 
          name: 'articulo'
        },
      ]
    },
  ],
});

export default router;
