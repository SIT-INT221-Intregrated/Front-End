<template>
  <div class="product xl:mx-32 xl:my-20 md:mx-14 md:my-5 mx-8 my-5">
    <div class="xl:text-3xl xl:mb-8 md:text-2xl md:mb-6">Product</div>
    <base-card :products="products" @remove-product="removeProduct" @edit-product="editProduct"></base-card>
  </div>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  props: {
    // edit
  },
  data() {
    return {
      deleteProduct: "http://52.237.118.146:3000/products",
      deleteImage: "http://52.237.118.146:3000/deleteFile",
      products: [],
      have: false,
    };
  },
  methods: {
    async fetchProduct() {
      const res = await fetch("http://52.237.118.146:3000/products");
      const data = await res.json();
      return data;
    },
    async removeProduct(product) {
      console.log("Product: "+ product);
      await fetch(`${this.deleteProduct}/${product.productcode}`, {
        method: "DELETE",
      });
      await fetch(`${this.deleteImage}/${product.images}`, {
        method: "DELETE",
      });
      location.reload();
    },
    async editProduct(object) {
      console.log("Product:" + object)
      this.$emit("edit", object)
    },
  },
  async created() {
    this.products = await this.fetchProduct();
  },
};
</script>
