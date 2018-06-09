<template>
  <v-container 
    fluid 
    class="secondary"
  >
    <v-layout 
      row 
      wrap
    >
      <v-flex
        v-for="card in showcase"
        v-bind="{ [`xs${card.xs}`]: true, [`sm${card.sm}`]: true, [`md${card.md}`]: true,[`lg${card.lg}`]: true,[`xl${card.xl}`]: true }"
        :key="card.title"
        class="pa-2"
      >
        <v-card 
          flat 
          color="secondary"
        >
          <v-card-media
            :src="card.src"
            height="150px"
            contain
          />
          <v-card-actions>
            <v-spacer/>
            <p 
              class="headline white--text" 
              v-text="card.title"
            />
            <v-spacer/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showcase: [
      {
        show: true,
        title: "Top Notch Storage",
        src: "/svg/package-priority.svg",
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        xl: 4
      },
      {
        show: true,
        title: "Customer Satisfaction",
        src: "/svg/rating.svg",
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        xl: 4
      },
      {
        show: true,
        title: "Great Customer Support",
        src: "/svg/operator.svg",
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        xl: 4
      }
    ]
  })
};
</script>

<style>
</style>
