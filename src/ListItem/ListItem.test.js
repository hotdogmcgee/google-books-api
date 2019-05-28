import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import ListItem from './ListItem';


describe('ListItem component', () => {
  const bookTest = {
    volumeInfo: {
      authors: ['bill'],
      imageLinks: {
        smallThumbnail: "image"
        },
      title: "Manhattan Beach",
      description: "lorem ipsum lalalallaa yep yep"
      },

    saleInfo: {
      retailPrice: {
        amount: 50
      }
    }
  }
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItem book={bookTest}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected,', () => {
    const tree = renderer
      .create(<ListItem book={bookTest}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })

})