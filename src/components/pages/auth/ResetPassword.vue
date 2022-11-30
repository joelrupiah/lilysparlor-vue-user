<template>
<div id="user_login">
  <notifications position="top right" class="mt-3" group="send_email" />
  <notifications position="top right" class="mt-3" group="check_token" />
  <notifications position="top right" class="mt-3" group="reset_complete" />
  <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
  </nav>
  <div class="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style="background-image: url('/frontend/assets/images/backgrounds/login-bg.jpg')">
    <div class="container">
      <div class="form-box">
        <div class="form-tab">
          <div class="alert alert-primary">
            <form @submit.prevent="sendToken">
              <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control" :class="{ 'is-invalid' : errorEmail, 'is-valid' : infoEmail}" placeholder="Enter Email">
                <div class="invalid-feedback"> {{ errorEmail }} </div>
                <div class="valid-feedback"> {{ infoEmail }} </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success btn-sm">
                  Send Token to Email
                </button>
              </div>
            </form>
          </div><!-- End .tab-content -->

          <div class="alert alert-secondary mt-5">
            <form @submit.prevent="validateToken">
              <div class="form-group">
                <label>Token</label>
                <input type="text" class="form-control" :class="{ 'is-invalid' : errorToken, 'is-valid' : infoToken }" placeholder="Enter Token" v-model="token">
                <div class="invalid-feedback"> {{ errorToken }} </div>
                <div class="valid-feedback"> {{ infoToken }} </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success btn-sm">
                  Validate Token
                </button>
              </div>
            </form>
          </div>

          <div class="alert alert-success mt-5" v-if="tokenValid">
            <form @submit.prevent="changePassword">
              <div class="form-group">
                <label>New Password</label>
                <input type="password" class="form-control" :class="{ 'is-invalid' : errorPassword }" placeholder="Enter Password" v-model="password">
                <div class="invalid-feedback"> {{ errorPassword }} </div>
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" :class="{ 'is-invalid' : errorConfirmPassword }" placeholder="Confirm Password" v-model="confirmPassword">
                <div class="invalid-feedback"> {{ errorConfirmPassword }} </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-sm">
                  Change Password
                </button>
              </div>
            </form>
          </div>

        </div><!-- End .form-tab -->
      </div><!-- End .form-box -->
    </div><!-- End .container -->
  </div><!-- End .login-page section-bg -->
</div>
</template>

<script>
import Axios from 'axios'
export default {
  name: "ResetPassword",
  data() {
    return {
      url: 'http://127.0.0.1:8000/api/',
      email: '',
      token: '',
      password: '',
      confirmPassword: '',
      infoEmail: null,
      errorEmail: null,
      infoToken: null,
      errorToken: null,
      errorPassword: null,
      errorConfirmPassword: null,
      tokenValid: false,
      user: null
    }
  },
  methods: {
    sendToken() {
      this.errorEmail = null
      if (!this.email) {
        this.errorEmail = 'Email is required'
      }
      if (!this.errorEmail) {
        const data = {
          email: this.email
        }
        //   this.app.req.post('send-token', data)
        Axios.post(this.url + 'send-token', data)
          .then(() => {
            this.$notify({
              group: 'send_email',
              type: 'success',
              title: 'Email sent',
              text: 'The requested token has been sent to your email',
            });
            this.infoEmail = 'Email sent'
            this.form.email = ''
          })
          .catch(error => {
            this.errorEmail = error.response.data.error
          })
      }
    },
    validateToken() {
      this.errorToken = null
      if (!this.token) {
        this.errorToken = 'Token is required'
      }
      if (!this.errorToken) {
        const data = {
          token: this.token
        }
        Axios.post(this.url + 'validate-token', data)
          .then(response => {
            if (response.data.id) {
              this.tokenValid = true
              this.infoToken = 'Token is valid'
              this.user = response.data
            }
            this.$notify({
              group: 'check_token',
              type: 'success',
              title: 'The token is valid',
              text: 'Change your password to continue',
            });
          })
          .catch(error => {
            this.errorToken = error.response.data.error
          })
      }
    },
    changePassword() {
      this.errorPassword = null
      this.errorConfirmPassword = null
      if (!this.password) {
        this.errorPassword = 'New password is required'
      }
      if (!this.confirmPassword) {
        this.errorConfirmPassword = 'Password confirmation is required'
      }
      if (this.password != this.confirmPassword) {
        this.errorConfirmPassword = 'Password do not match'
      }
      if (!this.errorPassword && !this.errorConfirmPassword) {
        const data = {
          password: this.password,
          user_id: this.user.id
        }
        Axios.post(this.url + 'reset-password', data)
          .then(() => {
          this.$notify({
            group: 'reset_complete',
            type: 'success',
            title: 'Password updated',
            text: 'Please login or signin to access your account',
          });
            window.location.href = '/auth'
          })
      }
    }
  }

};
</script>
