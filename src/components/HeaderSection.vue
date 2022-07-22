<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-indigo-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <img :src="logo" alt="my-logo" />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link v-for="link in navigation" :key="link.name" :to="link.href" class="text-base font-medium text-white hover:text-indigo-50">
              {{ link.name }}
            </router-link>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a href="#" class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
          <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up</a>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <router-link v-for="link in navigation" :key="link.name" :to="link.href" class="text-base font-medium text-white hover:text-indigo-50">
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
const navigation = [
  { name: 'Robert', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]
</script>