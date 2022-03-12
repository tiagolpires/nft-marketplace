import axios from 'axios'

const Api = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/',

  async get(path: string): Promise<any> {
    const response = await axios.get(this.baseUrl + path)
    return response
  },
  async post(path: string, body: any): Promise<any> {
    const response = await axios.post(this.baseUrl + path, body)
    return response
  },
  async put(path: string, body: any): Promise<any> {
    const response = await axios.put(this.baseUrl + path, body)
    return response
  },
  async delete(path: string, body: any = {}): Promise<any> {
    const response = await axios.delete(this.baseUrl + path, body)
    return response
  },
}

export default Api
