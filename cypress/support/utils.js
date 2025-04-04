export const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2,10)
    return `${randomString}@gmail.com`
  }
  
  export const generateRandomICO = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString()
  }
  
  export const generateRandomCountry = () => {
    const countries = ['Czech Republic', 'Slovakia', 'Poland', 'Germany', 'Austria', 'Hungary', 'France', 'Italy', 'United States', 'Canada']
    return countries[Math.floor(Math.random() * countries.length)]
  }
  
  export const generateRandomCity = () => {
    const cities = ['Prague', 'Bratislava', 'Warsaw', 'Berlin', 'Vienna', 'Budapest', 'Paris', 'Rome', 'New York', 'Toronto']
    return cities[Math.floor(Math.random() * cities.length)]
  }
  
  export const generateRandomStreet = () => {
    const randomStreetName = Math.random().toString(36).substring(2, 10).replace(/[0-9]/g, '')
    const randomNumber = Math.floor(Math.random() * 999) + 1;
    return `${randomStreetName} ${randomNumber}`
  }
  