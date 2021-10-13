<template>
  <section>
    <ul :class="$style.factList">
      <li v-for="(fact, index) in facts" :key="index" :class="$style.factItem">
        <div :class="$style.factImgWrapper">
          <a
            v-if="fact.image_link && fact.image_link !== ''"
            target="_blank"
            :href="fact.image_link"
          >
            <nuxt-img
              v-if="fact.image.data.full_url && fact.image.data.full_url !== ''"
              :class="$style.factImg"
              :src="fact.image.data.full_url"
              :alt="fact.picture_alt"
            />
          </a>
          <template v-else>
            <nuxt-img
              v-if="fact.image.data.full_url && fact.image.data.full_url !== ''"
              :class="$style.factImg"
              :src="fact.image.data.full_url"
              :alt="fact.picture_alt"
            />
          </template>
          <p v-if="fact.credit && fact.credit !== ''" :class="$style.credit">
            {{ fact.credit }}
          </p>
        </div>
        <div :class="$style.factContentWrapper">
          <h2 v-if="fact.title && fact.title !== ''">
            N°{{ index + 1 }} - {{ fact.title }}
          </h2>
          <p v-if="fact.text && fact.text !== ''">{{ fact.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      facts: [
        {
          id: 1,
          image: {
            id: 22,
            storage: 'local',
            filename: 'my-passeport.jpg',
            title: 'My Passeport',
            type: 'image/jpeg',
            uploaded_by: { id: 1 },
            uploaded_on: '2019-02-06T15:42:54+00:00',
            charset: 'binary',
            filesize: 102498,
            width: 772,
            height: 800,
            duration: null,
            embed: null,
            folder: { id: null },
            description: '',
            location: '',
            tags: [],
            metadata: null,
            checksum: null,
            data: {
              full_url:
                'https://api.youen-etrillard.com/directus/public/uploads/_/originals/my-passeport.jpg',
              url: '/uploads/_/originals/my-passeport.jpg',
              thumbnails: [
                {
                  url:
                    'https://api.youen-etrillard.com/directus/public/thumbnail/_/200/200/crop/good/my-passeport.jpg',
                  relative_url:
                    '/thumbnail/_/200/200/crop/good/my-passeport.jpg',
                  dimension: '200x200',
                  width: 200,
                  height: 200
                }
              ],
              embed: null
            }
          },
          picture_alt: 'Cover of french passeport',
          title: 'I try to travel to a new place at least once a year',
          text:
            "I visited New-Zealand, Malta and Ireland in 2018. But I'll avoid flying so much in the future",
          image_link: null,
          credit: null,
          order: 1
        },
        {
          id: 2,
          image: {
            id: 23,
            storage: 'local',
            filename: 'youen-phonetic.svg',
            title: 'Youen Phonetic',
            type: 'image/svg',
            uploaded_by: { id: 1 },
            uploaded_on: '2019-02-06T15:43:22+00:00',
            charset: 'utf-8',
            filesize: 356,
            width: null,
            height: null,
            duration: null,
            embed: null,
            folder: { id: null },
            description: '',
            location: '',
            tags: [],
            metadata: null,
            checksum: null,
            data: {
              full_url:
                'https://api.youen-etrillard.com/directus/public/uploads/_/originals/youen-phonetic.svg',
              url: '/uploads/_/originals/youen-phonetic.svg',
              thumbnails: [
                {
                  url:
                    'https://api.youen-etrillard.com/directus/public/thumbnail/_/200/200/crop/good/youen-phonetic.svg',
                  relative_url:
                    '/thumbnail/_/200/200/crop/good/youen-phonetic.svg',
                  dimension: '200x200',
                  width: 200,
                  height: 200
                }
              ],
              embed: null
            }
          },
          picture_alt: 'Youen in english phonetic : juːn',
          title: "I won't get mad if you mispronounce my name",
          text:
            'I would be more surprised if you get it right reading it for the first time',
          image_link: null,
          credit: null,
          order: 2
        },
        {
          id: 3,
          image: {
            id: 24,
            storage: 'local',
            filename: 'gaming.jpg',
            title: 'Gaming',
            type: 'image/jpeg',
            uploaded_by: { id: 1 },
            uploaded_on: '2019-02-06T15:44:07+00:00',
            charset: 'binary',
            filesize: 59660,
            width: 630,
            height: 450,
            duration: null,
            embed: null,
            folder: { id: null },
            description: '',
            location: '',
            tags: [],
            metadata: null,
            checksum: null,
            data: {
              full_url:
                'https://api.youen-etrillard.com/directus/public/uploads/_/originals/gaming.jpg',
              url: '/uploads/_/originals/gaming.jpg',
              thumbnails: [
                {
                  url:
                    'https://api.youen-etrillard.com/directus/public/thumbnail/_/200/200/crop/good/gaming.jpg',
                  relative_url: '/thumbnail/_/200/200/crop/good/gaming.jpg',
                  dimension: '200x200',
                  width: 200,
                  height: 200
                }
              ],
              embed: null
            }
          },
          picture_alt:
            'NES controller made of a lot of gaming controllers including mice and keyboards',
          title: 'I really enjoy playing video and board games with friends',
          text:
            'Mostly team-based games where you have to achieve victory over opponents or the game itself',
          image_link: null,
          credit: 'Original by Yoshichulo',
          order: 3
        },
        {
          id: 4,
          image: {
            id: 25,
            storage: 'local',
            filename: 'im_ok_with_this.png',
            title: 'Im Ok With This',
            type: 'image/png',
            uploaded_by: { id: 1 },
            uploaded_on: '2019-02-06T15:46:09+00:00',
            charset: 'binary',
            filesize: 18001,
            width: 379,
            height: 214,
            duration: null,
            embed: null,
            folder: { id: null },
            description: '',
            location: '',
            tags: [],
            metadata: null,
            checksum: null,
            data: {
              full_url:
                'https://api.youen-etrillard.com/directus/public/uploads/_/originals/im_ok_with_this.png',
              url: '/uploads/_/originals/im_ok_with_this.png',
              thumbnails: [
                {
                  url:
                    'https://api.youen-etrillard.com/directus/public/thumbnail/_/200/200/crop/good/im_ok_with_this.png',
                  relative_url:
                    '/thumbnail/_/200/200/crop/good/im_ok_with_this.png',
                  dimension: '200x200',
                  width: 200,
                  height: 200
                }
              ],
              embed: null
            }
          },
          picture_alt:
            "2 cases comics. First case : man with neutral face. Second case : same man happy saying : I'm ok with this.",
          title: "Sometimes I'm funny",
          text: 'A friend once said that about me, I found it pretty accurate',
          image_link: 'https://knowyourmeme.com/memes/im-ok-with-this',
          credit: null,
          order: 4
        },
        {
          id: 5,
          image: {
            id: 26,
            storage: 'local',
            filename: 'morning-cup.jpg',
            title: 'Morning Cup',
            type: 'image/jpeg',
            uploaded_by: { id: 1 },
            uploaded_on: '2019-02-06T15:49:09+00:00',
            charset: 'binary',
            filesize: 92354,
            width: 800,
            height: 800,
            duration: null,
            embed: null,
            folder: { id: null },
            description: '',
            location: '',
            tags: [],
            metadata: null,
            checksum: null,
            data: {
              full_url:
                'https://api.youen-etrillard.com/directus/public/uploads/_/originals/morning-cup.jpg',
              url: '/uploads/_/originals/morning-cup.jpg',
              thumbnails: [
                {
                  url:
                    'https://api.youen-etrillard.com/directus/public/thumbnail/_/200/200/crop/good/morning-cup.jpg',
                  relative_url:
                    '/thumbnail/_/200/200/crop/good/morning-cup.jpg',
                  dimension: '200x200',
                  width: 200,
                  height: 200
                }
              ],
              embed: null
            }
          },
          picture_alt:
            'Cup of coffee with Good Morning and a smiley face written at the surface',
          title: 'I just love my warm cup in the morning',
          text: "But I usually don't write good morning on it",
          image_link: null,
          credit: 'Original photo by Jonas Mohamadi from Pexels',
          order: 5
        },
        {
          id: 6,
          image: {
            id: 30,
            storage: 'local',
            filename: 'headphones.jpg',
            title: 'Headphones',
            type: 'image/jpeg',
            uploaded_by: { id: 1 },
            uploaded_on: '2019-02-06T20:35:15+00:00',
            charset: 'binary',
            filesize: 97576,
            width: 860,
            height: 795,
            duration: null,
            embed: null,
            folder: { id: null },
            description: '',
            location: '',
            tags: [],
            metadata: null,
            checksum: null,
            data: {
              full_url:
                'https://api.youen-etrillard.com/directus/public/uploads/_/originals/headphones.jpg',
              url: '/uploads/_/originals/headphones.jpg',
              thumbnails: [
                {
                  url:
                    'https://api.youen-etrillard.com/directus/public/thumbnail/_/200/200/crop/good/headphones.jpg',
                  relative_url: '/thumbnail/_/200/200/crop/good/headphones.jpg',
                  dimension: '200x200',
                  width: 200,
                  height: 200
                }
              ],
              embed: null
            }
          },
          picture_alt:
            'Drawing of black headset with orange cover on the earphones',
          title: "I'm probably wearing my headphones right now",
          text:
            'They let me bring my world with me everywhere I go (with spotify to help)',
          image_link:
            'https://open.spotify.com/user/toshirou/playlist/2GzAygQ8zeCaQndw6JkPRJ?si=j0zXgTM-RE2N_mku7O8rPA',
          credit: null,
          order: 6
        },
        {
          id: 7,
          image: {
            id: 29,
            storage: 'local',
            filename: 'sleeping-kitty.svg',
            title: 'Sleeping Kitty',
            type: 'image/svg+xml',
            uploaded_by: { id: 1 },
            uploaded_on: '2019-02-06T16:04:18+00:00',
            charset: 'us-ascii',
            filesize: 24715,
            width: null,
            height: null,
            duration: null,
            embed: null,
            folder: { id: null },
            description: '',
            location: '',
            tags: [],
            metadata: null,
            checksum: null,
            data: {
              full_url:
                'https://api.youen-etrillard.com/directus/public/uploads/_/originals/sleeping-kitty.svg',
              url: '/uploads/_/originals/sleeping-kitty.svg',
              thumbnails: [
                {
                  url:
                    'https://api.youen-etrillard.com/directus/public/thumbnail/_/200/200/crop/good/sleeping-kitty.svg',
                  relative_url:
                    '/thumbnail/_/200/200/crop/good/sleeping-kitty.svg',
                  dimension: '200x200',
                  width: 200,
                  height: 200
                }
              ],
              embed: null
            }
          },
          picture_alt:
            'Drawing of a white kitty with black stripes peacefully sleeping',
          title: 'I take a 20 minutes power nap almost everyday after lunch',
          text: 'It feels so good and gives such a good boost for the day',
          image_link:
            'https://www.goodfreephotos.com/vector-images/sleeping-kitty-vector-clipart.png.php',
          credit: null,
          order: 7
        }
      ]
    };
  }
});
</script>

<style module lang="scss">
.fact {
  &List {
    padding: 0;
    margin: 0;
  }

  &Item {
    list-style-type: none;
    min-height: 100vh;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &Img {
    max-height: 50vh;
    max-width: 90vw;
    display: inline-block;
    // margin: 0 auto;

    &[src$='.svg'] {
      width: 100%;
      height: 100%;
    }

    &Wrapper {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;

      > a {
        height: auto;
        outline-offset: var(--outline-offset-content);
        outline-width: var(--outline-width-content);
      }
    }
  }

  &ContentWrapper {
    text-align: center;
  }
}

.credit {
  text-align: right;
  font-size: 1.2rem;
  opacity: 0.3;
}
</style>
