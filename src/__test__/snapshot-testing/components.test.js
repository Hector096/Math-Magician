import TestRenderer from 'react-test-renderer';
import Calculator from '../../components/calculator/calculator';
import Header from '../../components/Header';
import Home from '../../components/Home';
import Quote from '../../components/Quote';
import Footer from '../../components/Footer';

describe('test screenshots for all components', () => {
  test('matches Calculator snapshot', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Header snapshot', () => {
    const tree = TestRenderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Home snapshot', () => {
    const tree = TestRenderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Quote snapshot', () => {
    const tree = TestRenderer.create(<Quote />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Footer snapshot', () => {
    const tree = TestRenderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
