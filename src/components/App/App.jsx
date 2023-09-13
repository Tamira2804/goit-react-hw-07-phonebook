import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
// import { selectIsLoading, selectError } from '../../redux/selectors';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App__container">
      <h1>Phonebook</h1>
      <ContactForm />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
export default App;
