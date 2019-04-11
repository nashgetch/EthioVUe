 <template>
  <section>
    <div class="theon">
        <div class="row justify-content-md-center mr-2 ml-2" style="color: black;">
  <div class="col-lg-6">
          <div class="title-section text-center">
            <h4 style="font-weight: normal;" class="title-line">Featured TV Channels...</h4>
          </div>
        </div>

          <div class="col-lg-8 col-sm-12 col-12 text-center">
            <div class="row">
              <div class="col-lg-2 col-sm-3 col-3">
                <nuxt-link to="/single-channel/114">
                  <div class="chn-image-container index m-0">
                    <img class="avicii" src="/img/fbctv_poster.jpg" alt="Fana TV">
                  </div>
                </nuxt-link>
              </div>

              <div class="col-lg-2 col-sm-3 col-3">
                <nuxt-link to="/single-channel/113">
                  <div class="chn-image-container index m-0">
                    <img class="avicii" src="/img/amma_poster.jpg" alt="Amhara TV">
                  </div>
                </nuxt-link>
              </div>

              <div class="col-lg-2 col-sm-3 col-3">
                <nuxt-link to="/single-channel/567">
                  <div class="chn-image-container index m-0">
                    <img class="avicii" src="/img/walta_posters.jpg" alt="Walta TV">
                  </div>
                </nuxt-link>
              </div>

              <div class="col-lg-2 col-sm-3 col-3">
                <nuxt-link to="/single-channel/126">
                  <div class="chn-image-container index m-0">
                    <img class="avicii" src="/img/obm_poster.jpg" alt="OBN TV">
                  </div>
                </nuxt-link>
              </div>
              <div class="col-lg-4 d-lg-block d-none" style="display: flex;">
                <div class="ch-social-links walker">
                  <div class="social-icons-container d-flex">
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
        <hr>
      </div>
    </div>

    <!-- <hr style="border-top: 1px solid rgba(0,0,0,0.6);" class="d-lg-block d-none"> -->
    <div class="container-fluid top-margin-bn-sm-md" style="padding-top: .2rem;">
      <!-- <Feature/> -->
      <div class="row">
        <div class="col-lg-10 offset-lg-2">
          <div class="row">
            <div class="col-md-2 col-sm-12 mt-2 channel-name d-none d-sm-block">
              <nuxt-link to="/">Videos</nuxt-link>|
              <nuxt-link to="/live-channels">Live TVs</nuxt-link>
            </div>
            <div class="col-md-8 col-sm-12 text-center">
              <ul class="nav nav-pills">
                <li class="nav-item text-center ml-auto mr-auto active">
                  <nuxt-link class="nav-link active bolder" to="/">
                    <span class="d-none d-sm-block">Latest Videos</span>
                    <i
                      class="active_route fa fa-clock-o d-inline-block d-sm-none"
                      style="font-size: 15px;"
                    ></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Latest</span>
                  </nuxt-link>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <nuxt-link class="nav-link bolder" to="/category">
                    <span class="d-none d-sm-block">Category</span>
                    <i class="fa fa-video-camera d-inline-block d-sm-none" style="font-size: 15px;"></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Category</span>
                  </nuxt-link>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <nuxt-link class="nav-link bolder" to="/trending">
                    <span class="d-none d-sm-block">Trending</span>

                    <i class="fa fa-fire d-inline-block d-sm-none" style="font-size: 15px;"></i>
                    <span
                      style="font-size: 10px; font-weight: bold;"
                      class="d-inline-block d-sm-none"
                    >Trending</span>
                  </nuxt-link>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <nuxt-link v-if="loggedIn" class="nav-link bolder" to="/subscription">
                    <span class="d-none d-sm-block">Subscription</span>
                    <i
                      class="fa fa-envelope-open d-inline-block d-sm-none"
                      style="font-size: 15px;"
                    ></i>
                    <span
                      style="font-size: 10px; font-weight: bold;"
                      class="d-inline-block d-sm-none"
                    >Subscription</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <hr style="color: black; background-color: #19ff00;">
        </div>
      </div>
    </div>
    <div class="content-wrapper">
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
              style="padding-left: 4px !important; padding-right: 4px !important;"
            >
              <div class="chn-image-container">
                <nuxt-link :to="'/single-video/'+video.v_id">
                  <div class="Vimg" style="background-color: #f7f7f7;">
                    <img
                      v-lazy="'//video2.vixtream.net/' + video.filename"
                      :alt="video.title"
                      :aspect-ratio="1.1"
                    >

                    <div ng-click="viewVideo(video.v_id)" class="play">
                      <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                    </div>

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
                </nuxt-link>

                <div class="mt-1">
                  <div class="descr main" ng-click="viewVideo(video.v_id)">
                    <h1 style="font-size: 14px !important;">
                      <nuxt-link
                        :to="'/single-video/' + video.v_id"
                        class="text"
                        :aria-label="video.title"
                        :title="video.title"
                      >{{video.title}}</nuxt-link>
                      <nuxt-link
                        class="text smallFont"
                        :to="'/single-video/' + video.v_id"
                        :aria-label="video.title_en"
                        :title="video.title_en"
                      >{{video.title_en}}</nuxt-link>
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
    <hr>
    <div
      class="container-fluid"
      style="padding-left: 0px; padding-right: 0px; background-color: black;"
    >
      <div class="row justify-content-md-center mr-2 ml-2">
        <div class="col-lg-6">
          <div class="title-section text-center kaeb">
            <h2 class="title-line">Most Popular Videos Right Now...</h2>
            <p>Recent and Most viewed Videos on demand from Fana, Walta, Amhara, OBN, Bethel and other Religious and Educational Channels. Ethiopia.</p>
          </div>
        </div>
      </div>
      <hr style="background-color: #fbe631">
      <carousel
        :perPage="x"
        :autoplay="true"
        :adjustHeight="true"
        :mouseDrag="true"
        :loop="true"
        paginationColor="white"
        paginationActiveColor="#fbe631"
      >
        <slide :key="$index" v-for="(video, $index) in featured" class="kygo">
          <div class="chn-image-container">
            <nuxt-link :to="'/single-video/'+video.v_id">
              <div class="Vimg" style="background-color: #f7f7f7;">
                <img v-lazy="'//video2.vixtream.net/' + video.filename" :alt="video.title">
                <div ng-click="viewVideo(video.v_id)" class="play">
                  <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                </div>

                <div class="time" style="color: #ffef00;">{{video.duration}}</div>
                <div
                  ng-style="hiddenPlus"
                  v-if="loggedIn"
                  class="nashh"
                  @click="add_to_watchlist(user.id, video.v_id)"
                >
                  <i class="fa fa-plus"></i>
                </div>
                <div class="nashhh" style="color: black">{{video.type.toUpperCase()}}</div>
              </div>
            </nuxt-link>
            <div class="mt-1">
              <div class="descr main">
                <h1 style="font-size: 13px !important; color: #fbe631">
                  <nuxt-link
                    style="font-size: 13px !important; color: #fbe631"
                    :to="'/single-video/' + video.v_id"
                    class="text"
                    :aria-label="video.title"
                    :title="video.title"
                  >{{video.title}}</nuxt-link>
                </h1>
              </div>
              <small
                class="text-center"
                style="font-weight: bold; color: #fbe631; font-size: 12px; margin-left: 4px"
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
        </slide>
      </carousel>
    </div>
    <!-- <hr> -->

    <div
      class="container-fluid mt-2"
      style="padding-left: 0px; padding-right: 0px; background-color: #f7f7f7;"
    >
      <div class="row justify-content-md-center mr-1 ml-1">
        <div class="col-lg-6">
          <div class="title-section text-center">
            <h2 class="title-line">Recent Videos from Our Featured Channels...</h2>
            <p>Up-to-Date News, Sports, Documentary, Current Affairs, Religious, Travel and Other Topics From all Ethiopian Channels</p>
          </div>
        </div>
      </div>
      <hr>
    </div>

    <Feature/>
    <hr>
  </section>
