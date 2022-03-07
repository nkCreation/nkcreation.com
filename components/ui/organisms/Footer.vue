<template>
  <footer class="footer">
    <span class="bg-grid"></span>

    <div class="u-wrapper footer__inner">
      <NuxtLink to="/" class="logo">
        <Logo :dark="true" />
      </NuxtLink>
    </div>

    <div class="footer__copyright">
      <div class="u-wrapper">
        <p>
          &copy; nkCreation {{ year }} -
          <NuxtLink to="/legal-notices/">Legal notices</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    year: null,
  }),
  fetch() {
    this.year = new Date().getFullYear()
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/conf';

.footer {
  background: radial-gradient(
    circle farthest-side at 33% 50%,
    #144e64,
    #051419
  );

  &__inner {
    padding: 4rem 0;
  }

  &__copyright {
    background: rgba(black, 0.24);

    p {
      text-align: center;
      margin: 0;
      font-size: autoclamp(1.2rem, 1.4rem);
      line-height: 1.4rem;
      padding: 0.9rem 0;

      &,
      a {
        color: rgba(white, 0.64);
      }

      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
