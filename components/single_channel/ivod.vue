<template>
  <div>
    <div ng-show="isSet(3)" class="container parentDiv">
      <div class="row rowDiv" ng-controller="tvController">
        <div class="col-lg-8 col-xs-12 col-sm-12">
          <div class="video-container">
            <iframe
              width="720"
              height="405"
              :src="icUrl"
              frameborder="0"
              allowfullscreen
              allow-scripts
            ></iframe>
          </div>
          <h1 :class="marginTop(channel.owner_id)" class="display-4" style="font-size:1rem">
            <a>
              {{channel.tv_name}}| {{channel.description}} :
              Active {{time}} Hours Ago!
            </a>
          </h1>

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
              <a style="color: black; font-family: sans-serif; font-weight: 500;">
                Instant VoDs --
                <small style="color: gray;">
                  You can catch up to your favorite
                  channels by getting
                  instant videos since 2 day ago!
                </small>
              </a>
            </div>
            <div class="clearfix"></div>
            <div class="single-v-footer">
              <div class="similar-v single-video video-mobile-02">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-6 col-6 form mb-2">
                    <input type="number" v-model="time" name="time" class="form-control">
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-6 mt-2" style="margin-left:'-45px'">
                    <small>Hours Ago!</small>
                  </div>
                  <div class="col-lg-2 col-md-4 col-sm-6 col-12 pull-lg-2">
                    <button class="btn btn-default" @click.prevent="instant(channel.chn, time)">
                      <span>Get Instant</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="left mb-2">
                <a>Similar Videos</a>
              </div>
              <div class="clearfix"></div>

              <div class="single-v-footer">
                <div class="similar-v single-video video-mobile-02">
                  <div class="row">
                    <div
                      class="col-12 col-sm-6 col-lg-3"
                      v-for="(video,$index) in videos.slice(0,8)"
                      :key="$index"
                    >
                      <div class="nash-vids row">
                        <div class="col-12 p-0 p-sm-2">
                          <div class="Vimg" style="background-color: black;">
                            <nuxt-link :to="'/single-video/'+video.v_id">
                              <img
                                class="imgur1"
                                v-lazy="url + video.filename2"
                                :alt="video.title"
                              >
                              <div class="time">{{video.duration}}</div>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12">
                          <div class="descr">
                            <h1 style="font-size: 14px !important;">
                              <nuxt-link
                                :to="'/single-video/' + video.v_id"
                                class="hideOverflow"
                                :aria-label="video.title"
                                :title="video.title"
                                tooltip
                                data-animation="false"
                              >{{video.title}}</nuxt-link>
                              <nuxt-link
                                class="text smallFont"
                                :to="'/single-video/' + video.v_id"
                                :aria-label="video.title_en"
                                :title="video.title_en"
                              >{{video.title_en}}</nuxt-link>
                            </h1>
                          </div>
                          <nuxt-link style="text-decoration: none;" :to="'/single-video/' + video.v_id">
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
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="card p-1 mr-auto ml-auto"
              >EthioV - Ethiopian Live Channels and Videos on Demand.
                <br>Ethiopia's Reliable TVs and Videos Archive. All Your Favorite TV Channels
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-none d-lg-block mt-3">
          <!-- up next -->
          <div class>
            <div class="caption">
              <div class="left">
                <a>
                  <h5 style="font-size: 22px;font-weight: 300;">Other Channels</h5>
                </a>
              </div>
              <!-- <div class="rophy nashian">
                <adsbygoogle :ad-slot="'5950915078'"/>
              </div>-->
              <!-- <div data-ads2></div> -->
              <div class="clearfix"></div>
            </div>
            <div class="list">
              <div class="thumb row" v-for="(tv,$index) in tvs.slice(0,6)" :key="$index">
                <div class="col-lg-6 col-sm-6" ng-click="viewTV(tv.id)">
                  <div class="Vimg" style="background-color: black;">
                    <nuxt-link :to="'/single-channel/'+tv.id">
                      <img class="imgur" v-lazy="'https://video2.vixtream.net'+tv.poster_image" alt>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <div class="descr" style="padding-left: 4px;">
                    <a>{{tv.tv_name}}</a>
                  </div>
                  <div class="views" style="padding-left: 4px;">{{tv.tags}}</div>
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
// import ViewCatogs from "@/components/views_catogs";
import axios from "axios";

// import Tallads from "@/components/adsComponents/tall_ads";
const base_url = "https://ethiov.com/api";
export default {
  props: {
    channel: {
      type: Object,
      required: true
    },
    videos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      time: "1",
      icUrl: "https://video2.vixtream.net/dvr/" + this.channel.chn + "/" + "1",
      tvs: [],
      url: "https://video2.vixtream.net/"
    };
  },
  methods: {
    instant(chn, time) {
      this.icUrl = "https://video2.vixtream.net/dvr/" + chn + "/" + time;
    },
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
    axios.post(base_url + "/live_channel").then(res => {
      return (this.tvs = [
        ...res.data.filter(res => {
          if (this.channel.category == "2") {
            return res.category == "2";
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
  /* height: 0; */
  overflow: hidden;
  transition: 0.5s;
}
.video-containerf {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 16.25%;
  height: 0;
  overflow: hidden;
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
/* @media (min-width: 769px) and (max-width: 1280px) {
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
  }
} */
.aside {
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
}

@media (max-width: 500px) {
  .aside {
    position: fixed;
    width: 56%;
    z-index: 100;
    bottom: 0;
    right: 0;
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
  margin-top: -51% !important;
}
.nashitiwa {
  margin-top: -53% !important;
}
.nashiwwa {
  margin-top: -32% !important;
}
.nashitis {
  margin-top: 53% !important;
}
@media (max-width: 500px) {
  .video-container {
    padding-top: 19.25%;
  }
}
@media (max-width: 500px) {
  .nashiti {
    margin-top: -16% !important;
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
  .nashiwa {
    margin-top: 0% !important;
  }
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
  max-width: 161px;
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
    max-width: 277px;
    max-height: 232px;
  }
}
@media (max-width: 500px) {
  .rophy {
    margin-bottom: 214px;
  }
}
</style>
