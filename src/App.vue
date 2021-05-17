<template>
  <div id="app" @keydown="closeModal($event)">
    <button class="btn" @click="modal = true">Show first modal</button>
    <Modal v-show="modal" @close="modal = false" title="First Modal">
      <template v-slot:body>
        <p>text text text text text text text text text text text text text text text text text text text text </p>
      </template>
    </Modal>

    <button class="btn" @click="secondModal.show = true">Show second modal</button>
    <ModalValidate v-show="secondModal.show" @close="secondModal.show = false"/>
    <div class=new_note>
      <input v-model="note.title" type="text">
      <textarea v-model="note.descr" cols="30" rows="10"></textarea>
      <button @click="addNote">Add new note</button>
    </div>

    <p>{{ searchValue }}</p>
    <Search :value="searchValue"
            placeholder="find me"
            @searchUpdate="searchUpdate"
    />
    <Notes :notes="notesFilter" @remove="removeNote" />
    <router-view></router-view>
  </div>
</template>

<script>

import Notes from './components/Notes'
import Search from './components/Search'
import Modal from "./components/Modal";
import ModalValidate from "./components/ModalValidate";

export default {
  name: 'App',
  components: {
    Notes,
    Search,
    Modal,
    ModalValidate
  },
  data () {
    return {
      modal: false,
      secondModal: {
        show: false
      },
      note: {
        title: '',
        descr: ''
      },
      searchValue: '',
      notes: [
        {
          title: 'First note',
          descr: 'Description for first note',
          date: new Date(Date.now()),
          isEdit: false
        },
        {
          title: 'Second note',
          descr: 'Description for second note',
          date: new Date(Date.now()),
          isEdit: false
        },
        {
          title: 'Third note',
          descr: 'Description for third note',
          date: new Date(Date.now()),
          isEdit: false
        }
      ]
    }
  },
  computed: {
    notesFilter () {
      let array = this.notes,
          search = this.searchValue
      if (!search) return array
      search = search.trim().toLowerCase()
      array = array.filter(item => {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      })
      return array
    }
  },
  methods: {
    addNote() {
      let {title, descr} = this.note
      this.notes.push({
        title,
        descr,
        date: new Date(Date.now())
      })
    },
    removeNote(i) {
      this.notes.splice(i, 1)
    },
    searchUpdate(val) {
      this.searchValue = val
    },
    closeModal(e) {
      if (e.key === 'Escape') {
        this.modal = false
        this.secondModal.show = false
      }
    },
    submitSecondForm() {
      console.log({
        name: this.secondModal.name,
        email: this.secondModal.email
      })
      this.secondModal.show = false
      this.secondModal.name = ''
      this.secondModal.email = ''
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
