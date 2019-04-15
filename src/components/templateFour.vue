<template>
	<div class="ThreePage">
		<ul class="temp_ul">
			<el-button v-if='btnIshow()' class='el-icon-plus add_btn' @click="add"></el-button>
			<li class="temp_li" v-for="(item, index) in creatTemplate.tempLates">
				<el-button v-if='btnIshow()' @click.prevent="remove(item,index)" style='margin-top: 2rem;' class='el-icon-delete add_btn'></el-button>
				<div class="title_box">
					<div class="title_center" @click="handelFn('title',index,'istext','single')">
						<span class="title_txt">{{item.title}} </span>
					</div>
					<div class="contents">
						<div class="content_inner">
							<ul>
								<el-button v-if='btnIshow()' class='el-icon-plus add_btn' type="primary" @click="addChild"></el-button>
								<li class="title_child_li" v-for="(val, ind) in item.childernTemp">
									<el-button v-if='btnIshow()' @click.prevent="removeChild(val,index,ind)" type="primary" style='margin-top: 2rem;' class='el-icon-delete add_btn'></el-button>
									<!--奇数行-->
									<div :class="{left_box:ind%2==0,rigth_box:ind%2!=0}" v-if='ind%2==0'>
										<div class="left">
											<span class="horn">{{ind+1}}</span>
											<img :src="val.images" @click="handelChildFn('images',index,'isImg','many',ind)" alt="" />
										</div>
										<div class="rigth">
											<div class="title_child" :class="ind<4?'childImg'+ind:'childImg'+ind%2 " @click="handelChildFn('title',index,'istext','many',ind)">
												<span class="childTxt" @click="handelChildFn('content',index,'istext','many',ind)">{{val.title}}</span>
											</div>
											<div class="content_text" @click="handelChildFn('content',index,'textarea','many',ind)" v-html="val.content">
											</div>
										</div>
									</div>
									<!--偶竖行-->
									<div :class="{left_box:ind%2==0,rigth_box:ind%2!=0}" v-else>
										<div class="rigth">
											<div class="title_child" :class="ind<4?'childImg'+ind:'childImg'+ind%2" @click="handelChildFn('title',index,'istext','many',ind)">
												<span class="childTxt" @click="handelChildFn('content',index,'istext','many',ind)">{{val.title}}</span>
											</div>
											<div class="content_text" @click="handelChildFn('content',index,'textarea','many',ind)" v-html="val.content">
											</div>
										</div>
										<div class="left">
											<span class="horn">{{ind+1}}</span>
											<img :src="val.images" @click="handelChildFn('images',index,'isImg','many',ind)" alt="" />
										</div>
									</div>
								</li>
							</ul>
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
	import testImg from "../../static/banner.png";

	export default {
		components: {
			textDialog
		},
		data() {
			return {
				typeEdior: 'single', //是父级还是子集
				dialogType: 'isImg', //是图片还是为
				dialogVisible: false,
				creatTemplate: {
					tempLates: [{
						title: '4场景类图文模块:（左右）',
						childernTemp: [{
							title: '标题',
							content: '内容',
							images: testImg,
							key: Date.now()
						}]
					}],
				},
				curIndex: 0,
				curItem: '',
				childIndex: 0
			};
		},
		methods: {
			save(obj) {
				if(this.typeEdior == 'single') {
					this.creatTemplate.tempLates[this.curIndex][this.curItem] = obj.value;
				} else {
					//					debugger
					this.creatTemplate.tempLates[this.curIndex].childernTemp[this.childIndex][this.curItem] = obj.value;
				}
				this.dialogVisible = false;
			},
			handelChildFn(item, index, type, etype, ind) {
				this.curIndex = index;
				this.childIndex = ind;
				this.curItem = item;
				this.dialogVisible = true;
				this.typeEdior = etype;
				this.dialogType = type;
			},
			handelFn(item, index, type, etype) {
				this.curIndex = index;
				this.curItem = item;
				this.dialogVisible = true;
				this.typeEdior = etype
				this.dialogType = type;
			},
			addChild() {
				this.childIndex += 1;
				this.creatTemplate.tempLates[this.curIndex].childernTemp.push({
					title: '标题',
					content: '内容',
					images: testImg,
					key: Date.now()
				});
				//					debugger
			},
			removeChild(item, indexs, ind) {
				this.childIndex = index;
				var index = this.creatTemplate.tempLates[indexs].childernTemp.indexOf(item)
				if(index !== -1) {
					this.creatTemplate.tempLates[indexs].childernTemp.splice(index, 1)
				}
			},
			remove(item, index) {
				this.curIndex = index;
				var index = this.creatTemplate.tempLates.indexOf(item)
				if(index !== -1) {
					this.creatTemplate.tempLates.splice(index, 1)
				}
			},
			add() {
				this.curIndex++;
				this.creatTemplate.tempLates.push({
					title: '标题',
					childernTemp: [{
						title: '标题',
						content: '内容',
						images: testImg,
						key: Date.now()
					}],
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
	
	
	.temp_ul {
		width: 100%;
		/*padding-bottom: 1rem;*/
	}
	
	.temp_li {
		list-style: none;
		/*padding-bottom: 1rem;*/
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
	
	.contents {}
	
	.content_inner {
		width: 90%;
		margin: 0 auto;
		height: auto;
		padding-bottom: 0.5rem;
		border-radius: 10px;
	}
	
	.content_text {
		color: #506d8f;
		font-size: 15px;
		overflow: hidden;
		padding: 0.2rem 0.3rem ;
		min-height: 3rem;
		cursor: pointer;
	}
	
	.title_child_li {
		list-style: none;
		min-height: 5rem;
		border-radius: 10px;
		color: #506d8f;
		margin-bottom: 0.8rem;
		background-color: #eff8fd;
	}
	
	.title_child {
		width: 98%;
		height: 40px;
		line-height: 40px;
		font-weight: 600;
		text-align: left;
		padding-left: 5px;
		margin-left: 0.2rem;
		font-size: 18px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		cursor: pointer;
	}
	
	.left_box,
	.rigth_box {
		display: flex;
	}
	
	.rigth {
		width: 63%;
		min-height: 5rem;
		overflow: hidden;
	}
	
	.left_box .left {
		margin-left: -0.1rem;
	}
	
	.rigth_box .left {
		margin-right: -0.1rem;
	}
	
	.left {
		height: 5.5rem;
		width: 37%;
		padding: 0.5rem;
		border-radius: 0.5rem;
		margin-top: -0.3rem;
		background-color: #fff;
		position: relative;
	}
	
	.horn {
		display: block;
		width: 1rem;
		height: 1rem;
		left: 0;
		top: 0;
		color: #FFFFFF;
		position: absolute;
		background: url(../../static/green.png);
		background-repeat: no-repeat;
		background-size: 100%;
		font-weight: 600;
		font-size: 16px;
	}
	
	.left img {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.childTxt {
		display: inline-block;
		height: 40px;
		line-height: 40px;
		width: 100%;
		position: relative
	}
	
	.childTxt:after {
		content: "";
		display: inline-block;
		background: #b0c0d0;
		width: 4rem;
		position: absolute;
		left: 0;
		top: 38px;
		height: 1px;
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
		.left_box .left {
			margin-left: -1px;
		}
		.title_child_li {
			min-height: 255px;
			margin-bottom: 40px;
		}
		.left {
			height: 280px;
			width: 280px;
			padding: 12px;
			border-radius: 12px;
			margin-top: -12px;
		}
		.rigth {
			width: calc(100% - 280px);
			min-height: 258px;
		}
		.horn {
			width: 35px;
			height: 35px;
			padding-top: 2px;
			padding-left: 9px;
		}
		.title_child {
			height: 60px;
			line-height: 60px;
			margin-left: 20px;
		}
		.content_text {
			min-height: 175px;
			padding: 20px;
		}
		.childTxt {
			display: inline-block;
			height: 60px;
			line-height: 60px;
			width: 100%;
			position: relative
		}
		.childTxt:after {
			content: "";
			display: inline-block;
			background: #b0c0d0;
			width: 200px;
			position: absolute;
			left: 0;
			top: 54px;
		}
		.content_inner {
			padding-bottom: 0;
		}
	}
</style>