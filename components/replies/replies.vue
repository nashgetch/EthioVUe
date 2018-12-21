<template>
  <div>
    <a @click="isFormShown=!isFormShown" v-if="loggedIn">Reply</a>
    <div class="cl-replies">
      <a @click="showAllReplies=!showAllReplies">
        View all {{ replies_count }}
        replies
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </a>
    </div>

    <div class="reply-comment" v-if="isFormShown">
      <div class="rc-ava">
        <span v-if="loggedIn" class="i-circle">{{user.name.charAt(0)}}</span>
      </div>
      <div class="form-group">
        <form @submit.prevent="addReply()">
          <textarea class="form-control mt-3" name="rep" v-model="rep" id="grnash" rows="3"></textarea>
          <button type="submit" class="btn btn-warning pull-right mt-2">
            <i class="fa fa-comments-o" aria-hidden="true"></i>
          </button>
        </form>
      </div>

      <div class="clearfix"></div>
    </div>
    <div class="clearfix"></div>
    <div
      class="cl-comment-reply"
      v-if="showAllReplies"
      v-for="(comment, $index) in replies"
      :key="$index"
    >
      <div class="cl-avatar">
        <a class="i-circle">{{comment.cat_name.charAt(0)}}</a>
      </div>
      <div class="cl-comment-text">
        <div class="cl-name-date">. {{comment.created_at}}</div>
        <div class="cl-text">{{comment.rep}}</div>
        <!-- <div class="cl-meta">
          <span class="green">
            <span class="circle"></span> 70
          </span>
          <span class="grey">
            <span class="circle"></span> 9
          </span>
        </div>-->
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="cl-flag">
      <a>
        <i class="cv cvicon-cv-flag"></i>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const base_url = "https://ethiov.com/api/";
export default {
  props: {
    rcomment: {
      type: Object
    }
  },
  data() {
    return {
      replies: [],
      replies_count: 0,
      isFormShown: false,
      rep: "",
      showAllReplies: false
    };
  },
  methods: {
    addReply() {
      axios
        .post(base_url + "replies/" + this.user.id + "/" + this.rcomment.comment_id, {
          rep: this.rep,
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(res =>
          {
          this.replies_count+=1;
          get_single_comment(res.data).then(res => this.replies.push(res));
          this.isFormShown=false;
          this.rep="";
          }
        );
      this.showAllReplies = true;
    }
  },
  mounted() {
    console.log(this.rcomment);
    axios.post(base_url + "fetchReplies/" + this.rcomment.comment_id).then(res => {
      loops(res.data).then(res => {
          this.replies = res;
          this.replies_count=this.replies.length;
        });
    });
  }
};
async function loops(params) {
  let main_array = [];
  var i = 0;
  for (i = 0; i < params.length; i++) {
    let temp = {};
    temp = params[i];
    let cat = await getUsername(temp.user_id);
    temp.cat_name = cat.name;
    // getViews(temp.v_id).then(resp => {
    //   temp.views = resp;
    //   main_array.push(temp);
    // });
    main_array.push(temp);
  }

  return main_array;
}
async function get_single_comment(params) {
  let temp = {};
  temp = params;
  let cat = await getUsername(params.user_id);
  temp.cat_name = cat.name;

  return temp;
}
async function getUsername(user_id) {
  let t_resp = await axios.post(base_url + "return_user/" + user_id);
  return t_resp.data[0];
}
</script>
