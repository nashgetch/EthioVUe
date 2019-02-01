<template>
  <section style="padding-top:4rem;">
    <!-- <script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-5001725934888164",
          enable_page_level_ads: true
     });
    </script>-->
    <!-- <a href="/ads-test">Test Ads</a> -->

          <adsbygoogle :ad-slot="'5950915078'"/>

    <div class="content-wrapper text-center">

      <span class="martin">Featured Live TV Channels</span>
      <hr>
      <div class="row" style="background-color:#fafafc;">
        <div class="col-lg-2 col-sm-12 col-12"></div>
        <div class="col-lg-8 col-sm-12 col-12 text-center">
          <div class="row">
            <div class="col-lg-2 col-sm-3 col-3">
              <a href="/single-channel/114">
                <div class="chn-image-container index m-0">
                  <img class="avicii" src="/img/fbctv_poster.jpg" alt="Fana TV">
                </div>
              </a>
            </div>

            <div class="col-lg-2 col-sm-3 col-3">
              <a href="/single-channel/113">
                <div class="chn-image-container index m-0">
                  <img class="avicii" src="/img/amma_poster.jpg" alt="Amhara TV">
                </div>
              </a>
            </div>

            <div class="col-lg-2 col-sm-3 col-3">
              <a href="/single-channel/567">
                <div class="chn-image-container index m-0">
                  <img class="avicii" src="/img/walta_posters.jpg" alt="Walta TV">
                </div>
              </a>
            </div>

            <div class="col-lg-2 col-sm-3 col-3">
              <a href="/single-channel/126">
                <div class="chn-image-container index m-0">
                  <img class="avicii" src="/img/obm_poster.jpg" alt="OBN TV">
                </div>
              </a>
            </div>
            <div class="col-lg-4 d-lg-block d-none">
              <div class="ch-social-links walker">
                <div class="social-icons-container mt-2 ml-4 d-flex">
                  <span class="mt-3" style="color:black; font-size:1rem;">Social</span>

                  <social-sharing
                    url="https://ethiov.com"
                    title="EthioV - Ethiopian Videos and Live channels"
                    description="All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
                    quote="EthioV - Ethiopian Videos and Live channels"
                    hashtags="#EthioV, #ETHIOPIAN_LIVE_TV_CHANNELS, #FANA, #AMHARA, #WALTA, #OBN"
                    inline-template
                  >
                    <div>
                      <network network="facebook">
                        <i
                          class="fa fa-fw fa-facebook fa-2x"
                          style="color: #3b5998; padding-left: 5px; margin-top: 10px;"
                        ></i>
                      </network>

                      <network network="twitter">
                        <i
                          class="fa fa-fw fa-twitter fa-2x"
                          style="color: #55acee; padding-left: 5px; margin-top: 10px;"
                        ></i>
                      </network>
                      <network network="telegram">
                        <i
                          class="fa fa-telegram fa-2x"
                          style="color: #00405d; padding-left: 5px; margin-top: 10px;"
                        ></i>
                      </network>
                    </div>
                  </social-sharing>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr style="border-top: 1px solid rgba(0,0,0,0.6);" class="d-lg-block d-none">
    <div class="container-fluid top-margin-bn-sm-md" style="padding-top: .2rem;">
      <div class="row fas">
        <div class="col-lg-10 offset-lg-2">
          <div class="row">
            <div class="col-md-2 col-sm-12 mt-2 channel-name d-none d-sm-block">
              <a href="/">Videos</a> |
              <a href="/live-channels">Live TVs</a>
            </div>

            <div class="col-md-8 col-sm-12 text-center">
              <ul class="nav nav-pills">
                <li class="nav-item text-center ml-auto mr-auto" :class="tab1Style">
                  <a class="nav-link" data-toggle="pill" @click.prevent="setTabs(1)">
                    <span class="d-none d-sm-block">Latest Videos</span>
                    <i
                      class="fa fa-clock-o d-inline-block d-sm-none"
                      style="font-size: 15px;"
                      :class="{'active_route':(1===tab)}"
                    ></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Latest</span>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" data-toggle="pill" @click.prevent="setTabs(2)">
                    <span class="d-none d-sm-block">Category</span>
                    <i
                      class="fa fa-video-camera d-inline-block d-sm-none"
                      style="font-size: 15px;"
                      :class="{'active_route':(2===tab)}"
                    ></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Category</span>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" data-toggle="pill" @click.prevent="setTabs(3)">
                    <span class="d-none d-sm-block">Trending</span>
                    <i
                      class="fa fa-fire d-inline-block d-sm-none"
                      style="font-size: 15px;"
                      :class="{'active_route':(3===tab)}"
                    ></i>
                    <span
                      style="font-size: 10px; font-weight: bold;"
                      class="d-inline-block d-sm-none"
                    >Trending</span>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <a
                    v-if="loggedIn"
                    class="nav-link"
                    data-toggle="pill"
                    @click.prevent="setTabs(4)"
                  >
                    <span class="d-none d-sm-block">Subscription</span>
                    <i
                      class="fa fa-envelope-open d-inline-block d-sm-none"
                      style="font-size: 15px;"
                      :class="{'active_route':(4===tab)}"
                    ></i>
                    <span
                      style="font-size: 10px; font-weight: bold;"
                      class="d-inline-block d-sm-none"
                    >Subscription</span>
                  </a>
                </li>
                <!-- <li class="nav-item text-center ml-auto mr-auto">
                  <a v-if="loggedIn" class="nav-link" data-toggle="pill" @click.prevent="setTabs(5)">
                    <span class="d-none d-sm-block">Account</span>
                      <i class="fa fa-user fa-2x d-inline-block d-sm-none"></i>
                  </a>
                </li>-->
              </ul>
              <!-- <hr class="fas"> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <LatestVod :videos="videos" v-if="checkTab(1)"/> -->
    <CatogVods v-if="checkTab(2)"/>
    <!-- <TrendingVods v-if="checkTab(3)"/> -->
    <!-- <Subscription v-if="checkTab(4)"/> -->
  </section>
