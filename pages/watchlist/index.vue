
<template >
<div>
<div style="padding-top: 6rem;" id="nas">

    <div class="container parentDiv">
        <h5 style="margin-bottom: 16px;">
            Your Watchlist - Customized!
        </h5>

        <div class="row display-flex">
           
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 videoitem" v-for="(video,$index) in my_watch"  :key="$index">
                <div class="kaleb-vids">
                    <div class="Vimg itemContainer" style="opacity: 1" >
                        <nuxt-link :to="'/single_video/' + video.v_id"><img :src="'//video2.vixtream.net/' + video.filename"
                         alt="thumbnail">
                         <div class="play">
                            <i class="fa fa-play-circle-o playbtn" style="font-size:48px"></i>
                         </div>
                         </nuxt-link>
                        <div class="time">{{video.duration}}</div>
                        
                    </div>
                    <div class="descr">
                        <a class="hideOverflow" :href="'single_video/' + video.v_id">{{video.title}}</a>
                    </div>
                    <div class="views">
                        {{video.view_count}} views. <span class="percent"><span class="circle"></span> {{video.created_at}}
                    </span>
                    </div>
                </div>

            </div>
            <div></div>
            
        </div>
    </div> 
</div>
</div>
</template>
<script>
export default {
   data(){
       return {
           my_watch: []
       }
   },
   mounted(){
   this.$axios.post("/my_watchlist/" + this.user.id)
                    .then(res => {
                    return this.my_watch = [...res.data];
    });
       
   },
   methods: {
   
   }
}
</script>