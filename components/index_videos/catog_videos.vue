<template>
  <div>
    <span class="d-inline-block d-sm-none title">By Category...</span>
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
            class="col-12 col-sm-6 col-md-3 col-lg-2 videoitem kygo"
            v-for="(video,$index) in videos"
            :key="$index"
          >
            <div class="card kaleb-vids m-2">
              <div class="Vimg itemContainer" style="background-color: black;">
                <a :href="'/single-video/'+video.v_id">
                  <clazy-load :src="'//video2.vixtream.net/'+video.filename">
                    <!-- The image slot renders after the image loads. -->
                    <div
                      slot="placeholder"
                      class="bg-inverse"
                      style="background-color: black; height:102px;"
                    >
                      <!-- You can put any component you want in here. -->
                    </div>
                    <img :src="'//video2.vixtream.net/'+video.filename" :alt="video.title">
                    <!-- The placeholder slot displays while the image is loading. -->
                  </clazy-load>
                  <div ng-click="viewVideo(video.v_id)" class="play">
                    <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                  </div>
                </a>
                <div class="time">{{video.duration}}</div>
                <!-- <div
                  ng-style="hiddenPlus"
                  v-if="loggedIn"
                  class="nashh"
                  @click="add_to_watchlist(user.id, video.v_id)"
                >
                  <i class="fa fa-plus"></i>
                </div>-->
                <div class="nashhh">{{video.type.toUpperCase()}}</div>
              </div>
              <div class="descr" ng-click="viewVideo(video.v_id)">
                <h1 style="font-size: 14px !important;">
                  <a class="text" :aria-label="video.title" :title="video.title">{{video.title}}</a>
                  <a
                    class="text smallFont"
                    :href="'/single-video/' + video.v_id"
                    :aria-label="video.title_en"
                    :title="video.title_en"
                  >{{video.title_en}}</a>
                </h1>
              </div>
              <div class>
                <small style="font-weight: bold; color: #7e7e7e; font-size: 12px; margin-left: 4px">
                  <i class="fa fa-eye" style="color: #d59541;"></i>
                  {{video.view_count}} views
                  <i
                    class="fa fa-dot-circle-o"
                    style="color: #d59541;"
                  ></i>
                  {{video.created_at | moment("from", "now")}}
                </small>
                <!-- <span class="percent">
                    <span class="circle"></span>
                    {{video.created_at}}
                </span>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <div class="text-center">
        <button class="btn btn--orange text-center kalusha" @click="loadmore()">Show More...</button>
      </div>
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
    catogHandler() {
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
          }
        });
    },
    loadmore() {
      axios
        .post(base_url + "/cat_load", {
          page: this.page,
          cat: this.cat_id,
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(({ data }) => {
          this.page += 1;
          if (data.data.length) {
            data.data.forEach(element => {
              let temp = {};
              temp = element;
              this.videos.push(temp);
            });
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
.title {
  font-size: 16px;
  vertical-align: -4px;
  font-weight: 700;
  display: inline-block;
}
.v-select pol {
  margin-left: 0px !important;
}
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
  padding-left: 4px !important;
  padding-right: 4px !important;
}
.views.calvin {
  padding-top: 0px;
}
</style>

