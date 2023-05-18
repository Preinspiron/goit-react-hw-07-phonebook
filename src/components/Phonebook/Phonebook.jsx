import { FeedbackSection } from './Phonebook.styled';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: auto;
  gap: 30px;
  width: 100%;

  input {
    width: 100%;
    font-size: 16px;
    ${'' /* margin-bottom: 30px; */}
  }
  .radio {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .btn {
    height: auto;
    width: 100%;
  }
  & .error {
    color: tomato;
    font-size: 34px;
  }
  label {
    width: 100%;
    height: 160px;
  }
`;

const schema = Yup.object().shape({
  name: Yup.string('No letters')
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  number: Yup.number('Invalid number').required('Required'),
});

const Phonebook = ({ addContact }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    addContact({ name, number });

    resetForm();
  };

  return (
    <FeedbackSection>
      <Formik
        initialValues={{
          name: '',
          number: '',
          data: 'true',
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormStyled>
          {/* <div className="radio" role="group" aria-labelledby="my-radio-group">
            <label>
              default
              <Field type="radio" name="data" value="true" />
            </label>
            <label>
              empty
              <Field type="radio" name="data" value="false" />
            </label>
          </div> */}

          <label htmlFor="name">
            Name*
            <Field id="name" name="name" placeholder="James ..." />
            <ErrorMessage component="span" name="name" className="error" />
          </label>
          <label htmlFor="number">
            Number*
            <Field
              id="number"
              type="text"
              name="number"
              placeholder="+38 (095) 888 88 88"
            />
            <ErrorMessage name="number" component="span" className="error" />
          </label>
          <button type="submit" className="btn">
            Add contact
          </button>
        </FormStyled>
      </Formik>
    </FeedbackSection>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  addContact: PropTypes.func,
  // handleFormData: PropTypes.func,
};
