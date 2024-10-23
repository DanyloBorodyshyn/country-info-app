<script lang="ts" setup>
const route = useRoute();
const date = new Date();
const countriesStore = useCountriesStore();
const currentYear: globalThis.Ref<number | string> = ref(date.getFullYear());
const years = new Array(11).fill(2020).map((year, index) => year + index);
countriesStore.getCounryInfo(route.params.id as string);

const countryInfo = computed(() => countriesStore.selectedCountry);
const selectedCountryPublicHolidays = computed(() => countriesStore.selectedCountryPublicHolidays);
const selectFunc = (selectedYear: number | string) => {
  currentYear.value = selectedYear;
};

watch(
  currentYear,
  () => {
    countriesStore.getPublicHolidays(currentYear.value, route.params.id as string);
  },
  { immediate: true }
);
</script>

<template>
  <div class="relative bg-grey-light min-h-screen py-20">
    <Container v-if="countryInfo?.countryCode">
      <div class="flex mb-5 items-center">
        <NuxtLink to="/">
          <button class="mr-3 mt-1">
            <img src="/public/icons/back-arrow.svg" alt="" >
          </button>
        </NuxtLink>
        <p class="text-3xl font-medium">{{ countryInfo.commonName }}</p>
      </div>
      <div class="flex flex-col space-y-3">
        <div
          v-for="(holiday, idxHoliday) in selectedCountryPublicHolidays"
          :key="`base-holiday-${idxHoliday}`"
          class="border border-white p-5"
        >
          <p>{{ holiday.name }}</p>
          <p>{{ holiday.date }}</p>
          <div v-if="holiday.types?.length" class="flex">
            <p v-for="(type, idx) in holiday.types" :key="'holiday-' + idx">Type: {{ type }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap space-x-2 mt-5 justify-center items-center">
        <BaseYearBlock
        v-for="year in years"
        :key="year"
        class="mb-3"
        :selected-block="currentYear == year"
        :year
        @select="selectFunc"
        />
      </div>
    </Container>
  </div>
</template>
