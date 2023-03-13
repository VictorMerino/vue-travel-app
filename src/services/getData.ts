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
