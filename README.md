# 8 BITS BATTLE

Juego de 8 bits para el aula en el que todos luchan contra todos y solo puede quedar uno. El equipo del profesor hace de servidor y los alumnos se conectan por WebSockets desde el navegador.

## Arrancar (equipo del profesor)
1. Doble clic en `INICIAR.bat` (o ejecuta `npm install` y después `npm start`).
2. Se abre `http://localhost:3000`: es el **panel del profesor**. Tu IP sale arriba a la derecha.
3. Los alumnos abren en su navegador `http://TU_IP:3000`, escriben su nombre y pulsan **¡A LUCHAR!**
4. Cuando estén todos, pulsa **EMPEZAR PARTIDA**.

La primera vez, Windows pedirá permiso en el firewall para Node.js: marca **Redes privadas** y acepta.

## Reglas
- 3 vidas y **10 tiros como máximo** por partida.
- A los 25 s la zona roja empieza a cerrarse, y fuera de ella pierdes vida. Así la partida siempre termina, aunque todos se queden sin balas.
- Gana el último que siga vivo. Luego se vuelve a la sala para jugar otra partida.

## Controles
WASD/flechas para moverte · ratón para apuntar · clic o espacio para disparar · M para el sonido

## Ajustes
Están al principio de `server.js`: `MAX_SHOTS`, `MAX_HP`, `SPEED`, `ZONE_DELAY`, `PORT` y el mapa (`MAP`).
## Publicar en Vercel

Vercel sirve la web estática; el servidor de la partida necesita un servicio Node persistente con WebSockets. El archivo `render.yaml` permite crear ese servicio en Render desde este repositorio.

1. En Render, crea un Blueprint desde este repositorio y espera a que el servicio `8bits-battle` termine el despliegue. Copia su URL pública, por ejemplo `https://8bits-battle.onrender.com`.
2. En Vercel, importa el mismo repositorio y define la variable de entorno `GAME_WS_URL` con la URL WebSocket del servicio: `wss://8bits-battle.onrender.com`.
3. Despliega o vuelve a desplegar Vercel. Para abrir el panel del profesor añade `?host=1` a la dirección; los jugadores entran en la URL normal.

Render admite WebSockets y termina TLS delante de la app, por eso la URL pública debe usar `wss://`. El plan gratuito puede dormir tras un periodo sin tráfico y tardará en despertar al recibir conexiones.
