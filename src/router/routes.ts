import {RouteRecordRaw} from "vue-router";

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import("@/components/Login.vue")
    },
    {
        path: '/register',
        component: () => import("@/components/Register.vue")
    },
    {
        path: '/home',
        component: () => import("@/components/Home.vue"),
        children: [
            {
                path: 'about',
                component: () => import("@/views/About.vue")
            },
            {
                path: 'info',
                component: () => import("@/views/Info.vue")
            }
        ]
    }
]

export default routes