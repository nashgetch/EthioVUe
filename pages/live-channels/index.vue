<template>
  <div style="padding-top: 6rem;" class="content-wrapper">
    <div class="nash">
      <input
        type="text"
        v-model="searchString"
        name="name"
        class="question"
        id="name"
        required
        autocomplete="off"
      >
      <label for="name">
        <span style="font-size: 17px;">Search for your Favorite Channel here.</span>
      </label>
    </div>

    <div class="row">
      <div class="container mt-2">
        <div class="nashians">
          <adsbygoogle :ad-slot="'5950915078'"/>
        </div>
        <div class="row mt-3 display-flex">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            v-for="(tv,$index) in tvs"
            :key="$index"
          >
            <a :href="'/single-channel/' + tv.id">
              <div class="chn-image-container">
                <img class="imgur" :src="turl + tv.poster_image" :alt="tv.tv_name">

                <div class="small-logo">
                  <img :src="turl + tv.poster_image" :alt="tv.tv_name">
                </div>

                <div class="text-center mt-5">
                  <div class="chan-descrip">
                    <strong class="chan-title">{{tv.tv_name}}</strong>
                    <small style="font-size:10px">[{{tv.description}}]</small>
                    <!-- <span class="hideOverflow">{{tv.description}}</span> -->
                  </div>
                </div>
              </div>
            </a>
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
          keywords: "Fana TV, Walta, EBC, Bethel TV, Ethiopian TV Channels, Religion, Politics, Ethiopia, Social Media, Live Stream, Africa"
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
      ]
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
.bars {
  background-color: #a9a9a9;

  background-image: -webkit-linear-gradient(top, #a9a9a9, #5392ad);
  background-image: -moz-linear-gradient(top, #a9a9a9, #5392ad);
  background-image: linear-gradient(top, #a9a9a9, #5392ad);

  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
  width: 400px;
  padding: 14px;
  margin: 45px auto 20px;
  position: relative;
}

.bars input {
  background: #fff no-repeat 13px 13px;
  border: none;
  width: 100%;
  line-height: 19px;
  padding: 11px 0;

  border-radius: 2px;
  box-shadow: 0 2px 8px #c4c4c4 inset;
  text-align: left;
  font-size: 14px;
  font-family: inherit;
  color: #738289;
  font-weight: bold;
  outline: none;
  text-indent: 40px;
}
.nash {
}
.nash > input,
span,
label {
  font-family: "Ubuntu", sans-serif;
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 12px;
}
.nash > input:focus {
  outline: 0;
}
/* Question */
.nash > input.question {
  font-size: 18px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}
/* Underline and Placeholder */
.nash > input.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
  text-align: left;
}
.nash > input.question:focus + label {
  width: 80%;
}
.nash > input.question:focus,
input.question:valid {
  padding-top: 15px;
}
.nash > input.question:focus + label > span,
input.question:valid + label > span {
  top: -90px;
  font-size: 22px;
  color: #333;
}
.nash > input.question:valid + label {
  border-color: green;
}
.nash > input.question:invalid {
  box-shadow: none;
}
.nash > input.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8f8f8f;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}
.nash > input[type="submit"] {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}
.nash > input[type="submit"]:hover {
  background: #eee;
}
.nash > input[type="submit"]:active {
  background: #999;
}
.nash > input.question:valid ~ input[type="submit"],
textarea.question:valid ~ input[type="submit"] {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}
.nash > input.question:invalid ~ input[type="submit"],
textarea.question:invalid ~ input[type="submit"] {
  display: none;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>
