const service = require('./service')

main()

async function main() {
    try {
        const result = await service.getPeople()
        let names = []

        iterationWithFor(result, names);
        iterationWithForIn(result, names);
        iterationWithForOf(result, names);
        iterationWithForEach(result, names);
        iterationWithMap(result, names);

    } catch (err) {
        console.error(err)
    }
}

function iterationWithFor(result, names) {
    console.time('for')
    for (let i = 0; i < result.results.length; i++) {
        const person = result.results[i]
        names.push(person.name)
    }
    console.timeEnd('for')
    //console.log(names)
}

function iterationWithForIn(result, names) {
    console.time('for-in')
    for (let i in result.results) {
        const person = result.results[i]
        names.push(person.name)
    }
    console.timeEnd('for-in')
    //console.log(names)
}

function iterationWithForOf(result, names) {
    console.time('for-of')
    for (person of result.results) {
        names.push(person.name)
    }
    console.timeEnd('for-of')
    //console.log(names)
}

function iterationWithForEach(result, names) {
    console.time('for-each')
    result.results.forEach(p => names.push(p.name))
    console.timeEnd('for-each')
}

function iterationWithMap(result, names) {
    console.time('map')
    names = result.results.map(p => p.name)
    console.timeEnd('map')
}