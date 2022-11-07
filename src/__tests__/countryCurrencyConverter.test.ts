import { countryCurrencyConverter } from "../converters/countryCurrencyConverter";

const mockCountryData = [
  { countryCode: "AL", countryName: "Albania", currencyCode: "ALL" },
  { countryCode: "AZ", countryName: "Azerbaijan", currencyCode: "AZN" },
  { countryCode: "AT", countryName: "Austria", currencyCode: "EUR" },
  { countryCode: "AI", countryName: "Anguilla", currencyCode: "XCD" },
  { countryCode: "AM", countryName: "Armenia", currencyCode: "AMD" },
  { countryCode: "AO", countryName: "Angola", currencyCode: "AOA" },
  { countryCode: "AQ", countryName: "Antarctica", currencyCode: "" },
  { countryCode: "AS", countryName: "American Samoa", currencyCode: "USD" },
  { countryCode: "AU", countryName: "Australia", currencyCode: "AUD" },
  { countryCode: "AX", countryName: "Åland", currencyCode: "EUR" },
  { countryCode: "AW", countryName: "Aruba", currencyCode: "AWG" },
  { countryCode: "AR", countryName: "Argentina", currencyCode: "ARS" },
];

const mockCurrencyData = [
  {
    exchangeRate: { buy: 3.1202494, middle: 3.284473, sell: 3.4486966 },
    currencyCode: "XCD",
    currencyName: "East Caribbean Dollar",
  },
  {
    exchangeRate: { buy: 39.9907, middle: 40.2407, sell: 40.4907 },
    currencyCode: "ARS",
    currencyName: "Argentine Peso",
  },
  {
    exchangeRate: { buy: 1.1299, middle: 1.1349, sell: 1.1399 },
    currencyCode: "USD",
    currencyName: "US Dollar",
  },
  {
    exchangeRate: { buy: 1, middle: 1, sell: 1 },
    currencyCode: "EUR",
    currencyName: "Euro",
  },
  {
    exchangeRate: { buy: 1.5585, middle: 1.5675, sell: 1.5765 },
    currencyCode: "AUD",
    currencyName: "Australian Dollar",
  },
];

test("should return converted result", () => {
  const convertedList = countryCurrencyConverter(
    mockCountryData,
    mockCurrencyData
  );
  expect(convertedList.length).toBeGreaterThan(0);
});

test("should have properties", () => {
  const convertedList = countryCurrencyConverter(
    mockCountryData,
    mockCurrencyData
  );
  convertedList.forEach((e) => {
    expect(e).toHaveProperty("countryCode");
    expect(e).toHaveProperty("countryName");
    expect(e).toHaveProperty("currencyCode");
    expect(e).toHaveProperty("exchangeRate");
  });
});

test("should not have properties", () => {
  const convertedList = countryCurrencyConverter(
    mockCountryData,
    mockCurrencyData
  );
  convertedList.forEach((e) => {
    expect(e.countryCode).not.toBe("EUR");
    expect(e).not.toHaveProperty("capital");
    expect(e).not.toHaveProperty("population");
    expect(e).not.toHaveProperty("continentName");
  });
});

test("should be in alphabetical order", () => {
  const convertedList = countryCurrencyConverter(
    mockCountryData,
    mockCurrencyData
  );
  const indexOfAnguilla = convertedList.findIndex((e) => e.countryName === "Anguilla")
  const indexOfArgentina = convertedList.findIndex((e) => e.countryName === "Argentina")
  expect(indexOfArgentina).toBeGreaterThan(indexOfAnguilla)
})