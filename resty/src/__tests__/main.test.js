import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Main from '../component/Main';


describe('React Form test',()=>{
    it('shoyld work when using the Button',()=>{
      let app = shallow(<Main />);
      expect(app.find('button').exists()).toBeTruthy();
    });
  
    it('should changes the mehod on click',()=>{
      let app = mount(<Main />);
      let input = app.find('input').at(1);
      input.simulate('click');
      console.log('******************************',input)
      expect(app.state('method')).toBe('get');
    });
    it('renders correctly', ()=> {
        const tree = renderer.create(<Main />).toJSON();
        expect(tree).toMatchSnapshot();
    });

  });