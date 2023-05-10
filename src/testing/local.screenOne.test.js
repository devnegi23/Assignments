import React from 'react';
import ScreenOne from '../ScreenOne';
import renderer from 'react-test-renderer';

const findWhere = tree => {
  console.log('node', tree);
  tree.props.testID === 'main_view';
};

describe('Testing ScreenOne component', () => {
  test('render it ', () => {
    const tree = renderer.create(<ScreenOne />).toJSON();
    console.log('tree', tree.props);
    // expect(tree).toMatchSnapshot()
    expect(findWhere(tree)).toExist();
  });
});

// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import ScreenOne from '../ScreenOne'

// Enzyme.configure({adapter: new Adapter()});

// it("testing of enzyme ",()=>{
//     const tree = shallow(<ScreenOne/>)
//     console.log("shallow",shallow)
//     console.log("tree",tree)
//     // expect(tree).toMatchSnapshot()
//     expect(tree.findWhere((node) => node.prop('testID') === 'todo-item')).toExist();
// })
