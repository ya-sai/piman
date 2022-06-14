import { AxiosResponse } from 'axios'
// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here

export default ($axios: any, store: any) => ({
  async example(data: {}) {
    const res = $axios
      .post(`/example`, data)
      .then((res: AxiosResponse) => {
        return res
      })
    return res
  },
})
