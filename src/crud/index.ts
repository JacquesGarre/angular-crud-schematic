import { Rule, SchematicContext, Tree, apply, mergeWith, template, url } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function crud(_options: any): Rule {

    console.log(' > Crud generation started...')
    console.log(' > Entity : ' + _options.entity)

    _options.capitalizedEntity = _options.entity.charAt(0).toUpperCase() + _options.entity.slice(1);
    console.log(' > Capitalized entity : ' + _options.capitalizedEntity)
    console.log(' > API : ' + _options.apiEndpoint)

    console.log(' > JSON : ' + JSON.parse(_options.json))

    _options.properties = JSON.parse(_options.json)

    return (tree: Tree, _context: SchematicContext) => {
        const templateSource = apply(url('./files'), [
            template({ ..._options })
        ]);
        return mergeWith(templateSource)(tree, _context);
    };
}

