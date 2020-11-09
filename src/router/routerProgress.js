import NProgress from 'nprogress' // Progress 进度条
import '@/assets/nprogress.css' // Progress 进度条样式
export default function AddNProgressToRouter (router) {
  router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })

  router.afterEach(() => {
    NProgress.done() // 结束Progress
  })
}
