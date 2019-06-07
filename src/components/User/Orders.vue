<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary" mb-3>Oreders</h1>
        <v-list
          subheader
          two-line
        >
          <v-list-tile
            avatar
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                color="red"
                input-value="order.done"
              @change="markDone(order)"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ order.name  }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-title-action>
              <v-btn
                class="primary"
                @click=""
                :to="'/ad/' + order.adId"
              >
                Open</v-btn>
            </v-list-title-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
  export default {
    data () {
      return {
        orders: [
          {
            id: 'fds3',
            name: 'Mantrid',
            phone: '89999999999',
            adId: '123',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>
<style scoped>
</style>
