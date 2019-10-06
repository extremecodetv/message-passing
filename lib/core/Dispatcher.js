
const Dispatcher = (methods) => function (method) {
    methods['default'] = () => false

    let args = Array.from(arguments)
    if (methods === undefined) {
        throw new Error('Methods table not initialized')
    }

    if (typeof methods.default !== 'function') {
        throw new Error('Default method not implemented')
    }

    if (typeof(method) === 'string') {
        args = args.splice(1, args.length)
        const handler = methods[method] || methods.default
        return handler(...args)
    }
 
    return () => { }
}

module.exports = Dispatcher
