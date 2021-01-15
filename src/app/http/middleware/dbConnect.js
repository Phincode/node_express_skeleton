var mongoose=require('mongoose');

var connect=(req,res,next)=>{
   mongoose.connect(
       'mongodb+srv://user_12:injYFM6Y5xIw7xOK@cluster0.jh91a.mongodb.net/moneytransfert?retryWrites=true&w=majority',
        { useNewUrlParser: true,
           useUnifiedTopology: true ,
           useFindAndModify: false,
           useCreateIndex: true 
        }
       
   ).then(()=>{
       console.log("connexion à mongoDB reussie!");
   }).catch(()=>{
    console.log("connexion à mongoDB  echouée!");
   });
   next();
}

module.exports=connect;