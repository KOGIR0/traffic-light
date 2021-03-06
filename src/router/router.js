import Vue from 'vue'
import Router from 'vue-router'
import Red from '@/components/Red'
import Green from '@/components/Green'
import Yellow from '@/components/Yellow'
import store from '../store/store'
import { yellowColorTime, greenColorTime, redColorTime, up, down} from '../constants'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/red',
            component: Red,
            beforeEnter: (to, from, next) => {
                // red is on the top, so start moving down
                store.commit('setDirection', down);
                // if we changed from one color to another, reset timer
                if(store.state.previousRoute !== to.path)
                {
                    store.commit('setTimeLeft', redColorTime);
                }
                store.commit('setPreviousRoute', to.path);
                next();
            }
        },
        {
            path: '/yellow',
            component: Yellow,
            beforeEnter: (to, from, next) => {
                if(store.state.previousRoute !== to.path)
                {
                    store.commit('setTimeLeft', yellowColorTime);
                }
                store.commit('setPreviousRoute', to.path);
                next();
            }
        },
        {
            path: '/green',
            component: Green,
            beforeEnter: (to, from, next) => {
                // green is at the bottom, so change direction
                store.commit('setDirection', up);
                if(store.state.previousRoute !== to.path)
                {
                    store.commit('setTimeLeft', greenColorTime);
                }
                store.commit('setPreviousRoute', to.path);
                next();
            }
        },
        {
            path: "*",
            component: {
                template: '<h1>Page Not Found</h1>'
            }
        }
    ]
})
