<template>
  <div class="add max-w-lg mx-auto py-4">
    <h1>Edit Product</h1>
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
        v-model="des"
        placeholder="..."
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
      />

      <label for="date" class="leading-7 text-sm">Update Date: </label>
      <input
        type="date"
        id="date"
        name="date"
        v-model="date"
        placeholder=""
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out max-w-max"
      />
      <br />
      <label for="brand" class="leading-7 text-sm">Brand: </label>
      <div class="grid grid-cols-4">
        <div
          v-for="b in brands"
          :key="b.brandid"
          :value="b.brandid"
          class="flex"
        >
          <input
            type="radio"
            v-model="brand"
            id="brand"
            name="brand"
            :value="b.brandid"
            class=""
          />&nbsp;
          {{ b.brandname }}
        </div>
      </div>

      <label for="color" class="leading-7 text-sm">Color: </label>
      <div class="grid grid-cols-3">
        <div 
          v-for="c in colors"
          :key="c.colorid"
          :value="c.hexcode"
          class="flex"
        >
          <input
            id="xx"
            type="checkbox"
            v-model="color"
            name="color"
            :value="c"
          />
          &nbsp;
          <div
            class="select-none border-black border-2 w-5 h-5 rounded-full"
            :style="{ 'background-color': c.hexcode }"
          ></div>
          &nbsp;{{ c.colorname }}
        </div>
      </div>

      <label for="image" class="leading-7 text-sm">Image: </label>
      <input
        type="file"
        id="image"
        class="p-1 focus:outline-none rounded-md bg-gray-50"
        accept="image/png,image/jpeg"
        ref="image"
        @change="uploadImage"
        multiple
      />
      <br />
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
  props: [
    "prod"
  ],
  data() {
    return {
      brandUrl: "http://104.215.191.94:3000/brands",
      colorUrl: "http://104.215.191.94:3000/colors",
      productUrl: "http://104.215.191.94:3000/products",
      updateProduct: "http://104.215.191.94:3000/updateProduct",
      updateImage: "http://104.215.191.94:3000/updateimage",
      updateProductColor: "http://104.215.191.94:3000/updateColor",
      brands: [],
      colors: [],
      code: this.prod.productcode,
      name: this.prod.productname,
      price: this.prod.price,
      des: this.prod.productdescription,
      brand: this.prod.brands_brandid,
      date: this.prod.saledate,
      image: this.prod.images,
      color: [],
    };
  },
  methods: {
    // addCheckedAttr(){
    //   console.log(this.colors)
    //   console.log(this.prod.productcolors)
    //   for (let i = 0; i < this.colors.length; i++) {
    //     for (let j = 0; j < this.prod.productcolors.length; j++) {
    //       if (this.colors[i].colorid == this.prod.productcolors[j].colorid) {
    //         console.log(this.colors[i].colorid)
    //         console.log(this.prod.productcolors[j].colorid)
    //         const x = document.getElementById("xx")
    //         console.log(x)
    //         x.setAttribute("checked");
    //         }
    //     }
    //   }
    // },
    submitForm() {
      if (this.image !== this.prod.images) 
      {
        this.editProduct2({
          code: this.code,
          name: this.name,
          price: this.price,
          des: this.des,
          brand: this.brand,
          date: this.date,
          image: this.image.name,
        });
        this.editProductColors(this.color)
      } else {
        this.editProduct1({
          code: this.code,
          name: this.name,
          price: this.price,
          des: this.des,
          brand: this.brand,
          date: this.date,
          image: this.image
        });
        this.editProductColors(this.color)
      }
      
      
      
    },
    async editProduct1(oldProduct) {
      console.log("Edit Page:" + oldProduct)
      let pro = {
        productcode: oldProduct.code,
        productname: oldProduct.name,
        productdescription: oldProduct.des,
        price: oldProduct.price,
        saledate: oldProduct.date,
        brands_brandid: oldProduct.brand,
        images: oldProduct.image,
      };
      let productJson = JSON.stringify(pro);
      

      fetch(`${this.updateProduct}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: productJson,
      });


      this.$router.push("/");
    },
    async editProduct2(oldProduct) {
      console.log("Edit Page:" + oldProduct)
      let formData = new FormData();
      let pro = {
        productcode: oldProduct.code,
        productname: oldProduct.name,
        productdescription: oldProduct.des,
        price: oldProduct.price,
        saledate: oldProduct.date,
        brands_brandid: oldProduct.brand,
        images: oldProduct.image,
      };
      let productJson = JSON.stringify(pro);
      console.log(productJson)
      formData.append("file", this.image,this.image.name);

      fetch(`${this.updateImage}/${this.code}`, {
        method: "PUT",
        body: formData,
      });
      fetch(`${this.updateProduct}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: productJson,
      });


      this.$router.push("/");
    },
    uploadImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    async editProductColors(color){
      let productColorJson = JSON.stringify(color);
      console.log(productColorJson)
      fetch(`${this.updateProductColor}/${this.code}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: productColorJson,
      });
    },
    

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