<template>
  <div class="container">
    <div class="breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Industry education</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="education-title">
      <h1><span :class="(isActive = 'active')">Education</span> industries</h1>
      <p>
        With technology becoming more affordable and accessible, e-learning has
        started to emerge as a viable and valuable educational tool.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.education-title {
  text-align: start;
  margin: 2rem 0;
  padding-bottom: 3rem;
}
.education-title h1 {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  color: #19172c;
}
.education-title p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.8;
}
</style>