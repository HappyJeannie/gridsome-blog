<template>
  <div class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link to="/" class="home-link active--exact active">
            <img src="/logo.svg" alt="Nichlas W. Andersen" class="logo" />
          </g-link>
        </div>
        <nav class="nav right">
          <g-link class="nav__link" to="/journal">Journal</g-link>
          <g-link class="nav__link" to="/contact">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="footer">
      <div class="container"><span>Copyright © 2021</span></div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: #fff;
  color: #000;
}
.layout.sticky-header {
  padding: 6rem 0 0;
}
.header {
  position: relative;
  height: 6rem;
  z-index: 10;
}
.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.logo {
  height: 1.5rem;
}
.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.home-link {
  text-decoration: none;
}
.nav > a {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
  color: #000;
}
.nav > a.active,
.nav > a:hover {
  border-bottom: 1px solid #000;
}
.footer {
    font-size: .8rem;
    padding: 6rem 0;
}
</style>
