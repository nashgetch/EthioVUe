<template>
  <div>
    <div v-if="isIndex">
     <no-ssr placeholder="Loading ....">
       | {{ catName }}
     </no-ssr>
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
    }
  },
  data:function() {
    return {
      catName:"Loading.."
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
