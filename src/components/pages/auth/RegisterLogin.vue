<template>
    <div id="register-login">
        <div class="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
            style="background-image: url('assets/images/backgrounds/login-bg.jpg')">
            <div class="container">
                <div class="form-box">
                    <div class="form-tab">
                        <ul class="nav nav-pills nav-fill" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab"
                                    aria-controls="signin-2" aria-selected="false">Sign In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2"
                                    role="tab" aria-controls="register-2" aria-selected="true">Sign Up</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
                                <form action="#">
                                    <div class="form-group">
                                        <label for="singin-email-2">Email address <span class="text-danger"> *</span>
                                        </label>
                                        <input type="email" class="form-control" id="singin-email-2" name="singin-email"
                                            v-model="loginForm.email" required>
                                    </div><!-- End .form-group -->

                                    <div class="form-group">
                                        <label for="singin-password-2">Password <span class="text-danger"> *</span>
                                        </label>
                                        <input type="password" class="form-control" id="singin-password-2"
                                            v-model="loginForm.password" name="singin-password" required>
                                    </div><!-- End .form-group -->

                                    <div class="form-footer">
                                        <el-button size="small" style="background:black;color:white"
                                            @click.prevent="clearLoginData">
                                            Cancel
                                        </el-button>
                                        <el-button size="small" :loading="loading" style="background:#3399FF;color:#fff"
                                            @click.prevent="login">
                                            {{ loading ? 'Processing data.....' : 'Login' }}
                                        </el-button>

                                        <a href="/reset-password" class="forgot-link">Forgot Your Password?</a>
                                    </div><!-- End .form-footer -->
                                </form>
                            </div><!-- .End .tab-pane -->
                            <div class="tab-pane fade show active" id="register-2" role="tabpanel"
                                aria-labelledby="register-tab-2">
                                <form action="#">
                                    <div class="form-group">
                                        <label for="full-name-2">Full Name <span class="text-danger"> *</span> </label>
                                        <input type="text" class="form-control" id="full-name-2" name="full-name"
                                            v-model="registerForm.name" required>
                                    </div><!-- End .form-group -->

                                    <div class="form-group">
                                        <label for="register-email-2">Email address <span class="text-danger"> *</span>
                                        </label>
                                        <input type="email" class="form-control" id="register-email-2"
                                            v-model="registerForm.email" name="register-email" required>
                                    </div><!-- End .form-group -->

                                    <div class="form-group">
                                        <label for="register-password-2">Password <span class="text-danger"> *</span>
                                        </label>
                                        <input type="password" class="form-control" id="register-password-2"
                                            v-model="registerForm.password" name="register-password" required>
                                    </div><!-- End .form-group -->

                                    <div class="form-group">
                                        <label for="confirm-register-password-2"> Confirm Password <span
                                                class="text-danger"> *</span>
                                        </label>
                                        <input type="password" class="form-control" id="confirm-register-password-2"
                                            v-model="registerForm.password_confirmation" name="register-password"
                                            required>
                                    </div><!-- End .form-group -->

                                    <div class="form-footer">
                                        <el-button size="small" style="background:black;color:white"
                                            @click.prevent="clearRegisterData">
                                            Cancel
                                        </el-button>
                                        <el-button size="small" :loading="loading" style="background:#3399FF;color:#fff"
                                            @click.prevent="register">
                                            {{ loading ? 'Processing data.....' : 'Register' }}
                                        </el-button>
                                    </div><!-- End .form-footer -->
                                </form>
                            </div><!-- .End .tab-pane -->
                        </div><!-- End .tab-content -->
                    </div><!-- End .form-tab -->
                </div><!-- End .form-box -->
            </div><!-- End .container -->
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGIN_ACTION, REGISTER_ACTION } from '../../../store/storeConstants'
export default {
    name: 'RegisterLogin',
    data() {
        return {
            loading: false,
            registerForm: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            loginForm: {
                email: '',
                password: ''
            },
            errors: []
        }
    },
    methods: {
        ...mapActions('auth', {
            loginUser: LOGIN_ACTION,
            registerUser: REGISTER_ACTION
        }),

        clearRegisterData() {
            this.form.name = ''
            this.form.email = ''
            this.form.password = ''
            this.form.password_confirmation = ''
        },

        clearLoginData() {
            this.form.email = ''
            this.form.password = ''
        },

        async register() {
            try {
                await this.registerUser({
                    name: this.registerForm.name,
                    email: this.registerForm.email,
                    password: this.registerForm.password,
                    password_confirmation: this.registerForm.password_confirmation
                })
                    .then(() => {
                        // enter notification
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } catch (error) {
                console.log(error)
            }
            this.$router.push('/auth')

        },

        async login() {
            try {
                await this.loginUser({
                    email: this.loginForm.email,
                    password: this.loginForm.password
                })
            } catch (error) {
                console.log(error)
            }
            // this.$router.push('/')
            window.location.href = '/'

        }
    },
}
</script>