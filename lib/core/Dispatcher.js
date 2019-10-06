
const Dispatcher = (methods) => function (method) {
    const def = () => false

    let args = Array.from(arguments)
    if (methods === undefined) {
        throw new Error('Methods table not initialized')
    }

    if (typeof(method) === 'string') {
        args = args.splice(1, args.length)
        const handler = methods[method] || def
        return handler(...args)
    }
 
    return () => { }
}

module.exports = Dispatcher
