<template>
    <div class="flex justify-center h-screen space-x-4 items-center">
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Login!</h2>
        <p>Please Enter your login info</p>
        <input v-model="data.username" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <input v-model="data.password" type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" >
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click.prevent="loadUser">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';
import {storeToRefs} from 'pinia'

const authStore = useAuthStore()

const {isAuthenticated} = storeToRefs(authStore)

const data = reactive({
  user: null,
  username: null,
  password: null
})

async function loadUser() {
    const { data: users } = await useFetch(`http://chysy.test/app/login`, {
      method: "post",
      body: {
        email: data.username,
        password: data.password
      },
      mode: 'cors',
      headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json',
            'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
      },
      credentials: 'include',
    })
    data.user = users
}
</script>