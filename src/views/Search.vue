<template>
   <main>
     <div id="find">
      <input type="text" name="search" id="search" v-model="search" placeholder="Digite o nome de um país">
      <font-awesome-icon id="loupe" :icon="['fas', 'search']"/>
     </div>

    <section v-if="isLoadingCountries">
      <p id="loading">Carregando países...</p>
    </section>

    <section v-if="!isLoadingCountries">
      <div id="master">
        <div id="sub-master" v-for="country in filteredResult" :key="country">
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
   </main>
</template>

<script>
export default{
    name: "Search",
    data(){
        return{
            isLoadingCountries: false,
            countriesData: [],
            search: "",
        }
    },
    methods: {
        async fetchAllCountries() {
      try {
        this.isLoadingCountries = true;

        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        console.log("/Dados da requisição:", { response, data });

        this.countriesData = data;
      } finally {
        this.isLoadingCountries = false;
      }
    },

    },
    computed: {
    filteredResult() {
      return this.countriesData.filter(country => {
        return country.name.common.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    },
     mounted() {
    this.fetchAllCountries();
     }
}
</script>

<style scoped>

main{
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}

#pesquisa{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

label{
    font-size: 2rem;
    margin-bottom: .2em;
    font-weight: bold;
    letter-spacing: 2px;
}

input{
    padding: 10px;
    width: 350px;
}

button{
    padding: 10px;
    color: white;
    font-weight: bold;
    margin-left: .2em;
    cursor: pointer;
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

input{
  margin-top: 2em;
}

input::placeholder{
  font-size: 17px;
}

#find{
  display: flex;
  justify-content: center;
  align-items: center;
}

#loupe{
  height: 100%;
  width: 40px;
  margin-top: 1.5em;
  margin-left: 1em;
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

  input{
    margin-top: 2.5em;
  }
}
</style>