</template>
<script>
import LatestVod from "@/components/index_videos/latest_vods";
import ViewCatogs from "@/components/views_catogs";
import CatogVods from "@/components/index_videos/catog_videos";
import TrendingVods from "@/components/index_videos/trend_videos";
import Subscription from "@/components/index_videos/subscription";
// import wideads from "@/components/adsComponents/wide_ads"
import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {
  // head() {
  //   return {
  //     title: "EthioV - Ethiopian Videos and Live channels",
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content:
  //           "All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
  //       },
  //       {
  //         hid: "keywords",
  //         name: "keywords",
  //         keywords:
  //           "Bethel TV, Africa TV, Evangelical TV, Live Channels, Zena, ዜና, Entertainment, Sport, News, Current Afairs, Documentary, IPTV, videos, Africa"
  //       },
  //       {
  //         hid: "og:title",
  //         property: "og:title",
  //         content:
  //           "EthioV - Ethiopian Live Channels and Videos on Demand. Ethiopia's Reliable TVs and Videos Archive. All Your Favorite TV Channels"
  //       },
  //       {
  //         hid: "og:url",
  //         property: "og:url",
  //         content: "https://ethiov.com"
  //       },
  //       {
  //         hid: "og:image",
  //         property: "og:image",
  //         content: "/img/EthioV_LOGO_Black.png"
  //       },
  //       {
  //         hid: "og:description",
  //         property: "og:description",
  //         content:
  //           "All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
  //       },
  //       {
  //         hid: "twitter:title",
  //         property: "twitter:title",
  //         content: "EthioV - Ethiopian Live Channels and Videos on Demand"
  //       },
  //       {
  //         hid: "twitter:url",
  //         property: "twitter:url",
  //         content: "https://ethiov.com"
  //       },
  //       {
  //         hid: "twitter:image",
  //         property: "twitter:image",
  //         content: "/img/EthioV_LOGO_Black.png"
  //       },
  //       {
  //         hid: "twitter:card",
  //         property: "twitter:card",
  //         content: "summary_large_image"
  //       },
  //       {
  //         hid: "twitter:description",
  //         property: "twitter:description",
  //         content:
  //           "EthioV - All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here."
  //       }
  //     ]
  //   };
  // },
  components: {
    LatestVod,
    CatogVods,
    // wideads,
    TrendingVods,
    Subscription
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
      this.tab1Style = {};
    },
    checkTab(tab) {
      return this.tab === tab;
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
  },
  mounted: function() {
    this.active_route = this.tab;
  }
};
</script>


<style scoped>
.wrapper {
  width: 100%;
}
.nashians {
  width: 320px !important;
  height: 100px !important;
}
@media (min-width: 500px) {
  .nashians {
    width: 468px !important;
    height: 60px !important;
  }
}
@media (min-width: 800px) {
  .nashians {
    width: 728px !important;
    height: 90px !important;
  }
}
@media (max-width: 990px) {
  .fas {
    display: block;
    color: #fbe631;
    box-shadow: 1px 0px 0px 0px rgba(18, 10, 32, 1),
      0 0px 3px 0 rgba(0, 0, 0, 1);
  }
}
.active_route {
  border-bottom-style: solid;
  border-bottom-color: #111;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, -7.84),
    3px 11px 19px 10px rgba(0, 0, 0, 0.45);
}
.avicii {
  display: block;
  width: 83px;
  height: 72px;
  border-radius: 50%;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.3);
}

@media (min-width: 300px) and (max-width: 768px) {
  .avicii {
    width: 63px;
    height: 49px;
  }
}
.martin {
  font-weight: 200;
  color: black;
  /* box-shadow: 0 5px 9px 0 #a8a8a8; */
  margin-bottom: 2px;
}
.ch-social-links.walker {
  right: 0rem;
  background-color: #fafafc;
}
</style>

