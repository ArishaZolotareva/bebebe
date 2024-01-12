<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";

let router = useRouter()
let drawer = ref(true)
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar">

      <v-btn density="compact" variant="elevated" icon="mdi-view-list" size="x-large" color="deep-purple-darken-2"
        @click="drawer = !drawer">
      </v-btn>

    </v-app-bar>


    <v-navigation-drawer v-model="drawer" temporary location="top">
      <v-list>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item @click="router.push('/')" prepend-icon="mdi-view-dashboard" title="Main"
          value="home"></v-list-item>
        <v-list-item @click="router.push('/contacts')" prepend-icon="mdi-message-text" title="Contacs"
          value="about"></v-list-item>
        <v-list-item @click="router.push('/price')" prepend-icon="mdi-cash" title="Price" value="abut"></v-list-item>
        <v-list-item @click="router.push('/catalog')" prepend-icon="mdi-card-outline" title="Catalog"
          value="about"></v-list-item>
        <v-list-item @click="router.push('/admine')" prepend-icon="mdi-basket-plus-outline" title="Admine"
          value="about"></v-list-item>
        <v-list-item @click="router.push('/')" prepend-icon="mdi-basket-plus-outline" title="Home"
          value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main class="">
      <router-view />
    </v-main>


  </v-layout>
</template >


