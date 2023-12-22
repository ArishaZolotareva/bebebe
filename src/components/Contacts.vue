<script setup>
import Feedback from './Feedback.vue';



</script>


<template>
  <title>gif animation</title>
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
  <Feedback />

  <div>

  </div>
  <div class="move">
    <div class="Afly1"></div>
    
<div class="move"></div>
<div class="Afly2"></div>
  </div>
</template>

<style scoped>
.zagolovok {
  text-align: center;
}

.Afly1 {
  width: 100px;
  height: 71px;
  animation-duration: 0.1s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-size: cover;
  animation-direction: alternate-reverse;
  display: inline-block;
  transform:  translateY(1px);

}

@keyframes slidein {
  0% {
    background-image: url(../assets/fly1.png);
  }

  26% {
    background-image: url(../assets/fly2.png);
  }

  51% {
    background-image: url(../assets/fly3.png);
  }

  76% {
    background-image: url(../assets/fly4.png);
  }

  100% {
    background-image: url(../assets/fly1.png);
  }
}

@keyframes move {
  from {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(1000px);
    visibility: hidden;
  }

  to {
    transform: translateX(0px);
    visibility: hidden;
  }
}



.move {
  display: inline-block;
  animation-duration: 10s;
  animation-name: move;
  animation-iteration-count: infinite;
  animation-direction: normal, reverse;

}


img {
  content: url();
}

.Afly2 {
  width: 100px;
  height: 71px;
  animation-duration: 0.1s;
  animation-name: slidein1;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-size: cover;
  animation-direction: alternate-reverse;
  display: inline-block;


}

@keyframes slidein1 {
  0% {
    background-image: url(../assets/fly5.png);
  }

  26% {
    background-image: url(../assets/fly6.png);
  }

  51% {
    background-image: url(../assets/fly7.png);
  }

  76% {
    background-image: url(../assets/fly8.png);
  }

  100% {
    background-image: url(../assets/fly5.png);
  }
}

/* @keyframes move {
  from {
    transform: translateX(0px);
     visibility: hidden;
  }

  50% {
    transform: translateX(1000px);
    visibility: hidden;
  }

  to {
    transform: translateX(0px);
   
  }


} */

</style>