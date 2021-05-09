<template>
  <div class="product mx-40 my-20">
    <div class="text-3xl mb-8">Product</div>
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
      deleteProduct: "http://172.18.0.4:3000/products",
      deleteImage: "http://172.18.0.4:3000/deleteFile",
      products: [],
      have: false,
    };
  },
  methods: {
    async fetchProduct() {
      const res = await fetch("http://172.18.0.4:3000/products");
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
