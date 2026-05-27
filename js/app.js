const ACTIVE_USER_KEY = 'codecero_active_user';
const PROGRESS_PREFIX = 'codecero_progress_';

const lessons = [
  {
    id: 0,
    icon: '🧩',
    number: 'Lección 1',
    title: '¿Qué es un algoritmo?',
    explanation: [
      'Un <strong>algoritmo</strong> es una serie de pasos ordenados para resolver un problema. Como cuando sigues una receta para cocinar o las instrucciones para armar un juguete.',
      'En programación, todo lo que hace una computadora se basa en algoritmos. Piensa en un algoritmo como una "receta" que la máquina sigue al pie de la letra.',
      'Los algoritmos tienen 3 propiedades importantes:',
    ],
    blocks: [
      { text: '1. Tienen un INICIO claro', color: 0 },
      { text: '2. Tienen PASOS ordenados', color: 1 },
      { text: '3. Tienen un FINAL definido', color: 2 },
    ],
    blocksExtra: 'Cada paso debe ser tan claro y simple que hasta una computadora (que no piensa por sí sola) pueda seguirlo.',
    quiz: [
      {
        question: '¿Qué es un algoritmo?',
        options: [
          'Una fórmula matemática complicada',
          'Una serie de pasos ordenados para resolver un problema',
          'Un programa de computadora',
          'Un lenguaje de programación',
        ],
        correct: 1,
      },
      {
        question: '¿Cuál de estos es un ejemplo de algoritmo en la vida real?',
        options: [
          'Soñar mientras duermes',
          'Una receta para hacer un pastel',
          'El color de tu camisa',
          'Escuchar música',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 1,
    icon: '📋',
    number: 'Lección 2',
    title: 'Secuencias — El orden importa',
    explanation: [
      'En un algoritmo, el <strong>orden de los pasos</strong> es fundamental. Si cambias el orden, ¡puedes obtener un resultado diferente o que algo salga mal!',
      'Por ejemplo: para construir una torre de bloques, primero pones la base, luego las paredes, y por último el techo. Si pones el techo antes que las paredes, ¡la torre se cae! El orden importa.',
      'En programación, la computadora ejecuta las instrucciones <strong>una por una, en el orden exacto</strong> en que se las das.',
    ],
    blocks: [
      { text: '1. Colocar la BASE', color: 3 },
      { text: '2. Poner las PAREDES', color: 0 },
      { text: '3. Colocar el TECHO', color: 1 },
      { text: '4. ¡Torre terminada! 🏗️', color: 2 },
    ],
    blocksExtra: 'Si pusieras el paso 3 (techo) antes del paso 2 (paredes), la torre no se sostendría. El orden de los pasos es clave en todo algoritmo.',
    quiz: [
      {
        question: '¿Qué pasa si cambias el orden de los pasos en un algoritmo?',
        options: [
          'Nada, el orden no importa',
          'La computadora lo ordena sola',
          'Puede dar un resultado diferente o incorrecto',
          'El algoritmo se borra',
        ],
        correct: 2,
      },
      {
        question: '¿Cómo ejecuta una computadora las instrucciones?',
        options: [
          'Todas al mismo tiempo',
          'Una por una, en orden',
          'Las que le parecen más fáciles primero',
          'En orden aleatorio',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 2,
    icon: '⚡',
    number: 'Lección 3',
    title: 'Decisiones — Si... entonces...',
    explanation: [
      'Muchas veces necesitamos que el programa <strong>tome decisiones</strong> dependiendo de lo que sucede. Esto se hace con condiciones: "SI pasa esto, ENTONCES haz aquello".',
      'En la vida real: SI llueve, ENTONCES llevo paraguas. SI no llueve, ENTONCES no lo llevo.',
      'Las condiciones siempre son preguntas de <strong>sí o no</strong> (verdadero o falso). La computadora revisa la condición y elige qué camino seguir.',
    ],
    blocks: [
      { text: '❓ SI llueve →', color: 3, isCondition: true },
      { text: '  ✅ ENTONCES lleva paraguas', color: 1 },
      { text: '❌ SI NO →', color: 2, isCondition: true },
      { text: '  ☀️ ENTONCES no llevas nada', color: 0 },
    ],
    blocksExtra: 'Esto se llama "condicional" y permite que el programa se comporte diferente según la situación.',
    quiz: [
      {
        question: '¿Qué hace una estructura "SI... ENTONCES"?',
        options: [
          'Repite algo varias veces',
          'Toma una decisión según una condición',
          'Guarda datos en la memoria',
          'Muestra un mensaje en pantalla',
        ],
        correct: 1,
      },
      {
        question: '¿Qué tipo de respuesta necesita una condición?',
        options: [
          'Un número',
          'Una palabra',
          'Verdadero o Falso (Sí o No)',
          'Un color',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 3,
    icon: '🔄',
    number: 'Lección 4',
    title: 'Bucles — Repetir sin cansarse',
    explanation: [
      'Los <strong>bucles</strong> (también llamados ciclos o repeticiones) sirven para hacer algo varias veces sin tener que escribir el mismo paso muchas veces.',
      'En la vida real: cuando cepillas tus dientes, repites el movimiento de cepillado muchas veces. O cuando caminas, repites el paso de "levantar un pie y ponerlo adelante".',
      'Los bucles tienen dos partes: <strong>cuántas veces</strong> repetir y <strong>qué</strong> se repite.',
    ],
    blocks: [
      { text: '🔄 REPETIR 3 veces:', color: 4, isLoop: true },
      { text: '  1. Levantar un pie', color: 0, sub: 'paso a repetir' },
      { text: '  2. Moverlo adelante', color: 1, sub: 'paso a repetir' },
      { text: '  3. Bajarlo', color: 2, sub: 'paso a repetir' },
      { text: '← Fin de la repetición', color: 4, isLoop: true },
    ],
    blocksExtra: 'Los bucles ahorran muchísimo trabajo. Imagina escribir "camina 1 paso" 1000 veces... ¡mejor usa un bucle!',
    quiz: [
      {
        question: '¿Para qué sirve un bucle?',
        options: [
          'Para tomar decisiones',
          'Para repetir acciones varias veces',
          'Para guardar información',
          'Para borrar datos',
        ],
        correct: 1,
      },
      {
        question: 'Si tienes que dibujar 100 cuadrados, ¿qué es mejor?',
        options: [
          'Escribir "dibuja cuadrado" 100 veces',
          'Usar un bucle que repita "dibuja cuadrado" 100 veces',
          'Dibujarlos uno por uno a mano',
          'No dibujarlos',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 4,
    icon: '📦',
    number: 'Lección 5',
    title: 'Patrones y Funciones',
    explanation: [
      'Cuando notas que algo se repite mucho, puedes <strong>agrupar esos pasos</strong> en un solo bloque con nombre. Eso se llama <strong>función</strong> (o procedimiento).',
      'Es como crear un "super-paso" que incluye muchos pasos pequeños. Por ejemplo, "cepillarse los dientes" incluye: tomar el cepillo, poner pasta, cepillar, enjuagar, guardar.',
      'Las funciones hacen que los programas sean más ordenados, fáciles de entender, y evitan repetir código.',
    ],
    blocks: [
      { text: '📦 FUNCIÓN: Saludar', color: 5, isFunc: true },
      { text: '  paso 1: Decir "Hola"', color: 0, sub: 'dentro de la función' },
      { text: '  paso 2: Preguntar "¿Cómo estás?"', color: 1, sub: 'dentro de la función' },
      { text: '  paso 3: Despedirse', color: 2, sub: 'dentro de la función' },
      { text: '← Fin de función', color: 5, isFunc: true },
      { text: '', isEmpty: true },
      { text: '▶️ Ahora solo usas: "Saludar()"', color: 3 },
    ],
    blocksExtra: 'Las funciones son como tus propias "recetas". Las creas una vez y las usas cuando quieras.',
    quiz: [
      {
        question: '¿Para qué sirve una función?',
        options: [
          'Para hacer el código más complicado',
          'Para agrupar pasos y reutilizarlos',
          'Para borrar variables',
          'Para hacer dibujos',
        ],
        correct: 1,
      },
      {
        question: '¿Cuál es una ventaja de usar funciones?',
        options: [
          'El programa corre más lento',
          'El código es más ordenado y fácil de entender',
          'Ocupa más espacio',
          'No se necesita saber programar',
        ],
        correct: 1,
      },
    ],
  },
];

// Estado
let state = {
  currentLesson: 0,
  currentUser: null,
  progress: { completed: {}, stars: {} },
};

function getUserKey(user) {
  return PROGRESS_PREFIX + user.toLowerCase().trim();
}

function loadProgressFor(user) {
  try {
    const key = getUserKey(user);
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { completed: {}, stars: {} };
}

function saveProgress() {
  if (!state.currentUser) return;
  const key = getUserKey(state.currentUser);
  localStorage.setItem(key, JSON.stringify(state.progress));
}

function setCurrentUser(name) {
  state.currentUser = name;
  localStorage.setItem(ACTIVE_USER_KEY, name);
  state.progress = loadProgressFor(name);
  state.currentLesson = 0;
}

function getStars(lessonId) {
  return state.progress.stars[lessonId] || 0;
}

function isCompleted(lessonId) {
  return !!state.progress.completed[lessonId];
}

function getTotalStars() {
  let total = 0;
  for (const k in state.progress.stars) total += state.progress.stars[k];
  return total;
}

function getOverallProgress() {
  let completed = 0;
  for (let i = 0; i < lessons.length; i++) {
    if (isCompleted(i)) completed++;
  }
  return lessons.length > 0 ? Math.round((completed / lessons.length) * 100) : 0;
}

// Render
function renderLesson(lessonId) {
  const lesson = lessons[lessonId];
  const container = document.getElementById('lessonContent');

  container.innerHTML = '';
  container.className = 'lesson-content-animate';

  // Header
  const header = document.createElement('div');
  header.className = 'lesson-header';
  header.innerHTML = `
    <div class="lesson-number">${lesson.number}</div>
    <div class="lesson-title">${lesson.icon} ${lesson.title}</div>
  `;
  container.appendChild(header);

  // Explanation
  const expl = document.createElement('div');
  expl.className = 'lesson-explanation';
  expl.innerHTML = lesson.explanation.map(p => `<p>${p}</p>`).join('');
  container.appendChild(expl);

  // Blocks visual
  if (lesson.blocks && lesson.blocks.length > 0) {
    const blockDisplay = document.createElement('div');
    blockDisplay.className = 'block-display';

    lesson.blocks.forEach((b, i) => {
      if (b.isEmpty) {
        const spacer = document.createElement('div');
        spacer.style.height = '8px';
        blockDisplay.appendChild(spacer);
        return;
      }

      const block = document.createElement('div');
      const colorClass = `block-color-${b.color}`;
      const typeClass = b.isCondition ? 'block-condition' : b.isLoop ? 'block-loop' : b.isFunc ? 'block-func' : '';
      block.className = `block ${colorClass} ${typeClass} block-animate`;
      block.style.animationDelay = `${i * 0.1}s`;
      block.innerHTML = b.text;

      if (b.sub) {
        const sub = document.createElement('div');
        sub.className = 'block-sub';
        sub.textContent = b.sub;
        block.appendChild(sub);
      }

      blockDisplay.appendChild(block);
    });

    container.appendChild(blockDisplay);
  }

  if (lesson.blocksExtra) {
    const extra = document.createElement('p');
    extra.style.cssText = 'font-style: italic; color: var(--text-secondary); margin-top: 12px; font-size: 14px;';
    extra.textContent = lesson.blocksExtra;
    container.appendChild(extra);
  }

  // Quiz
  renderQuiz(container, lessonId);
}

function renderQuiz(container, lessonId) {
  const lesson = lessons[lessonId];
  if (!lesson.quiz || lesson.quiz.length === 0) return;

  const section = document.createElement('div');
  section.className = 'quiz-section';
  section.innerHTML = '<h3>🧠 ¿Lo entendiste?</h3>';

  let submitted = false;

  lesson.quiz.forEach((q, qi) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';
    qDiv.dataset.questionIndex = qi;

    const qP = document.createElement('p');
    qP.textContent = `${qi + 1}. ${q.question}`;
    qDiv.appendChild(qP);

    const optsDiv = document.createElement('div');
    optsDiv.className = 'quiz-options';

    q.options.forEach((opt, oi) => {
      const label = document.createElement('label');
      label.className = 'quiz-option';
      label.dataset.optionIndex = oi;

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `q_${qi}`;
      radio.value = oi;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(' ' + opt));

      label.addEventListener('click', () => {
        if (submitted) return;
        optsDiv.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
        label.classList.add('selected');
        radio.checked = true;
      });

      optsDiv.appendChild(label);
    });

    qDiv.appendChild(optsDiv);
    section.appendChild(qDiv);
  });

  const submitBtn = document.createElement('button');
  submitBtn.className = 'btn btn-primary quiz-submit';
  submitBtn.textContent = '✅ Revisar respuestas';
  submitBtn.addEventListener('click', () => handleQuizSubmit(lessonId, submitBtn));
  section.appendChild(submitBtn);

  container.appendChild(section);
}

function handleQuizSubmit(lessonId, btn) {
  const lesson = lessons[lessonId];
  const container = document.getElementById('lessonContent');
  const questionDivs = container.querySelectorAll('.quiz-question');

  let correctCount = 0;

  questionDivs.forEach((qDiv, qi) => {
    const q = lesson.quiz[qi];
    const selected = qDiv.querySelector('input[type="radio"]:checked');
    const options = qDiv.querySelectorAll('.quiz-option');

    options.forEach(o => o.classList.add('disabled'));

    let isCorrect = false;

    if (selected) {
      const val = parseInt(selected.value);
      if (val === q.correct) {
        correctCount++;
        isCorrect = true;
      }
      options.forEach((o, oi) => {
        if (oi === val && oi === q.correct) {
          o.classList.add('correct');
        } else if (oi === val && oi !== q.correct) {
          o.classList.add('incorrect');
        } else if (oi === q.correct) {
          o.classList.add('correct');
        }
      });
    } else {
      // No respondió
      options.forEach((o, oi) => {
        if (oi === q.correct) o.classList.add('correct');
      });
    }
  });

  btn.disabled = true;
  btn.textContent = '✅ Revisado';

  // Calcular estrellas
  const total = lesson.quiz.length;
  let stars = 0;
  if (total > 0) {
    const ratio = correctCount / total;
    if (ratio >= 0.9) stars = 3;
    else if (ratio >= 0.5) stars = 2;
    else stars = 1;
  }

  // Actualizar progreso: solo guardar si es mejor que antes
  const prevStars = getStars(lessonId);
  if (stars > prevStars) {
    state.progress.stars[lessonId] = stars;
  }
  state.progress.completed[lessonId] = true;
  saveProgress();

  updateUI();

  // Mostrar modal
  showResultModal(stars, lessonId, correctCount, total);
}

function showResultModal(stars, lessonId, correct, total) {
  const modal = document.getElementById('resultModal');
  const title = document.getElementById('resultTitle');
  const starDisplay = document.getElementById('resultStars');
  const msg = document.getElementById('resultMessage');

  const lesson = lessons[lessonId];
  const nextLesson = lessonId + 1;
  const hasNext = nextLesson < lessons.length;

  const starIcons = [];
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    if (i < stars) {
      span.textContent = '★';
      span.className = 'star-pop';
      span.style.animationDelay = `${i * 0.2}s`;
    } else {
      span.textContent = '★';
      span.className = 'star-empty';
    }
    starIcons.push(span);
  }

  starDisplay.innerHTML = '';
  starIcons.forEach(s => starDisplay.appendChild(s));

  if (stars === 3) {
    title.textContent = '🎉 ¡Perfecto!';
    msg.textContent = `Respondiste ${correct} de ${total} correctamente. ¡Eres un crack!`;
  } else if (stars === 2) {
    title.textContent = '👏 ¡Bien hecho!';
    msg.textContent = `Respondiste ${correct} de ${total} correctamente. Puedes intentar de nuevo para mejorar.`;
  } else {
    title.textContent = '💪 ¡Sigue intentando!';
    msg.textContent = `Respondiste ${correct} de ${total} correctamente. Repasa la lección y vuelve a intentarlo.`;
  }

  const continueBtn = document.getElementById('resultContinueBtn');
  const retryBtn = document.getElementById('resultRetryBtn');

  if (hasNext) {
    continueBtn.textContent = 'Siguiente lección →';
    continueBtn.onclick = () => {
      modal.classList.add('hidden');
      goToLesson(lessonId + 1);
    };
  } else {
    continueBtn.textContent = '🏠 Ver todas las lecciones';
    continueBtn.onclick = () => {
      modal.classList.add('hidden');
      showLessonSelector();
    };
  }

  retryBtn.onclick = () => {
    modal.classList.add('hidden');
    renderLesson(lessonId);
  };

  modal.classList.remove('hidden');
}

function goToLesson(id) {
  state.currentLesson = id;
  renderLesson(id);
  updateUI();
  document.getElementById('lessonSelector').scrollIntoView({ behavior: 'smooth' });
}

function updateUI() {
  const progress = getOverallProgress();
  document.getElementById('progressBar').style.width = progress + '%';
  document.getElementById('starCount').textContent = `★ ${getTotalStars()}`;
  document.getElementById('levelDisplay').textContent = `Nivel ${Math.min(Math.floor(getTotalStars() / 2) + 1, 10)}`;

  // Nav buttons
  document.getElementById('prevBtn').disabled = state.currentLesson === 0;
  document.getElementById('nextBtn').disabled = state.currentLesson >= lessons.length - 1;

  // Lesson list
  renderLessonList();
}

function renderLessonList() {
  const list = document.getElementById('lessonList');
  list.innerHTML = '';

  lessons.forEach((l, i) => {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    if (isCompleted(i)) card.classList.add('completed');
    if (i === state.currentLesson) card.classList.add('active');

    const s = getStars(i);
    const starStr = s > 0 ? '★'.repeat(s) + '☆'.repeat(3 - s) : '☆☆☆';

    card.innerHTML = `
      <div class="lesson-card-icon">${l.icon}</div>
      <div class="lesson-card-title">${l.title}</div>
      <div class="lesson-card-stars">${starStr}</div>
    `;

    card.addEventListener('click', () => {
      state.currentLesson = i;
      renderLesson(i);
      updateUI();
      document.getElementById('lessonContent').scrollIntoView({ behavior: 'smooth' });
    });

    list.appendChild(card);
  });
}

function showLessonSelector() {
  document.getElementById('lessonView').scrollIntoView({ behavior: 'smooth' });
}

// Login / Auth
function getUsers() {
  try {
    const raw = localStorage.getItem('codecero_users');
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveUsers(users) {
  localStorage.setItem('codecero_users', JSON.stringify(users));
}

function hashPin(pin) {
  let h = 0;
  for (let i = 0; i < pin.length; i++) {
    const c = pin.charCodeAt(i);
    h = ((h << 5) - h) + c;
    h |= 0;
  }
  return 'p' + Math.abs(h).toString(36);
}

function showLogin() {
  const modal = document.getElementById('loginModal');
  modal.classList.remove('hidden');

  document.getElementById('loginNameInput').value = '';
  document.getElementById('loginPinInput').value = '';
  document.getElementById('registerNameInput').value = '';
  document.getElementById('registerPinInput').value = '';
  document.getElementById('registerPinConfirmInput').value = '';
  document.getElementById('loginError').classList.add('hidden');
  document.getElementById('registerError').classList.add('hidden');

  switchLoginTab('login');
}

function switchLoginTab(tab) {
  const loginPanel = document.getElementById('loginPanel');
  const registerPanel = document.getElementById('registerPanel');
  const tabLogin = document.getElementById('tabLogin');
  const tabRegister = document.getElementById('tabRegister');

  if (tab === 'login') {
    loginPanel.classList.remove('hidden');
    registerPanel.classList.add('hidden');
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    setTimeout(() => document.getElementById('loginNameInput').focus(), 100);
  } else {
    loginPanel.classList.add('hidden');
    registerPanel.classList.remove('hidden');
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');
    setTimeout(() => document.getElementById('registerNameInput').focus(), 100);
  }
}

function doLogin() {
  const name = document.getElementById('loginNameInput').value.trim();
  const pin = document.getElementById('loginPinInput').value.trim();
  const errorEl = document.getElementById('loginError');

  if (!name || !pin) {
    errorEl.textContent = '❌ Completa todos los campos';
    errorEl.classList.remove('hidden');
    return;
  }

  const users = getUsers();
  const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

  if (!user || user.pin !== hashPin(pin)) {
    errorEl.textContent = '❌ Usuario o PIN incorrecto';
    errorEl.classList.remove('hidden');
    return;
  }

  setCurrentUser(user.name);
  document.getElementById('loginModal').classList.add('hidden');
  startApp();
}

function doRegister() {
  const name = document.getElementById('registerNameInput').value.trim();
  const pin = document.getElementById('registerPinInput').value.trim();
  const confirm = document.getElementById('registerPinConfirmInput').value.trim();
  const errorEl = document.getElementById('registerError');

  if (!name || !pin || !confirm) {
    errorEl.textContent = '❌ Completa todos los campos';
    errorEl.classList.remove('hidden');
    return;
  }

  if (name.length < 2) {
    errorEl.textContent = '❌ El usuario debe tener al menos 2 caracteres';
    errorEl.classList.remove('hidden');
    return;
  }

  if (!/^\d{4,6}$/.test(pin)) {
    errorEl.textContent = '❌ El PIN debe ser de 4 a 6 dígitos';
    errorEl.classList.remove('hidden');
    return;
  }

  if (pin !== confirm) {
    errorEl.textContent = '❌ Los PIN no coinciden';
    errorEl.classList.remove('hidden');
    return;
  }

  const users = getUsers();
  if (users.some(u => u.name.toLowerCase() === name.toLowerCase())) {
    errorEl.textContent = '❌ Ese usuario ya existe';
    errorEl.classList.remove('hidden');
    return;
  }

  users.push({ name, pin: hashPin(pin) });
  saveUsers(users);

  setCurrentUser(name);
  document.getElementById('loginModal').classList.add('hidden');
  startApp();
}

function startApp() {
  document.getElementById('userDisplay').textContent = '👤 ' + state.currentUser;
  renderLesson(0);
  updateUI();
}

function initAuth() {
  // Tabs
  document.getElementById('tabLogin').addEventListener('click', () => switchLoginTab('login'));
  document.getElementById('tabRegister').addEventListener('click', () => switchLoginTab('register'));

  // Login form
  document.getElementById('loginBtn').addEventListener('click', doLogin);
  document.getElementById('loginPinInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });

  // Register form
  document.getElementById('registerBtn').addEventListener('click', doRegister);
  document.getElementById('registerPinConfirmInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') doRegister(); });

  // Switch user
  document.getElementById('switchUserBtn').addEventListener('click', () => showLogin());

  // Close modal on backdrop click
  document.getElementById('loginModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      // Don't close if logged in already, only if they want to switch
    }
  });
}

// Dark mode
function initDarkMode() {
  const toggle = document.getElementById('darkToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('codecero_theme');

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('codecero_theme', 'light');
      toggle.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('codecero_theme', 'dark');
      toggle.textContent = '☀️';
    }
  });
}

// Navigation
function initNav() {
  document.getElementById('prevBtn').addEventListener('click', () => {
    if (state.currentLesson > 0) goToLesson(state.currentLesson - 1);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (state.currentLesson < lessons.length - 1) goToLesson(state.currentLesson + 1);
  });
}

// Init
function init() {
  initDarkMode();
  initNav();
  initAuth();

  const savedUser = localStorage.getItem(ACTIVE_USER_KEY);
  const users = getUsers();
  if (savedUser && users.some(u => u.name === savedUser)) {
    setCurrentUser(savedUser);
    startApp();
  } else {
    showLogin();
  }
}

document.addEventListener('DOMContentLoaded', init);
