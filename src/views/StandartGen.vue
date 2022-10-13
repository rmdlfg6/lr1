<template>
  <div>
    <h1>Стандартный генератор</h1>
    <el-button class="btn-start" type="success" @click="numGen">Старт</el-button>
    <el-button class="btn-back" type="primary"><router-link to="/">На главную</router-link></el-button>
    <table class="num-table" v-if="this.randNum.length>0">
      <tr>
        <th>№</th>
        <th>Число</th>
      </tr>
      <tr v-for="(v, i) in this.randNum" :key="v">
        <td>{{ i + 1 }}</td>
        <td>{{ v }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "StandartGen",
  data() {
    return {
      randNum: [],
    };
  },
  methods: {
    numGen() {
      let a = [];
      for (var i = 0; i < 1024; i++) {
        a[i] = Math.random().toFixed(5).replace('.', ',');
      }
      this.randNum = a;
    },
  },
};
</script>