<template>
    <div class="flex justify-center h-screen space-x-4 items-center">
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Login!</h2>
        <p>Please Enter your login info</p>
        <input v-model="username" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <input v-model="password" type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" >
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="loadUser">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import {storeToRefs} from 'pinia'
const authStore = useAuthStore()

const {isAuthenticated} = storeToRefs(authStore)

const username = ref(null)
const password = ref(null)

const user = ref(null)

async function loadUser() {
    const { data: users } = await useFetch(`http://chysy.test/app/spa/user`);
    user.value = users
}
</script>