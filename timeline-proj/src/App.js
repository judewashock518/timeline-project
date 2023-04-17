import './App.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Pokemon Timeline: 1st + 2nd Generation!</h1>
      <VerticalTimeline></VerticalTimeline>
    </div>
  );
}

export default App;
