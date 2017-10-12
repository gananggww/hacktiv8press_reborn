<template>
  <fb-signin-button
    class="ui facebook button"
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      console.log('ini response FACEBOOK : ', response)
      if (response.status === 'connected') {
        localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
        axios.get(`http://localhost:3000/users/login`, {
          headers: {
            fbaccesstoken: localStorage.getItem('fbaccesstoken')
          }
        })
        .then(loug => {
          console.log(loug)
          this.$router.push('/')
          localStorage.setItem('token', loug.data.token)
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        console.log('salah')
      }
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
