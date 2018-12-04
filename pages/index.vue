<template>
  <section>
    <div style="padding-top: 6rem;background-color: #DEDEDE;">
      <div class="container mb-3 live_container">
        <div class="row">
          <h3 class="krishna">
            LIVE -
            <small class="krishna2">Channels</small>
          </h3>
          <div class="col-lg-12 col-12 m-0">
            <div class="live-channels">
              <div class="prev-btn">
                <a id="prev_btn">
                  <i class="fa fa-chevron-left fa-2x"></i>
                </a>
              </div>
              <div class="next-btn">
                <a id="next_btn">
                  <i class="fa fa-chevron-right fa-2x"></i>
                </a>
              </div>

              <div class="text-center">
                <div class="live-slider responsive" id="sl">
                  <slick ref="slick" :options="slickOptions">
                    <div class="slider_elem" v-for="(tv,$index) in tvs" :key="$index">
                      <div class="live_chan_img_container">
                        <nuxt-link :to="'/single_channel/'+tv.id">
                          <img
                            class="imgur"
                            :aria-label="tv.tv_name"
                            style="opacity: 1; overflow: hidden;"
                            :src="turl + tv.poster_image"
                            :alt="tv.tv_name"
                          >
                        </nuxt-link>
                      </div>
                    </div>
                  </slick>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-3 top-margin-bn-sm-md">
      <div class="row">
        <div class="col-lg-10 offset-lg-2">
          <div class="row">
            <div class="col-md-2 col-sm-12 mt-2 channel-name d-none d-sm-block">VoD | Live!</div>

            <div class="col-md-8 col-sm-12">
              <ul class="nav nav-pills">
                <li class="nav-item text-center" :class="tab1Style">
                  <a class="nav-link" data-toggle="pill" @click.prevent="setTabs(1)">Latest VoDs</a>
                </li>
                <li class="nav-item text-center">
                  <a class="nav-link" data-toggle="pill" @click.prevent="setTabs(2)">By Category</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LatestVods :videos="videos" :page="1" v-if="checkTab(1)"/>
    <CatogVods v-else/>
  </section>
</template>

<script>
import LatestVods from "@/components/index_videos/latest_vods";
import CatogVods from "@/components/index_videos/catog_videos"
import axios from "axios";
const base_url = "http://10.11.152.34:8000";
export default {
  components: {
    LatestVods,
    CatogVods
  },
  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
        slidesToShow: 6,
        infinite: true,
        adaptiveHeight: false,
        draggable: true,
        edgeFriction: 0.3,
        swipe: true,
        infinite: false,
        speed: 300,
        slidesToScroll: 4,
        nextArrow: "#next_btn",
        prevArrow: "#prev_btn",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 9,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      },
      turl: "https://video2.vixtream.net"
    };
  },
  async asyncData() {
    let tvse = await axios.post(base_url + "/live_channel");
    let { data } = await axios.post(base_url + "/loadmore", {
      page: 1,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    });
    return {
      tvs: tvse.data,
      videos: [...data.data],
      tab: 1,
      tab1Style: {
        active: true,
        show:true
      }
    };
  },

  methods: {
    setTabs(tab) {
      this.tab = tab;
    },
    checkTab(tab) {
      if (this.tab === 1) {
        return this.tab === tab;
      } else {
        this.tab1Style={};
        return this.tab === tab;
      }
    }
  }
};
</script>

