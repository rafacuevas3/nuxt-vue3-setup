<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const title = ref('Setup with Nuxt and Vue 3 (Composition API)')

    return {
      title
    }
  }
})

</script>
