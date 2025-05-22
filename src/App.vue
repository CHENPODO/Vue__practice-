<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
	<div>
		<nav>
			<RouterLink class="bottom-line" to="/">Home</RouterLink>
			<RouterLink class="bottom-line" to="/bmi">BMI</RouterLink>
			<RouterLink class="bottom-line" to="/todo-simple">todosimple</RouterLink>
		</nav>
		<router-view />
	</div>
</template>

<style>
nav {
	padding: 20px;
	box-shadow: 0px 0px 3px;
}
.bottom-line {
	position: relative;
	overflow: hidden;
}

.bottom-line::after {
	content: " ";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0%;
	height: 2px;
	background-color: #424242;
	transition: width 0.5s ease-in-out;
}
.bottom-line:hover::after {
	width: 95%;
}
</style>
