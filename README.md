# Log-Http

This is a powerful logger for services.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install and start the server.

```sh
$ node install log-http
$ node run start
```

# Features!

  - Logger success
  - Logger warning
  - Mark init service
  - Mark end service
  - Reponse Services
  - Reponde middleware service 
  
 # Examples!

```javascript
var jsonTest= {
    "Example" : "Hello"

}
LogHttp.beggin();
LogHttp.end();
LogHttp.success(`Ok`);
LogHttp.fail('Wrong');
LogHttp.request(jsonTest);
LogHttp.reponseService(200,'localhost:8080/getCar',jsonTest,jsonTest,'Prueba de Titulo');
LogHttp.reponseSuccess(200,jsonTest);
  
```

![image](https://drive.google.com/uc?export=view&id=1jMqJmqdyHiiHL9kL_Ut3T9ugY0vf4Bk8)