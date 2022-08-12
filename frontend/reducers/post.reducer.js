export default function (postinfo = {}, action) {

    if (action.type == 'post') {
        let copyPostInfo = {
            ...postinfo,
            postImage: action.postImage,
            postPseudo: action.postPseudo,
            range: action.range,
            desc: action.desc,
            postProfilePicture: action.postProfilePicture,
            city: action.city,
            likes: action.likes,
            comments: action.comments,
            time: action.time,
            isLiked: action.isLiked,
            isComment: action.isComment,
            latitude: action.latitude,
            longitude: action.longitude,

        };
        console.log("post: " + JSON.stringify(copyPostInfo));
        return copyPostInfo;
    } else {
        return postinfo;
    };
};


// action == snape --> l'utilisateur prend une photo avec la caméra
// action == imageSelected --> l'utilisateur choisit une photo depuis la galerie de son téléphone 