<template>
<main>
  <section>
    <div id="master">
        <h1>Brasil: Dados completos</h1>
        <div id="sub-master" v-for="(country, key) in countriesData" :key="key">
         <div id="title">
            <p>{{ country.name.common }}</p>
            <p>{{ country.name.official }}</p>
            <p>Bandeira: <span>{{ country.flag }}</span></p>
            <p>Região: <span>{{ country.region }}</span></p>
            <p>Sub-região: <span>{{ country.subregion }}</span></p>
            <p>Capital: <span> {{ country.capital[0] }}</span></p>
            <p>TLD: <span> {{ country.tld[0] }}</span></p>
            <p>Moeda:
              <ul v-for="currency in country.currencies" :key="currency">
                <li>
                  {{currency.name}}
                </li>
                <li>
                  {{ currency.symbol }}
                </li>
              </ul>
            </p>
            <p>CCA2: {{ country.cca2 }}</p>
            <p>CCN3: {{ country.ccn3 }}</p>
            <p>CIOC: {{ country.cioc }}</p>
            <p>CCA3: {{ country.cca3 }}</p>
            <p>Independente: {{ country.independent }}</p>
            <p>Status: {{ country.status }}</p>
            <p>unMember: {{ country.unMember }}</p>
            <p>IDD: {{ country.idd.root }}</p>
            <p>Suffixes: {{ country.idd.suffixes[0] }}</p>
            <ul v-for="spellings in country.altSpellings" :key="spellings[0]">
              <li>
               <p> Alternative Spellings: {{ spellings }} </p>
              </li>
            </ul>
            <p>latlng: {{ country.latlng[0] }}</p>
            <p>latlng: {{ country.latlng[1] }}</p>
            <p>Landlocked: {{ country.landlocked }}</p>
            <p>Area: {{ country.area }}</p>
            <p>Denomyns[1]: {{ country.demonyms.eng.f }}</p>
            <p>Denomyns[2]: {{ country.demonyms.eng.m }}</p>
            <p>Denomyns[3]: {{ country.demonyms.fra.f }}</p>
            <p>Denomyns[4]: {{ country.demonyms.fra.m }}</p>
            <p>Traduções: {{ country.translations.ces.official }}</p>
            <p>Traduções: {{ country.translations.ces.common }}</p>
            <p>Traduções: {{ country.translations.deu.official }}</p>
            <p>Traduções: {{ country.translations.deu.common }}</p>
            <p>Traduções: {{ country.translations.est.official }}</p>
            <p>Traduções: {{ country.translations.est.common }}</p>
            <p>Traduções: {{ country.translations.fin.official }}</p>
            <p>Traduções: {{ country.translations.fin.common }}</p>
            <p>Traduções: {{ country.translations.fra.official }}</p>
            <p>Traduções: {{ country.translations.fra.common }}</p>
            <p>Traduções: {{ country.translations.hrv.official }}</p>
            <p>Traduções: {{ country.translations.hrv.common }}</p>
            <p>Traduções: {{ country.translations.hun.official }}</p>
            <p>Traduções: {{ country.translations.hun.common }}</p>
            <p>Traduções: {{ country.translations.ita.official }}</p>
            <p>Traduções: {{ country.translations.ita.common }}</p>
            <p>Traduções: {{ country.translations.jpn.official }}</p>
            <p>Traduções: {{ country.translations.jpn.common }}</p>
            <p>Traduções: {{ country.translations.kor.official }}</p>
            <p>Traduções: {{ country.translations.kor.common }}</p>
            <p>Traduções: {{ country.translations.nld.official }}</p>
            <p>Traduções: {{ country.translations.nld.common }}</p>
            <p>Traduções: {{ country.translations.per.official }}</p>
            <p>Traduções: {{ country.translations.per.common }}</p>
            <p>Traduções: {{ country.translations.pol.official }}</p>
            <p>Traduções: {{ country.translations.pol.common }}</p>
            <p>Traduções: {{ country.translations.por.official }}</p>
            <p>Traduções: {{ country.translations.por.common }}</p>
            <p>Traduções: {{ country.translations.rus.official }}</p>
            <p>Traduções: {{ country.translations.rus.common }}</p>
            <p>Traduções: {{ country.translations.slk.official }}</p>
            <p>Traduções: {{ country.translations.slk.common }}</p>
            <p>Traduções: {{ country.translations.spa.official }}</p>
            <p>Traduções: {{ country.translations.spa.common }}</p>
            <p>Traduções: {{ country.translations.swe.official }}</p>
            <p>Traduções: {{ country.translations.swe.common }}</p>
            <p>Traduções: {{ country.translations.urd.official }}</p>
            <p>Traduções: {{ country.translations.urd.common }}</p>
            <p>Traduções: {{ country.translations.zho.official }}</p>
            <p>Traduções: {{ country.translations.zho.common }}</p>
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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}

ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin-left: 10px;
}

#master{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
}

p{
    text-align: center;
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: bold;
    color: black;
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
    color:rgb(0, 0, 0);
}

#loading{
    color: #00756E;
    letter-spacing: 6px;
}

h1{
    font-size: 2.5rem;
    margin-bottom: 1em;
}
    
@media (max-width: 500px){
  h1{
    text-align: center;
    font-size: 25px;
  }

  p{
    font-size: 15px;
  }
}
</style>
