<template>
  <div class="home">
    <UnitsComp msg="Units Table" />
  </div>
</template>

<script>
// @ is an alias to /src
import UnitsComp from '@/components/UnitsComp.vue';

export default {
  name: 'HomeView',
  components: {
    UnitsComp
  }
}
</script>