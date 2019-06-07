<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary" mb-3>Create new ad</h1>
        <v-form
          v-model="valid"
          ref="form"
          validation
          class="mb-3"
        >
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
            name="description"
            label="Ad description"
            type="text"
            v-model="description"
            multi-line
            :rules="[v => !!v || 'Description is required']"
          ></v-text-field>
        </v-form>
          <v-layout row class="mb-3">
            <v-flex xs12>
              <v-btn class="warning">
                Upload
                <v-icon right dark>cloud_upload</v-icon>
              </v-btn>

            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <img src="" height="100">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-switch
                v-model="promo"
                label="Add to promo?"
                color="primary"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
             <v-spacer></v-spacer>
              <v-btn
                :disabled="!valid"
                class="primary"
                @click="createAd"
              >
                Create ad
              </v-btn>
            </v-flex>
          </v-layout>

      </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
  export default {
    data () {
      return {
        title: '',
        descripton: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          // logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://proglib.io/wp-content/uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png'
          }
          this.$store.dispatch('createAd', ad)
        }
      }
    }
  }
</script>
<style scoped>
</style>
