<template>
  <div
    v-for="product in products"
    :key="product.productcode"
    class="flex gap-4"
  >
    <div>
      <img :src="`http://localhost:3000/Files/${product.images}`" class="w-60 h-60 object-cover" />
    </div>
    <div class="flex flex-col">
      <div class="text-xl">{{ product.productname }}</div>
      <div v-for="brand in product" :key="brand.brandid">
        <div class="text-gray-300 text-sm">{{ brand.brandname }}</div>
      </div>
      <div class="">
        Description: {{ product.productdescription }}
        <span class="text-gray-300 text-xs"
          >( Last Update: {{ product.saledate }} )</span
        >
      </div>
      <div
        v-for="color in product.productcolors"
        :key="color.colorId"
        class="w-5 h-5"
      >
        <div
          class="select-none border-black border-2 w-5 h-5 rounded-full"
          :style="{ 'background-color': color.hexcode }"
        ></div>
      </div>
      <div class="">Price: ฿{{ product.price }}</div>

      <!-- Button -->
      <div class="flex flex-row justify-end gap-8">
        <router-link to="/edit">
          <click-button
            class="ButtonEdit focus:outline-none bg-green-300 select-none"
            label="EDIT"
            @click="editProduct(product)"
          ></click-button>
        </router-link>
        <click-button
          class="ButtonDelete focus:outline-none bg-red-300 select-none"
          label="DELETE"
          @click="removeProduct(product.productcode)"
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
  emits: [
    "edit-product",
    "remove-product"
  ],
  data() {
    return {
      url: "http://localhost:3000/products",
    };
  },
  methods: {
    async editProduct(edit) {
      console.log("BaseCard-EditId: " + edit.productcode);
      this.$emit("edit-product", edit);
    },
    async removeProduct(deleteId) {
      console.log("BaseCard-DeleteId: " + deleteId);
      this.$emit("remove-product", deleteId);
    },
  },
};
</script>