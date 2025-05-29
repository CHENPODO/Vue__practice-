<template>
	<div class="container">
		<h3>1.Translate(x,y)</h3>
		<ul>
			<li>x , y || 水平 , 垂直</li>
		</ul>

		<div>
			<p class="text-p">滑動效果</p>
			<div class="square"></div>
			<div>
				<p class="text-p">下拉選單</p>
				<div class="nav-wrapper">
					<div class="nav-item">
						<div class="nav-title">選單一</div>
						<div class="dropdown">
							<a href="#" target="_blank">子選項 1</a>
							<a href="#" target="_blank">子選項 2</a>
							<a href="#" target="_blank">子選項 3</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.nav-color {
	background-color: #cacaca;
}
.container {
	padding: 5px;
	margin: 0 auto;
	width: 1000px;
	display: flex;
	flex-wrap: wrap;
}
.square {
	width: 100px;
	height: 100px;
	background-color: #fa0;
	transition: 0.8s ease-in-out;
}
.square:hover {
	transform: translateX(50px);
}
.text-p {
	font-weight: 700;
	background-color: #a8c6e0;
	width: fit-content;
	padding: 5px;
}
.header {
	background-color: #a8c6e0;
	padding: 3px;
}
.nav-wrapper {
	background-color: #ececec;
	padding: 5px;
}
.nav-item {
	position: relative;
}
.nav-title {
	background-color: #a8c6e0;
	padding: 15px;
	cursor: pointer;
	font-weight: 700;
}

li {
	list-style-type: none;
}
.dropdown {
	display: none;
	width: 100%;
	background-color: #f0efef;
	position: absolute;
	padding: 5px;
	left: 0;
}
.dropdown a {
	display: block; /* 每個 a 元素佔一整行 */
	padding: 8px 12px; /* 內部間距 */
	margin-bottom: 4px; /* 元素間距 */
	background-color: #fff;
	text-decoration: none; /* 取消底線 */
	color: #333;
	border-radius: 4px;
}

.dropdown a:hover {
	background-color: #d7d7d7;
}
.nav-item:hover .dropdown {
	display: block;
}
</style>
