import angular from 'angular'

export function InjectProp (...depNames) {
    return (target) => {
        if (!depNames.length) {
            // do nothing
            return target
        }

        angular.module(target.moduleName)
            .decorator(target.name, function ($delegate, $injector) {
                depNames.forEach(dep => $delegate[dep] = $injector.get(dep))
                return $delegate
            })

        return target
    }
}
