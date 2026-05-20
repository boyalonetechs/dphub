import { db } from "./database/server";

const checkStatus = async () => {
  const { data, error } = await db.from("status").select("*");

  try {
    if (!data) {
      console.log("Failed to fetch data:", error);
      return false;
    } else {
      setTimeout(() => {
        console.log("Checking the database...");
        setTimeout(() => {
          console.log(data);
        }, 2000);
      }, 3000);
      return data;
    }
  } catch (error) {
    console.error("Unknown Error Occured While trying to get Results:", error);
  }
};


checkStatus();