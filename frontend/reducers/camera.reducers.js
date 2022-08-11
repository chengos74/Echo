export default function (photoUri = [], action){
    if(action.type == 'snap'){
        let copyPhotoUri = [...photoUri, {uri: action.uri}]; 
        console.log("cameraReducer: "+JSON.stringify(copyPhotoUri));
        return copyPhotoUri;
    } else if (action.type == 'imageSelected'){
        let copyPhotoUri = [...photoUri, {uri: action.uri}]; 
        console.log("cameraReducer: "+JSON.stringify(copyPhotoUri));
        return copyPhotoUri;
    } else {
        return photoUri;
    };
};


// action == snape --> l'utilisateur prend une photo avec la caméra
// action == imageSelected --> l'utilisateur choisit une photo depuis la galerie de son téléphone 