
<template>
  <div>
    <div ng-show="isSet(2)" class="container parentDiv" ng-style="hidden2">
      <!-- <no-ssr>
        <div class="nashians" style="margin-left: auto; margin-right: auto;">
          <adsbygoogle :ad-slot="'5950915078'"/>
        </div>
      </no-ssr>-->
      <div class="row rowDiv" ng-controller="videoController">
        <div
          class="col-12 col-sm-6 col-md-3 col-lg-2 videoitem kygo"
          v-for="(video,$index) in videos"
          :key="$index"
        >
          <div class="kaleb-vids">
            <div class="Vimg itemContainer bg-inverse">
              <nuxt-link :to="'/single-video/'+video.v_id">
                <!-- <clazy-load :src="'//video2.vixtream.net/'+video.filename2">
                  <div
                    slot="placeholder"
                    class="bg-inverse"
                    style="background-color: black; height:102px;"
                ></div>-->
                <img v-lazy="'https://video2.vixtream.net/'+video.filename" :alt="video.title">
                <!-- </clazy-load> -->
                <div ng-click="viewVideo(video.v_id)" class="play">
                  <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                </div>
              </nuxt-link>
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
            <div class="descr" ng-click="viewVideo(video.v_id)">
              <h1 style="font-size: 14px !important;">
                <a class="text" :aria-label="video.title" :title="video.title">{{video.title}}</a>
                <nuxt-link
                  class="text smallFont"
                  :to="'/single-video/' + video.v_id"
                  :aria-label="video.title_en"
                  :title="video.title_en"
                >{{video.title_en}}</nuxt-link>
              </h1>
            </div>
            <div class="views small">
              <small style="font-weight: bold; color: #7e7e7e; font-size: 12px; margin-left: 4px">
                <i class="fa fa-eye" style="color: #d59541;"></i>
                {{video.view_count}} views
                <i
                  class="fa fa-dot-circle-o"
                  style="color: #d59541;"
                ></i>
                {{video.created_at | moment("from", "now")}}
              </small>
              <small style="margin-right: 20%"></small>
              <!-- <div class="percent">

                {{ video.cr<span class="circle"></span>eated_at }}
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ViewCatogs from "@/components/views_catogs";
export default {
  // methods: {
  // loadmore() {
  //     axios
  //       .post(base_url + "/channel_loadmore", {
  //         page: this.page,
  //         headers: {
  //           "Content-type": "application/x-www-form-urlencoded"
  //         }
  //       })
  //       .then(({ data }) => {
  //         this.page += 1;
  //         if (data.data.length) {
  //           data.data.forEach(element => {
  //             let temp = {};
  //             temp = element;
  //             this.owned.push(temp);
  //           });
  //         }
  //       });
  //   },
  // },
  props: {
    videos: {
      type: Array,
      required: true
    }
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

