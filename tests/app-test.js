import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const modulePath = '../src/components/app.jsx';

jest.dontMock(modulePath);

const AppView = require(modulePath);


describe('AppView', () => {

    it('Has main class', () => {

        let appView = TestUtils.renderIntoDocument(<AppView />);
        let appNode = ReactDOM.findDOMNode(appView);

        expect(appNode.className).toEqual('main');
    });
});
