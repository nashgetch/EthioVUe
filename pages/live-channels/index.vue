<template>
  <div style="padding-top: 6rem;" class="content-wrapper">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-1">
         <div class="form-group">
      <input
        type="text"
        v-model="searchString"
        name="name"
        class="form-control"
        id="name"
        required
        placeholder="Search for your Favorite Channel here."
        autocomplete="off"
      >
    </div>
      </div>
    </div>


    <div class="row">
      <div class="container mt-2">

        <div class="row mt-3 display-flex">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            v-for="(tv,$index) in tvs"
            :key="$index"
          >
            <nuxt-link :to="'/single-channel/' + tv.id">
              <div class="chn-image-container">
                <img class="imgur" v-lazy="turl + tv.poster_image" :alt="tv.tv_name">

                <div class="small-logo">
                  <img v-lazy="turl + tv.poster_image" :alt="tv.tv_name">
                </div>

                <div class="text-center mt-5">
                  <div class="chan-descrip">
                    <strong class="chan-title">{{tv.tv_name}}</strong>
                    <small style="font-size:10px">[{{tv.description}}]</small>
                    <!-- <span class="hideOverflow">{{tv.description}}</span> -->
                  </div>
                </div>
              </div>
            </nuxt-link>
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
  data() {
    return {
      searchString: ""
    };
  },
  head() {
    return {
      title: "EthioV Live Ethiopian TV Channels",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "EthioV - All Ethiopian Live Channels at one place."
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords:
            "Bethel TV, Ethiopian TV Channels, Religion, Politics, Ethiopia, Social Media, Africa"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "EthioV - Ethiopian Live Channels"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ethiov.com/live_channels"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/EthioV_LOGO_Black.png"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "EthioV - All Ethiopian Live Channels at one place."
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "EthioV - All Ethiopian Live Channels at one place."
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "EthioV - Ethiopian Live Channels"
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "EthioV - All Ethiopian Live Channels at one place."
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "/img/EthioV_LOGO_Black.png"
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
  asyncData() {
    return axios.post(base_url + "/live_channel").then(resp => {
      return {
        tvsss: [...resp.data],
        turl: "https://video2.vixtream.net"
      };
    });
  },
  computed: {
    tvs() {
      let searchString = this.searchString;
      if (!searchString) {
        return this.tvsss.filter(ref => {
          // console.log(ref);
          return (
            ref.category === "1" &&
            ref.chn !== "ammas" &&
            ref.chn !== "fanas" &&
            ref.chn !== "waltas"
          );
        });
      } else {
        searchString = searchString.trim().toLowerCase();
        // console.log(searchString);
        return this.tvsss.filter(ref => {
          if (ref.tv_name.toLowerCase().indexOf(searchString) !== -1) {
            return ref;
          }
        });
      }
    }
  }
};
</script>
<style>
.imgur {
  display: block;
  max-width: 274px;
  max-height: 115px;
  width: auto;
  height: auto;
  margin-right: auto;
  margin-left: auto;
}

</style>
