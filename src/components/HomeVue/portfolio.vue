<template>
  <div class="container">
    <div class="portfolio-text">
      <h1>
        Our
        <span :class="{ active: (isActive = 'active') }">light portfolio</span>
      </h1>
      <p>Enjoy save and order new project to us</p>
    </div>

    <div class="portfolio-menu">
      <div class="div">
        <button
          class="button btn"
          v-for="product in products"
          :key="product.key"
          v-on:click="userFilterKey = product.value"
          :class="{ activet: userFilterKey == product.value }"
        >
          <img :src="product.image" alt="" class="imgs" />
          {{ product.name }}
        </button>
      </div>
    </div>

    <flickity
      class="flickity"
      ref="flickity"
      :options="flickityOptions"
      v-for="user in userFilter"
      :key="user.key"
    >
      <div class="carousel-cell">
        <img src="@/assets/completed-card/completed-card-1.svg" alt="" />
      </div>
      <div class="carousel-cell">
        <img src="@/assets/vasta/vasta.svg" alt="" />
      </div>
      <div class="carousel-cell">
        <img src="@/assets/completed-card/completed-card-3.svg" alt="" />
      </div>
      <div class="carousel-cell">
        <img src="@/assets/vasta/vasta-4.svg" alt="" />
      </div>
      <div class="carousel-cell">
        <img src="@/assets/completed-card/completed-card-4.svg" alt="" />
      </div>
      <div class="carousel-cell">
        <img src="@/assets/vasta/vasta-3.svg" alt="" />
      </div>
    </flickity>

    <div class="accordion-page">
      <div class="accordion-text">
        <h1 :class="{ active: (isActive = 'active') }">FAQ</h1>
        <p>
          Couldn’t find what you were looking for ? Write to us
          <span :class="{ active: (isActive = 'active') }"
            >help@ansorio.com</span
          >
        </p>
      </div>

      <div class="accordion">
        <div class="option">
          <input type="checkbox" id="toggle1" class="toggle" />
          <label class="title title1" for="toggle1"
            >Is there any free trial available
          </label>
          <div class="content">
            <p>
              A frequently asked questions (FAQ) list is often used in articles,
              websites, email lists, and online forums where common questions
              tend to recur, for example through posts or queries by new users
              related to common knowledge gaps. The purpose of a FAQ is
              generally to provide information on frequent questions or
              concerns; however, the format is a useful means of organizing.
            </p>
          </div>
        </div>

        <div class="option">
          <input type="checkbox" id="toggle2" class="toggle" />
          <label class="title" for="toggle2">
            On the Internet non-traditional FAQs
          </label>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div class="option">
          <input type="checkbox" id="toggle3" class="toggle" />
          <label class="title" for="toggle3"> In web design </label>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div class="option">
          <input type="checkbox" id="toggle4" class="toggle" />
          <label class="title" for="toggle4"> Reducing the workload </label>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div class="option">
          <input type="checkbox" id="toggle5" class="toggle" />
          <label class="title" for="toggle5"> Improving site navigation </label>
          <div class="content">
            <p>
              A frequently asked questions (FAQ) list is often used in articles,
              websites, email lists, and online forums where common questions
              tend to recur, for example through posts or queries by new users
              related to common knowledge gaps. The purpose of a FAQ is
              generally to provide information on frequent questions or
              concerns; however, the format is a useful means of organizing.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card-texts">
      <img :src="img" alt="" />
      <h1>
        Let’s discuss your<span :class="{ active: isActive }"
          >dream project</span
        >
      </h1>
    </div>
    <div class="cardes">
      <div v-for="(card, index) in cards" :key="index">
        <div class="carde">
          <img :src="card.img" alt="" />
          <div>
            <h3>{{ card.name }}</h3>
            <p>{{ card.para }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElButton } from "element-plus";
import Flickity from "vue-flickity";

export default {
  components: { ElButton, Flickity },

  data() {
    return {
      userFilterKey: "all",
      flickityOptions: {
        initialIndex: 4,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true,
      },
      products: [
        {
          name: "Design",
          image: require("@/assets/cards/card-4.svg"),
          value: "all",
        },
        {
          name: "Web Platforms",
          image: require("@/assets/cards/card-1.svg"),
          value: "biogas",
        },
        {
          name: "Mobile application",
          image: require("@/assets/cards/card-2.svg"),
          value: "naturalgas",
        },
      ],
      stations: [
        { name: "Kaasuasema1", value: ["All"] },
        {
          name: "Kaasuasema2",
          value: ["Web Platforms"],
          image: require("@/assets/cards/card-2.svg"),
        },
        { name: "Kaasuasema3", value: ["Mobile"] },
      ],
      cards: [
        {
          name: "Scheduling software",
          para: "Trello Official site, Info for staff scheduling system, Employee scheduling system",
          img: require("@/assets/cards/card-7.svg"),
        },
        {
          name: "Meeting management software",
          para: "Jira official site, Ship early and often, Agily teams, Meeting management tools, Meeting management to...",
          img: require("@/assets/cards/card-8.svg"),
        },
        {
          name: "Video conferencing",
          para: "Video conference chat, Voip call system, Business phone service ",
          img: require("@/assets/cards/card-9.svg"),
        },
      ],
      img: require("@/assets/cards/log0-2.svg"),
    };
  },

  computed: {
    userFilter() {
      return this[this.userFilterKey];
    },
    all() {
      return this.stations.filter((station) => station.value.includes("All"));
    },
    biogas() {
      return this.stations.filter((station) =>
        station.value.includes("Web Platforms")
      );
    },
    naturalgas() {
      return this.stations.filter((station) =>
        station.value.includes("Mobile")
      );
    },
  },
};
</script>

