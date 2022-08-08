<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://penitta.com" target="_blank">Penitta</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} creativeLabs.</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://penitta.com">Penitta</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
