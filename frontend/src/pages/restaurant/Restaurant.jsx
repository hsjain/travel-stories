import './restaurant.scss'
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import axios from 'axios';
const queryString = window.location.href;

const Restaurant = () => {

    const [items, setItems] = useState([])
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [input, setInput] = useState("")

    useEffect(() => {
        getAllItems();
    }, []);
    
    const getAllItems = () => {
        axios.get('http://localhost:8080/api/restaurant/' + queryString.split("=")[1].split("/")[0] + '/' + queryString.split("=")[2])
        .then((response) => {
            const allItems = response.data;
            setItems(allItems)
        })
    }

    const updateItems = () => {
        let flag = false;
        setCity(queryString.split("=")[1].split("/")[0])
        setCountry(queryString.split("=")[2])
        for (let i = 0; i < items.length; i++){
            if (items[i]["name"] === input){
                items[i]["mentions"] += 1
                flag = true;
                setItems(items => [...items])

                let helper = {
                    "mentions": items[i]["mentions"],
                }

                const response = axios.put('http://localhost:8080/api/restaurant/' + items[i]["name"] + '/' + queryString.split("=")[1].split("/")[0] + '/' + queryString.split("=")[2], helper)
                document.getElementById("inputf").value = "";
                break;
            }
        }
        if (!flag){
            let newElement = {name: input, mentions: 1}
            let helper = {
                "name": input,
                "mentions": 1,
                "city": queryString.split("=")[1].split("/")[0],
                "country": queryString.split("=")[2]
            }
            axios.post('http://localhost:8080/api/restaurant', helper)
            setItems(items => [...items, newElement]);
            document.getElementById("inputf").value = "";
        }   
    }

  return (
        <div className='body'> 
            <div className="container">
            <div className="box">
                <div className="additem">
                    <input type="text" id="inputf"className="additem" onChange={(e) => setInput(e.target.value)} placeholder='Add an restaurant...'/>
                    <AddIcon className="icon" onClick={() => updateItems()}/>
                </div>
                <div className="itemslist">
                    {items.map((item) => (
                        <>
                            <div className="items">
                                <>
                                    <span className='names'>{item.name}</span>
                                    <span className='mentions'>{item.mentions}</span>
                                </>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Restaurant