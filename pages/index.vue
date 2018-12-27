<template>
  <section style="padding-top:6rem;">
    <!-- <script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-5001725934888164",
          enable_page_level_ads: true
     });
    </script> -->
    <!-- <a href="/ads-test">Test Ads</a> -->
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
                    <span class="d-none d-sm-block ">Latest Videos</span>
                    <i class="fa fa-clock-o d-inline-block d-sm-none"
                    style="font-size: 23px;"
                    :class="{'active_route':(1===tab)}"
                    ></i>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" data-toggle="pill" @click.prevent="setTabs(2)">
                    <span  class="d-none d-sm-block ">Other Videos</span>
                    <i class="fa fa-video-camera d-inline-block d-sm-none"
                    style="font-size: 23px;"
                    :class="{'active_route':(2===tab)}"
                    ></i>
                  </a>
                </li>
               <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" data-toggle="pill" @click.prevent="setTabs(3)">
                    <span  class="d-none d-sm-block">Trending</span>
                    <i class="fa fa-fire d-inline-block d-sm-none"
                    style="font-size: 23px;"
                    :class="{'active_route':(3===tab)}"
                    ></i>
                  </a>
                </li>
                 <li class="nav-item text-center ml-auto mr-auto">
                  <a v-if="loggedIn" class="nav-link" data-toggle="pill" @click.prevent="setTabs(4)">
                    <span class="d-none d-sm-block ">Subscription</span>
                      <i class="fa fa-envelope-open d-inline-block d-sm-none"
                      style="font-size: 23px;"
                      :class="{'active_route':(4===tab)}"
                      ></i>
                  </a>
                </li>
                <!-- <li class="nav-item text-center ml-auto mr-auto">
                  <a v-if="loggedIn" class="nav-link" data-toggle="pill" @click.prevent="setTabs(5)">
                    <span class="d-none d-sm-block">Account</span>
                      <i class="fa fa-user fa-2x d-inline-block d-sm-none"></i>
                  </a>
                </li> -->
              </ul>
              <hr class="fas">
            </div>
          </div>
        </div>
      </div>
    </div>
    <LatestVod :videos="videos" v-if="checkTab(1)"/>
    <CatogVods v-if="checkTab(2)"/>
    <TrendingVods v-if="checkTab(3)"/>
    <Subscription v-if="checkTab(4)"/>
  </section>
</template>
<script>
import LatestVod from "@/components/index_videos/latest_vods";
import ViewCatogs from "@/components/views_catogs";
import CatogVods from "@/components/index_videos/catog_videos";
import TrendingVods from "@/components/index_videos/trend_videos";
import Subscription from "@/components/index_videos/subscription";
import wideads from "@/components/adsComponents/wide_ads"
import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {
  head() {
    return {
      title: "Ethiov - Ethiopian Videos and Live channels",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords: "EthioV, Fana TV, Amhara TV, Live Ethiopian Channels, Zena, ኢትዮጵያ, ዜና, Walta, ETV, EBC, Bisrat TV, MEZINAGNA, Entertainment"
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "EthioV - Ethiopian Live Channels and Videos on Demand. Ethiopia's Reliable TVs and Videos Archive. All Your Favorite TV Channels"
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
    CatogVods,
    wideads,
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
      this.tab1Style={};
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
.wrapper{
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
  display:block;
  color: #fbe631;
  box-shadow: 1px 0px 0px 0px rgba(18, 10, 32, 1), 0 0px 3px 0 rgba(0, 0, 0, 1);
  }
}
.active_route {
  border-bottom-style: solid;
  border-bottom-color: #111;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, -7.84), 3px 11px 19px 10px rgba(0, 0, 0, 0.45);
}
</style>

