<template>
  <div id="nav" class="flex flex-row md:shadow-lg">
    <div class="w-20 bg-gray-300 text-center py-2">
      <router-link to="/">Home</router-link>
    </div>
    <div class="w-20 bg-gray-200 text-center py-2">
      <router-link to="/team">Team</router-link>
    </div>
    <div class="w-24 bg-gray-100 text-center py-2">
      <router-link to="/product">Product</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
*{
  /* font-family: 'Prompt', sans-serif; */
  font-family: 'Roboto', sans-serif; 
}
</style>

<script>
export default {

}
</script>
