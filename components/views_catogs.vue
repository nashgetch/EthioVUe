<template>
  <div>
    <div v-if="isIndex">
      <i class="fa fa-language" @click="show_en=!show_en"></i>
      <h1 v-show="show_en" style="font-size: 14px !important;">
        <a class="hideOverflow" :aria-label="title_en" :title="title_en">{{title_en}}</a>
      </h1>
      | {{ catName }}
    </div>
    <div v-if="isSingle">
      <i class="fa fa-language fa-2x mt-2" @click="show_en=!show_en"></i>
      <h1 v-show="show_en" style="font-size: 14px !important;">
        <!-- <a class="hideOverflow" :aria-label="title_en+' '+title_am_ph" :title="title_en + ' '+ title_am_ph">{{title_en+" || " +title_am_ph}}</a> -->
      </h1>
    </div>

    <no-ssr placeholder="Loading ..." v-if="!isIndex && !isSingle">
      <div class="views">views</div>
      <div class="percent">
        <span class="circle"></span>
        {{ catName }}
      </div>
    </no-ssr>
  </div>
</template>

<script>
import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {
  props: {
    vid: {
      type: String,
      required: true
    },
    cat_id: {
      type: Number,
      required: true
    },
    isIndex: {
      type: Boolean,
      default: false
    },
    title_en: {
      type: String
    },
    title_am_ph:{
      type:String
    },
    title_am: {
      type: String
    },
    isSingle: {
      type: Boolean
    }
  },
  data: function() {
    return {
      catName: "Loading..",
      show_en: false
    };
  },
  mounted: function() {
    // axios.post(base_url+"/return_view/" + this.vid).then(res => {
    //   return (this.views = res.data);
    // });
    if (!this.isSingle) {
      axios.post(base_url + "/return_cat/" + this.cat_id).then(res => {
        return (this.catName = res.data[0].category_name);
      });
    }
  }
};
</script>
