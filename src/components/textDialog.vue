<template>
	<div>
		<mt-popup v-model="dialogVisible"  :closeOnClickModal='false' class='myDialog' popup-transition="popup-fade">
			<mt-header title="修改">
				<mt-button class="el-icon-close" slot="right" @click="cancel"></mt-button>
			</mt-header>
			<el-form :model="form" class='myform'>
				<el-input v-if='dialogType=="istext"' v-model="form.value"></el-input>
				<vue-editor class='myEditor' v-else-if='dialogType=="textarea"'  v-model="form.value"></vue-editor>
				<div v-else>
					<myUpload @handleAvatarSuccess='handleAvatarSuccess'></myUpload>
				</div>
			</el-form>
				<div class="dialog-footer">
					<mt-button type="default" @click="cancel" size='small'>取 消</mt-button>
         <mt-button type="primary" @click="Submit" size='small'>确 定</mt-button>
			</div>
		</mt-popup>
	</div>

	<!--<el-dialog title="修改" custom-class='myDialog'   top='15rem' :visible.sync="dialogVisible" :close-on-click-modal='false'>
		<el-form :model="form">
				<el-input v-if='dialogType=="istext"' v-model="form.value"></el-input>
				  <vue-editor v-else-if='dialogType=="textarea"' v-model="form.value"></vue-editor>
			<div v-else='dialogType=="istext"'>
				<myUpload @handleAvatarSuccess='handleAvatarSuccess'></myUpload>
			</div>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="cancel" size='small'>取 消</el-button>
			<el-button type="primary" @click="Submit" size='small'>确 定</el-button>
		</div>
	</el-dialog>-->
</template>
<script>
	import { VueEditor } from 'vue2-editor'
	import myUpload from "@/components/myUpload.vue";
	export default {
		components: {
			myUpload,
			VueEditor
		},
		props: {
			dialogVisible: {
				// 是否显示弹窗
				type: Boolean,
				default: false
			},
			//			liesInfo: Object, // 用户信息
			dialogType: String //isImg是图片 istext是文字 textarea是编辑器
		},
		data() {
			return {
				form: {
					value: '',
				},
				formLabelWidth: '80px',
				  customToolbar:[
                    ['bold', 'italic', 'underline'],
                    [{'align':''},{'align':'center'},{'align':'right'}],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
                    [{'background':[]},{'color':[]}],
                    ['image','link'],
                    ['strike'],
                    ['clean'],
                  [{ 'indent': '-1'}, { 'indent': '+1' }], 
                  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ],//更多工具栏选项在下面
              
			};
		},
		methods: {
			handleAvatarSuccess(obj) {
				this.form.value = obj.file;
				//	debugger
				this.$emit("handleUpSuccess", obj)
			},
			cancel() {
				this.$emit('cancel')
			},
			Submit() {
				if(this.form.value == '') {
					this.$notify({
						title: '警告',
						message: '请填写修改内容',
						type: 'warning'
					});
				} else {
					this.$emit('save', this.form)
				}
			}
		}
	};
</script>
