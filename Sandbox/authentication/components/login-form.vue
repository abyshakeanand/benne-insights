<template>
    <div class="">
        <h1>Testing</h1>
        <a @click="twitterSignUp">
            <img src="http://drumup.io/static/images/twitter-login.png" alt="">
        </a>
    </div>
</template>

<script>
import { firebase } from '@/utils/fireinit.js'
export default {
    data() {
        return {
            //twitterAuth: twitterProvider
        }
    },
    methods: {
        twitterSignUp () {
            this.$store.dispatch('signInWithTwitter').then(() => {
                var user = firebase.auth().currentUser;
                console.log(user.displayName);
            }).catch((e) => {
                console.log(e.message);
            })
        }
    },

}
</script>

<style>

</style>