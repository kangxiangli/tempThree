<template>
	<div class="myUpladPage">
		<el-upload class="avatar-uploader" :http-request="handleUpload" action="string" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
			<img v-if="imageUrl" :src="imageUrl" class="avatar">
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
		</el-upload>
	</div>
</template>
<script>
	import bannerImg from "../../static/banner01.png";
	export default {
		data() {
			return {
				imageUrl: bannerImg,
			};
		},
		methods: {

			/**
			 * 图片上传
			 * */
			handleUpload(item) {
				var _this = this;
				var fromDatafile = new FormData();
				fromDatafile.append('multipartfile', item.file);
				this.$http.post('/yitai-cms/course/updateImage', fromDatafile).then(function(res) {
					if(res.data.code == '200') {
						_this.imageUrl = res.data.data;
						_this.$emit('handleAvatarSuccess', {
							res: item,
							file:res.data.data
						});
					} else {
						_this.$notify.warning({
							title: '温馨提示',
							message: res.msg,
							offset: 50
						});
						console.log('上传图片接口业务报错');
					}
				}).catch(function(error) {
					console.log('上传图片接口网络故障', error);
				});
			},
			handleAvatarSuccess(res, file, fileList) {

			},
			beforeAvatarUpload(file) {
				const isLt2M = file.size / 1024 / 1024 < 2;
				const isJPG = file.type === 'image/jpeg';
				const isPng = file.type === 'image/png';
				const isJpg = file.type === 'image/jpg';
				if(!(isJPG || isPng || isJpg)) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG || isPng || isJpg && isLt2M;
			}
		}
	}
</script>