<template>
  <div class="container">
    <div class="reasons">
      <div class="reason-text">
        <h2>
          4 reasons why you should
          <span :class="(isActive = 'active')">hire</span> us?
        </h2>
        <p>
          We give you exact quote before starting your project, and we stick to
          it! We give you exact quote before starting your project.
        </p>
      </div>

      <div class="reason-card">
        <div class="reason" v-for="reason in reasons" :key="reason.num">
          <el-avatar>{{ reason.num }}</el-avatar>

          <h4>{{ reason.text }}</h4>
          <p>{{ reason.para }}</p>
        </div>
      </div>
    </div>

    <div class="completed-cards">
      <div class="completed-card-text">
        <h1><span :class="(isActive = 'active')">Completed </span>projects</h1>
        <p>Enjoy save and order new project to us</p>
      </div>

      <div class="completed-card-imgs">
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-1.svg" alt="" />
          <h3>Payment methods</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-2.svg" alt="" />
          <h3>Freelance app</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-3.svg" alt="" />
          <h3>Task manager</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-1.svg" alt="" />
          <h3>Multipurpose app</h3>
          <a href="#">See product</a>
        </div>
        <div class="completed-card-img">
          <img src="@/assets/completed-card/completed-card-4.svg" alt="" />
          <h3>Personal app</h3>
          <a href="#">See product</a>
        </div>
        <div class=" completed">
          <h3>
            Also <span :class="(isActive = 'active')">your project</span> may
            appear here 😉
          </h3>
          <p>Let us to disscuss project with you</p>

          <button>Disscuss project</button>

          <img src="@/assets/completed-card/completed-card-5.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="portfolio-text">
      <h1>
        <span :class="{ active: (isActive = 'active') }">Reviews</span>
        from our clients
      </h1>
      <p>Enjoy save and order new project to us</p>
    </div>

    <div id="tabs">
      <div class="tab-container" v-if="tabList.data">
        <ul class="tab-list">
          <li
            v-for="(item, index) in tabList.data"
            :key="item.index"
            class="tab-list__item"
            @click="showTab(index)"
            :class="item.isActive == true ? 'tab-list__item--active' : ''"
          >
            <div class="content-img">
              <el-avatar><img :src="item.contentimg" alt="" /></el-avatar>
            </div>
            <div class="content-tex">
              <h3>{{ item.title }}</h3>
              <p>{{ item.para }}</p>
            </div>
          </li>
        </ul>
        <div
          class="tab-content"
          v-for="item in tabList.data"
          :key="item"
          v-show="item.isActive"
        >
          <img :src="item.img" alt="" />
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserFilled } from "@element-plus/icons-vue";
export default {
  components: {
    UserFilled,
  },
  data() {
    return {
      reasons: [
        {
          num: "1",
          text: "Only muslims work",
          para: "We've been agile-inside for over a decade with 100% of ANSOR running agile processes and tools. Today, over 80% of our customer programs are distributed agile at scale",
        },
        {
          num: "2",
          text: "Respected technologies",
          para: "For over 20 years, we've been the developers' developers. Our technology expertise goes broader and deeper than any other technology partner.",
        },
        {
          num: "3",
          text: "Productivity and performance",
          para: "Our tools, teams and delivery methodologies are built around one goal: delivering higher productivity and better performance than any other partner.",
        },
        {
          num: "4",
          text: "Trusted results",
          para: "Our customer engagements are resulting in true transformations and help us maintain a repeat customer rate of over 90%.",
        },
      ],

      tabList: {
        data: [
          {
            title: "James Bond",
            para: "Founder of Clayk",
            contentimg: [require("@/assets/clients-img/bond.svg")],
            img: [require("@/assets/clients-img/Walmart.svg")],
            content:
              "I'm a Seo at walmart ads. I'm fiery about marketing, writing and traveling, so you can often find me scribbling away in some unknown corner of the world. If you want to know more ways to increase traffic and attract buyers to your online store.",
            isActive: true,
          },
          {
            title: "Dan Raykhman",
            para: "SEO of currency consulting Walmart",
            contentimg: [require("@/assets/clients-img/dan.svg")],
            img: [require("@/assets/clients-img/Walmart.svg")],
            content:
              " I'm a Seo at walmart ads. I'm fiery about marketing, writing and traveling, so you can often find me scribbling away in some unknown corner of the world. If you want to know more ways to increase traffic and attract buyers to your online store get in touch with sixads on one of the channels bellow.",
            isActive: false,
          },
          {
            title: "Stive Jobs",
            para: "Founder of Apple",
            contentimg: [require("@/assets/clients-img/stive.svg")],
            img: [require("@/assets/clients-img/Walmart.svg")],
            content:
              "Quisquam vitae ducimus eum totam distinctio ab eaque iure laborum tempora, architecto officiis error, odit quae voluptatum ad.",
            isActive: false,
          },
        ],
      },
    };
  },

  methods: {
    showTab: function (index) {
      for (let i = 0; i < this.tabList.data.length; i++) {
        this.tabList.data[i].isActive = false;
      }

      if (this.tabList.indexActive == index) {
        this.tabList.data[index].isActive = false;
        this.tabList.indexOpen = null;
      } else {
        this.tabList.data[index].isActive = true;
        this.tabList.indexOpen = index;
      }
    },
  },
};
</script>

