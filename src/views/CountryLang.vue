<template>
  <div id="country">
    <header>
      <h1>Lista de países por idioma: {{ $route.query.language }}</h1>

      <p>
        <router-link to="/data"><span id="warning">Voltar para a lista geral</span></router-link>
      </p>
    </header>

    <section v-if="isLoadingCountries">
      <p id="loading">Carregando países...</p>
    </section>

    <section v-if="!isLoadingCountries">
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
                  
                    {{ language }}
                  
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CountryLang",
  data() {
    return {
      isLoadingCountries: false,
      countriesData: [],
    };
  },

  mounted() {
    const language = this.$route.query.language;
    this.fetchCountriesByLanguage({ language });
  },

  methods: {
    async fetchCountriesByLanguage({ language }) {
      try {
        this.isLoadingCountries = true;

        const response = await fetch(
          `https://restcountries.com/v3.1/lang/${language}`
        );
        const data = await response.json();
        console.log("/Dados da requisição:", { response, data });

        this.countriesData = data;
      } finally {
        this.isLoadingCountries = false;
      }
    },
  },
};
</script>
 
<style scoped>
#country{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

main{
    position: absolute;
    bottom: 0;
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

#master{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

#sub-master{
    background: #fff;
    border: 1px solid #007a74;
    border-radius: 15px;
    width: 500px;
    height: 300px;
    margin-bottom: 5em;
    transition: .2s;
    margin: 10px 10px;
}

p{
    text-align: center;
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.685);
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
    color: rgb(58, 56, 56);
    font-size: 20px;
    letter-spacing: 2px;
}

a:hover{
    color:#007a74;
}

#loading{
    color: #00756E;
    letter-spacing: 6px;
}

#go-back{
    color: red;
}

#title{
  margin-top: 10px;
}

#warning{
  font-size: 25px;
  color: rgb(160, 152, 152);
  transition: .2s;
}

#warning:hover{
  color: #004944;
}
</style>