<template>
  <div class="about-us">
    <Navbar :class="(navbar = 'actives')" >
      <img src="@/assets/logo-1.1.svg" alt="" />
    </Navbar>
    <UsAbout />
  </div>
  <AboutText />
  <div class="about-us">
    <AboutTeam />
  </div>
  <Digital />
  <div class="about-us">
    <AboutAchievments />
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/HomeVue/Navbar.vue";
import Footer from "@/components/HomeVue/footer.vue";
import UsAbout from "@/components/about-us/UsAbout.vue";
import AboutText from "@/components/about-us/about-text.vue";
import Digital from "@/components/HomeVue/Digital.vue";
import AboutTeam from "@/components/about-us/AboutTeam.vue";
import AboutAchievments from "@/components/about-us/AboutAchievments.vue";
export default {
  components: {
    Navbar,
    Footer,
    UsAbout,
    AboutText,
    Digital,
    AboutTeam,
    AboutAchievments,
  },
};
</script>

<style>
.about-us {
  background: #e5e5e5;
}
</style>