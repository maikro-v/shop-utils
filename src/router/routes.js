import { routes } from '@/app.js'

// 基础路由
const baseRoutes = [
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404.vue"),
        meta: {
            title: "404"
        }
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

export default [...routes(), ...baseRoutes];
