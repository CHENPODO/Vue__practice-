<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
	<div>
		<nav><RouterLink to="/" class="title">Vue3練習</RouterLink></nav>
		<router-view />
	</div>
</template>

<style scoped>
.title {
	font-weight: 700;
	font-size: x-large;
	color: white;
}

nav {
	padding: 20px;
	background-color: #424242;
	margin-bottom: 20px;
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
