<template>
    <div class="text-center" style="margin-top: 100px;">
        <h3 class="eng-font my-1 text-decoration-underline">Log In</h3>
        <form action="" class="my-5">
            <label for="" class="eng-font">Email</label>
            <br>
            <input type="text" class="p-2 m-2" v-model="email" />
            <br>
            <label for="" class="eng-font">Password</label>
            <br>
            <input type="password" class="p-2 m-2" v-model="password" >
            <br>
            <button class="submit-btn m-3" @click.prevent="doLogin" type="submit">Log In</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            console.log(this.axios)
            const submitForm = {
                email: this.email,
                password: this.password
            }
            this.axios.post('/login', submitForm).then((response) => {
                console.log(response)
                this.$router.push('/')
            })
        }
    }
}

</script>