import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyABxET6MEaAO2Kobp1_RfDSs03RCoeuk3E",
  authDomain: "support-468213.firebaseapp.com",
  projectId: "support-468213",
  storageBucket: "support-468213.firebasestorage.app",
  messagingSenderId: "922386492366",
  appId: "1:922386492366:web:dc28d6fa14e00be603999f"
};

const ALLOWED_DOMAINS = ["tiendanube.com", "nuvemshop.com.br"];

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

document.documentElement.style.visibility = "hidden";

onAuthStateChanged(auth, (user) => {
  if (!user || !user.email) {
    window.location.href = "/login.html";
    return;
  }
  const domain = user.email.split("@")[1];
  if (!ALLOWED_DOMAINS.includes(domain)) {
    auth.signOut().then(() => {
      window.location.href = "/login.html";
    });
    return;
  }
  document.documentElement.style.visibility = "visible";
});
