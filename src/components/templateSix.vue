<template>
	<div class="sixPage">
		<ul class="temp_ul">
			<el-button v-if='btnIshow()' class='el-icon-plus add_btn' @click="add"></el-button>
			<li class="temp_li" v-for="(item, index) in creatTemplate.tempLates">
				<el-button v-if='btnIshow()' @click.prevent="remove(item)" style='margin-top: 2rem;' class='el-icon-delete add_btn'></el-button>
				<div class="title_box">
					<div class="title_center" @click="handelFn('title',index,'istext')">
						<span class="left"></span><span class="title_txt">{{item.title}} </span> <span class="rigth"></span>
					</div>
					<div class="content_text" @click="handelFn('content',index,'textarea')" v-html="item.content">
					</div>
					<div class="content_next_text sixPage_txt" @click="handelFn('innerContent',index,'textarea')" v-html="item.innerContent">
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
						title: '课堂1小结',
						content: '如何培养创造性如何培养创造性如何培养创造性如何培养创造性如何培养创造性如何培养创造性',
						innerContent: '1.培养‘善始善终’的意识和行为'
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
					innerContent: '1.培养‘善始善终’的意识和行为',
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
	.sixPage {
		background-image: url(../../static/backG.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.temp_ul {
		width: 90%;
		margin: 0 auto;
		padding: 1rem 0;
	}
	
	.temp_li {
		width: 100%;
		list-style: none;
		background-color: #fff;
		box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		padding-bottom: 1rem;
	}
	
	.add_btn {
		position: absolute;
		right: 0;
		z-index: 1;
	}
	
	.title_box {
		position: relative;
		width: 100%;
	}
	
	.title_center {
		width: 100%;
		text-align: center;
		padding: 0.5rem;
	}
	
	.left,
	.rigth {
		display: inline-block;
		width: 25px;
		height: 30px;
		line-height: 30px;
		vertical-align: middle;
	}
	
	.left {
		background-image: url(../../static/left.png);
		background-repeat: no-repeat;
		/*background-position:0.7rem 0rem ;*/
	}
	
	.rigth {
		background-image: url(../../static/right.png);
		background-repeat: no-repeat;
		/*background-position: 0rem 0.75rem;*/
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
		min-height: 1rem;
		color: #506d8f;
		font-size: 16px;
		padding: 0 1rem;
		overflow: hidden;
		cursor: pointer;
		margin-bottom: 0.2rem;
	}
	.content_next_text {
		color: #fef568;
		font-size: 16px;
		margin: 0 1rem;
		overflow: hidden;
		cursor: pointer;
		background: #4bafea;
		border-radius: 5px;
		text-align: left;
		min-height: 3rem;
		padding: 0.5rem;
	}
	@media screen and (min-width: 1024px) {
		.temp_ul {
			width: 90%;
			margin: 0 auto;
			padding-top: 50px;
		}
		.temp_li {
		padding-bottom: 55px;
		}
		.content_inner {
			width: 100%;
		}
		.title_center {
			height: 100px;
			line-height: 100px;
			overflow: hidden;
			padding: 0;
		}
		.title_txt {
			font-size: 20px;
		}
		.content_text {
			padding: 15px  50px;
			text-indent: 34px;
			min-height: 70px;
		}
		.content_next_text{
			margin: 0 65px;
			padding: 20px;
			min-height: 140px;
		}
		.sixPage {
		background-image: url(../../static/backG01.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
	}
</style>