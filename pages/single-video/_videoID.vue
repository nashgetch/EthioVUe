<template>
  <div class="container" style="padding-top: 6.5rem;">
    <div class="row rowDiv">
      <div class="col-lg-8 col-xs-12 col-sm-12">
        <div id="iframe1" class="video-container">
          <iframe
            id="inash"
            class="iframe"
            width="720"
            height="405"
            :src="cUrl"
            frameborder="0"
            allowfullscreen
            allow-scripts
          ></iframe>
        </div>
        <div class="content-wrapper" style="margin: 0 !important;">
          <h1 style="font-size: 15px !important; padding-top: 7px;">
            {{ single.title }}
            <nuxt-link
              class="text smallFont"
              :to="'/single-video/' + single.v_id"
              :aria-label="single.title_en"
              :title="single.title_en"
            >{{single.title_en + " || " + single.am_en_ph}}</nuxt-link>
            <!-- <ViewCatogs
              :isSingle="true"
              :vid="single.v_id"
              :title_en="single.title_en"
              :title_am_ph="single.am_en_ph"
              :type="single.type"
            />-->
          </h1>
          <!-- <div class="nashian">
            <adsbygoogle :ad-slot="'5950915078'"/>
          </div>-->
        </div>
        <div class="post">
          <div class="content-wrapper">
            <!-- The Author Part -->
            <div class="author">
              <div class="author-head">
                <nuxt-link :to="'/single-channel/'+ single.chan_name.id">
                  <img
                    v-lazy="'//video2.vixtream.net'+single.chan_name.poster_image"
                    :alt="single.chan_name.tv_name"
                    class="sv-avatar kalusha"
                  >
                </nuxt-link>
                <div class="sv-name ml-auto mr-auto">
                  <div class="mr-2">
                    <a></a>
                    {{ single.chan_name.tv_name }} - Videos
                  </div>
                  <div class="c-sub" @click="subscribe()">
                    <div class="c-f">Subscribe</div>
                    <div class="c-s">{{single.chan_name.subs}}</div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div class="sv-views float-none d-inline-block">
                  <div class="sv-views-count">
                    {{ single.view_count }} views
                    <div class="d-inline-block" style="font-size:1rem;">
                      <span class="green d-inline-block">
                        <a @click="likeVid(single.v_id)" class="ml-2">
                          <i class="fa fa-thumbs-up" style="color:green">
                            {{likes}}
                            <span class="text-gray-dark">Likes</span>
                          </i>
                        </a>
                      </span>
                      <span class="green d-inline-block">
                        <a @click="dislikeVid( single.v_id)" class="ml-2">
                          <i class="fa fa-thumbs-down" style="color:red">
                            {{likes}}
                            <span class="text-gray-dark">DisLikes</span>
                          </i>
                        </a>
                      </span>
                    </div>
                  </div>

                  <div class="sv-views-progress">
                    <div class="sv-views-progress-bar"></div>
                  </div>
                  <div class="sv-views-stats">
                    <div class="dropdown">
                      <a
                        style="text-decoration: none; color: black;"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          class="fa fa-share-alt"
                          style="color: #fbe631; padding-left: 5px; margin-top: 10px;"
                        ></i>
                        Share
                        <span class="caret"></span>
                      </a>
                      <ul class="dropdown-menu poll">
                        <social-sharing
                          :url="'https://www.ethiov.com/single-video/' + single.v_id"
                          :title="'EthioV - ' +single.title"
                          :description="'EthioV - ' + single.description"
                          :quote="'EthioV - ' + single.description"
                          :hashtags="'#EthioV, ' + single.tags"
                          inline-template
                        >
                          <div>
                            <network class="dropdown-item" network="facebook">
                              <i
                                class="fa fa-fw fa-facebook"
                                style="color: #3b5998; padding-left: 5px; margin-top: 10px;"
                              ></i>- Facebook
                            </network>

                            <network network="twitter" class="dropdown-item">
                              <i
                                class="fa fa-fw fa-twitter"
                                style="color: #55acee; padding-left: 5px; margin-top: 10px;"
                              ></i>- Twitter
                            </network>
                            <network network="telegram" class="dropdown-item">
                              <i
                                class="fa fa-telegram"
                                style="color: #00405d; padding-left: 5px; margin-top: 10px;"
                              ></i>- Telegram
                            </network>
                          </div>
                        </social-sharing>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="clearfix"></div>
            </div>
            <!-- End of The Author Part -->
            <div class="info">
              <div>
                <p>{{ single.cat_name }} | {{single.tags}}</p>
                <h4>About :</h4>
                <p>{{single.description}}</p>
              </div>
            </div>
            <div class="fikir-vids">
              <div class="row">
                <div
                  class="col-lg-3 col-sm-6 col-xs-12"
                  v-for="(pub,$index) in owned"
                  :key="$index"
                >
                  <div class="nash-vids row">
                    <div class="col-sm-12 col-xs-6">
                      <div class="Vimg itemContainer" style="background-color: black;">
                        <!-- <clazy-load :src="pos_url+'/'+pub.filename">
                        <div
                          slot="placeholder"
                          class="bg-inverse"
                          style="background-color: black; height:200px;"
                        ></div>-->
                        <img class="imgur" v-lazy="pos_url+'/'+pub.filename2" :alt="pub.title">
                        <!-- </clazy-load> -->
                        <nuxt-link :to="'/single-video/'+pub.v_id">
                          <div ng-click="viewVideo(pub.v_id)" class="play">
                            <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                          </div>
                        </nuxt-link>
                        <div class="time">{{pub.duration}}</div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-xs-6" ng-click="viewVideo(pub.v_id)">
                      <div class="descr">
                        <h1 style="font-size: 14px !important;">
                          <a
                            style="text-decoration: none;"
                            class="text"
                            :aria-label="pub.title"
                            :title="pub.title"
                          >{{pub.title}}</a>
                          <a
                            style="text-decoration: none;"
                            class="text smallFont"
                            :aria-label="pub.title_en"
                            :title="pub.title_en"
                          >{{pub.title_en}}</a>
                        </h1>
                      </div>
                      <nuxt-link :to="'/single-video/'+pub.v_id" style="text-decoration: none;">
                        <small style="color: #7e7e7e; font-size: 12px; font-weight: 300">
                          <i class="fa fa-eye" style="color: #d59541"></i>
                          {{pub.view_count}} views
                          <i
                            class="fa fa-dot-circle-o"
                            style="color: #d59541"
                          ></i>
                          {{pub.created_at | moment("from", "now")}}
                        </small>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <button
                  style="margin-left: auto; margin-right: auto;margin-top: 19px; width: 350px;"
                  class="d-lg-none d-block btn btn--orange text-center"
                  v-if="page < 4"
                  @click="loadmore()"
                >Show More...</button>
                <div
                  style="margin-top: 19px; width: 142px;"
                  class="d-lg-none d-block btn btn--orange text-center"
                  v-if="page > 3"
                >
                  <nuxt-link to="/">
                    <button
                      class="btn btn--orange text-center"
                      style="margin-left: auto; margin-right: auto;margin-top: 19px; width: 252px;"
                    >Back to Home:-)</button>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="comments" ng-controller="navController">
              <div class="reply-comment" ng-controller="videoController">
                <div class="rc-header">
                  <i class="cv cvicon-cv-comment"></i>
                  <span class="semibold">All</span>
                  Comments
                </div>
                <div class="rc-ava" v-if="loggedIn">
                  <span v-if="loggedIn" class="i-circle">{{user.name.charAt(0)}}</span>
                </div>
                <div class="form-group">
                  <form @submit.prevent="addComments(user.id, single.v_id)">
                    <textarea
                      class="form-control mt-3"
                      name="com"
                      v-model="com"
                      id="grnash"
                      rows="3"
                    ></textarea>
                    <button type="submit" class="btn btn-warning pull-right mt-2">
                      <i class="fa fa-comments-o" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="fikir-vids" v-if="!loggedIn">
                <nuxt-link class="descr" to="/login">Sign in to comment!</nuxt-link>
              </div>
              <div class="comments-list">
                <div class="cl-comment" v-for="(comment, $index) in comments" :key="$index">
                  <div class="cl-avatar">
                    <a class="i-circle">{{comment.cat_name.charAt(0)}}</a>
                  </div>
                  <div class="cl-comment-text">
                    <div class="cl-name-date">. {{comment.created_at}}</div>
                    <div class="cl-text">{{comment.com}}</div>
                    <div class="cl-meta">
                      <span class="green">
                        <span class="circle"></span> 121
                      </span>
                      <span class="grey">
                        <span class="circle"></span>
                        {{comment.created_at}}
                      </span>
                    </div>
                    <Replies :rcomment="comment"/>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- right column -->
      </div>
      <div class="col-sm-12 col-lg-4 d-none d-lg-block">
        <div class="caption">
          <div class="left">
            <a>
              <h5 style="font-size: 19px;font-weight: 700; margin-bottom: 15px;">Other Videos</h5>
            </a>
          </div>
          <div id="dj_khalid" class="nashian mb-2" style="display:inline-block; background-color: #f7f7f7">

          </div>
          <div class="clearfix"></div>
          <div class="list">
            <div class="thumb row" v-for="(re,$index) in recommended" :key="$index">
              <div class="col-lg-6 col-sm-6" ng-click="viewVideo(re.v_id)">
                <div class="Vimg itemContainer" style="background-color: #0c0c0c">
                  <img
                    class="imgur"
                    height="400"
                    width="400"
                    v-lazy="pos_url + '/'+re.filename2"
                    :alt="re.title"
                  >
                  <nuxt-link :to="'/single-video/'+re.v_id">
                    <div ng-click="viewVideo(re.v_id)" class="play">
                      <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                    </div>
                  </nuxt-link>
                  <div class="time">{{re.duration}}</div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6" ng-click="viewVideo(re.v_id)">
                <div class="descr" style="padding-top: 0px;">
                  <h1 style="font-size: 14px !important;">
                    <nuxt-link
                      class="text"
                      style="text-decoration: none;"
                      :to="'/single-video/'+re.v_id"
                      :aria-label="re.title"
                      :title="re.title"
                    >{{re.title}}</nuxt-link>
                    <nuxt-link
                      class="text smallFont"
                      :to="'/single-video/' + re.v_id"
                      :aria-label="re.title_en"
                      :title="re.title_en"
                    >{{re.title_en}}</nuxt-link>
                  </h1>
                </div>
                <nuxt-link :to="'/single-video/'+re.v_id" style="text-decoration: none;">
                  <small style="color: #7e7e7e; font-size: 12px; font-weight: 300">
                    <i class="fa fa-eye" style="color: #d59541"></i>
                    {{re.view_count}} views
                    <i
                      class="fa fa-dot-circle-o"
                      style="color: #d59541"
                    ></i>
                    {{re.created_at | moment("from", "now")}}
                  </small>
                </nuxt-link>
                <!-- <small>{{single.cat_name}}</small> -->
              </div>
              <div class="clearfix"></div>
            </div>
            <button
              style="margin-left: 10px;margin-top: 19px; width: 350px;"
              class="btn btn--orange text-center"
              v-if="page < 4"
              @click="loadmore2()"
            >Show More...</button>
            <div
              style="margin-left: 10px; margin-top: 19px; width: 350px;"
              class="btn btn--orange text-center"
              v-if="page > 3"
            >
              <nuxt-link to="/">
                <button
                  style="margin-left: 10px;margin-top: 19px; width: 350px;"
                  class="btn btn--orange text-center"
                >Back to Home:-)</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ViewCatogs from "@/components/views_catogs";
