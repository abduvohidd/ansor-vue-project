<template>
  <div class="container">
    <div class="header-about">
      <h1>
        We decided to work only for
        <span :class="{ active: 'isActive' }">MUSLIMS</span> & with them
      </h1>
      <p>
        Experienced web and mobile application development team, because there
        is no site in the world where only Muslims work.
      </p>

      <img :src="img" alt="" class="img" />

      <div class="header-link-logo">
        <ul>
          <li v-for="photo in photos" :key="photo.id">
            <img :src="photo.imageUrls.default" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/text-logo.svg"),

      photos: [
        {
          id: 1,
          caption: "P1",
          series: "",
          notes: "",
          imageUrls: {
            default: require("@/assets/headers/p1.svg"),
          },
        },
        {
          id: 2,
          caption: "P2",
          series: "",
          notes: "",
          imageUrls: {
            default: require("@/assets/headers/p2.svg"),
          },
        },

        {
          id: 3,
          caption: "P3",
          series: "",
          notes: "",
          imageUrls: {
            default: require("@/assets/headers/p3.svg"),
          },
        },

        {
          id: 4,
          caption: "P4",
          series: "",
          notes: "",
          imageUrls: {
            default: require("@/assets/headers/p4.svg"),
          },
        },
      ],

      author: {
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - BAsic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
};
</script>

<style>
.header-about {
  width: 804px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.header-about h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
}

.header-about p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #c4c4f4;
  margin-top: 2rem;
  width: 78%;
}

.header-about .img {
  margin: 4rem 0;
}

.header-about .header-link-logo ul {
  display: flex;
  align-content: center;
}
.header-about .header-link-logo ul li {
  margin: 0 2rem;
  align-items: center;
  display: flex;
}
.header-about .header-link-logo ul li img {
  filter: grayscale(100%);
}
</style>
