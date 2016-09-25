class Database {
    static DB_CONNECTION_STRING: string  = "mongodb://root:1234@ds041516.mlab.com:41516/bmteste"; 
}

import * as Mongoose from 'mongoose' ;

class DataAccess{
    static Instancia: any;
    static Conexao: Mongoose.Connection;

    static connect(){
        if(this.Instancia) return this.Instancia;

        this.Conexao = Mongoose.connection;
        this.Conexao.once('open', () => {
            console.log('Conectado ao Mongodb em '+ Database.DB_CONNECTION_STRING);
        });

        this.Instancia = Mongoose.connect(Database.DB_CONNECTION_STRING);
        return this.Instancia;
    }
}

DataAccess.connect();

export = DataAccess;