// import Wideads from "@/components/adsComponents/wide_ads";
// import Tallads from "@/components/adsComponents/tall_ads";
import Replies from "@/components/replies/replies";
import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {
  head() {
    return {
      title: this.single.title + "- Ethio TV Stream",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "EthioV - " + this.single.description + ". "
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords:
           this.single.title +", " + this.single.title_en +  ", Fana, ETV, Amhara, OBN, Walta, Bethel TV, Evangelical TV, politics, Worldwide, live stream, sports, sales, Social Media, Live Stream, Religion, Politics, Entertainment, News, Documentary"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.single.title
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ethiov.com/single-video/" + this.single.v_id
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://video2.vixtream.net/" + this.single.filename
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "video.movie"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "EthioV - " + this.single.description + ". "
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.single.title
        },
        {
          hid: "twitter:url",
          property: "twiiter:url",
          content: "https://www.ethiov.com/single-video/" + this.single.v_id
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "https://video2.vixtream.net/" + this.single.filename
        },
        {
          hid: "twitter:type",
          property: "twitter:type",
          content: "video.movie"
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "EthioV - " + this.single.description + ". "
        }
      ],
      script: [
        {
          innerHTML: `
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
        `
        },
        {
          innerHTML: `
            googletag.cmd.push(function() {
            googletag.defineSlot('/107918458/ethiov/Ethiov_Side', [[300, 250], [250, 250], [336, 280], [240, 400], [300, 600], [320, 50], [468, 60], [970, 90], [200, 200], [300, 100]], 'dj_khalid').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            });
        `
        },
        {
           innerHTML: `
           googletag.cmd.push(function() { googletag.display('dj_khalid'); })
           `
        }

      ]
    };
  },
  components: {
    Replies
    // Wideads,
    // Tallads
  },
  methods: {
    subscribe() {
      if (this.loggedIn) {
        axios
          .post(
            base_url +
              "/subscribe/" +
              this.user.id +
              "/" +
              this.single.chan_name.id
          )
          .then(res => {
            this.$toast.success("You have Subscibed to this Channel...");
          });
      } else {
        this.$toast.error("Sign in to Subscribe to this Channel");
      }
    },
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
              this.owned.push(temp);
            });
          }
        });
    },
    loadmore2() {
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
              this.recommended.push(temp);
            });
          }
        });
    },
    likeVid(v_id) {
      if (this.loggedIn) {
        axios
          .post(base_url + "/like_vid/" + this.user.id + "/" + v_id)
          .then(res => {
            axios
              .post(base_url + "/countLike/" + this.single.v_id)
              .then(rres => {
                this.likes = rres.data;
              });
            this.$toast.success("You Liked this Video.");
          });
      } else {
        this.$toast.error("Sign in To Like or Dislike Video");
      }
    },
    dislikeVid(v_id) {
      if (this.loggedIn) {
        axios
          .post(base_url + "/dislike_vid/" + this.user.id + "/" + v_id)
          .then(res => {
            axios
              .post(base_url + "/countDislike/" + this.single.v_id)
              .then(rres => {
                this.dislikes = rres.data;
              });
          });
      } else {
        this.$toast.error("Sign in To Like or Dislike Video");
      }
    },
    addComments(user_id, v_id) {
      if (!this.loggedIn) {
        this.$toast.success("You Commented on this Video.");
      }
      axios
        .post(base_url + "/comment/" + user_id + "/" + v_id, {
          com: this.com,
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(res => {
          get_single_comment(res.data).then(res => this.comments.push(res));
          this.com = "";
          this.$toast.success("You Commented on this Video.");
        });
    }
  },
  async asyncData(context) {
    let single_data = await axios.post(
      base_url + "/single_video/" + context.params.videoID
    );
    let recommended_videos = await axios.post(
      base_url +
        "/recommended/" +
        single_data.data.category_id +
        "/" +
        single_data.data.v_id
    );
    // let sing_cn = await getCatname(single_data.data.category_id);
    // let sing_views = await getViews(single_data.data.v_id);
    let single = single_data.data;
    // single.cat_name = sing_cn.category_name;

    // single.views = sing_views;
    return {
      recommended: [...recommended_videos.data],
      owned: [],
      pos_url: "https://video2.vixtream.net",
      cUrl: "https://video2.vixtream.net/vod/v/" + single_data.data.v_id,
      single: single,

      likes: 0,
      com: "",
      comments: [],
      isRe: false,
      rep: "",
      setTab: "",
      dislikes: 0,
      isReady: false,
      page: 2
    };
  },
  mounted: function() {
    // if (process.browser) {
    //   let recaptchaScript = document.createElement("script");
    //   recaptchaScript.setAttribute(
    //     "src",
    //     "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    //   );
    //   document.body.appendChild(recaptchaScript);
    //   let adsScript = document.createElement("script");
    //   recaptchaScript.setAttribute("src", "/js/ads.js");
    //   document.body.appendChild(adsScript);
    // }
    let mydata = [];
    axios
      .post(
        base_url +
          "/byOwner/" +
          this.single.publisher_id +
          "/" +
          this.single.v_id
      )
      .then(resp => {
        this.owned = resp.data;
      });
    axios.post(base_url + "/fetchComments/" + this.single.v_id).then(res => {
      loops(res.data).then(data => {
        this.comments = data;
      });
    });
    if (this.loggedIn) {
      axios
        .post(base_url + "/countSub/" + this.single.chan_name.id)
        .then(res => {
          this.single.chan_name.subs = res.data;
        });
      axios.post(base_url + "/countLike/" + this.single.v_id).then(res => {
        return (this.likes = res.data);
      });

      axios.post(base_url + "/countDislike/" + this.single.v_id).then(res => {
        return (this.dislikes = res.data);
      });
    }
    $(function() {
      var vid = $(".video-container");

      var top =
        vid.offset().top - parseFloat(vid.css("margin-top").replace(/auto/, 0));

      $(window).on("scroll", function(event) {
        // what the y position of the scroll is
        var y = $(this).scrollTop();

        // whether that's below the form
        if (y >= top) {
          // if so, ad the fixed class
          if (vid.is(".aside")) {
            return;
          }
          vid.addClass("aside");
        } else {
          // otherwise remove it
          vid.removeClass("aside");
        }
      });
    });
  },
  created() {}
};
// async function loop(params) {
//   let main_array = [];
//   var i = 0;
//   for (i = 0; i < params.length; i++) {
//     let temp = {};
//     temp = params[i];
//     let cat = await getCatname(temp.category_id);
//     temp.cat_name = "";
//     main_array.push(temp);
//   }
//   return main_array;
// }

