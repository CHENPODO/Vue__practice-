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
.box {
	width: 400px;
	padding: 20px;
	margin: 10px auto;
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
