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
          Based in Rennes (35), France, I actually work for
          <strong>Zenika</strong> as a consultant.<br />
          I’m also freelancer and CEO at <strong>Skypaper</strong>.
        </p>

        <Button color="white">Let's work together</Button>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
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
  color: rgba(white, 0.88);
  line-height: 1.1;
  font-weight: 300;
  font-size: 8rem;
  letter-spacing: calc(-20em / 1000);
  margin-top: 0;
}

p {
  font-size: 2.4rem;
  font-weight: normal;
  color: white;
  margin: 2em 0;
}

button {
  appearance: none;
  border: 0;
  padding: 0 2em;
  width: auto;
  height: 48px;
  line-height: 48px;
  border-radius: 24px;
  color: #005e7e;
  font-weight: 700;
  letter-spacing: calc(-16em / 1000);
  font-size: 2rem;
  background: linear-gradient(to bottom right, #fff 0%, #e4fafc 100%);
  box-shadow: 0 4px 32px rgba(255, 255, 255, 0.16);
}
</style>
