<template>
  <div>
    <div class="container parentDiv">
      <div class="container parentDiv">
        <div class="row display-flex" ng-controller="navController">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
            v-for="(video,$index) in videos"
            :key="$index"
          >
            <div class="kaleb-vids">
              <div class="Vimg itemContainer" style="background-color: black;">
                <nuxt-link :to="'/single_video/'+video.v_id">
                  <img class :src="'//video2.vixtream.net/'+video.filename2" alt="thumbnail">
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
              </div>
              <div class="descr" ng-click="viewVideo(video.v_id)">
                <a
                  class="hideOverflow"
                  :aria-label="video.title"
                  :title="video.title"
                >{{video.title}}</a>
              </div>
              <div class="views text-center">
                <ViewCatogs :vid="video.v_id" :cat_id="video.category_id" :isIndex="true"/>
                <span class="percent">
                  <span class="circle"></span>
                  {{video.created_at}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import ViewCatogs from "@/components/views_catogs";
import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {
  components: {
    ViewCatogs
  },
  props: {
    videos: {
      type: Array,
      required: true
    },
  },
  data(){
    return{
      page:1
    }
  },
  methods: {
    infiniteHandler($state) {
      axios
        .post(base_url + "/loadmore", {
          page: this.page,
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(({ data }) => {
          console.log(data.data);
          this.page += 1;
          if (data.data.length) {
            data.data.forEach(element => {
              let temp = {};
              temp = element;
              this.videos.push(temp);
            });
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
    add_to_watchlist(user_id, v_id) {
      axios
        .post(base_url + "/add_to_watchlist/" + user_id + "/" + v_id)
        .then(res => {
          this.$toast.success("The Video is added to Watch Later");
        });
    }
  }
};
</script>
