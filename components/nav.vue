<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top p-0 p-sm-2">
      <div class="d-inline-flex">
        <div class="float-left ml-md-auto ml-lg-auto d-block d--none mt-auto ml-2">
          <a href="/" class="text-gray-dark" style="font-size: 1.4rem;" id="menu-toggler">
            <i class="fa fa-youtube-play fa-2x"></i>
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
              <!-- <img

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
                <img src="/img/EthioV_LOGO_Black3.png" alt>
              </div>
            </nuxt-link>
            <div class="d-block d-lg-none">
              <nuxt-link
                to="/"
                class="text-gray-dark"
              >{{active_route==="index" ? "Home" : active_route==="live-channels"? active_route :"EthioV"}}</nuxt-link>
            </div>
            <div class="navbar-nav flex-row mr-auto mt-1 d-none d-lg-flex">
              <a href="/" class="nav-item nav-link" style="font-weight: bold;">
                Home
                <span class="sr-only">(current)</span>
              </a>
              <a
                class="nav-item nav-link"
                style="font-weight: bold;"
                href="/live-channels"
              >Ethiopian Channels</a>
              <a
                class="nav-item nav-link"
                style="font-weight: bold;"
                href="/religious-channels"
              >Religious channels</a>
            </div>

            <div class="col-9 col-lg-4 col-xl-6 d-none d-lg-block">
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
            style="margin-top: 10px; font-size: 1.3rem;"
            class="fa fa-search"
          ></i>
        </div>
        <ul class="nav navbar-nav navbar-right mt-2 mt-lg-0">
          <li class="dropdown">
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
                <i class="fa fa-sign-in" style="font-size:38px;"></i>
              </nuxt-link>
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu poll" v-if="loggedIn">
              <li>
                <a class="dropdown-item" href="/watchlist">My Watchlist</a>
              </li>
              <li>
                <a class="dropdown-item" href="/subscription">Subscription</a>
              </li>
              <li>
                <a class="dropdown-item" href="/">Account Info</a>
              </li>
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
        <div class="container-fluid" style="margin-top:0.7rem; !important">
          <div class="row mr-auto ml-2 ml-md-5">
            <div class="col-4" :class="{'active_route':('index'===active_route)}">
              <span style="font-size:1rem;">
                <a href="/" class="text-gray-dark">
                  <i class="fa fa-home">Home</i>
                </a>
              </span>
            </div>
            <div class="col-4" :class="{'active_route':('live-channels'===active_route)}">
              <span style="font-size:1rem;">
                <a href="/live-channels" class="text-gray-dark">
                  <i class="fa fa-tv">Live Channels</i>
                </a>
              </span>
            </div>
            <div class="col-4" :class="{'active_route':('religious-channels'===active_route)}">
              <span style="font-size:1rem;">
                <a href="/religious-channels" class="text-gray-dark">
                  <i class="fa fa-crosshairs">Religious Channels</i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="sidenav" class="d-lg-none" :class="hidden_side_nav">
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
              <img src="/img/EthioV_LOGO_Black3.png" alt="EthioV Logo">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search1: "",
      $search_results: [],
      mobile_search: "",
      hidden_side_nav: "",
      active_route: ""
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
      this.$router.push({
        path: "/search-results/" + k
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
    }
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
}
</style>
