<script setup>
import { ref } from "vue"
let card = [{ name: ' Яйца черной львинки', img: "https://farm-worm.com/wp-content/uploads/2022/03/YAytsa-chernoy-lvinki_002_Sbornik-yaits-chernoy-lvinki-1024x576.jpg", text: "Кормовой белок из личинок мух черной львинки оказывает положительное влияние на качество пищевых яиц: увеличивается их масса, содержание полиненасыщенных жирных кислот, при этом снижается уровень холестерина." },
{ name: "Живая личинка черной львинки", img: "https://hermetia.ru/wp-content/uploads/2018/08/zhivaya-lichinka-germetsiya.jpg", text: "Личинка львинки является рекордсменом по содержанию меланина, пигмента, обладающего высокой биологической активностью. Меланин обладает множеством полезных свойств, но наиболее ценной и изученной является его способность оказывать противоопухолевое, иммуномодулирующее" },
{ name: "Сушеные личинки черной львинки", img: "https://bio-genesis.ru/images/sushenye-lichinki-6.jpg", text: "Цельные сушеные личинки черной львинки содержат 40% белка и 35% жира в пересчете на сухое вещество.Белковый компонент состоит из незаменимых аминокислот, которые предпочтительнее использовать, чем другие ингредиенты животного происхождения, такие как мясокостная или рыбная мука." },
{ name: "Зоогумус (биокомпост)", img: "https://farm-worm.com/wp-content/uploads/2022/02/Zoogumus_000_Oblozhka.jpg", text: "Если нет желания или времени заниматься вермикультивированием самостоятельно, то у нас Вы можете приобрести любой объем готового удобрения самого лучшего качества. Биогумус, производимый обычными червями, во много раз эффективнее навоза или компоста. Он идеально подходит не только для повышения урожайности на садовом участке, но и для домашнего цветоводства." }]

</script>

<template>
    <v-parallax class="w-100"
        src="https://kartin.papik.pro/uploads/posts/2023-06/thumbs/1686726976_kartin-papik-pro-p-kartinki-prirodi-odnotonnie-23.jpg">
        <!-- <div class="d-flex flex-column fill-height justify-center align-center text-white"> -->

        <template1>
            <v-container>

                <v-row>
                    <v-col v-for="item, index in card" :key="index" cols="12">
                        <v-card class="d-flex">

                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-img width="100%" :src="item.img" cover></v-img>
                                </v-col>
                                <v-col class="pa-8" cols="12" md="4">

                                    <h3> {{ item.name }}</h3>


                                    <p>{{ item.text }}</p>

                                </v-col>

                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </template1>
        <!-- </div> -->
    </v-parallax>
</template>