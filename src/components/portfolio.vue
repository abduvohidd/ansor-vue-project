<template>
  <div class="container">
    <div class="portfolio-text">
      <h1>
        Our
        <span :class="{ active: (isActive = 'active') }">light portfolio</span>
      </h1>
      <p>Enjoy save and order new project to us</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.portfolio-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.portfolio-text h1 {
  padding-top: 2rem;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 2px;
  color: #19172c;
}
.portfolio-text p {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #19172c;
  opacity: 0.5;
  margin-top: 1rem;
}
</style>
