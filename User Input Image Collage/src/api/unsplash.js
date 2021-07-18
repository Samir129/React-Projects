import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID hpt_KeMlbYPdmXtUlZx8a0cn9Mv24a0_51vw8QMazm0'
    }
})