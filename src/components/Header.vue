<template>
  <div id="header">
    <div id="nav">
      <img
        src="https://suthub.com/wp-content/uploads/2021/09/LogoSite1-300x45.png"
        alt="suth-logo"
      />
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/data">Dados</router-link></li>
        <li><router-link to="/search">Pesquisar</router-link></li>
        <li><router-link to="/country">Brasil</router-link></li>
        <li><router-link to="/register">Cadastro</router-link></li>
        <li><router-link to="/dashboard">Info</router-link></li>
      </ul>
    </div>

    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#nav {
  background-color: #f3f3ffb2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.096);
  height: 95px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

ul {
  display: flex;
}

img {
  margin-bottom: 15px;
}

li {
  list-style: none;
  margin: 0px 20px;
}

#nav a.router-link-exact-active {
  color: #007a74;
}

.router-anim-enter-active{
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}

.router-anim-leave-active{
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0px);
  }

  to{
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(0px);
    opacity: 0;
  }

  to{
    transform: translateX(-50px);
    opacity: 1;
  }
}


@media (max-width: 790px) {
  #nav {
    border: none;
  }
}

@media (max-width: 540px) {
  li {
    margin: 0 10px;
  }
  #nav{
    margin-bottom: 6.5em;
  }
}

@media (max-width: 440px) {
  li {
    margin: 0 5px;
  }
}

@media (max-width: 390px) {
  ul {
    flex-direction: column;
    margin-top: 50px;
  }

  li {
    margin-bottom: 2px;
  }

  #nav {
    flex-direction: row;
    margin-bottom: 9em;
  }

  img {
    width: 150px;
    margin-right: 40px;
  }
}
</style>
