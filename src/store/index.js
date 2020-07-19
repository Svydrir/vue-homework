import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [], 
  },
  getters: {
    todosCount: state => {
        return state.list.length;
    }
  },
  mutations: {
    addTask(state, task) {
      state.list.push(task);
    },
    removeTask(state, i) {
      state.list.splice(i, 1)
    },
    removaAllTasks(state) {
      state.list = [];
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    removeTask({ commit }, i) {
      commit('removeTask', i);
    },
    removaAllTasks({ commit }) {
      commit('removaAllTasks');
    }
  },
});
