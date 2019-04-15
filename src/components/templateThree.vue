<template>
	<div class="fivePage">
		<ul class="temp_ul">
			<el-button v-if='btnIshow()' class='el-icon-plus add_btn' @click="add"></el-button>
			<li class="temp_li" v-for="(item, index) in creatTemplate.tempLates">
				<el-button v-if='btnIshow()' @click.prevent="remove(item)" style='margin-top: 2rem;' class='el-icon-delete add_btn'></el-button>
				<div class="title_box">
					<div class="title_center" @click="handelFn('title',index,'istext')">
						<span class="title_txt">{{item.title}} </span>
					</div>
					<div class="content_inner">
						<div class="content">
							<div class="content_img_box">
								<img class="content_next_img" @click="handelFn('nextImg',index,'isImg')" :src="item.nextImg" />
							</div>
							<div class="content_next">
								<div class="content_next_text" @click="handelFn('contentNext',index,'textarea')" v-html="item.contentNext">
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<textDialog v-if="dialogVisible" :dialogType='dialogType' :dialogVisible='dialogVisible' @save='save' @cancel='cancel'></textDialog>
	</div>
</template>
<script>
	import textDialog from "@/components/textDialog.vue";
	import textImg from "../../static/step_img.png";
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
						title: '3方法讲解方法：(流程图)',
						childTitle: '标题',
						content: '(1)如何培养创造性如何培养创造性如何培养创.(2)造性如何培养创造性如何培养创造性如何培养创造性',
						nextImg: textImg,
						contentNext: '1.造性如何培养创? 2.造性如何培养创造性如何培养创?'
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
					nextImg: textImg,
					contentNext: '1.造性如何培养创? 2.造性如何培养创造性如何培养创?',
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
	.fivePage {
		/*background-color: #ddebff;*/
	}
	
	.temp_ul {
		width: 100%;
		margin: 0 auto;
		padding-bottom: 1rem;
	}
	
	.temp_li {
		width: 100%;
		list-style: none;
		border-radius: 5px;
	}
	
	.add_btn {
		position: absolute;
		right: 0;
		z-index: 1;
	}
	
	.title_box {
		position: relative;
		border-radius: 5px;
	}
	
	.content_inner {
		width: 90%;
		box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
		margin: 0 auto;
		border-radius: 5px;
	}
	
	.content {
		width: 100%;
		background: #fff;
		border-radius: 5px;
		padding-bottom: 0.1rem;
		background-image: url(../../static/dot_line.png);
		background-repeat: no-repeat;
		background-position: 50% 0rem;
		background-size: 60%;
	}
	
	.title_center {
		height: 3rem;
		line-height: 3rem;
		overflow: hidden;
	}
	
	.title_txt {
		width: 100%;
		display: inline-block;
		color: #5b7596;
		font-size: 18px;
		font-weight: 600;
		padding-left: 2rem;
		text-align: left;
		cursor: pointer;
		background-image: url(../../static/blue.png);
		background-repeat: no-repeat;
		background-position: 0rem 1rem;
		background-size: 10%;
	}
	
	.content_img_box {
		width: 13rem;
		margin: 0 auto;
		height: 3rem;
		line-height: 3rem;
		padding-top: 1rem;
	}
	
	.content_next_img {
		width: 100%;
		vertical-align: middle;
	}
	
	.content_text {
		min-height: 4rem;
		color: #506d8f;
		font-size: 15px;
		margin: 1.2rem 0.8rem 0.8rem 0.8rem;
		padding: 0.5rem;
		cursor: pointer;
		border: 1px dashed #90bef9;
		background-color: #eff8fd;
		border-radius: 20px;
	}
	
	.content_next {
		margin: 0 auto;
		margin: 0.8rem;
	}
	
	.content_next_text {
		width: 100%;
		color: #6283a9;
		font-size: 15px;
		padding: 0.8rem;
		overflow: hidden;
		cursor: pointer;
	}
	
	@media screen and (min-width: 1024px) {
		.temp_ul {
			width: 90%;
			padding-top: 50px;
			padding-bottom:55px;
		}
		.content_inner {
			width: 100%;
		}
		.title_center {
			height: 50px;
			line-height: 50px;
			overflow: hidden;
			margin-bottom: 20px;
		}
		.content_img_box {
			width: 95%;
			height: 190px;
			line-height: 190px;
			padding-top: 95px;
		}
		.content_next_img {
			height: 100%;
			vertical-align: inherit;
		}
		.title_txt {
			font-size: 20px;
			padding-left: 70px;
			background-image: url(../../static/blue01.png);
			background-repeat: no-repeat;
			background-position: 0;
			background-size: 3%;
		}
		.content_tit {
			height: 100px;
			line-height: 100px;
			margin-left: 50px;
			padding-top: 40px;
			color: #506d8f;
			font-weight: 600;
		}
		.content {
			min-height: 100px;
			padding-bottom: 0.1rem;
			background-image: url(../../static/dot_line01.png);
			background-repeat: no-repeat;
			background-position: 50% -4px;
			background-size: 80%;
		}
		.content_img {
			height: 40px;
			width: 40px;
		}
		.content_text {
			margin: 15px 50px;
			padding: 15px 25px;
			font-size: 18px;
		}
		.content_next {
			margin: 15px 50px;
		}
		.content_next_text {
			padding: 8px;
		}
	}
</style>