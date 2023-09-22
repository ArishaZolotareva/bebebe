<script setup>
import { ref } from "vue"
let drawer = ref(true)
</script >
<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Main" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-message-text" title="Contacs" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="Flys" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      
      <router-view />
    </v-main>
    <v-main style="height: 250px">
      <div class="d-flex justify-center align-center h-100">
  
        <v-btn color="primary" @click="drawer = !drawer">
          Toggle
        </v-btn>
      </div>
    </v-main>
  </v-layout>
</template >
