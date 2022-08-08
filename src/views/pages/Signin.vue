<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm ref="form">
                  <h1>Signin</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    v-model="username"
                    placeholder="Username"
                    autocomplete="username email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    v-model="password"
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="submit">Signin</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <CButton color="link" class="d-lg-none">Register now!</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                  @click="goToUrl('/register')"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
    
  </div>
  
</template>

<script>
export default {
  name: 'Signin',
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    goToUrl(url){
      this.$router.push(url)
    },
    submit() {
      //if (this.$refs.form.validate()) {
        console.log("username : " + this.username)
        console.log("password : " + this.password)
        this.$axios
          .post("/auth/token", {
            username: this.username,
            password: this.password,
            ad: 1
          })
          .then(response => {
            console.log(JSON.stringify(response.data))
            localStorage.setItem("user", JSON.stringify(response.data));
            this.$store.commit("signinSuccess", response.data);
            this.$emit("signedIn");
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              this.$router.push("/");
            }
          })
          .catch(() => {
            EventBus.$emit("showSnackbar", {
              text: "Proabably used the wrong password!",
              color: "red"
            });
          });
      //}
      
    }
  },

  computed: {    
  }
}
</script>
