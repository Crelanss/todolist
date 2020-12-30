import React, {useState} from 'react';
import {withStyles} from "@material-ui/core";
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';

const ToDosContainer = styled.div`
    height:50% ;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const TaskContainer = styled.div`
    display:flex;
    align-items:center; 
    width:20%;
    height:10%;
`
const DeleteBtn = styled.button`
    margin-left:auto;
`

const ToDoList = (props) => {
    const {data} = props
    return (
        <ToDosContainer>

            {
                data.map((element) =>
                    <TaskContainer
                        key={element.id}
                    >
                        <Checkbox
                            inputProps={{'aria-label': 'primary checkbox'}}
                            checked={element.checkTodo}
                            onChange={()=>props.handleChange(element.id, element.checkTodo, element.date,element.todo)}
                        />
                        <span>{element.todo+' '+element.date}</span>
                        <DeleteBtn
                            onClick={() => props.deleteToDo(element.id)}
                        >Удалить</DeleteBtn>
                    </TaskContainer>
                )}

        </ToDosContainer>
    )
}
export default ToDoList


