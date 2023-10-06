<template>
    <v-card width="500" class="pa-md-4 mx-lg-auto">
        <v-card-title>Обратная связь</v-card-title>

        <v-text-field label="Имя" Имя class="ma-4"></v-text-field>
        <v-text-field label="Номер телефона" Номер телефона class="ma-4"></v-text-field>

        <v-container fluid class="pa-2">
            <v-textarea name="input-7-1" variant="filled" label="Сообщение" Сообщение></v-textarea>
        </v-container>

        <v-row align="center" justify="space-around" class="pa-6">
            <v-btn color="red">отменить</v-btn>
            <v-btn color="green">отправить</v-btn>
        </v-row>


    </v-card>
</template>