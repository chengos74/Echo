import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar, } from "@rneui/themed";
import * as Location from 'expo-location'; // Pour la geolocalisation 
//-----IMPORT DES ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot, faEllipsisVertical, faHeart, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faComment as faCommentRegular } from '@fortawesome/free-regular-svg-icons';
//-----IMPORT FONCTIONS DE GEOLIB-----//
import getDistance from 'geolib/es/getDistance'; // calcul la distance entre deux points 
import isPointWithinRadius from 'geolib/es/isPointWithinRadius'; // renvoie true si un point est à proximité d'un autre point selon un rayon défini 
//-----IMPORT REDUX-----//
import { connect } from 'react-redux';


const PostComponent = (props) => {

  // State qui reçoit la position de l'utilisateur 
  const [userPosition, setUserPosition] = useState(null);
  // message d'erreur si l'utilisateur n'autorise pas la gélolcalisation
  const [errorMsg, setErrorMsg] = useState(null);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  //ip Gauthier
  const ip = '172.20.10.5'
  // const [postInfo, setPostInfo] = useState(['a', 'b']);


  // const getNewPost = async () => {

  //   var rawResponse = await fetch('http://' + ip + ':3000/post-content')

  //   response = await rawResponse.json()
  //   setPostInfo(response);
  //   console.log("postInfo :" + JSON.stringify(postInfo.result));
  // }

  // getNewPost();

  // useEffect(() => {
  //   var response;
  //   (async () => {
  //     var rawResponse = await fetch('http://' + ip + ':3000/post-content')
  //     response = await rawResponse.json();
  //     // console.log("postInfo :" + JSON.stringify(response));
  //     setPostInfo(response.result);
  //   })()
  //   });
  //   console.log(postInfo);
  // }, [posts]);



  // récupérer la position de l'utilisateur et la permission 
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();

  //     if (status != 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }
  //     let location = await Location.getCurrentPositionAsync({}); // récupère la postion de l'utilisateur 

  //     setUserPosition(location);
  //     setUserLatitude(location.coords.latitude);
  //     setUserLongitude(location.coords.longitude);
  //     console.log('1er useEffect');
  //   })(); // appel de la fonction anonyme 
  // }, []); // useEffect exécuté au chargement du screen 


  let txt = 'waiting...';
  if (errorMsg) {
    txt = errorMsg;
  } else if (userPosition) {

  };


  // Array fictif contenant les infos relatives à un post pour mapper dessus ensuite
  const postInfo = [
    {
      postPseudo: 'Gauthier',
      postProfilePicture: require('../assets/profilePicture/userPicture1.jpg'),
      postImage: require('../assets/photo/capsule.jpg'),
      desc: 'La capsule',
      likes: 0,
      comments: 0,
      isLiked: false,
      isComment: false,
      city: 'Bordeaux',
      time: 0,
      latitude: 44.83667581936292,
      longitude: -0.575641307603843,
    },
    {
      postPseudo: 'mr Bean',
      postProfilePicture: require('../assets/profilePicture/userPicture1.jpg'),
      postImage: require('../assets/photo/photo1.jpg'),
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      likes: 83,
      comments: 12,
      isLiked: false,
      isComment: false,
      city: 'Bordeaux',
      time: 2,
      latitude: 44.83667581936292,
      longitude: -0.575641307603843,
    },
    {
      postPseudo: 'Tom',
      postProfilePicture: require('../assets/profilePicture/userPicture2.jpg'),
      postImage: require('../assets/photo/photo2.jpg'),
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      likes: 3,
      comments: 1,
      isLiked: false,
      isComment: false,
      city: 'Pey Berland',
      time: 2,
      latitude: 1,
      longitude: 2,
    },
    {
      postPseudo: 'Groot',
      postProfilePicture: require('../assets/profilePicture/userPicture3.jpg'),
      postImage: require('../assets/photo/photo3.jpg'),
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      likes: 127,
      comments: 38,
      isLiked: false,
      isComment: false,
      city: 'Voie Lactée',
      time: 3,
      latitude: 44.83667581936292,
      longitude: -0.575641307603843,
    },
  ];

  // if (props.newPostInfo != {}) {
  //   postInfo.splice(0, 0, props.newPostInfo);
  // }

  // console.log(postInfo);

  // useEffect(() => {
  //   if ((userLatitude && userLongitude) != null) {

  //     const post = postInfo.map((data, index) => {

  //       let postIsInRange = isPointWithinRadius({ latitude: data.latitude, longitude: data.longitude }, { latitude: userLatitude, longitude: userLongitude }, 2800)
  //       // console.log('2e useEffect');
  //       // console.log("is in range : " + postIsInRange);
  //     })

  //     //ip Gauthier
  //     const ip = '192.168.43.223'
  //     const getPosts = async () => {
  //       var rawResponse = await fetch('http://' + ip + ':3000/post-content')

  //       let response = await rawResponse.json()
  //       console.log("response :" + JSON.stringify(response));
  //     }
  //     getPosts();
  //   }
  // }, [userLatitude, userLongitude])

  // if (postInfo != undefined) {
  //   const posts = postInfo.result.map((data, index) => {

  //     // State qui passe à true quand on like
  //     const [like, setLike] = useState(data.isLiked);
  //     // State qui passe à true quand on comment
  //     const [comment, setComment] = useState(data.isComment);

  //     // on coupe la description à 80 char
  //     // if (data.desc.length > 80) {
  //     //   data.desc = data.desc.slice(0, 80) + ' ...';
  //     // }

  //     return (
  //       <View
  //         key={index}
  //         style={{
  //           paddingBottom: 10,
  //           borderBottomColor: 'gray',
  //           borderBottomWidth: 0.1,
  //         }}>
  //         <View style={{
  //           flexDirection: 'row',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           padding: 15,
  //         }}>
  //           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //             <Avatar
  //               rounded
  //               source={data.postProfilePicture} // photo de profil de l'utilisateur
  //               size={64}
  //             />
  //             <View style={styles.subtitleCardHead}>
  //               <Text style={{ fontSize: 18, marginTop: 10, color: "white", fontWeight: 'bold' }}> {data.postPseudo} </Text>
  //               <View style={{ flexDirection: 'row', marginTop: 10 }}>
  //                 <FontAwesomeIcon icon={faLocationDot} size={16} color={'#EBEBEB'} />
  //                 <Text style={{ marginLeft: 3, color: "#7E7E7E" }}> {data.city} </Text>
  //               </View>
  //             </View>
  //             <Text style={{ marginTop: 40, color: "#7E7E7E" }}>{data.time}h ago</Text>
  //           </View>
  //         </View>
  //         <View style={{
  //           position: 'relative',
  //           justifyContent: 'center',
  //           alignItems: 'center',

  //         }}>
  //           <Image source={data.postImage} style={{ width: '100%', height: 400, }} />
  //         </View>
  //         <View style={{
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //           alignItems: 'center',
  //           paddingHorizontal: 12,
  //           paddingVertical: 15,
  //           backgroundColor: '#348A55',
  //         }}>
  //           <View style={{ flexDirection: 'row', alignItems: 'center', }}>
  //             <TouchableOpacity>
  //               <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: '#fff' }} size={20} />
  //             </TouchableOpacity>
  //           </View>
  //           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //             <TouchableOpacity onPress={() => setLike(!like)}>
  //               <FontAwesomeIcon
  //                 icon={like ? faHeart : faHeartRegular}
  //                 style={{ color: like ? '#D66D67' : 'white', marginRight: 5 }} size={24}
  //               />
  //             </TouchableOpacity>
  //             <Text style={{ marginRight: 20, color: '#fff', }}>{like ? data.likes + 1 : data.likes}</Text>
  //             <TouchableOpacity onPress={() => setComment(!comment)}>
  //               <FontAwesomeIcon
  //                 icon={comment ? faComment : faCommentRegular}
  //                 style={{ color: '#fff', marginRight: 5 }} size={20} />
  //             </TouchableOpacity>
  //             <Text style={{ marginRight: 20, color: '#fff', }}>{comment ? data.comments + 1 : data.comments}</Text>
  //             <TouchableOpacity>
  //               <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#fff' }} size={20} />
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //         <View style={{
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //           alignItems: 'center',
  //           paddingHorizontal: 12,
  //           paddingVertical: 0,
  //           backgroundColor: '#348A55',
  //         }}>
  //           <View>
  //             <View key={index}>
  //               <Text style={{ fontWeight: 'bold', color: 'white' }}>{data.postPseudo}</Text>
  //               <Text style={{ color: 'white', fontSize: 13, marginBottom: 10 }}
  //                 onPress={() => { }}
  //               >{data.desc}</Text>
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     );
  //   });
  // }

  const posts = postInfo.map((data, index) => {

    // State qui passe à true quand on like
    const [like, setLike] = useState(data.isLiked);
    // State qui passe à true quand on comment
    const [comment, setComment] = useState(data.isComment);

    // on coupe la description à 80 char
    if (data.desc.length > 80) {
      data.desc = data.desc.slice(0, 80) + ' ...';
    }

    return (
      <View
        key={index}
        style={{
          paddingBottom: 10,
          borderBottomColor: 'gray',
          borderBottomWidth: 0.1,
        }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar
              rounded
              source={data.postProfilePicture} // photo de profil de l'utilisateur
              size={64}
            />
            <View style={styles.subtitleCardHead}>
              <Text style={{ fontSize: 18, marginTop: 10, color: "white", fontWeight: 'bold' }}> {data.postPseudo} </Text>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <FontAwesomeIcon icon={faLocationDot} size={16} color={'#EBEBEB'} />
                <Text style={{ marginLeft: 3, color: "#7E7E7E" }}> {data.city} </Text>
              </View>
            </View>
            <Text style={{ marginTop: 40, color: "#7E7E7E" }}>{data.time}h ago</Text>
          </View>
        </View>
        <View style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Image source={data.postImage} style={{ width: '100%', height: 400, }} />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 15,
          backgroundColor: '#348A55',
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: '#fff' }} size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setLike(!like)}>
              <FontAwesomeIcon
                icon={like ? faHeart : faHeartRegular}
                style={{ color: like ? '#D66D67' : 'white', marginRight: 5 }} size={24}
              />
            </TouchableOpacity>
            <Text style={{ marginRight: 20, color: '#fff', }}>{like ? data.likes + 1 : data.likes}</Text>
            <TouchableOpacity onPress={() => setComment(!comment)}>
              <FontAwesomeIcon
                icon={comment ? faComment : faCommentRegular}
                style={{ color: '#fff', marginRight: 5 }} size={20} />
            </TouchableOpacity>
            <Text style={{ marginRight: 20, color: '#fff', }}>{comment ? data.comments + 1 : data.comments}</Text>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#fff' }} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 0,
          backgroundColor: '#348A55',
        }}>
          <View>
            <View key={index}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>{data.postPseudo}</Text>
              <Text style={{ color: 'white', fontSize: 13, marginBottom: 10 }}
                onPress={() => { }}
              >{data.desc}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  })


  return (
    <View style={{ flex: 1 }}>
      {posts}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  subtitleCardHead: {
    flex: 1,
    marginLeft: 10
  },
  listItem: {
    marginTop: 20,
  }

});

function mapStateToProps(state) {
  return ({ newPostInfo: state.postReducer })
}

export default connect(mapStateToProps, null)(PostComponent);
