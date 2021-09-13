function fatorial (n) {
    if (n < 0) return Promise.reject (" Valor nao pode ser negativo")
    let res = 1
    for (let i = 2; i <= n; i++)
        res *= i
    return Promise.resolve(res)    
}
async function chamadaComAsyncAwait (){
    try{
        const f1 = await fatorial (5)
        console.log(f1)
        const F2 = await fatorial(-1)
        console.log(f2)

    }catch (e){
        console.log("Deu erro (mostrando com o try/catch): " + e)

    }

}

chamadaComAsyncAwait()

// function chamadaComThenECatch(){
//     fatorial(5)
//         .then (res => console.log ("Deu certo: " + res))
//         .catch (erro => console.log ("Erro: " + erro))
//     fatorial (-1)
//         .then(res => console.log ("deu certo:" + res))
//         .catch (erro => console.log ("Erro: " + erro))

// }
// chamadaComThenECatch()

// async function hello (nome) {
//     return `olá, ${nome} `

// }
// const p = hello ('João')

// p.then (texto => console.log (texto))   


// function calculoRapidinho (numero){
//     if (numero >= 0){
//         return Promise.resolve((numero * (numero + 1)) / 2)
        
//     }
//     return Promise.reject("Somente valores positivos, por favor")    
// }
// calculoRapidinho(10).then ((res) => {
//    console.log ( "Resultado obtido: " + res)
// })
// .catch (erro => {
//     console.log("Erro: " + erro)
// })    
// calculoRapidinho(-1).then ((res) => {
//     console.log ( "Resultado obtido: " + res)
//  })
//  .catch (erro => {
//      console.log("Erro: " + erro)

//  })    
//  console.log ("Encerrando o script principal")


// calculoRapidinho (1000). then ((res) => console.log ("res: " + res))




// function calculoDemorado (numero) {
//     return new Promise (function (resolve, reject){
//         let res = 0
//         for (let i = 1; i <= numero; i++)
//         res += i
//         resolve(res)
//     })
// }

// const p = calculoDemorado(1000).then ((res) => { 
// console.log("Resultado: " + res) 
// })
// console.log ("Encerrando a execução do script principal")

// function calculoDemorado (numero){
//     let res = 0
//     for (let i = 1; i <= numero; i++)
//     res += i
//     return res
// }
// console.log (`Soma(10) : ${calculoDemorado (10)}`)
// console.log ("Encerrando o script principal...")


// const fs = require ('fs')
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//     //    console.log('${erro ? erro: conteudo. toString()}')
//     if (erro){
//         console.log("erro: " + erro)
//         }
//     else {
//         console.log ("conteudo lido: " + conteudo.toString())
//         const dobro = +conteudo.toString() * 2
//         const finalizar = function (erro){
//         console.log(`$ {erro ? erro : 'Salvou o dobro com sucesso'}`)

//     }    
//     fs.writeFile('dobro.txt' , dobro.toString(), finalizar)
// }
//     }
// fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo("arquivo.txt")


// const fs = require ('fs')
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         console.log("1 terminou de processar o arquivo....")
//         if(erro) {
//             console.log('erro: ${erro}')
//         }
//         else {
//             console.log (conteudo.toString())
//         }
//     }

// console.log("2 vai ler arquivo")
// fs.readFile(nomeArquivo, exibirConteudo)


// }

// // vamos criar um arquivo.txt no mesmo diretorio
// // e adicionar algum conteudo a ele
// console.log ("3 chamou a funcao abrir arquivo")
// abrirArquivo("arquivo.txt")
// console.log ("4 chamou funcao encerrar")


// function demorada (tempo) {
//     console.log('demora: $ {tempo}')
//     const atualMaisTempo = new Date ().getTime + tempo
//     while( new Date () .getTime() <= atualMaisTempo);
//     const d = 8+4
//     console.log('terminando a demorada $ {tempo} segundos ')
//     return d
// }

// setTimeout(function(){
//     demorada (3000),
//     3000
// })

// setTimeout(function(){
//     demorada (1000),
//     10000

// })




// function demorada (){
//     const atualMais2Segundos =  new Date() .getTime() +2000
//     while (new Date (). getTime () <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3 
// const b = 5 + 9

// setTimeout (
//     function(){
//          const d = demorada()
//          console.log ("d:" + d)
//     },
//     0
// )

// const e = a + b
// console.log ("e: " + e)

// function demorada () { 
//     const atualMais2Segundos = new date () .getTime () + 2000
//     while (new date().getTime() <= atualMais2Segundos){

//     }
//     const d = 8+4
//     return d
// } 

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada ()

// const e = 2 + a + b
// console.log(e)
