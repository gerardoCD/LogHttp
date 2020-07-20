module.exports = class LogHttp {

    static success(log) {

        console.log('\x1b[36m%s\x1b[0m', log)
    }
    static fail(log){
        console.log('\x1b[31m', log)
    }
    static reponseService(status, endpoint, request,  reponse,  name){

        var requestString = JSON.stringify(request);
        var reponseString = JSON.stringify(reponse);

        console.log("\x1b[32m", '');
        console.log("\x1b[32m", '----------------------------------\n');
        console.log("\x1b[32m", `Name Service : ${name}\n`);
        console.log("\x1b[32m", `Path : ${endpoint}\n`);
        console.log("\x1b[32m", `Status  : ${status} \n`);
        console.log("\x1b[32m", `Request  : ${requestString} \n`);
        console.log("\x1b[32m", `Reponse  : ${reponseString}\n`);
        console.log("\x1b[32m", '----------------------------------\n');
        console.log("\x1b[32m", '');

    }
    static request (log){
        console.log('\x1b[36m%s\x1b[0m', '')
        console.log('\x1b[36m%s\x1b[0m', '---------- Request Init ----------\n')
        console.log('\x1b[36m%s\x1b[0m', log)
        console.log('\x1b[36m%s\x1b[0m', '')
        console.log('\x1b[36m%s\x1b[0m', '----------------------------------\n')

    }
    static reponseSuccess(status,reponse){
        var reponseString = JSON.stringify(reponse);
        console.log('\x1b[32m', '')
        console.log('\x1b[32m', '---------- Reponse End ----------\n')
        console.log("\x1b[32m", `Status  : ${status} \n`);
        console.log("\x1b[32m", `Reponse  : ${reponseString}\n`);
        console.log('\x1b[32m', '')
        console.log('\x1b[32m', '----------------------------------\n')
    }
    static reponseFail(status,reponse){
        var reponseString = JSON.stringify(reponse);
        console.log('\x1b[31m', '')
        console.log('\x1b[31m', '---------- Reponse End ----------\n')
        console.log("\x1b[31m", `Status  : ${status} \n`);
        console.log("\x1b[31m", `Reponse  : ${reponseString}\n`);
        console.log('\x1b[31m', '')
        console.log('\x1b[31m', '----------------------------------\n')
    }

    static info(){
        console.log('\x1b[36m%s\x1b[0m', log)
    }

    static warning(log){
        console.log('\x1b[33m', log)
    }
    static beggin(){

        console.log('\x1b[36m%s\x1b[0m', '------------------------------------------------------------ BEGIN SERVICE ------------------------------------------------------------');

    }
    static end () {
        console.log('\x1b[36m%s\x1b[0m', '------------------------------------------------------------  END  SERVICE ------------------------------------------------------------');
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

var jsonTest= {
    "Examole" : "Hello"

}
// LogHttp.success(`OK`);
// LogHttp.fail('Wrong');
// LogHttp.beggin();
// LogHttp.request(jsonTest);
// LogHttp.reponseService(200,'localhost:8080/getCar',jsonTest,jsonTest,'Prueba de Titulo');
// LogHttp.reponseSuccess(200,jsonTest);
// LogHttp.end();
  