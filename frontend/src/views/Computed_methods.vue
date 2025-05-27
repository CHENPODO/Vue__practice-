<script setup>
import { computed, reactive, ref } from "vue"

const myName = reactive({ firstName: "Chen", lastName: "Po" })
const count = ref(0)

// method
const getFullName = () => {
	console.log("方法被呼叫")
	return myName.firstName + " " + myName.lastName
}

// computed
const fullNameComputed = computed(() => {
	console.log("computed 被呼叫")
	return myName.firstName + " " + myName.lastName
})

const handleClicked = () => {
	count.value++
}
</script>

<template>
	<h1 class="label">比較 computed vs method</h1>
	<div class="important_msg">
		<p class="text-p">computed 本質上有快取機制，只有依賴變化時才會重新執行</p>
	</div>
	<div class="box">
		<div class="box1">
			<div>computed: {{ fullNameComputed }}</div>
		</div>
		<div class="box2">
			<div>method: {{ getFullName() }}</div>
		</div>
		<button class="bookBtn" @click="handleClicked">點我：{{ count }}</button>
	</div>
</template>

<style>
.important_msg {
	margin: 0 auto;
	background-color: #fa0;
	width: fit-content;
	padding: 5px;
}
.box1 {
	padding: 5px;
	background-color: #fff;
	color: black;
}
.box2 {
	padding: 5px;
	background-color: #fff;
	margin-top: 8px;
	color: black;
}
</style>
