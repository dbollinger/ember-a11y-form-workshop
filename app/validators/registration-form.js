import * as yup from 'yup';

export const RegistrationSchema = yup.object().shape({
  firstName: yup.string().required().label('First Name'),
  lastName: yup.string().required().label('Last Name'),
  emailAddress: yup.string().email().required().label('Last Name'),
  catsOwned: yup.number().required().label('Number of cats you own')
});
