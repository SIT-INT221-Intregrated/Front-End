<template>
  <div
    v-for="product in products"
    :key="product.productcode"
    class="md:grid xl:grid-cols-4 md:grid-cols-3 md:gap-4"
  >
    <div>
      <img :src="`http://52.237.118.146:3000/Files/${product.images}`" class="md:w-80" />
    </div>
    <div class="xl:flex xl:flex-col xl:col-span-3 md:col-span-2">
      <div class="md:text-xl text-lg">{{ product.productname }}</div>
      <div class="text-gray-300 md:text-sm text-xs">{{ product.brands_brandname }}</div>
      <div class="md:text-lg text-base">
        Description: {{ product.productdescription }}
        <span class="text-gray-300 text-xs"
          >( Last Update: {{ product.saledate }} )</span
        >
      </div>
      <div
        v-for="color in product.productcolors"
        :key="color.colorId"
        class="xl:w-5 xl:h-5 md:w-4 md:h-4 w-3 h-3 inline-flex"
      >
        <div
          class="select-none border-black border-2 xl:w-5 xl:h-5 md:w-4 md:h-4 w-3 h-3 rounded-full"
          :style="{ 'background-color': color.hexcode }"
        ></div>
      </div>
      <div class="">Price: ฿{{ product.price }}</div>

      <!-- Button -->
      <div class="flex flex-row justify-end xl:gap-8 md:gap-6 gap-4">
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
          @click="removeProduct(product)"
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
      url: "http://52.237.118.146:3000/products",
    };
  },
  methods: {
    async editProduct(edit) {
      console.log("BaseCard-EditId: " + edit.productcode);
      this.$emit("edit-product", edit);
    },
    async removeProduct(deletes) {
      console.log("BaseCard-DeleteId: " + deletes.productcode);
      this.$emit("remove-product", deletes);
    },
  },
};
</script>