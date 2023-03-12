export async function getData(slug: string) {
  const response = await fetch(
    `https://travel-dummy-api.netlify.app/${slug}.json`
  )
  return await response.json()
}
