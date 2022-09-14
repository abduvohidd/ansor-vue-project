<template>
  <div class="home-1">
    <Navbar :class="(navbar = 'actives')">
      <img src="@/assets/logo-1.1.svg" alt="" />
    </Navbar>
    <EducationPage />
  </div>
  <EducationText />
  <div class="home-1">
    <EducationSolutions />
  </div>
  <EducationVideo />
  <div class="home-1">
    <EducationReason />
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/HomeVue/Navbar.vue";
import EducationPage from "@/components/Education/Education-page.vue";
import EducationText from "@/components/Education/EducationText.vue";
import EducationSolutions from "@/components/Education/Education-solutions.vue";
import Footer from "@/components/HomeVue/footer.vue";
import EducationReason from "@/components/Education/EducationReason.vue";
import EducationVideo from "@/components/Education/EducationVideo.vue";
export default {
  components: {
    Navbar,
    EducationPage,
    EducationText,
    EducationSolutions,
    Footer,
    EducationReason,
    EducationVideo,
  },
};
</script>

<style></style>