<script setup>
import Feedback from './Feedback.vue';

</script>


<template>
  <H1 class="zagolovok">контакты</H1>
  <div class="d-flex flex-column ma-4 align-start">
    <v-row class="justify-center">
      <v-col cols="12" md="8">
        <p> <b>телефон: </b> +7 919 914 00 72</p>
        <p> <b>почта: </b> wormyferma@gmail.com</p>
        <p> <b>адрес: </b> Российская Федерация, Удмуртский регион, Якшур-Бодьинский район, село Якшур-Бодья, территория
          Новая Земля, 1</p>
      </v-col>
    </v-row>
  </div>

  <H1 class="zagolovok"> сотрудники</H1>

  <div class="d-flex justify-center flex-wrap">
    <div class="d-flex flex-column ma-4 align-center">
      <v-avatar icon="$vuetify" image="https://hightech.fm/wp-content/uploads/2021/09/shutterstock_1020065815.jpg"
        size="250">
      </v-avatar>
      <h3 class="text-center">Березка Лев Сергеевич </h3>
      <p class="text-caption mt-1 text-center">
        прием заявок, куратор сайта, руководитель
      </p>
    </div>

    <div class="d-flex flex-column ma-4 align-center">
      <v-avatar icon="$vuetify" image="https://hightech.fm/wp-content/uploads/2021/09/shutterstock_1020065815.jpg"
        size="250">
      </v-avatar>
      <h3 class="text-center">Золоторёв Николай </h3>
      <p class="text-caption mt-1 text-center">
        производственник, лаборант, руководитель
      </p>
    </div>

    <div class="d-flex flex-column ma-4 align-center">
      <v-avatar icon="$vuetify" image="https://hightech.fm/wp-content/uploads/2021/09/shutterstock_1020065815.jpg"
        size="250">
      </v-avatar>
      <h3 class="text-center">муха </h3>
      <p class="text-caption mt-1 text-center">
        Контент-менеджер
      </p>
    </div>



  </div>
  <Feedback/> 

  <div id="content">
  <img width="100" src="../assets/fly2.png">
  <div>Жираф</div>
</div>

  <!-- <div class="av">
<img class="va" src="../assets/fly1.png" alt="">
  </div> -->

</template>

<style scoped>
.zagolovok {
  text-align: center;
}

/* .av {
  width: 100px;
  height: 70px;
  animation-name: example;
  animation-duration: 4s;
}

@keyframes example {
  0%   {}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}

.va {
  width: 100px;
  height: 70px;
} */
</style>