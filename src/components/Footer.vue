<template>
  <footer>
    <p>@tarcisio-dev</p>
    <p>© 2021 Tarcisio-Almeida</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  margin: 0px 180px;
}

p {
  margin-top: 40px;
}

@media (max-width: 1000px) {
  footer {
    display: none;
  }
}
</style>
