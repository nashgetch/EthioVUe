 <template>
  <section style="padding-top:6rem;">
    <div class="container-fluid top-margin-bn-sm-md" style="padding-top: .2rem;">
      <div class="row fas">
        <div class="col-lg-10 offset-lg-2">
          <div class="row">
            <div class="col-md-2 col-sm-12 mt-2 channel-name d-none d-sm-block">
              <nuxt-link to="/">Videos</nuxt-link> |
              <nuxt-link to="/live-channels">Live TVs</nuxt-link>
            </div>
            <div class="col-md-8 col-sm-12 text-center">
              <ul class="nav nav-pills">
                <li class="nav-item text-center ml-auto mr-auto">
                  <nuxt-link class="nav-link" to="/">
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
                  <nuxt-link class="nav-link" to="/category">
                    <span class="d-none d-sm-block">Category</span>
                    <i class="fa fa-video-camera d-inline-block d-sm-none" style="font-size: 15px;"></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Category</span>
                  </nuxt-link>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <nuxt-link class="nav-link" to="/trending">
                    <span class="d-none d-sm-block">Trending</span>

                    <i class="fa fa-fire d-inline-block d-sm-none" style="font-size: 15px;"></i>
                    <span
                      style="font-size: 10px; font-weight: bold;"
                      class="d-inline-block d-sm-none"
                    >Trending</span>
                  </nuxt-link>
                </li>
                <li class="nav-item text-center ml-auto mr-auto active">
                  <nuxt-link v-if="loggedIn" class="nav-link active" data-toggle="pill" to="/subscription">
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
          <hr style="background-color: #19ff00;">
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <span class="title" style="font-weight: bold">Your Subscripition -
        <strong>{{user.name}}</strong>
      </span>
      <div class>

        <div v-for="(owner, $index) in tvs" :key="$index">
          <div class="content-wrapper">
            <div class="owner">
              <nuxt-link :to="'/single-channel/'+owner.id">
                <img
                  v-lazy="'//video2.vixtream.net' + owner.poster_image"
                  :alt="owner.tv_name"
                  class="asimg"
                >
              </nuxt-link>
              <span class="title">
                {{owner.tv_name}}
                <small>- Latest Updates from {{owner.tv_name}}</small>
                <!-- <span>{{owner.description}}</span> -->
              </span>
            </div>
          </div>

          <SubVideos :Channel="owner"></SubVideos>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import SubVideos from "@/components/subscriptionvideos/videos";
const base_url = "https://ethiov.com/api";
export default {
   head() {
    return {
      title: "EthioV - Subscription - Ethiopian Videos and Live channels",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " Your Subscriptions - News, Entertainment, Current Affairs and Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
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
            "EthioV - Subscription - Ethiopian Live Channels and Videos on Demand. Ethiopia's Reliable TVs and Videos Archive. All Your Favorite TV Channels"
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
            "Your Subscription - News, Entertainment, Current Affairs and Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
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
            "Your Subscription - News, Entertainment, Current Affairs and Ethiopian Live Channels at one place. Ethiopia's Reliable News and Video Channel. You can find Ethiopian Videos and live TV channels here. You Can Browse Latest and Treanding Videos and catch up to your favorite shows online with our Instant Videos Feature."
        }
      ],
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
  components: {
    SubVideos
  },
  data() {
    return {
      page: 1,
      options: [],
      tvs: [],
      cat_id: 1
    };
  },
  mounted: function() {
    axios
      .post(base_url + "/mySubs/" + this.user.id, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        this.tvs = [...res.data];
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
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

<style scoped>
.v-select pol {
  margin-left: 0px !important;
}
.owner {
  position: relative;
  width: 100%;
  display: table;
  font-size: 0;
  margin-bottom: 30px;
  align-items: center;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 12px;
}
.owner .asimg {
  width: 105px;
  height: 65px;
  margin-right: 28px;
  border-radius: 78px;
}
.owner .title {
  /* color: #fbe631 !important; */
  font-size: 16px;
  vertical-align: -4px;
  font-weight: 700;
  display: inline-block;
  /* text-align: center;
  margin-left: auto;
  margin-right: auto; */
}
.title{
   font-size: 16px;
  vertical-align: -4px;
  font-weight: 700;
  display: inline-block;
}
.kalusha {
  color: #fbe631;
  background-color: black;
  width: 276px;

}
</style>

