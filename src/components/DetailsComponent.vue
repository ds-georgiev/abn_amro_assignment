<template>
  <div class="genre-wrapper">
    <div class="side-bar">
      <div class="side-bar-wrapper">
        <div class="image">
          <img :src="data.image" alt="show image" />
        </div>
        <div class="show-info">
          <div class="rating">
            <h3>Rating</h3>
            <p>
              <font-awesome-icon icon="fa-solid fa-star" /> {{ data.rating }}
            </p>
          </div>
          <div class="genres">
            <h3>Genres:</h3>

            <p v-for="genre in data.genres" :key="genre" class="genre">
              <font-awesome-icon icon="fa-solid fa-film" /> {{ genre }}
            </p>
          </div>
          <div class="language">
            <h3>Language:</h3>
            <p>
              <font-awesome-icon icon="fa-solid fa-language" />
              {{ data.language }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <div class="title">
          <h1>{{ data.title }}</h1>
        </div>
        <hr />
        <div class="summary-wrapper">
          <div class="summary-title">
            <h2>Summary</h2>
          </div>
          <div class="summary" v-html="data.summary"></div>
        </div>
        <hr />
        <div class="cast-wrapper">
          <div class="cast-title">
            <h2>Cast:</h2>
          </div>
          <div class="cast-content">
            <div
              class="cast-member"
              v-for="castMember in data.cast"
              :key="castMember.id"
            >
              <div class="cast-member-image" v-if="castMember.image">
                <img :src="castMember.image" alt="cast member image" />
              </div>
              <div class="cast-member-name">
                <p>{{ castMember.name }}</p>
              </div>
              <span>aka</span>
              <div class="cast-member-character-name">
                <p>{{ castMember.character }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { TVShowDetails } from "@types";

defineProps<{ data: TVShowDetails }>();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
