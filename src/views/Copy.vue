<!-- 每晚練習用 -->
<script setup>
import { ref } from "vue"

// 基礎版
const bookList = ["原子習慣", "蛤蟆先生去看心理師", "別對每件事都有反應", "持續買進"]
const bookIndex = 0
const bookState = false
// 進階版 顯示一本 or 多本 and 下一本
const bookList_Updated = ["原子習慣", "蛤蟆先生去看心理師", "別對每件事都有反應", "持續買進"]
const isSingleShowBook = ref(false)
const bookIndex_Updated = ref(0)
const toggleAllBtn = () => {
	isSingleShowBook.value = !isSingleShowBook.value
}
const nextBook = () => {
	bookIndex_Updated.value = (bookIndex_Updated.value + 1) % bookList.length
}
</script>

<template>
	<h1 class="label">每日練習區</h1>

	<!-- 練習 if if-else-if if-else -->
	<div class="box">
		<!--基礎版 -->
		<p class="text-p">if if-else-if if-else</p>
		<p class="text-list" v-if="bookList.length === 0">暫無書籍</p>
		<p class="text-list" v-else-if="bookState">{{ bookList[bookIndex] }}</p>
		<ul v-else>
			<li class="text-list" v-for="(book, index) in bookList">{{ index + 1 }}.{{ book }}</li>
		</ul>
	</div>
	<div class="box">
		<!-- 進階版 顯示一本 or 多本 and 下一本 -->
		<p class="text-p">進階版 顯示一本 or 多本 and 下一本</p>
		<button class="bookListBtn" type="button" @click="toggleAllBtn">{{ isSingleShowBook ? "全部顯示" : "顯示一本" }}</button>
		<button type="button" class="bookListBtn" @click="nextBook" :disabled="!isSingleShowBook">下一本:{{ bookIndex_Updated + 1 }}</button>
		<p v-if="bookList_Updated.length === 0">暫無書籍</p>
		<p class="text-list" v-else-if="isSingleShowBook">{{ bookList_Updated[bookIndex_Updated] }}</p>
		<ul v-else>
			<li class="text-list" v-for="(book, index) in bookList_Updated" :key="index">{{ index + 1 }}.{{ book }}</li>
		</ul>
	</div>
</template>

<style scoped>
/* 基礎版 */
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
	background-color: #c8d5f4;
	width: 400px;
	margin: 10px auto;
	padding: 5px;
	border-radius: 8px;
}
.text-p {
	margin: 10px auto;
	font-weight: 700;
	font-size: 20px;
	background-color: #688ba1;
	color: whitesmoke;
	padding: 10px;
	width: fit-content;
	border-radius: 5px;
}
.text-list {
	font-weight: 700;
	list-style: none;
}
.bookListBtn {
	margin-left: 30px;
	padding: 10px 5px;
	background-color: #688ba1;
	color: whitesmoke;
	font-weight: 700;
	border: none;
	border-radius: 3px;
}
.bookListBtn:hover {
	padding: 10px 5px;
	background-color: #597789;
	cursor: pointer;
}
.bookListBtn:disabled {
	background-color: #a0a0a0;
	color: #dddddd;
	cursor: not-allowed;
}
</style>
