<template>
  <div class="home">
    <Navbar />
    <Header />
  </div>
  <div class="select-1">
    <Card />
  </div>
  <Digital />
  <div class="select-1">
    <Portfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Digital from "@/components/Digital.vue";
import Portfolio from "@/components/portfolio.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Header,
    Card,
    Digital,
    Portfolio,
  },
};
</script>

<style>
.home {
  background-image: url("../assets/technology-background.svg");
  z-index: 0;
}
.select-1 {
  background: #e5e5e5;
}
</style>
