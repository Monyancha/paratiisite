<template>
  <div class="main-color-section main-section--color paratii-onthenews">
    <div class="main-section-wrapper main-color-section-wrapper">
      <template v-for="item1 in content.list">
        <h2 class="main-section-title">{{item1.title}}</h2>
        <div class="paratii-onthenews-buttons">
          <a
            class="paratii-onthenews-button"
            target="_blank"
            v-bind:class="{ 'by-height' : item2.byheight }"
            v-bind:href="item2.href"
            v-for="(item2, index) in item1.list"
            v-bind:key="index"
          >
            <img class="paratii-onthenews-button-image" v-bind:src="item2.image" />
          </a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SectionOnTheNews',
    props: ['content']

  }
</script>