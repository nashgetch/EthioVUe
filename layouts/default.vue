<template>
  <div>
    <NavHeader/>
    <div style="margin-top:6rem;" class="adblock2">
      <Wideads/>
    </div>
    <nuxt/>
  </div>
</template>
 
 <script>
import NavHeader from "@/components/nav";
import Wideads from "@/components/adsComponents/wide_ads"
export default {
  components: {
    NavHeader,
    Wideads
  }
};
</script>
 