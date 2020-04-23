import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
// import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | visit registration page', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    // await a11yAudit();
  });
});
