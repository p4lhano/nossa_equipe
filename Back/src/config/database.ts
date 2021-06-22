import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://AdmUserNossaEquipe:hiper4dmin@nossaequipedb.7pbjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
    console.log("Aplicação conectada ao DataBase_MongoDB");
}).
catch((erro) => {
    console.log(`Erro ao conecnetar: ${erro}`)
});

export{mongoose};