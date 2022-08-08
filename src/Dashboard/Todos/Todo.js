import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Todo = ({todo}) => {
     const {description} = todo;
    return (
        <div>
            <h4>{description}</h4>
        </div>
    );
};

export default Todo;