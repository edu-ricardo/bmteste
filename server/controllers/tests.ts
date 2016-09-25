import {TestsModel, ITests} from '../models/tests';

export class Tests {
    private _test: ITests;

    static ListAll():Promise<ITests[]>{
        return new Promise((resolve, reject) => {
            TestsModel.find().exec((err, tests) => {
                if(err){
                    reject(err);
                }else{
                    resolve(tests);
                }
            });
        });
    }
    
    static FindById(Aid: number):Promise<Tests>{
        return new Promise((resolve, reject) => {
            TestsModel.findById(Aid).exec((err, res) => {
                if(err){
                    reject(err);
                }else{
                    resolve(new Tests(res));
                }
            });
        });
    }

    constructor(ATests: ITests) {  
        this._test = ATests;
    }

    public get nome():string{
        return this._test.nome;
    }

    public get descricao():string{
        return this._test.descricao;
    }

    public save():Promise<boolean>{
        return new Promise((resolve, reject) => {
            var err = this._test.validateSync(['descricao', 'nome']);
            if (err){
                reject(err);
            }else{
                this._test.save((error, test, affectedRows) => {
                    if(error){
                        reject(error);
                    }else{
                        resolve(true);
                    }
                });
            }
        });
    }
}