<template>
  <div >
    <div class="channel-img">
      <div class="ch-featured-img">
        <img src="/img/back.jpeg" alt>
      </div>
      <div class="ch-logo-img">
        <img :src="'https://video2.vixtream.net'+channel.poster_image" alt>
      </div>
      <div class="ch-social-links d-inline-flex flex-row">
        <!-- <div class="social-icons-container mt-2 ml-4 d-flex">
          <span class="mt-3" style="color:white; font-size:1rem;">Social</span>
          <a
            socialshare
            socialshare-provider="twitter"
            socialshare-text="{{myModel.Name}}"
            socialshare-hashtags="{{channel.tv_name}}"
            socialshare-url="{{myModel.Url}}"
          >
            <i
              class="fa fa-twitter-square fa-2x"
              style="color: #fbe631; padding-left: 5px; margin-top: 10px;"
            ></i>
          </a>
          <a
            socialshare
            socialshare-provider="facebook"
            socialshare-hashtags="{{channel.tv_name}}"
            socialshare-via="673096096418081"
            socialshare-url="{{myModel.Url}}"
          >
            <i
              class="fa fa-facebook-square fa-2x"
              style="color: #fbe631; padding-left: 5px; margin-top: 10px;"
            ></i>
          </a>
          <a
            socialshare
            socialshare-provider="telegram"
            socialshare-text="{{myModel.Url + ' | ' + myModel.Name}}"
            socialshare-url="{{myModel.Url}}"
          >
            <i
              class="fa fa-telegram fa-2x"
              style="color: #fbe631; padding-left: 5px; margin-top: 10px;"
            ></i>
          </a>
        </div>-->
      </div>
    </div>
    <div class="container-fluid mt-3 top-margin-bn-sm-md">
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
      </div>
    </div>
    <Live :videos="videos" :channel="channel" v-if="checkTab(1)"/>
    <Vods :videos="videos" v-else-if="checkTab(2)"/>
    <Ivods :videos="videos" :channel="channel" v-else/>
  </div>
</template>

<script>
import Live from '@/components/single_channel/live';
import Vods from '@/components/single_channel/vods';
import Ivods from '@/components/single_channel/ivod';

import axios from 'axios';
const base_url = "//locahost:8000";
export default {
  components: {
    Live,
    Vods,
    Ivods
  },
  async asyncData(context) {
    let single_channel= await axios.post(base_url+'/single_channel/'+context.params.id);
    let similar_videos = await axios.post(base_url+'/channel_videos/'+single_channel.data.owner_id);
    return{
      channel:single_channel.data,
      videos:[...similar_videos.data],
      tab:1,
      tab1Style: {
        active: true,
        show:true
      }
    }
  },
  methods:{
    setTabs(tab) {
      this.tab = tab;
    },
    checkTab(tab) {
      if (this.tab === 1) {
        return this.tab === tab;
      } else {
        this.tab1Style={};
        return this.tab === tab;
      }
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
