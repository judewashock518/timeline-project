import './App.css';
import timelineElements from './pokemon';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Pokemon Timeline: 1st + 2nd Generation!</h1>
      <VerticalTimeline>
        {timelineElements.map(element => {
          return (
            <VerticalTimelineElement
              key={element.key}
              num={element.num}
              numClassName="num"
            >
              <h3 className="vertical-timeline-pokemon-name">
                {element.name}
                {element.image}
              </h3>
              <h5 className="vertical-timeline-pokemon-description">
                {element.variations.description}
              </h5>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
