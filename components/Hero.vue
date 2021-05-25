<template>
  <div class="hero">
    <span class="bg-grid"></span>

    <div class="u-wrapper">
      <header>
        <Logo />
      </header>

      <main>
        <h1>
          Hi. I’m Nicolas Leport.<br />
          I design & build user interfaces.
        </h1>

        <p>
          Based in Rennes (35), France, I currently work for
          <strong>Zenika</strong> as a consultant.<br />
          I’m also freelancer and CEO at
          <a rel="noopener" href="https://skypaper.io/" target="_blank"
            ><strong>Skypaper</strong></a
          >.
        </p>

        <Button
          href="https://nicolasleport.fr/contact/"
          target="_blank"
          rel="noopener"
          class="button"
          color="white"
          >Let's work together</Button
        >
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: url('~assets/img/background.svg');
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;
  position: relative;
}
header {
  margin-top: 8.8rem;
}
.u-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: relative;
  z-index: 2;
}
main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

h1 {
  color: white;
  line-height: 1.1;
  font-weight: 300;
  font-size: clamp(4rem, 2.6154rem + 3.8462vw, 8rem);
  letter-spacing: calc(-20em / 1000);
  margin-top: 0;
}

a {
  font: inherit;
  color: inherit;
}

p {
  font-size: clamp(1.6rem, 1.3231rem + 0.7692vw, 2.4rem);
  font-weight: normal;
  color: rgba(white, 0.88);
  margin: 2em 0;
}

.button {
  font-size: clamp(1.6rem, 1.4615rem + 0.3846vw, 2rem);
}
</style>
