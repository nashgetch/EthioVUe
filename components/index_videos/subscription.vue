<template>
  <div class>
  <span class="title">
      Subscription
  </span>
    <div class v-for="(owner, $index) in tvs" :key="$index">
      <div class="content-wrapper">
        <div class="owner">
          <a :href="'/single-channel/'+owner.id">
            <img
              :src="'//video2.vixtream.net' + owner.poster_image"
              :alt="owner.tv_name"
              class="asimg"
            >
          </a>
          <span class="title">
            {{owner.tv_name}} -
            <!-- <span>{{owner.description}}</span> -->
          </span>
        </div>
      </div>

      <SubVideos :Channel="owner"></SubVideos>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ViewCatogs from "@/components/views_catogs";
import SubVideos from "@/components/subscriptionvideos/videos";
const base_url = "https://ethiov.com/api";
export default {
  components: {
    ViewCatogs,
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
</style>

