<script setup>
import { ref } from "vue"

const playList = ref(["Tell Me Why", "讓我上岸", "MBTI", "Shape of You", "Blinding Lights"])
const searchTerm = ref("")
const filterSong = ref(playList.value)

const todos = ["項目1", "項目2", "項目3"]

const list = [
	{
		content: "上岸了嗎",
		complete: false,
	},
	{
		content: "11點上班",
		complete: true,
	},
	{
		content: "回復訊息",
		complete: false,
	},
]

const search = () => {
	const keyWord = searchTerm.value.toLowerCase()
	if (!keyWord) {
		filterSong.value = playList.value
	} else {
		filterSong.value = playList.value.filter((song) => song.toLowerCase().includes(keyWord))
	}
}
</script>
<template>
	<h1 class="label">搜尋歌曲</h1>
	<div class="box">
		<div class="inner-box">
			<input class="inputKeyWord" type="text" v-model="searchTerm" placeholder="請輸入關鍵字" />
			<button @click="search">搜尋</button>
			<ul>
				<li v-for="(song, index) in filterSong" :key="index">{{ song }}</li>
			</ul>
		</div>
	</div>
	<div class="mb">
		<p>v-for 「渲染」和「索引」的使用</p>
		<ul>
			<li v-for="(todo, index) in todos">{{ index + 1 }}.{{ todo }}</li>
		</ul>
	</div>
	<div class="mb">
		<p>遍歷數組</p>
		<li v-for="todo in list">
			<input type="checkbox" :checked="todo.complete" />
			{{ todo.content }}
		</li>
	</div>
</template>
<style scoped>
.mb {
	margin: 20px auto;
	width: 400px;
	padding: 20px;
	background-color: #aac4e2;
}
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
	padding: 20px;
	margin: 30px auto;
	background-color: rgb(203, 237, 226);
}
.inputKeyWord {
	width: 300px;
}
.inner-box {
	padding: 10px;
	background-color: #ffffffbe;
	border-radius: 5px;
}
button {
	padding: 5px;
	margin-left: 5px;
	border: none;
	background-color: rgb(203, 237, 226);
}
</style>
