import { GetterTree, ActionTree, MutationTree } from 'vuex'

export type Task = {
  _id: number
  description: string
  completed: boolean
}

export const state = () => ({
  tasks: [] as Task[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  tasks: state => state.tasks,
}

export const mutations: MutationTree<RootState> = {
  SET_TASKS: (state, tasks: Task[]) => (state.name = tasks),
}

export const actions: ActionTree<RootState, RootState> = {
  fetchRasks({ commit }) {
    const tasks = this.$axios.$get('https://api-nodejs-todolist.herokuapp.com/task')
    
    console.log(tasks)
    
    commit('SET_TASKS', tasks)
  },
}
