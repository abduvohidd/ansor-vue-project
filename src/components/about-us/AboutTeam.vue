<template>
  <div class="container">
    <div class="team-text">
      <h1>Our <span :class="(isActive = 'active')">professional</span>team</h1>
      <p>Team leads really lead company</p>
    </div>

    <div class="team">
      <div class="team-img" v-for="team in teams" :key="team">
        <img :src="team.img" alt="" />
        <h5>{{ team.name }}</h5>
        <a href="#">Seo</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          img: [require("@/assets/team/team-4.svg")],
          name: "Jon Uik",
        },
        {
          img: [require("@/assets/team/team-2.svg")],
          name: "Denis Istomen",
        },
        {
          img: [require("@/assets/team/team-3.svg")],
          name: "James Bond",
        },
        {
          img: [require("@/assets/team/team-4.svg")],
          name: "Someone ",
        },
        {
          img: [require("@/assets/team/team-5.svg")],
          name: "Jon Uik",
        },
        {
          img: [require("@/assets/team/team-2.svg")],
          name: "Denis Istomen",
        },
      ],
    };
  },
};
</script>

<style>
.team-text {
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-top: 3rem;
}
.team-text h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  color: #19172c;
}
.team-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.5;
}

.team {
  display: flex;
  position: relative;
  width: 100%;
  margin: 2rem 0;
  justify-content: space-around;
}
.team-img {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  border-radius: 5%;
  background: white;
  margin-bottom: 5rem;
  padding: 0;
  height: 250px;
  transition: 2s all ease-in-out;
}
.team-img img {
  height: 250px;
}
.team-img:hover img {
  transition: 1s all ease-in-out;
  height: 200px;
}
.team-img h5 {
  position: absolute;
  bottom: 85px;
  margin-left: 5px;
}

.team-img a {
  position: absolute;
  visibility: hidden;
  bottom: -10px;
  margin: 5px;
  padding-top: 15px;
  color: blue;
}
.team-img:hover {
  cursor: pointer;
}

.team-img:hover h5 {
  bottom: 105px;
}
.team-img:hover a {
  visibility: visible;
  position: absolute;
  margin: 5px;
  bottom: 75px;
  padding-top: 15px;
}
</style>