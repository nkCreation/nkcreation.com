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
          <Button href="/services/">More services</Button>
        </div>
      </div>

      <div class="section-quote">
        <Quote
          v-for="quote in quotes.items"
          :key="quote.id"
          class="quote"
          :author="quote.author"
        >
          {{ quote.quote }}
        </Quote>
      </div>

      <div class="section">
        <h2 class="has-subtitle">{{ projects.title }}</h2>
        <p class="subtitle">{{ projects.subtitle }}</p>
        <div
          v-for="project in projects.items"
          :key="project.id"
          class="bloc project"
        >
          <NuxtLink :to="'/projects/' + project.slug"></NuxtLink>

          <h3>{{ project.title }}</h3>
          <img :src="project.thumbnail" alt="" />
          <p>{{ project.description }}</p>
        </div>

        <div class="button">
          <Button href="/projects/">See my projects</Button>
        </div>
      </div>
    </Page>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'

export default {
  layout: 'home',
  head() {
    return {
      title: `${this.heroData.SEO?.title || ''} - nkCreation`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.heroData.SEO?.description || '',
        },
      ],
    }
  },
  async asyncData({ $graphql, env }) {
    const query = gql`
      query homeData {
        hero {
          title
          button_label
          message
          link
          SEO {
            title
            description
          }
        }
        quotes(limit: 4, filter: { status: { _eq: "published" } }) {
          id
          author
          quote
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
          slug
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

    const { hero, servicePage, services, projectPage, realisations, quotes } =
      await $graphql.default.request(query)

    return {
      heroData: {
        ...hero,
        link: hero.link + '/',
        title: hero.title.replace(/\n/g, '<br />'),
        label: hero.button_label,
      },
      services: {
        ...servicePage,
        items: services,
      },
      quotes: {
        items: quotes,
      },
      projects: {
        ...projectPage,
        items: realisations.map((realisation) => {
          return {
            ...realisation,
            thumbnail: `${env.apiUrl}assets/${realisation.thumbnail.filename_disk}`,
          }
        }),
      },
    }
  },
}
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

  .project {
    position: relative;

    > a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    img {
      aspect-ratio: 21 / 9;
      object-fit: contain;
      padding: 1em;
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
