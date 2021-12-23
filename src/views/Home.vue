<template>
  <main>
    <div id="title">
      <div id="lil-title">
        <h1>Seja bem vindo ao sistema de dados de países</h1>
        <p>
          Encontre informações úteis de <strong>qualquer</strong> país do mundo
          de forma <i>simples</i> e <i>prática</i>.
        </p>
      </div>
      <img src="../img/world-info.png" alt="world-info" id="world-info" />
    </div>
    <router-link to="/data"><button>INICIAR ➡</button></router-link>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
main {
  justify-content: center;
  align-items: center;
}

#title {
  display: flex;
}

#lil-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 20px;
}

h1 {
  font-size: 3rem;
}

#world-info {
  width: 550px;
}

button {
  padding: 15px;
  font-size: 1.7rem;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  border: none;
  width: 200px;
  cursor: pointer;
}

@media (max-width: 790px) {
  #world-info {
    width: 350px;
  }
}

@media (max-width: 590px) {
  #title {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1,
  p {
    text-align: center;
  }
}

@media (max-width: 370px) {
  h1 {
    font-size: 30px;
    margin-bottom: 2em;
  }
}
</style>
