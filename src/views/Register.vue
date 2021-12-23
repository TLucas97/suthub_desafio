<template>
  <main>
    <div id="home">
      <form @submit="registerData">
      <h4>{{msg}}</h4>
        <div id="form">
          <input
            type="date"
            max="2003-12-31"
            min="1956-01-01"
            required
            v-model="birthday"
          />
          <br />

          <input
            type="text"
            placeholder="Nome completo"
            minlength="2"
            required
            v-model="name"
          />
          <br />

          <input 
          type="text" 
          v-model="cpf" 
          v-mask="`###.###.###-##`"
          placeholder="Digite seu CPF"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          required
          />
          <br />

          <div id="animals">
            <input
              type="radio"
              id="dog"
              name="animal"
              :value="animal_1"
              v-model="animal"
            />
            <label for="dog">Cachorro</label><br />

            <input
              type="radio"
              id="cat"
              name="animal"
              :value="animal_2"
              v-model="animal"
            />
            <label for="cat">Gato</label><br />
          </div>

          <div id="select">
            <label>Raça:</label>
            <select v-model="race" v-show="raceSelect">
              <option value="0" selected="true" disabled="disabled">
                Escolha a raça:
              </option>
              <option v-for="race in races" :key="race.id" :value="race.tipo">
                {{ race.tipo }}
              </option>
            </select>
            <br />
          </div>
          <div id="test">
            <input
              type="checkbox"
              id="other"
              name="outro"
              value="outro"
              @click="otherRace"
            />
            <label id="outro" for="outro">Outro</label><br />
          </div>
          <input
            type="text"
            placeholder="Digite a raça do seu pet"
            v-show="outro"
            v-model="race"
          />
          <br />
          <label>Renda mensal:</label> <br>
          <money v-model="income" v-bind="money" min="1000"></money>
          <br />

          <input
            v-model="cep"
            @keyup="getCEP"
            type="text"
            v-mask="`#####-###`"
            placeholder="Digite seu CEP"
            name="CEP"
            id="CEP"
          />
          <br />
          <input v-model="rua" type="text" placeholder="Rua" required /> <br />
          <input v-model="bairro" type="text" placeholder="Bairro" required />
          <br />
          <input v-model="cidade" type="text" placeholder="Cidade" required />
          <br />
          <input
            v-model="uf"
            type="text"
            maxlength="2"
            placeholder="UF"
            required
          />
          <br />

          <input type="submit" value="Enviar" id="submit" />
        </div>
      </form>
    </div>
  </main>
</template>

<script>
 import {Money} from 'v-money'

export default {
  name: "Register",
  components: {Money},
  data() {
    return {
      outro: false,
      raceSelect: true,
      cep: null,
      rua: null,
      bairro: null,
      cidade: null,
      uf: null,

      race: null,
      animal: null,
      races: null,

      animal_1: "Cachorro",
      animal_2: "Gato",

      income: null,
      cpf: null,
      name: null,
      birthday: null,
      showCat: false,
      showDog: false,

      msg: "",

        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          precision: 2,
          masked: false
        }
    };
  },
  methods: {
    otherRace() {
      this.outro = !this.outro;
      this.raceSelect = !this.raceSelect;
    },

    getCEP(e) {
      const cep = e.target.value.replace(/\D/g, "");
      console.log(cep);

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.rua = data.logradouro;
          this.bairro = data.bairro;
          this.cidade = data.localidade;
          this.uf = data.uf;
        });
    },

    async getAnimalsData() {
      const req = await fetch("https://suthub-project.herokuapp.com/pets");
      const data = await req.json();

      this.races = data.races;
      this.animals = data.animals;

      console.log(data);
    },

    async registerData(e) {
      e.preventDefault();

      const data = {
        birthday: this.birthday,
        name: this.name,
        cpf: this.cpf,
        race: this.race,
        animal: this.animal,
        income: this.income,
        cep: this.cep,
        rua: this.rua,
        bairro: this.bairro,
        cidade: this.cidade,
        uf: this.uf,
      };

      console.log(data);

      const dataJson = JSON.stringify(data);

      const req = await fetch("https://suthub-project.herokuapp.com/cadastros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      this.msg = "Cadastro concluído!";

      setTimeout(() => (this.msg = ""), 7000);

      console.log(res);

      this.birthday = "";
      this.name = "";
      this.cpf = "";
      this.race = "";
      this.animal = "";
      this.income = "";
      this.cep = "";
      this.rua = "";
      this.bairro = "";
      this.cidade = "";
      this.uf = "";
    },

    dogSelection() {
      this.showCat = false;
      this.showDog = true;
    },

    catSelection() {
      this.showDog = false;
      this.showCat = true;
    },
  },

  mounted() {
    this.getAnimalsData();
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

form {
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    rgba(0, 117, 110, 1) 0%,
    rgba(0, 122, 116, 1) 35%,
    rgba(0, 73, 68, 1) 100%
  );
  padding: 30px;
  border: none;
  margin-top: 3em;
}

input {
  margin-bottom: 1em;
  padding: 10px 5px;
  width: 400px;
  border: none;
}

input::placeholder {
  font-size: 17px;
  font-weight: bold;
}

input[type="text"] {
  font-size: 17px;
}

input[type="number"] {
  font-size: 17px;
}

input[type="date"] {
  font-size: 17px;
}

label {
  color: white;
  font-weight: bold;
  font-size: 17px;
}

select {
  padding: 5px 30px;
  font-size: 17px;
  text-align: center;
}

#submit {
  width: 400px;
  background: #2e38e3;
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}

#submit:hover {
  background: #2e37e39d;
}

#animals {
  display: flex;
  width: 160px;
  margin: 0 auto;
}

#select {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin: 0 auto;
}

#test {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 0 auto;
  padding-top: 10px;
}

#outro {
  margin-bottom: 10px;
}

.input-icon {
  position: relative;
}

.input-icon > i {
  position: absolute;
  display: block;
  transform: translate(0, -50%);
  top: 49%;
  pointer-events: none;
  width: 25px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
}

.input-icon > input {
  padding-left: 25px;
  padding-right: 0;
  margin-bottom: 0.1em;
}

h4 {
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 2px;
}

@media (max-width: 490px) {
  input {
    width: 300px;
  }

  h4{
    display: none;
  }

  #submit {
    width: 300px;
  }
}

@media (max-width: 350px) {
  input {
    width: 250px;
  }

  form{
    margin-top: 10em;
  }

  #submit {
    width: 250px;
  }
}

</style>
