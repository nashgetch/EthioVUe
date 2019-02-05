<template>
  <div>
    <div ng-show="isSet(2)" class="container parentDiv" ng-style="hidden2">
      <div class="row rowDiv" ng-controller="videoController">
        <div
          class="col-12 col-sm-6 col-md-3 col-lg-2 videoitem kygo"
          v-for="(video,$index) in videos"
          :key="$index"
        >
          <div class="kaleb-vids">
            <div class="Vimg itemContainer bg-inverse">
              <a :href="'/single-video/'+video.v_id">
                <!-- <clazy-load :src="'//video2.vixtream.net/'+video.filename2">
                  <div
                    slot="placeholder"
                    class="bg-inverse"
                    style="background-color: black; height:102px;"
                  ></div> -->
                  <video
                    :poster="'https://video2.vixtream.net/'+video.filename2"
                    :alt="video.title"
                  ></video>
                <!-- </clazy-load> -->
                <div ng-click="viewVideo(video.v_id)" class="play">
                  <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                </div>
              </a>
              <div class="time">{{video.duration}}</div>
              <div class="nashhh">{{video.type.toUpperCase()}}</div>
            </div>
            <div class="descr" ng-click="viewVideo(video.v_id)">
              <h1 style="font-size: 14px !important;">
                <a class="text" :aria-label="video.title" :title="video.title">{{video.title}}</a>
              </h1>
            </div>
            <div class="views small">
              <ViewCatogs
                :vid="video.v_id"
                :cat_id="video.category_id"
                :created_at="video.created_at"
                :isIndex="true"
                :title_en="video.title_en"
                :view_count="video.view_count"
                :type="video.type"
              />
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
import ViewCatogs from "@/components/views_catogs";
export default {
  components: {
    ViewCatogs
  },
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
}
.kygo {
  padding-left: 4px;
  padding-right: 4px;
}
</style>

