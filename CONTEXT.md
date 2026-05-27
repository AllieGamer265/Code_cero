# CodeCero — Contexto del Proyecto

## Que es CodeCero
App web educativa para aprender logica de programacion desde cero con bloques visuales. Enfocada en personas que nunca han programado. Usa conceptos basicos (algoritmos, secuencias, condicionales, bucles, funciones) explicados con bloques de colores y ejercicios de opcion multiple.

## Estado actual
- 5 lecciones funcionando con bloques visuales y quizzes
- Login con usuario + PIN (guardado en localStorage o Firebase)
- Firebase Firestore conectado para datos en la nube
- Sistema de estrellas (1-3 por leccion) y niveles
- Modo oscuro
- Perfil de usuario con estadisticas (ganadas, perdidas, estrellas)
- Batallas 1 vs 1 por turnos (reto -> aceptar -> responder -> resultado)
- Sistema de avatares desbloqueables por logros

## Avatares
Archivos en `img/avatars/`:
- avatar_01.jpg - Pokemon (default)
- avatar_02.jpg - imagen del usuario
- avatar_03.jpg - imagen del usuario

Faltan por agregar: avatar_04.jpg en adelante.

Sistema de desbloqueo en `js/app.js` funcion `getUnlockedAvatars()`:
- 0: Novato (default emoji)
- 1-3: imagenes del usuario (default)
- 4: Aprendiz (3 estrellas)
- 5: Curioso (6 estrellas)
- 6: Guerrero (1 batalla ganada)
- 7: Programador (10 estrellas)
- 8: Campeon (3 batallas ganadas)
- 9: Maestro (15 estrellas)
- 10: Leyenda (5 batallas ganadas)
- 11: Dios del Codigo (20 estrellas)

Los ids 1-3 usan archivos de imagen. Los demas usan emoji placeholder. Cuando el usuario haga mas imagenes con IA, se agregan al array `avatars` con `file:` y se mueven a `img/avatars/`.

## Pendiente / Proximo
1. Seguir agregando imagenes de avatar que el usuario hace con IA
2. Mejorar las lecciones (agregar mas, mejorar contenido)
3. Posibles mejoras:
   - Sonidos y efectos
   - Mas juegos educativos (tipo apps-educativas.com)
   - Sistema de logros/medallas
   - Ranking de usuarios

## Firebase
- Proyecto: code-cero
- Firestore Database activado en modo prueba
- Config en `js/firebase-config.js` (funcionando)
- Colecciones: `users`, `challenges`, `battles`

## Ramas de git
- `main` - version estable
- `avatars` - rama actual con sistema de avatares (fusionar a main cuando este listo)

## Como correr
Abrir `index.html` directo en el navegador (no necesita servidor). Para GitHub Pages, configurar en Settings del repo.

## Notas para la IA
- No se pueden ver imagenes. Pedir al usuario que describa o pase URLs.
- El usuario habla español mexicano, informal.
- Usar el nombre "CodeCero" para referirse a la app.
