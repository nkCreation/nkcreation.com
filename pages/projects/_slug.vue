<template>
  <div v-if="realisation">
    <h1 class="has-subtitle">{{ realisation.title }}</h1>
    <p class="subtitle">{{ realisation.description }}</p>
    <div class="content" v-html="realisation.content"></div>
  </div>
</template>

<script lang="ts">
import { gql } from 'graphql-tag'
import Vue from 'vue'
// @ts-ignore
import * as parser from 'editorjs-html'

export default Vue.extend({
  async asyncData({ $graphql, env, params, redirect }) {
    const query = gql`
      query detailData($filter: realisations_filter) {
        realisations(limit: 1, filter: $filter) {
          title
          description
          content
          picture {
            id
            filename_disk
          }
        }
      }
    `

    const { realisations } = await $graphql.default.request(query, {
      filter: {
        slug: {
          _eq: params.slug,
        },
      },
    })

    if (!realisations.length) {
      redirect('/')
    }

    const image = (blockData: any) =>
      `<figure class="${
        blockData.data.withBackground ? 'background' : 'transparent'
      }">
        <img
            loading="lazy"
            src="${env.apiUrl}assets/${blockData.data.file.fileId}.${
        blockData.data.file.extension
      }"
            title="${blockData.data.caption}"
            alt="${blockData.data.caption || blockData.data.file.title}"
        />${
          blockData.data.caption
            ? `<figcaption>${blockData.data.caption}</figcaption>`
            : null
        }
    </figure>`

    const edjsParser = parser({ image })
    const realisation = {
      ...realisations[0],
      content: edjsParser.parseStrict(realisations[0].content).join(''),
    }

    return {
      realisation,
    }
  },
})
</script>

<style scoped lang="scss">
.subtitle {
  width: calc(100% / var(--wrapper-cols) * 4);
}

.content {
  ::v-deep {
    figure {
      --figure-shadow-color: rgba(var(--nk-color1-rgb), 0.16);
      --figure-shadow-property: 0 4px 32px;

      margin: 2em 0;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;

      &:not(.transparent) {
        img {
          background-color: white;
          padding: 2em;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--figure-shadow-property) var(--figure-shadow-color);
        }
      }

      img {
        max-width: 100%;
      }

      figcaption {
        width: 100%;
        text-align: center;
        font-size: 0.75em;
        margin-top: 2em;
      }
    }
  }
}
</style>
