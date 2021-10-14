<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">{{ banner.title }}</h1>
        <h2 class="hero-subtitle">{{ banner.subtitle }}</h2>
      </div>
      <div class="projects">
        <div class="project" v-for="{ node } in projects" :key="node.id">
          <g-link :to="`/project/${node.id}`" class="project-link">
            <img :src="`http://localhost:1337${node.cover[0].url}`" class="thumbnail g-image g-image--lazy g-image--loaded"/>
            <h3 class="project-title">{{ node.title }}</h3>
            <div class="categories">
              <span v-for="category in node.categories" class="category" :key="category.id">{{ category.title }}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading container"><span data-v-460714ac="" class="label">Latest and greatest</span></div>
      <div class="latest-journals">
        <div class="container">
          <a href="/journal/gridsome-forestry-cms/" class="journal" v-for="{ node } in experiences" :key="node.id">
            <h3 class="journal-title">{{ node.title }}</h3>
          </a>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  projects: allStrapiProject {
    edges {
      node {
        id
        title
        cover {
          url
        }
        categories {
          id
          title
        }
      }
    }
  }
  experiences: allStrapiExperience {
    edges {
      node {
        id
        title
      }
    }
  }
  banner: allStrapiGlobalBanner {
    edges {
      node {
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
    title: 'Hello, world!'
  },
  computed: {
    banner() {
      return this.$page.banner.edges[0].node
    },
    projects() {
      return this.$page.projects.edges
    },
    experiences() {
      return this.$page.experiences.edges
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
.hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem;
}
.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    opacity: .6;
}
.hero-subtitle, .hero-subtitle p, .hero-title p {
    margin: 0;
    padding: 0;
}
.projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
}
.project {
  grid-column: auto/span 1;
  text-align: center;
}
.project:nth-child(3n+1) {
  grid-column: auto/span 2;
}
.project-link {
    text-decoration: none;
    display:block;
    color: #000;;
}
.thumbnail {
  height: 560px;
  -o-object-fit: cover;
  object-fit: cover;
  transition: all .15s ease;
  box-shadow: 0 0 40px -20px rgb(0 0 0 / 25%);
}
.project-title {
    font-size: 1rem;
    color: #000;
    margin: 2rem 0 1rem;
}
.categories {
    font-size: .8rem;
    color:#666;
}
.category {
    margin-right: .8rem;
}
.latest-journals-heading{
    margin-top: 6rem;
    margin-bottom: 1rem;
    font-size: .6rem;
    font-weight: 400;
    text-transform: uppercase;
}
.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
.latest-journals {
    max-width: 100%;
    margin: 0 2rem;
}
.latest-journals>.container {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #f3f3f3;
    border-left: 1px solid #f3f3f3;
}
.journal {
  border-right: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  display: block;
  padding: 2rem;
  transition: all .25s ease;
  text-decoration: none;
  color: #000;
  width: 50%;
  box-sizing: border-box;
}

.journal-title {
    font-size: 1rem;
    line-height: 1.35;
}
</style>
