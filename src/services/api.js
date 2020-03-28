import axios from 'axios'

export default () => {
    const urlBase = 'http://localhost:3333/api/'

    return {
        get,
        post,
        patch,
        del
    }

    function get(url, config = {}) {
        return axios.get(urlBase + url, config).then(res => {
            if (res.status === 200) {
                return res.data.data
            }
        })
    }

    function post(url, payload) {
        return axios.post(urlBase + url, payload).then(res => {
            if (res.status === 201) {
                return res.data.data
            }
        })
    }
    function patch(url, payload) {
        return axios.patch(urlBase + url, payload).then(res => {
            if (res.status === 200) {
                return res.data.data
            }
        })
    }
    function del(url) {
        return axios.delete(urlBase + url).then(res => {
            if (res.status === 200) {
                return res.data.deleted
            }
        })
    }
}
