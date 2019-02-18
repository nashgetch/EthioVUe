 <template>
  <section style="padding-top:6rem;">
    <div class="container-fluid top-margin-bn-sm-md" style="padding-top: .2rem;">
      <div class="row fas">
        <div class="col-lg-10 offset-lg-2">
          <div class="row">
            <div class="col-md-2 col-sm-12 mt-2 channel-name d-none d-sm-block">
              <a href="/">Videos</a> |
              <a href="/live-channels">Live TVs</a>
            </div>
            <div class="col-md-8 col-sm-12 text-center">
              <ul class="nav nav-pills">
                <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" href="/">
                    <span class="d-none d-sm-block">Latest Videos</span>
                    <i
                      class="active_route fa fa-clock-o d-inline-block d-sm-none"
                      style="font-size: 15px;"
                    ></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Latest</span>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" href="/category">
                    <span class="d-none d-sm-block">Category</span>
                    <i class="fa fa-video-camera d-inline-block d-sm-none" style="font-size: 15px;"></i>
                    <span
                      class="d-inline-block d-sm-none"
                      style="font-size: 10px; font-weight: bold;"
                    >Category</span>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto">
                  <a class="nav-link" href="/trending">
                    <span class="d-none d-sm-block">Trending</span>

                    <i class="fa fa-fire d-inline-block d-sm-none" style="font-size: 15px;"></i>
                    <span
                      style="font-size: 10px; font-weight: bold;"
                      class="d-inline-block d-sm-none"
                    >Trending</span>
                  </a>
                </li>
                <li class="nav-item text-center ml-auto mr-auto active">
                  <a v-if="loggedIn" class="nav-link active" data-toggle="pill" href="/subscription">
                    <span class="d-none d-sm-block">Subscription</span>
                    <i
                      class="fa fa-envelope-open d-inline-block d-sm-none"
                      style="font-size: 15px;"
                    ></i>
                    <span
                      style="font-size: 10px; font-weight: bold;"
                      class="d-inline-block d-sm-none"
                    >Subscription</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr style="background-color: #19ff00;">
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <span class="d-inline-block d-sm-none title" style="font-weight: bold">Your Subscripition -
        <strong>{{user.name}}</strong>
      </span>
      <div class>
        <span class="d-inline-block d-sm-none title">Subscription</span>
        <div v-for="(owner, $index) in tvs" :key="$index">
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

