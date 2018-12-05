<template>
  <div style="padding-top: 6rem;" class="content-wrapper">
    <div class="row">
      <div class="container mt-2">
        <div class="row mt-3 display-flex">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            v-for="(tv,$index) in tvs"
            :key="$index"
          >
            <nuxt-link :to="'/single_channel/'+tv.id">
              <div class="chn-image-container">
                <img :src="turl + tv.poster_image" :alt="tv.tv_name">

                <div class="small-logo">
                  <img :src="turl + tv.poster_image" :alt="tv.tv_name">
                </div>

                <div class="text-center mt-5">
                  <div class="chan-descrip">
                    <strong class="chan-title">{{tv.tv_name}}</strong>
                    <span>[{{tv.chn}}]</span>
                    <span class="hideOverflow">{{tv.description}}</span>
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

<style scoped>
.row.display-flex {
  display: flex;
  flex-wrap: wrap;
}

.row.display-flex > [class*="col-"] {
  display: flex;
  flex-direction: column;
}

.thumbnail.display-flex {
  display: flex;
  flex-wrap: wrap;
}

.row.display-flex > [class*="blog-"] {
  display: flex;
  flex-direction: column;
}

.hideOverflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
}
</style>



<script>
import axios from "axios";
const base_url = "https://ethiov.com/api";
export default {
  head() {
    return {
      title: 'EthioV Live Ethiopian TV Channels',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'EthioV - All Ethiopian Live Channels at one place.'
        },{
          hid: 'keywords',
          name: 'keywords',
          keywords: 'Fana TV, Walta, EBC, Bethel TV, Ethiopian TV Channels'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'EthioV - Ethiopian Live Channels'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://ethiov.com/live_channels'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/img/EthioV_LOGO_Black.png'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'EthioV - All Ethiopian Live Channels at one place.'
        }

      ]
    }
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
        return this.tvsss.filter(ref=>{
            return ref.tv_name !== 'test';
        })
    }
  }
};
</script>

