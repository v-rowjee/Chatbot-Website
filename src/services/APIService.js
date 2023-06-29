import { toast } from 'react-toastify';

export default class APIService{
    static sendRequest(body){
        var host = process.env.SERVER_URL
        return fetch(host + `/webhooks/rest/webhook`, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS,GET,DELETE',
                'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token',
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching data from server:', error)
                toast.error('An error occurred while sending message. Please try again later.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
        })
    }
}