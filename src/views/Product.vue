<template>
  <div class="product mx-40 my-20">
    <div class="text-3xl mb-8">Product</div>
    <base-card :brandList="brandList"></base-card>
  </div>
</template>

<script>

import BaseCard from "../components/BaseCard.vue";
export default {
  components: {
    BaseCard
  },
  data() {
    return {
      dataLink: "http://localhost/Brand/api/brand",
      brandList:[],
      have: false
    };
  },
  methods:{
    async fetchBrand(){
      const res = await fetch("http://localhost/Brand/api/brand")
      const data = await res.json();
      return data
    }
  },
  async created(){
      this.brandList =  await this.fetchBrand();
    }
}
</script>
