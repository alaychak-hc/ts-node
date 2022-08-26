// All mapped imports
import mappedJs from 'mapped/js.js';
import mappedJsx from 'mapped/jsx.js';
import mappedTs from 'mapped/ts.js';
import mappedTsx from './level-1/level-2/mapped-tsx.js';
import mappedTsx from 'mapped/tsx.js';
import foo from 'candidate/foo.js';
import bar from 'candidate/bar.js';
import fooBar from 'candidate/foo/bar.js';
import immobile from 'static';

// Pre-conditions
import * as assert from 'assert';

// Assertions
assert.strictEqual(mappedTs, 'mapped-ts');
assert.strictEqual(mappedTsx, 'mapped-tsx');
assert.strictEqual(mappedJs, 'mapped-js');
assert.strictEqual(mappedJsx, 'mapped-jsx');
assert.strictEqual(foo, 'candidate-1-foo');
assert.strictEqual(bar, 'candidate-2-bar');
assert.strictEqual(fooBar, 'candidate-foo-bar');
assert.strictEqual(immobile, 'immobile');