<template>
  <div class="container">
    <div class="breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>About Us</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="about-us-text">
      <h1>About <span :class="(isActive = 'active')">our company</span></h1>
      <p>To deliver on the promise of technology and human ingenuity</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-us-text {
  text-align: start;
  margin: 2rem 0;
  padding-bottom:3rem ;
}
.about-us-text h1{
  font-family: 'SF UI Display';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 57px;
color: #19172C;
}
.about-us-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.8;
}
</style>