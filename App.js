import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import StateFull from './src/Components/Statefull';
import StateLess from './src/Components/Stateless';
import DemoImages from './src/Components/DemoImages';
import DemoTextInput from './src/Components/DemoTextInput';
import DemoStyles from './src/Components/DemoStyles';
import ExamStyles from './src/Components/ExamStyles';
import Exam_2 from './src/Components/Exam_2';
import BindingData from './src/Components/HandlerComponent/BindingData';
import ExamBindingData from './src/Components/HandlerComponent/ExamBindingData';

const App = () => {
  return (
    <Fragment>
      {/* <StateFull /> */}
      {/* <StateLess /> */}
      {/* <DemoImages /> */}
      {/* <DemoTextInput /> */}
      {/* <DemoStyles /> */}
      {/* <ExamStyles /> */}
      {/* <Exam_2 /> */}
      {/* <BindingData /> */}
      <ExamBindingData />
    </Fragment>
  );
};

export default App;
