import { countriesDataConverter } from "../converters/countriesDataConverter";
import { countryDataList } from "../__mocks__/mockCountriesData";

test("should converted data list not be empty", () => {
  const convertedList = countriesDataConverter(countryDataList);
  expect(convertedList.length).toBeGreaterThan(0);
});

test("should have properties", () => {
  const convertedList = countriesDataConverter(countryDataList);
  convertedList.forEach((e) => {
    expect(e).toHaveProperty("countryCode");
    expect(e).toHaveProperty("countryName");
    expect(e).toHaveProperty("currencyCode");
  });
});

test("should not have properties", () => {
  const convertedList = countriesDataConverter(countryDataList);
  convertedList.forEach((e) => {
    expect(e).not.toHaveProperty("capital");
    expect(e).not.toHaveProperty("population");
    expect(e).not.toHaveProperty("continentName");
  });
});
