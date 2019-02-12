<template>
  <div>
    <!-- <div class="container"> -->
    <!-- <FeaturedVideos></FeaturedVideos> -->
    <!-- <div class="container parentDiv"> -->
    <!-- <div class="nashians">
        <adsbygoogle :ad-slot="'5950915078'"/>
    </div>-->
    <!-- <PopularVideos></PopularVideos> -->
    <!-- </div> -->
    <div class="container">
      <!-- <div class="nashians">
        <adsbygoogle/>
      </div>-->
      <span class="title">Other Recommended Videos...</span>

      <hr class="guetta">
      <div class="row display-flex">
        <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3 ml-auto mr-auto mb-3">
          <div class="kaleb-vids">sa
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
          class="col-12 col-sm-6 col-md-3 col-lg-2 videoitem kygo"
          v-for="(video,$index) in videos"
          :key="$index"
        >
          <div class="card kaleb-vids m-2">
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
              <!-- <div
                ng-style="hiddenPlus"
                v-if="loggedIn"
                class="nashh"
                @click="add_to_watchlist(user.id, video.v_id)"
              >
                <i class="fa fa-plus"></i>
              </div>-->
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
            <small style="font-weight: bold; color: #7e7e7e; font-size: 12px; margin-left: 4px">
              <i class="fa fa-eye" style="color: #d59541;"></i>
              {{video.view_count}} views
              <i
                class="fa fa-dot-circle-o"
                style="color: #d59541;"
              ></i>
              {{video.created_at | moment("from", "now")}}
            </small>
            <div class="mb-1"></div>
            <!-- </div> -->
          </div>
          <!-- <hr> -->
        </div>
      </div>
    </div>
    <!-- </div> -->
    <div class="text-center">
      <button class="btn btn--orange text-center kalusha" @click="loadmore()">Show More...</button>
    </div>
  </div>
</template>

<script>
import FeaturedVideos from "@/components/featureVideos/videos";
// import ViewCatogs from "@/components/views_catogs";
import PopularVideos from "@/components/popularVideos/videos";
import axios from "axios";

const base_url = "https://ethiov.com/api";
export default {
  components: {
    // ViewCatogs,
    FeaturedVideos,
    PopularVideos
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
    loadmore() {
      axios
        .post(base_url + "/loadmore", {
          page: this.page,
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(({ data }) => {
          this.page += 1;
          if (data.data.length) {
            data.data.forEach(element => {
              let temp = {};
              temp = element;
              this.videos.push(temp);
            });
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
  // mounted: function() {
  //   axios.post(base_url + "/featured").then(res => {
  //     this.featured = [...res.data];
  //   });
  // }
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
  line-height: 12px; /* fallback */
  max-height: 25px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
}
.small {
  font-size: 12px;
}
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
.kygo {
  padding-left: 4px !important;
  padding-right: 4px !important;
}
.views.calvin {
  padding-top: 0px;
}
.kalusha {
  background-color: #1b1c1d;
  color: #fbe631;
  padding: 15px 65px;
  border: solid 1px #eceff0;
  height: 48px;
  border-radius: 24px;
  font-weight: normal;
}
.kalusha:hover {
  color: #b9a708 !important;
  border-color: #b9a708;
}
@media (min-width: 500px) {
 .kalusha{
   padding: 15px 85px;
 }
}
</style>
