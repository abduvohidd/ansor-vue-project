<template>
  <div class="container">
    <div class="education-text">
      <p>
        For education apps to be particularly effective, they need to be
        user-friendly, multi-platform utility tools that minimize barriers and
        maximize learning outcomes. Ansor.io devs are perfectly equipped to
        achieve this goal.

        <span>
          The key to a web-based educational application is its compatibility
          with different platforms and devices. If the program presents
          accessibility barriers like requiring an updated browser or OS, then
          the efficacy of the learning initiatives will be dramatically
          hindered. The Ansor.io web team specializes in frictionless web
          experiences.
        </span>
      </p>

      <div class="education-img">
        <img src="@/assets/mohirdev.svg" alt="" />
        <img class="img" src="@/assets/Rll.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.education-text {
  display: flex;
  padding: 2.5rem 0;
}
.education-text p {
  margin-right: 3rem;
  width: 57%;
  text-align: start;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #19172c;
  opacity: 0.8;
}
.education-text p span {
  width: 107%;
  display: block;
  margin-top: 3rem;
  text-align: start;
}

.education-img {
  height: 18rem;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  margin-top: 2rem;
}

.education-img .img {
  margin-top: 3rem;
  margin-left: 5rem;
}
</style>