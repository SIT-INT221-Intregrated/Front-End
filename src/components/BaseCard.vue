<template>
  <div v-for="product in products" :key="product.productcode" class="">
    <div>
      <img src="" class="w-60" />
    </div>
    <div class="flex flex-col">
      <div class="text-xl">{{ product.productname }}</div>
      <div v-for="brand in product" :key="brand.brandid">
        <div class="text-gray-300 text-sm">{{ brand.brandname }}</div>
      </div>
      <div class="">
        Description: {{ product.productdescription }}
        <span class="text-gray-300 text-xs"
          >( Last Update: {{ product.saleDate }} )</span
        >
      </div>
      <!-- <div v-for="brand in product" :key="brand.brandid">
        <div v-for="color in brand" :key="color.colorId" class="">
          <i class="material-icons flex" :style="{'color': color.hexcode}">circle</i>
        </div>
      </div> -->
      <div class="">Price: ${{ product.price }}</div>

      <!-- Button -->
      <div class="flex flex-row justify-end gap-8">
        <click-button
          class="ButtonEdit focus:outline-none bg-green-300 select-none"
          label="EDIT"
        ></click-button>
        <click-button
          class="ButtonDelete focus:outline-none bg-red-300 select-none"
          label="DELETE" @click="removeProduct(product.productcode)"
        ></click-button>
      </div>
    </div>
  </div>
</template>

<script>
import ClickButton from "../components/ClickButton.vue";
export default {
  components: {
    ClickButton,
  },
  props: {
    products: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      url: "http://localhost:3000/products",
    };
  },
  methods: {
    async removeProduct(deleteId){
      console.log("BaseCard: "+deleteId);
      this.$emit("remove-product",deleteId);
    }
  },
};
</script>