<template>
  <div class="home">
    <v-container>
      <v-alert v-model="alert.show" :type="alert.type" dense>{{ alert.message }}</v-alert>

      <v-row align-h="start">
        <v-col>
          <v-card>
            <v-card-title>Por realizar</v-card-title>

            <draggable v-model="incomplete" v-bind="{ group: 'todo' }">
              <component v-for="task in incomplete" :key="task._id" :task="task" is="task"></component>
            </draggable>
            
            <v-card v-if="adding">
              <v-card-text>
                <v-text-field placeholder="Descripción de la tarea" type="text" v-model="description" dense hide-details rounded></v-text-field>
              </v-card-text>
              
              <v-btn color="primary" @click="addTask">Agregar</v-btn>
              <v-btn color="error" @click="clear">Cancelar</v-btn>
            </v-card>
            
            <v-btn color="primary"v-if="!adding" @click="adding = true">+ Agregar tarea</v-btn>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>Completadas</v-card-title>

            <draggable v-model="completed" v-bind="{ group: 'todo' }" @add="updateTask">
              <component v-for="task in completed" :key="task._id" :task="task" @deleted="taskDeleted" is="task"></component>
            </draggable>
          
            <h6 class="mt-3 text--grey" v-if="completed.length == 0">No hay tareas completadas</h6>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
    import draggable from 'vuedraggable'
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

    import Task from '@/components/Task';

    @Component({
        components: {
          Draggable
        }
    })

    export default defineComponent({
      setup() {
        const adding = ref(false)
        const description = ref('')
        const alert = ref({
            type: 'warning',
            message: '',
            show: 0,
        })

        const store = useStore()
        
        // const createTask = () => {
        //   if (text.value === '') return
        //   const item: TodoItem = {
        //     id: Date.now(),
        //     text: text.value,
        //     completed: false
        //   }
        //   store.commit(MutationType.CreateItem, item)
        //   text.value = ''
        // }
        
        return { 
            components: {
                draggable, Task
            },
            
            adding,
            description,
            alert
        }
      }
    });
</script>