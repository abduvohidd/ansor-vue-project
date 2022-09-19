<template>
  <div class="home-1">
    <Navbar :class="(navbar = 'actives')">
      <img src="@/assets/logo-1.1.svg" alt="" />
    </Navbar>

    <HomePage />
  </div>
  <HomePageText />
  <div class="home-1">
    <HomeReason />
    <Card />
  </div>

  <Footer />
</template>

<script>
import Footer from "@/components/HomeVue/footer.vue";
import Navbar from "@/components/HomeVue/Navbar.vue";
import HomePage from "@/components/HomePageAbout/HomePage.vue";
import Card from "@/components/HomeVue/Card.vue";
import HomePageText from "@/components/HomePageAbout/HomePageText.vue";
import HomeReason from "@/components/HomePageAbout/HomeReason.vue";
export default {
  data() {
    return {
      navbar: false,
    };
  },
  components: {
    Footer,
    Navbar,
    HomePage,
    Card,
    HomePageText,
    HomeReason,
  },
};
</script>

<style>
.home-1 {
  background: #e5e5e5;
}
.actives a {
  color: black;
}
.actives h4 {
  color: black;
}
.actives .nav-image {
  display: none;
  visibility: hidden;
}
.actives .button {
  color: #40aaf8;
  border: 1px solid #40aaf8;
  background: transparent;
  box-shadow: none;
}
.actives .span-1::before {
  border-top: 8px solid black;
}
.actives .span-2::after {
  border-bottom: 8px solid black;
}
.actives .dropdown button{
  color: black
}


.actives a:hover  {
  color: #40aaf8;
}
.actives h4:hover {
  color: #40aaf8;
}
</style>