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
        class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-16 w-40"
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
          <input type="checkbox" id="color" name="color" :value="color.colorid" class=""/>&nbsp;
          <div class="select-none border-black border-2 w-5 h-5 rounded-full" :style="{ 'background-color': color.hexcode }"></div>
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
      brandUrl: "http://localhost:3000/brands",
      colorUrl: "http://localhost:3000/colors",
      productUrl: "http://localhost:3000/products",
      brands: [],
      colors: [],
      result: [],
      name: '',
      price: '',
      des: '',
      brand: '',
      date: '',
      image: '',
      selectedColor: [],
      invalidName: false,
      invalidPrice: false,
      invalidDes: false,
      invalidBrand: false,
      invalidDate: false,
      invalidImage: false,
      invalidColor: false,
      
    };
  },
  methods: {
    submitForm(){
      this.invalidName = this.name === "" ? true : false;
      this.invalidPrice = this.price === "" ? true : false;
      this.invalidDes = this.des === "" ? true : false;
      this.invalidBrand = this.brand === "" ? true : false;
      this.invalidDate = this.date === "" ? true : false;
      this.invalidImage = this.image === "" ? true : false;
      this.invalidColor = this.selectedColor === [] ? true : false;

      console.log(`name: ${this.name}`)
      console.log(`invalid name: ${this.invalidName}`)
      console.log(`price: ${this.price}`)
      console.log(`invalid price: ${this.invalidPrice}`)
      console.log(`des: ${this.des}`)
      console.log(`invalid des: ${this.invalidDes}`)
      console.log(`brand: ${this.brand}`)
      console.log(`invalid brand: ${this.invalidBrand}`)
      console.log(`date: ${this.date}`)
      console.log(`invalid date: ${this.invalidDate}`)
      console.log(`image: ${this.image}`)
      console.log(`invalid image: ${this.invalidImage}`)
      console.log(`color: ${this.selectedColor}`)
      console.log(`invalid color: ${this.invalidColor}`)

      if(this.name !== "" && this.price !== "" && this.des !== "" && this.brand !== "" && this.date !== "" && this.image !== "" && this.color !== ""){
        this.addProduct({
          name: this.name,
          price: this.price,
          des: this.des,
          brand: this.brand,
          date: this.date,
          image: this.image,
          color: this.color
        });
      }
    },
    // async addProduct(newProduct){
    //   try {
    //     const res = await fetch(this.productUrl, {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json"
    //       },
    //       body: JSON.stringify({
            
    //       })
    //     });
    //     const data = await res.json();
    //     this.result = [...this.result, data];
    //     location.reload();
    //   }catch (error) {
    //     console.log(`Cannot add product!: ${error}`);
    //   }
    // },
    async fetchBrand() {
      const res = await fetch(this.brandUrl);
      const data = await res.json();
      return data;
    },
    async fetchColor() {
      const res = await fetch(this.colorUrl);
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