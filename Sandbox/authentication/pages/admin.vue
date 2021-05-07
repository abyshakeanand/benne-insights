<template>
    <div class="">
        <h1 class="">Admin Dashboard</h1>
        <h2 class="">The routes below are using <code>nuxt-child</code></h2>
        <div class="">
            <NuxtLink to="/admin">Dashboard Home</NuxtLink>
            <NuxtLink to="/admin/settings">Settings</NuxtLink>
            <NuxtLink to="/admin/items">Database Example</NuxtLink>
        </div>
        <div class="divider"></div>
        <div class="adminChild">
            <nuxt-child :key="$router.fullPath"></nuxt-child>      
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>