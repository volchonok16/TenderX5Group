import {getTeamInfo} from "./team/getTeamInfo";
import {getTeams} from "./team/getTeams";
import {getSpecialisations} from "./common/getSpecialisations";
import {getStacks} from "./common/getStacks";
import {getUserInfo} from "./user/getUserInfo";
import {getUsers} from "./user/getUsers";

class API {
    static getSpecialisations = () => getSpecialisations();
    static getStacks = () => getStacks();
}

/** REST API by team */
let Team = {
    getTeamInfo: (team_id) => getTeamInfo(team_id),
    getTeams: () => getTeams(),
};

/** REST API by user*/
let User = {
    getUserInfo: (user_id) => getUserInfo(user_id),
    getUsers: () => getUsers(),
};

export default Object.assign(API, Team, User);