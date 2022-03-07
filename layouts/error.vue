<template>
  <div>
    <svg-symbols></svg-symbols>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    return {
      title: `${this.title || 'Erreur'} - nkCreation`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.description || 'Une erreur est survenue'}`,
        },
      ],
    }
  },
  computed: {
    title() {
      return this.error.statusCode === 404 ? 'Page introuvable' : null
    },
    description() {
      return this.error.statusCode === 404
        ? `Aucune page n'a été trouvé pour l'URL demandée.`
        : null
    },
  },
}
</script>
