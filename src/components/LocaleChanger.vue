<template>
  <div class="locale-changer">
    <p>Language:</p>
    <v-select
      :clearable="false"
      v-model="$i18n.locale"
      :options="langs"
    ></v-select>
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
        lang
      }}</option>
    </select> -->
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data() {
    return { langs: ['tr', 'en'] };
  },
};
</script>

<style lang="scss">
.locale-changer {
  display: flex;
  align-items: center;
  p {
    margin: 0;
    margin-right: 10px;
    font-size: 16px;
  }
}
</style>
