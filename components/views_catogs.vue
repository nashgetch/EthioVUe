<template>
  <div>
    <div v-if="isIndex">
      <i class="fa fa-language" @click="show_en=!show_en" style="font-size: 23px;"></i>
      <h1 v-show="show_en" style="font-size: 10px !important;">
        <a class="hideOverflow" :aria-label="title_en" :title="title_en">{{title_en}}</a>
      </h1>
      <small style="font-size: 12px; color: black;">{{ catName }}</small>
      <br>
      <small style="color: #7e7e7e; font-size: 13px;">
        <i class="fa fa-eye"></i>
        {{view_count}} views
        {{created_at | moment("from", "now")}}
      </small>
    </div>
    <div v-if="isSingle">
      <i class="fa fa-language fa-2x mt-2" @click="show_en=!show_en"></i>
      <h1 v-show="show_en" style="font-size: 14px !important;">
        <a
          class="hideOverflow"
          :aria-label="title_en+' '+title_am_ph"
          :title="title_en + ' '+ title_am_ph"
        >{{title_en+" || " +title_am_ph}}</a>
      </h1>
    </div>

    <no-ssr placeholder="Loading ..." v-if="!isIndex && !isSingle">
      <small style="color: #7e7e7e; font-size: 13px;">
        <i class="fa fa-eye"></i>
        {{view_count}} views
      </small>

      <small style="font-weight: bold; color: #7e7e7e; font-size: 13px;">{{ catName }}</small>
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
    }
  },

  data: function() {
    return {
      catName: "",
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
