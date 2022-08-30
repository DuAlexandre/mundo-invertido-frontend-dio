import app from "./app.js";
import {getFirestore, collection, addDoc, getDocs} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeClub(subscription) {
    const dataBase = getFirestore(app)
    const hellfireClubCollection = collection(dataBase, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubCollection, subscription)
    return docRef.id
}

export async function getHellfireClubSubscription() {
    const dataBase = getFirestore(app);
    const hellfireClubCollection = collection(dataBase, 'hellfire-clube');
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection)
    const subscriptions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}