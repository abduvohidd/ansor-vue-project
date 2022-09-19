<template>
  <div class="home">
    <Navbar />
    <Header :lang="lang" />
  </div>
  <div class="select-1">
    <Card />
  </div>
  <Digital />
  <div class="select-1">
    <Portfolio />
  </div>
  <Footer />

  
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/HomeVue/Navbar.vue";
import Header from "@/components/HomeVue/Header.vue";
import Card from "@/components/HomeVue/Card.vue";
import Digital from "@/components/HomeVue/Digital.vue";
import Portfolio from "@/components/HomeVue/portfolio.vue";
import Footer from "@/components/HomeVue/footer.vue";

export default {
  name: "HomeView",
  data() {
    return {
      lang: "ru",
    }
  },
  components: {
    Navbar,
    Header,
    Card,
    Digital,
    Portfolio,
    Footer,
},

  

};
</script>

<style>
.home {
  background-image: url("@/assets/technology-background.svg");
  z-index: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.select-1 {
  background: #e5e5e5;
}
</style>