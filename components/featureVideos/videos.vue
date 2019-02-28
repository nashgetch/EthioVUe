<template>
  <div style="">
    <div class="row justify-content-md-center">
      <div class="col-lg-6">
        <div class="title-section text-center">
          <h2 class="title-line">Recent Videos from Our Featured Channels...</h2>
          <p>Up-to-Date News, Sports, Documentary, Current Affairs, Religious, Travel and Other Topics From all Ethiopian Channels</p>
        </div>
      </div>
    </div>
    <div class="row display-flex" style="margin-top: 2px;">
      <div
        class="col-12 col-sm-6 col-md-3 col-lg-2 videoitem kygo"
        v-for="(video,$index) in featured"
        :key="$index"
      >
        <div class="kaleb-vids">
          <div class="Vimg itemContainer" style="background-color: black;">
            <a :href="'/single-video/'+video.v_id">
              <!-- <clazy-load :src="'//video2.vixtream.net/'+video.filename">
                  <div
                        slot="placeholder"
                        class="bg-inverse"
                        style="background-color: black; height:145px;"
                      >
              You can put any component you want in here.-->
              <!-- </div> -->
              <img :src="'//video2.vixtream.net/'+video.filename" :alt="video.title">
              <div ng-click="viewVideo(video.v_id)" class="play">
                <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
              </div>
              <!-- </clazy-load> -->
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
          <div class="descr main" ng-click="viewVideo(video.v_id)">
            <h1 style="font-size: 14px !important;">
              <a class="text" :aria-label="video.title" :title="video.title">{{video.title}}</a>
              <a
                class="text smallFont"
                :href="'/single-video/' + video.v_id"
                :aria-label="video.title_en"
                :title="video.title_en"
              >{{video.title_en}}</a>
            </h1>
            <!-- <h1 v-show="engshow(video.v_id)" style="font-size: 14px !important;"><a
                  class="hideOverflow"
                  :aria-label="video.title"
                  :title="video.title_en"
            >{{video.title_en}}</a></h1>-->
          </div>
          <!-- <div class="views calvin"> -->
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
          <!-- </div> -->
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import axios from "axios";
// import ViewCatogs from "@/components/views_catogs";
const base_url = "https://ethiov.com/api/";
export default {
  data() {
    return {
      featured: []
    };
  },
  methods: {
    add_to_watchlist(user_id, v_id) {
      axios
        .post(base_url + "add_to_watchlist/" + user_id + "/" + v_id)
        .then(res => {
          this.$toast.success("The Video is added to Watch Later");
        });
    }
  },
  mounted() {
    // console.log(this.Channel);
    axios.post(base_url + "featured").then(res => (this.featured = res.data));
    // console.log(this.featured);
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
</style>
