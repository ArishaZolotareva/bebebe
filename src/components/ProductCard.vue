<script setup>

import { ref } from "vue"
let selectPrice = ref()
const props = defineProps(['product'])
 let emit =defineEmits(['addToCart'])
function buy() {
let productToCard={
    name:props.product.name,
    price: selectPrice.value
}
    emit('addToCart', productToCard)

}

</script>
<template>
    <v-card class="mx-auto" width="344">
        <v-img :src="product.image" height="200px" cover></v-img>

        <v-card-title>
            {{ product.name }}
        </v-card-title>
        <v-card-subtitle class="pt-4">
            {{ product.discription }}
        </v-card-subtitle>
        <v-select label="Select" v-model="selectPrice" :items="product.prices" item-title="mass"
            item-value="price"></v-select>
        {{ selectPrice }}
        <div class="d-flex justify-center">

            <v-btn @click="buy()" class="ma-4" color="indigo-darken-3">Купить</v-btn>


        </div>
    </v-card>
</template>