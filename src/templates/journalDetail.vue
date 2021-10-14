<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{ experience.title }}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">{{ experience.authors[0].name }}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div data-v-2a0eef53="">{{ experience.date }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ experience.time }} min read</span>
            </div>
          </div>
        </div>
        <div class="journal-content" v-html="renderToHtml(experience.content)"></div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id: ID) {
  experience: strapiExperience(id: $id) {
    title
    subtitle
    authors {
      name
    }
    content
    date
    time
  }
}
</page-query>
<script>
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
export default {
  metaInfo: {
    title: ""
  },
  computed: {
    experience() {
      return this.$page.experience
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
