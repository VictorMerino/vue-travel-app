import sourceData from '@/data/data.json'

export async function getData(slug: string) {
  try {
    const response = await fetch(
      `https://travel-dummy-api.netlify.app/${slug}.json`
    )
    return await response.json()
  }
  catch(err) {
    console.log(err)
  }
}

export function checkIfRouteExists(route: string) {
  // TO-DO: instead of checking to the mock data, check against a Store
  return sourceData.destinations.find(destination => destination.slug === route)
}
