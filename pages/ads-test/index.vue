<template>
    <section style="padding-top:6rem;">
        <div class="adblock2">
            <Wideads/>
        </div>
        <div style="margin-top:2rem;">
            <Tallads/>
        </div>
    </section>
</template>
<script>
import Tallads from "@/components/adsComponents/tall_ads";
import Wideads from "@/components/adsComponents/wide_ads"
export default {
    components:{
        Tallads,
        Wideads,       
    }
    
}
</script>
