<template>    
<div class="login-form">
    <form @submit.prevent="addUser">
        <h2 class="text-center ethiov_logo">
            <img src="/img/EthioV_LOGO_Black.png">
        </h2>
        <div class="form-group">
            <input type="email" class="form-control" name = "email"  v-model="userForm.email" required  autofocus>
            <span class="invalid-feedback" role="alert">
                <strong></strong>
            </span>
        </div>
        <div class="form-group">
            <input name = "password" type="password" placeholder="Password" class="form-control" v-model="userForm.password" 
            required>
             <span class="invalid-feedback" role="alert">
                <strong></strong>
             </span>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-warning btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
            <a class="pull-right">Forgot Password?</a>
        </div>
    </form>
    <p class="text-center"><nuxt-link to="/register">Create an Account</nuxt-link></p>
</div>
</template>
<script>
export default {
     data() {
        return {
            userForm: {
                email: '',
                password: ''
            }
        }
    },
   methods: {
   async addUser() {
       try{
       await this.$auth.login({
            data: this.userForm
       });
       if(this.user.isAdmin===1){
         this.$router.push({path: '/admin'});
          this.$toast.success('Welcome Back...');
       }
       else if(this.user.isAdmin !==1){
           this.$router.push({path: '/'});
            this.$toast.success('Welcome Back...');
       }
     }
        catch(e){
             this.$toast.error('Whoops. There seems to be an error. Please Try Again.');
        }
    }
   }
}
</script>

<style scoped>
  .login-form {
        width: 340px;
        margin: 50px auto;
    }
    .login-form form {
        margin-bottom: 15px;
        background: #fff;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
        margin-top: 50%;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {
        font-size: 15px;
        font-weight: bold;
    }
</style>
