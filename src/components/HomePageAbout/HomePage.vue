<template>
  <div class="container">
    <div class="breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Mobile application devs</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="home-page-text">
      <h1>
        <span :class="(isActive = 'active')">Mobile application</span>
        developing
      </h1>
      <p>
        Mobile applications on iOS and Android system. We help businesses to
        build and manage mobile experience rapidly.
      </p>

      <button>Discuss project</button>
    </div>
  </div>
</template>

<script>
import { ArrowRight } from "@element-plus/icons-vue";
export default {
  components: {
    ArrowRight,
  },
};
</script>

<style>
.breadcrumb {
  margin-top: 1rem;
}
.breadcrumb span {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #19172c;
  opacity: 0.7;
}

.home-page-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
}
.home-page-text h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  color: #19172c;
}
.home-page-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.8;
}
button {
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
  border-radius: 10px;
}
</style>