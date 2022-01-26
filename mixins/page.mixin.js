import { gql } from 'graphql-tag'
import { createHTML } from '~/plugins/editorjs'

const defaultPageData = {
  head() {
    return {
      title: `${this.page.SEO?.title || ''} - nkCreation`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.SEO?.description || '',
        },
      ],
    }
  },
}

export const pageMixin = { ...defaultPageData }

export const pageMixinWithData = (pageSlug = '') => {
  return {
    ...defaultPageData,
    async asyncData({ $graphql, params, error }) {
      const query = gql`
        query pagesData($filter: Pages_filter) {
          Pages(filter: $filter) {
            title
            slug
            content
            date_updated
            SEO {
              title
              description
            }
          }
        }
      `

      const { Pages: pages } = await $graphql.default.request(query, {
        filter: {
          status: {
            _eq: 'published',
          },
          slug: {
            _eq: pageSlug || params.slug,
          },
        },
      })

      if (!pages?.length) {
        return error({ statusCode: 404, message: 'not found' })
      }

      const page = pages[0]

      return {
        page: {
          ...page,
          content: page.content ? createHTML(page.content) : '',
        },
      }
    },
  }
}
