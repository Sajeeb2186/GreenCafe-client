import axios from "axios"


 const axionsSecure= axios.create({
    baseURL: 'http://localhost:5000',
})
export default function useAxiosSecure() {
  return  axionsSecure;
}
