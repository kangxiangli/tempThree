<template lang="html">
	<div class="login_body">
		<myVideo></myVideo>
		<myUpload @handleAvatarSuccess='handleAvatarSuccess'></myUpload>
		<div class="content_bg">
			<templateOne></templateOne>
			<templateTow></templateTow>
			<templateThree></templateThree>
		</div>
		<div class="Page_bg">
			<templateFour></templateFour>
			<templateFive></templateFive>
		</div>

		<templateSix></templateSix>
	</div>
</template>
<script>
	import Element from "element-ui";
	import { mapGetters, mapActions, mapMutations } from 'vuex';
	import myUpload from "@/components/myUpload.vue";
	import templateOne from "@/components/templateOne.vue";
	import templateTow from "@/components/templateTow.vue";
	import templateThree from "@/components/templateThree.vue";
	import templateFour from "@/components/templateFour.vue";
	import templateFive from "@/components/templateFive.vue";
	import templateSix from "@/components/templateSix.vue";
	import textDialog from "@/components/textDialog.vue";
	import myVideo from "@/components/myVideo.vue";
	export default {
		name: 'tempPage',
		components: {
			myUpload,
			templateOne,
			templateTow,
			templateThree,
			templateFour,
			templateFive,
			templateSix,
			textDialog,
			myVideo
		},
		data() {
			return {

			}
		},

		created() { //dom还未生成
		},
		mounted() {},
		methods: {
			handleAvatarSuccess(obj) {

			},
			cancel() {
				this.dialogVisible = false
			}
		}
	}
</script>

<style scoped>
	@media screen and (max-width: 1023px) {
		.Page_bg {
			background-color: #1d87df;
		}
		.content_bg {
			background-image: url(../../static/backG.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
	}
	
	@media screen and (min-width: 1024px) {
		.Page_bg {
			background-image: url(../../static/back01.png);
			background-repeat: no-repeat;
			background-size: cover;
		}
		.content_bg {
			background-image: url(../../static/backG01.png);
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
</style>