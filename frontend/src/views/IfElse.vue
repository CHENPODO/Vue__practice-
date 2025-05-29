<script setup>
import { computed, ref, watch } from "vue"

const books = ["原子習慣", "最高自律力", "拖延心理學", "逆習慣"]
const showSingle = ref(false)
const showIndex = ref(0) //顯示第幾本書
const showIndex_1 = 0
const showSingle_1 = false
const books_2 = ["原子習慣", "最高自律力", "拖延心理學", "逆習慣"]

const toggleMode = () => {
	showSingle.value = !showSingle.value
}

const nextBook = () => {
	showIndex.value = (showIndex.value + 1) % books_2.length
}
// :href
const YtLink = "https://www.youtube.com/"
const openAns = ref(false)
const openAnswer = () => {
	openAns.value = !openAns.value
}
const countDown = ref(5)
const timer = ref(null)

// computed 計算屬性
const label = computed(() => {
	return openAns.value ? `隱藏答案 ${countDown.value}` : "顯示答案"
})
//倒數計時
const startTimer = () => {
	countDown.value = 5
	clearInterval(timer.value)

	timer.value = setInterval(() => {
		countDown.value -= 1
		if (countDown.value === 0) {
			openAns.value = false
			clearInterval(timer.value)
			countDown.value = null
		}
	}, 1000)
}
// watch
watch(openAns, (newVal, oldVal) => {
	// 當來源值變動時要執行的邏輯
	if (newVal) {
		startTimer()
	} else {
		clearInterval(timer.value)
		timer.value = null
	}
})
</script>

<template>
	<h1 class="label">V指令</h1>
	<div class="box">
		<h2>基本</h2>
		<p>v-if v-else-if v-else</p>
		<p v-if="books.length === 0">暫無書籍</p>
		<h2 v-else-if="showSingle_1">{{ books[showIndex_1] }}</h2>
		<ul v-else>
			<li v-for="(book, index) in books">{{ index + 1 }}. {{ book }}</li>
		</ul>
	</div>
	<!-- 顯示單本、多本 -->
	<div class="box">
		<h2>微進階</h2>
		<p>v-if v-else-if v-else @click</p>
		<button @click="toggleMode" class="bookBtn">{{ showSingle ? "顯示全部" : "顯示一本" }}</button>
		<!-- 如果是單本顯示，出現下一本的按鈕 -->
		<button @click="nextBook" class="bookBtn" :disabled="!showSingle">下一本(目前為{{ showIndex + 1 }}本)</button>
		<!-- 沒有書籍的情況 -->
		<p v-if="books_2.length === 0">暫無書籍</p>
		<!-- 顯示一本書 -->
		<p v-else-if="showSingle">{{ books_2[showIndex] }}</p>
		<!-- 顯示全部書籍 -->
		<ul v-else>
			<li v-for="(book, index) in books_2" :key="index">{{ index + 1 }}.{{ book }}</li>
		</ul>
	</div>
	<!-- v-href -->
	<div class="box">
		<h2>v-href</h2>
		<a class="btn" :href="YtLink" target="_blank">youtube</a>
	</div>
	<!-- show -->
	<div class="box">
		<p>v-show ， HTML 標籤會渲染出來(style:none)</p>
		<p v-show="books.length === 0">暫無書籍</p>
		<ul v-show="books.length > 0">
			<li v-for="(book, index) in books">{{ index + 1 }}. {{ book }}</li>
		</ul>
	</div>
	<div class="box">
		<p>事件響應</p>
		<p>問:vue是一種甚麼框架?</p>
		<p v-show="openAns">答:Vue是一套用於構建用戶介面的漸進式框架</p>
		<button @click="openAnswer" class="bookBtn">{{ label }}</button>
	</div>
</template>

<style>
.label {
	margin-left: 20px;
	font-size: 24px;
	font-weight: bold;
	position: relative;
	color: #516b7e;
	margin-bottom: 12px;
}
.label::after {
	content: "";
	position: absolute;
	left: -7px;
	top: 5px;
	height: 23px;
	width: 3px;
	border-radius: 2px;
	background-color: #516b7e;
	border: #5d7d94 1px solid;
}
.box {
	width: 400px;
	background-color: black;
	color: white;
	font-weight: 700;
	padding: 20px;
	margin: 10px auto;
}
.bookBtn {
	margin: 5px;
	padding: 8px;
	background-color: #fff;
	font-weight: 700;
	border: none;
	color: black;
}
.bookBtn:disabled {
	background-color: #a0a0a0;
	color: #dddddd;
	cursor: not-allowed;
}
.btn {
	flex: 0 0 auto;
	padding: 10px 20px;
	background-color: #5d7d94;
	color: white;
	border-radius: 8px;
	text-decoration: none;
	text-align: center;
	display: inline-block;
	transition: 0.3s;
}

.btn:hover {
	background-color: #879faa;
	transform: translateX(-10px);
}
</style>
