<template>
  <div class="card-3d">
    <div class="card-3d__card">
      <div
        :style="`background-image: url(${front});`"
        class="card-3d__card-side card-3d__card-side--front"
      />
      <div
        :style="`background-image: url(${back});`"
        class="card-3d__card-side card-3d__card-side--back"
      />
      <div class="card-3d__card-gloss" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    front: { type: String, default: 'https://preview.redd.it/fx4yiw37q2f61.jpg?width=1050&format=pjpg&auto=webp&s=ab0a39deccc9b7ee0b965eeb9a30dbd84f828b7a' },
    back: { type: String, default: 'https://cndwng.com/images/portfolio/lore/cardback.png' }
  }
}
</script>

<style lang="scss">
.card-3d {
  width: 500px;
  height: 310px;
  transform: rotate(-5deg) translateY(30px);
  perspective: 1000px;
  $transitionDuration: 0.75s;
  $gloss: 0.65;

  .card-3d__card {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    position: relative;
    transition: transform $transitionDuration;
    transform-style: preserve-3d;

    .card-3d__card-side {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      backface-visibility: hidden;
      border-radius: inherit;
      overflow: hidden;
      transition: all $transitionDuration;

      &--front {
        z-index: 1;
        box-shadow: 0px 0 0 rgba(white, ($gloss * 0.8)), inset 0 0 0 999px rgba(white, 0);
      }

      &--back {
        transform: rotateY(180deg);
        z-index: 0;
        box-shadow: 4px 0 0 white, inset 0 0 0 999px rgba(white, ($gloss * 0.5));
      }
    }

    .card-3d__card-gloss {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 1;
      z-index: 2;
      overflow: hidden;
      border-radius: inherit;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 100%;
        width: 200%;
        height: 100%;
        background: linear-gradient(to right, rgba(white, 0), white, rgba(white, 0));
        opacity: ($gloss * 0.5);
        transition: all $transitionDuration;
      }
    }
  }

  &:hover {
    .card-3d__card {
      transform: rotateY(180deg);

      .card-3d__card-side {
        &--front {
          box-shadow: -4px 0 0 white, inset 0 0 0 999px rgba(white, ($gloss * 0.5));
        }

        &--back {
          box-shadow: 0px 0 0 rgba(white, ($gloss * 0.8)), inset 0 0 0 999px rgba(white, 0);
        }
      }

      .card-3d__card-gloss {
        &::before {
          right: -200%;
        }
      }
    }
  }
}
</style>
