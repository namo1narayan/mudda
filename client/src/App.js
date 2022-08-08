import React from 'react';
import { Admin, Resource} from 'react-admin';
import EmployeesList from './components/EmployeesList';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://localhost:3001/getUsers');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="Users" list={EmployeesList} />
    </Admin>
);

export default App;
