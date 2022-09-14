<template>
  <div class="container">
    <div class="achievments">
      <div class="achievment-text">
        <h1>Popular <span :class="(isActive = 'active')">achievments</span></h1>
        <p>Investing and competetion achievments will appear here.</p>
      </div>
      <div class="achievment-cards">
        <div
          class="achievment-card"
          v-for="achievment in achievments"
          :key="achievment.data"
        >
          <img :src="achievment.img" :alt="achievment.data" />
          <h3>
            {{ achievment.title }}
            <span :class="(isActive = 'active')">{{ achievment.span }}</span>
          </h3>
          <p>{{ achievment.para }}</p>
          <span>{{ achievment.data }}</span>
        </div>
      </div>
    </div>

    <div class="partners">
      <div class="partners-text">
        <h1>Reliable<span :class="(isActive = 'active')">partners</span></h1>
        <p>We are a trusted technology partner for recognized brands</p>
      </div>
      <div class="partners-img">
        <img src="@/assets/partners/partner-1.svg" alt="" />
        <img src="@/assets/partners/partner-2.svg" alt="" />
        <img src="@/assets/partners/partner-3.svg" alt="" />
        <img src="@/assets/partners/partner-4.svg" alt="" />
        <img src="@/assets/partners/partner-1.svg" alt="" />
        <img src="@/assets/partners/partner-2.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievments: [
        {
          img: [require("@/assets/stars.svg")],
          title: "Republic IT conference",
          span: "1st place",
          para: "The main goal of the ansor.io platform, founded in July 2021, is to train young professionals through quality and popular online education. So far, more than 15,000 students are studying in more than 30 free and paid courses on mohirdev.uz.",
          data: "15.02.2022",
        },
        {
          img: [require("@/assets/half-stars.svg")],
          title: "IT conference",
          span: "Central Asia",
          para: "The Mohirdev project, which has been in talks with investors for the past few months, reached an agreement with the Pulse Group on December 29 to raise $ 500,000 for the development of the platform.",
          data: "21.04.2022",
        },
      ],
    };
  },
};
</script>

<style>
.achievments {
  display: flex;
  flex-direction: column;
}
.achievment-text {
  text-align: start;
  margin: 2rem 0;
}
.achievment-text h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  color: #19172c;
}
.achievment-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.5;
}

.achievment-cards {
  display: flex;
  width: 100%;
  margin: 2rem 0;
}
.achievment-card {
  width: 50%;
  text-align: start;
}
.achievment-card h3 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #19172c;
}
.achievment-card h3 span {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
}
.achievment-card p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 1rem 0;
  color: #19172c;
  opacity: 0.7;
  width: 67%;
}
.achievment-card span {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #5d5fef;
}

.partners {
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
}
.partners-text {
  text-align: start;
}
.partners-text h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  color: #19172c;
}
.partners-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.5;
}
.partners-img{
  text-align: start;
  margin: 2rem 0;
  justify-content: space-around;
  display: flex;
}
.partners-img img{
  filter: grayscale(1);
}
</style>