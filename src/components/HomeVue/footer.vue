<template>
  <div class="container">
    <div class="footer">
      <div class="footer-email">
        <img src="@/assets/logo-1.1.svg" alt="">

        <h3><span>ansor@info.com</span>+998 91 152 97 21</h3>
        <router-link class="link" :to="{ name: 'Industry' }">Chilanzar 13, Tashkent<span>Show on map</span></router-link>
      </div>
      <div class="footer-link">
        <h3>Services</h3>
        <ul>
          <a href=""><li>IT consulting</li></a>
          <a href=""><li>Mobile application devs</li></a>
          <a href=""><li>Dedicated team</li></a>
          <a href=""><li>UX/UI design</li></a>
          <a href=""><li>Infrastructure optimization</li></a>
          <a href=""><li>Implementation of ERP</li></a>
          
        </ul>
      </div>
      <div class="footer-link">
        <h3>Portfolio</h3>
        <ul>
          <a href=""><li>Design</li></a>
          <a href=""><li>Mobile applications</li></a>
          <a href=""><li>Web platforms</li></a>
          
        </ul>
      </div>

      <div class="footer-link">
        <h3>Industry</h3>
        <ul>
          <a href=""><li>Health</li></a>
          <a href=""><li>Education</li></a>
          <a href=""><li>Finance</li></a>
          
        </ul>
      </div>
      <div class="footer-link">
        <h3>About us</h3>
        <ul>
          <a href=""><li>Who we are</li></a>
        </ul>
      </div>
    </div>

    <div class="line"></div>

    <div class="copy-link">
        <p>2022 Copytight Ansor io. All rights reserved. </p>
        <img src="@/assets/mohirdev.svg" alt="">
        <div class="online-link">
          <img src="@/assets/online-link/instagram.svg" alt="">
          <img src="@/assets/online-link/telegram-link.svg" alt="">
          <img src="@/assets/online-link/facebook-link.svg" alt="">
          <img src="@/assets/online-link/youtube-link.svg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  margin-bottom: 5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
}
.footer-email{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-email img{
  margin-bottom: 2rem;
}
.footer-email h3{
font-family: 'SF UI Display';
font-style: normal;
font-weight: 600;
font-size: 20px;
margin-bottom: 1rem;
display: flex;
flex-direction: column;
align-items: flex-start;
}
.footer-email h3 span{
display: block;
align-items: flex-start;
font-family: 'SF UI Display';
font-style: normal;
font-weight: 400;
margin-bottom: 10px;
font-size: 17px;
}
.footer-email .link{
  font-family: 'SF UI Display';
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 17px;
  margin-top: 10px;
}
.footer-email .link span{
  display: block;
  font-family: 'SF UI Display';
font-style: normal;
font-weight: 600;
font-size: 20px;
  color: #5D5FEF;
  text-decoration-line: underline;
}

.footer-link h3{
  font-family: 'SF UI Display';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
color: #19172C;
align-items: flex-start;
display: flex;
}
.footer-link ul{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.footer-link li:hover{
  color: blue;
}

.footer-link ul a li{
  list-style: none;
  font-family: 'SF UI Display';
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 17px;
color: #19172C;
opacity: 0.8;
margin-top: 1rem;
}
span{
  text-decoration: none;
  border: none;
}

a:-webkit-any-link {
  text-decoration: none;
}

.line{
  width: 100%;
  height: 0.1rem;
  background: #19172C;
  opacity: 0.2;
  margin-bottom: 2rem;
}

.copy-link{
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
}
</style>