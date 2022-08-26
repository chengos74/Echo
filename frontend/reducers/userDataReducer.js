export default function (userInfo = {}, action) {

    if (action.type == 'getUserInfo') {
        let copyUserInfo = {
            ...userInfo,
            username: action.userData.username,
            description: action.userData.desccription,
        };
        console.log("userInfo: " + JSON.stringify(copyUserInfo));
        return copyUserInfo;
    } else {
        return userInfo;
    };
};
