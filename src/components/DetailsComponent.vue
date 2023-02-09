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
<style scoped lang="scss">
.genre-wrapper {
  display: flex;
  width: 100vw;
  height: calc(100vh - 120px);
  padding: 60px;

  .side-bar {
    // width: 20%;
    max-width: 280px;
    height: 100%;
    background-color: red;

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: calc(100% - 40px);
      padding: 20px;
      background-color: green;

      .image {
        img {
          border-radius: 15px;
        }
      }

      .show-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        background-color: yellow;
        align-items: flex-start;

        .rating {
          display: block;
          text-align: flex-start;
        }
        .genres {
          display: flex;
          flex-direction: column;
          // gap: 10px;
          align-items: flex-start;

          .genre {
            margin: 0;
            padding-left: 10px;
          }
        }

        .language {
          display: block;
          text-align: flex-start;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: blue;

    &-wrapper {
      .title {
        display: block;
        text-align: left;
      }
      .summary-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        padding: 20px;
        background-color: green;

        .summary-title {
          display: block;
          text-align: left;
        }
        .summary {
          display: block;
          text-align: left;
        }
      }

      .cast-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        padding: 20px;
        background-color: green;

        .cast-title {
          display: block;
          text-align: left;
        }
        .cast-content {
          display: flex;
          flex-direction: row;
          gap: 40px;
          // max-height: 100%;
          background-color: yellow;
          justify-content: center;
          max-height: 500px;
          align-items: left;
          flex-wrap: wrap;
          overflow: auto;

          .cast-member {
            display: flex;
            flex-direction: column;
            gap: 10px;
            height: 100%;
            align-items: middle;

            .cast-member-image {
              display: block;

              img {
                border-radius: 50%;
                width: 150px;
                height: 150px;
                object-fit: cover;
                object-position: top;
              }
            }
            .cast-member-name,
            .cast-member-character-name {
              max-width: 150px;
              display: block;
              p {
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
