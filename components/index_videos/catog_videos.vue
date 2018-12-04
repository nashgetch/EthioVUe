<template>
  <div>
    <div class="col-12 col-sm-7 offset-sm-2">
      <v-select
        :options="options"
        v-model="objectItem"
        label="category_name"
        placeholder="Select Category"
        :clearSearchOnSelect="true"
        :onChange="Selecthandler"
      ></v-select>
    </div>
    <div class="mb-2">
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
                    <img class :src="'//video2.vixtream.net/'+video.filename" alt="thumbnail">
                    <div ng-click="viewVideo(video.v_id)" class="play">
                      <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                    </div>
                  </nuxt-link>
                  <div class="time">{{video.duration}}</div>
                  <div
                    ng-style="hiddenPlus"
                    ng-show="checkCookie()"
                    class="nashh"
                    ng-click="add_to_watchlist(user.id, video.v_id)"
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
      <infinite-loading @infinite="catogHandler" spinner="wavedots"></infinite-loading>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ViewCatogs from "@/components/views_catogs";
const base_url = "http://locahost:8000";
export default {
  components: {
    ViewCatogs
  },
  data() {
    return {
      page: 1,
      options: [],
      videos: [],
      objectItem: {},
      cat_id: 1
    };
  },
  mounted: function() {
    axios
      .post(base_url + "/fetch_catogs")
      .then(res => {
        return (this.options = [...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .post(base_url + "/cat_load", {
        page: this.page,
        cat: this.cat_id,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        this.videos = [...res.data.data];
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    catogHandler($state) {
      this.page += 1;
      axios
        .post(base_url + "/cat_load", {
          page: this.page,
          cat: this.cat_id,
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          if (res.data.data.length) {
            this.videos.push(...res.data.data);
            $state.loaded();
          } else {
            $state.loaded();
          } 
        });
    },
    Selecthandler(searctext) {
      if (searctext != null) {
        this.page = 1;
        this.cat_id = parseInt(searctext.category_id);
        this.videos = [];
        axios
          .post(base_url + "/cat_load", {
            page: this.page,
            cat: this.cat_id
          })
          .then(res => {
            this.videos = [...res.data.data];
          });
      } else {
        this.page = 1;
        this.cat_id = 1;
        this.videos = [];
        axios
          .post(base_url + "/cat_load", {
            page: this.page,
            cat: this.cat_id
          })
          .then(res => {
            this.videos = [...res.data.data];
          });
      }
    }
  }
};
</script>

<style scoped>
.v-select pol{
  margin-left: 0px !important;
}
</style>

