import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default function({ $axios }: { $axios: NuxtAxiosInstance }) {
  $axios.onResponse((response) => {
    console.log(`[${response.status}] ${response.request.path}`)
  })

  $axios.onError((err) => {
    console.log(
      `[${err.response && err.response.status}] ${err.response &&
        err.response.request.path}`
    )
    console.log(err.response && err.response.data)
  })
}
