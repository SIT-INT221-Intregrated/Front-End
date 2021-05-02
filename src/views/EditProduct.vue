<template>

  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">

    <div class="border border-dashed border-white relative rounded-lg  rounded-lg lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <input type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50">
        <div class="text-center text-white p-10 absolute top-0 right-0 left-0 lg:mt-60">
          <h4>Drop files anywhere to upload<br/>or</h4>
          <p>Select Files</p>
        </div>
    </div>


      <div class="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-white text-2xl mb-1 font-medium title-font">
          <p><span>&#9997;&#127995;</span> Edit Products</p> 
        </h2>
      <form @submit.prevent="submitForm">
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-white">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model = "name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          <p v-if="invalidNameInput" class="text-red-500 text-sm">
                Please enter your name!
          </p>
        </div>

        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-white">Release Date</label><br>
          <label><input type="date" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/></label>
        </div>

        <div class="flex flex-row">
          <div class="relative mr-2 mb-4">
            <p class="text-white leading-7 text-sm">Brand</p>
            <div class="flex items-center">
              <div class="relative">
                <select 
                class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option class="hidden">Select...</option>
                  <option>Logitech</option>
                  <option>Nubwo</option>
                  <option>Razer</option>
                  <option>Fantech</option>
                  <option>Hyper X</option>
                  <option>Steelseries</option>
                </select>
                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div class="relative mb-4">
            <label for="text" class="leading-7 text-sm text-white">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="฿"
              v-model = "price"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              <p v-if="invalidPriceInput" class="text-red-500 text-sm">
                Please enter your price!
            </p>
          </div>
        </div>

        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-white">Description</label>
          <textarea
            id="message"
            name="message"
            v-model = "description"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            <p v-if="invalidDescriptionInput" class="text-red-500 text-sm">
                Please enter your description!
            </p>
        </div>

        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-white">Colors</label>
          <ul class="flex flex-row justify-center items-center">
            <li class="mr-4 last:mr-0">
              <span class="cursor-pointer block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <div class="block w-6 h-6 bg-black rounded-full" v-on:click="selectColor()">
                  <img src="../assets/check.svg" class="bg-white" v-if="select"/>
                </div>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span class="cursor-pointer block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <div class="block w-6 h-6 bg-white rounded-full" v-on:click="selectColor()">
                  <img src="../assets/check.svg" class="" v-if="select" />
                </div>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span class="cursor-pointer block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <div class="block w-6 h-6 bg-pink-300 rounded-full" v-on:click="selectColor()">
                  <img src="../assets/check.svg" class="" v-if="select" />
                </div>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span class="cursor-pointer block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <div class="block w-6 h-6 bg-red-500 rounded-full" v-on:click="selectColor()">
                  <img src="../assets/check.svg" class="" v-if="select" />
                </div>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span class="cursor-pointer block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <div class="block w-6 h-6 bg-blue-900 rounded-full" v-on:click="selectColor()">
                  <img src="../assets/check.svg" class="" v-if="select" />
                </div>
              </span>
            </li>
          </ul>
        </div>

        <div class="flex justify-center mt-8 px-2">
          <base-button class="ButtonSubmit focus:outline-none hover:bg-indigo-600" label="Submit"/>
          <base-button class="ButtonCancle focus:outline-none hover:bg-red-700" label="Reset"/>
        </div>
      </form>
      </div>
    </div>

  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  //   name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      select: false,
      name: '',
      price: '',
      description:'',
      invalidNameInput: false,
      invalidPriceInput: false,
      invalidDescriptionInput: false,
      
    };
  },
  methods: {
    selectColor() {
      this.select = !this.select;
    },
    submitForm() {
      this.invalidNameInput = this.name === '' ? true : false
      this.invalidPriceInput = this.name === '' ? true : false
      this.invalidDescriptionInput = this.description === '' ? true : false
      // if(this.invalidNameInput === false){
      // }
    },
  },
};
</script>