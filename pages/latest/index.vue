 <template>
  <section style="padding-top:6rem;">
    <div class="content-wrapper text-center">
      <span class="martin">Featured Live TV Channels</span>
      <hr>
      <!-- <div class="row" style="background-color:#fafafc;">
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
      </div> -->
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
                <li class="nav-item text-center ml-auto mr-auto active">
                  <a class="nav-link active" href="/">
                    <span class="d-none d-sm-block">Latest Videos</span>
                    <i
                      class="active_route fa fa-clock-o d-inline-block d-sm-none"
                      style="font-size: 15px;"
                    ></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Latest</span>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" href="/category">
                    <span class="d-none d-sm-block">Category</span>
                    <i class="fa fa-video-camera d-inline-block d-sm-none" style="font-size: 15px;"></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Category</span>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" href="/trending">
                    <span class="d-none d-sm-block">Trending</span>

                    <i class="fa fa-fire d-inline-block d-sm-none" style="font-size: 15px;"></i>
                    <span
                      style="font-size: 10px; font-weight: bold;"
                      class="d-inline-block d-sm-none"
                    >Trending</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
     <div class="content-wrapper">
      <span class="d-inline-block d-sm-none title" style="font-weight: bold">Latest Videos On Demand...</span>
      <!-- <div class="bars">
      <input type="text" v-model="searchString" placeholder="Search Channels here...">
      </div>-->
      <div class="row">
        <div class="container mt-2">
          <div class="row mt-3 display-flex">
            <div
              class="col-12 col-sm-6 col-md-3 col-lg-2 mb-4 kygo"
              v-for="(video,$index) in videos"
              :key="$index"
            >
              <div class="chn-image-container">
                <a :href="'/single-video/'+video.v_id">
                  <div class="Vimg" style="background-color: black;">
                    <img :src="'//video2.vixtream.net/' + video.filename" :alt="video.title">
                    <div ng-click="viewVideo(video.v_id)" class="play">
                      <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                    </div>

                    <div class="time">{{video.duration}}</div>

                    <div class="nashhh">{{video.type.toUpperCase()}}</div>
                  </div>
                </a>

                <div class="mt-1">
                  <div class="descr main" ng-click="viewVideo(video.v_id)">
                    <h1 style="font-size: 14px !important;">
                      <a
                        :href="'/single-video/' + video.v_id"
                        class="text"
                        :aria-label="video.title"
                        :title="video.title"
                      >{{video.title}}</a>
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
                  <small
                    class="text-center"
                    style="font-weight: bold; color: #7e7e7e; font-size: 12px; margin-left: 4px"
                  >
                    <i class="fa fa-eye" style="color: #d59541;"></i>
                    {{video.view_count}} views
                    <i
                      class="fa fa-dot-circle-o"
                      style="color: #d59541;"
                    ></i>
                    {{video.created_at | moment("from", "now")}}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn--orange text-center kalusha" @click="loadmore()">Show More...</button>
      </div>
    </div>
  </section>
</template>
<script>

import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {

  head() {
    return {
      title: "EthioV - Ethiopian Videos and Live channels",
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
          keywords:
            "Bethel TV, Africa, Evangelical, Religion, Politics, Ethiopia, Entertainment, Sports, Social Media, travel"
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
      ],
      script: [
        {
          innerHTML: `
               (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-5001725934888164",
                  enable_page_level_ads: true
              });
        `
        }
      ]
    };
  },
  data() {
    return {
      turl: "https://video2.vixtream.net"
    };
  },
  async asyncData() {
    let { data } = await axios.post(base_url + "/loadmore", {
      page: 1,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    });
    return {
      videos: [...data.data],
      tab: 1,
      page: 2,
      tab1Style: {
        active: true,
        show: true
      }
    };
  },

  methods: {
     loadmore() {
      axios
        .post(base_url + "/loadmore", {
          page: this.page,
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
    setTabs(tab) {
      this.tab = tab;
      this.tab1Style = {};
    },
    checkTab(tab) {
      return this.tab === tab;
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

  margin-bottom: 2px;
}
.ch-social-links.walker {
  right: 0rem;
  background-color: #fafafc;
}

.Vimg {
  /* border-radius: 2px; */
  position: relative;
  height: 122px;
}

.Vimg .time {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #373933;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  color: #fff;
  font-size: 14px;
  padding: 6px 9px 1px;
  line-height: 14px;
  font-weight: 500;
}

.Vimg .nashh {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fbe631;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  color: #000;
  font-size: 14px;
  padding: 6px 9px 1px;
  line-height: 14px;
  font-weight: 500;
  z-index: 100;
}

.Vimg .nashhh {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e42b3b;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  color: #ffffff;
  font-size: 14px;
  padding: 6px 9px 5px;
  line-height: 14px;
  font-weight: 500;
  z-index: 100;
  font-weight: bold;
  font-family: sans-serif;
}

.Vimg img {
  width: 100%;
  height: 122px;
}

.Vimg video {
  width: 100%;
  height: 122px;
}

@media (max-width: 768px) {
  .Vimg img {
    height: 100px;
  }

  .Vimg video {
    height: 100px;
  }

  .Vimg {
    height: 102px;
  }

  .Vimg .time {
    bottom: 0;
  }

  .descr {
    margin-top: 0;
  }
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
@media (max-width: 600px) {
  .Vimg img {
    height: 230px;
  }

  .Vimg video {
    height: 230px;
  }

  .Vimg {
    height: 230px;
  }
}
</style>

