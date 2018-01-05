<template>
  <app-layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </app-layout>
</template>
<script type="ts">
  export default Vue.extend({
    computed: {

    },
    mounted(){

    }
  });
</script>
