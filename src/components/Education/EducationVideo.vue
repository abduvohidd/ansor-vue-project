<template>
  <div class="container">
    <div class="education-videos">
      <div class="video-text">
        <h1><span :class="(isActive = 'active')">Video</span> explaining</h1>
        <p>
          The key to a web-based educational application is its compatibility
          with different platforms and devices. If the program presents
          accessibility barriers like requiring an updated browser or OS, then
          the efficacy of the learning initiatives will be dramatically
          hindered.
        </p>
        <button>Watch videos</button>
      </div>

      <div class="education-teams">
        <div class="education-team" v-for="team in teams" :key="team">
          <img :src="team.img" alt="" class="img-play" />
        </div>
        <el-icon class="video-play">
          <img src="@/assets/play.svg" alt="" />
        </el-icon>
        <el-icon class="video-play1">
          <img src="@/assets/play.svg" alt="" />
        </el-icon>
      </div>
    </div>

    <div class="education-product-text">
      <h1><span :class="(isActive = 'active')">Products</span> we developed</h1>
      <p>Enjoy save and order new project to us.</p>
    </div>

    <div class="education-team">
      <div class="education-team-img" v-for="team in teams" :key="team">
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
      play: true,
      teams: [
        {
          img: [require("@/assets/completed-card/completed-card-1.svg")],
          name: "Mohirdev",
        },
        {
          img: [require("@/assets/completed-card/completed-card-4.svg")],
          name: "RLL education",
        },
      ],
    };
  },
};
</script>

<style>
.education-teams {
  display: flex;
  position: relative;
}
.education-team .img-play {
  margin-left: 3rem;
  height: 70%;
  z-index: 0;
}

.video-play,
.video-play1 {
  z-index: 100;
  color: rgb(243, 235, 235);
  width: 4rem;
  height: 4rem;
  background: #c9c9c9;
  border-radius: 50%;
  cursor: pointer;
  top: 30%;
  left: 17%;
  position: absolute;
}
.video-play1 {
  position: absolute;
  top: 30%;
  left: 57%;
}
.video-text {
  width: 38%;
}
.video-text h1 {
  text-align: start;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
}
.video-text p {
  text-align: start;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  opacity: 0.7;
  color: #19172c;
}

.video-text button {
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  cursor: pointer;
  border: none;
  background: linear-gradient(261.49deg, #40aaf8 9.83%, #1d33f8 107.62%);
  box-shadow: 0px 4px 32px rgba(32, 80, 253, 0.25);
  border-radius: 10px;
}

.education-videos {
  display: flex;
  width: 100%;
}

.education-product-text {
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-top: 3rem;
}
.education-product-text h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  color: #19172c;
}
.education-product-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.5;
}

.education-team {
  display: flex;
  position: relative;
  width: 40%;
  margin: 2rem 0;
}
.education-team-img {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  border-radius: 5%;
  margin-bottom: 5rem;
  padding: 0rem;
  background: white;
  transition: padding 1s;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
}
.education-team-img img {
  height: 400px;
}
.education-team-img:hover img {
  height: 340px;
  transition: 0.5s all ease-in-out;
  margin-bottom: 10px;
}
.education-team-img h5 {
  position: absolute;
  bottom: 105px;
  margin-left: 5px;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: white;
}

.education-team-img a {
  position: absolute;
  visibility: hidden;
  bottom: -10px;
  margin: 5px;
  color: blue;
}
.education-team-img:hover {
  cursor: pointer;
}

.education-team-img:hover h5 {
  margin-top: 5px;
  bottom: 100px;
  color:black;
}
.education-team-img:hover a {
  visibility: visible;
  position: absolute;
  margin: 5px;
  bottom: 75px;
}
</style>