<template>
  <div style="margin-top: 6rem; position: relative;">
    <div id="processing" class="text-center" style="background-color: white; font-weight:500; font-size: 35px;">
       Search Results
    </div>
    <div class="container parentDiv">
      <div class="row display-flex">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
          v-for="(video, $index) in search_results"
          :key="$index"
        >
          <div class="kaleb-vids">
            <div class="Vimg itemContainer bg-inverse">
              <a :href="'/single-video/' + video.v_id">
                <clazy-load :src="'//video2.vixtream.net/'+video.filename">
                  <div
                    slot="placeholder"
                    class="bg-inverse"
                    style="background-color: black; height:143px;"
                  ></div>
                  <video :poster="'//video2.vixtream.net/'+video.filename" :alt="video.title"></video>
                </clazy-load>
                <div class="play">
                  <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                </div>
              </a>
              <div class="time">{{video.duration}}</div>
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
            </div> -->
             <ViewCatogs :vid="video.v_id"
             :cat_id="video.category_id" :created_at="video.created_at"
             :isIndex="true" :title_en="video.title_en" :view_count="video.view_count" />
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
          content:
            "Search Results"
        }
      ]
    };
  },
components: {
    ViewCatogs,
  },
  asyncData(context) {
    return axios
      .post(base_url + "/translate/" + context.params.ser)
      .then(res => {
        return { search_results: [...res.data] };
      });
  }
};
</script>
