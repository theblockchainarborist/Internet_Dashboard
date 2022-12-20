<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
    <div id="main-div" class="">
        <hello-world />
    </div>
</template>



<style>

.background-img {
  position: relative;
  background: url('../assets/adamKoolUnsplash.jpg');
  background-position: 50% 50%;
  background-size: 100% 100%;
}

.motion {
  animation: slide 50s linear infinite;
  transition: all .1s ease;
  animation-iteration-count: 1;
}



@keyframes slide {
   0% {
    background-size: 250% 250%;
    background-position: 0% 100%;
  }
  10% {
    background-size: 220% 220%;
    background-position: 10% 90%;
  }
  20% {
    background-size: 200% 200%;
    background-position: 20% 80%;
  }
  30% {
    background-size: 180% 180%;
    background-position: 30% 70%;
  }
  40% {
    background-size: 170% 170%;
    background-position: 40% 60%;
  }
  50% {
    background-size: 160% 160%;
    background-position: 50% 50%;
  }
  60% {
    background-size: 150% 150%;
    background-position: 60% 40%;
  }
  70% {
    background-size: 140% 140%;
    background-position: 70% 30%;
  }
  80% {
    background-size: 130% 130%;
    background-position: 80% 40%;
  }
  90% {
    background-size: 120% 120%;
    background-position: 90% 60%;
  }
  95% {
    background-size: 110% 110%;
    background-position: 95% 85%;
  }
  100% {
    background-size: 100% 100%;
    background-position: 100% 100%;
  }
}

</style>