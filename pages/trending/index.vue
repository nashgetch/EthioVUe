<template>
 <div style="padding-top: 6rem;" class="content-wrapper">
    <!-- <div class="bars">
      <input type="text" v-model="searchString" placeholder="Search Channels here...">
    </div>-->
    <div class="row">
      <div class="container mt-2">
        <div class="row mt-3 display-flex">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            v-for="(video,$index) in videos"
            :key="$index"
          >
            <a :href="'/single-video/'+video.v_id">
              <div class="chn-image-container">
                <img class="imgur" :src="'//video2.vixtream.net/' + video.filename" :alt="video.title">

                <div class="text text-center mt-5">
                  <div class="text">
                    <strong class="chan-title">{{video.title}}</strong>
                    <small style="font-size:10px">[{{video.title_en}}]</small>
                    <!-- <span class="hideOverflow">{{video.description}}</span> -->
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
            "All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live video channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords:
            "Bethel video, Africa, Evangelical, Religion, Politics, Ethiopia, Entertainment, Sports, Social Media, travel"
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "EthioV - Ethiopian Live Channels and Videos on Demand. Ethiopia's Reliable videos and Videos Archive. All Your Favorite video Channels"
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
            "All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live video channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
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
            "EthioV - All Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live video channels here."
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
  async asyncData() {
    // let videose = await axios.post(base_url + "/live_channel");
    let { data } = await axios.post(base_url + "/trending", {
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
      },
      turl: "https://video2.vixtream.net",
      nomoredata: false,
      LoadmoreText: "Load More ..."
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
    infiniteHandler() {
      axios
        .post(base_url + "/trending", {
          page: this.page,
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(({ data }) => {
          // console.log(data.data);
          this.page += 1;
          if (data.data.length) {
            data.data.forEach(element => {
              let temp = {};
              temp = element;
              this.videos.push(temp);
            });
          }
          this.LoadmoreText = "No More Data";
          this.nomoredata = true;
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
.title {
  /* color: #fbe631 !important; */
  font-size: 16px;
  vertical-align: -4px;
  font-weight: 700;
  display: inline-block;
  /* text-align: center;
  margin-left: auto;
  margin-right: auto; */
}
.v-select pol {
  margin-left: 0px !important;
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

/* @media (min-width: 768px) { */
  .kygo {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }
/* } */
.imgur {
  display: block;
  max-width: 232px;
  max-height: 150px;
  width: auto;
  height: auto;
  margin-right: auto;
  margin-left: auto;
}
</style>

