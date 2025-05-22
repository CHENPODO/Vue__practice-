<script setup>
import { ref } from "vue"

const playList = ref(["Tell Me Why", "讓我上岸", "MBTI", "Shape of You", "Blinding Lights"])
const searchTerm = ref("")
const filterSong = ref(playList.value)
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
			<input type="text" v-model="searchTerm" placeholder="請輸入關鍵字" />
			<button @click="search">搜尋</button>
			<ul>
				<li v-for="(song, index) in filterSong" :key="index">{{ song }}</li>
			</ul>
		</div>
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
	padding: 20px;
	margin: 30px auto;
	background-color: rgb(203, 237, 226);
}
input {
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
