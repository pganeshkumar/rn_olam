import React, {useCallback, useContext, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, ScrollView, ImageBackground, View} from 'react-native';
import styles from './styles';
import {ThemeContext} from '../context/themeContext';
import Typography from '../components/Typography';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import globalStyles from '../globalStyle';
import Checkbox from '../components/Checkbox';

const TodoApp = () => {
  const {colors} = useContext(ThemeContext);
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(0);

  const addTodo = useCallback(() => {
    setTodoList(val => [
      ...val,
      {
        id: new Date().valueOf(),
        text: todoText,
        isDone: false,
      },
    ]);
    setTodoText('');
  }, [todoText]);

  const onChangeText = useCallback(text => {
    setTodoText(text);
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.flex}>
      <ImageBackground
        resizeMode="cover"
        style={[styles.backgroundImage, styles.center]}
        source={require('../assets/images/backgroundImage/backgroundImage.jpg')}>
        <Typography variant="h1" style={{color: colors.primary}}>
          Todo App
        </Typography>
      </ImageBackground>
      <View style={[globalStyles.row, {margin: 10}]}>
        <Textbox
          style={[globalStyles.flex, {marginRight: 10}]}
          placeholder="Please Write your todo here..."
          returnKeyType="done"
          value={todoText}
          onChangeText={onChangeText}
          onSubmitEditing={addTodo}
        />
        <Button title="Add Todo" onPress={addTodo} />
      </View>
      {/* <View>
        <Typography variant="body1">{counter}</Typography>
        <Button
          title="Increse Counter"
          onPress={() => setCounter(val => val + 1)}
        />
      </View> */}
      <ScrollView>
        {todoList.map(item => (
          <View style={[globalStyles.row]}>
            <Checkbox />
            <Typography key={item.id} variant="body1">
              {item.text}
            </Typography>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoApp;
