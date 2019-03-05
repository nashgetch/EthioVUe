<template>
  <div class="container parentDiv">
    <div class="row display-flex">
      <!-- :class="{'gray': Channel.category_id == 22 || Channel.category_id == 24 || Channel.category_id == 27}" -->
      <div
        class="col-12 col-sm-6 col-md-3 col-lg-2 videoitem kygo"
        v-for="(video,$index) in videos"
        :key="$index"
      >
        <div class="kaleb-vids">
          <div class="Vimg itemContainer bg-inverse">
            <a :href="'/single-video/'+video.v_id">
              <clazy-load :src="'//video2.vixtream.net/'+video.filename">
                <div
                  slot="placeholder"
                  class="bg-inverse"
                  style="background-color: black; height:102px;"
                ></div>
                <video :poster="'https://video2.vixtream.net/'+video.filename2" :alt="video.title"></video>
              </clazy-load>
              <div ng-click="viewVideo(video.v_id)" class="play">
                <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
              </div>
            </a>
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
            <h1 style="font-size: 14px !important;">
              <a
                style="color: #2e2e2e; text-decoration: none;"
                class="text"
                :aria-label="video.title"
                :title="video.title"
              >{{video.title}}</a>
              <a
                class="text smallFont"
                style="color: #2e2e2e; text-decoration: none;"
                :aria-label="video.title_en"
                :title="video.title_en"
              >{{video.title_en}}</a>
            </h1>
          </div>
          <div class="views small">
            <small
              class="text-center"
              style="font-weight: bold; color: #7e7e7e; font-size: 12px; margin-left: 4px"
            >
              <i class="fa fa-eye" style="color: #d59541;"></i>
              {{video.view_count}} views
              <i
                class="fa fa-dot-circle-o"
                style="color: #d59541;"
              ></i>
              {{video.created_at | moment("from", "now")}}
            </small>
            <!-- <div class="percent"> -->
            <!--    </clazy-load><span class="circle"></span> -->
            <!-- {{ video.created_at }} -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ViewCatogs from "@/components/views_catogs";
const base_url = "https://ethiov.com/api/";
export default {
  components: {
    ViewCatogs
  },
  props: {
    Channel: {
      type: Object
    }
  },

  data() {
    return {
      videos: []
    };
  },
  mounted() {
    console.log(this.Channel.category_id);
    axios
      .post(base_url + "cat_videos/", {
        cat: this.Channel.category_id
      })
      .then(res => (this.videos = res.data));
  }
};
</script>
<style>
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 12px; /* fallback */
  max-height: 25px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
}
.kygo {
  padding-left: 4px;
  padding-right: 4px;
}
.kalusha {
  color: #fbe631;
  background-color: black;
  width: 276px;
}
.gray {
  background-color: #f7f7f7;
  padding-left: 0px;
  padding-right: 0px;
  padding: 0 !important;
}
</style>
