<template>
  <section>
    <post-form />
    <post-list />
  </section>
</template>

<script>
import PostForm from '~/components/posts/form'
import PostList from '~/components/posts/list'

export default {
  components: {
    PostForm,
    PostList
  }
}
</script>