const ACTIVE_USER_KEY = 'codecero_active_user';
const PROGRESS_PREFIX = 'codecero_progress_';

// ─── Avatares ─────────────────────────────────────────
const avatars = [
  { id: 0, name: 'Novato', img: '🐣' },
  { id: 1, name: 'Pokemon', file: 'img/avatars/avatar_01.jpg' },
  { id: 2, name: 'Avatar 2', file: 'img/avatars/avatar_02.jpg' },
  { id: 3, name: 'Avatar 3', file: 'img/avatars/avatar_03.jpg' },
  { id: 4, name: 'Aprendiz', img: '🐱', stars: 3 },
  { id: 5, name: 'Curioso', img: '🦊', stars: 6 },
  { id: 6, name: 'Guerrero', img: '⚔️', wins: 1 },
  { id: 7, name: 'Programador', img: '🧙', stars: 10 },
  { id: 8, name: 'Campeón', img: '🏆', wins: 3 },
  { id: 9, name: 'Maestro', img: '🐉', stars: 15 },
  { id: 10, name: 'Leyenda', img: '👑', wins: 5 },
  { id: 11, name: 'Dios del Código', img: '🌟', stars: 20 },
];

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
  {
    id: 5,
    icon: '🤖',
    number: 'Lección 6',
    title: 'Moviendo al Robot',
    explanation: [
      'Ahora vamos a <strong>programar un robot</strong> para que se mueva por un tablero. Usaremos bloques de instrucciones, como en los videojuegos de programación.',
      'Tu misión: <strong>llevar al robot 🤖 hasta la estrella ⭐</strong> usando los bloques de movimiento. Da clic en los bloques para armar la secuencia, luego presiona ▶ Iniciar.',
      'Cada bloque hace una acción: <strong>avanzar</strong>, <strong>girar</strong> o <strong>retroceder</strong>. El robot ejecuta los pasos uno por uno, en orden. ¡Como un verdadero programa!',
    ],
    interactive: true,
    blocksExtra: 'Pista: para llegar a la estrella necesitas moverte hacia arriba y a la derecha. Combina Avanzar con Girar para cambiar de dirección.',
    quiz: [
      {
        question: '¿En qué orden ejecuta el robot las instrucciones?',
        options: [
          'Todas al mismo tiempo',
          'En orden aleatorio',
          'Una por una, en el orden que las pusiste',
          'De atrás hacia adelante',
        ],
        correct: 2,
      },
      {
        question: 'Si el robot mira hacia arriba y le das "Avanzar", ¿qué pasa?',
        options: [
          'Se mueve hacia la derecha',
          'Se mueve hacia arriba',
          'Gira en su lugar',
          'Se mueve hacia abajo',
        ],
        correct: 1,
      },
    ],
  },
];

// ─── Robot Grid Interactivo ─────────────────────────
const ROBOT_GRID_SIZE = 7;
const ROBOT_START = { x: 0, y: 6 };
const ROBOT_GOAL = { x: 6, y: 0 };

const robotBlockTypes = [
  { id: 'forward', label: 'Avanzar', icon: '⬆️', color: 0 },
  { id: 'turnLeft', label: 'Girar Izq', icon: '↩️', color: 3 },
  { id: 'turnRight', label: 'Girar Der', icon: '↪️', color: 3 },
  { id: 'backward', label: 'Retroceder', icon: '⬇️', color: 1 },
];

let robotState = null;

// Estado
let state = {
  currentLesson: 0,
  currentUser: null,
  progress: { completed: {}, stars: {} },
  profilePhoto: '',
  selectedAvatar: 0,
  unlockedAvatars: [0],
  pendingChallenges: [],
  activeBattles: [],
  _battleUnsub: null,
};

function getUserKey(user) {
  return PROGRESS_PREFIX + user.toLowerCase().trim();
}

