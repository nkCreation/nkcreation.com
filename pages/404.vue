<template>
  <div>
    <h1>Page introuvable</h1>
    <p>Aucune page n'a été trouvé pour l'URL demandée.</p>
  </div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: 'Page introuvable - nkCreation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Aucune page n'a été trouvé pour l'URL demandée.",
        },
      ],
    }
  },
}
</script>
