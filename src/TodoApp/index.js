import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ImageBackground, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {ThemeContext} from '../context/themeContext';
import Typography from '../components/Typography';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import globalStyles from '../globalStyle';
import Checkbox from '../components/Checkbox';
import DeleteIcon from '../assets/icons/delete.svg';
import {BorderlessButton, FlatList} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import axiosInstance from '../utils/axiosInstance';

const validateTodoForm = values => {
  let errors = {};
  if (!values.todoText) {
    errors.todoText = 'Please Enter Todo Text.';
  }
  return errors;
};
const limit = 20;

const TodoApp = () => {
  const {colors} = useContext(ThemeContext);
  const [todoList, setTodoList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const formikRef = useRef(null);
  const insets = useSafeAreaInsets();

  const loadData = useCallback(async (nextPage, filterType = 'all') => {
    try {
      setLoading(true);
      let params = {
        _page: nextPage,
        _limit: limit,
      };
      if (filterType !== 'all') {
        params = {
          ...params,
          completed: filterType === 'completed',
        };
      }
      const res = await axiosInstance.get('todos', {
        params,
      });
      setTodoList(val => [...val, ...res.data]);
      setLoading(false);
    } catch (error) {
      formikRef.current.setErrors({
        serverError: error.message,
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData(page);
  }, [page, loadData]);

  const toggleTodo = async (item, checked) => {
    try {
      const res = await axiosInstance.put(`todos/${item.id}`, {
        ...item,
        completed: checked,
      });
      setTodoList(val => {
        const index = val.findIndex(x => x.id === item.id);
        return [...val.slice(0, index), res.data, ...val.slice(index + 1)];
      });
    } catch (error) {
      formikRef.current.setErrors({
        serverError: `unable to update task "${item.title}"`,
      });
    }
  };

  const deleteTodo = async item => {
    try {
      await axiosInstance.delete(`todos/${item.id}`);
      setTodoList(val => {
        const index = val.findIndex(x => x.id === item.id);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    } catch (error) {
      formikRef.current.setErrors({
        serverError: `unable to delete task "${item.title}"`,
      });
    }
  };

  const onSubmit = async (values, actions) => {
    console.log(actions);
    try {
      const res = await axiosInstance.post('todos', {
        title: values.todoText,
        completed: false,
      });
      setTodoList(val => [...val, res.data]);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={[globalStyles.row, globalStyles.vCenter, {margin: 10}]}>
        <Checkbox
          checked={item.completed}
          onChange={checked => toggleTodo(item, checked)}
        />
        <Typography
          key={item.id}
          variant="body1"
          style={[
            globalStyles.flex,
            {
              paddingHorizontal: 8,
              textDecorationLine: item.completed ? 'line-through' : 'none',
            },
          ]}>
          {`${item.id} ${item.title}`}
        </Typography>
        <BorderlessButton onPress={() => deleteTodo(item)}>
          <DeleteIcon height={24} width={24} fill={colors.primary} />
        </BorderlessButton>
      </View>
    );
  };

  const onEndReached = useCallback(() => {
    console.warn('onEndReached');
    setPage(val => val + 1);
  }, []);

  const footerComponent = () => {
    if (loading) return null;

    return (
      <View style={globalStyles.vCenter}>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  };

  return (
    <View style={globalStyles.flex}>
      <ImageBackground
        resizeMode="cover"
        style={[styles.backgroundImage, globalStyles.center]}
        source={require('../assets/images/backgroundImage/backgroundImage.jpg')}>
        <Typography variant="h1" style={{color: colors.primary}}>
          Todo App
        </Typography>
      </ImageBackground>
      <Formik
        innerRef={formikRef}
        initialValues={{
          todoText: '',
        }}
        onSubmit={onSubmit}
        validate={validateTodoForm}>
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => {
          return (
            <>
              {errors.serverError && (
                <Typography variant="error" style={{textAlign: 'center'}}>
                  {errors.serverError}
                </Typography>
              )}
              <View style={[globalStyles.row, {margin: 10}]}>
                <View style={[globalStyles.flex, {marginRight: 10}]}>
                  <Textbox
                    name="todoText"
                    placeholder="Please Write your todo here..."
                    returnKeyType="done"
                    value={values.todoText}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('todoText')}
                    onSubmitEditing={handleSubmit}
                  />
                  {touched.todoText && errors.todoText && (
                    <Typography variant="error">{errors.todoText}</Typography>
                  )}
                </View>
                <Button
                  title="Add Todo"
                  disabled={isSubmitting}
                  onPress={handleSubmit}
                />
              </View>
            </>
          );
        }}
      </Formik>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        onEndReached={onEndReached}
        ListFooterComponent={footerComponent}
      />
      <View
        style={[
          globalStyles.row,
          {backgroundColor: colors.primary, paddingBottom: insets.bottom},
        ]}>
        <Button
          title="All"
          onPress={() => loadData('all')}
          style={[globalStyles.flex, {borderRadius: 0}]}
        />
        <Button
          title="Pending"
          onPress={() => loadData('pending')}
          style={(globalStyles.flex, {borderRadius: 0})}
        />
        <Button
          title="Completed"
          onPress={() => loadData('completed')}
          style={(globalStyles.flex, {borderRadius: 0})}
        />
      </View>
    </View>
  );
};

export default TodoApp;
