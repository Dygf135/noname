import Vue from 'vue'
import VueRouter from 'vue-router'
import FileViewer from './components/FileViewer.vue'
import EpubViewer from './components/EpubViewer.vue'
import VideoViewer from './components/VideoViewer.vue'

Vue.use(VueRouter)
const router = new VueRouter({
	routes: [
		{ path: '/~epubviewer', component: EpubViewer },
		{ path: '/~videoviewer', component: VideoViewer },
		{ path: '/:path(.*)', component: FileViewer }
	],
	mode: 'history'
})

export default router
