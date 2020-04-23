import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
// import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | registration-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<RegistrationForm />`);

    assert.dom(this.element).exists();

    // await a11yAudit(this.element);
  });
});
