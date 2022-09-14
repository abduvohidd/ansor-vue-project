<template>
  <div class="portfolio-about">
    <Navbar :class="(navbar = 'actives')">
      <img src="@/assets/logo-1.1.svg" alt="" />
    </Navbar>
    <PortfolioAbout />
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/HomeVue/Navbar.vue";
import PortfolioAbout from "@/components/PortfolioAbout.vue";
import Footer from "@/components/HomeVue/footer.vue";
export default {
  components: { Navbar, PortfolioAbout, Footer },
};
</script>

<style>
.portfolio-about {
  background: #e5e5e5;
}
</style>