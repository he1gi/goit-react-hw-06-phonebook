import Form from './Form';
import Section from './Section';
import Filtration from './Filtration';
import Contacts from './Contacts';

import { ToastContainer } from 'react-toastify';

import { MainWrapper } from './App.styled';

export default function App() {
  return (
    <MainWrapper>
      <Section title={'PhoneBook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filtration />
        <Contacts />
      </Section>
      <ToastContainer />
    </MainWrapper>
  );
}
