import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home.vue"
import BMI from "@/views/BMI.vue"
import TodoSimple from "@/views/TodoSimple.vue"
import IfElse from "@/views/IfElse.vue"
import Copy from "@/views/Copy.vue"
import Computed_methods from "@/views/Computed_methods.vue"
import Brand from "@/views/Brand.vue"

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
	{
		path: "/if-else",
		name: "IfElse",
		component: IfElse,
	},
	{
		path: "/computed_methods",
		name: "Computed_methods",
		component: Computed_methods,
	},
	{
		path: "/brand",
		name: "Brand",
		component: Brand,
	},
	{
		path: "/copy",
		name: "Copy",
		component: Copy,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
