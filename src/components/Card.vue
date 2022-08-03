<template>
  <div class="container">
    <div class="card-text">
      <h1>Our superfast <span :class="{ active: isActive }">services</span></h1>
      <p>We give you exact quote before starting your project.</p>
    </div>
    <div class="cards">
      <div v-for="(card, index) in cards" :key="index">
        <div class="card">
          <img :src="card.img" alt="" />
          <div>
            <h3>{{ card.name }}</h3>
            <p>{{ card.para }}</p>
          </div>
        </div>
      </div>

      <div class="card-search">
        <h3>
          What other services would you like us
          <span :class="{ active: (isActive = 'active') }">to add </span>?
        </h3>
        <form>
          <label for="">Write here</label>
          <input type="text" placeholder="I will be glad if you add..." />
          <button>Send Us</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isActive"],
  data() {
    return {
      cards: [
        {
          name: "IT consulting",
          para: "We harness the power of our consultancy & design talent, alongsi...",
          img: require("../assets/cards/card-1.svg"),
        },
        {
          name: "Mobile application devs",
          para: "Mobile applications on iOS and Android system",
          img: require("../assets/cards/card-2.svg"),
        },
        {
          name: "Dedicated team",
          para: "Teams of technologists, strategists and designers deliver powerful digital ",
          img: require("../assets/cards/card-3.svg"),
        },
        {
          name: "UX/UI design",
          para: "Our talented designers bring your ideas to life. They know how to huma...",
          img: require("../assets/cards/card-4.svg"),
        },
        {
          name: "Infrastucture optimization",
          para: "Teams of technologists, strategists and designers deliver powerful digita...",
          img: require("../assets/cards/card-5.svg"),
        },
        {
          name: "Implementation of ERP",
          para: "We make technology transformation happen. You get omnichannel softw...",
          img: require("../assets/cards/card-6.svg"),
        },
      ],
    };
  },
};
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding-bottom: 5rem;
  justify-content: space-between;
}

.card:hover {
  background: #ffffff;
  box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  border: 1px solid rgb(232, 231, 231);
  cursor: pointer;
}
.card:hover img {
  filter: grayscale(0%);
  color: blue;
}
.card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 255px;
  height: 65%;
  border: 1px solid #ffffff;
  margin: 30px 30px 30px 0px;
  background: #ffffff;
  border-radius: 16px;
}
.card-search {
  width: 43%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #ffffff;
  margin: 30px 30px 30px 0px;
  background: #ffffff;
  border-radius: 16px;
}
.card-search h3 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  width: 70%;
  text-align: start;
}
.card-search h3 span {
  text-align: start;
}

.card-search form label {
  display: block;
  align-items: flex-start;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  color: #19172c;
  opacity: 0.4;
  text-align: start;
  margin-top: 1.5rem;
}
.card-search form input {
  background: rgba(25, 23, 44, 0.03);
  border: 1px solid rgba(25, 23, 44, 0.1);
  border-radius: 10px;
  padding: 1rem;
  width: 380px;
}
.card-search form button {
  width: 124px;
  height: 51px;

  margin: 0.8rem;
  margin-left: 16px;

  background: linear-gradient(267.95deg, #40aaf8 -14.86%, #1d33f8 86.76%);
  box-shadow: 0px 4px 32px rgba(32, 80, 253, 0.25);
  border-radius: 10px;
  border: aliceblue;
}
.card-search:hover {
  background: #ffffff;
  box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  border: 1px solid rgb(232, 231, 231);
  cursor: pointer;
}
.card img {
  filter: grayscale(100%);
  margin: 1rem;
  width: 3vw;
  height: 3vw;
}

.card h3 {
  display: flex;
  align-items: flex-start;
  margin: 0.8rem;

  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #19172c;
}
.card p {
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

.card-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 5rem;
}
.card-text h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #19172c;
}
.card-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #19172c;
  opacity: 0.5;
  margin-top: 14px;
}

.active {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#1d33f8),
    to(#40aaf8)
  );
  color: transparent;
  background-image: linear-gradient(90deg, #1d33f8, #40aaf8);
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
