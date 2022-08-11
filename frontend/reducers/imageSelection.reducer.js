export default function (photoUri = [], action){
    if(action.type == 'imageIsSelected'){

        let copyPhotoUri = [...photoUri, {uri: action.uri}]; 
        console.log(copyPhotoUri);
        
        return copyPhotoUri;
    } else {
        return photoUri;
    };
};