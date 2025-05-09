import axios from 'axios';

const baseUrl = 'https://spiritual-tracker-be.onrender.com'

export const fetchUserDetails = async (emailId)=>{
    const url = `${baseUrl}/user?email=${emailId}`
    const response = await axios.get(url)
    return response
}

