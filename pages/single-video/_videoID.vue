<template>
  <div class="container-fluid pl-0 pl-sm-5 pr-0 pr-sm-5" style="padding-top: 6rem;">
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
            <ViewCatogs
              :isSingle="true"
              :vid="single.v_id"
              :cat_id="single.category_id"
              :title_en="single.title_en"
              :title_am_ph="single.am_en_ph"
            />
          </h1>
        </div>
        <!-- <div class="adblock2" style>
          <div class="img">
            <Wideads/>
          </div>
        </div> -->
        <div class="content-wrapper">
          <!-- The Author Part -->
          <div class="author">
            <div class="author-head" ng-controller="navController">
              <a :href="'/single-channel/'+owner.id">
                <img
                  :src="'//video2.vixtream.net'+owner.poster_image"
                  :alt="owner.tv_name"
                  class="sv-avatar"
                >
              </a>
              <div class="sv-name">
                <div>
                  <a></a>
                  {{ owner.tv_name }} - Videos - {{ single.cat_name }}
                </div>
                <div class="c-sub" ng-click="subscribe(user.id, owner[0].id)">
                  <div class="c-f">Subscribe</div>
                  <div class="c-s">{{owner.subs}}</div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="sv-views">
              <div class="sv-views-count">{{ single.views }} views</div>
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
                            style="color: #fbe631; padding-left: 5px; margin-top: 10px;"
                          ></i>- Facebook
                        </network>

                        <network network="twitter" class="dropdown-item">
                          <i
                            class="fa fa-fw fa-twitter"
                            style="color: #fbe631; padding-left: 5px; margin-top: 10px;"
                          ></i>- Twitter
                        </network>
                        <network network="telegram" class="dropdown-item">
                          <i
                            class="fa fa-telegram"
                            style="color: #fbe631; padding-left: 5px; margin-top: 10px;"
                          ></i>- Telegram
                        </network>
                      </div>
                    </social-sharing>
                  </ul>
                </div>

                <span class="green">
                  <span class="circle"></span>
                </span>
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
              <div class="col-lg-3 col-sm-6 col-xs-12" v-for="(pub,$index) in owned" :key="$index">
                <div class="nash-vids row">
                  <div class="col-sm-12 col-xs-6">
                    <div class="Vimg itemContainer" style="background-color: black;">
                      <clazy-load :src="pos_url+'/'+pub.filename">
                        <div
                          slot="placeholder"
                          class="bg-inverse"
                          style="background-color: black; height:200px;"
                        ></div>
                        <video class="imgur" :poster="pos_url+'/'+pub.filename" :alt="pub.title"></video>
                      </clazy-load>
                      <a :href="'/single-video/'+pub.v_id">
                        <div ng-click="viewVideo(pub.v_id)" class="play">
                          <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                        </div>
                      </a>
                      <div class="time">{{pub.duration}}</div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-xs-6" ng-click="viewVideo(pub.v_id)">
                    <div class="descr">
                      <h1 style="font-size: 14px !important;">
                        <a
                          class="hideOverflow"
                          :aria-label="pub.title"
                          :title="pub.title"
                        >{{pub.title}}</a>
                      </h1>
                    </div>
                    <div class="views">{{pub.views}} views</div>
                    <div class="percent">
                      <span class="circle"></span>
                      {{pub.cat_name}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="comments" ng-controller="navController">
            <div class="reply-comment" ng-controller="videoController" ng-show="checkCookie()">
              <div class="rc-header">
                <i class="cv cvicon-cv-comment"></i>
                <span class="semibold">236</span>
                Comments
              </div>
              <div class="rc-ava">
                <span ng-show="checkCookie()" class="i-circle">{{user.name.charAt(0)}}</span>
              </div>
              <div class="form-group">
                <form ng-submit="addComments(single.v_id)">
                  <textarea
                    class="form-control mt-3"
                    name="com"
                    ng-model="com"
                    id="grnash"
                    rows="3"
                  ></textarea>
                  <button type="submit" class="btn btn-warning pull-right mt-2">
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                  </button>
                </form>
              </div>c
              <div class="clearfix"></div>
            </div>
            <div class="fikir-vids" ng-hide="checkCookie()">
              <a class="descr" href="#/login">Sign in to comment!</a>
            </div>
            <div class="comments-list" ng-controller="videoController">
              <div class="cl-header">
                <div class="c-nav">
                  <ul ng-show="checkCookie()" class="list-inline">
                    <li>
                      <a class="active">
                        Popular
                        <span class="hidden-xs">Comments</span>
                        <button class="btn btn-warning pull-right" ng-click="refresh(single.v_id)">
                          <i class="fa fa-refresh pull-right" aria-hidden="true"></i>
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="cl-comment" ng-repeat="comment in comments">
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
                      {{comment.create_at}}
                    </span> .
                    <a ng-click="isRe=!isRe">Reply</a>
                  </div>
                  <div class="cl-replies">
                    <a ng-click="showComments(comment.comment_id)">
                      View all 5
                      replies
                      <i
                        class="fa fa-chevron-down"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>

                  <div
                    class="reply-comment"
                    ng-controller="videoController"
                    ng-show="checkCookie() && isRe"
                  >
                    <div class="rc-ava">
                      <span ng-show="checkCookie()" class="i-circle">{{user.name.charAt(0)}}</span>
                    </div>
                    <div class="form-group">
                      <form ng-submit="addReply(comment.comment_id)">
                        <textarea
                          class="form-control mt-3"
                          name="rep"
                          ng-model="rep"
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
                  <div class="clearfix"></div>
                  <div
                    class="cl-comment-reply"
                    ng-show="whichComment(comment.comment_id)"
                    ng-repeat="comment in comment.replies"
                  >
                    <div class="cl-avatar">
                      <a class="i-circle">{{comment.cat_name.charAt(0)}}</a>
                    </div>
                    <div class="cl-comment-text">
                      <div class="cl-name-date">. {{comment.created_at}}</div>
                      <div class="cl-text">{{comment.rep}}</div>
                      <div class="cl-meta">
                        <span class="green">
                          <span class="circle"></span> 70
                        </span>
                        <span class="grey">
                          <span class="circle"></span> 9
                        </span> .
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="cl-flag">
                    <a>
                      <i class="cv cvicon-cv-flag"></i>
                    </a>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>-->
        </div>
        <!-- right column -->
      </div>
      <div class="col-sm-12 col-lg-4 d-none d-lg-block">
        <div class="caption">
          <!-- <Tallads/> -->
          <div class="left">
            <a>
              <h5 style="font-size: 19px;font-weight: 700; margin-bottom: 15px;">Other Videos</h5>
            </a>
          </div>
          <div class="clearfix"></div>
          <div class="list">
            <div class="thumb row" v-for="(re,$index) in recommended" :key="$index">
              <div class="col-lg-6 col-sm-6" ng-click="viewVideo(re.v_id)">
                <div class="Vimg itemContainer" style="background-color: #0c0c0c">
                  <video
                    class="imgur"
                    height="400"
                    width="400"
                    :poster="pos_url + '/'+re.filename"
                    :alt="re.title"
                  ></video>
                  <a :href="'/single-video/'+re.v_id">
                    <div ng-click="viewVideo(re.v_id)" class="play">
                      <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                    </div>
                  </a>
                  <div class="time">{{re.duration}}</div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6" ng-click="viewVideo(re.v_id)">
                <div class="descr">
                  <h1 style="font-size: 14px !important;">
                    <a class="hideOverflow" :aria-label="re.title" :title="re.title">{{re.title}}</a>
                  </h1>
                </div>
                <ViewCatogs :vid="re.v_id" :cat_id="re.category_id"/>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewCatogs from "@/components/views_catogs";
import Wideads from "@/components/adsComponents/wide_ads";
import Tallads from "@/components/adsComponents/tall_ads";
import axios from "axios";

const base_url = "https://ethiov.com/api";
export default {
  head() {
    return {

      title: this.single.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "EthioV - " + this.single.description + ". " + this.single.tags
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords: "Video, " + this.single.title + ", " + this.single.tags
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
          content:
            "EthioV - " + this.single.description + ". " + this.single.tags
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
          content:
            "EthioV - " + this.single.description + ". " + this.single.tags
        }
      ]
    };
  },
  components: {
    ViewCatogs,
    Wideads,
    Tallads
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
    let sing_cn = await getCatname(single_data.data.category_id);
    let sing_views = await getViews(single_data.data.v_id);
    let single = single_data.data;
    single.cat_name = sing_cn.category_name;
    single.views = sing_views;
    return {
      recommended: [...recommended_videos.data],
      owned: [],
      pos_url: "https://video2.vixtream.net",
      cUrl: "https://video2.vixtream.net/vod/v/" + single_data.data.v_id,
      single: single,
      owner: {}
    };
  },
  mounted: function() {
     if (process.browser) {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
      document.body.appendChild(recaptchaScript)
      let adsScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '/js/ads.js')
      document.body.appendChild(adsScript)
    }

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
        loop(resp.data).then(data => {
          this.owned = data;
        });
      });
    axios
      .post(base_url + "/video_owner/" + this.single.publisher_id)
      .then(res => {
        this.owner = res.data;
        axios.post(base_url + "/countSub/" + this.owner.id).then(res => {
          this.owner.subs = res.data;
        });
      });
  },
 created() {

  },
};
async function loop(params) {
  let main_array = [];
  var i = 0;
  for (i = 0; i < params.length; i++) {
    let temp = {};
    temp = params[i];
    let cat = await getCatname(temp.category_id);
    temp.cat_name = cat.category_name;
    // getViews(temp.v_id).then(resp => {
    //   temp.views = resp;
    //   main_array.push(temp);
    // });
    main_array.push(temp);
  }
  return main_array;
}

async function getCatname(v_id) {
  let t_resp = await axios.post(base_url + "/return_cat/" + v_id);
  return t_resp.data[0];
}

async function getViews(v_id) {
  let t_resp = await axios.post(base_url + "/return_view/" + v_id);
  return t_resp.data;
}
</script>

<style scoped>
.video-container {
  position: relative;
  /* padding-bottom: 56.25%; */
  padding-top: 56.25%;

  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-width: 500px) {
  .video-container {
    padding-top: 63.25% !important;
  }
}
.imgur {
  display: block;
  max-width: 190px;
  max-height: 115px;
  width: auto;
  height: auto;
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
</style>

