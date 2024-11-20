/// Arrays, listas e tuplas

const tupla: [string, string, number, boolean] = [
"isaac neiffin",
"neiffinholanches@gmail.com",
22,
true
]

const tuplas: [string, string, number, boolean][] = [
    ["kau bala","kaubala254@gmail.com",20,true],
    ["kaubala@gmail.com", "kau bala", 20, true]
]

const nome = tupla[1][0]

//hash table - tablea de chave/valor

type Pessoa = [
    nome: string,
    email: string,
    idade: number,
    ativo: boolean,
    celular?: string
]

const pessoas: Pessoa[] = [

    {
        nome: "isaac neiffin",
        email: "Izaas@gmail.com",
        idade: 22,
        ativo: true
    },
    {
        email: "Izaas@gmail.com",
        nome: "kau bala",
        idade: 20,
        ativo: true
    }
]

for (const pessoa of pessoas) {
    console.log(pessoa["email"])
}





//! Criar uma matriz de 10 produtos que contenha o seguinte layout:
//! id do tipo texto, nome do tipo texto, quantidade em estoque do tipo float,
//! ativo do tipo boolean, data de criação do tipo texto,
//! data ultima atualização do tipo texto.
//! A matriz deve conter os tipos corretamente, sendo na prática uma lista de tuplas.
//! Exemplo de uma linha da matriz:
//! [1, "MacBook", 10.5, true, "20240101", "20241118"]
 