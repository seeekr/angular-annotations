import angular from 'angular';

/**
 * Register a provider function
 *
 * @returns {Function}
 * @param name
 */
function Provider(name) {
    if (typeof name !== 'string') {
        annotate(name);
        return arguments[0];
    }

    return target => {
        annotate(target, name);
        return target;
    };

    function annotate(target, name) {
        name = (name || target.name).replace(/Provider$/, '')
        angular.module(target.moduleName)
            .provider(name, target);
    }
}

export {Provider};
