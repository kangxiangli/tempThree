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
							<div class="content_tit" @click="handelFn('childTitle',index,'istext')"> <span class="content_img"></span>&nbsp;{{item.childTitle}}</div>
							<div class="content_text" @click="handelFn('content',index,'textarea')" v-html="item.content">
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
						title: '2方法讲解：',
						childTitle: '小标题',
						content: '(1)如何培养创造性如何培养创造性如何培养创.(2)造性如何培养创造性如何培养创造性如何培养创造性',
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
					childTitle: '小标题',
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
		border-radius: 10px;
	}
	
	.add_btn {
		position: absolute;
		right: 0;
		z-index: 1;
	}
	
	.title_box {
		position: relative;
		border-radius: 10px;
	}
	
	.content_inner {
		width: 90%;
		margin: 0 auto;
		box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	
	.content {
		width: 100%;
		background: #fff;
		border-radius: 10px;
		padding-bottom: 0.1rem;
		background-image: url(../../static/dot_line.png);
		background-repeat: no-repeat;
		background-position: 50% 0rem;
		background-size: 60%;
	}
	
	.content_img {
		height: 1rem;
		width: 1rem;
		display: inline-block;
		background-image: url(../../static/brain.png);
		background-repeat: no-repeat;
		background-size: cover;
		vertical-align: sub;
	}
	
	.content_tit {
		height: 2rem;
		font-size: 18px;
		margin-left: 0.8rem;
		padding-top: 1rem;
		color: #506d8f;
		font-weight: 600;
		overflow: hidden;
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
	
	.content_text {
		color: #506d8f;
		font-size: 15px;
		margin: 1.2rem 0.8rem 0rem 0.8rem;
		padding: 0.5rem;
		cursor: pointer;
		border: 1px dashed #90bef9;
		background-color: #eff8fd;
		border-radius: 20px;
	}
	
	.content_next {
		margin: 0 auto;
		margin: 0 0.8rem 0.5rem 0.8rem;
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
			padding-bottom: 0;
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
			overflow: hidden;
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
		.content_next{
			margin:15px 50px;
		}
		.content_next_text{
			padding: 8px;
		
		}
	}
</style>