<template>
  <div class="digital-page">
    <div class="container">
      <div class="digital-text">
        <h1>
          We create
          <span :class="{ active: (isActive = 'active') }">digital</span>
          products
        </h1>
        <p>
          We give you exact quote before starting your project, and we stick to
          it! We give you exact quote before starting your project.
        </p>
      </div>
      <div class="digital-result">
        <div class="result" v-for="result in results" :key="result">
          <h3>{{ result.number }}</h3>
          <p>{{ result.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      results: [
        {
          number: "15+",
          text: "Years of custom software development",
        },
        {
          number: "156+",
          text: "All kind of successfully completed projects ",
        },
        {
          number: "97%",
          text: "Of our team is hard core developers",
        },
        {
          number: "211K",
          text: "Active users/ month for liberty Global",
        },
      ],
    };
  },
};
</script>

<style>
.digital-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.digital-text h1 {
  padding-top: 2rem;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 2px;
  color: #19172c;
}
.digital-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #19172c;
  opacity: 0.5;
  margin-top: 1rem;
}
.digital-result {
  display: flex;
  margin: 3rem 0;
  justify-content: space-between;
}
.digital-result .result {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  margin: 0 auto 0 0;
}
.digital-result .result h3 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  background: linear-gradient(263.88deg, #40aaf8 49.29%, #1d33f8 102.71%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.digital-result .result p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #19172c;
  text-align: start;
  margin-top: 0.3rem;
}
</style>
