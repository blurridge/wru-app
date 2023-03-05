import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const linkData = [];
export const getLinks = async () => {
  const querySnapshot = await getDocs(collection(db, "links"));
  querySnapshot.forEach((doc) => {
    linkData.push({ ...doc.data(), id: doc.id });
  });
  return linkData;
};
