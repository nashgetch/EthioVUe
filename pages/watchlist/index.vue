
<template >
  <div>
    <div class="nashians">
      <adsbygoogle :ad-slot="'5950915078'"/>
    </div>
    <div style="padding-top: 6rem;" id="nas">
      <div class="container parentDiv">
        <h5 style="margin-bottom: 16px;">Watch Later Videos</h5>

        <div class="row display-flex">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
            v-for="(video,$index) in my_watch"
            :key="$index"
          >
            <div class="kaleb-vids">
              <div class="Vimg itemContainer" style="opacity: 1;background-color: black;">
                <a :href="'/single-video/' + video.v_id">
                  <!-- <clazy-load :src="'//video2.vixtream.net/'+video.filename"> -->
                  <!-- <div
                      slot="placeholder"
                      class="bg-inverse"
                      style="background-color: black; height:200px;"
                  ></div>-->
                  <video :poster="'//video2.vixtream.net/'+video.filename" :alt="video.title"></video>
                  <!-- </clazy-load> -->
                  <div class="play">
                    <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                  </div>
                </a>
                <div class="time">{{video.duration}}</div>
              </div>
              <div class="descr">
                <h1 style="font-size: 14px !important;">
                  <a class="hideOverflow" :href="'single-video/' + video.v_id">{{video.title}}</a>
                </h1>
              </div>
              <ViewCatogs
                :vid="video.v_id"
                :cat_id="video.category_id"
                :created_at="video.created_at"
                :isIndex="true"
                :title_en="video.title_en"
                :view_count="video.view_count"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ViewCatogs from "@/components/views_catogs";
export default {
  head() {
    return {
      title: "Ethiov - Watchlist",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Your Watchlist"
        }
      ]
    };
  },
  data() {
    return {
      my_watch: []
    };
  },
  components: { ViewCatogs },
  mounted() {
    this.$axios.post("/my_watchlist/" + this.user.id).then(res => {
      return (this.my_watch = [...res.data]);
    });
  },
  methods: {}
};
</script>
