<template>
  <div class="container">
    <div class="breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Portfolio</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
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

    <div class="completed-cards">
      <div class="completed-card-imgs portfoili-img">
        <div class="completed-card-img">
          <img src="@/assets/vasta/vasta.svg" alt="" />
          <h3>Bosh farzandim</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-3.svg" alt="" />
          <h3>Vasia creative</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/vasta/vasta-4.svg" alt="" />
          <h3>Story telling</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-4.svg" alt="" />
          <h3>Freelance platform</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-1.svg" alt="" />
          <h3>Freelance app</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-2.svg" alt="" />
          <h3>Task manager</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-3.svg" alt="" />
          <h3>Multipurpose app</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-2.svg" alt="" />
          <h3>Personal app</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/vasta/vasta.svg" alt="" />
          <h3>Vasia creative</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/vasta/vasta-4.svg" alt="" />
          <h3>Story telling</h3>
          <a href="#">See product</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userFilterKey: "all",
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
    };
  },
};
</script>

<style>
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
.portfoili-img {
  margin: 2rem 0;
}
.completed-cards {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
}
.completed-card-text {
  margin: 2rem 0;
}
.completed-card-text h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
}
.completed-card-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.5;
  text-align: start;
  margin-top: 1rem;
}

.completed-card-imgs {
  display: flex;
  flex-wrap: wrap;
}
.completed-card-img {
  margin: 2rem 1.5rem;
  height: 400px;
  background: white;
  border-radius: 5%;
  position: relative;
  transition: 1s all ease-in-out;
}
.completed-card-img img {
  height: 400px;
}
.completed-card-img:hover img {
  transition: 0.5s all ease-in-out;
  height: 340px;
}
.completed-card-img:hover a {
  visibility: visible;
}
.completed-card-img:hover h3 {
  color:black;
}
.completed-card-img h3 {
  position: absolute;
  bottom: 8%;
  color: white;
  text-align: start;
  margin-left: 5px;
  margin-top:5px;
}
.completed-card-img a {
  color: blue;
  visibility: hidden;
  margin-left: 5px;
  margin-top: 25px;
  text-align: start;
  display: flex;
}
</style>