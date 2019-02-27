<template>
  <div>
    <div class="container">
      <div class="row rowDiv" ng-controller="tvController">
        <div class="col-lg-8 col-xs-12 col-sm-12">
          <div class="video-container">
            <iframe
              class="iframe"
              width="720"
              height="405"
              :src="'//video2.vixtream.net/tv/v/'+channel.chn"
              frameborder="0"
              allowfullscreen
              allow-scripts
            ></iframe>
          </div>
          <h1 :class="marginTop(channel.owner_id)" class="display-4" style="font-size:1rem">
            <a>{{channel.tv_name}}</a>
          </h1>

          <!-- Ads block -->
          <div class="content-wrapper">
            <div class="left mb-2">
              <div class="card mt-2 p-1" style="font-family: monospace">
                <span>
                  Live Stream of {{channel.tv_name}}. Videos On Demand of {{channel.tv_name}}
                  <br>are found on the
                  next tab.
                </span>
                <span>
                  You can also watch your favorite tv shows and all the things you have
                  <br>
                  missed on
                  {{channel.tv_name}} on the instant VoDs Tab.
                </span>
              </div>
              <a>Similar Videos</a>
              <small>
                <br>
                Latest Videos on Demand posted by {{channel.tv_name}}...
              </small>
              <div class="card p-1 d-inline pull-right mb-2">
                <span class="label">News</span>
                <span class="label">Drama</span>
                <span class="label">Entertainment</span>
                <span class="label">Movies</span>
              </div>
            </div>
            <div class="clearfix"></div>

            <div class="single-v-footer">
              <div class="similar-v single-video video-mobile-02">
                <div class="row">
                  <div
                    class="col-12 col-lg-3 col-sm-6"
                    v-for="(video,$index) in videos.slice(0,8)"
                    :key="$index"
                  >
                    <div class="nash-vids row">
                      <div class="col-12">
                        <div class="Vimg itemContainer" style="background-color: black;">
                          <a :href="'/single-video/'+video.v_id">
                            <video
                              class="imgur1"
                              :poster="'//video2.vixtream.net/'+video.filename2"
                            ></video>
                            <div ng-click="viewVideo(video.v_id)" class="play">
                              <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                            </div>
                            <div class="time">{{video.duration}}</div>
                          </a>
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 ml-3">
                        <div class="descr">
                          <a
                            style="text-decoration: none;"
                            :href="'/single-video/' + video.v_id"
                            class="hideOverflow"
                            :aria-label="video.title"
                            :title="video.title"
                          >{{video.title}}</a>
                          <a
                            class="text smallFont"
                            :href="'/single-video/' + video.v_id"
                            :aria-label="video.title_en"
                            :title="video.title_en"
                          >{{video.title_en}}</a>
                        </div>
                        <a style="text-decoration: none;">
                          <small
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-none d-lg-block mt-3">
          <div class>
            <div class="caption">
              <div class="left">
                <a>
                  <h5 style="font-size: 22px;font-weight: 300;">Other Channels</h5>
                </a>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="list">
              <div class="thumb row" v-for="(tv,$index) in tvs.slice(0,7)" :key="$index">
                <div class="col-lg-6 col-sm-6" ng-click="viewTV(tv.id)">
                  <div class="Vimg" style="background-color: black;">
                    <a :href="'/single-channel/'+tv.id">
                      <img
                        class="imgur"
                        :src="'//video2.vixtream.net'+tv.poster_image"
                        :alt="tv.tv_name"
                      >
                    </a>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <div class="descr" style="padding-left:4px;">
                    <h1 style="font-size: 14px !important;">
                      <a :href="'/single-channel/'+tv.id">{{tv.tv_name}}</a>
                    </h1>
                  </div>
                  <div class="views" style="padding-left:4px;">{{tv.tags}}</div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import ViewCatogs from "@/components/views_catogs";

