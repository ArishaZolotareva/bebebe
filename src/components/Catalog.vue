
<script setup>
import { reactive } from "vue";
import price from "../db/price.js"
import ProductCard from "./ProductCard.vue";
let cart= reactive([])
function addToCart(args){
cart.push(args)

}



</script>

<template>


    {{ cart }}
    <v-container>
        <v-row>
            <v-col v-for="product, index in price" :key="index">
              
                <ProductCard :product="product" @addToCart="addToCart"/>
            </v-col>
        </v-row>
    </v-container>
</template>