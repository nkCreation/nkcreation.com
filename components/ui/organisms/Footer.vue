<template>
  <footer class="footer">
    <span class="bg-grid"></span>

    <div class="u-wrapper footer__inner">
      <div class="footer__logo">
        <NuxtLink to="/" class="logo">
          <Logo :dark="true" />
        </NuxtLink>

        <p>
          nkCreation - Nicolas Leport<br />
          Interface designer & builder in Rennes, France.<br />
        </p>
      </div>

      <div class="footer__menu">
        <h1>Navigation</h1>

        <ul class="footer__menu-list">
          <li class="footer__menu-item">
            <NuxtLink class="footer__menu-link" to="/">Accueil</NuxtLink>
          </li>
          <li class="footer__menu-item">
            <NuxtLink class="footer__menu-link" to="/services/"
              >Services</NuxtLink
            >
          </li>
          <li class="footer__menu-item">
            <NuxtLink class="footer__menu-link" to="/projects/"
              >Projects</NuxtLink
            >
          </li>
          <li class="footer__menu-item">
            <NuxtLink class="footer__menu-link" to="/contact/"
              >Contact</NuxtLink
            >
          </li>
          <li class="footer__menu-item">
            <a
              target="_blank"
              class="footer__menu-link footer__menu-link--external"
              href="https://www.nicolasleport.fr/"
              >Blog <Icon symbol="external" />
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__social-menu">
        <h1>Follow me</h1>

        <ul class="footer__social-menu-list">
          <li class="footer__social-menu-item">
            <a
              class="footer__social-menu-link"
              href="https://github.com/nkCreation/"
              target="_blank"
              rel="noopener noreferrer"
              ><Icon symbol="github" /><span>GitHub</span></a
            >
          </li>
          <li class="footer__social-menu-item">
            <a
              class="footer__social-menu-link"
              href="https://twitter.com/nkcreationweb"
              target="_blank"
              rel="noopener noreferrer"
              ><Icon symbol="twitter" /><span>Twitter</span></a
            >
          </li>
        </ul>
      </div>
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
  color: white;

  h1 {
    font-size: autoclamp(1.8rem, 2.2rem);
    color: inherit;
  }

  &__logo {
    align-self: center;

    p {
      margin-top: 1.5em;
      margin-bottom: 0;
      font-size: autoclamp(1.2rem, 1.4rem);
      opacity: 0.88;
    }

    ::v-deep img {
      display: block;
      height: auto;
      max-width: calc(var(--background-gutter-size));
    }
  }

  &__social-menu,
  &__menu {
    &-list {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    &-item {
      padding: 0;
    }
  }

  &__social-menu {
    &-list {
      font-size: autoclamp(2.2rem, 2.8rem);
      display: flex;
      align-items: center;
      margin: 0 -0.5em;
    }

    &-link {
      padding: 0.5em;
      color: inherit;
      text-decoration: none;

      svg {
        stroke-width: 0;
      }

      span {
        position: absolute;
        text-indent: -1000rem;
      }
    }
  }

  &__menu {
    --columns: 3;

    &-list {
      padding: 0;
      margin: 0;
      list-style-type: none;
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    &-item {
      padding: 0;
      display: block;
      width: calc(100% / var(--columns));
      flex: 0 1 calc(100% / var(--columns));
    }

    &-link {
      font: inherit;
      color: inherit;
      font-size: autoclamp(1.4rem, 1.6rem);
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 0.2em 0;

      .icon-external {
        width: 0.5em;
        height: 0.5em;
        stroke-width: 1;
        margin: 0.25em;
        transform: translateY(-33%);
      }
    }
  }

  &__inner {
    padding: 4rem 0;
    max-width: calc(var(--background-gutter-size) * 6);
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
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
