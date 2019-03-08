/**
 * Created by Di Wang on 2019-03-07.
 */
import * as React from 'react';
import {Button} from '../../src';
import {IoIosAdd } from 'react-icons/io';

const App = (props: any) => {
    return (
        <div>
            <Button size="xs" color="pink" round>Primary Button</Button>
            <Button link size="xs" color="pink" round>Primary Button</Button>
            <Button disabled ripple size="sm" color="pink">Primary Button</Button>
            <Button ripple size="sm" color="yellow" round link dash>Primary Button</Button>
            <Button ripple size="sm" color="yellow" round outline dash>Primary Button</Button>
            <Button ripple color="pink" dash onClick={() => console.log('dasdasd')}>Primary Button</Button>
            <Button size="lg" color="pink" block round>Primary Button</Button>
            <Button color="pink" round outline icon={<IoIosAdd />}>Primary Button</Button>
            <Button size="lg" color="pink" loading outline disabled>Primary Button</Button>
        </div>
    );
};

export default App;