<template>
 <!-- <no-ssr> -->
 <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5001725934888164"
     data-ad-slot="5950915078"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
 <!-- <adsbygoogle class="nashians" ad-slot="5950915078" /> -->
 <!-- </no-ssr> -->

</template>
<script>

export default {
  mounted: function() {
    //  (windowadsbygoogle= window.adsbygoogle || []).push({});
    this.$nextTick(()=>{
      //  (window.adsbygoogle= window.adsbygoogle || []).push({});
         setTimeout(() => (window.adsbygoogle= window.adsbygoogle || []).push({}), 1100)
    });
  }
};
</script>


<style scoped>
.nashians {
  width: 320px !important;
  height: 100px !important;
}
@media (min-width: 500px) {
  .nashians {
    width: 468px !important;
    height: 60px !important;
  }
}
@media (min-width: 800px) {
  .nashians {
    width: 728px !important;
    height: 90px !important;
  }
}
</style>

