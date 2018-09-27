// vic3King<<<<<<
const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}


const getCountryDetails = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode) //resolved Promise
  } else {
    throw new Error('Unable to load') //rejected Promise
  }
}


const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=1a11bd55cc8f9c')
  if (response.status === 200) {
    return response.json()
    // const data = await response.json()
    // return data
  } else {
    throw new Error('Unable to load')
  }
}
const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountryDetails(location.country)
  // const details = await getCountryDetails(location.country)
  // return details
}


// const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {

//   const countries = new XMLHttpRequest()
//   countries.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {  
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((country) => country.alpha2Code === countryCode)
//       resolve(country)
//       return country
//     } else if (e.target.readyState === 4) {
//       reject('Unable to fetch data')
//     }
//   })
//   countries.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countries.send()
// })