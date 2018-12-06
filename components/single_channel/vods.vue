<template>
  <div>
    <div ng-show="isSet(2)" class="container parentDiv" ng-style="hidden2">
      <div class="row rowDiv" ng-controller="videoController">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
          v-for="(video,$index) in videos"
          :key="$index"
        >
          <div class="kaleb-vids">
            <div class="Vimg itemContainer">
              <nuxt-link :to="'/single_video/'+video.v_id">
                <img :src="'https://video2.vixtream.net/'+video.filename2" :alt="video.title">
                <div ng-click="viewVideo(video.v_id)" class="play">
                  <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                </div>
              </nuxt-link>
              <div class="time">{{video.duration}}</div>
            </div>
            <div class="descr" ng-click="viewVideo(video.v_id)">
              <a
                class="hideOverflow"
                :aria-label="video.title"
                :title="video.title"
              >{{video.title}}</a>
            </div>
            <div class="views small">
              <ViewCatogs :vid="video.v_id" :cat_id="video.category_id" :isIndex="true"/>
              <small style="margin-right: 20%"></small>
              <div class="percent">
                <span class="circle"></span>
                {{video.created_at}}
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

};
</script>


