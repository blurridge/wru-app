import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const linkData = [];
export const getLinks = async () => {
  const querySnapshot = await getDocs(query(collection(db, "links"), orderBy("lastUpdated", "desc")));
  querySnapshot.forEach((doc) => {
    linkData.push({ ...doc.data(), id: doc.id });
  });
  return linkData;
};
