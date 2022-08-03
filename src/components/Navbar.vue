<template>
  <div class="navbar">
    <div class="container">
      <nav>
        <img src="../assets/logo-1.svg" alt="" />

        <div class="links">
          <div class="select">
            <h4 @click="toggle">Our Services</h4>
            <div class="mini-select" v-if="showSelect">
              <router-link :to="{ name: 'Industry' }"
                >IT consulting</router-link
              >
              <router-link :to="{ name: 'Industry' }"
                >Mobile application devs</router-link
              >
              <router-link :to="{ name: 'Industry' }"
                >Dedicated team</router-link
              >
              <router-link :to="{ name: 'Industry' }">UX/UI design</router-link>
              <router-link :to="{ name: 'Industry' }"
                >Infrastructure optimization</router-link
              >
              <router-link :to="{ name: 'Industry' }"
                >Implementation of ERP</router-link
              >
            </div>
          </div>
          <div class="select">
            <h4 @click="togglee">Industry</h4>
            <div class="mini-selectt" v-if="showSelectt">
              <router-link :to="{ name: 'Industry' }">Healthcare</router-link>
              <router-link :to="{ name: 'Industry' }">Education</router-link>
              <router-link :to="{ name: 'Industry' }">Finance</router-link>
            </div>
          </div>
          <router-link :to="{ name: 'Portfolio' }">Portfolio</router-link>
          <router-link :to="{ name: 'AboutUs' }">About Us</router-link>
        </div>

        <button class="button">Contant Us</button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      showSelect: false,
      showSelectt: false,
    };
  },

  methods: {
    toggle() {
      this.showSelect = !this.showSelect;
    },
    togglee() {
      this.showSelectt = !this.showSelectt;
    },
  },
};
</script>

<style>
.navbar {
  padding: 16px 10px;
  margin-bottom: 30px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.links {
  display: flex;
  position: relative;
}

.links a {
  margin: 0 30px;
  color: rgb(146, 145, 145);
  text-decoration: none;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
}
.select {
  position: relative;
  display: flex;
}
.select a {
  margin: 10px 8px;
}
.select h4 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  margin: 0 30px;
}

.links .select .mini-select {
  display: flex;
  flex-direction: column;
  background: rgba(25, 23, 44, 0.5);
  backdrop-filter: blur(26px);
  border-radius: 8px;
  margin-top: 40px;
  margin-left: -40px;
  position: absolute;
  align-items: flex-start;
  padding: 10px;
  width: 222px;
}
.links .select .mini-selectt {
  display: flex;
  flex-direction: column;
  background: rgba(25, 23, 44, 0.5);
  backdrop-filter: blur(26px);
  border-radius: 8px;
  margin-top: 40px;
  margin-left: -40px;
  position: absolute;
  align-items: flex-start;
  padding: 10px;
  width: 140px;
}

.mini-selectt a {
  margin-top: 5px;
  z-index: 1%;
  color: #ffffff;
}
.mini-selectt a:hover {
  cursor: pointer;
  color: #5d5fef;
}
.mini-select a {
  margin-top: 5px;
  z-index: 1%;
  color: #ffffff;
}
.mini-select a:hover {
  cursor: pointer;
  color: #5d5fef;
}

.language {
  display: flex;
  align-items: center;
}
.language h4 {
  margin: 0 8px;
}
.language h4 img {
  margin-right: 5px;
}

.contact-page {
  background: rgb(212, 218, 218);
  margin: 5px 0;
  padding: 5px 0;
  display: flex;
  align-items: center;
}
.katalog {
  background: white;
  padding: 0.7rem;
  border-radius: 5%;
  display: flex;
  align-items: center;
  margin: 0 37px;
  width: 10%;
  /* text-align: center; */
  justify-content: center;
}
.search {
  /* background-color: white; */
  width: 26%;
}
.search input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
.search input[tupe="text"]:focus {
  border: 3px solid #555;
}

.button {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  font-size: 16px;
  padding: 18px 40px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background: transparent;
}
</style>
