import {authHeader} from "../utils/authHeader";
import {apiBaseUrl} from "../../../../env";
import {convertGetParamsToString, methodHTTP} from "../utils";

export const getTeamInfo = (team_id) => {
    const requestOptions = {
        method: methodHTTP.GET,
        headers: authHeader()
    };

    return new Promise((resolve, reject) => {
        fetch(apiBaseUrl + '/team' + convertGetParamsToString(team_id), requestOptions)
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
