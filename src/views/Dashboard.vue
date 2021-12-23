<template>
  <main>
    <h1>Tabela de cadastro</h1>

    <table>
      <tr>
        <th>Nome:</th>
        <th>Nascimento:</th>
        <th>CPF:</th>
        <th>Salario:</th>
        <th>Pet:</th>
        <th>Raça:</th>
        <th>CEP:</th>
        <th>Rua</th>
        <th>Bairro</th>
        <th>Cidade</th>
        <th>UF</th>
        <th style="text-align: center;">Deletar</th>
      </tr>
      <tr v-for="cadastro in cadastros" :key="cadastro.id">
        <td>{{ cadastro.name }}</td>
        <td>{{ cadastro.birthday }}</td>
        <td>{{ cadastro.cpf }}</td>
        <td>{{ cadastro.income }}</td>
        <td>{{ cadastro.animal }}</td>
        <td>{{ cadastro.race }}</td>
        <td>{{ cadastro.cep }}</td>
        <td>{{ cadastro.rua }}</td>
        <td>{{ cadastro.bairro }}</td>
        <td>{{ cadastro.cidade }}</td>
        <td>{{ cadastro.uf }}</td>
        <td id="align">
          <font-awesome-icon id="trash" @click="deleteData(cadastro.id)" :icon="['fas', 'trash']"/>
        </td>
      </tr>
    </table>
  </main>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      cadastros: null,
      cadastros_id: null,
      trash: "https://cdn-icons-png.flaticon.com/512/1632/1632600.png",
    };
  },
  methods: {
    async getInfo() {
      const req = await fetch("https://suthub-project.herokuapp.com/cadastros");

      const data = await req.json();

      this.cadastros = data;

      console.log(this.cadastros);
    },

    async deleteData(id) {
      const req = await fetch(`https://suthub-project.herokuapp.com/cadastros/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();

      console.log(res);

      this.getInfo();
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style scoped>
main {
  justify-content: center;
  align-items: center;
}

table {
  border-collapse: collapse;
  width: 80%;
  height: 110px;
}

td,
th {
  border: 1.5px solid #004944;
  text-align: left;
  padding: 8px;
}

td {
  background: #fff;
  color: black;
  font-weight: bold;
}

#trash {
  width: 30px;
  height: 100%;
  margin: 0 auto;
  cursor: pointer;
}

#align {
  display: flex;
  height: 100%;
}

@media (max-width: 1000px) {
  table {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  tr,
  td {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 7em;
  }
}
</style>
