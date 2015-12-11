import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register work which should be performed when the injector is done loading all modules
 *
 * @returns {Function}
 */
function Run() {
    return target => {
        angular.module(target.moduleName)
            .run(getInjectableClass(target));

        return target;
    };
}

export {Run};