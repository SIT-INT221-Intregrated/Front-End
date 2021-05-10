<template>
  <div class="xl:max-w-lg md:mx-auto max-w-sm mx-4 py-4">
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
      <div v-if="this.invalidName" class="text-red-600 font-normal text-sm">Please enter product name !!</div>

      <label for="price" class="leading-7 text-sm">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        v-model="price"
        placeholder="฿"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <div v-if="this.invalidPrice" class="text-red-600 font-normal text-sm">Please enter price !!</div>

      <label for="description" class="leading-7 text-sm">Description</label>
      <textarea
        type="text"
        id="description"
        name="description"
        v-model="des"
        placeholder="..."
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
      />
      <div v-if="this.invalidDes" class="text-red-600 font-normal text-sm">Please enter product description !!</div>

      <label for="date" class="leading-7 text-sm">Update Date: </label>
      <input
        type="date"
        id="date"
        name="date"
        v-model="date"
        placeholder=""
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out max-w-max"
      />
      <div v-if="this.invalidDate" class="text-red-600 font-normal text-sm">Please enter update date !!</div>

      <div><label for="brand" class="leading-7 text-sm">Brand: </label></div>
      <div class="md:grid md:grid-cols-4 inline-flex gap-1">
        <div
          v-for="b in brands"
          :key="b.brandid"
          :value="b.brandid"
          class="flex text-xs md:text-sm"
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
      <div v-if="this.invalidBrand" class="text-red-600 font-normal text-sm">Please select product brand !!</div>

      <label for="color" class="leading-7 text-sm">Color: </label>
      <div class="grid grid-cols-3">
        <div 
          v-for="c in colors"
          :key="c.colorid"
          :value="c.hexcode"
          class="flex md:text-sm text-xs"
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
            class="select-none border-black border-2 xl:w-5 xl:h-5 md:w-4 md:h-4 w-3 h-3 rounded-full"
            :style="{ 'background-color': c.hexcode }"
          ></div>
          &nbsp;{{ c.colorname }}
        </div>
      </div>
      <div v-if="this.invalidColor" class="text-red-600 font-normal text-sm">Please choose product color !!</div>

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
      <div v-if="this.invalidImage" class="text-red-600 font-normal text-sm">Please choose product image !!</div>

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
      brandUrl: "http://52.237.118.146:3000/brands",
      colorUrl: "http://52.237.118.146:3000/colors",
      productUrl: "http://52.237.118.146:3000/products",
      updateProduct: "http://52.237.118.146:3000/updateProduct",
      updateImage: "http://52.237.118.146:3000/updateimage",
      updateProductColor: "http://52.237.118.146:3000/updateColor",
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
      this.invalidName = this.name === "" ? true : false;
      this.invalidPrice = this.price === "" ? true : false;
      this.invalidDes = this.des === "" ? true : false;
      this.invalidBrand = this.brand === "" ? true : false;
      this.invalidDate = this.date === "" ? true : false;
      this.invalidImage = this.image === null ? true : false;
      this.invalidColor = this.color.length === 0 ? true : false;

      if (
        this.name !== "" &&
        this.price !== "" &&
        this.des !== "" &&
        this.brand !== "" &&
        this.date !== "" &&
        this.color.length !== 0 &&
        this.image !== this.prod.images) 
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