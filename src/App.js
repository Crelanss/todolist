import React, {useEffect, useState} from 'react';
import './App.css';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import TextField from '@material-ui/core/TextField';
import {testFetch} from "./Fethces";

const urlAdd = 'https://lod-backend-spring.herokuapp.com/api/v1/user/add'
const urlGet = 'https://lod-backend-spring.herokuapp.com/api/v1/user/all'
const urlDelete = 'https://lod-backend-spring.herokuapp.com/api/v1/user/delete/'
const urlPatch = 'https://lod-backend-spring.herokuapp.com/api/v1/user/change/'

function App() {
    const [data, setData] = useState([])
    useEffect(()=>{fetch(urlGet).then(response => response.json()).then(data => setData(data))},[])
    return (
        <div>
            <ToDoForm
                saveToDo={(todoText) => {
                    const trimmedText = todoText.trim()
                    if (trimmedText.length > 0) {
                        testFetch(urlAdd, 'POST', {
                            todo: trimmedText,
                            date: new Date().toLocaleTimeString(),
                            checkTodo:false
                        }).then(() => fetch(urlGet).then(response => response.json()).then(data => setData(data)))
                    }
                }}
            />
            <ToDoList
                deleteToDo={toDoIndex => {
                  testFetch(urlDelete+toDoIndex,'DELETE').then(()=>fetch(urlGet).then(response=>response.json()).then(data=>setData(data)))
                }}
                data={data}
                handleChange={(toDoIndex, isChecked,oldDate,oldTodo)=>{
                    testFetch(urlPatch+toDoIndex, 'PUT', {
                        todo:oldTodo,
                        date:oldDate,
                        checkTodo:!isChecked
                    }).then(() => fetch(urlGet).then(response => response.json()).then(data => setData(data)))
                }}
            />

        </div>
    )

}

export default App;
