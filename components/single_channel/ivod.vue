<template>
  <div>
    <div ng-show="isSet(3)" class="container parentDiv">
      <div class="row rowDiv" ng-controller="tvController">
        <div class="col-lg-8 col-xs-12 col-sm-12">
          <div class="video-container">
            <iframe
              class="iframe"
              width="720"
              height="405"
              :src="icUrl"
              frameborder="0"
              allowfullscreen
              allow-scripts
            ></iframe>
          </div>
          <h1 :class="marginTop(channel.owner_id)">
            <a>
              {{channel.tv_name}}| {{channel.description}} :
              Active {{time}} Hours Ago!
            </a>
          </h1>
          <div class="adblock2">
            <div class="img">
              <Wideads/>
            </div>
          </div>

          <div class="content-wrapper">
            <div class="left mb-2">
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
                <div class="similar-v single-video video-mobile-02" ng-controller="videoController">
                  <div class="row">
                    <div
                      class="col-lg-3 col-sm-6 col-xs-12"
                      v-for="(video,$index) in videos.slice(0,4)"
                      :key="$index"
                    >
                      <div class="nash-vids row">
                        <div class="col-sm-12 col-xs-6">
                          <div class="Vimg" style="background-color: black;">
                            <nuxt-link :to="'/single-video/'+video.v_id">
                              <video class="imgur1" :poster="url + video.filename" :alt="video.title"></video>
                              <div class="time">{{video.duration}}</div>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="col-sm-12 col-xs-6">
                          <div class="descr">
                            <h1 style="font-size: 14px !important;">
                            <a
                              class="hideOverflow"
                              :aria-label="video.title"
                              :title="video.title"
                              tooltip
                              data-animation="false"
                            >{{video.title}}</a></h1>
                          </div>
                          <div class="views">
                            <ViewCatogs
                              :vid="video.v_id"
                              :cat_id="video.category_id"
                              :isIndex="true"
                            />
                          </div>
                          <!-- <div class="percent"><span class="circle"></span> 83%</div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-none d-sm-block mt-3">
          <!-- up next -->
          <div class>
            <Tallads/>
            <div class="caption">
              <div class="left">
                <a>
                  <h5 style="font-size: 22px;font-weight: 300;">Other Channels</h5>
                </a>
              </div>

              <div data-ads2></div>

              <div class="clearfix"></div>
            </div>
            <div class="list">
              <div class="thumb row" v-for="(tv,$index) in tvs.slice(0,6)" :key="$index">
                <div class="col-lg-6 col-sm-6" ng-click="viewTV(tv.id)">
                  <div class="Vimg" style="background-color: black;">
                    <nuxt-link :to="'/single-channel/'+tv.id">
                      <img class="imgur" :src="'https://video2.vixtream.net'+tv.poster_image" alt>
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
import ViewCatogs from "@/components/views_catogs";
import axios from "axios";
import Wideads from "@/components/adsComponents/wide_ads";
import Tallads from "@/components/adsComponents/tall_ads";
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
  components: {
    ViewCatogs,
    Wideads,
    Tallads
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
          return res.tv_name != "test";
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
}
.video-containerf {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 16.25%;
  height: 0;
  overflow: hidden;
}
.video-container .iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
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
    padding-top: 19.25% !important;
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
@media (max-width: 500px) {
  .nashiwwa {
    margin-top: 0% !important;
  }
}
@media (max-width: 500px) {
  .nashitiwa {
    margin-top: 0% !important;
  }
  h1 {
    font-size: 18px;
  }
}

.imgur {
  display: block;
  max-width: 190px;
  max-height: 115px;
  width: auto;
  height: auto;
  margin-right: auto;
  margin-left: auto;
}
.imgur1 {
  display: block;
  max-width: 145px;
  max-height: 115px;
  width: auto;
  height: auto;
  margin-right: auto;
  margin-left: auto;
}
@media (max-width: 768px) {
  .imgur1 {
    max-width: 245px;
    max-height: 160px;
  }
}
</style>
