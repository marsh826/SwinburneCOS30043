<template>
  <div class="home">
    <HomeComp msg="Hello there"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComp
  }
}
</script>
