<template>
  <div class="login-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="form-row">
            <div class="offset-sm-3 col-sm-6">
              <div class="login-form">
                <div class="logo">
                  <a href>
                    <img src="@/assets/img/nextpay-logo.svg" alt="image" />
                  </a>
                </div>
                <div class="form-head">
                  <h1 for>Đăng nhập</h1>
                </div>
                <ValidationObserver ref="observer">
                  <form slot-scope="{ validate }">
                    <ValidationProvider rules="required" vid="email" name="Email">
                      <b-form-group slot-scope="{ valid, errors }" label="Email">
                        <b-form-input
                          type="email"
                          v-on:keyup.enter="validate().then(makeLogin)"
                          v-model="email"
                          :state="errors[0] ? false : (valid ? true : null)"
                        ></b-form-input>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider rules="required" name="Password">
                      <b-form-group slot-scope="{ valid, errors }" label="Mật khẩu">
                        <b-form-input
                          type="password"
                          v-on:keyup.enter="validate().then(makeLogin)"
                          v-model="password"
                          :state="errors[0] ? false : (valid ? true : null)"
                        ></b-form-input>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </ValidationProvider>
                    <ul class="form-btn form-row m-t-20">
                      <li class="col-6">
                        <a
                          class="btn btn-success w-100 text-white"
                          @click="validate().then(makeLogin)"
                        >Đăng nhập</a>
                      </li>
                      <li class="col-6">
                        <p class="mb-0 m-t-10 text-right">
                          <a href="#" class="color-1564a9 p-0 text-transform-none">Quên mật khẩu?</a>
                        </p>
                      </li>
                    </ul>
                  </form>
                </ValidationObserver>
              </div>
              <p class="text-footer">
                Hotline:
                <a href="calto:1900 2079">1900 2079</a> - Email:
                <a href="mallto:support@nextinvoice.vn">support@nextinvoice.vn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '@/services/auth.service'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'Login',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async makeLogin () {
      try {
        await AuthService.makeLogin({
          email: this.email,
          password: this.password
        })
        this.$router.push('/')
      } catch (error) {
        this.$refs.observer.setErrors({
          email: [error.message]
        })
      }
    }
  }
}
</script>
