const replaceUrl = (url, pathVariables) => {
  return Object.entries(pathVariables).reduce((val = '', [key, value]) => {
    if (!['string', 'number'].includes(typeof value))
      throw new Error(`Invalid Path Variable Value - ${key}: ${value}`)

    return val.replace(`{${key}}`, value)
  }, url)
}

const generateUrl = (fullUrl, params) => {
  const computedUrl = !params?.path ? fullUrl : replaceUrl(fullUrl, params.path)
  const queryString = new URLSearchParams(params?.query ?? {}).toString()

  return queryString ? `${computedUrl}?${queryString}` : computedUrl
}

const createHttp = ({ baseUrl, headers, fetch = fetch }) => {
  const request = async (method = 'get', url, options) => {
    const body = method === 'get' ? undefined : options?.body

    const response = await fetch(
      generateUrl(`${baseUrl}/${url}`, options?.params),
      {
        method,
        ...options,
        headers: {
          ...headers,
          ...(body && body instanceof FormData
            ? null
            : {
                'Content-Type': 'application/json',
              }),
          ...options?.headers,
        },
        ...(body && {
          body: body instanceof FormData ? body : JSON.stringify(body),
        }),
      },
    )

    return response
  }

  return {
    request,
    GET: async (url, options) => request('get', url, options),
    POST: async (url, options) => request('post', url, options),
    PUT: async (url, options) => request('put', url, options),
    PATCH: async (url, options) => request('patch', url, options),
    DELETE: async (url, options) => request('delete', url, options),
  }
}

export const http = createHttp({
  baseUrl: 'http://localhost:8000',
})
