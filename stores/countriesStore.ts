import axios from 'axios';
import { defineStore } from 'pinia';
import type { countriesStoreInterface } from '~/types/countriesStore';

export const useCountriesStore = defineStore({
  id: 'countriesStore',
  state: (): countriesStoreInterface => ({
    countries: [],
    nextHoliday: [],
    selectedCountry: {
      countryCode: '',
      commonName: '',
    },
    selectedCountryPublicHolidays: [],
  }),
  actions: {
    async getAllCountries() {
      this.countries = await axios.get('/api/v3/AvailableCountries').then(resp => resp.data);
    },
    async getNextHoliday() {
      const tempData = await axios
        .get('/api/v3/NextPublicHolidaysWorldwide')
        .then(resp => resp.data);
      let randomData = [];
      if (tempData.length) randomData = tempData.sort(() => 0.5 - Math.random()).slice(0, 3);
      if (randomData.length)
        this.nextHoliday = randomData.map(
          (el: { countryCode: string; name: string; date: string }) => {
            const findedItem = this.countries.find(
              (item: { countryCode: string }) => item.countryCode === el.countryCode
            );
            return {
              countryName: findedItem?.name,
              countryCode: findedItem?.countryCode,
              nextHoliday: el?.name,
              holidayDate: el?.date,
            };
          }
        );
      else this.nextHoliday = [];
    },
    async getCounryInfo(code: string) {
      this.selectedCountry = await axios.get(`/api/v3/CountryInfo/${code}`).then(resp => resp.data);
    },
    async getPublicHolidays(year: string | number, code: string) {
      this.selectedCountryPublicHolidays = await axios
        .get(`/api/v3/PublicHolidays/${year}/${code}`)
        .then(resp => resp.data);
    },
  },
});
