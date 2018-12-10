<template>
  <section>
    <!-- <div style="padding-top: 6rem;background-color: #DEDEDE;">
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
    </div> -->
    <div class="container-fluid mt-3 top-margin-bn-sm-md" style="padding-top: 6rem;">
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
    <LatestVod :videos="videos" v-if="checkTab(1)"/>
    <CatogVods v-if="checkTab(2)"/>
  </section>
</template>

<script>
import LatestVod from "@/components/index_videos/latest_vods";
import ViewCatogs from "@/components/views_catogs";
import CatogVods from "@/components/index_videos/catog_videos";
import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {
  head() {
    return {
      title: "EthioV - Live and Videos on Demand. Ethiopia's Reliable TVs and Videos Archive.",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords:
            "ጠ/ሚ ዶ/ር አብይ ዐህመድ, ዜና, Fana TV, Walta, EBC, Bethel TV, Ethiopian TV Channels, Ethiopian Videos, Elroi, Amhara TV, Tigrai TV, Ethiopian News, Ethiopian Comedy, Abiy"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "EthioV - Ethiopian Live Channels and Videos on Demand. Ethiopia's Reliable TVs and Videos Archive. All Your Favorite TV Channels"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ethiov.com"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/EthioV_LOGO_Black.png"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "EthioV - Ethiopian Live Channels and Videos on Demand"
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "https://ethiov.com"
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "/img/EthioV_LOGO_Black.png"
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content:
            "EthioV - All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here."
        }
      ]
    };
  },
  components: {
    LatestVod,
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
    // let tvse = await axios.post(base_url + "/live_channel");
    let { data } = await axios.post(base_url + "/loadmore", {
      page: 1,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    });
    return {
      videos: [...data.data],
      tab: 1,
      page: 1,
      tab1Style: {
        active: true,
        show: true
      }
    };
  },

  methods: {
    setTabs(tab) {
      this.tab = tab;
    },
    checkTab(tab) {
      return this.tab===tab;
    },
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

