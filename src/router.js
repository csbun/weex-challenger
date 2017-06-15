// import Vue from 'vue';
import Router from 'vue-router';
import FooView from './foo.vue';
import BarView from './bar.vue';

Vue.use(Router);

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/foo', component: FooView },
    { path: '/bar/:id', component: BarView },
  ],
});
