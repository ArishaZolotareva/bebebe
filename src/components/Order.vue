<template>
    <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 text-basil">
                Био Мусор
            </h1>
        </v-card-title>

        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
            <v-tab v-for="item in items" :key="item" :value="item">
                {{ item }}
            </v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item v-for="item in items" :key="item" :value="item">
                <v-card color="basil" flat>
                    <v-card-text>{{ text }}</v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: 'Appetizers',
        items: [
          '1 🥚 Яйца черной львинки ', '🐛 живые личинки', '🐛 Живая личинка черной львинки ', '🌱 Зоогумус',
        ],
        text: 'Lдддддддпщл7нв57нгроа5е7еналггсенбпгснгчнчсебгчсебгсебгсе.',
      }
    },
  }
</script>