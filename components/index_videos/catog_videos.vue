<template>
  <div>
    <span class="d-inline-block d-sm-none title">
     By Category...
  </span>
    <div class="col-12 col-sm-7 offset-sm-2 mt-2">
      <v-select
        :options="options"
        label="category_name"
        placeholder="Select Category"
        :onChange="Selecthandler"
      ></v-select>
    </div>
    <div class="mb-2">

        <div class="container parentDiv">
          <div class="row display-flex" ng-controller="navController">
            <div
              class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
              v-for="(video,$index) in videos"
              :key="$index"
            >
              <div class="kaleb-vids">
                <div class="Vimg itemContainer" style="background-color: black;">
                  <a :href="'/single-video/'+video.v_id">
                    <!-- <clazy-load :src="'//video2.vixtream.net/'+video.filename"> -->
                      <!-- The image slot renders after the image loads. -->
                      <!-- <div
                        slot="placeholder"
                        class="bg-inverse"
                        style="background-color: black; height:145px;"
                      > -->
                      <!-- You can put any component you want in here. -->
                      <!-- </div> -->
                      <video :poster="'//video2.vixtream.net/'+video.filename2" :alt="video.title"></video>
                      <!-- The placeholder slot displays while the image is loading. -->
                    <!-- </clazy-load> -->
                    <div ng-click="viewVideo(video.v_id)" class="play">
                      <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                    </div>
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
                <div class="descr" ng-click="viewVideo(video.v_id)">
                  <h1 style="font-size: 14px !important;">
                    <a
                      class="hideOverflow"
                      :aria-label="video.title"
                      :title="video.title"

                    >{{video.title}}</a>
                  </h1>
                </div>
                <div class="views text-center">
                  <ViewCatogs :vid="video.v_id" :cat_id="video.category_id" :created_at="video.created_at" :isIndex="true" :title_en="video.title_en"/>
                  <!-- <span class="percent">
                    <span class="circle"></span>
                    {{video.created_at}}
                  </span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- </div> -->
      <infinite-loading @infinite="catogHandler" spinner="wavedots"></infinite-loading>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ViewCatogs from "@/components/views_catogs";
const base_url = "https://ethiov.com/api";
export default {
  components: {
    ViewCatogs
  },
  data() {
    return {
      page: 1,
      options: [],
      videos: [],
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
    add_to_watchlist(user_id, v_id) {
      axios
        .post(base_url + "/add_to_watchlist/" + user_id + "/" + v_id)
        .then(res => {
          this.$toast.success("The Video is added to Watch Later");
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
.title{
   font-size: 16px;
  vertical-align: -4px;
  font-weight: 700;
  display: inline-block;
}
.v-select pol {
  margin-left: 0px !important;
}
</style>

