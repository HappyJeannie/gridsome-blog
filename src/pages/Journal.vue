<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">{{ banner.title }}</h1>
      </div>
    </div>
    <g-link :to="`/journal/${node.id}`" class="journal-post" v-for="{ node } in experiences" :key="node.id">
      <div class="container journal">
        <h2 class="journal-title">{{ node.title }}</h2>
        <p class="journal-excerpt">{{ node.subtitle }}</p>
      </div>
    </g-link>
  </Layout>
</template>
<page-query>
query {
  banner: allStrapiGlobalJournalBanner {
    edges {
      node {
        title
      }
    }
  }
  experiences: allStrapiExperience {
    edges {
      node {
        id
        title
        subtitle
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Journal'
  },
  computed: {
    banner() {
      return this.$page.banner.edges[0].node
    },
    experiences() {
      return this.$page.experiences.edges
    }
  }
}
</script>
<style scoped>
p {
    line-height: 1.5;
    font-size: 1.15rem;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: #f3f3f3;
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.journal-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: all .5s ease;
  color: #2b2b2b;
}
.container.journal {
    max-width: 720px;
}
.journal-title {
    font-size: 2rem;
    color: #000;
}
.journal-excerpt[data-v-da896d1e] {
    color: #000;
}
</style>
