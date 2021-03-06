import Typography from '@material-ui/core/Typography';
import { Switch, Route } from 'react-router-dom';
import BookListContainer from './BookList/BookListContainer';
import BookDetailContainer from './BookDetail/BookDetailContainer';

const App = () => {
  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>

      <Switch>
        <Route exact path='/' component={BookListContainer} />
        <Route path='/books/:id' component={BookDetailContainer} />
      </Switch>
    </div>
  );
};

export default App;
