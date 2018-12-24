<template>
   <div class="container parentDiv" ng-style="hidden2">
      <div class="row rowDiv">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
          v-for="(video,$index) in videos.slice(0,8)"
          :key="$index"
        >
          <div class="kaleb-vids">
            <div class="Vimg itemContainer bg-inverse">
              <a :href="'/single-video/'+video.v_id">
                <!-- <clazy-load :src="'//video2.vixtream.net/'+video.filename"> -->
                  <!-- <div
                    slot="placeholder"
                    class="bg-inverse"
                    style="background-color: black; height:200px;"
                  ></div> -->
                  <video :poster="'https://video2.vixtream.net/'+video.filename" :alt="video.title"></video>
                <!-- </clazy-load> -->
                <div ng-click="viewVideo(video.v_id)" class="play">
                  <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                </div>
              </a>
              <div class="time">{{video.duration}}</div>
            </div>
            <div class="descr">
              <h1 style="font-size: 14px !important;">
                <a
                  class="hideOverflow"
                  :aria-label="video.title"
                  :title="video.title"
                >{{video.title}}</a>
              </h1>
            </div>
            <div class="views small">
              <ViewCatogs :vid="video.v_id" :cat_id="video.category_id" :isIndex="true" :title_en="video.title_en"/>
              <small style="margin-right: 20%"></small>
              <div class="percent">
                <span class="circle"></span>
                {{ video.created_at }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import ViewCatogs from "@/components/views_catogs";
const base_url="https://ethiov.com/api/"
  export default{
    components: {
       ViewCatogs
    },
    props:{
      Channel:{
        type:Object
      }
    },

    data() {
      return {
        videos:[]
      }
    },
    mounted(){
      // console.log(this.Channel);
      axios.post(base_url+"channel_videos/"+this.Channel.owner_id).then(res=>this.videos=res.data)
    }
  }
</script>