const base_url = "https://ethiov.com/api";
export default {

  props: {
    videos: {
      type: Array,
      required: true
    },
    channel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tvs: []
    };
  },
  methods: {
    marginTop(id) {
      if (id === 12 || id === 14) {
        return "nashiti";
      } else if (id === 13) {
        return "nashitiwa";
      } else {
        return "nashiwwa";
      }
    }
  },
  mounted: function() {
      $(function() {
      var vid = $(".video-container");

      var top =
        vid.offset().top - parseFloat(vid.css("margin-top").replace(/auto/, 0));

      $(window).on("scroll", function(event) {
        // what the y position of the scroll is
        var y = $(this).scrollTop();

        // whether that's below the form
        if (y >= top) {
          // if so, ad the fixed class
          if (vid.is(".aside")) {
            return;
          }
          vid.addClass("aside");
        } else {
          // otherwise remove it
          vid.removeClass("aside");
        }
      });
    });
    axios.post(base_url + "/live_channel").then(res => {
      return (this.tvs = [
        ...res.data.filter(res => {
          if (this.channel.category == "2") {
            return res.owner_id == this.channel.owner_id && res.category == "2";
          }
          return (
            res.tv_name != "test" &&
            res.owner_id != this.channel.owner_id &&
            res.category === this.channel.category
          );
          // console.log(res);
        })
      ]);
    });
  }
};
</script>
<style scoped>
.content-wrapper.wrap {
  margin: 0 0 0 !important;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 56.25%;
  height: 0;
  overflow: hidden;
  transition: 0.5s;

  /* height: 480px; */
  /* background-color: hsl(0, 0%, 10%); */
}
.video-container > iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 854px;
}
.aside .video-container {
  max-height: 100px;
  width: auto;
}
.aside h1 {
  opacity: 0;
}
@media (min-width: 769px) and (max-width: 1281px) {
  .aside {
    position: fixed;
    width: 40%;
    z-index: 100;
    margin-top: 6rem;
    top: 0;
    margin-left: auto;
    right: 0;
    margin-right: 5px;
    align-self: baseline;
    padding-top: 23% !important;
  }
}
/* .aside {
  position: fixed;
  width: 23%;
  z-index: 100;
  margin-top: 4.3rem;
  top: 0;
  margin-left: auto;
  right: 0;
  margin-right: 5px;
  align-self: baseline;
  padding-top: 13% !important;
} */
.video-containerf {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 16.25%;
  height: 0;
  overflow: hidden;
}

@media (max-width: 500px) {
  .aside {
    position: fixed;
    width: 56%;
    z-index: 100;
    bottom: 0;
    right: 0;
    height: 122px !important;
    margin-right: 1px;
    padding-top: 32%;
  }
}
@media (min-width: 501px) and (max-width: 768px) {
  .aside {
    position: fixed;
    width: 56%;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 1px;
    padding-top: 32% !important;
  }
}
/* .video-container .iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
} */

.aspect-ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 51%;
}
.aspect-ratio iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.nashiti {
  margin-top: -40% !important;
}
.nashitiwa {
  margin-top: -38% !important;
}
.nashiwwa {
  margin-top: -21% !important;
}
.nashitis {
  margin-top: 53% !important;
}
@media (max-width: 500px) {
  .video-container {
    padding-top: 36.25% !important;
  }
}
@media (max-width: 500px) {
  .rophy {
    margin-bottom: 214px;
  }
}
@media (max-width: 500px) {
  .nashiti {
    margin-top: -16% !important;
  }
}
@media (max-width: 500px) {
  .nashiwa {
    margin-top: 0% !important;
  }
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px; /* fallback */
  max-height: 32px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
}
@media (max-width: 500px) {
  .nashiwwa {
    margin-top: 0% !important;
  }
}
@media (max-width: 500px) {
  .nashitiwa {
    margin-top: 0% !important;
  }
}

.imgur {
  display: block;
  max-width: 174px;
  max-height: 115px;
  width: auto;
  height: auto;
  margin-right: auto;
  margin-left: auto;
}
.imgur1 {
  display: block;
  max-width: 145px;
  max-height: 82px;
  width: auto;
  height: auto;
  margin-right: auto;
  margin-left: auto;
}
@media (max-width: 768px) {
  .imgur1 {
    max-width: 245px;
    max-height: 205px;
  }
}
@media (min-width: 992px) {
  .row {
    margin-right: -37px;
    margin-left: -15px;
  }
}
.nashianso {
  width: 320px !important;
  height: 100px !important;
}
@media (min-width: 500px) {
  .nashianso {
    width: 468px !important;
    height: 60px !important;
  }
}
@media (min-width: 800px) {
  .nashianso {
    width: 728px !important;
    height: 90px !important;
  }
}
</style>


