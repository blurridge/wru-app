import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const profileData = [];
export const getProfile = async () => {
  const querySnapshot = await getDocs(collection(db, "profile"));
  querySnapshot.forEach((doc) => {
    profileData.push({ ...doc.data(), id: doc.id });
  });
  return profileData;
};
