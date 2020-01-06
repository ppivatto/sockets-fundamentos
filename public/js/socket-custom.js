var socket = io();

// ON: escuchar información
socket.on('connect', function() {
    console.log('Conectado al SERVIDOR >>', )
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor', )
});

// EMIT: Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp)
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: >>', mensaje)
});