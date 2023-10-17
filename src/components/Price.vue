<script setup>
import { reactive } from "vue"
let desserts =
    reactive(
        [
            {
                name: '1 🥚 Яйца черной львинки (минимальный заказ – 6 граммов)',
                prices: [{ mass: 6, price: 350 }, { mass: 15, price: 330 }, { mass: 30, price: 315 }, { mass: 50, price: 300 }]
            },
            {
                name: '2 🔥 Сушеные личинки черной львинки (минимальный заказ – 5 кг)',
                prices: [{ mass: 5, price: 300 }, { mass: 15, price: 285 }, { mass: 30, price: 270 }, { mass: 60, price: 255 }]
            },
            {
                name: '3 🐛 Живая личинка черной львинки (минимальный заказ – 10 кг). 🚚 Доставка в радиусе ~500 км от г. Ижевск 🗺️ Удмуртская республика, Республика Башкортостан, Пермский край, Кировская область, Республика Татарстан, Мэрий Эл, Самарская область',
                prices: [{ mass: 10, price: 5000 }, { mass: 20, price: 9500 }, { mass: 50, price: 22500 }, { mass: 100, price: 42500 }]
            },
            {
                name: '4 🌱 Зоогумус (биокомпост) (минимальный заказ 100 литров ~ 30 килограмм)',
                prices: [{ mass: 100, price: 20 }, { mass: 260, price: 19 }, { mass: 550, price: 18 }, { mass: 950, price: 17 }]

            }
        ]
    )

</script >


<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>
                    <v-table>
                        <tbody>
                            <tr><th v-for="price, index in item.prices" :key="index">{{ price.mass }}</th></tr>
                            <tr><th v-for="price, index in item.prices" :key="index">{{ price.price }}</th></tr>
                        </tbody>
                    </v-table>
                </td>
            </tr>
    </tbody>
</v-table></template >
