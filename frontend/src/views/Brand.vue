<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"

const brands = ref([])

onMounted(async () => {
	const res = await axios.get("http://localhost:3000/brands")
	brands.value = res.data
})
</script>

<template>
	<div class="container">
		<h1 class="title">品牌管理</h1>
		<div class="inner">
			<button class="addBtn">＋ 新增</button>
			<div>
				<table class="brand-table">
					<thead>
						<tr>
							<th>ID</th>
							<th>品牌名稱</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="brand in brands" :key="brand.id">
							<td>{{ brand.id }}</td>
							<td>{{ brand.name }}</td>
							<td>
								<button>編輯</button>
								<button>刪除</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<style scoped>
.title {
	text-align: center;
	font-size: 2rem;
	margin: 20px 0;
	color: #333;
}

.container {
	width: 1000px;
	margin: 0 auto;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.inner {
	padding: 5px;
	margin-left: 5px;
}
.addBtn {
	padding: 8px 15px;
	border: none;
	font-weight: 700;
	color: whitesmoke;
	border-radius: 5px;
	margin-bottom: 10px;
	background-color: #3498db;
}
.brand-table {
	width: 100%;
	border-collapse: collapse;
}
.brand-table tr,
.brand-table td {
	padding: 10px;
	border: 1px solid #a9a9a9;
}
.brand-table th {
	background-color: #f5f5f5;
	color: #333;
}
</style>