async function loops(params) {
  let main_array = [];
  var i = 0;
  for (i = 0; i < params.length; i++) {
    let temp = {};
    temp = params[i];
    let cat = await getUsername(temp.user_id);
    temp.cat_name = cat.name;

    main_array.push(temp);
  }
  return main_array;
}
async function get_single_comment(params) {
  let temp = {};
  temp = params;
  let cat = await getUsername(params.user_id);
  temp.cat_name = cat.name;
  return temp;
}

// async function getCatname(v_id) {
//   let t_resp = await axios.post(base_url + "/return_cat/" + v_id);
//   return t_resp.data[0];
// }
// async function getViews(v_id) {
//   let t_resp = await axios.post(base_url + "/return_view/" + v_id);
//   return t_resp.data;
// }

async function getUsername(user_id) {
  let t_resp = await axios.post(base_url + "/return_user/" + user_id);
  return t_resp.data[0];
}
</script>

<style scoped>
.video-container {
  position: relative;
  /* padding-bottom: 56.25%; */
  padding-top: 56.25%;
  overflow: hidden;
  transition: 0.5s;

  /* height: 480px; */
  background-color: hsl(0, 0%, 10%);
}

.video-container > iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 854px;
}
.aside .video-container {
  max-height: 100px;
  width: auto;
}
.aside h1 {
  opacity: 0;
}
/*
.post {
  top: calc(480px + 6em);
  padding: 1em;
  width: 60%;
}
.post .content-wrapper {
  margin-top: 1em;
}
.post > .content-wrapper {
  line-height: 1.5;
  transition: background-color 0.5s;
  padding: 1em;
} */
/* .video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} */
@media (min-width: 500px) {
  .video-container {
    padding-top: 65.25%;
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .aside {
    position: fixed;
    width: 40%;
    z-index: 100;
    margin-top: 6rem;
    top: 0;
    margin-left: auto;
    right: 0;
    margin-right: 5px;
    align-self: baseline;
    padding-top: 23% !important;
  }
}
.aside {
  position: fixed;
  width: 23%;
  z-index: 100;
  margin-top: 4.3rem;
  top: 0;
  margin-left: auto;
  right: 0;
  margin-right: 5px;
  align-self: baseline;
  padding-top: 13% !important;
}
.imgur {
  display: block;
  max-width: 190px;
  max-height: 86px;
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 300px) and (max-width: 768px) {
  .imgur {
    max-width: 250px;
    max-height: 200px;
    width: 100%;
  }
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
.nashian {
  width: 200px !important;
  height: 200px !important;
}
@media (min-width: 500px) {
  .nashian {
    width: 300px !important;
    height: 250px !important;
  }
}
@media (min-width: 800px) {
  .nashian {
    width: 336px !important;
    height: 280px !important;
  }
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px; /* fallback */
  max-height: 32px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
}
@media (max-width: 800px) {
  .text {
    line-height: 26px; /* fallback */
    max-height: 62px; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
  }
}
.nashian {
  width: 200px !important;
  height: 200px !important;
}
@media (min-width: 500px) {
  .nashian {
    width: 300px !important;
    height: 250px !important;
  }
}
@media (max-width: 500px) {
  .aside {
    position: fixed;
    width: 56%;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 1px;
    padding-top: 32%;
    height: 135px !important;
  }
}
@media (min-width: 501px) and (max-width: 768px) {
  .aside {
    position: fixed;
    width: 56%;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 1px;
    padding-top: 32% !important;
    height: 150px !important;
  }
}

@media (min-width: 800px) {
  .nashian {
    width: 336px !important;
    height: 280px !important;
  }
}
.kalusha {
  height: 66px;
  border-radius: 50%;
  width: 78px !important;
}
</style>
