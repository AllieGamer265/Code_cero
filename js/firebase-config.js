// ═══════════════════════════════════════════════════════════
//  🔥 Configuración de Firebase (Nube)
//  ═══════════════════════════════════════════════════════════
//  Para activarlo:
//  1. Ve a https://console.firebase.google.com/
//  2. Crea un proyecto → "Build" → "Firestore Database"
//     → "Crear base de datos" → "Modo de prueba"
//  3. ⚙️ "Configuración del proyecto" → "Tus apps" → Web (</>)
//  4. Copia el objeto firebaseConfig y pégalo abajo
//  ═══════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// ═══════════════════════════════════════════════════════════
//  No modifiques nada de aquí en adelante
// ═══════════════════════════════════════════════════════════

const CLOUD_ENABLED = (function() {
  try {
    if (!FIREBASE_CONFIG || FIREBASE_CONFIG.apiKey === "TU_API_KEY") return false;
    firebase.initializeApp(FIREBASE_CONFIG);
    const db = firebase.firestore();
    window.__db = db;
    return true;
  } catch (e) {
    console.warn('Firebase no disponible, usando localStorage:', e);
    return false;
  }
})();

// ─── Funciones cloud ──────────────────────────────────────

async function cloudFindUser(name) {
  const doc = await window.__db.collection('users').doc(name.toLowerCase()).get();
  if (!doc.exists) return null;
  return { name: doc.id, pin: doc.data().pin };
}

async function cloudCreateUser(name, pin) {
  await window.__db.collection('users').doc(name.toLowerCase()).set({
    pin,
    progress: { completed: {}, stars: {} }
  });
}

async function cloudLoadProgress(name) {
  const doc = await window.__db.collection('users').doc(name.toLowerCase()).get();
  if (!doc.exists) return { completed: {}, stars: {} };
  return doc.data().progress || { completed: {}, stars: {} };
}

async function cloudSaveProgress(name, progress) {
  await window.__db.collection('users').doc(name.toLowerCase()).update({ progress });
}
