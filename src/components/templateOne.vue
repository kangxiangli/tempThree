<template>
	<div class="onePage ">
		<ul class="temp_ul">
			<el-button v-if='btnIshow()' class='el-icon-plus add_btn' @click="add"></el-button>
			<li class="temp_li" v-for="(item, index) in creatTemplate.tempLates">
				<el-button v-if='btnIshow()' @click.prevent="remove(item)" style='margin-top: 2rem;' class='el-icon-delete add_btn'></el-button>
				<div class="title_box">
					<div class="title_center">
						<!--<img class="title_img" src="../../static/argument_tit.png" />-->
						<span class="left"></span><span @click="handelFn('title',index,'istext')" class="title_txt">{{item.title}} </span> <span class="rigth"></span>
					</div>
					<div class="content_text" @click="handelFn('content',index,'textarea')" v-html="item.content">
					</div>
				</div>
			</li>
		</ul>
		<textDialog v-if="dialogVisible" :dialogType='dialogType' :dialogVisible='dialogVisible' @save='save' @cancel='cancel'></textDialog>
	</div>
</template>
<script>
	import textDialog from "@/components/textDialog.vue";
	export default {
		components: {
			textDialog
		},
		data() {
			return {
				dialogType: 'isImg',
				dialogVisible: false,
				creatTemplate: {
					tempLates: [{
						title: '11如何培养创造性如何培养创造性好?',
						content: '如何培养创造性如何培养创造性如何培养创造性如何培养创造性如何培养创造性如何培养创造性',
					}],
				},
				curIndex: 0,
				curItem: '',
			};
		},
		methods: {
			save(obj) {
				this.creatTemplate.tempLates[this.curIndex][this.curItem] = obj.value;
				this.dialogVisible = false
			},
			handelFn(item, index, type) {
				this.curIndex = index;
				this.curItem = item;
				this.dialogVisible = true;
				this.dialogType = type;
			},

			remove(item) {
				this.curIndex--;
				var index = this.creatTemplate.tempLates.indexOf(item)
				if(index !== -1) {
					this.creatTemplate.tempLates.splice(index, 1)
				}
			},
			add() {
				this.curIndex++;
				this.creatTemplate.tempLates.push({
					title: '标题',
					content: '内容',
					key: Date.now()
				});
			},
			cancel() {
				this.dialogVisible = false
			}
		}
	}
</script>
<style scoped="scoped">
	.onePage {
		/*background-color: #ddebff;*/
	}
	
	.temp_ul {
		width: 90%;
		margin: 0 auto;
		padding-top: 1rem;
	}
	
	.temp_li {
		width: 100%;
		list-style: none;
		background-image: url(../../static/temp_bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: 0 0.4rem;
	}
	
	.add_btn {
		position: absolute;
		right: 0;
		z-index: 1;
	}
	
	.title_box {
		position: relative;
		width: 100%;
		padding-top: 1rem;
		background-image: url(../../static/Greetings.png);
		background-repeat: no-repeat;
		background-position: 50% -0.1rem;
		background-size: 19%;
	}
	
	.title_center {
		width: 100%;
		text-align: center;
		padding-top: 1.5rem;
	}
	
	.left,
	.rigth {
		display: inline-block;
		width: 25px;
		height: 20px;
		vertical-align: text-top;
	}
	
	.left {
		background-image: url(../../static/left.png);
		background-repeat: no-repeat;
		/*	background-position: 50%;*/
	}
	
	.rigth {
		background-image: url(../../static/right.png);
		background-repeat: no-repeat;
		/*background-position: 50%;*/
	}
	
	.title_txt {
		max-width: 11rem;
		line-height: 30px;
		height: 30px;
		color: #506d8f;
		font-size: 18px;
		font-weight: 600;
		overflow: hidden;
		cursor: pointer;
		display: inline-block;
		padding: 0 0.2rem;
	}
	
	.content_text {
		min-height: 2rem;
		color: #506d8f;
		font-size: 15px;
		padding: 0rem 0.5rem 1rem 0.5rem;
		cursor: pointer;
		margin: 0 1rem 1rem 1rem;
	}
	
	@media screen and (min-width: 1024px) {
		.temp_ul {
			padding: 20px 0;
		}
		.title_center {
			padding: 135px 30px 0 30px;
		}
		.temp_li {
			background-image: url(../../static/temp_bg01.png);
			background-repeat: no-repeat;
			background-size: 100% 90%;
			background-position: 0 50px;
		}
		.title_box {
			padding-top: 15px;
			background-image: url(../../static/Greetings01.png);
			background-repeat: no-repeat;
			background-position: 50% 0;
			background-size: 9%;
		}
		.content_text {
			min-height: 300px;
			color: #506d8f;
			font-size: 16px;
			padding: 30px 45px;
			cursor: pointer;
			margin: 0px 45px;
			text-indent: 34px;
		}
		.title_txt {
			font-size: 20px;
		}
	}
</style>