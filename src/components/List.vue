<template>
<div>
  <h2>Всего заданий: {{ todosCount }}</h2>
  <ul class="list">
    <li @click="onClick(i)" v-for="(task, i) in list" :key="i">{{ task }}</li>
  </ul>
</div>  
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapState(['list']),
    todosCount () {
      return this.$store.getters.todosCount;
    },
  },
  methods: {
    ...mapActions(['removeTask']),
    onClick(i) {
      this.removeTask(i);
    }
  }
};
</script>
