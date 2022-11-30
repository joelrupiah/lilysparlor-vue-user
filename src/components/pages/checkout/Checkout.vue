<template>
  <div id="checkout">
    <notifications position="top right" class="mt-3" group="checkout" />
    <div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
      <div class="container">
        <h1 class="page-title"><span>Checkout</span></h1>
      </div><!-- End .container -->
    </div><!-- End .page-header -->
    <nav aria-label="breadcrumb" class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Checkout</li>
        </ol>
      </div><!-- End .container -->
    </nav><!-- End .breadcrumb-nav -->

    <div class="page-content">
      <div class="checkout">
        <div class="container">
          <form action="#">
            <div class="row">
              <div class="col-lg-9">
                <h2 class="checkout-title">Customer Details</h2><!-- End .checkout-title -->
                <div class="row">
                  <div class="col-sm-6">
                    <label>First Name *</label>
                    <input type="text" class="form-control" v-model="form.firstName" required>
                  </div><!-- End .col-sm-6 -->

                  <div class="col-sm-6">
                    <label>Last Name *</label>
                    <input type="text" class="form-control" v-model="form.lastName" required>
                  </div><!-- End .col-sm-6 -->
                </div><!-- End .row -->



                <div class="row">
                  <div class="col-sm-6">
                    <label>Email address *</label>
                    <input type="email" class="form-control" v-model="form.email" required>
                  </div><!-- End .col-sm-6 -->

                  <div class="col-sm-6">
                    <label>Phone *</label>
                    <input type="tel" class="form-control" v-model="form.phone" required>
                  </div><!-- End .col-sm-6 -->
                </div><!-- End .row -->

                <div class="row">
                  <div class="col-sm-6">
                    <label>Expected Date *</label>
                    <el-date-picker v-model="form.expected_date" type="date" placeholder="Pick a day">

                    </el-date-picker>
                  </div><!-- End .col-sm-6 -->
                  <div class="col-sm-6">
                    <label>Expected Time *</label>
                    <el-time-picker v-model="form.expected_time" arrow-control placeholder="Expected time" />
                  </div><!-- End .col-sm-6 -->

                </div><!-- End .row -->



                <label>Description (optional)</label>
                <textarea class="form-control" cols="30" rows="4" v-model="form.description"
                  placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
              </div><!-- End .col-lg-9 -->
              <aside class="col-lg-3">
                <div class="summary">
                  <h3 class="summary-title">Service (s) Ordered</h3><!-- End .summary-title -->

                  <table class="table table-summary">
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="(item, index) in cart" :key="index">
                        <td><a href="#">{{ item.service.name }}</a></td>
                        <td>${{ item.service.price }}</td>
                      </tr>
                      <tr v-if="emptyCart()">
                        <td colspan="6">
                          <p class="text-center text-danger">
                            Cart is empty please
                            <a href="/" class="text-primary">shop</a>
                            to continue
                          </p>
                        </td>
                      </tr>
                      <tr class="summary-subtotal">
                        <td>Subtotal:</td>
                        <td>${{ totalCartPrice }}</td>
                      </tr><!-- End .summary-subtotal -->
                      <tr>
                        <td>Shipping:</td>
                        <td>Free shipping</td>
                      </tr>
                      <tr class="summary-total">
                        <td>Total:</td>
                        <td>${{ totalCartPrice }}</td>
                      </tr><!-- End .summary-total -->
                    </tbody>
                  </table><!-- End .table table-summary -->

                  <div class="accordion-summary" id="accordion-payment">
                    <div class="card">
                      <div class="card-header" id="heading-1">
                        <h2 class="card-title">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" v-model="payment.cash_on_delivery"
                              id="cashpayment">
                            <label class="custom-control-label" for="cashpayment">
                              Pay On Site
                            </label>
                          </div>
                          <!-- <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
										                    Direct bank transfer
										                </a> -->
                        </h2>
                      </div><!-- End .card-header -->
                    </div><!-- End .card -->

                    <div class="card">
                      <div class="card-header" id="heading-2">
                        <h2 class="card-title">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" disabled class="custom-control-input" v-model="payment.mpesa"
                              id="mpesapayment">
                            <label class="custom-control-label" for="mpesapayment">
                              Mpesa
                            </label>
                          </div>
                        </h2>
                      </div><!-- End .card-header -->
                    </div><!-- End .card -->

                    <div class="card">
                      <div class="card-header" id="heading-3">
                        <h2 class="card-title">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" disabled class="custom-control-input" v-model="payment.paypal"
                              id="paypalpayment">
                            <label class="custom-control-label" for="paypalpayment">
                              Paypal
                            </label>
                          </div>
                        </h2>
                      </div><!-- End .card-header -->
                    </div><!-- End .card -->

                    <div class="card">
                      <div class="card-header" id="heading-4">
                        <h2 class="card-title">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" disabled class="custom-control-input" v-model="payment.card"
                              id="cardpayment">
                            <label class="custom-control-label" for="cardpayment">
                              Card
                            </label>
                          </div>
                        </h2>
                      </div><!-- End .card-header -->
                    </div><!-- End .card -->
                  </div><!-- End .accordion -->

                  <el-button type="success" size="small" :loading="loading" @click.prevent="completeOrder">
                    {{ loading ? 'Processing.....' : 'Process booking' }}
                  </el-button>
                </div><!-- End .summary -->
              </aside><!-- End .col-lg-3 -->
            </div><!-- End .row -->
          </form>
        </div><!-- End .container -->
      </div><!-- End .checkout -->
    </div><!-- End .page-content -->
  </div>
</template>

<script>
import Api from '../../../requests/Api'
export default {
  name: 'Checkout',
  data() {
    return {
      loading: false,
      notificationClass: null,
      payment: {
        cash_on_delivery: null,
        mpesa: null,
        paypal: null,
        card: null
      },
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        description: '',
        expected_date: '',
        expected_time: '',
      },
      error: {}
    }
  },
  methods: {
    completeOrder() {
      // console.log(this.form)
      this.loading = true
      Api().post('checkout', {
        form: this.form,
        payment: this.payment,
        total: this.totalCartPrice,
        cart: this.cart
      })
        .then(() => {
          this.loading = false
          this.$notify({
            group: 'checkout',
            type: 'success',
            title: 'Order complete, check your account for reference'
          });
          setTimeout(function () {
            window.location.href = '/account'
          }, 3000)
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
            this.$notify({
              group: 'checkout',
              type: 'error',
              title: 'Request failed',
              text: 'Please fill the missing field (s) to continue'
            });
          }
          if (error.response.status === 500) {
            this.errors = error.response.data.errors
            this.$notify({
              group: 'checkout',
              type: 'error',
              title: 'Request failed',
              text: 'Please try again later or contact customer support'
            });
          }
          if (error.response.status === 404) {
            this.errors = error.response.data.errors
            this.$notify({
              group: 'checkout',
              type: 'error',
              title: 'Request failed',
              text: 'Please try again later or contact customer support'
            });
          }
          this.loading = false
        })

    },
    emptyCart() {
      return (this.cart.length < 1)
    }
  },
  computed: {
    cart() {
      return this.$store.getters['cart/getCartItem']
    },
    totalCartPrice() {
      return this.$store.getters['cart/cartTotalPrice']
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Lilysparlor - Checkout'
      }
    },
  }
}
</script>
