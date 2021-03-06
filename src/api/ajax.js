import axios from "axios";

export default function ajax(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    let promise
    if (method === "GET") {
      promise = axios.get(url, { params: data })
    } else {
      promise = axios.post(url, data)
    }

    promise.then(res => {
      resolve(res.data)
    }).catch(err => {
      console.log(err)
    })
  })
}
