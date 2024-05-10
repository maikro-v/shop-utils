import { createRouter, createWebHashHistory } from 'vue-router'
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (to?.meta?.title) {
    document.title = to?.meta?.title
  }
})

export default router
