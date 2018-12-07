<template>
  <div style="margin-top: 6rem; position: relative;">
    <!-- <div id="processing" class="text-center" style="background-color: white;
    margin-left: auto;
    margin-right: auto;">
        <img src="/img/ajax6.gif" width="100px" height="100px">
    </div>-->
    <div class="container parentDiv">
      <div class="row display-flex">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem"
          v-for="(video, $index) in search_results"
          :key="$index"
        >
          <div class="kaleb-vids">
            <div class="Vimg itemContainer">
              <nuxt-link :to="'/single-video/' + video.v_id">
                <video :poster="'//video2.vixtream.net/' + video.filename" :alt="video.title"></video>
                <div class="play">
                  <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                </div>
              </nuxt-link>
              <div class="time">{{video.duration}}</div>
            </div>
            <div class="descr">
              <a class="hideOverflow" :href="'/single-video/' + video.v_id">{{video.title}}</a>
            </div>
            <div class="views">
              {{video.view_count}} views.
              <span class="percent">
                <span class="circle"></span>
                {{video.created_at}}
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
const base_url = "https://ethiov.com/api";
export default {
  asyncData(context) {
    return axios.post(base_url+"/translate/" + context.params.ser).then(res => {
      return { search_results: [...res.data] };
    });
  }
};
</script>
