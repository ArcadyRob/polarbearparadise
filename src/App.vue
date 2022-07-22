<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import FooterSection from "./components/FooterSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
</script>

<template>
<HeaderSection />
  <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
<FooterSection />
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
