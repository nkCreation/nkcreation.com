<template>
  <div>
    <PageTitle :title="page.title" :subtitle="page.subtitle"></PageTitle>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import { pageMixinWithData } from '~/mixins/page.mixin'

export default {
  mixins: [
    pageMixinWithData(
      'projects',
      gql`
        query {
          realisations {
            id
            title
            slug
            description
            thumbnail {
              id
              filename_disk
            }
          }
        }
      `
    ),
  ],
}
</script>
