<script setup>
import { computed, reactive, ref, watch } from "vue"

const myName = reactive({ firstName: "Chen", lastName: "Po" })
const count = ref(0)

// method
const getFullName = () => {
	// console.log("方法被呼叫")
	return myName.firstName + " " + myName.lastName
}

// computed
const fullNameComputed = computed(() => {
	// console.log("computed 被呼叫")
	return myName.firstName + " " + myName.lastName
})

const handleClicked = () => {
	count.value++
}

// 計算屬性跟監聽方法區別
const sKill = ref(["React", "Ruby", "Python", "HTML"])
// const countSki = computed(() => sKill.value.length)
const countSki = ref(sKill.value.length)
const constVal = computed(countSki.value)

const addSkill = () => {
	setTimeout(() => {
		console.log("延遲一秒")
		sKill.value.push("Vue3") // 改變資料
	}, 1000)
}

watch(
	() => sKill.value.length,
	(newLength, oldLength) => {
		console.log(`技能數量由 ${oldLength} 變成 ${newLength}`)
		countSki.value = newLength // 監聽變化並同步更新 countSki
	}
)
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
	<div class="box">
		<h3 class="text-title">computed跟watch差別</h3>
		<ul>
			<li v-for="skill in sKill">{{ skill }}</li>
		</ul>
		<h3>共有{{ countSki }}本</h3>
		<!-- <button @click="sKill.push('vue3')">新增技能</button> -->
		<button @click="addSkill">新增技能</button>
	</div>
</template>

<style>
.text-title {
	margin: 10px auto;
	font-weight: 700;
	font-size: 20px;
	background-color: #688ba1;
	color: whitesmoke;
	padding: 10px;
	width: fit-content;
	border-radius: 5px;
}
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
