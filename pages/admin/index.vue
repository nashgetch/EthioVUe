<template>
  <div class="container-fluid">
    <v-toolbar flat color="white">
      <v-toolbar-title>Admin Video Console</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field :multi-line="true" height="100%" v-model="editedItem.title" label="name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field :multi-line="true" height="100px" v-model="editedItem.title_en" label="Title in English"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field :multi-line="true" height="100px" v-model="editedItem.description" label="Description"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field type="number" hint="enter a 0 or 1 other wise it defaults to zero" v-model="editedItem.trending" label="Trending"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="videos" class="elevation-1"  :search="search" :rows-per-page-items="[10]">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-right">{{ props.item.title_en }}</td>
        <td class="text-xs-right">{{ props.item.description }}</td>
        <td class="text-xs-right">{{ props.item.trending }}</td>
        <td class="text-xs-right">{{ props.item.created_at }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import "vuetify/dist/vuetify.min.css";
import axios from "axios";
const base_url="https://ethiov.com/api/"
export default {
  middleware: "admin_authenticated",
  layout:'admin',
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
        }
      ]
    };
  },
  data: () => ({
    dialog: false,
    search: '',
    headers: [
      {
        text: "Videos",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Title in English", value: "title_en" },
      { text: "Description", value: "description" },
      { text: "Trending", value: "trending" },
      { text: "CreatedAt", value: "created_at" },    
      { text: "", value: "name", sortable: false }
    ],
    videos: [],
    editedIndex: -1,
    editedItem: {
      title_en: "",
      title: 0,
      description: 0,
      trending: 0,
    },
    defaultItem: {
      title_en: "",
      title: 0,
      description: 0,
      trending: 0,
    }
  }),

  computed: {
    formTitle() {
      return "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  mounted:function(){
    this.initialize();
  },

  methods: {
    initialize() {
      axios.get(base_url+"all_videos").then((videos)=>{
          this.videos=videos.data;
      })
    },

    editItem(item) {
      this.editedIndex = this.videos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        axios.post(base_url+"update_video/"+this.editedItem.v_id,{
            title_en:this.editedItem.title_en,
            title:this.editedItem.title,
            description:this.editedItem.description,
            trending:this.editedItem.trending,
             headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        }).then((data)=>{
               Object.assign(this.videos[this.editedIndex], this.editedItem)
              this.$toast.success("Great Job Dagm, keep on going man\n but don't forget \nthis the work of nahom and kaleb")
            }
        ).catch(error=>this.$toast.error("Something went wrong please contact nahom or kaleb"))
      } else {
       return
      }
      this.close();
    }
  }
};
</script>

