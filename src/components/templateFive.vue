<template>
	<div class="fourPage">
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
							<div class="content_text content_text_line" @click="handelFn('content',index,'textarea')" v-html="item.content">
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
						title: '4场景类图文（上下）：',
						content: '(1)如何培养创造性如何培养创造性如何培养创.(2)造性如何培养创造性如何培养创造性如何培养创造性',
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
	.fourPage {
		background-color: #1d87df;
	}
	
	.temp_ul {
		width: 100%;
		padding-bottom: 1rem;
	}
	
	.temp_li {
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
		/*min-height: 9rem;*/
		border-radius: 5px;
	}
	
	.content_inner {
		width: 90%;
		background: #fff;
		margin: 0 auto;
		border-radius: 5px;
	}
	
	.content {}
	
	.title_center {
		height: 3rem;
		line-height: 3rem;
		overflow: hidden;
	}
	
	.title_txt {
		width: 100%;
		display: inline-block;
		color: #fff;
		font-size: 18px;
			font-weight: 600;
		padding-left: 2rem;
		text-align: left;
		cursor: pointer;
		background-image: url(../../static/yellow.png);
		background-repeat: no-repeat;
		background-position: 0rem 1rem;
		background-size: 10%;
	}
	
	.content_text {
		width: 100%;
		min-height: 4rem;
		color: #506d8f;
		font-size: 15px;
		padding: 0.8rem;
		overflow: hidden;
		cursor: pointer;
	}
	@media screen and (min-width: 1024px) {
		.temp_ul {
			width: 90%;
			margin: 0 auto;
			padding-top: 50px;
			padding-bottom: 55px;
		}
		.temp_li {
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
			background-repeat: no-repeat;
			background-position: 0;
			background-size: 3%;
		}
		.content_text {
			min-height: 175px;
			padding: 20px;
		}

	}
	
</style>