
module.export = {
    connect: function(io, PORT){

        io.on('connection',(socket) => {
            //When a connection request comes in outp tp the server console
            console.log("user connection to port "+ PORT + " : " + socket.id);

            //When a message comes in emit it back to all sockets with the mesage,
            socket.on("message", (message)=>{
                io.emit("message", message);
            })
        });
    }
}