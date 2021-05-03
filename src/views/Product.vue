<template>
  <div class="product mx-40 my-20">
    <div class="text-3xl mb-8">Product</div>
    <base-card :products="products" @remove-product="removeProduct"></base-card>
  </div>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      url: "http://localhost:3000/products",
      products: [],
      have: false,
    };
  },
  methods: {
    async fetchProduct() {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      return data;
    },
    async removeProduct(id) {
      console.log("Product: "+id);
      const res = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      res.status === 200
        ? (this.products = this.products.filter((p) => p.productcode !== id))
        : alert("Error to Delete");
    },
  },
  async created() {
    this.products = await this.fetchProduct();
  },
};
</script>
