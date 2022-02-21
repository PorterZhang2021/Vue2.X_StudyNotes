<template>
<!-- 基本表格 -->
<!--  <el-table-->
<!--      :data="tableData"-->
<!--      style="width: 100%"-->
<!--      height="200px"-->
<!--      border>-->
<!--    <el-table-column-->
<!--        prop="date"-->
<!--        label="日期"-->
<!--        width="180">-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--        prop="name"-->
<!--        label="姓名"-->
<!--        width="180">-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--        prop="address"-->
<!--        label="地址"-->
<!--        show-overflow-tooltip>-->
<!--    </el-table-column>-->
<!--    <el-table-column label="操作">-->
<!--      <template slot-scope="scope">-->
<!--        <el-button-->
<!--            size="mini"-->
<!--            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
<!--        <el-button-->
<!--            size="mini"-->
<!--            type="danger"-->
<!--            @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
<!--      </template>-->
<!--    </el-table-column>-->
<!--  </el-table>-->
  <div>
    <el-table :data="tableData">
      <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val" width="180">
      </el-table-column>
      <el-table-column label="操作" v-if="isShowOperate">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props:{
    isShowOperate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      tableLabel: {
        date: '日期',
        name: '姓名',
        address: '地址',
      }
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$emit('edit', row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}
</script>

<style scoped>

</style>