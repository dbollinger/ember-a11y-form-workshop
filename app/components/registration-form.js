import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { RegistrationSchema } from '../validators/registration-form';

export default class RegistrationFormComponent extends Component {
  @tracked formset = {};
  @tracked formErrors = null;
  @tracked didSuccessfullySubmit;

  constructor() {
    super(...arguments);
    this.formSchema = RegistrationSchema;
  }

  get errorFields() {
    if (this.formErrors && this.formErrors.length) {
      return this.formErrors.map((error) => error.path);
    }
  }

  @action
  async handleSubmit(evt) {
    evt.preventDefault();

    let success = await this.validateForm();

    if (success) {
      this.didSuccessfullySubmit = true;
    }
  }

  @action
  async updateField(evt) {
    this.formset[evt.target.name] = evt.target.value;
  }

  @action
  focusErrors(element) {
    element.focus();
  }

  async validateForm() {
    try {
      await this.formSchema.validate(this.formset, { abortEarly: false });
      this.formErrors = null;
      // eslint-disable-next-line
      console.log('Formset is valid');
      return true;
    } catch (e) {
      this.formErrors = e.inner;
      console.log(this.formErrors);
    }
  }
}
