<template>
  <v-container grid-list-md>
    <form @submit.prevent="submit">
      <v-layout row wrap>
        <v-flex xs8>
          <v-text-field 
            @keyup.enter="submit"
            label="Title"
            v-model="title" 
            type="text"></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-btn @click="submit" color="info">Submit</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    submit() {
      if (this.title) {
        this.$store.commit('post/add', this.title)
        this.$store.commit('post/sortByVoteCount', this.title)
        this.title = ''
      }
    }
  }
}
</script>