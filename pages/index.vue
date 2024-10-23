<script lang="ts" setup>
import { useCountriesStore } from '~/stores/countriesStore';

const countriesStore = useCountriesStore();
countriesStore.getAllCountries();
countriesStore.getNextHoliday();
const countries = computed(() => countriesStore.countries);
const nextHolidays = computed(() => countriesStore.nextHoliday);
const countryValue = ref('');
const filteredCountries = ref(countries.value);
const navigateToCountry = (code: string) => {
  navigateTo(`/${code}`);
};
watch(
  countryValue,
  () => {
    filteredCountries.value = countries.value.filter((el: { name: string }) =>
      el.name.toLowerCase().includes(countryValue.value.toLowerCase())
    );
  },
  { immediate: true }
);

watch(
  countries,
  () => {
    filteredCountries.value = countries.value;
  },
  { immediate: true }
);
</script>

<template>
  <div class="relative bg-grey-light min-h-screen py-20">
    <Container>
      <div class="flex md:flex-row xs:flex-col md:space-x-5 xs:space-y-5 md:space-y-0 md:justify-between xs:items-center md:items-baseline">
        <div class="md:max-w-[45%] w-full">
          <BaseInput v-model="countryValue" class="mb-5" placeholder="Enter searched value" />
          <div v-if="filteredCountries.length" class="max-h-[500px] overflow-y-scroll space-y-5">
            <BaseCountryCard
              v-for="country in filteredCountries"
              :key="`base-${country.countryCode}`"
              :item="country"
              @go-to="navigateToCountry"
            />
          </div>
        </div>
        <div
          v-if="nextHolidays.length"
          class="md:max-w-[45%] w-full bg-grey-dark rounded-lg h-fit p-5"
        >
          <p class="text-lg mb-5">Random Countries Widget</p>
          <div class="space-y-5">
            <BaseCountryCard
              v-for="country in nextHolidays"
              :key="`base-widget-${country.countryCode}`"
              widget
              :item="country"
              @go-to="navigateToCountry"
            />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.bg_image {
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(55, 139, 194, 0) 100%),
    url('/public/images/bg.png');
  background-size: cover;
  background-position: center;
  height: calc(100vh - 90px);
}

.background_half {
  background: linear-gradient(to right, #28282a 50%, #343436 50%);
}

.menu-enter-active,
.menu-leave-active {
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-to,
.menu-leave {
  opacity: 1;
}
</style>
