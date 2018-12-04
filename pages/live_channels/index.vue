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
const base_url = "https://locahost:8000";
export default {
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

