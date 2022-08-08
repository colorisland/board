<template>
  <div>
    <p>Table</p>

    <form @submit="ChangeData">
      <label style="margin-left: 20px; font-size: 20px">Id</label>
      <input style="margin-left: 20px" type="text" v-model="input_id" />
      <button style="margin-left: 10px">Delete</button>
    </form>

    <vue-good-table
      id="mine"
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true,
        mode: 'pages',
        perPage: 10,
      }"
    >
    </vue-good-table>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

import axios from "axios";

export default {
  components: {
    VueGoodTable,
    axios,
  },
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Content",
          field: "content",
          type: "text",
        },
        {
          label: "ID",
          field: "id",
        },
        // {
        //   label: "Created On",
        //   field: "createdAt",
        //   type: "date",
        //   dateInputFormat: "yyyy-MM-dd",
        //   dateOutputFormat: "MMM do yy",
        // },
      ],
      rows: [],
      input_id: "",
      base_url: "https://localhost:44307/api/Forum/",
    };
  },
  methods: { 
    getdata() {
      axios
        .get(this.base_url)
        .then((Response) => {
          console.log(Response.data);
          this.rows = Response.data.forum;
        })
        .catch((Error) => {
          console.log(Error);
        });
    },
    ChangeData(e) {
      e.preventDefault();
      let delete_Url = this.base_url + this.input_id;
      axios
        .delete(delete_Url)
        .then((Response) => {
          console.log(Response.data);
        })
        .catch((Error) => {
          console.log(Error);
        });
        this.input_id="";
    },
    created() {
    this.getData();
  },
  },
  
};
</script>

<style scoped>
p {
  color: darkblue;
  font-size: 40px;
  text-align: center;
}
#mine {
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}
</style>