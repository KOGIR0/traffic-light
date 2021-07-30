import Vue from 'vue'
import Router from 'vue-router'
import Red from '@/components/Red'
import Green from '@/components/Green'
import Yellow from '@/components/Yellow'
import TrafficLight from '@/components/TrafficLight'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
        path: '/red',
        component: Red
        },
        {
            path: '/yellow',
            component: Yellow
        },
        {
            path: '/green',
            component: Green
        }
    ]
})
