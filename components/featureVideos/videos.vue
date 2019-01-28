<template>
  <div>
    <span class="title">Recent Videos from Our Featured Channels...</span>
    <hr class="guetta">
    <div class="row display-flex" style="background-color: #fff6e8; margin-top: 2px;">
      <div
        class="col-12 col-sm-6 col-md-3 col-lg-2 videoitem kygo"
        v-for="(video,$index) in featured"
        :key="$index"
      >
        <div class="kaleb-vids">
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
              <video :poster="'//video2.vixtream.net/'+video.filename2" :alt="video.title"/>
              <div ng-click="viewVideo(video.v_id)" class="play">
                <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
              </div>
              <!-- </clazy-load> -->
            </a>
            <div class="time">{{video.duration}}</div>
            <div
              ng-style="hiddenPlus"
              v-if="loggedIn"
              class="nashh"
              @click="add_to_watchlist(user.id, video.v_id)"
            >
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="descr main" ng-click="viewVideo(video.v_id)">
            <h1 style="font-size: 14px !important;">
              <a class="text" :aria-label="video.title" :title="video.title">{{video.title}}</a>
            </h1>
            <!-- <h1 v-show="engshow(video.v_id)" style="font-size: 14px !important;"><a
                  class="hideOverflow"
                  :aria-label="video.title"
                  :title="video.title_en"
            >{{video.title_en}}</a></h1>-->
          </div>
          <!-- <div class="views calvin"> -->
          <ViewCatogs
            :vid="video.v_id"
            :cat_id="video.category_id"
            :isIndex="true"
            :title_en="video.title_en"
            :created_at="video.created_at"
            :view_count="video.view_count"
            :type="video.type"
          ></ViewCatogs>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <hr class="guetta">
  </div>
</template>

<script>
import axios from "axios";
import ViewCatogs from "@/components/views_catogs";
const base_url = "https://ethiov.com/api/";
export default {
  components: {
    ViewCatogs
  },

  data() {
    return {
      featured: []
    };
  },
  methods: {
    add_to_watchlist(user_id, v_id) {
      axios
        .post(base_url + "add_to_watchlist/" + user_id + "/" + v_id)
        .then(res => {
          this.$toast.success("The Video is added to Watch Later");
        });
    }
  },
  mounted() {
    // console.log(this.Channel);
    axios.post(base_url + "featured").then(res => (this.featured = res.data));
    // console.log(this.featured);
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
