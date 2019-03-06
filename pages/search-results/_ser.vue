<template>
  <div style="margin-top: 6rem; position: relative;">
    <div class="container parentDiv">
      <span class="title">Search Results...</span>
      <hr>
      <div class="row display-flex">
        <div
          class="col-12 col-sm-6 col-md-3 col-lg-2 videoitem kygo"
          v-for="(video, $index) in search_results"
          :key="$index"
        >
          <div class="kaleb-vids">
            <div class="Vimg itemContainer bg-inverse">
              <nuxt-link :to="'/single-video/' + video.v_id">

                  <img v-lazy="'//video2.vixtream.net/'+video.filename" :alt="video.title">

                <div class="play">
                  <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                </div>
              </nuxt-link>
              <div class="time">{{video.duration}}</div>
              <div
                ng-style="hiddenPlus"
                v-if="loggedIn"
                class="nashh"
                @click="add_to_watchlist(user.id, video.v_id)"
              >
                <i class="fa fa-plus"></i>
              </div>
              <div class="nashhh">{{video.type.toUpperCase()}}</div>
            </div>
            <div class="descr">
              <a class="hideOverflow" :href="'/single-video/' + video.v_id">{{video.title}}</a>
            </div>
            <!-- <div class="views">
              {{video.view_count}} views.
              <span class="percent">
                <span class="circle"></span>
                {{video.created_at}}
              </span>
            </div>-->
            <ViewCatogs
              :vid="video.v_id"
              :cat_id="video.category_id"
              :created_at="video.created_at"
              :isIndex="true"
              :title_en="video.title_en"
              :view_count="video.view_count"
              :type="video.type"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ViewCatogs from "@/components/views_catogs";
const base_url = "https://ethiov.com/api";
export default {
  head() {
    return {
      title: "Search Results",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Search Results"
        }
      ]
    };
  },
  components: {
    ViewCatogs
  },
  methods: {
    urldecode(text) {
      return decodeURIComponent((text + "").replace(/\+/g, "%20"));
    }
  },

  asyncData(context) {
    return axios
      .post(base_url + "/translate/" + encodeURIComponent(context.params.ser))
      .then(res => {
        return { search_results: [...res.data] };
      });
  }
};
</script>
<style>
.kygo {
  padding-left: 4px !important;
  padding-right: 4px !important;
}
</style>
