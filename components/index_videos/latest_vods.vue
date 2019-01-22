<template>
  <div>
    <span class="d-inline-block d-sm-none title">Recent Videos...</span>

    <!-- <div class="container parentDiv"> -->
    <div class="container parentDiv">

      <div class="row display-flex">

        <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3 ml-auto mr-auto mb-3">
          <div class="kaleb-vids">
            <div class="Vimg" style="background-color:#fbe631 !important;">
              <div class="row chn-image-container index m-0">
                <div class="col-6">
                  <a href="/live-channels">
                    <div class="small-logo mt-3 index">
                      <img src="/img/fbctv_poster.jpg" alt="Fana">
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="/live-channels">
                    <div class="small-logo mt-3 index">
                      <img src="/img/amma_poster.jpg" alt="Amhara">
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="/live-channels">
                    <div class="small-logo mt-3 index">
                      <img src="/img/walta_posters.jpg" alt="Walta">
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="/live-channels">
                    <div class="small-logo mt-3 index">
                      <img src="/img/obm_poster.jpg" alt="OBN">
                    </div>
                  </a>
                </div>
              </div>
              <div class="descr p-0 mb-2">
                <h1 style="font-size: 14px !important;">
                  <a class="hideOverflow">Our Live Channels</a>
                </h1>
              </div>
            </div>
          </div>
        </div>-->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
          v-for="(video,$index) in videos"
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
                <video :poster="'//video2.vixtream.net/'+video.filename2" :alt="video.title"/>
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
            </div>
            <div class="descr main" ng-click="viewVideo(video.v_id)">
              <h1 style="font-size: 14px !important;">
                <a class="text" :aria-label="video.title" :title="video.title">{{video.title}}</a>
              </h1>
              <!-- <h1 v-show="engshow(video.v_id)" style="font-size: 14px !important;"><a
                  class="hideOverflow"
                  :aria-label="video.title"
                  :title="video.title_en"
              >{{video.title_en}}</a></h1>-->
            </div>
            <div class="views">
              <ViewCatogs
                :vid="video.v_id"
                :cat_id="video.category_id"
                :isIndex="true"
                :title_en="video.title_en"
                :created_at="video.created_at"
                :view_count="video.view_count"
              ></ViewCatogs>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import ViewCatogs from "@/components/views_catogs";
import axios from "axios";

const base_url = "https://ethiov.com/api";
export default {
  components: {
    ViewCatogs
  },
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      page: 2,
      vid: ""
    };
  },
  methods: {
    infiniteHandler($state) {
      axios
        .post(base_url + "/loadmore", {
          page: this.page,
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(({ data }) => {
          console.log(data.data);
          this.page += 1;
          if (data.data.length) {
            data.data.forEach(element => {
              let temp = {};
              temp = element;
              this.videos.push(temp);
            });
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
    add_to_watchlist(user_id, v_id) {
      axios
        .post(base_url + "/add_to_watchlist/" + user_id + "/" + v_id)
        .then(res => {
          this.$toast.success("The Video is added to Watch Later");
        });
    }
  }
};
</script>


<style>
.title {
  font-size: 16px;
  vertical-align: -4px;
  font-weight: 700;
  display: inline-block;
}
.t {
  float: left;
  font-family: "Lato", Helvetica, sans-serif;
  font-size: 13px;
  line-height: 15px;
  min-height: 55px;
  text-align: right;
  width: 90%;
  color: #999;
  text-transform: uppercase;
  /* border-right: 10px solid #BEDB39; */
  padding-right: 4px;
  word-break: break-all;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px; /* fallback */
  max-height: 32px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.nashian {
  width: 200px !important;
  height: 200px !important;
}
@media (min-width: 500px) {
  .nashian {
    width: 300px !important;
    height: 250px !important;
  }
}
@media (min-width: 800px) {
  .nashian {
    width: 336px !important;
    height: 280px !important;
  }
}
</style>
