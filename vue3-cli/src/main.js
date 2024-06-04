//뷰 라이브러리를 들고옴
import { createApp } from 'vue' //package.json에 선언된 dependency에 설정된 name
//뷰 파일을 들고옴
//.vue -> vue single file component
import App from './App.vue'

//이 것과 동일함
//const { createApp } = Vue;
//Vue.createApp();

createApp(App).mount('#app')
