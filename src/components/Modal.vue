<template>
  <div class="backdrop" >
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
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
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}
.modal-about {
  display: flex;
}
.modal-about .modal-img {
  display: flex;
  justify-content: center;
  margin-right: 3rem;
}
.modal-about .modal-img img{
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