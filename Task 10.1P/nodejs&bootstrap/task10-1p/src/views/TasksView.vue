<template>
  <div class="home">
    <TasksComp msg="This is Tasks page" />
  </div>
</template>

<script>
// @ is an alias to /src
import TasksComp from '@/components/TasksComp.vue';

export default {
  name: 'HomeView',
  components: {
    TasksComp
  }
}
</script>