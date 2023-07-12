const QIITAURL = process.env.QIITA_ENDPOINT_URL
const QIITAAPIKEY = process.env.QIITA_API_KEY

export const getQiitaPosts = async () => {
  const key = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${QIITAAPIKEY}`
    }
  }

  const response = await fetch(`${QIITAURL}items?query=user%3Akmfj`, key)

  if (!response.ok) {
    const text = await response.text()

    return {
      success: false,
      errors: JSON.parse(text)
    }
  }

  const json = await response.json()
  return json
}
