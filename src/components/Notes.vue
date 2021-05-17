<template>
  <div class="note_list">
    <div class="note" v-for="(note, index) in getNotes" :key="index">
      <div class="note_header">
        <p v-if="!note.isEdit">{{ note.title }}
          <span style="margin-left: 20px; color: aqua; cursor: default"
                @click="editTitle(index)"
          >Edit</span>
        </p>

        <input v-if="note.isEdit" type="text" :value="note.title" @keydown="save(index, $event)">
        <p @click="removeNote(index)" style="cursor: pointer">X</p>
      </div>
      <div class="note_body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Notes',
  computed: mapGetters(
          [
            'getNotes',
          ]
  ),
  methods: {
    removeNote(i) {
      console.log(`Removed note ${i}`)
      this.$emit('remove', i)
    },
    editTitle(id) {
      this.$store.commit('editTitle', id)
    },
    save(index, event) {
      this.$store.dispatch('save', {index, event})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
