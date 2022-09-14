<template>
  <div class="container">
    <div class="portfolio-text">
      <h1>
        <span :class="{ active: (isActive = 'active') }">Reviews</span>
        from our clients
      </h1>
      <p>Enjoy save and order new project to us</p>
    </div>

    <div id="tabs">
      <div class="tab-container education-reason" v-if="tabList.data">
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
export default {
  data() {
    return {
      tabList: {
        data: [
          {
            title: "James Bond",
            para: "Founder of Clayk",
            contentimg: [require("@/assets/clients-img/bond.svg")],
            img: [require("@/assets/mohirdev.svg")],
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
              " I'm a user at mohirdev. I'm fiery about marketing, writing and traveling, so you can often find me scribbling away in some unknown corner of the world. If you want to know more ways to increase traffic and attract buyers to your online store get in touch with sixads on one of the channels bellow.",
            isActive: false,
          },
          {
            title: "Stive Jobs",
            para: "Founder of Apple",
            contentimg: [require("@/assets/clients-img/stive.svg")],
            img: [require("@/assets/Rll.svg")],
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
.education-reason {
  padding-bottom: 5rem;
}
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
</style>