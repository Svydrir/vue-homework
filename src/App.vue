<template>
  <div id="app">
    <h1>Todo list</h1>
    <TaskInput />
    <p><ClearButton/></p>
    <List/>
  </div>
</template>

<script>
import List from './components/List.vue';
import TaskInput from './components/TaskInput.vue';
import ClearButton from './components/ClearButton.vue';

export default {
  name: 'App',
  components: {
    List,
    TaskInput,
    ClearButton,
  },
};
</script>
