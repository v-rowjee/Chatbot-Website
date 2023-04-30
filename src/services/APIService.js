export default class APIService{
    static sendRequest(body){
        var host = process.env.NODE_ENV === 'production' ? process.env.PROD_SERVER_URL : process.env.DEV_SERVER_URL;
        return fetch(host + `/webhooks/rest/webhook`, {
            method: 'POST',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS,GET,DELETE',
                'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token',
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
    }
}