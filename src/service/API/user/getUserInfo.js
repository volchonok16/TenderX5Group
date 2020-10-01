import {authHeader} from "../utils/authHeader";
import {apiBaseUrl} from "../../../../env";
import {convertGetParamsToString, methodHTTP} from "../utils";

export const getUserInfo = (user_id) => {
    const requestOptions = {
        method: methodHTTP.GET,
        headers: authHeader()
    };

    return new Promise((resolve, reject) => {
        fetch(apiBaseUrl + '/user' + convertGetParamsToString(user_id), requestOptions)
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
