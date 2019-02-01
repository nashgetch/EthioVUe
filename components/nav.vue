<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top p-0 p-sm-2">
      <div class="d-inline-flex">
        <div class="float-left ml-md-auto ml-lg-auto d-block d--none mt-auto ml-2">
          <a href="/" class style="font-size: 1.4rem;" id="menu-toggler">
            <!-- <i class="fa fa-youtube-play fa-2x d-none d-lg-none" style="color: #fbe631;"></i> -->
          </a>
        </div>
        <div
          id="m_search_menu"
          class="d-none d-lg-none mobile_search_menu p-2"
          :class="mobile_search"
        >
          <div class="d-flex flex-row flex-wrap">
            <div class="input-group">
              <span class="mt-auto mb-auto mr-2" style="font-size:1.45rem;" @click="close_search">
                <i class="fa fa-window-close"></i>
              </span>
              <!-- <imgnpm install vue-moment

                id="mobile_search_toggler"
                class="close_icon mt-3 mr-2"
                src="/img/cancel.png"
                alt
              >-->
              <form style="width: 100%; height: 50px;" @submit.prevent="search(search1)">
                <div class="input-group mt-1 mb-3">
                  <input
                    type="text"
                    class="nav-search"
                    name="search1"
                    v-model="search1"
                    placeholder="Search Videos"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  >
                  <button type="submit" class="input-group-addon btn">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="container p-0 ml-4 mr-auto mt-auto mb-auto text-dark">
          <div class="row">
            <nuxt-link to="/" class="d-none d-lg-block">
              <div class="text-center ethiov_logo">
                <img src="/img/EthioV_LOGO3.png" alt>
              </div>
            </nuxt-link>
            <div class="d-block d-lg-none">
              <a href="/dashboard" style="color: black;">e</a>
              <span style="color: white; font-weight: bold; font-size: 17px;">EthioV</span>
              <!-- <nuxt-link
                to="/"
                class
              >{{active_route==="index" ? "Home" : active_route==="live-channels"? active_route :"EthioV"}}</nuxt-link>-->
            </div>
            <div class="navbar-nav flex-row mr-auto mt-1 d-none d-lg-flex">
              <a href="/" class="nav-item nav-link" style="font-weight: bold;">
                Home
                <span class="sr-only">(current)</span>
              </a>
              <a
                class="nav-item nav-link"
                style="font-weight: bold; color: #fbe631;"
                href="/live-channels"
              >Live Channels</a>
              <a
                class="nav-item nav-link"
                style="font-weight: bold; color: #fbe631;"
                href="/religious-channels"
              >Religious channels</a>
              <a
                class="nav-item nav-link"
                style="font-weight: bold; color: #fbe631;"
                href="/education"
              >Educational</a>
            </div>

            <div class="col-6 col-lg-3 col-xl-4 d-none d-lg-block">
              <form @submit.prevent="search(search1)">
                <div class="input-group mt-1 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="search1"
                    v-model="search1"
                    placeholder="Search Videos"
                    aria-label="Search Videos"
                    aria-describedby="basic-addon2"
                    style="margin-top:0px !important;"
                  >
                  <button type="submit" class="input-group-addon btn">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="d-block d-lg-none mr-3 mt-auto mb-auto mb-md-0 mt-md-0">
          <i
            @click="open_search"
            id="mobile_menu_toggler"
            style="margin-top: 10px; font-size: 1.3rem; color: #fbe631;"
            class="fa fa-search"
          ></i>
        </div>
        <ul class="nav navbar-nav navbar-right mt-2 mt-lg-0">
          <li class="dropdown" style="font-family: none;">
            <a
              style="text-decoration: none; color: black;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span v-if="loggedIn" class="i-circle">{{user.name.charAt(0)}}</span>
              <nuxt-link to="/login" v-if="!loggedIn">
                <i class="fa fa-sign-in" style="font-size:30px; color: #fbe631;"></i>
              </nuxt-link>
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu poll" v-if="loggedIn">
              <li>
                <a class="dropdown-item" href="/watchlist">My Watchlist</a>
              </li>
              <!-- <li>
                <a class="dropdown-item" href="/subscription">Subscription</a>
              </li>
              <li>
                <a class="dropdown-item" href="/">Account Info</a>
              </li>-->
              <li role="separator" class="divider"></li>
              <li>
                <a class="dropdown-item" @click.prevent="logout" href="/">Logout</a>
              </li>
            </ul>
          </li>
        </ul>

        <!-- <ul class="nav navbar-nav navbar-right">
          <li class="dropdown" ng-controller="commentController">
            <a
              style="text-decoration: none; color: black;"
              href="javascript:void(0)"
              class="dropdown-toggle"mobile_search
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span ng-show="checkCookie()" class="i-circle">{{user.name.charAt(0)}}</span>
              <a class href="/login" ng-hide="checkCookie()">
                <i class="fa fa-sign-in" style="font-size:38px;"></i>
              </a>
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" ng-show="checkCookie()">
              <li>
                <a class="dropdown-item" ng-click="gotoWatch(user.id)">My Watchlist</a>
              </li>
              <li>
                <a class="dropdown-item" href="/subscription">Subscription</a>
              </li>
              <li>
                <a class="dropdown-item" href="/">Account Info</a>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <a class="dropdown-item" href="javascript:void(0)" ng-click="doLogout()">Logout</a>
              </li>
            </ul>
          </li>
        </ul>-->
      </div>
      <div class="d-block d-lg-none mt-auto">
        <!-- <div class="container-fluid" style="">
          <div class="row">
            <div class="col-2" :class="{'active_route':('index'===active_route)}">
              <span style="font-size:17px; color: #fbe631; font-weight: bold;">
                <a href="/" class="" style="color: #fbe631;">
                 <span style="font-weight: bold;">Home</span>
                </a>
              </span>
            </div>
            <div class="col-2" :class="{'active_route':('live-channels'===active_route)}">
              <span style="font-size:17px; color: #fbe631;">
                <a href="/live-channels" style="color:#fbe631;font-weight: bold;">
                  <span  style="font-weight: bold;">Live</span>
                </a>
              </span>
            </div>
            <div class="col-2 mr-2" :class="{'active_route':('religious-channels'===active_route)}">
              <span style="font-size:17px; color: #fbe631;">
                <a href="/religious-channels" style="color:#fbe631;font-weight: bold;">
                  <span style="font-weight: bold;">Religion</span>
                </a>
              </span>
            </div>
            <div class="col-2 ml-4" :class="{'active_route':('education'===active_route)}">
              <span style="font-size:17px; color: #fbe631;">
                <a href="/education" style="color:#fbe631;font-weight: bold;">
                  <span style="font-weight: bold;">Education</span>
                </a>
              </span>
            </div>
          </div>
        </div>-->
        <!-- <radial-menu
          style="margin: auto; margin-top: 300px; background-color: white"
          :itemSize="50"
          :radius="120"
          :angle-restriction="180"
        >
          <radial-menu-item
            v-for="(item, index) in items"
            :key="index"
            style="background-color: white"
            @click="() : handleClick(item)"
          >
            <span>{{item}}</span>
          </radial-menu-item>
        </radial-menu>
        <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div>-->
        <no-ssr>
          <quick-menu
            :menu-count="4"
            :icon-class="icons"
            :menu-url-list="menulinks"
            backgroundColor="#fbe631"
            color="black"
          ></quick-menu>
        </no-ssr>
      </div>
    </nav>

    <!-- <div id="sidenav" class="d-lg-none" :class="hidden_side_nav">
      <div class="container-fluid">
        <div class="row">
          <a
            @click.prevent="sidetoggle"
            class="ml-3 mobile_menu_close"
            style="margin-top:33px; margin-right:4px;"
            id="menu-toggler-side"
          ></a>
          <a href="/">
            <div class="text-center ethiov_logo mt-3">
              <img src="/img/EthioV_LOGO3.png" alt="EthioV Logo">
            </div>
          </a>
        </div>
      </div>
      <hr>
      <div class="content-wrapper back ml-2">
        <div class="fikir-vids">
          <a href="/" class="descr bol d-block">
            <div @click="sidetoggle">
              <i class="fa fa-mobile"></i> Home
            </div>
          </a>
          <hr>
          <a href="/live-channels" class="descr bol d-block">
            <div @click="sidetoggle">
              <i class="fa fa-mobile"></i> - Live TVs!
            </div>
          </a>
          <hr>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
