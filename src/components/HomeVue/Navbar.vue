<template>
  <div class="navbar">
    <div class="container">
      <nav>
        <span class="navbar-image">
          <slot />
        </span>

        <img class="nav-image" src="@/assets/logo-1.svg" alt="" />

        <div class="links">
          <div class="select" :color="color" @click="toggle">
            <h4>
              {{ $t("link.ourService") }}
            </h4>
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
            <span class="span-1" v-if="span1"></span>
            <span class="span-2" v-if="span2"></span>
          </div>
          <div class="select">
            <h4 @click="togglee">
              {{ $t("link.industry") }}
            </h4>
            <div class="mini-selectt" v-if="showSelectt">
              <router-link :to="{ name: 'Industry' }">Healthcare</router-link>
              <router-link :to="{ name: 'Education' }">Education</router-link>
              <router-link :to="{ name: 'Portfolio' }">Finance</router-link>
            </div>
            <span class="span-1" v-if="span11"></span>
            <span class="span-2" v-if="span22"></span>
          </div>
          <router-link :to="{ name: 'Portfolio' }">
            {{ $t("link.portfolio", {}, { locale: lang }) }}
          </router-link>
          <router-link :to="{ name: 'AboutUs' }">
            {{ $t("link.aboutUs", {}, { locale: lang }) }}
          </router-link>
        </div>

        <teleport to="#modals" v-if="showModal" @close="showModal">
          <Modal />
        </teleport>

        <div class="dropdown">
          <button class="dropbtn">Language</button>
          <div class="dropdown-content">
            <ul>
              <li>
                <button class="lang" @click="changeLang('en')">
                  <img
                    class="lang-img"
                    src="@/assets/flag/eng-flag.svg"
                    alt=""
                  />
                  En
                </button>
              </li>
              <li>
                <button class="lang" @click="changeLang('uz')">
                  <img
                    class="lang-img"
                    src="@/assets/flag/uzb-flag.svg"
                    alt=""
                  />
                  Uz
                </button>
              </li>
              <li>
                <button class="lang" @click="changeLang('ru')">
                  <img
                    class="lang-img"
                    src="@/assets/flag/rus-flag.svg"
                    alt=""
                  />
                  Ru
                </button>
              </li>
            </ul>
          </div>
        </div>

        <button class="button btn1" @click="toggleModal()">
          {{ $t("message.btn") }}
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "locale-changer",
  props: {
    color: {
      String,
    },
  },
  components: { Modal },
  data() {
    return {
      lang: "en",
      showModal: false,
      showSelect: false,
      langShow: false,
      showSelectt: false,
      span1: true,
      span2: false,
      span11: true,
      span22: false,

      valueimg: require("@/assets/flag/eng-flag.svg"),
      value: "En",

      list: [
        { img: require("@/assets/flag/uzb-flag.svg"), item: "Uzb" },
        { img: require("@/assets/flag/rus-flag.svg"), item: "Rus" },
      ],
      visible: false,
    };
  },

  methods: {
    navbar() {
      this.showSelect = false;
      this.showSelectt = false;
    },
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
    langg() {
      this.langShow = !this.langShow;
    },
    outShow() {
      this.showSelect = !this.showSelect;
    },
    showOut() {
      this.showSelect = false;
      this.showSelectt = false;
      this.span1 = true;
      this.span2 = false;
      this.span11 = true;
      this.span22 = false;
      this.showModal = false;
      console.log("hello");
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggle() {
      this.showSelect = !this.showSelect;
      this.span1 = !this.span1;
      this.span2 = !this.span2;
      this.span11 = true;
      this.span22 = false;
      this.showSelectt = false;
    },
    togglee() {
      this.showSelectt = !this.showSelectt;
      this.span11 = !this.span11;
      this.span22 = !this.span22;
      this.span1 = true;
      this.span2 = false;
      this.showSelect = false;
    },

    click() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    },
  },
};
</script>

<style>
.input-dropdown {
  position: absolute;
  z-index: -1;
  background: transparent;
  top: 0;
  left: 0;
  height: 224px;
  width: 98%;
  border: none;
}

