import axios from "axios";
import toast from "react-hot-toast";
import { API_KEY } from "./apiKey";


const movieInstance = axios.create({
	baseURL: {API_KEY}
})


async function getContacts() {
      try {
        const response = await movieInstance.get();
        return response.data;
      } catch (error) {
       console.error(`Error fetching data: ${error.message}`);;
      }
}

async function getContactsByValue(searchValue) {
    try {
	    const response = await movieInstance.get(`${searchValue}`);
        return response.data;
    } catch (error) {
       console.error(`Error fetching data: ${error.message}`);;
    }
}

async function postContact() {
    try {
	    const response = await movieInstance.get(`/movie/${id}`, {
		    params: {
                  ...defaultParams
		  }
	  });
        return response.data;
    } catch (error) {
       console.error(`Error fetching data: ${error.message}`);;
    }
}

async function deleteContact(id) {
    try {
	    const response = await movieInstance.get(`/movie/${id}/reviews`, {
		    params: {
                  ...defaultParams
		  }
        });
        return response.data;
    } catch (error) {
       console.error(`Error fetching data: ${error.message}`);;
    }
}

export default { getContacts, getContactsByValue, postContact, deleteContact};