<template>
  <div>
    <div v-if="isIndex">
      <i class="fa fa-language" @click="show_en=!show_en" style="font-size: 19px;color: #d59541;"></i>
      <!-- <h1 v-show="show_en" style="font-size: 10px !important;">
        <a
          :href="'/single-video/' + vid"
          class="hideOverflow"
          :aria-label="title_en"
          :title="title_en"
        >{{title_en}}</a>
      </h1> -->
      <!-- <small style="font-size: 12px; color: white;">
        <i class="fa fa-angle-double-right" style="color: #d59541;"></i>
        <span
          style="background-color: #f79100;color: #353738;
                 font-weight: bold;
                 font-family: serif;"
        >{{ type.toUpperCase() }}</span>
      </small> -->
      <!-- <br class="d-none d-lg-block"> -->
      <small style="font-weight: bold; color: #7e7e7e; font-size: 12px; margin-left: 4px">
        <i class="fa fa-eye" style="color: #d59541;"></i>
        {{view_count}} views
        <i class="fa fa-dot-circle-o" style="color: #d59541;"></i>
        {{created_at | moment("from", "now")}}
      </small>
    </div>
    <div v-if="isSingle">
      <i class="fa fa-language fa-2x mt-2" style="color: #d59541" @click="show_en=!show_en"></i>
      <h1 v-show="show_en" style="font-size: 14px !important;">
        <!-- <a
          class="hideOverflow"
          :aria-label="title_en+' '+title_am_ph"
          :title="title_en + ' '+ title_am_ph"
        >{{title_en+" || " +title_am_ph}}</a> -->
      </h1>
    </div>

    <no-ssr placeholder="Loading ..." v-if="!isIndex && !isSingle">
      <!-- <small style="color: #7e7e7e; font-size: 12px; font-weight: bold;">
        <i class="fa fa-angle-double-right" style="color: #d59541;"></i>
        <span
          style="color: #353738;font-weight: bold;
          font-family: serif; background-color: #f79100;"
        >{{ type.toUpperCase() }}</span>
      </small> -->
      <small style="color: #7e7e7e; font-size: 12px; font-weight: 300">
        <i class="fa fa-eye" style="color: #d59541"></i>
        {{view_count}} views
        <i class="fa fa-dot-circle-o" style="color: #d59541"></i>
        {{created_at | moment("from", "now")}}
      </small>
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
      type: Number
    },
    isIndex: {
      type: Boolean,
      default: false
    },
    title_en: {
      type: String
    },
    title_am_ph: {
      type: String
    },
    title_am: {
      type: String
    },
    isSingle: {
      type: Boolean
    },
    created_at: {
      type: String
    },
    view_count: {
      type: Number
    },
    type: {
      type: String
    }
  },

  data: function() {
    return {
      catName: "",
      show_en: false
    };
  },
  mounted: function() {
    // axios.post(base_url + "/return_view/" + this.vid).then(res => {
    //   return (this.views = res.data);
    // });
    // if (!this.isSingle && this.cat_id) {
    //   axios.post(base_url + "/return_cat/" + this.cat_id).then(res => {
    //     return (this.catName = res.data[0].category_name);
    //   });
    // }
  }
};
</script>
<style>
.nashians {
  width: 320px !important;
  height: 100px !important;
}
@media (min-width: 500px) {
  .nashians {
    width: 468px !important;
    height: 60px !important;
  }
}
@media (min-width: 800px) {
  .nashians {
    width: 728px !important;
    height: 90px !important;
  }
}
</style>