async function loadProgressFor(user) {
  if (CLOUD_ENABLED) {
    try { return await cloudLoadProgress(user); } catch {}
    return { completed: {}, stars: {} };
  }
  try {
    const key = getUserKey(user);
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { completed: {}, stars: {} };
}

async function saveProgress() {
  if (!state.currentUser) return;
  if (CLOUD_ENABLED) {
    try { await cloudSaveProgress(state.currentUser, state.progress); } catch {}
    return;
  }
  const key = getUserKey(state.currentUser);
  localStorage.setItem(key, JSON.stringify(state.progress));
}

function getUnlockedAvatars(stars, wins) {
  const unlocked = [];
  avatars.forEach((a, i) => {
    if ((!a.stars || stars >= a.stars) && (!a.wins || wins >= a.wins)) {
      unlocked.push(i);
    }
  });
  return unlocked;
}

async function setCurrentUser(name) {
  if (unsubscribeChallenge) { unsubscribeChallenge(); unsubscribeChallenge = null; }
  if (state._battleUnsub) { state._battleUnsub(); state._battleUnsub = null; }
  state.currentUser = name;
  localStorage.setItem(ACTIVE_USER_KEY, name);
  state.progress = await loadProgressFor(name);
  state.currentLesson = 0;
  state.profilePhoto = '';
  state.pendingChallenges = [];
  state.activeBattles = [];
  state.selectedAvatar = 0;
  state.unlockedAvatars = [0, 1];
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

  // Interactive robot section
  if (lesson.interactive) {
    renderRobotSection(container);
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
function migrateData() {
  const ver = localStorage.getItem('codecero_ver');
  if (ver === '2') return;
  // Limpiar datos de versiones anteriores
  localStorage.removeItem('codecero_users');
  localStorage.removeItem('codecero_active_user');
  localStorage.removeItem('codecero_progress');
  localStorage.setItem('codecero_ver', '2');
}

function getUsers() {
  try {
    migrateData();
    const raw = localStorage.getItem('codecero_users');
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    localStorage.removeItem('codecero_users');
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem('codecero_users', JSON.stringify(users));
}

function showLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = 'flex';

  document.getElementById('loginNameInput').value = '';
  document.getElementById('loginPinInput').value = '';
  document.getElementById('registerNameInput').value = '';
  document.getElementById('registerPinInput').value = '';
  document.getElementById('registerPinConfirmInput').value = '';
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('registerError').style.display = 'none';

  showAuthMenu();
}

function showAuthMenu() {
  document.getElementById('authMenu').style.display = '';
  document.getElementById('loginPanel').style.display = 'none';
  document.getElementById('registerPanel').style.display = 'none';
}

function showLoginForm() {
  document.getElementById('authMenu').style.display = 'none';
  document.getElementById('loginPanel').style.display = '';
  document.getElementById('registerPanel').style.display = 'none';
  document.getElementById('loginError').style.display = 'none';
  setTimeout(() => document.getElementById('loginNameInput').focus(), 100);
}

function showRegisterForm() {
  document.getElementById('authMenu').style.display = 'none';
  document.getElementById('loginPanel').style.display = 'none';
  document.getElementById('registerPanel').style.display = '';
  document.getElementById('registerError').style.display = 'none';
  setTimeout(() => document.getElementById('registerNameInput').focus(), 100);
}

async function doLogin() {
  const name = document.getElementById('loginNameInput').value.trim();
  const pin = document.getElementById('loginPinInput').value.trim();
  const errorEl = document.getElementById('loginError');

  if (!name || !pin) {
    errorEl.textContent = '❌ Completa todos los campos';
    errorEl.style.display = '';
    return;
  }

  let user;
  if (CLOUD_ENABLED) {
    user = await cloudFindUser(name);
  } else {
    const users = getUsers();
    user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
  }

  if (!user || user.pin !== pin) {
    errorEl.textContent = '❌ Usuario o PIN incorrecto';
    errorEl.style.display = '';
    return;
  }

  await setCurrentUser(user.name);
  document.getElementById('loginModal').style.display = 'none';
  startApp();
}

async function doRegister() {
  const name = document.getElementById('registerNameInput').value.trim();
  const pin = document.getElementById('registerPinInput').value.trim();
  const confirm = document.getElementById('registerPinConfirmInput').value.trim();
  const errorEl = document.getElementById('registerError');

  if (!name || !pin || !confirm) {
    errorEl.textContent = '❌ Completa todos los campos';
    errorEl.style.display = '';
    return;
  }

  if (name.length < 2) {
    errorEl.textContent = '❌ El usuario debe tener al menos 2 caracteres';
    errorEl.style.display = '';
    return;
  }

  if (!/^\d{4,6}$/.test(pin)) {
    errorEl.textContent = '❌ El PIN debe ser de 4 a 6 dígitos';
    errorEl.style.display = '';
    return;
  }

  if (pin !== confirm) {
    errorEl.textContent = '❌ Los PIN no coinciden';
    errorEl.style.display = '';
    return;
  }

  if (CLOUD_ENABLED) {
    const exists = await cloudFindUser(name);
    if (exists) {
      errorEl.textContent = '❌ Ese usuario ya existe';
      errorEl.style.display = '';
      return;
    }
    await cloudCreateUser(name, pin);
  } else {
    const users = getUsers();
    if (users.some(u => u.name.toLowerCase() === name.toLowerCase())) {
      errorEl.textContent = '❌ Ese usuario ya existe';
      errorEl.style.display = '';
      return;
    }
    users.push({ name, pin });
    saveUsers(users);
  }

  // Mostrar éxito y llevar al login
  document.getElementById('registerError').style.display = '';
  document.getElementById('registerError').style.color = 'var(--success)';
  document.getElementById('registerError').textContent = '✅ Cuenta creada. Ahora inicia sesión.';

  setTimeout(() => {
    document.getElementById('registerError').style.color = '';
    document.getElementById('loginNameInput').value = name;
    document.getElementById('loginPinInput').value = '';
    document.getElementById('registerNameInput').value = '';
    document.getElementById('registerPinInput').value = '';
    document.getElementById('registerPinConfirmInput').value = '';
    document.getElementById('loginNameInput').value = name;
    showAuthMenu();
  }, 1200);
}

async function startApp() {
  const a = avatars[state.selectedAvatar] || avatars[0];
  const avatarImg = a.file ? `<img src="${a.file}" style="width:20px;height:20px;border-radius:50%;vertical-align:middle;">` : a.img;
  document.getElementById('userDisplay').innerHTML = avatarImg + ' ' + state.currentUser;
  document.getElementById('mainNav').classList.remove('hidden');
  initMainNav();
  showSection('lessons');
  renderLesson(0);
  updateUI();
}

function initAuth() {
  // Menu buttons
  document.getElementById('showLoginBtn').addEventListener('click', showLoginForm);
  document.getElementById('showRegisterBtn').addEventListener('click', showRegisterForm);

  // Back buttons
  document.getElementById('loginBackBtn').addEventListener('click', showAuthMenu);
  document.getElementById('registerBackBtn').addEventListener('click', showAuthMenu);

  // Login form
  document.getElementById('loginBtn').addEventListener('click', doLogin);
  document.getElementById('loginPinInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });

  // Register form
  document.getElementById('registerBtn').addEventListener('click', doRegister);
  document.getElementById('registerPinConfirmInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') doRegister(); });

  // Switch user
  document.getElementById('switchUserBtn').addEventListener('click', () => showLogin());

  // Reset data
  document.getElementById('resetDataBtn').addEventListener('click', () => {
    if (confirm('¿Borrar todos los datos? Se perderán las cuentas y el progreso.')) {
      localStorage.clear();
      location.reload();
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

// ─── Navegación principal ─────────────────────────────
let unsubscribeChallenge = null;

function initMainNav() {
  document.getElementById('navLessons').addEventListener('click', () => showSection('lessons'));
  document.getElementById('navBattles').addEventListener('click', () => showSection('battles'));
  document.getElementById('navProfile').addEventListener('click', () => showSection('profile'));
}

function showSection(section) {
  document.getElementById('navLessons').classList.toggle('active', section === 'lessons');
  document.getElementById('navBattles').classList.toggle('active', section === 'battles');
  document.getElementById('navProfile').classList.toggle('active', section === 'profile');

  document.getElementById('lessonView').style.display = section === 'lessons' ? '' : 'none';
  document.getElementById('lessonSelector').style.display = section === 'lessons' ? '' : 'none';
  document.getElementById('profileSection').style.display = section === 'profile' ? '' : 'none';
  document.getElementById('battleSection').style.display = section === 'battles' ? '' : 'none';

  if (section === 'profile') renderProfile();
  if (section === 'battles') renderBattles();
}

// ─── Perfil ───────────────────────────────────────────
async function renderProfile() {
  const container = document.getElementById('profileContent');
  const user = state.currentUser;
  const progress = state.progress;
  const totalStars = getTotalStars();
  const level = Math.min(Math.floor(totalStars / 2) + 1, 10);

  // Obtener stats desde la nube o localStorage
  let wins = 0, losses = 0, streak = 0;
  if (CLOUD_ENABLED) {
    try {
      const doc = await window.__db.collection('users').doc(user.toLowerCase()).get();
      if (doc.exists) {
        const data = doc.data();
        wins = data.wins || 0;
        losses = data.losses || 0;
        streak = data.streak || 0;
        state.profilePhoto = data.photo || '';
        if (data.avatar != null) state.selectedAvatar = data.avatar;
      }
    } catch {}
  }

  // Desbloquear avatares según logros
  state.unlockedAvatars = getUnlockedAvatars(totalStars, wins);

  let avatarGrid = '<h3 style="margin:20px 0 10px;">🎭 Avatares</h3><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:8px;">';
  avatars.forEach((a, i) => {
    const unlocked = state.unlockedAvatars.includes(i);
    const selected = state.selectedAvatar === i;
    let unlockText = '';
    if (!unlocked) {
      const reqs = [];
      if (a.stars) reqs.push(`⭐ ${a.stars} estrellas`);
      if (a.wins) reqs.push(`🏆 ${a.wins} ganadas`);
      unlockText = reqs.join(' + ');
    }
    const imgHtml = a.file
      ? `<img src="${a.file}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">`
      : `<span style="font-size:32px;">${a.img}</span>`;
    avatarGrid += `
      <div onclick="${unlocked ? `selectAvatar(${i})` : ''}"
        style="background:${selected ? 'var(--primary)' : 'var(--surface2)'};border:2px solid ${selected ? 'var(--primary)' : unlocked ? 'var(--success)' : 'var(--border)'};border-radius:12px;padding:8px;text-align:center;cursor:${unlocked ? 'pointer' : 'default'};opacity:${unlocked ? 1 : 0.4};transition:all 0.2s;">
        ${imgHtml}
        <div style="font-size:10px;margin-top:4px;font-weight:600;color:${selected ? '#fff' : unlocked ? 'var(--success)' : 'var(--text-secondary)'};">${unlocked ? a.name : '🔒'}</div>
        ${unlockText ? `<div style="font-size:8px;color:var(--text-secondary);margin-top:2px;">${unlockText}</div>` : ''}
      </div>
    `;
  });
  avatarGrid += '</div>';

  container.innerHTML = `
    <div class="profile-card">
      <div class="profile-name">${user}</div>
      <div class="profile-level-badge">Nivel ${level}</div>
      <div class="profile-stats">
        <div class="stat-box">
          <div class="stat-value">⭐ ${totalStars}</div>
          <div class="stat-label">Estrellas</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">🏆 ${wins}</div>
          <div class="stat-label">Ganadas</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">💔 ${losses}</div>
          <div class="stat-label">Perdidas</div>
        </div>
      </div>
      ${avatarGrid}
    </div>
  `;
}

function selectAvatar(id) {
  state.selectedAvatar = id;
  const a = avatars[id];
  const imgHtml = a.file ? `<img src="${a.file}" style="width:20px;height:20px;border-radius:50%;vertical-align:middle;">` : a.img;
  document.getElementById('userDisplay').innerHTML = imgHtml + ' ' + state.currentUser;
  if (CLOUD_ENABLED) {
    window.__db.collection('users').doc(state.currentUser.toLowerCase()).update({ avatar: id });
  }
  renderProfile();
}

// ─── Batallas ─────────────────────────────────────────
async function renderBattles() {
  const container = document.getElementById('battleContent');
  const user = state.currentUser;

  if (!CLOUD_ENABLED) {
    container.innerHTML = `
      <div class="battle-menu">
        <p style="color:var(--text-secondary);">⚔️ Las batallas solo funcionan con la nube activada.</p>
        <p style="font-size:13px;color:var(--text-secondary);">Configura Firebase en js/firebase-config.js</p>
      </div>
    `;
    return;
  }

  // Escuchar retos pendientes
  if (unsubscribeChallenge) unsubscribeChallenge();
  unsubscribeChallenge = window.__db.collection('challenges')
    .where('to', '==', user.toLowerCase())
    .where('status', '==', 'pending')
    .onSnapshot(snap => {
      const challenges = [];
      snap.forEach(d => challenges.push({ id: d.id, ...d.data() }));
      state.pendingChallenges = challenges;
      renderBattleUI();
    });

  // Escuchar batallas activas
  if (state._battleUnsub) state._battleUnsub();
  state._battleUnsub = window.__db.collection('battles')
    .where('players', 'array-contains', user.toLowerCase())
    .where('status', 'in', ['active', 'waiting'])
    .onSnapshot(snap => {
      const battles = [];
      snap.forEach(d => battles.push({ id: d.id, ...d.data() }));
      state.activeBattles = battles;
      renderBattleUI();
    });

  renderBattleUI();
}

function renderBattleUI() {
  const container = document.getElementById('battleContent');
  const user = state.currentUser;

  const pendientes = state.pendingChallenges || [];
  const activas = state.activeBattles || [];

  let html = '';

  // Retos pendientes
  if (pendientes.length > 0) {
    html += '<h3 style="margin-bottom:12px;">🔔 Retos pendientes</h3>';
    pendientes.forEach(c => {
      const lesson = lessons[c.lessonId] || { title: 'Desconocida' };
      html += `
        <div class="battle-pending">
          <h3>⚔️ ${c.from} te reta</h3>
          <p>Lección: ${lesson.title}</p>
          <button class="btn btn-primary" onclick="acceptChallenge('${c.id}','${c.from}','${c.lessonId}')">✅ Aceptar</button>
        </div>
      `;
    });
  }

  // Batallas activas
  if (activas.length > 0) {
    html += '<h3 style="margin-bottom:12px;">⚔️ Batallas activas</h3>';
    activas.forEach(b => {
      const isPlayer1 = b.player1 === user.toLowerCase();
      const opponent = isPlayer1 ? b.player2 : b.player1;
      const lesson = lessons[b.lessonId] || { title: 'Desconocida' };
      const myAnswers = isPlayer1 ? (b.answers1 || []) : (b.answers2 || []);
      const myScore = isPlayer1 ? (b.score1 != null ? b.score1 : '?') : (b.score2 != null ? b.score2 : '?');

      if (b.status === 'waiting' || (b.status === 'active' && myAnswers.length === 0)) {
        html += `
          <div class="battle-active">
            <h3>⚔️ Batalla vs ${opponent}</h3>
            <p>Lección: ${lesson.title}</p>
            <button class="btn btn-primary" onclick="enterBattle('${b.id}','${isPlayer1}','${b.lessonId}')">🎯 Responder</button>
          </div>
        `;
      } else if (b.status === 'active' && myAnswers.length > 0) {
        html += `
          <div class="battle-active">
            <h3>⚔️ Batalla vs ${opponent}</h3>
            <p>Lección: ${lesson.title}</p>
            <p style="color:var(--text-secondary);">✅ Ya respondiste. Esperando a ${opponent}...</p>
            <div class="battle-waiting">
              <div class="spinner">⏳</div>
            </div>
          </div>
        `;
      }
    });
  }

  // Botón retar
  html += `
    <div class="battle-menu">
      <h3>Retar a alguien</h3>
      <p style="color:var(--text-secondary);margin-bottom:16px;">Elige una lección y un usuario para retar</p>
      <div style="display:flex;gap:8px;margin-bottom:12px;max-width:400px;margin-left:auto;margin-right:auto;">
        <select id="battleLessonSelect" class="login-input" style="flex:1;">
          ${lessons.map((l, i) => `<option value="${i}">${l.icon} ${l.title}</option>`).join('')}
        </select>
        <button id="showUsersBtn" class="btn btn-primary">Ver usuarios</button>
      </div>
      <div id="battleUserList"></div>
    </div>
  `;

  if (!pendientes.length && !activas.length && !html) {
    html += '<p style="text-align:center;color:var(--text-secondary);">No hay batallas activas.</p>';
  }

  container.innerHTML = html;

  document.getElementById('showUsersBtn')?.addEventListener('click', loadOnlineUsers);
}

async function loadOnlineUsers() {
  const list = document.getElementById('battleUserList');
  list.innerHTML = '<p style="color:var(--text-secondary);">Cargando usuarios...</p>';

  try {
    const snap = await window.__db.collection('users').get();
    const users = [];
    snap.forEach(d => {
      if (d.id !== state.currentUser.toLowerCase()) {
        users.push({ name: d.id, photo: d.data().photo || '' });
      }
    });

    if (users.length === 0) {
      list.innerHTML = '<p style="color:var(--text-secondary);">No hay otros usuarios registrados.</p>';
      return;
    }

    list.innerHTML = '<div class="battle-users-list">' + users.map(u => `
      <div class="battle-user-card" onclick="sendChallenge('${u.name}')">
        <div class="user-avatar">${u.photo ? '<img src="'+u.photo+'" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">' : '👤'}</div>
        <div class="user-name">${u.name}</div>
        <div class="user-status online">● En línea</div>
      </div>
    `).join('') + '</div>';
  } catch {
    list.innerHTML = '<p style="color:var(--text-secondary);">Error al cargar usuarios.</p>';
  }
}

async function sendChallenge(toUser) {
  const lessonId = parseInt(document.getElementById('battleLessonSelect').value);
  const from = state.currentUser.toLowerCase();

  // Verificar que no haya un reto pendiente ya
  const existing = await window.__db.collection('challenges')
    .where('from', '==', from)
    .where('to', '==', toUser.toLowerCase())
    .where('status', '==', 'pending')
    .get();

  if (!existing.empty) {
    alert('Ya tienes un reto pendiente con este usuario.');
    return;
  }

  await window.__db.collection('challenges').add({
    from,
    to: toUser.toLowerCase(),
    lessonId,
    status: 'pending',
    createdAt: Date.now()
  });

  document.getElementById('battleUserList').innerHTML = '<p style="color:var(--success);">✅ Reto enviado a ' + toUser + '</p>';
}

async function acceptChallenge(challengeId, fromUser, lessonId) {
  try {
    const lessonIdNum = parseInt(lessonId);
    const user = state.currentUser.toLowerCase();

    // Crear batalla
    const players = [fromUser.toLowerCase(), user];
    const battleRef = await window.__db.collection('battles').add({
      player1: fromUser.toLowerCase(),
      player2: user,
      players,
      lessonId: lessonIdNum,
      status: 'waiting',
      answers1: [],
      answers2: [],
      score1: null,
      score2: null
    });

    // Marcar reto como aceptado
    await window.__db.collection('challenges').doc(challengeId).update({ status: 'accepted' });

    // Entrar a la batalla
    enterBattle(battleRef.id, false, lessonIdNum);
  } catch (e) {
    alert('Error al aceptar el reto: ' + e.message);
  }
}

let _battleSubmitted = false;

async function enterBattle(battleId, isPlayer1Str, lessonId) {
  const isPlayer1 = isPlayer1Str === 'true' || isPlayer1Str === true;
  const lesson = lessons[parseInt(lessonId)];
  if (!lesson) return;

  _battleSubmitted = false;

  // Marcar como activa si estaba waiting
  await window.__db.collection('battles').doc(battleId).update({ status: 'active' });

  const container = document.getElementById('battleContent');
  container.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-title">⚔️ Batalla — ${lesson.title}</div>
      <p style="color:var(--text-secondary);font-size:14px;">Responde las preguntas para ganar</p>
    </div>
    <div id="battleQuestions"></div>
    <button id="battleSubmitBtn" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:16px;">📤 Enviar respuestas</button>
  `;

  const qContainer = document.getElementById('battleQuestions');
  lesson.quiz.forEach((q, qi) => {
    const div = document.createElement('div');
    div.className = 'battle-question';
    div.innerHTML = `<p>${qi+1}. ${q.question}</p>`;
    const opts = document.createElement('div');
    opts.className = 'quiz-options';
    q.options.forEach((opt, oi) => {
      const label = document.createElement('label');
      label.className = 'quiz-option';
      label.innerHTML = `<input type="radio" name="bq_${qi}" value="${oi}"> ${opt}`;
      label.addEventListener('click', () => {
        opts.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
        label.classList.add('selected');
        label.querySelector('input').checked = true;
      });
      opts.appendChild(label);
    });
    div.appendChild(opts);
    qContainer.appendChild(div);
  });

  document.getElementById('battleSubmitBtn').addEventListener('click', async () => {
    if (_battleSubmitted) return;
    _battleSubmitted = true;

    const answers = [];
    lesson.quiz.forEach((q, qi) => {
      const selected = document.querySelector(`input[name="bq_${qi}"]:checked`);
      answers.push(selected ? parseInt(selected.value) : -1);
    });

    const correctCount = answers.filter((a, i) => a === lesson.quiz[i].correct).length;
    const total = lesson.quiz.length;
    const score = Math.round((correctCount / total) * 100);

    // Obtener datos actuales
    const battleDoc = await window.__db.collection('battles').doc(battleId).get();
    const battle = battleDoc.data();

    const isP1 = battle.player1 === state.currentUser.toLowerCase();
    const updateData = isP1
      ? { answers1: answers, score1: score }
      : { answers2: answers, score2: score };

    await window.__db.collection('battles').doc(battleId).update(updateData);

    // Verificar si ambos respondieron
    const updated = await window.__db.collection('battles').doc(battleId).get();
    const b = updated.data();

    if (b.score1 != null && b.score2 != null) {
      // Batalla completa
      const winner = b.score1 > b.score2 ? b.player1 : b.score2 > b.score1 ? b.player2 : 'draw';
      await window.__db.collection('battles').doc(battleId).update({
        status: 'complete',
        winner
      });

      // Actualizar stats
      const p1Doc = await window.__db.collection('users').doc(b.player1).get();
      const p2Doc = await window.__db.collection('users').doc(b.player2).get();
      const p1Data = p1Doc.data() || {};
      const p2Data = p2Doc.data() || {};

      const winnerName = winner !== 'draw' ? winner : null;
      if (winnerName) {
        await window.__db.collection('users').doc(winnerName).update({
          wins: (winnerName === b.player1 ? (p1Data.wins || 0) : (p2Data.wins || 0)) + 1,
          streak: (winnerName === b.player1 ? (p1Data.streak || 0) : (p2Data.streak || 0)) + 1
        });
        const loserName = winnerName === b.player1 ? b.player2 : b.player1;
        await window.__db.collection('users').doc(loserName).update({
          losses: (loserName === b.player1 ? (p1Data.losses || 0) : (p2Data.losses || 0)) + 1,
          streak: 0
        });
      } else {
        // Empate
        await window.__db.collection('users').doc(b.player1).update({ streak: 0 });
        await window.__db.collection('users').doc(b.player2).update({ streak: 0 });
      }

      showBattleResult(b);
    } else {
      container.innerHTML = `
        <div class="battle-waiting">
          <div class="spinner">⏳</div>
          <h3>¡Respuestas enviadas!</h3>
          <p style="color:var(--text-secondary);">Esperando a que el otro jugador responda...</p>
        </div>
      `;
    }
  });
}

function showBattleResult(battle) {
  const modal = document.getElementById('battleResultModal');
  const title = document.getElementById('battleResultTitle');
  const content = document.getElementById('battleResultContent');
  const user = state.currentUser.toLowerCase();
  const isP1 = battle.player1 === user;

  const myScore = isP1 ? battle.score1 : battle.score2;
  const oppScore = isP1 ? battle.score2 : battle.score1;
  const myName = isP1 ? battle.player1 : battle.player2;
  const oppName = isP1 ? battle.player2 : battle.player1;
  const winner = battle.winner;

  let resultText, myBadge, oppBadge;
  if (winner === 'draw') {
    resultText = '🤝 Empate';
    myBadge = '🤝';
    oppBadge = '🤝';
  } else if (winner === user) {
    resultText = '🎉 ¡Ganaste!';
    myBadge = '🏆';
    oppBadge = '💔';
  } else {
    resultText = '😔 Perdiste';
    myBadge = '💔';
    oppBadge = '🏆';
  }

  title.textContent = `⚔️ ${resultText}`;
  content.innerHTML = `
    <div class="battle-result-card ${winner === user ? 'winner' : 'loser'}">
      <div class="result-avatar">👤</div>
      <div class="result-info">
        <div class="result-name">${myName} (tú)</div>
        <div class="result-score">${myScore}% correcto</div>
      </div>
      <div class="result-badge">${myBadge}</div>
    </div>
    <div class="battle-result-card ${winner === oppName ? 'winner' : 'loser'}">
      <div class="result-avatar">👤</div>
      <div class="result-info">
        <div class="result-name">${oppName}</div>
        <div class="result-score">${oppScore}% correcto</div>
      </div>
      <div class="result-badge">${oppBadge}</div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.getElementById('battleResultOkBtn').onclick = () => {
    modal.classList.add('hidden');
    showSection('battles');
  };
}

// ─── Funciones del Robot Grid ──────────────────────
function initRobotState() {
  robotState = {
    x: ROBOT_START.x,
    y: ROBOT_START.y,
    direction: 0,
    blocks: [],
    isRunning: false,
    isAtGoal: false,
  };
}

function renderRobotSection(container) {
  initRobotState();

  const section = document.createElement('div');
  section.className = 'robot-section';

  section.innerHTML = `
    <h3>🎮 Controla al Robot</h3>
    <div class="robot-grid-container">
      <div class="robot-grid" id="robotGrid"></div>
    </div>
    <div class="robot-info">
      <span>🤖 Posición: (<span id="robotPosX">${ROBOT_START.x}</span>, <span id="robotPosY">${ROBOT_START.y}</span>)</span>
      <span>🎯 Lleva al robot a la ⭐</span>
    </div>
    <div class="robot-palette" id="robotPalette"></div>
    <div class="robot-workspace" id="robotWorkspace">
      <div class="robot-workspace-header">
        <span>📋 Tu secuencia</span>
        <span id="robotStepCount" class="robot-step-count">0 pasos</span>
      </div>
      <div id="robotWorkspaceList" class="robot-workspace-list"></div>
    </div>
    <div class="robot-controls">
      <button class="btn btn-primary" id="robotRunBtn">▶ Iniciar</button>
      <button class="btn btn-secondary" id="robotClearBtn">🗑 Limpiar</button>
      <button class="btn btn-secondary" id="robotResetBtn">🔄 Reiniciar</button>
    </div>
    <div id="robotMessage" class="robot-message"></div>
  `;

  container.appendChild(section);

  renderRobotGrid();
  renderRobotPalette();
  renderRobotWorkspace();

  document.getElementById('robotRunBtn').addEventListener('click', runRobotSequence);
  document.getElementById('robotClearBtn').addEventListener('click', clearRobotBlocks);
  document.getElementById('robotResetBtn').addEventListener('click', resetRobot);
}

function renderRobotGrid() {
  const grid = document.getElementById('robotGrid');
  if (!grid) return;
  grid.innerHTML = '';

  for (let y = 0; y < ROBOT_GRID_SIZE; y++) {
    for (let x = 0; x < ROBOT_GRID_SIZE; x++) {
      const cell = document.createElement('div');
      cell.className = 'robot-cell';

      if (x === robotState.x && y === robotState.y) {
        cell.classList.add('robot');
        const dirArrows = ['⬆️', '➡️', '⬇️', '⬅️'];
        cell.innerHTML = `
          <span class="robot-emoji">🤖</span>
          <span class="robot-dir">${dirArrows[robotState.direction]}</span>
        `;
      } else if (x === ROBOT_GOAL.x && y === ROBOT_GOAL.y) {
        cell.classList.add('goal');
        cell.textContent = '⭐';
      }

      grid.appendChild(cell);
    }
  }
}

function renderRobotPalette() {
  const palette = document.getElementById('robotPalette');
  if (!palette) return;
  palette.innerHTML = '';

  robotBlockTypes.forEach(type => {
    const btn = document.createElement('button');
    btn.className = `robot-palette-block block-color-${type.color}`;
    btn.innerHTML = `${type.icon} ${type.label}`;
    btn.addEventListener('click', () => addRobotBlock(type.id));
    palette.appendChild(btn);
  });
}

function renderRobotWorkspace() {
  const list = document.getElementById('robotWorkspaceList');
  const count = document.getElementById('robotStepCount');
  if (!list) return;
  list.innerHTML = '';

  if (robotState.blocks.length === 0) {
    list.innerHTML = '<div class="robot-workspace-empty">⬅️ Da clic en los bloques de arriba para armar tu secuencia</div>';
    if (count) count.textContent = '0 pasos';
    return;
  }

  if (count) count.textContent = `${robotState.blocks.length} pasos`;

  robotState.blocks.forEach((blockId, i) => {
    const type = robotBlockTypes.find(t => t.id === blockId);
    if (!type) return;
    const div = document.createElement('div');
    div.className = `robot-workspace-block block-color-${type.color}`;
    div.dataset.index = i;
    div.innerHTML = `
      <span class="ws-step">${i + 1}.</span>
      <span class="robot-ws-icon">${type.icon}</span>
      <span>${type.label}</span>
      <button class="remove-btn" data-index="${i}" title="Quitar">✕</button>
    `;

    div.querySelector('.remove-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      removeRobotBlock(i);
    });

    list.appendChild(div);
  });
}

function addRobotBlock(typeId) {
  if (robotState.isRunning) return;
  robotState.blocks.push(typeId);
  renderRobotWorkspace();
  showRobotMessage('', '');
}

function removeRobotBlock(index) {
  if (robotState.isRunning) return;
  robotState.blocks.splice(index, 1);
  renderRobotWorkspace();
}

function clearRobotBlocks() {
  if (robotState.isRunning) return;
  robotState.blocks = [];
  resetRobotPosition();
  renderRobotWorkspace();
  renderRobotGrid();
  updateRobotPosition();
  showRobotMessage('', '');
}

function resetRobot() {
  if (robotState.isRunning) return;
  resetRobotPosition();
  renderRobotGrid();
  updateRobotPosition();
  showRobotMessage('🔄 Robot reiniciado', 'info');
  setTimeout(() => showRobotMessage('', ''), 1500);
}

function resetRobotPosition() {
  robotState.x = ROBOT_START.x;
  robotState.y = ROBOT_START.y;
  robotState.direction = 0;
  robotState.isAtGoal = false;
}

function updateRobotPosition() {
  const posX = document.getElementById('robotPosX');
  const posY = document.getElementById('robotPosY');
  if (posX) posX.textContent = robotState.x;
  if (posY) posY.textContent = robotState.y;
}

function moveRobotForward() {
  let newX = robotState.x;
  let newY = robotState.y;
  switch (robotState.direction) {
    case 0: newY--; break;
    case 1: newX++; break;
    case 2: newY++; break;
    case 3: newX--; break;
  }
  if (newX < 0 || newX >= ROBOT_GRID_SIZE || newY < 0 || newY >= ROBOT_GRID_SIZE) {
    showRobotMessage('🚫 ¡El robot chocó! Está en el borde del tablero.', 'fail');
    robotState.isRunning = false;
    return false;
  }
  robotState.x = newX;
  robotState.y = newY;
  return true;
}

function moveRobotBackward() {
  let newX = robotState.x;
  let newY = robotState.y;
  switch (robotState.direction) {
    case 0: newY++; break;
    case 2: newY--; break;
    case 1: newX--; break;
    case 3: newX++; break;
  }
  if (newX < 0 || newX >= ROBOT_GRID_SIZE || newY < 0 || newY >= ROBOT_GRID_SIZE) {
    showRobotMessage('🚫 ¡El robot chocó! Está en el borde del tablero.', 'fail');
    robotState.isRunning = false;
    return false;
  }
  robotState.x = newX;
  robotState.y = newY;
  return true;
}

function turnRobotLeft() {
  robotState.direction = (robotState.direction + 3) % 4;
}

function turnRobotRight() {
  robotState.direction = (robotState.direction + 1) % 4;
}

function highlightWorkspaceBlock(index) {
  const blocks = document.querySelectorAll('.robot-workspace-block');
  blocks.forEach((b, i) => {
    b.classList.toggle('executing', i === index);
  });
}

function clearWorkspaceHighlight() {
  document.querySelectorAll('.robot-workspace-block').forEach(b => b.classList.remove('executing'));
}

function updateRobotControls(enabled) {
  const runBtn = document.getElementById('robotRunBtn');
  const clearBtn = document.getElementById('robotClearBtn');
  const resetBtn = document.getElementById('robotResetBtn');
  const paletteBtns = document.querySelectorAll('.robot-palette-block');
  if (runBtn) runBtn.disabled = !enabled;
  if (clearBtn) clearBtn.disabled = !enabled;
  if (resetBtn) resetBtn.disabled = !enabled;
  paletteBtns.forEach(b => b.disabled = !enabled);
}

function showRobotMessage(msg, type) {
  const el = document.getElementById('robotMessage');
  if (!el) return;
  el.textContent = msg;
  el.className = 'robot-message' + (type ? ' ' + type : '');
}

async function runRobotSequence() {
  if (robotState.isRunning) return;
  if (robotState.blocks.length === 0) {
    showRobotMessage('⬅️ Agrega bloques primero', 'warning');
    return;
  }

  robotState.isRunning = true;
  resetRobotPosition();
  updateRobotControls(false);
  showRobotMessage('▶ Ejecutando...', 'info');
  renderRobotGrid();
  updateRobotPosition();

  for (let i = 0; i < robotState.blocks.length; i++) {
    if (!robotState.isRunning) break;

    const blockId = robotState.blocks[i];
    highlightWorkspaceBlock(i);

    let ok = true;
    switch (blockId) {
      case 'forward': ok = moveRobotForward(); break;
      case 'backward': ok = moveRobotBackward(); break;
      case 'turnLeft': turnRobotLeft(); break;
      case 'turnRight': turnRobotRight(); break;
    }

    if (!ok) break;

    renderRobotGrid();
    updateRobotPosition();

    if (robotState.x === ROBOT_GOAL.x && robotState.y === ROBOT_GOAL.y) {
      robotState.isAtGoal = true;
      showRobotMessage('🎉 ¡Llegaste a la estrella! Bien programado 🚀', 'success');
      break;
    }

    await new Promise(r => setTimeout(r, 500));
  }

  if (robotState.isRunning && !robotState.isAtGoal) {
    showRobotMessage('😅 El robot no llegó a la estrella. ¡Revisa tu secuencia!', 'fail');
  }

  robotState.isRunning = false;
  updateRobotControls(true);
  clearWorkspaceHighlight();
}

// Init
async function init() {
  initDarkMode();
  initNav();
  initAuth();

  // Ocultar paneles inicialmente
  document.getElementById('authMenu').style.display = '';
  document.getElementById('loginPanel').style.display = 'none';
  document.getElementById('registerPanel').style.display = 'none';
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('registerError').style.display = 'none';

  const savedUser = localStorage.getItem(ACTIVE_USER_KEY);
  if (savedUser) {
    if (CLOUD_ENABLED) {
      const exists = await cloudFindUser(savedUser);
      if (exists) {
        await setCurrentUser(savedUser);
        startApp();
        return;
      }
    } else {
      const users = getUsers();
      if (users.some(u => u.name === savedUser)) {
        await setCurrentUser(savedUser);
        startApp();
        return;
      }
    }
  }
  showLogin();
}

document.addEventListener('DOMContentLoaded', init);
