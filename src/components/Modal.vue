<template>
  <div class="backdrop" v-if="show">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <div class="close" @click="closeModal"></div>
      <!-- <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div> -->
      <div class="modal-about">
        <div class="modal-img">
          <img src="@/assets/cards/log0-2.svg" alt="" />
        </div>
        <div class="modal-text">
          <h1>
            Get in touch
            <span :class="(isActive = 'active')">with us</span>
          </h1>

          <form>
            <label>Your name</label>
            <input type="text" required placeholder="Name here" />

            <label>Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+998 (--)--- -- --"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
            <router-link :to="{ name: 'Industry' }">
              <button>Call me</button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],

  data() {
    return {
      show: true,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
    },
  },
};
</script>

<style>
.modal {
  width: 600px;
  padding: 60px;
  height: 300px;
  display: flex;
  margin: 200px auto;
  background: white;
  border-radius: 10px;
  position: relative;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}

.close::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  background: #19172c;
  top: 12px;
  transform: rotate(-40deg);
  right: 3%;
  cursor: pointer;
  opacity: 0.5;
}
.close::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  background: #19172c;
  top: 20px;
  transform: rotate(-45deg);
  right: 13px;
}
.modal-about {
  display: flex;
}
.modal-about .modal-img {
  display: flex;
  justify-content: center;
  margin-right: 3rem;
}
.modal-about .modal-img img {
  width: 200px;
}

.modal-about .modal-text {
  display: flex;
  flex-direction: column;
}

.modal-about .modal-text form {
  display: flex;
  flex-direction: column;
}
.modal-about .modal-text form label {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #19172c;
  opacity: 0.4;
  margin-bottom: 5px;
  margin-top: 10px;
}
.modal-about .modal-text form input {
  background: rgba(25, 23, 44, 0.03);
  border: 1px solid rgba(25, 23, 44, 0.15);
  border-radius: 10px;
  width: fit-content;
  padding: 1rem;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 500;
  width: 80%;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #19172c;
  opacity: 0.6;
}
.modal-about .modal-text form button {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 500;
  color: white;
  font-size: 16px;
  width: 50%;
  padding: 18px 40px;
  border: 1px solid #40aaf8;

  margin-top: 1rem;
  background: linear-gradient(261.49deg, #40aaf8 9.83%, #1d33f8 107.62%);
  border-radius: 10px;
}
</style>