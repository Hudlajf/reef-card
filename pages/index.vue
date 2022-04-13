<template>
  <div class="landing">
    <ReefLogo />
    <BubblesAnimation />

    <div class="landing__background">
      <img src="/reef_left.png">
      <img src="/reef_right.png">
      <img src="/shape.png">
    </div>

    <div class="container">
      <div>
        <Card3D />
      </div>
      <div class="text">
        <h1>Your Freedom, Your Crypto!</h1>
        <p>
          Reef Card offers you seamless transactions with digital assets and access to over 40 million global brands and services worldwide. Enjoy the freedom of using your crypto IRL.
        </p>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import ReefLogo from '@/components/ReefLogo'
import BubblesAnimation from '@/components/BubblesAnimation'
import Card3D from '@/components/Card3D'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'IndexPage',
  components: {
    BubblesAnimation,
    ReefLogo,
    Card3D,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap');
$font-family: "Poppins", sans-serif;
$font-family-title: "Space Grotesk", sans-serif;

* {
  box-sizing: border-box;
  font-family: $font-family;

  &::-webkit-scrollbar {
    background: transparent;
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 99px;
    background: linear-gradient(to bottom, #a93185, #5d3bad);
  }
}

body {
  margin: 0;
  background: black;
  min-height: 100vh;
  overflow-x: hidden;
}

.landing {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  padding-bottom: 25px;
  background: linear-gradient(
    to bottom,
    #2c024d,
    #530b96,
    #861d6d 50%,
    #2c024d
  );
  background-repeat: no-repeat;
  background-size: cover;
  animation: appear 3s;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .reef-logo__logo {
    height: 70px;
    fill: white;
  }

  .container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 50px 0 150px 0;

    .text {
      margin-left: 100px;
      max-width: 800px;

      h1 {
        font-family: $font-family-title;
        color: white;
        font-size: 61px;
        margin: 0;
      }

      p {
        color: white;
        font-family: $font-family;
        font-size: 23px;
        line-height: 1.6;
        margin: 0;
        margin-top: 25px;
      }
    }
  }

  > * {
    position: relative;
    z-index: 2;
  }

  .bubbles {
    position: absolute;
    z-index: 1;
  }

  .landing__background {
    pointer-events: none;
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;

    img {
      position: absolute;

      &:nth-child(1) {
        width: 37%;
        left: -2%;
        bottom: 0;
      }

      &:nth-child(2) {
        width: 37%;
        right: -5%;
        bottom: 0;
      }

      &:nth-child(3) {
        width: 100%;
        bottom: 0;
      }
    }
  }

  @media only screen and (max-width: 1250px) {

    .container {
      flex-flow: column nowrap;
      justify-content: flex-start;
      padding-top: 60px;
      padding-bottom: 80px;

      .text {
        margin-left: 0;
        margin-top: 120px;
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    padding: 30px 20px 0 20px;

    .reef-logo__logo {
      height: 50px;
    }

    .container {
      padding: 20px 0 50px 0;

      .card-3d {
        margin: 15px 0 0 0;
        width: 300px;
        height: 177px;
      }

      .text {
        margin-top: 80px;

        h1 {
          font-size: 33px;
        }

        p {
          margin-top: 20px;
          font-size: 20px;
          line-height: 1.6;
        }
      }
    }

    .footer {
      padding-top: 15px;
      padding-bottom: 15px;

      p {
        text-align: justify;
      }

      .footer__links {
        margin-top: 15px;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;

        a {
          margin: 0 !important;
        }
      }
    }
  }
}
</style>
