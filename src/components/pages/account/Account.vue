<template>
  <div id="account">
    <div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
      <div class="container">
        <h1 class="page-title">My Account<span>Shop</span></h1>
      </div><!-- End .container -->
    </div><!-- End .page-header -->
    <nav aria-label="breadcrumb" class="breadcrumb-nav mb-3">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Shop</a></li>
          <li class="breadcrumb-item active" aria-current="page">My Account</li>
        </ol>
      </div><!-- End .container -->
    </nav><!-- End .breadcrumb-nav -->

    <div class="page-content">
      <div class="dashboard">
        <div class="container">
          <div class="row">
            <aside class="col-md-4 col-lg-3">
              <ul class="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                <li class="nav-item">
                  <a class="nav-link" id="tab-orders-link" data-toggle="tab" href="#tab-orders" role="tab"
                    aria-controls="tab-orders" aria-selected="false">Orders</a>
                </li>
              </ul>
            </aside><!-- End .col-lg-3 -->

            <div class="col-md-8 col-lg-9">
              <div class="tab-content">

                <div class="tab-pane fade show active" id="tab-orders" role="tabpanel"
                  aria-labelledby="tab-orders-link">

                  <div>
                    <p>Your Orders</p>
                    <table class="table table-wishlist table-mobile">
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th>Order ID</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Details</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr v-for="(order, index) in orders" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>{{ order.order_id }}</td>
                          <td>
                            <!-- <span :class="statusColor(order.status)">
                              {{ order.status | capitalize }}
                            </span> -->
                            <span :class="statusColor(order.status)">
                              {{ order.status }}
                            </span>
                          </td>
                          <td>kshs {{ order.total }}</td>
                          <td>
                            <!-- <router-link :to="`/order-detail/${order.order_id}`" class="btn-remove">
                              <i class="icon-eye"></i>
                            </router-link> -->
                            <router-link to="" class="btn-remove">
                              <i class="icon-eye"></i>
                            </router-link>
                          </td>
                          <td>
                            <el-button type="success" @click.prevent="downloadPdf(order.order_id)" size="small"
                              icon="el-icon-download">Download PDF</el-button>
                            <!-- <el-button type="success" @click.prevent="printPdf(order.order_id)" size="small"
                              icon="el-icon-printer">Print PDF</el-button> -->
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr v-if="emptyOrder()">
                          <td colspan="6">
                            <p class="text-center text-danger">
                              There are no orders made
                              <a href="/" class="text-primary">shop</a>
                              to continue
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div><!-- End .col-lg-9 -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .dashboard -->
    </div><!-- End .page-content -->
  </div>
</template>

<script>
import Api from '../../../requests/Api'
export default {
  name: 'Account',
  data() {
    return {
    }
  },
  methods: {
    emptyOrder() {
      return (this.orders.length < 1)
    },
    getOrders() {
      this.$store.dispatch('order/getAuthUserOrders')
    },
    statusColor(status) {
      let data =
      {
        pending: "badge badge-info",
        processing: "badge badge-primary",
        delivering: "badge badge-warning",
        complete: "badge badge-success",
        cancelled: "badge badge-danger"
      }
      return data[status]
    },
    downloadPdf(order_id) {
      // console.log(order)
      Api().get('/download-pdf/' + order_id)
        .then(() => { })
        .catch(() => { })
    },
    printPdf() { }
  },
  computed: {
    orders() {
      return this.$store.getters['order/getOrders']
    },
  },
  mounted() {
    this.getOrders()
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Lilysparlor - Account'
      }
    },
  }
}
</script>
