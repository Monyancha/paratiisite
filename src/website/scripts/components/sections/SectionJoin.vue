<template>
  <section id="faq" class="main-section main-section--top paratii-join">
    <div class="main-section-wrapper">
      <SectionHeader
        v-bind:title="content.title"
        v-bind:subtitle="content.subtitle"
      ></SectionHeader>
      <div class="main-section-content main-section-content--with-margin">
        <p class="main-section-content-text">{{content.text}}</p>
        <div class="buttons-wrapper">
          <a
            class="paratii-button paratii-button--red"
            target="_blank"
            v-for="(item, index) in content.list"
            v-bind:href="item.href"
            v-on:click="sendGA(item.ga)"
            v-bind:key="index"
          >
          <svg class="paratii-button-icon"><use v-bind:xlink:href="'#' + item.icon" /></svg>
          {{item.label}}
      </a>
        </div>
      </div>
      <div class="main-section-content main-section-content--with-margin">
        <p class="main-section-content-text">{{content.call.text}}</p>
        <router-link
          class="paratii-link"
          v-bind:to="{ path: content.call.button.href}"
        >{{content.call.button.label}}</router-link>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionHeader from '../shared/SectionHeader'
  import mixins from '../../mixins'

  export default {
    name: 'SectionJoin',
    props: ['content'],
    mixins: [mixins],
    components: {
      SectionHeader
    }
  }
</script>