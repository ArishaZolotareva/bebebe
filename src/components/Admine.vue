<script setup>
import { ref } from "vue"
let name = ref("")
let discription = ref("")
let price = ref("")
let image = ref("")
let form = ref(false)
function create() {
form.value = !form.value
}
</script>

<template>
  <v-sheet width="400" class="mx-auto">
    <v-form>
      <v-text-field v-model="name" label="Hазвание"></v-text-field>
      <v-text-field v-model="discription" label="Описание"></v-text-field>
      <v-text-field v-model="price" label="Цена"></v-text-field>
      <v-text-field v-model="image" label="Картинка"></v-text-field>

      <v-btn @click="create()" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
  <div v-if="form">
    {{ name }}
    {{ discription }}
    {{ price }}
    {{ image }}
  </div>
</template>












