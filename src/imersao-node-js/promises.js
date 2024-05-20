function obterUsuario(callback) {
    setTimeout(function () {
        setTimeout(function () {
            return callback(null, {
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function getUser() {
    // quando der algum problema --> reject | erro
    // quando sucesso --> resolve | sucesso
    return new Promise(function solvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new Error('Problema de conexão'))
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}


function getPhone(id) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                ddd: '0' + id,
                phone: '988886666'
            })
        }, 2000)
    })
}

function getAddress(id) {
    return new Promise((resolve, reject) => {
        resolve({number: id, street: 'rua dos bobos'})
    })
}

//getUser().then(user => console.log('resultado ' + JSON.stringify(user))).catch(error => console.log('Deu ruim ', error))

// ao adicionar async automaticamente a função retornará uma promisse
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await getUser()
        // const telefone = await getPhone(usuario.id)
        // const endereco = await getAddress(usuario.id)

        const resultado = await Promise.all([
            getPhone(usuario.id),
            getAddress(usuario.id)
        ])

        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
        Usuário: ${JSON.stringify(usuario)}, 
        Telefone: ${JSON.stringify(telefone)}, 
        Endereço: ${JSON.stringify(endereco)} 
        `)

        console.timeEnd('medida-promise')
    } catch (err) {
        console.log(err)
    }
}

main()