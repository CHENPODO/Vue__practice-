<script setup>
import { ref } from "vue"

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
</template>

<style scoped>
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
</style>
