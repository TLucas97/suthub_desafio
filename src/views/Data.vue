<template>
<main>
  <div id="data">
    <header>
      <h1 style="text-align: center;">Selecione a região abaixo</h1>
      <div id="toggle">
        <button @click="countryToggle">América</button>
        <button @click="countryToggle3">Ásia</button>
        <button @click="countryToggle4">Africa</button>
        <button @click="countryToggle2">Europa</button>
        <button @click="countryToggle5">Oceania</button>
      </div>
    </header>

    <section v-if="isLoadingCountries">
      <p id="loading">Carregando países...</p>
    </section>

    <section v-if="!isLoadingCountries">
      <div id="master" v-show="showCountry">
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

      <div id="master" v-show="showCountry2">
        <div id="sub-master" v-for="(country, key) in countriesData1" :key="key">
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

      <div id="master" v-show="showCountry3">
        <div id="sub-master" v-for="(country, key) in countriesData2" :key="key">
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

      <div id="master" v-show="showCountry4">
        <div id="sub-master" v-for="(country, key) in countriesData3" :key="key">
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

      <div id="master" v-show="showCountry5">
        <div id="sub-master" v-for="(country, key) in countriesData4" :key="key">
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


    </section>
  </div>
  </main>

  
</template>

<script>
export default {
  name: "Data",    
  data() {
    return {
      isLoadingCountries: false,
      countriesData: [],
      countriesData1: [],
      countriesData2: [],
      countriesData3: [],
      countriesData4: [],
      showCountry: false,
      showCountry2: false,
      showCountry3: false,
      showCountry4: false,
      showCountry5: false,
    };
  },

  mounted() {
    this.fetchCountriesByRegion1();
    this.fetchCountriesByRegion2();
    this.fetchCountriesByRegion3();
    this.fetchCountriesByRegion4();
    this.fetchCountriesByRegion5();
  },

  methods: {
    async fetchCountriesByRegion1() {
      try {
        this.isLoadingCountries = true;

        const response = await fetch("https://restcountries.com/v3.1/region/ame");
        const data = await response.json();
        console.log("/Dados da requisição:", { response, data });

        this.countriesData = data;
      } finally {
        this.isLoadingCountries = false;
      }
    },

    async fetchCountriesByRegion2() {
      try {
        this.isLoadingCountries = true;

        const response = await fetch("https://restcountries.com/v3.1/region/europe");
        const data = await response.json();
        console.log("/Dados da requisição:", { response, data });

        this.countriesData1 = data;
      } finally {
        this.isLoadingCountries = false;
      }
    },

    async fetchCountriesByRegion3() {
      try {
        this.isLoadingCountries = true;

        const response = await fetch("https://restcountries.com/v3.1/region/asia");
        const data = await response.json();
        console.log("/Dados da requisição:", { response, data });

        this.countriesData2 = data;
      } finally {
        this.isLoadingCountries = false;
      }
    },

    async fetchCountriesByRegion4() {
      try {
        this.isLoadingCountries = true;

        const response = await fetch("https://restcountries.com/v3.1/region/africa");
        const data = await response.json();
        console.log("/Dados da requisição:", { response, data });

        this.countriesData3 = data;
      } finally {
        this.isLoadingCountries = false;
      }
    },

    async fetchCountriesByRegion5() {
      try {
        this.isLoadingCountries = true;

        const response = await fetch("https://restcountries.com/v3.1/region/oceania");
        const data = await response.json();
        console.log("/Dados da requisição:", { response, data });

        this.countriesData4 = data;
      } finally {
        this.isLoadingCountries = false;
      }
    },

    countryToggle(){
      this.showCountry = true
      this.showCountry2 = false
      this.showCountry3 = false
      this.showCountry4 = false
      this.showCountry5 = false
    },

    countryToggle2(){
      this.showCountry2 = true
      this.showCountry = false
      this.showCountry3 = false
      this.showCountry4 = false
      this.showCountry5 = false
    },
    
    countryToggle3(){
      this.showCountry3 = true
      this.showCountry = false
      this.showCountry2 = false
      this.showCountry4 = false
      this.showCountry5 = false
    },

    countryToggle4(){
      this.showCountry4 = true
      this.showCountry = false
      this.showCountry2 = false
      this.showCountry3 = false
      this.showCountry5 = false
    },

    countryToggle5(){
      this.showCountry5 = true
      this.showCountry = false
      this.showCountry2 = false
      this.showCountry3 = false
      this.showCountry4 = false
    },

  },
};
</script>
 
<style scoped>
#data{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

main{
  height: 100%;
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

#toggle{
  display: flex;
  align-items: center;
  justify-content: center;
}

#toggle button{
  margin: 0px 20px;
  padding: 20px;
  color: white;
  font-weight: bold;
  background: #007A74;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

#toggle button:hover{
  background: #004944;
  transform: scale(1.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

@media (max-width: 980px){
  #toggle button{
    font-size: 2em;
  }
}
@media (max-width: 850px){
  #toggle button{
    font-size: 1.5em;
  }
}
@media (max-width: 725px){
  #toggle button{
    font-size: 1em;
  }
}
@media (max-width: 605px){
  #toggle button{
    margin: 0px 5px;
  }
}
@media (max-width: 500px){
  #toggle{
    flex-direction: column;
  }

  #toggle button{
    margin-bottom: 10px;
    font-size: 2.5em;
  }

  #sub-master{
    width: 450px;
    height: 300px;
  }

  h1{
    margin-top: 3em;
    font-size: 2em;
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
}

</style>