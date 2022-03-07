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
      'services',
      gql`
        query servicePageData {
          services {
            id
            title
            description
          }
        }
      `
    ),
  ],
}
</script>
