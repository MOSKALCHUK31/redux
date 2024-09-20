import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import {addCustomerAction, removeCustomerAction} from './store/customerReducer'
import {fetchCustomers} from './asyncActions/customers'

function App() {
    const dispatch = useDispatch()
    const cash = useSelector((state) => state.cash.cash)
    const customers = useSelector((state) => state.customers.customers)

    const addCash = () => {
        dispatch({ type: 'ADD_CASH', payload: Number(prompt()) })
    }

    const getCash = () => {
        dispatch({ type: 'GET_CASH', payload: Number(prompt()) })
    }

    const addCustomer = () => {
        dispatch(addCustomerAction({
            name: prompt(),
            id: new Date()
        }))
    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }

    const getCustomers = async () => {
        dispatch(fetchCustomers())
    }

    return (
        <div className="App">
            <div>
                {cash}
            </div>
            <div>
                <button onClick={addCash}>
                    ADD BALANCE
                </button>
                <button onClick={getCash}>
                    GET BALANCE
                </button>
            </div>
            <br/><br/>
            <div>
                <button onClick={addCustomer}>
                    ADD CUSTOMER
                </button>
                <button onClick={getCustomers}>
                    GET MANY CUSTOMERS => ...
                </button>
            </div>
            <div>
                <ul>
                    {customers.map((c) => (
                        <li onClick={() => removeCustomer(c.id)} key={c.id}>
                            {c.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App
