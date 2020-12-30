import React, {useState} from 'react';
import {withStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'

const MainTextField = withStyles({
    root: {
        height: 50,
        width: 200
    }
})(TextField)
const MainText = styled.span`
  font-size:32px;
`
const ToDoListContainer = styled.div`
  height:50vh;
  width:50vw;
  display:flex;
  margin-left:25vw;
  margin-top:15vh;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`
const ToDoHeaderContainer = styled.div`
  height:30%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`

function ToDoForm({saveToDo}) {
    const [value, setValue] = useState('')
    return (
        <form onSubmit={event => {
            event.preventDefault()
            saveToDo(value)
            setValue('')
        }}
        >
            <ToDoListContainer>
                <ToDoHeaderContainer>
                    <MainText>Todos</MainText>
                    <MainTextField
                        variant="outlined"
                        placeholder="Add todo"
                        margin="normal"
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                        value={value}
                    />
                </ToDoHeaderContainer>
            </ToDoListContainer>
            <div>Сейчас стейт = {value}</div>
        </form>
    );
}

export default ToDoForm