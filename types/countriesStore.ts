export interface countriesStoreInterface {
  countries: Countries[];
  nextHoliday: NextHoliday[];
  selectedCountry: {
    countryCode: string;
    commonName: string;
  };
  selectedCountryPublicHolidays: SelectedCountryPublicHolidaysInterface[];
}

interface NextHoliday {
  countryName: string;
  countryCode: string;
  nextHoliday: string;
  holidayDate: string;
}

interface Countries {
  name: string;
  countryCode: string;
}

interface SelectedCountryPublicHolidaysInterface {
  name: string;
  date: string;
  types: string[];
}
