/*
 * This code is not run through any build step! Don't add any fancy stuff
 */

(function() {
  // redirects[page][hash] => new page;
  var redirects = {
    'community/faq': {
      '#should-i-learn-reason-or-ocaml-first': 'docs/en/faq.html#should-i-learn-reason-or-ocaml-first',
      '#im-not-sure-what-to-do-with-reason': 'docs/en/faq.html#i-m-not-sure-what-to-do-with-reason',
      '#whats-the-relation-between-reason-bucklescript-and-ocaml': 'docs/en/faq.html#what-s-the-relation-between-reason-bucklescript-and-ocaml',
      '#where-do-all-these-print_endline-string_of_int-functions-come-from': 'docs/en/faq.html#where-do-all-these-print-endline-string-of-int-functions-come-from',
      '#can-i-have-a-function-to-print-arbitrary-data-structures': 'docs/en/faq.html#can-i-have-a-function-to-print-arbitrary-data-structures',
      '#why-is-there-a--for-adding-ints-and--for-adding-floats-etc': 'docs/en/faq.html#why-is-there-a-for-adding-ints-and-for-adding-floats-etc',
      '#does-library-___-work-with-reason': 'docs/en/faq.html#does-library-work-with-reason',
      '#whats-the-server-side-story-should-i-compile-to-native-or-to-js-and-use-nodejs': 'docs/en/faq.html#what-s-the-server-side-story-should-i-compile-to-native-or-to-js-and-use-nodejs',
      '#whats-bucklescripts-async-story': 'docs/en/faq.html#what-s-bucklescript-s-async-story',
      '#whats-the-unit-test-story': 'docs/en/faq.html#what-s-the-unit-test-story',
      '#whats-the-merlin-file-at-the-root-of-my-project': 'docs/en/faq.html#what-s-the-merlin-file-at-the-root-of-my-project',
      '#i-dont-see-any-import-or-require-in-my-file-how-does-module-resolution-work': 'docs/en/faq.html#i-don-t-see-any-import-or-require-in-my-file-how-does-module-resolution-work',
      '#is-some--none-contents-array-list-and-all-of-these-special-where-do-they-come-from': 'docs/en/faq.html#is-some-none-contents-array-list-and-all-of-these-special-where-do-they-come-from',
      '#what-does-an-argument-with-a-prepended-underscore-eg-_-or-_foo-mean': 'docs/en/faq.html#what-does-an-argument-with-a-prepended-underscore-eg-or-foo-mean',
      '#whats-this-mymodulet-i-keep-seeing': 'docs/en/faq.html#what-s-this-mymodulet-i-keep-seeing',
      '#why-is-there-a-js_promise-and-then-a-jspromise-what-about-js_array-js_string-and-whatever-else': 'docs/en/faq.html#why-is-there-a-js-promise-http-bucklescriptgithubio-bucklescript-api-js-promisehtml-and-then-a-jspromise-http-bucklescriptgithubio-bucklescript-api-jspromisehtml-what-about-js-array-http-bucklescriptgithubio-bucklescript-api-js-arrayhtml-js-string-http-bucklescriptgithubio-bucklescript-api-js-stringhtml-and-whatever-else',
      '#when-will-modular-implicit--multicore--algebraic-effects-be-ready': 'docs/en/faq.html#when-will-modular-implicit-multicore-algebraic-effects-be-ready',
      '#why-are-bucklescript-and-bsb-so-fast-how-can-i-slow-it-down': 'docs/en/faq.html#why-are-bucklescript-and-bsb-so-fast-how-can-i-slow-it-down',
      '#im-seeing-a-weird-cmicmxcmjcma-file-referenced-in-a-compiler-error-where-do-these-files-come-from': 'docs/en/faq.html#i-m-seeing-a-weird-cmi-cmx-cmj-cma-file-referenced-in-a-compiler-error-where-do-these-files-come-from-',
      '#source-files': 'docs/en/faq.html#source-files',
      '#compiled-files': 'docs/en/faq.html#compiled-files',
      '#other-ocaml-ecosystem-files': 'docs/en/faq.html#other-ocaml-ecosystem-files',
      default: 'docs/en/faq.html'
    },
    'community/examples': {
      default: 'docs/en/community-examples.html'
    },
    'community/events': {
      default: 'docs/en/events.html'
    },
    'community/roadmap': {
      '#reason-team-todos': 'docs/en/roadmap.html#reason-team-todos',
      '#near-future': 'docs/en/roadmap.html#near-future',
      '#future': 'docs/en/roadmap.html#future',
      '#your-contribution-opportunities': 'docs/en/roadmap.html#your-contribution-opportunities',
      default: 'docs/en/roadmap.html'
    },
    'community/community': {
      '#github': 'docs/en/community.html#github',
      default: 'docs/en/community.html',
    },
    'community/articles-and-videos': {
      '#ocaml-concepts': 'docs/en/articles-videos.html#ocaml-concepts',
      '#bucklescript': 'docs/en/articles-videos.html#bucklescript',
      '#reasonreact': 'docs/en/articles-videos.html#reasonreact',
      '#videos': 'docs/en/articles-videos.html#videos',
      '#general-functional-programming--type-system': 'docs/en/articles-videos.html#general-functional-programming-type-system',
      '#pro-links': 'docs/en/articles-videos.html#pro-links',
      default: 'docs/en/articles-videos.html',
    },
    'community/companies': {
      default: 'en/companies-using-reason.html',
    },
    'guide': {
      default: 'docs/en/quickstart-javascript.html',
    },
    'guide/what-and-why': {
      '#what-is-reason': 'docs/en/what-and-why.html#what-is-reason',
      '#why-reason': 'docs/en/what-and-why.html#why-reason',
      '#why-ocaml-as-the-backing-language-why-not-my-favorite-language': 'docs/en/what-and-why.html#why-ocaml-as-the-backing-language-why-not-my-favorite-language',
      '#dont-like-reason': 'docs/en/what-and-why.html#don-t-like-reason',
      default: 'docs/en/what-and-why.html',
    },
    'guide/editor-tools': {
      default: 'docs/en/global-installation.html',
    },
    'guide/editor-tools/global-installation': {
      '#recommended-through-npmyarn': 'docs/en/global-installation.html#recommended-through-npm-yarn',
      '#alternative-through-opam': 'docs/en/global-installation.html#alternative-through-opam',
      '#troubleshooting': 'docs/en/global-installation.html#troubleshooting',
      '#bad-installation': 'docs/en/global-installation.html#bad-installation',
      '#editor-plugin-not-working': 'docs/en/global-installation.html#editor-plugin-not-working',
      '#editor-error-message-unbound-module-js-etc': 'docs/en/global-installation.html#editor-error-message-unbound-module-js-etc',
      default: 'docs/en/global-installation.html',
    },
    'guide/editor-tools/editors-plugins': {
      '#officially-supported-editors': 'docs/en/editor-plugins.html#officially-supported-editors',
      default: 'docs/en/global-installation.html',
    },
    'guide/editor-tools/extra-goodies': {
      '#browser-extension-reason-tools': 'docs/en/extra-goodies.html#browser-extension-reason-tools',
      '#bucklescript': 'docs/en/extra-goodies.html#bucklescript',
      '#other-utilities': 'docs/en/extra-goodies.html#other-utilities',
      '#refmt': 'docs/en/extra-goodies.html#refmt',
      '#merlin': 'docs/en/extra-goodies.html#merlin',
      '#repl': 'docs/en/extra-goodies.html#repl',
      '#rebench': 'docs/en/extra-goodies.html#re-bench',
      '#ocamlc-ocamlopt-ocamlrun-rebuild': 'docs/en/extra-goodies.html#ocamlc-ocamlopt-ocamlrun-rebuild',
      default: 'docs/en/global-installation.html',
    },
    'guide/language/overview': {
      default: 'docs/en/overview.html',
    },
    'guide/language/let-binding': {
      '#block-scope': 'docs/en/let-binding.html#block-scope',
      '#bindings-are-immutable': 'docs/en/let-binding.html#bindings-are-immutable',
      '#tips--tricks': 'docs/en/let-binding.html#tips-tricks',
      default: 'docs/en/let-binding.html',
    },
    'guide/language/type': {
      '#annotations': 'docs/en/type.html#annotations',
      '#aliases': 'docs/en/type.html#aliases',
      '#design-decisions': 'docs/en/type.html#design-decisions',
      default: 'docs/en/type.html',
    },
    'guide/language/string-and-char': {
      '#string': 'docs/en/string-and-char.html#string',
      '#quoted-string': 'docs/en/string-and-char.html#quoted-string',
      '#usage': 'docs/en/string-and-char.html#usage',
      '#tips--tricks': 'docs/en/string-and-char.html#tips-tricks',
      '#design-decisions': 'docs/en/string-and-char.html#design-decisions',
      default: 'docs/en/string-and-char.html',
    },
    'guide/language/boolean': {
      '#usage': 'docs/en/boolean.html#usage',
      '#tips--tricks': 'docs/en/boolean.html#tips-tricks',
      '#design-decisions': 'docs/en/boolean.html#design-decisions',
      default: 'docs/en/boolean.html',
    },
    'guide/language/integer-and-float': {
      '#integers': 'docs/en/integer-and-float.html#integers',
      '#usage': 'docs/en/integer-and-float.html#usage',
      '#float': 'docs/en/integer-and-float.html#float',
      '#tips--tricks': 'docs/en/integer-and-float.html#tips-tricks',
      '#design-decisions': 'docs/en/integer-and-float.html#design-decisions',
      default: 'docs/en/integer-and-float.html',
    },
    'guide/language/tuple': {
      '#usage': 'docs/en/tuple.html#usage',
      '#tips--tricks': 'docs/en/tuple.html#tips-tricks',
      '#design-decisions': 'docs/en/tuple.html#design-decisions',
      default: 'docs/en/tuple.html',
    },
    'guide/language/record': {
      '#usage': 'docs/en/record.html#usage',
      '#record-needs-an-explicit-definition': 'docs/en/record.html#record-needs-an-explicit-definition',
      '#immutable-update': 'docs/en/record.html#immutable-update',
      '#mutable-update': 'docs/en/record.html#mutable-update',
      '#syntax-shorthand': 'docs/en/record.html#syntax-shorthand',
      '#interop-with-javascript': 'docs/en/record.html#interop-with-javascript',
      '#record-types-are-found-by-field-name': 'docs/en/record.html#record-types-are-found-by-field-name',
      '#tips--tricks': 'docs/en/record.html#tips-tricks',
      '#design-decisions': 'docs/en/record.html#design-decisions',
      default: 'docs/en/record.html',
    },
    'guide/language/variant': {
      '#usage': 'docs/en/variant.html#usage',
      '#variant-needs-an-explicit-definition': 'docs/en/variant.html#variant-needs-an-explicit-definition',
      '#honorable-mentions': 'docs/en/variant.html#honorable-mentions',
      '#interop-with-javascript': 'docs/en/variant.html#interop-with-javascript',
      '#variant-types-are-found-by-field-name': 'docs/en/variant.html#variant-types-are-found-by-field-name',
      '#tips--tricks': 'docs/en/variant.html#tips-tricks',
      '#design-decisions': 'docs/en/variant.html#design-decisions',
      default: 'docs/en/variant.html',
    },
    'guide/language/list-and-array': {
      '#usage': 'docs/en/list-and-array.html#usage',
      '#list': 'docs/en/list-and-array.html#list',
      '#immutable-prepend': 'docs/en/list-and-array.html#immutable-prepend',
      '#access': 'docs/en/list-and-array.html#access',
      '#tips--tricks': 'docs/en/list-and-array.html#tips-tricks',
      '#design-decisions': 'docs/en/list-and-array.html#design-decisions',
      '#array': 'docs/en/list-and-array.html#array',
      default: 'docs/en/list-and-array.html',
    },
    'guide/language/function': {
      '#no-argument': 'docs/en/function.html#no-argument',
      '#labeled-arguments': 'docs/en/function.html#labeled-arguments',
      '#currying': 'docs/en/function.html#currying',
      '#optional-labeled-arguments': 'docs/en/function.html#optional-labeled-arguments',
      '#explicitly-passed-optional': 'docs/en/function.html#explicitly-passed-optional',
      '#optional-with-default-value': 'docs/en/function.html#optional-with-default-value',
      '#recursive-functions': 'docs/en/function.html#recursive-functions',
      '#mutually-recursive-functions': 'docs/en/function.html#mutually-recursive-functions',
      '#tips--tricks': 'docs/en/function.html#tips-tricks',
      '#declaration': 'docs/en/function.html#declaration',
      '#with-type-annotation': 'docs/en/function.html#with-type-annotation',
      '#application': 'docs/en/function.html#application',
      '#standalone-type-signature': 'docs/en/function.html#standalone-type-signature',
      '#in-interface-files': 'docs/en/function.html#in-interface-files',
      default: 'docs/en/function.html',
    },
    'guide/language/if-else': {
      '#usage': 'docs/en/if-else.html#usage',
      '#design-decisions': 'docs/en/if-else.html#design-decisions',
      default: 'docs/en/if-else.html',
    },
    'guide/language/more-on-type': {
      '#usage': 'docs/en/more-on-type.html#type-argument',
      '#mutually-recursive-types': 'docs/en/more-on-type.html#mutually-recursive-types',
      '#design-decisions': 'docs/en/more-on-type.html#design-decisions',
      default: 'docs/en/more-on-type.html',
    },
    'guide/language/destructuring': {
      '#usage': 'docs/en/destructuring.html#usage',
      '#tips--tricks': 'docs/en/destructuring.html#tips-tricks',
      default: 'docs/en/destructuring.html',
    },
    'guide/language/pattern-matching': {
      '#usage': 'docs/en/pattern-matching.html#usage',
      '#when-clauses': 'docs/en/pattern-matching.html#when-clauses',
      '#match-on-exceptions': 'docs/en/pattern-matching.html#match-on-exceptions',
      '#tips--tricks': 'docs/en/pattern-matching.html#tips-tricks',
      '#design-notes': 'docs/en/pattern-matching.html#design-decisions',
      default: 'docs/en/pattern-matching.html',
    },
    'guide/language/mutation': {
      '#usage': 'docs/en/mutation.html#usage',
      '#mutate-let-binding': 'docs/en/mutation.html#mutate-let-binding',
      '#tips--tricks': 'docs/en/mutation.html#tips-tricks',
      default: 'docs/en/mutation.html',
    },
    'guide/language/imperative-loops': {
      '#for-loops': 'docs/en/imperative-loops.html#for-loops',
      '#while-loops': 'docs/en/imperative-loops.html#while-loops',
      '#tips--tricks': 'docs/en/imperative-loops.html#tips-tricks',
      default: 'docs/en/imperative-loops.html',
    },
    'guide/language/jsx': {
      '#capitalized-tags': 'docs/en/jsx.html#capitalized-tags',
      '#uncapitalized-tags': 'docs/en/jsx.html#uncapitalized-tags',
      '#children': 'docs/en/jsx.html#children',
      '#children-spread': 'docs/en/jsx.html#children-spread',
      '#usage': 'docs/en/jsx.html#usage',
      '#departures-from-js-jsx': 'docs/en/jsx.html#departures-from-js-jsx',
      '#punning': 'docs/en/jsx.html#punning',
      '#tips--tricks': 'docs/en/jsx.html#tips-tricks',
      '#design-decisions': 'docs/en/jsx.html#design-decisions',
      default: 'docs/en/jsx.html',
    },
    'guide/language/external': {
      '#usage': 'docs/en/external.html#usage',
      '#tips--tricks': 'docs/en/external.html#tips-tricks',
      '#design-decisions': 'docs/en/external.html#design-decisions',
      default: 'docs/en/external.html',
    },
    'guide/language/exception': {
      '#usage': 'docs/en/exception.html#usage',
      '#tips--tricks': 'docs/en/exception.html#tips-tricks',
      '#design-decisions': 'docs/en/exception.html#design-decisions',
      default: 'docs/en/exception.html',
    },
    'guide/language/object': {
      '#usage': 'docs/en/object.html#usage',
      '#type-declaration': 'docs/en/object.html#type-declaration',
      '#creation': 'docs/en/object.html#creation',
      '#tips--tricks': 'docs/en/object.html#tips-tricks',
      default: 'docs/en/object.html',
    },
    'guide/language/module': {
      '#basics': 'docs/en/module.html#basics',
      '#creation': 'docs/en/module.html#creation',
      '#opening-a-module': 'docs/en/module.html#open-ing-a-module',
      '#extending-modules': 'docs/en/module.html#extending-modules',
      '#every-re-file-is-a-module': 'docs/en/module.html#every-re-file-is-a-module',
      '#signatures': 'docs/en/module.html#signatures',
      '#extending-module-signatures': 'docs/en/module.html#extending-module-signatures',
      '#every-rei-file-is-a-signature': 'docs/en/module.html#every-rei-file-is-a-signature',
      '#module-functions-functors': 'docs/en/module.html#module-functions-functors',
      '#module-functions-types': 'docs/en/module.html#module-functions-types',
      '#drawbacks': 'docs/en/module.html#drawbacks',
      default: 'docs/en/module.html',
    },
    'guide/javascript': {
      default: 'docs/en/quickstart-javascript.html',
    },
    'guide/javascript/quickstart': {
      default: 'docs/en/quickstart-javascript.html',
    },
    'guide/javascript/interop': {
      '#just-dumping-javascript-in-the-middle-of-your-reason-code': 'docs/en/interop.html#just-dumping-javascript-in-the-middle-of-your-reason-code',
      '#dumping-in-some-javascript-and-making-it-accessible-from-reason': 'docs/en/interop.html#dumping-in-some-javascript-and-making-it-accessible-from-reason',
      '#dumping-in-a-function--passing-values': 'docs/en/interop.html#dumping-in-a-function-passing-values',
      '#settling-down-and-getting-disciplined-about-things': 'docs/en/interop.html#settling-down-and-getting-disciplined-about-things',
      '#using-existing-javascript-libraries': 'docs/en/interop.html#using-existing-javascript-libraries',
      default: 'docs/en/interop.html',
    },
    'guide/javascript/syntax-cheatsheet': {
      '#let-binding': 'docs/en/syntax-cheatsheet.html#let-binding',
      '#string--char': 'docs/en/syntax-cheatsheet.html#string-char',
      '#boolean': 'docs/en/syntax-cheatsheet.html#boolean',
      '#number': 'docs/en/syntax-cheatsheet.html#number',
      '#objectrecord': 'docs/en/syntax-cheatsheet.html#object-record',
      '#array': 'docs/en/syntax-cheatsheet.html#array',
      '#null': 'docs/en/syntax-cheatsheet.html#null',
      '#function': 'docs/en/syntax-cheatsheet.html#function',
      '#blocks': 'docs/en/syntax-cheatsheet.html#blocks',
      '#currying': 'docs/en/syntax-cheatsheet.html#currying',
      '#if-else': 'docs/en/syntax-cheatsheet.html#if-else',
      '#destructuring': 'docs/en/syntax-cheatsheet.html#destructuring',
      '#loop': 'docs/en/syntax-cheatsheet.html#loop',
      '#jsx': 'docs/en/syntax-cheatsheet.html#jsx',
      '#exception': 'docs/en/syntax-cheatsheet.html#exception',
      '#comments': 'docs/en/syntax-cheatsheet.html#comments',
      default: 'docs/en/syntax-cheatsheet.html',
    },
    'guide/javascript/libraries': {
      default: 'docs/en/libraries.html',
    },
    'guide/javascript/converting': {
      '#preparation': 'docs/en/converting-from-js.html#preparation',
      '#syntax': 'docs/en/converting-from-js.html#syntax',
      '#types-pass-1': 'docs/en/converting-from-js.html#types-pass-1',
      '#runtime-semantics': 'docs/en/converting-from-js.html#runtime-semantics',
      '#clean-up-types-pass-2': 'docs/en/converting-from-js.html#clean-up-types-pass-2',
      '#tips': 'docs/en/converting-from-js.html#tips',
      default: 'docs/en/converting-from-js.html',
    },
    'guide/native': {
      default: 'docs/en/native.html',
    },
    'guide/native/quickstart': {
      default: 'docs/en/quickstart-ocaml.html',
    },
    'guide/native/convert-from-ocaml': {
      '#ocamlbuild---rebuild': 'docs/en/convert-from-ocaml.html#ocamlbuild-rebuild',
      '#makefile': 'docs/en/convert-from-ocaml.html#makefile',
      '#constructor-syntax-fix': 'docs/en/convert-from-ocaml.html#constructor-syntax-fix',
      default: 'docs/en/convert-from-ocaml.html',
    },
    'guide/ocaml': {
      '#comments': 'docs/en/comparison-to-ocaml.html#comments',
      '#operator-renaming': 'docs/en/comparison-to-ocaml.html#operator-renaming',
      '#local-scope': 'docs/en/comparison-to-ocaml.html#local-scope',
      '#local-scope-vs-module-body': 'docs/en/comparison-to-ocaml.html#local-scope-vs-module-body',
      '#tuple-and-record': 'docs/en/comparison-to-ocaml.html#tuple-and-record',
      '#lists': 'docs/en/comparison-to-ocaml.html#lists',
      '#type-definitions': 'docs/en/comparison-to-ocaml.html#type-definitions',
      '#functions': 'docs/en/comparison-to-ocaml.html#functions',
      '#single-argument-match-functions': 'docs/en/comparison-to-ocaml.html#single-argument-match-functions',
      '#annotating-arguments': 'docs/en/comparison-to-ocaml.html#annotating-arguments',
      '#type-parameters': 'docs/en/comparison-to-ocaml.html#type-parameters',
      '#tuples-as-type-parameters': 'docs/en/comparison-to-ocaml.html#tuples-as-type-parameters',
      '#variants': 'docs/en/comparison-to-ocaml.html#variants',
      '#pattern-matching': 'docs/en/comparison-to-ocaml.html#pattern-matching',
      '#modules-and-signatures': 'docs/en/comparison-to-ocaml.html#modules-and-signatures',
      '#functors': 'docs/en/comparison-to-ocaml.html#functors',
      '#various-improvements': 'docs/en/comparison-to-ocaml.html#various-improvements',
      '#lambdas-as-record-fields-no-longer-need-extra-parens': 'docs/en/comparison-to-ocaml.html#lambdas-as-record-fields-no-longer-need-extra-parens',
      '#various-differences': 'docs/en/comparison-to-ocaml.html#various-differences',
      '#as-precedence': 'docs/en/comparison-to-ocaml.html#as-precedence',
      '#mutable-record-field-updates': 'docs/en/comparison-to-ocaml.html#mutable-record-field-updates',
      '#prefix-operators': 'docs/en/comparison-to-ocaml.html#prefix-operators',
      '#comment-escaping': 'docs/en/comparison-to-ocaml.html#comment-escaping',
      '#repl': 'docs/en/comparison-to-ocaml.html#repl',
      default: 'docs/en/comparison-to-ocaml.html',
    },
    'guide/meta': {
      default: 'docs/en/project-structure.html',
    },
    'guide/meta/project-structure': {
      '#file-casing': 'docs/en/project-structure.html#file-casing',
      '#ignore-merlin-file': 'docs/en/project-structure.html#ignore-merlin-file',
      '#folders': 'docs/en/project-structure.html#folders',
      '#third-party-dependencies': 'docs/en/project-structure.html#third-party-dependencies',
      '#ppx--other-meta-tools': 'docs/en/project-structure.html#ppx-other-meta-tools',
      '#paradigm': 'docs/en/project-structure.html#paradigm',
      '#publishing': 'docs/en/project-structure.html#publishing',
      default: 'docs/en/project-structure.html',
    },
    'guide/examples': {
      '#using-the-option-type': 'docs/en/newcomer-examples.html#using-the-option-type',
      '#creating-a-parametrized-type': 'docs/en/newcomer-examples.html#creating-a-parametrized-type',
      '#creating-a-js-object': 'docs/en/newcomer-examples.html#creating-a-js-object',
      '#binding-to-a-js-module-with-default-export': 'docs/en/newcomer-examples.html#binding-to-a-js-module-with-default-export',
      '#checking-for-js-nullable-types-using-the-option-type': 'docs/en/newcomer-examples.html#checking-for-js-nullable-types-using-the-option-type',
      default: 'docs/en/newcomer-examples.html',
    },
  };
  var hash = window.location.hash;
  var path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  if (redirects[path]) {
    var link = document.getElementById('redirectLink');
    var location = redirects[path][hash] || redirects[path].default;
    link.textContent = 'https://reasonml.github.io/' + location;
    link.href = '/' + location;
  }
})();
