<template>
  <div>
    <span class="title">
      Most Popular Videos Right Now...
      <small>Recent and Most viewed Videos on demand from Fana, Walta, Amhara, OBN, Bethel and other Religious and Educational Channels. Ethiopia.</small>
    </span>
    
    <hr class="guetta">
    <div class="row display-flex" style="background-color: #F6FBFF; margin-top: 2px;">
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
              <img :src="'//video2.vixtream.net/'+video.filename" :alt="video.title">
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
            <div class="nashhh">{{video.type.toUpperCase()}}</div>
          </div>
          <div class="descr main" ng-click="viewVideo(video.v_id)">
            <h1 style="font-size: 14px !important;">
              <a class="text" :aria-label="video.title" :title="video.title">{{video.title}}</a>
              <a
                class="text smallFont"
                :href="'/single-video/' + video.v_id"
                :aria-label="video.title_en"
                :title="video.title_en"
              >{{video.title_en}}</a>
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
      featured: [],
      slickOptions: {
        slidesToShow: 3
        // Any other options that can be got from plugin documentation
      }
    };
  },
  methods: {
    add_to_watchlist(user_id, v_id) {
      axios
        .post(base_url + "add_to_watchlist/" + user_id + "/" + v_id)
        .then(res => {
          this.$toast.success("The Video is added to Watch Later");
        });
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log("handleAfterChange", event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log("handleBeforeChange", event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log("handleBreakpoint", event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log("handleDestroy", event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log("handleEdge", event, slick, direction);
    },
    handleInit(event, slick) {
      console.log("handleInit", event, slick);
    },
    handleReInit(event, slick) {
      console.log("handleReInit", event, slick);
    },
    handleSetPosition(event, slick) {
      console.log("handleSetPosition", event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log("handleSwipe", event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log("handleLazyLoaded", event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log("handleLazeLoadError", event, slick, image, imageSource);
    }
  },
  mounted() {
    // console.log(this.Channel);
    axios.post(base_url + "popular").then(res => (this.featured = res.data));
    console.log(this.featured);
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
