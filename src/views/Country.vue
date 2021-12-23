<template>
<main>
  <section>
<transition name="bounce">
    <div id="master">
        <div id="sub-master" v-for="(country, key) in countriesData" :key="key">
         <div id="title">
            <p>{{ country.name.common }}</p>
            <p>{{ country.name.official }}</p>
            <p>Bandeira: <span>{{ country.flag }}</span></p>
            <p>Região: <span>{{ country.region }}</span></p>
            <p>Sub-região: <span>{{ country.subregion }}</span></p>
            <p
              >Idiomas:
              <ul>
                <li
                  v-for="language in Object.values(country.languages || {})"
                  :key="language"
                >
                  <router-link
                    :to="{ path: '/countrylang/', query: { language } }"
                  >
                    {{ language }}
                  </router-link>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
</transition>
  </section>
</main>
</template>

<script>
export default{
    name: "Country",
    data() {
    return {
      isLoadingCountries: false,
      countriesData: [],
    };
  },

  mounted() {
    this.fetchCountryBrazil();
  },

  methods: {
    async fetchCountryBrazil() {
      try {
        this.isLoadingCountries = true;

        const response = await fetch("https://restcountries.com/v3.1/name/brazil");
        const data = await response.json();
        console.log("/Dados da requisição:", { response, data });

        this.countriesData = data;
      } finally {
        this.isLoadingCountries = false;
      }
    }
  },
}
</script>

<style scoped>

main{
    justify-content: center;
    align-items: center;
}
ul{
    margin-bottom: 4em;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-left: 10px;
}

li{
  margin-right: 15px;
}

section{
  margin-top: 3em;
}

#master{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

#sub-master{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://www.significados.com.br/foto/bandeira-do-brasil.png");
    background-size: cover;
    background-position: center;
    border: 1px solid #007a74;
    border-radius: 15px;
    width: 1000px;
    height: 500px;
    margin-bottom: 5em;
    transition: .2s;
    margin: 10px 10px;
}

p{
    text-align: center;
    font-size: 35px;
    margin-bottom: 25px;
    font-weight: bold;
    color: black;
}

ul{
  display: flex;
  justify-content: center;
  align-items: center;
}

span{
    color: #007a74;
}

a{
    color: #007a74;
    font-size: 30px;
    letter-spacing: 2px;
}

a:hover{
    color:white;
}

#loading{
    color: #00756E;
    letter-spacing: 6px;
}

h1{
    font-size: 2.5rem;
    margin-bottom: 1em;
}

#title{
  margin-top: 10px;
}

#master{
  margin-top: 1em;
}


.bounce-enter-active{
  animation: bounce-in .5s;
}

.bounce-leave-active{
  animation: bouce-in reverse .5s;
}

img{
    cursor: pointer;
}

@keyframes bounce-in {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}

@media (max-width: 560px){
  button{
    font-size: 1.5em;
    width: 300px;
  }
}
    
@media (max-width: 500px){
  #sub-master{
    width: 450px;
    height: 300px;
  }
}

@media (max-width: 455px){
    #sub-master{
    width: 350px;
    height: 300px;
  }
}
@media (max-width: 355px){
    #sub-master{
    width: 250px;
    height: 350px;
  }

    button{
      margin-top: 1em;
    }
}
</style>
