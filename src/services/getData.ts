import sourceData from '@/data/data.json'

export async function getData(slug?: string) {
  try {
    const baseUrl = 'https://travel-dummy-api.netlify.app/'
    let response;
    if(slug) {
      response = await fetch(
        `${baseUrl}${slug}.json`
      )
      return await response.json()
    }
      // As we don't have a full data endpoint, this needs to be "hardcoded"
      const possibleDestinations = [
        'brazil',
        '/hawaii',
        '/panama',
        '/jamaica'
      ]
      const urlsArray = possibleDestinations.map(
        destination => `${baseUrl}${destination}.json`)

      const promisedResponses = await Promise.all(
        urlsArray.map(async url => await fetch(url)));

      response = await Promise.all(
        promisedResponses.map(response => response.json()))

      return response
  }
  catch(err) {
    console.log(err)
  }
}

export function checkIfRouteExists(route: string) {
  // TO-DO: instead of checking to the mock data, check against a Store
  return sourceData.destinations.find(destination => destination.slug === route)
}
