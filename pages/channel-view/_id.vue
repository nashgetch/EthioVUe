<template>
  <div>
    <div class="channel-img">
      <div class="ch-featured-img">
        <img src="/img/back.jpeg" alt>
      </div>
      <div class="ch-logo-img">
        <img :src="'//video2.vixtream.net'+channel.poster_image" alt>
      </div>
      <div class="ch-social-links d-inline-flex flex-row">
        <div class="social-icons-container mt-2 ml-4 d-flex">
          <span class="mt-3" style="color:black; font-size:1rem;">Social</span>

          <social-sharing
            :url="'https://ethiov.com/single-channel/' + channel.id"
            :title="'EthioV Live Stream ' + channel.tv_name"
            :description="'EthioV - ' + channel.description"
            :quote="'EthioV - ' + channel.description"
            :hashtags="'#EthioV, ' + channel.tags"
            inline-template
          >
            <div>
              <network network="facebook">
                <i
                  class="fa fa-fw fa-facebook fa-2x"
                  style="color: #3b5998; padding-left: 5px; margin-top: 10px;"
                ></i>
              </network>

              <network network="twitter">
                <i
                  class="fa fa-fw fa-twitter fa-2x"
                  style="color: #55acee; padding-left: 5px; margin-top: 10px;"
                ></i>
              </network>
              <network network="telegram">
                <i
                  class="fa fa-telegram fa-2x"
                  style="color: #00405d; padding-left: 5px; margin-top: 10px;"
                ></i>
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5 top-margin-bn-sm-md">
      <div class="row">
        <div class="col-lg-10 offset-lg-2">
          <div class="row">
            <div class="col-md-2 col-sm-12 mt-2 channel-name">{{channel.tv_name}}| Live!</div>

            <div class="col-md-8 col-sm-12">
              <ul class="nav nav-pills">
                <li class="nav-item text-center" :class="tab1Style">
                  <a class="nav-link" data-toggle="pill" @click="setTabs(1)">Go Live</a>
                </li>
                <li class="nav-item text-center">
                  <a class="nav-link" data-toggle="pill" @click="setTabs(2)">VoDs</a>
                </li>
                <li class="nav-item text-center">
                  <a class="nav-link" data-toggle="pill" @click="setTabs(3)">Instant VoDs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style="margin-left: auto; margin-right: auto;" class="nashians">
          <adsbygoogle :ad-slot="'5950915078'"/>
        </div>
      </div>
    </div>

    <Live :videos="videos" :channel="channel" v-if="checkTab(1)"/>

    <Vods :videos="videos" v-else-if="checkTab(2)"/>
    <Ivods :videos="videos" :channel="channel" v-else/>
  </div>
</template>

<script>
import Live from "@/components/single_channel/live";
import Vods from "@/components/single_channel/vods";
import Ivods from "@/components/single_channel/ivod";

import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {
  head() {
    return {
      title: this.channel.tv_name,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "EthioV - Live Stream of " +
            this.channel.description +
            "." +
            " You can catch up to your favorite programs of " +
            this.channel.tv_name +
            " here."
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords:
            "Live Stream, " +
            this.channel.tv_name +
            ", " +
            this.channel.description +
            ", Bethel TV, Africa TV, Evangelical TV, Africa, Social Media, Live Stream, Religion, Politics, Entertainment, News, Documentary"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.channel.tv_name
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.ethiov.com/single-channel/" + this.channel.id
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "//video2.vixtream.net" + this.channel.poster_image
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "video.movie"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "EthioV - Live Stream of " +
            this.channel.description +
            "." +
            " You can catch up to your favorite programs of " +
            this.channel.tv_name +
            " here."
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.channel.tv_name
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "https://www.ethiov.com/single-channel/" + this.channel.id
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "//video2.vixtream.net" + this.channel.poster_image
        },
        {
          hid: "twitter:type",
          property: "twitter:type",
          content: "video.movie"
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content:
            "EthioV - Live Stream of " +
            this.channel.description +
            "." +
            " You can catch up to your favorite programs of " +
            this.channel.tv_name +
            " here."
        }
      ]
    };
  },
  components: {
    Live,
    Vods,
    Ivods
  },
  async asyncData(context) {
    let single_channel = await axios.post(
      base_url + "/single_channel/" + context.params.id
    );
    let similar_videos = await axios.post(
      base_url + "/channel_videos/" + single_channel.data.owner_id
    );
    return {
      channel: single_channel.data,
      videos: [...similar_videos.data], //
      tab: 1,
      tab1Style: {
        active: true,
        show: true
      }
    };
  },
  methods: {
    setTabs(tab) {
      this.tab = tab;
      this.tab1Style = {};
    },
    checkTab(tab) {
      return this.tab === tab;
    }
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
