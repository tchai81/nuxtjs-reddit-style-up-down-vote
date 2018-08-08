<template>
  <v-container grid-list-md>
    <v-layout row wrap :key="item.id" v-for="(item, index) in list">
      <v-flex xs8 sm8 >
        <v-card>
          <v-card-title primary-title>
            <v-flex xs1>
              <div @click="handleUpvote(index)" class="upvote-downvote">
                &uarr;
              </div>
              <div class="vote">{{ item.vote }}</div>	
              <div @click="handleDownvote(index)" class="upvote-downvote">
                &darr;	
              </div>
            </v-flex>
            <v-flex xs9>
              <h3 class="headline mb-0">{{ item.title }}</h3>
              <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.post.list
    }
  },
  methods: {
    handleUpvote(index) {
      this.$store.commit('post/upvote', index)
      this.$store.commit('post/getTop20')
    },
    handleDownvote(index) {
      this.$store.commit('post/downvote', index)
      this.$store.commit('post/getTop20')
    }
  }
}
</script>

<style scoped>
.upvote-downvote {
  cursor: pointer;
}
.vote {
  padding-left: 1px;
  font-size: 12px;
}
</style>