.input-dropdown1 {
  position: absolute;
  z-index: -1;
  background: transparent;
  top: 0;
  height: 120px;
  width: 100%;
  left: -1px;
  border: none;
}

select {
  border: none;
  background: transparent;
  color: white;
}
select option {
  color: black;
  background: transparent;
  border: 1px solid #5d5fef;
  border-radius: 5px;
}
.navbar {
  padding: 16px 10px;
  margin-bottom: 30px;
}
nav {
  display: flex;
  align-items: center;
  width: 100%;
}
.links {
  display: flex;
  width: 50%;
  margin-left: 5rem;
  align-items: center;
  justify-content: center;
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
.select span {
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  /* background: white; */
}
.select .span-1::before {
  content: "";
  position: absolute;
  border-left: 8px solid transparent;
  border-top: 8px solid white;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
  top: 50%;
  left: -2rem;
  transform: translateX(120%);
}
.select .span-2::after {
  content: "";
  position: absolute;
  border-left: 8px solid transparent;
  border-bottom: 8px solid white;
  border-right: 8px solid transparent;
  border-top: 8px solid transparent;
  top: 50%;
  left: -2rem;
  transform: translateX(120%) translateY(-70%);
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
  cursor: pointer;
}

.links .select .mini-select {
  display: flex;
  flex-direction: column;
  background: rgba(199 193 255 / 50%);
  backdrop-filter: blur(26px);
  border-radius: 8px;
  margin-top: 40px;
  margin-left: -40px;
  position: absolute;
  border: 1px solid #5d5fef;
  align-items: flex-start;
  padding: 10px;
  width: 222px;
}
.links .select .mini-selectt {
  z-index: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #5d5fef;
  background: rgba(199 193 255 / 50%);
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
  z-index: 100%;
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
  position: relative;
}
.btn1 {
  margin-left: 4rem;
}
/*

*/

.aselect {
  /* width: 270px; */
  margin: 20px auto;
}
.aselect .selector {
  border: 1px solid gainsboro;
  background: transparent;
  position: relative;
  border: none;
  z-index: 1;
  width: 115px;
}
.aselect .arrow {
  position: absolute;
  right: 10px;
  top: 40%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #888;
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
}
.aselect .expanded {
  transform: rotateZ(180deg) translateY(2px);
}
.aselect .label {
  display: block;
  padding: 12px;
  font-size: 16px;
  color: #888;
}
.aselect .label span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.aselect .label span img {
  margin-right: 10px;
}
.aselect ul {
  width: 80%;
  margin: 1rem 1.5rem;
  list-style-type: none;
  padding: 0;
  /* margin: 0; */
  font-size: 16px;
  border: 1px solid gainsboro;
  position: absolute;
  z-index: 1;
  background: transparent;
  border: 1px solid #5d5fef;
  border-radius: 5px;
}

.aselect li {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}
.aselect li img {
  margin-right: 10px;
}
.aselect li:hover {
  color: white;
  background: blue;
}
.aselect .current {
  background: transparent;
}
.aselect .hidden {
  visibility: hidden;
}

.aselect .visible {
  visibility: visible;
}

.dropbtn {
  background-color: transparent;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border: none;
}

.dropdown {
  width: 5%;
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.dropdown button {
  background: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #91929a;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: -10px;
  border-radius: 5px;
}
.dropdown-content ul {
  margin: 0;
  list-style:none;
}
.dropdown-content ul li .lang {
  width: 100%;
  margin: 0;
  border: none;
  cursor: pointer;
  /* border-bottom: 1px solid black; */
  opacity: border 0.5;

  background: #91929a;
}
.dropdown-content ul li .lang-img {
  margin-right: 10px;
}

.dropdown-content ul li {
  padding-top: 10px;
}
.dropdown-content .dropdown-content li {
  color: black;
  text-decoration: none;
  display: block;
  height: 1rem;
}

.dropdown-content button:hover {
  background-color: white;
  margin-top: 5px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: transparent;
}
</style>