<style>
.carousel-cell {
  width: 280px;
  height: 450px;
  margin-right: 10px;
  background: rgb(170, 165, 165);
  border-radius: 5px;
  counter-increment: carousel-cell;
}

.flickity-slider {
  width: 66%;
  transform: none;
}
.button.activet {
  font-weight: bold;
  border: 1px solid blue;
  color: blue;
}
.button.activet .imgs {
  filter: grayscale(0%);
}
.div {
  display: flex;
  align-items: flex-start;
}
.slider {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.portfolio-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.portfolio-text h1 {
  padding-top: 2rem;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 2px;
  color: #19172c;
}
.portfolio-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #19172c;
  opacity: 0.5;
  margin-top: 1rem;
}
.portfolio-menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 13px 12px 13px 10px;
  gap: 10px;
  margin-top: 2rem;
}
.btn {
  background: #ffffff;
  border-radius: 8px;
  margin: 5px;
  color: black;
  padding: 1rem;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #19172c;
  cursor: pointer;
}
.imgs {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  filter: grayscale(100%);
}
.previous {
  position: absolute;
  top: -120px;
}
.flickity-prev-next-button.previous {
  left: 87%;
  width: 4%;
  margin: 0;
  transform: scaleY(1.5);
}
.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 35%;
  top: 20%;
  width: 30%;
  height: 60%;
}

.next {
  position: absolute;
  width: 4%;
  top: -120px;
  margin: 0;
  transform: scaleY(1.5);
}
.flickity-page-dots {
  display: none;
}
.flickity {
  padding-bottom: 10rem;
  /* width: 70%; */
  margin: auto;
  margin-top: 3rem;
}

.card-texts {
  display: flex;
  align-items: center;
}
.card-texts h1 {
  margin-left: 2rem;
}
.card-texts h1 span {
  display: block;
  text-align: start;
}

.cardes {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding-bottom: 5rem;
  justify-content: space-around;
}

.carde:hover {
  background: #ffffff;
  box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  border: 1px solid rgb(232, 231, 231);
  cursor: pointer;
}
.carde:hover img {
  filter: grayscale(0%);
  color: blue;
}

.carde {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 387px;
  height: 80%;
  border: 1px solid #ffffff;
  margin: 30px 30px 30px 0px;
  background: #ffffff;
  border-radius: 16px;
}

.carde img {
  filter: grayscale(100%);
  margin: 1rem;
  width: 3vw;
  height: 3vw;
}

.carde h3 {
  display: flex;
  align-items: flex-start;
  margin: 0.8rem;

  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #19172c;
}
.carde p {
  display: flex;
  align-items: flex-start;
  text-align: start;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #19172c;
  opacity: 0.5;
  margin: 0.8rem;
}

/* 

*/

.accordion-page {
  display: flex;
  width: 100%;
  margin: 2rem 0;
}

.accordion-text {
  width: 60%;
  margin-top: 3.5rem;
  margin-right: 5rem;
  text-align: start;
}
.accordion-text h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
}
.accordion-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

.accordion {
  margin: 3em auto;
  /* max-width: 30em; */
}

.toggle {
  display: none;
}

.option {
  position: relative;
  margin-bottom: 1em;
}
.option:before {
  content: "";
  position: absolute;
  right: 8px;
  top: 14px;
  width: 6px;
  height: 8px;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 50%;
  border: 1.5px solid #2a2d49;
  opacity: 0.5;
  transform: translate(10px, -1px);
}

.title,
.content {
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.2s;
}

.title {
  padding: 1em;
  display: flex;
  color: black;
  font-weight: bold;
  border-top: 1px solid #9c9c9e;
}
.title1 {
  border-top: 0;
}

.title:after,
.title:before {
  content: "";
  position: absolute;
  right: 1.2em;
  top: 1.3em;
  width: 0.2rem;
  height: 0.75em;
  background-color: black;
  transition: all 0.2s;
  cursor: pointer;
}
.title:after {
  transform: rotate(90deg);
}

.content {
  max-height: 0;
  overflow: hidden;
}
.content p {
  margin: 0;
  padding: 0.5em 1em 1em;
  font-size: 0.9em;
  line-height: 1.5;
}

.toggle:checked + .title + .content {
  max-height: 500px;
}
.toggle:checked + .title:before {
  transform: rotate(90deg) !important;
}
</style>