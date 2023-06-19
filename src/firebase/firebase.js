import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,
signInWithPopup,createUserWithEmailAndPassword,
signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc,getDoc,deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACNhCMpmWJ39P9cgyIWIXVTFG-dD5VgS8",
  authDomain: "crown-clothing-27d83.firebaseapp.com",
  projectId: "crown-clothing-27d83",
  storageBucket: "crown-clothing-27d83.appspot.com",
  messagingSenderId: "16421546680",
  appId: "1:16421546680:web:ca135c41d201e4e4fe224d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 

export const signUp = (user) =>{
  const {email, password} = user;
  return createUserWithEmailAndPassword(auth, email, password)
  .then((fireBaseUser)=>{
    console.log(fireBaseUser)
    return fireBaseUser
  })
  .catch((err)=>{
    console.log(err)
    return Promise.reject(false)
  })
}

export const signIn=(user)=>{
    const {email, password} = user;
    return signInWithEmailAndPassword(auth, email, password)
    .then((fireBaseUser)=>{
      console.log(fireBaseUser)
      return fireBaseUser
    })
    .catch((err)=>{
      console.log(err)
      return Promise.reject(false)
    })
}

export const signInWithGoogle = ()=>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    })
    return signInWithPopup(auth, provider)
    .then((fireBaseUser)=>{
      console.log(fireBaseUser)
      return fireBaseUser
    })
    .catch((err)=>{
      console.log(err)
      return Promise.reject(false)
    })
}


export const storeUserInFirestore = (user)=>{

   return getDoc(doc(db, "users", user.uid))

   .then((res)=>{

    console.log('GETDOC WORKED',res);

     if(!(res.exists())){

      console.log(user);

      console.log(user.uid);

      const userDataObject = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        time: new Date()
      }

     return setDoc(doc(db, "users", user.uid),userDataObject)

      .then((res)=>{

        console.log('SETDOC WORKED',res)

        return getDoc(doc(db, "users", user.uid))

        .then((res)=>{

          if(res.exists()){

            console.log('GETDOC WORKED',res.data())
            return res.data()
          }
          else{
            console.log('EROOR GETDOC',res)
            return false
          }
        })
        .catch((err)=>{
           console.log('ERROR GETDOC', err)
           return false       
        })
      })
      .catch((err)=>{
        console.log('ERROR SETDOC',err)
        return false
      })
    }
    else{
      console.log('getdoc exists', res.data())
      return res.data()
    }
  })
  .catch((err)=>{
    console.log('ERROR GETDOC', err)
    return false
  })
}

export const deleteUserFromFirestore = (user)=>{
   return deleteDoc(doc(db,"users", user.uid))
  .then((res=>{
    console.log("USER DELETED SUCCESS",res);
    return false
  }))
  .catch((err)=>{
    console.log("USER DELETED ERROR",err);
    return false
  })
}