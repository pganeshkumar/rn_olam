import {Field, Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import Button from '../Button';

const Form = ({initialValues, onSubmit, fields, btnProps}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({handleSubmit, isSubmitting}) => {
        return (
          <View style={{marginHorizontal: 10}}>
            {fields.map(x => (
              <Field key={x.name} {...x} />
            ))}
            <Button
              title="Submit"
              disabled={isSubmitting}
              onPress={handleSubmit}
              style={{marginVertical: 10}}
              {...btnProps}
            />
          </View>
        );
      }}
    </Formik>
  );
};

export default Form;
