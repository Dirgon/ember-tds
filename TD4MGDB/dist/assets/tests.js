'use strict';

define("boards/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/application.js should pass ESLint\n\n');
  });
  QUnit.test('models/developer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/developer.js should pass ESLint\n\n');
  });
  QUnit.test('models/project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project.js should pass ESLint\n\n');
  });
  QUnit.test('models/step.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/step.js should pass ESLint\n\n');
  });
  QUnit.test('models/storie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/storie.js should pass ESLint\n\n');
  });
  QUnit.test('models/story.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/story.js should pass ESLint\n\n');
  });
  QUnit.test('models/tag.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/tag.js should pass ESLint\n\n');
  });
  QUnit.test('models/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/developers.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/developers.js should pass ESLint\n\n2:8 - \'EmberObject\' is defined but never used. (no-unused-vars)\n2:21 - \'get\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/developers/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/developers/edit.js should pass ESLint\n\n2:21 - \'get\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/developers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/developers/new.js should pass ESLint\n\n2:21 - \'get\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/projects.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/projects.js should pass ESLint\n\n2:8 - \'EmberObject\' is defined but never used. (no-unused-vars)\n2:21 - \'get\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/projects/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects/edit.js should pass ESLint\n\n');
  });
  QUnit.test('routes/projects/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/projects/new.js should pass ESLint\n\n2:21 - \'get\' is defined but never used. (no-unused-vars)\n2:25 - \'set\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/stories.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stories.js should pass ESLint\n\n');
  });
  QUnit.test('routes/stories/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/stories/edit.js should pass ESLint\n\n12:5 - \'Ember\' is not defined. (no-undef)\n12:5 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n16:7 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n16:7 - \'Ember\' is not defined. (no-undef)\n17:7 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n17:7 - \'Ember\' is not defined. (no-undef)\n18:7 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n18:7 - \'Ember\' is not defined. (no-undef)\n19:7 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n19:7 - \'Ember\' is not defined. (no-undef)\n20:7 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n20:7 - \'Ember\' is not defined. (no-undef)');
  });
  QUnit.test('routes/stories/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stories/new.js should pass ESLint\n\n');
  });
  QUnit.test('routes/story.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/story.js should pass ESLint\n\n');
  });
  QUnit.test('routes/story/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/story/new.js should pass ESLint\n\n22:7 - Use import { next } from \'@ember/runloop\'; instead of using Ember.run.next (ember/new-module-imports)\n26:19 - Use import { get } from \'@ember/object\'; instead of using Ember.get (ember/new-module-imports)\n28:25 - Use import { get } from \'@ember/object\'; instead of using Ember.get (ember/new-module-imports)\n29:17 - Use import { get } from \'@ember/object\'; instead of using Ember.get (ember/new-module-imports)\n32:18 - Use import { get } from \'@ember/object\'; instead of using Ember.get (ember/new-module-imports)\n33:16 - Use import { get } from \'@ember/object\'; instead of using Ember.get (ember/new-module-imports)\n33:61 - \'self\' is defined but never used. (no-unused-vars)\n42:19 - Use import { get } from \'@ember/object\'; instead of using Ember.get (ember/new-module-imports)\n50:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n51:9 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n56:5 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
  QUnit.test('transforms/utc.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/utc.js should pass ESLint\n\n');
  });
});
define("boards/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('boards/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'boards/templates/application.hbs should pass TemplateLint.\n\nboards/templates/application.hbs\n  3:0  error  Incorrect indentation for `{{#link-to}}` beginning at L3:C0. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  4:0  error  Incorrect indentation for `{{#link-to}}` beginning at L4:C0. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('boards/templates/developers.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'boards/templates/developers.hbs should pass TemplateLint.\n\nboards/templates/developers.hbs\n  12:0  error  Incorrect indentation for `{{outlet}}` beginning at L12:C0. Expected `{{outlet}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  13:0  error  Incorrect indentation for `<table>` beginning at L13:C0. Expected `<table>` to be at an indentation of 2 but was found at 0.  block-indentation\n  43:0  error  Incorrect indentation for `{{#if}}` beginning at L43:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  11:6  error  Incorrect indentation for `div` beginning at L3:C2. Expected `</div>` ending at L11:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  4:2  error  Incorrect indentation for `{{#link-to}}` beginning at L4:C2. Expected `{{#link-to}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  9:12  error  Incorrect indentation for `link-to` beginning at L4:C2. Expected `{{/link-to}}` ending at L9:C12 to be at an indentation of 2 but was found at 0.  block-indentation\n  5:2  error  Incorrect indentation for `<button>` beginning at L5:C2. Expected `<button>` to be at an indentation of 4 but was found at 2.  block-indentation\n  5:42  error  Incorrect indentation for `\n      Ajouter un developpeur\n\n  ` beginning at L5:C42. Expected `\n      Ajouter un developpeur\n\n  ` to be at an indentation of 4 but was found at 6.  block-indentation\n  22:4  error  Incorrect indentation for `<tbody>` beginning at L22:C4. Expected `<tbody>` to be at an indentation of 2 but was found at 4.  block-indentation\n  38:8  error  Incorrect indentation for `tbody` beginning at L22:C4. Expected `</tbody>` ending at L38:C8 to be at an indentation of 4 but was found at 0.  block-indentation\n  24:2  error  Incorrect indentation for `{{#each}}` beginning at L24:C2. Expected `{{#each}}` to be at an indentation of 6 but was found at 2.  block-indentation\n  25:0  error  Incorrect indentation for `<tr>` beginning at L25:C0. Expected `<tr>` to be at an indentation of 4 but was found at 0.  block-indentation\n  27:0  error  Incorrect indentation for `<td>` beginning at L27:C0. Expected `<td>` to be at an indentation of 2 but was found at 0.  block-indentation\n  28:4  error  Incorrect indentation for `{{#link-to}}` beginning at L28:C4. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  30:18  error  Incorrect indentation for `link-to` beginning at L28:C4. Expected `{{/link-to}}` ending at L30:C18 to be at an indentation of 4 but was found at 6.  block-indentation\n  44:0  error  Incorrect indentation for `<div>` beginning at L44:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  44:59  error  Incorrect indentation for `\nVoulez vous supprimer \'` beginning at L44:C59. Expected `\nVoulez vous supprimer \'` to be at an indentation of 2 but was found at 0.  block-indentation\n  46:0  error  Incorrect indentation for `{{#link-to}}` beginning at L46:C0. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  50:0  error  Incorrect indentation for `{{#link-to}}` beginning at L50:C0. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  47:0  error  Incorrect indentation for `<br>` beginning at L47:C0. Expected `<br>` to be at an indentation of 2 but was found at 0.  block-indentation\n  48:0  error  Incorrect indentation for `<button>` beginning at L48:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  51:0  error  Incorrect indentation for `<button>` beginning at L51:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('boards/templates/developers/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'boards/templates/developers/edit.hbs should pass TemplateLint.\n\nboards/templates/developers/edit.hbs\n  2:0  error  Incorrect indentation for `<div>` beginning at L2:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:0  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C0. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  8:0  error  Incorrect indentation for `{{outlet}}` beginning at L8:C0. Expected `{{outlet}}` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('boards/templates/developers/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'boards/templates/developers/new.hbs should pass TemplateLint.\n\nboards/templates/developers/new.hbs\n  3:2  error  Incorrect indentation for `{{input}}` beginning at L3:C2. Expected `{{input}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  6:57  error  Incorrect indentation for `button` beginning at L5:C2. Expected `</button>` ending at L6:C57 to be at an indentation of 2 but was found at 48.  block-indentation\n');
  });
  QUnit.test('boards/templates/projects.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'boards/templates/projects.hbs should pass TemplateLint.\n\nboards/templates/projects.hbs\n  13:0  error  Incorrect indentation for `{{outlet}}` beginning at L13:C0. Expected `{{outlet}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  15:0  error  Incorrect indentation for `<table>` beginning at L15:C0. Expected `<table>` to be at an indentation of 2 but was found at 0.  block-indentation\n  52:0  error  Incorrect indentation for `{{#if}}` beginning at L52:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  12:6  error  Incorrect indentation for `div` beginning at L4:C2. Expected `</div>` ending at L12:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  5:2  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C2. Expected `{{#link-to}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  10:12  error  Incorrect indentation for `link-to` beginning at L5:C2. Expected `{{/link-to}}` ending at L10:C12 to be at an indentation of 2 but was found at 0.  block-indentation\n  6:2  error  Incorrect indentation for `<button>` beginning at L6:C2. Expected `<button>` to be at an indentation of 4 but was found at 2.  block-indentation\n  6:43  error  Incorrect indentation for `\n      Ajouter un Projet\n\n  ` beginning at L6:C43. Expected `\n      Ajouter un Projet\n\n  ` to be at an indentation of 4 but was found at 6.  block-indentation\n  28:4  error  Incorrect indentation for `<tbody>` beginning at L28:C4. Expected `<tbody>` to be at an indentation of 2 but was found at 4.  block-indentation\n  50:8  error  Incorrect indentation for `tbody` beginning at L28:C4. Expected `</tbody>` ending at L50:C8 to be at an indentation of 4 but was found at 0.  block-indentation\n  30:2  error  Incorrect indentation for `{{#each}}` beginning at L30:C2. Expected `{{#each}}` to be at an indentation of 6 but was found at 2.  block-indentation\n  31:0  error  Incorrect indentation for `<tr>` beginning at L31:C0. Expected `<tr>` to be at an indentation of 4 but was found at 0.  block-indentation\n  39:0  error  Incorrect indentation for `<td>` beginning at L39:C0. Expected `<td>` to be at an indentation of 2 but was found at 0.  block-indentation\n  43:0  error  Incorrect indentation for `<button>` beginning at L43:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  53:0  error  Incorrect indentation for `<div>` beginning at L53:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  53:59  error  Incorrect indentation for `\nVoulez vous supprimer \'` beginning at L53:C59. Expected `\nVoulez vous supprimer \'` to be at an indentation of 2 but was found at 0.  block-indentation\n  55:0  error  Incorrect indentation for `{{#link-to}}` beginning at L55:C0. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  59:0  error  Incorrect indentation for `{{#link-to}}` beginning at L59:C0. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  56:0  error  Incorrect indentation for `<br>` beginning at L56:C0. Expected `<br>` to be at an indentation of 2 but was found at 0.  block-indentation\n  57:0  error  Incorrect indentation for `<button>` beginning at L57:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  60:0  error  Incorrect indentation for `<button>` beginning at L60:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  35:41  error  you must use double quotes in templates  quotes\n  36:39  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('boards/templates/projects/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'boards/templates/projects/edit.hbs should pass TemplateLint.\n\nboards/templates/projects/edit.hbs\n  40:6  error  Incorrect indentation for `div` beginning at L3:C2. Expected `</div>` ending at L40:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  4:2  error  Incorrect indentation for `<div>` beginning at L4:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  9:2  error  Incorrect indentation for `<div>` beginning at L9:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  13:2  error  Incorrect indentation for `<div>` beginning at L13:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  21:2  error  Incorrect indentation for `<div>` beginning at L21:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  35:2  error  Incorrect indentation for `<div>` beginning at L35:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  11:6  error  Incorrect indentation for `{{input}}` beginning at L11:C6. Expected `{{input}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  38:6  error  Incorrect indentation for `div` beginning at L35:C2. Expected `</div>` ending at L38:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  37:58  error  Incorrect indentation for `button` beginning at L36:C4. Expected `</button>` ending at L37:C58 to be at an indentation of 4 but was found at 49.  block-indentation\n  37:4  error  Incorrect indentation for `<i>` beginning at L37:C4. Expected `<i>` to be at an indentation of 6 but was found at 4.  block-indentation\n  28:26  error  Unnecessary string concatenation. Use {{map-value mapper owner}} instead of "{{map-value mapper owner}}".  no-unnecessary-concat\n');
  });
  QUnit.test('boards/templates/projects/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'boards/templates/projects/new.hbs should pass TemplateLint.\n\nboards/templates/projects/new.hbs\n  40:6  error  Incorrect indentation for `div` beginning at L3:C2. Expected `</div>` ending at L40:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  4:2  error  Incorrect indentation for `<div>` beginning at L4:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  9:2  error  Incorrect indentation for `<div>` beginning at L9:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  13:2  error  Incorrect indentation for `<div>` beginning at L13:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  21:2  error  Incorrect indentation for `<div>` beginning at L21:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  35:2  error  Incorrect indentation for `<div>` beginning at L35:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  11:6  error  Incorrect indentation for `{{input}}` beginning at L11:C6. Expected `{{input}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  38:6  error  Incorrect indentation for `div` beginning at L35:C2. Expected `</div>` ending at L38:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  37:57  error  Incorrect indentation for `button` beginning at L36:C4. Expected `</button>` ending at L37:C57 to be at an indentation of 4 but was found at 48.  block-indentation\n  37:4  error  Incorrect indentation for `<i>` beginning at L37:C4. Expected `<i>` to be at an indentation of 6 but was found at 4.  block-indentation\n  28:26  error  Unnecessary string concatenation. Use {{map-value mapper owner}} instead of "{{map-value mapper owner}}".  no-unnecessary-concat\n');
  });
  QUnit.test('boards/templates/stories.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'boards/templates/stories.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('boards/templates/stories/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'boards/templates/stories/edit.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('boards/templates/stories/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'boards/templates/stories/new.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('boards/templates/story.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'boards/templates/story.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('boards/templates/story/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'boards/templates/story/new.hbs should pass TemplateLint.\n\n');
  });
});
define("boards/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("boards/tests/test-helper", ["boards/app", "boards/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('boards/config/environment', [], function() {
  var prefix = 'boards';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('boards/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
