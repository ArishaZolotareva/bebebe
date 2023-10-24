<script setup>
import { ref } from "vue"
let drawer = ref(true)
</script >
<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"><v-btn density="compact" variant="elevated" icon="mdi-view-list" size="x-large"
        color="deep-purple-darken-2" @click="drawer = !drawer"></v-btn></v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <router-link to="/"><v-list-item prepend-icon="mdi-view-dashboard" title="Main"
            value="home"></v-list-item></router-link>
        <router-link to="/contacts"><v-list-item prepend-icon="mdi-message-text" title="Contacs"
            value="about"></v-list-item></router-link>
        <router-link to="/flys"><v-list-item prepend-icon="mdi-delete" title="Flys"
            value="abou"></v-list-item></router-link>
        <router-link to="/price"><v-list-item prepend-icon="mdi-cash" title="Price"
            value="abut"></v-list-item></router-link>
        <router-link to="/order"><v-list-item prepend-icon="mdi-cart-outline" title="Order"
            value="abut"></v-list-item></router-link>
      </v-list>
    </v-navigation-drawer>


    <v-main class="">
      <v-container>
        <v-row no-gutters>
          <v-col> <router-view /></v-col>
        </v-row>
      </v-container>
    </v-main>


  </v-layout>
</template >

