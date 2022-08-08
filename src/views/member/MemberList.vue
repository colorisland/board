<template>
  <div id="app">
    <p>Table</p>
    <ModalView v-if="isModalViewed"
      @close-modal="isModalViewed==false" >
      hi
    </ModalView>
    
    
    <form @submit="temp">
      <label style="margin-left: 20px; font-size: 20px">Id</label>
      <input style="margin-left: 20px" type="text" v-model="input_id"/>
      <button style="margin-left: 10px">Delete</button>
    </form>

    
    <vue-good-table
      id="mine"
      :columns="columns"
      :rows="rows"
      @on-row-click="onRowClick"
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

import ModalView from '../pages/ModalView.vue';
import ModalContent from '../pages/ModalContent.vue';


export default {
  name:"app",
  components: {
    VueGoodTable,
    axios,
    ModalView,
    ModalContent
  },
  data() {
    return {
      isModalViewed:false,
      columns: [
        {
          label: "Id",
          field: "id",
        },
        {
          label: "UserName",
          field: "userName",
        },
        {
          label: "Email",
          field: "email",
          type: "text",
        },
        {
          label: "PhoneNumber",
          field: "phoneNumber",
        },
        {
          label: "CreatedDate",
          field: "createdDate",
        },
        {
          label: "IsActive",
          field: "isActive",
        },
      
      ],
      rows: [{id:1,userName:"chaewon"}],
      input_id: "",
      base_url: "http://localhost:5123/test/",
      
    };
  },
  methods: { 
    getdata() {
      axios
        .get(this.base_url+"getall")
        .then((Response) => {
          //console.log(JSON.stringify(Response.data));
          this.rows = Response.data.rows;
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
    onRowClick(params){
      console.log(this.isModalViewed)

      this.isModalViewed=true;
      console.log(params.row.userName,this.isModalViewed)
    },
    temp(){
        this.isModalViewed=true;
    },
    

  },
  created() {
    // axios
    //     this.getdata();
    }
  
};
</script>

<style >

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