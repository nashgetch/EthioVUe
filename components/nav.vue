<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="d-inline-flex">
        <div class="float-left ml-md-auto ml-lg-auto d-block d-sm-none">
          <a
            @click.prevent="toggle_side_menu"
            class="text-gray-dark"
            style="font-size: 1.4rem;"
            id="menu-toggler"
          >
            <i class="fa fa-bars"></i>
          </a>
        </div>
        <div id="m_search_menu" class="d-none d-lg-none mobile_search_menu" :class="mobile_search">
          <div class="d-flex flex-row flex-wrap">
            <div class="input-group">
              <img
                @click="close_search"
                id="mobile_search_toggler"
                class="close_icon mt-3 mr-2"
                src="/img/cancel.png"
                alt
              >
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
        <div class="container">
          <div class="row">
            <nuxt-link to="/">
              <div class="text-center ethiov_logo">
                <img src="/img/EthioV_LOGO_Black2.png" alt>
              </div>
            </nuxt-link>
            <div class="navbar-nav flex-row mr-auto ml-5 mt-1 d-none d-md-flex d-lg-flex">
              <nuxt-link to="/" class="nav-item nav-link" style="font-weight: bold;">
                Home
                <span class="sr-only">(current)</span>
              </nuxt-link>
              <nuxt-link
                class="nav-item nav-link"
                style="font-weight: bold;"
                to="/live-channels"
              >Channels</nuxt-link>
            </div>

            <div class="col-9 col-lg-5 d-none d-lg-block">
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
                  >
                  <button type="submit" class="input-group-addon btn">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="d-block d-lg-none mr-2 mt-1">
          <i
            @click="open_search"
            id="mobile_menu_toggler"
            style="margin-top: 10px; font-size: 1.3rem;"
            class="fa fa-search"
          ></i>
        </div>
        <ul class="nav navbar-nav navbar-right">
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
              <nuxt-link class to="/login" v-if="!loggedIn">
                <i class="fa fa-sign-in" style="font-size:38px;"></i>
              </nuxt-link>
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu poll" v-if="loggedIn">
              <li>
                <nuxt-link class="dropdown-item" to="/watchlist">My Watchlist</nuxt-link>
              </li>
              <li>
                <nuxt-link class="dropdown-item" to="/subscription">Subscription</nuxt-link>
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
    </nav>
    <div id="sidenav" class="d-lg-none" :class="hidden_side_nav">
      <div class="container-fluid">
        <div class="row">
          <a @click.prevent="sidetoggle" class="mt-3 ml-3 mobile_menu_close" id="menu-toggler-side"></a>
          <nuxt-link to="/">
            <div class="text-center ethiov_logo">
              <img src="/img/EthioV_LOGO_Black2.png" alt="EthioV Logo">
            </div>
          </nuxt-link>
        </div>
      </div>
      <hr>
      <div class="content-wrapper back ml-2">
        <div class="fikir-vids">
          <nuxt-link to="/" class="descr bol d-block">
            <div @click="sidetoggle">
              <i class="fa fa-mobile"></i> Home
            </div>
          </nuxt-link>
          <hr>
          <nuxt-link to="/live-channels" class="descr bol d-block">
            <div @click="sidetoggle">
              <i class="fa fa-mobile"></i> - Live TVs!
            </div>
          </nuxt-link>
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
      hidden_side_nav: ""
    };
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
</style>
