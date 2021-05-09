<template>
  <div id="nav" class="grid grid-cols-2 md:shadow-lg select-none">
    <div class="flex flex-row">
      <div class="w-20 bg-gray-300 text-center py-2">
        <router-link to="/">Product</router-link>
      </div>
      <div class="w-20 bg-gray-200 text-center py-2">
        <router-link to="/team">Team</router-link>
      </div>
    </div>
    <div class="place-self-end">
      <div class="w-24 bg-gray-100 text-center py-2">
        <router-link to="/add">AddProduct</router-link>
      </div>
    </div>
  </div>
  <router-view  @edit="editProduct" :prod="product"/>
</template>

<style>
* {
  /* font-family: 'Prompt', sans-serif; */
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}
</style>

<script>
export default {
  data(){
    return {
      product: []
    }
  },
  methods: {
    editProduct(product) {
      this.product = product
    }
  }
};
</script>
