<template>
  <div class="">
    <div class="">
      <div class="">
        <div class="" v-if="!$store.state.user">
          <LoginForm />
        </div>
        <div class="" v-else>
          <h4 class="">You're logged in.</h4>
          <button>Thumbs up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
</style>