import {authHeader} from "../utils/authHeader";
import {apiBaseUrl} from "../../../../env";
import {methodHTTP} from "../utils";

export const getTeams = () => {
    const requestOptions = {
        method: methodHTTP.GET,
        headers: authHeader()
    };

    return new Promise((resolve, reject) => {
        fetch(apiBaseUrl + '/teams', requestOptions)
            .then(res => {
                res.json()
                    .then(body => resolve(body))
                    .catch(error => reject(error))
            })
            .catch(err => {
                reject('Критическая ошибка'); // нужный формат ответа
            });
    });
};
