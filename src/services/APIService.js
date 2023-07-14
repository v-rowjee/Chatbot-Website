import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

export default class APIService {
    static sendRequest(body) {
        var host = process.env.SERVER_URL
        // var host = "https://9c13e46fcc38-15980982744599944965.ngrok-free.app"

        const sender = this.generateUniqueID();
        body.sender = sender;

        return fetch(host + `/webhooks/rest/webhook`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS,GET,DELETE',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .catch(error => {
                // console.error('Error fetching data from server:', error)
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
    static generateUniqueID() {
        let senderId = localStorage.getItem('senderId');
        if (!senderId) {
            senderId = nanoid(36); // for a 36-character ID
            localStorage.setItem('senderId', senderId);
        }
        return senderId;
    }

}