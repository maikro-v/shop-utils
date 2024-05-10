import DefaultLayout from "@/layout/default.vue";

// 路由信息
export function routes() {
    return [
        {
            path: "/",
            name: "root",
            component: DefaultLayout,
            redirect: { name: "Index" },
            children: [
                {
                    path: "index",
                    name: "Index",
                    component: () => import("@/views/index/index.vue"),
                    meta: {
                        title: "首页"
                    }
                },
                {
                    path: "join-words",
                    name: "JoinWords",
                    component: () => import("@/views/join-words/index.vue"),
                    meta: {
                        title: "组词"
                    }
                }
            ]
        },
    ]
}