</template>
<script>
import axios from "axios";

import Feature from "@/components/catogVideos/catogs";
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
      ]
      // script: [
      //   {
      //     innerHTML: `
      //          (adsbygoogle = window.adsbygoogle || []).push({
      //             google_ad_client: "ca-pub-5001725934888164",
      //             enable_page_level_ads: true
      //         });
      //   `
      //   }
      // ]
    };
  },
  // components: { Slick },
  components: {
    Feature
  },

  data() {
    return {
      turl: "https://video2.vixtream.net",
      featured: [],
      x: 3,
      popular: [],
      scre: {}
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
    axios.post(base_url + "/popular").then(res => (this.featured = res.data));
    // axios.post(base_url + "/featured").then(res => (this.popular = res.data));
    console.log(this.popular);
    if (screen.width < 500) {
      this.x = 1;
    } else if (screen.width > 500 && screen.width < 768) {
      this.x = 2;
    } else if (screen.width > 768) {
      this.x = 6;
    }
    this.scre = screen;
  }
};
</script>


<style scoped>
.wrapper {
  width: 100%;
}
.single-top {
  margin: 0 0 30px;
  /* filter: contrast(1110); */
}
.single-top {
  position: relative;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  z-index: 7;
}
.name {
  margin: 3px 0 2px;
  color: #000 !important;
}
.single-top .content .name,
.single-top .content .name a {
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
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
@media (max-width: 500px) {
  .playbtn {
    font-size: 48px;
  }
}
.single-top .content {
  bottom: 31px;
  left: 0;
  padding: 0 20px;
  position: absolute;
  right: 0;
  text-align: left;
  z-index: 8;
}
.playbtn {
  font-size: 60px;
}
@media (min-width: 800px) {
  .nashians {
    width: 728px !important;
    height: 90px !important;
  }
}
.view-counter {
  color: #ff9700;
  display: block;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 16px;
  position: absolute;
  right: 18px;
  top: 10px;
  z-index: 8;
}
.popup-y {
  opacity: 1;
}
.single-top .popup-y {
  background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0;
  border-radius: 100%;
  font-size: 48px;
  height: 56px;
  left: 50%;
  line-height: 58px;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 28%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 56px;
  z-index: 8;
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
.kygo {
  padding-left: 4px !important;
  padding-right: 4px !important;
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
  background-color: #868471;
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
    height: 202px;
  }

  .Vimg video {
    height: 202px;
  }

  .Vimg {
    height: 202px;
  }
}
.theon {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 6rem;
  padding-bottom: 0px;
  margin: 0;
  background-color: #f7f7f7;
}
.dany {
  border-top: 14px solid rgba(1, 1, 1, 0.2);
}
.kalusha {
  color: #fbe631;
  background-color: black;
  width: 276px;
}
.title-section {
  margin-bottom: 30px;
  text-align: center !important;
}
.title-section h2 {
  font-weight: 600;
}
.title-line {
  position: relative;
  z-index: 9;
  display: inline-block;
  transition: 0.5s ease-in-out;
  text-transform: capitalize;
}
h2 {
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
}
.title-section p {
  font-size: 14px;
}
p {
  font-weight: normal;
  line-height: 1.5;
  color: #626262;
  letter-spacing: 1px;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
.bolder {
  font-weight: bold !important;
}
.kaeb {
  color: #fbe631 !important;
}
.kaeb > p {
  color: #fbe631 !important;
}
</style>

