import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import { incrementCreator, decrementCreator } from './store/counterReducer'
import { getUsersCreator } from './store/usersReducer'

function App() {
    const count = useSelector((state) => state.countReducer.count)
    const users = useSelector((state) => state.userReducer.users)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <div>
                {count}
            </div>
            <div>
                <button onClick={() => dispatch(incrementCreator())}>
                    INCREMENT
                </button>
                <button onClick={() => dispatch(decrementCreator())}>
                    DECREMENT
                </button>
                <button>
                    GET USERS => ...
                </button>
            </div>
            <div>
                <ul>
                    {users.map((c) => (
                        <li key={c.id}>
                            {c.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App
