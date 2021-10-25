<template>
  <div>
    <Hero v-bind="heroData" />

    <Page>
      <div class="section">
        <h2 class="has-subtitle">{{ services.title }}</h2>
        <p class="subtitle">{{ services.subtitle }}</p>
        <div v-for="service in services.items" :key="service.id" class="bloc">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>

        <div class="button">
          <Button>More services</Button>
        </div>
      </div>

      <div class="section-quote">
        <Quote class="quote" author="Christopher Arzur, CTO at Skypaper">
          This is a fuckin’ great quote about me from an inspiring guy. Like I’m
          doing very great stuff.
        </Quote>
      </div>

      <div class="section">
        <h2 class="has-subtitle">{{ projects.title }}</h2>
        <p class="subtitle">{{ projects.subtitle }}</p>
        <div v-for="project in projects.items" :key="project.id" class="bloc">
          <h3>{{ project.title }}</h3>
          <img :src="project.thumbnail" alt="" />
          <p>{{ project.description }}</p>
        </div>

        <div class="button">
          <Button>See my projects</Button>
        </div>
      </div>
    </Page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { gql } from 'graphql-tag'

export default Vue.extend({
  layout: 'home',
  async asyncData({ $graphql, env }) {
    const query = gql`
      query homeData {
        hero {
          title
          button_label
          message
          link
        }
        servicePage: service_page {
          title
          subtitle
        }
        projectPage: project_page {
          title
          subtitle
        }
        realisations(limit: 2, filter: { featured: { _eq: true } }) {
          id
          title
          description
          thumbnail {
            id
            filename_disk
          }
        }
        services(limit: 2) {
          id
          title
          description
        }
      }
    `

    const { hero, servicePage, services, projectPage, realisations } =
      await $graphql.default.request(query)

    return {
      heroData: {
        ...hero,
        title: hero.title.replace(/\n/g, '<br />'),
        label: hero.button_label,
      },
      services: {
        ...servicePage,
        items: services,
      },
      projects: {
        ...projectPage,
        items: realisations.map((realisation: any) => {
          return {
            ...realisation,
            thumbnail: `${env.apiUrl}assets/${realisation.thumbnail.filename_disk}`,
          }
        }),
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~assets/scss/conf';

.section {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'title title title title title . . .'
    'subtitle subtitle subtitle subtitle subtitle . . .'
    'bloc1 bloc1 bloc1 . bloc2 bloc2 bloc2 .'
    'button button button . . . . .';
  margin-bottom: 4em;

  @include breakpoint($tablet) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'subtitle'
      'bloc1'
      'bloc2'
      'button';
  }

  h2 {
    grid-area: title;
  }

  h2 + p {
    grid-area: subtitle;
  }

  .bloc {
    &:nth-of-type(1) {
      grid-area: bloc1;
    }

    &:nth-of-type(2) {
      grid-area: bloc2;
    }
  }

  .button {
    grid-area: button;
    margin-top: 3em;
  }

  img {
    box-shadow: 0 0.8rem 2.4rem rgba(var(--nk-color1-rgb), 0.08);
    padding: 0.8em;
    width: 66.6666%;
    background: white;
  }
}

.section-quote {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . quote quote quote quote . .';
  margin-bottom: 4em;

  @include breakpoint($tablet) {
    grid-template-areas: '. quote quote quote quote quote quote .';
  }
}

.quote {
  grid-area: quote;
}
</style>
