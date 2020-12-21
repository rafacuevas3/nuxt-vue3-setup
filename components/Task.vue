<template>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ task.description }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <!-- <b-icon :icon="icon" size="is-large" type="is-primary" /> -->
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
  
  import axios from 'axios'

  interface Task {
    _id: number
    description: string
  }


  export default defineComponent({
    props: {
      task: {
        type: Object as () => Task,
        required: true
      }
    },

    setup ({ task }) {
      const loading = ref(false)

      const { fetch, fetchState } = useFetch(async () => {
        await axios.delete('https://api-nodejs-todolist.herokuapp.com/task/' + task._id)
      })

      fetch()

      fetchState

      return {
        loading
      }
    }
  })
</script>