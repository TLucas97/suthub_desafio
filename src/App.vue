<template>
<div id="app">
  <Header />
  <Footer />
</div>
</template>

<script>
import "./global-css/global-style.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
