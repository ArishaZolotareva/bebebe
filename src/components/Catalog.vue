
<script setup>
import price from "../db/price.js"
import { ref } from "vue"
let selectPrice= ref()


</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="product, index in price" :key="index">
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
                        {{selectPrice}}

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>