/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { StringWrapper, isBlank, isPresent } from './facade/lang';
export class StyleWithImports {
    constructor(style, styleUrls) {
        this.style = style;
        this.styleUrls = styleUrls;
    }
}
export function isStyleUrlResolvable(url) {
    if (isBlank(url) || url.length === 0 || url[0] == '/')
        return false;
    const schemeMatch = url.match(_urlWithSchemaRe);
    return schemeMatch === null || schemeMatch[1] == 'package' || schemeMatch[1] == 'asset';
}
/**
 * Rewrites stylesheets by resolving and removing the @import urls that
 * are either relative or don't have a `package:` scheme
 */
export function extractStyleUrls(resolver, baseUrl, cssText) {
    var foundUrls = [];
    var modifiedCssText = StringWrapper.replaceAllMapped(cssText, _cssImportRe, (m) => {
        var url = isPresent(m[1]) ? m[1] : m[2];
        if (!isStyleUrlResolvable(url)) {
            // Do not attempt to resolve non-package absolute URLs with URI scheme
            return m[0];
        }
        foundUrls.push(resolver.resolve(baseUrl, url));
        return '';
    });
    return new StyleWithImports(modifiedCssText, foundUrls);
}
var _cssImportRe = /@import\s+(?:url\()?\s*(?:(?:['"]([^'"]*))|([^;\)\s]*))[^;]*;?/g;
var _urlWithSchemaRe = /^([^:/?#]+):/;
//# sourceMappingURL=style_url_resolver.js.map