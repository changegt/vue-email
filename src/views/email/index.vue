<template>
  	<div class="email-index-container">
  		<el-table :data="curTableData" stripe stripe style="width: 100%">
        <el-table-column type='index' width="50"></el-table-column>
        <el-table-column prop="id" label="id" width="80"></el-table-column>
		    <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
		    <el-table-column prop="uname" label="姓名" width="180"></el-table-column>
        <el-table-column prop="maildir" label="邮件存储地址" width="180"></el-table-column>
		    <el-table-column label="获取邮件" width="100">
		    	<template slot-scope="scope">
			        <el-button @click="getEmail(scope.row)" type="text" size="small">搜索</el-button>
		      	</template>
		    </el-table-column>
		    <el-table-column prop="msg" label="邮件信息"></el-table-column>
  		</el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalNum"
        :page-size="limit"
        :current-page="curpage"
        @current-change="change">
      </el-pagination>
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
    	tableData: [],
      totalNum: 0,
      curpage: 1,
      limit: 20
    }
  },
  mounted () {
  	this.getEmailLists();
  },
  computed: {
    curTableData () {
      this.tableData.slice((this.curpage-1)*this.limit )
      let start = (this.curpage-1)*this.limit;
      if(this.curpage == this.totalPage){
        //翻到最后一页
        return this.tableData.slice(start);
      }else{
        return this.tableData.slice(start, this.curpage*this.limit);
      }

    },
    totalPage () {
      console.log(Math.ceil(this.totalNum/this.limit))
      return this.totalNum ? 0 : Math.ceil(this.totalNum/this.limit);
    }
  },
  methods: {
  	getEmail (row) {
  		this.$store.dispatch('getEmail', {
        emailpath: row.maildir
      }).then(data => {
        console.log(data);
      }).catch(error => {
        console.log(error);
      });
  	},
  	getEmailLists (){
  		this.$store.dispatch('getEmailLists').then(lists => {
        console.log(lists);
  			this.tableData = lists.user;
        this.totalNum = lists.length;
  		}).catch(error => {
  			console.log(error);
  		});
  	},
    change (curp) {
      this.curpage = curp;
    }
  }
}
</script>
