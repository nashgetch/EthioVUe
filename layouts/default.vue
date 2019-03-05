<template>
  <div>
    <NavHeader/>
    <nuxt />
    <Footer/>
  </div>
</template>

 <script>
import NavHeader from "@/components/nav";
import Footer from "@/components/footer";
export default {
  components: {
    NavHeader,
    Footer
  }
};
</script>
