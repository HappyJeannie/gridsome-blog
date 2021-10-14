<template>
  <Layout>
    页面和journal重复，不再处理
  </Layout>
</template>
<page-query>
query($id: ID) {
  project: strapiProject(id: $id) {
    title
    content
  }
}
</page-query>
<script>
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
export default {
  metaInfo: {
    title: 'Project Detail'
  },
  computed: {
    project() {
      return this.$page.project
    }
  },
  methods: {
    renderToHtml(content) {
      return md.render(content)
    }
  }
}
</script>
<style scoped>
.journal-container {
    max-width: 840px;
}
.journal-header{
    padding: 2rem 0 4rem;
}
.journal-title{
    font-size: 4rem;
    margin: 0 0 4rem;
    padding: 0;
    letter-spacing: -.01em;
}
.journal-meta {
    display: flex;
    flex-wrap: wrap;
    font-size: .8rem;
}
.journal-meta>div {
    margin-right: 4rem;
}
.journal-meta>div:last-of-type {
    margin: 0;
}
.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
</style>
