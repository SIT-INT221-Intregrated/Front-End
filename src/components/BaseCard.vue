<template>
  <div class="flex">
    <!-- <div>
      <img
        src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c1a62c5b-36ae-4b5f-89d2-69e2a245815d/custom-nike-air-force-1-by-you.png"
        class="w-60"
      />
    </div>
    <div class="flex flex-col">
      <div class="text-xl">Nike Air Force 1 Low By You</div>
      <div class="text-gray-300 text-sm">Nike</div>
      <div class="">
        Description: From high-top to low-top. Live the legend of the Air Force
        1, modernized for ultimate street style.
        <span class="text-gray-300 text-xs">( Last Update: 28-01-21 )</span>
      </div>
      <div> -->
        <!-- Use v-for -->
        <!-- <i class="material-icons">circle</i>
      </div>
      <div class="">Price: $4200</div>
      <div class="flex flex-row justify-end gap-8">
        <click-button
          class="ButtonEdit focus:outline-none bg-green-300 select-none"
          label="EDIT"
        ></click-button>
        <click-button
          class="ButtonDelete focus:outline-none bg-red-300 select-none"
          label="DELETE"
        ></click-button>
      </div>
    </div> -->
    <div v-for="b in brandList" :key="b.brandid">
      <p>{{ b.brandid }}</p>
      <p>{{ b.brandname }}</p>
      <click-button
          class="ButtonEdit focus:outline-none bg-green-300 select-none"
          label="EDIT"
        ></click-button>
        <click-button
          class="ButtonDelete focus:outline-none bg-red-300 select-none"
          label="DELETE"
        ></click-button>
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
    brandList: {
      type: Array,
      require: true,
    }
  },
  data() {
    return {
    }
  }
};
</script>