<template>
  	<div class="email-index-container">
  		<el-table :data="tableData" stripe style="width: 100%">
		    <el-table-column prop="email" label="邮箱" width="180">
		    </el-table-column>
		    <el-table-column prop="name" label="姓名" width="180">
		    </el-table-column>
		    <el-table-column label="获取邮件">
		    	<template slot-scope="scope">
			        <el-button @click="getEmail(scope.row)" type="text" size="small">搜索</el-button>
		      	</template>
		    </el-table-column>
		    <el-table-column prop="msg" label="邮件信息"></el-table-column>
  		</el-table>
  	</div>
</template>

<script>

export default {
	/**
	 * [data description]
	 * @return {[type]} [description]
	 *
	 * 接口：
	 * 		1、获取当前用户的邮件列表
	 * 		2、获取某一个邮箱的邮件信息
	 */
  data() {
    return {
    	tableData: []
    }
  },
  mounted () {
  	this.getEmailLists();
  },
  methods: {
  	getEmail (row) {
  		console.log(row.email);
  		return ;
  	},
  	getEmailLists (){
  		this.$store.dispatch('getEmailLists').then(lists => {
  			this.tableData = lists;
  		}).catch(error => {
  			console.log(error);
  		});
  	}
  }
}
</script>
