import { getAuth } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  // Paste In your own, I'm not stupid
}

let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp()
}

const auth = getAuth();

export { auth };