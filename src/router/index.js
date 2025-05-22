import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home.vue"
import BMI from "@/views/BMI.vue"
import TodoSimple from "@/views/TodoSimple.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/bmi",
		name: "BMI",
		component: BMI,
	},
	{
		path: "/todo-simple",
		name: "TodoSimple",
		component: TodoSimple,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
