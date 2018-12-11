
<template >
  <div>
    <div style="padding-top: 6rem;" id="nas">
      <div class="container parentDiv">
        <h5 style="margin-bottom: 16px;">Your Watchlist - Customized!</h5>

        <div class="row display-flex">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
            v-for="(video,$index) in my_watch"
            :key="$index"
          >
            <div class="kaleb-vids">
              <div class="Vimg itemContainer" style="opacity: 1">
                <nuxt-link :to="'/single-video/' + video.v_id">
                  <clazy-load :src="'//video2.vixtream.net/'+video.filename">
                    <div
                      slot="placeholder"
                      class="bg-inverse"
                      style="background-color: black; height:200px;"
                    ></div>
                    <video :poster="'//video2.vixtream.net/'+video.filename" :alt="video.title"></video>
                  </clazy-load>
                  <div class="play">
                    <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                  </div>
                </nuxt-link>
                <div class="time">{{video.duration}}</div>
              </div>
              <div class="descr">
                <h1 style="font-size: 14px !important;">
                  <a class="hideOverflow" :href="'single-video/' + video.v_id">{{video.title}}</a>
                </h1>
              </div>
              <div class="views">
                {{video.view_count}} views.
                <span class="percent">
                  <span class="circle"></span>
                  {{video.created_at}}
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      my_watch: []
    };
  },
  mounted() {
    this.$axios.post("/my_watchlist/" + this.user.id).then(res => {
      return (this.my_watch = [...res.data]);
    });
  },
  methods: {}
};
</script>
