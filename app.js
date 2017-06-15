import App from './src/app.vue';
import router from './src/router';

export default new Vue(Vue.util.extend({ el: '#root', router }, App));

router.push('/foo');
