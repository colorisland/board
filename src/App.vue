<template>
<div>  
  <router-view></router-view>
  
</div>
</template>

<script>
import store from "./store";


export default {
  components: {
    
  },
  
  store,
  name: 'App'
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
  
</style>