import quickMenu from "@/components/quickmenu/quickmenu";
// import { RadialMenu, RadialMenuItem } from "vue-radial-menu";

export default {
  components: {
    quickMenu
    // RadialMenu,
    // RadialMenuItem
  },
  data() {
    return {
      search1: "",
      $search_results: [],
      mobile_search: "",
      hidden_side_nav: "",
      active_route: "",
      menulinks: [
        {
          isLink: true,
          url: "/",
          header: "Home"
        },

        {
          isLink: true,
          url: "/religious-channels",
          header: "Religious"
        },
        {
          isLink: true,
          url: "/live-channels",
          header: "Live"
        },
        {
          isLink: true,
          url: "/education",
          header: "Education"
        }
      ],
      icons: ["fa fa-home", "fa fa-archive", "fa fa-tv", "fa fa-book"],
      items: ["foo", "bar", "hello", "world", "more", "items"],
      lastClicked: "click on something!"
    };
  },
  mounted: function() {
    this.active_route = $nuxt.$route.name;
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    search(search1) {

      let k = this.search1.split(" ").join("+");
      let r = k.split("/").join("-");
      let x = encodeURIComponent(r);
      // console.log(x);
      this.$router.push({
        path: "/search-results/" + x
      });
    },
    toggle_side_menu() {
      this.hidden_side_nav = "d-block";
    },
    close_search() {
      this.mobile_search = "";
    },
    open_search() {
      this.mobile_search = "d-block";
    },
    sidetoggle() {
      this.hidden_side_nav = "";
    },
// urlencode(text) {
//         return encodeURIComponent(text).replace(/!/g,  '%21')
//                                        .replace(/'/g,  '%27')
//                                        .replace(/\(/g, '%28')
//                                        .replace(/\)/g, '%29')
//                                        .replace(/\*/g, '%2A')
//                                        .replace(/%20/g, '+');
//     },
//    urldecode(text) {
//         return decodeURIComponent((text + '').replace(/\+/g, '%20'));
//     }
  }
};
</script>
<style scoped>
.content-wrapper.back {
  background-color: white !important;
}
.descr.bol {
  /*font-size: 18px !important; */
  border: none;
  font-weight: 900 !important;
}
.descr.bol:hover {
  color: #fbe631;
}
.btn-warning {
  color: #000000 !important;
  background-color: #fbe631 !important;
  border-color: #fafafa !important;
}
.active_route {
  border-bottom-style: solid;
  border-bottom-color: black;
  color: #fbe631 !important;
}
.title {
  font-size: 16px;
  vertical-align: -4px;
  font-weight: 700;
  display: inline-block;
}
</style>
