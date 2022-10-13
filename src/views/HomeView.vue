<template>
  <div class="home">
    <h1>Лабораторная работа 1</h1>
    <h2>Формирование и использование последовательностей равномерно распределённых чисел. Программный способ.</h2>
    <div>
      <h3>Конгруэнтный генератор</h3>
      <ul>
        <li><router-link to="/multi">Мультипликативный метод</router-link></li>
        <li><router-link to="/mixed">Смешанный метод</router-link></li>
      </ul>
      <h3><router-link to="/standart">Стандартный генератор</router-link></h3>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {},
}
</script>
