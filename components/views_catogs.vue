<template>
  <div>
    <div v-if="isIndex">
      <i class="fa fa-language" @click="show_en=!show_en">

      </i> <h1 v-show="show_en" style="font-size: 14px !important;"><a
                  class="hideOverflow"
                  :aria-label="title_en"
                  :title="title_en"
                >{{title_en}}</a></h1> | {{ catName }}
    </div>
    <no-ssr placeholder="Loading ..." v-else>
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
    cat_id:{
      type: Number,
      required: true,
    },
    isIndex:{
      type:Boolean,
      default:false
    },
    title_en:{
      type:String
    },
    title_am:{
      type:String
    }
  },
  data:function() {
    return {
      catName:"Loading..",
      show_en:false
    };
  },
  mounted: function() {
    // axios.post(base_url+"/return_view/" + this.vid).then(res => {
    //   return (this.views = res.data);
    // });
    axios.post(base_url+"/return_cat/" + this.cat_id).then(res=>{
        return this.catName =res.data[0].category_name;
    })
  }
};
</script>
