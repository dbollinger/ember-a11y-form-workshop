import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { RegistrationSchema } from '../validators/registration-form';

export default class RegistrationFormComponent extends Component {
  constructor() {
    super(...arguments);
    this.formSchema = RegistrationSchema;
  }

  @action
  async handleSubmit(evt) {
    // eslint-disable-next-line
    console.log(evt);
  }
}
