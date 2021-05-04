<template>
  <div class="add max-w-lg mx-auto py-4">
    <hi>Add New Product</hi>
    <form @submit.prevent="submitForm">
      <label for="name" class="leading-7 text-sm">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        v-model="name"
        placeholder=""
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <label for="price" class="leading-7 text-sm">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        v-model="price"
        placeholder="฿"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <label for="description" class="leading-7 text-sm">Description</label>
      <textarea
        type="text"
        id="description"
        name="description"
        v-model="description"
        placeholder="..."
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
      />
      <label for="brand" class="leading-7 text-sm"
        >Brand:
      </label>
      <select
        name="brand"
        id="brand"
        class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-16"
      >
        <option class="hidden" value="Select">Select...</option>
        <option
          v-for="brand in brands"
          :key="brand.brandid"
          :value="brand.brandname"
        >
          {{ brand.brandname }}
        </option>
      </select>
      <label for="date" class="leading-7 text-sm ml-2.5">Update Date: </label>
      <input
        type="date"
        id="date"
        name="date"
        v-model="date"
        placeholder="$"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out max-w-max"
      />

      <label for="color" class="leading-7 text-sm">Color: </label>
      <div class="grid grid-cols-3">
        <div
          v-for="color in colors"
          :key="color.colorid"
          :value="color.hexcode"
          class="flex"
        >
          <input type="checkbox" :value="color.hexcode" class=""/>&nbsp;
          <div
            class="select-none border-black border-2 w-5 h-5 rounded-full"
            :style="{ 'background-color': color.hexcode }"
          ></div>
          &nbsp;{{ color.colorname }}
        </div>
      </div>
      <label for="image" class="leading-7 text-sm">Image: </label>
      <input type="file" id="image" multiple class="" value="" />
      <br>
      <div class="flex justify-end">
      <click-button
        class="ButtonSubmit focus:outline-none bg-yellow-500 rounded-full p-1.5"
        label="Submit"
      />
      </div>
    </form>
  </div>
</template>

<script>
import ClickButton from "../components/ClickButton.vue";
export default {
  components: {
    ClickButton,
  },
  data() {
    return {
      url: "http://localhost:3000/brands",
      brands: [],
      colors: [],
    };
  },
  methods: {
    async fetchBrand() {
      const res = await fetch("http://localhost:3000/brands");
      const data = await res.json();
      return data;
    },
    async fetchColor() {
      const res = await fetch("http://localhost:3000/colors");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.brands = await this.fetchBrand();
    this.colors = await this.fetchColor();
  },
};
</script>