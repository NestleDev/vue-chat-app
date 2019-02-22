import VueRouter from 'vue-router'
import Login from './pages/login'
import Chat from './pages/chat'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Login,
        },
        {
            path: '/chat',
            component: Chat,
        }
    ],
    mode: 'history'
})