<style>
.tabs {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.tab-container {
  width: 100%;
  display: flex;
}

.tab-list {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-right: 10rem;
  list-style: none;
  cursor: pointer;
  width: 30%;
}
.tab-list h3 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  text-align: start;
}
.tab-list p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #19172c;
  opacity: 0.5;
}
.tab-list__item {
  display: flex;
  width: percentage(1/3);
  padding: 16px;
  text-align: center;
  margin-top: 1rem;
}
.content-text {
  display: flex;
  flex-direction: column;
}
.content-img {
  margin-right: 1rem;
}

.tab-list__item--active {
  color: black;
  background: #ffffff;
  border-radius: 16px;
}

.tab-content {
  padding: 6px 24px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tab-content img {
  width: 91.15px;
  height: 21.03px;
  margin-bottom: 2rem;
}
.tab-content p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #19172c;
}
.reasons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 0;
}
.reason-text {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
}
.reason-text h2 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  color: #19172c;
  margin-bottom: 10px;
}
.reason-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.5;
}

.reason-card {
  display: flex;
  margin-top: 3rem;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
}
.reason {
  width: 270px;
  height: 195px;
  text-align: start;
}
.reason span {
  background: transparent;
  color: black;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  border: 1px solid #19172c;
  border-radius: 50%;
  margin-bottom: 20px;
}
.reason h4 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
}

.reason p {
  margin-top: 5px;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #19172c;
  opacity: 0.5;
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
  position: relative;
  border-radius: 5%;
}
.completed-card-img img{
height: 400px;
}
.completed-card-img:hover img{
  height: 350px;
}
.completed-card-img:hover a{
  visibility: visible;
}
.completed-card-img h3{
  position: absolute;
  text-align: start;
  margin-top: 5px;
  bottom: 5%;
  margin-left: 10px;
}
.completed-card-img a{
  margin-left: 10px;
  position: absolute;
  bottom: 1%;
  text-align: start;
  display: flex;
  color:blue;
  visibility: hidden;
}


.completed {
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5%;
  position: relative;
  width: 18%;
  height: 25rem;
  margin-top: 2rem;
  cursor: pointer;
}
.completed img{
  position: absolute;
  bottom: 0;
  cursor: pointer;
  right: 0;
}
.completed h3 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  text-align: start;
  line-height: 29px;
  color: #19172c;
  width: 70%;
  padding: 2rem 2rem 1rem 1rem;
  margin-top: 5.5rem;
}
.completed p {
  text-align: start;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #19172c;
  opacity: 0.5;
  margin-left: 1rem;
}

.completed button {
  margin-bottom: 10rem;
  margin-top: 2rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 70%;
  cursor: pointer;
  border: none;
  background: linear-gradient(261.49deg, #40aaf8 9.83%, #1d33f8 107.62%);
  box-shadow: 0px 4px 32px rgba(32, 80, 253, 0.25);
  border-radius: 10px;
}
</style>