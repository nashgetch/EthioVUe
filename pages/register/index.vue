<template>
    <div class="login-form">
    <form @submit.prevent="registerUser">
        <h2 class="text-center"><img src="/img/ethio_logo.png"></h2>
        <div class="form-group">
            <input type="text" class="form-control" name = "name" placeholder="Name" v-model="userForm.name" required="required" autofocus>
             <span class="invalid-feedback" role="alert">
                <strong></strong>
             </span>
        </div>
        <div class="form-group">
            <input type="email" class="form-control" name = "email" placeholder="Email" v-model="userForm.email" required="required">
            <span class="invalid-feedback" role="alert">
                <strong></strong>
             </span>
        </div>
        <div class="form-group">
            <input name = "password" type="password" placeholder="Password" class="form-control" v-model="userForm.password" required="required">
            <span class="invalid-feedback" role="alert">
                <strong></strong>
             </span>
        </div>
        <!-- <div class="form-group">
             <div class="g-recaptcha" tabindex="3" theme="clean data-sitekey="6LfZ8XUUAAAAAOtUUuW5RwGrJeZIgg_XPh6YiGvl"></div> 
        </div> -->
        <div class="form-group">
            <button type="submit" name="save" value = "register" class="btn btn-warning btn-block">Sign Up</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
        </div>
    </form>

    <p class="text-center"><nuxt-link to = "/login">Already have an Account - Login</nuxt-link></p>
     <p class="m-t"> <small>EthioV - Live Streaming &copy; 2018</small> </p>
</div>

</template>


<script>
    export default{
        
    data() {
        return {
            userForm: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async registerUser() {
            try{
            await this.$axios.post('register', this.userForm);
            this.$auth.login({
                data: {
                    email: this.userForm.email,
                    password: this.userForm.password
                }
            })
            this.$router.push({
                path: '/'

            });
             this.$toast.success('Successfully Registered');
            }
            catch(e){
                 this.$toast.error('There seems to be a problem. Please Try Again');
            }
        }
    }
    }
</script>

<style>
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