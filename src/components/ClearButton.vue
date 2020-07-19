<template>
  <div class="clear-tasks-button">
    <button @click="onClick">Очистить список</button>
  </div>
</template>

<script>
import {  mapActions } from 'vuex';

export default {
  name: 'ClearButton',
  methods: {
    ...mapActions(['removaAllTasks']),
    onClick() {
      this.removaAllTasks();
    },
  },
};
</script>