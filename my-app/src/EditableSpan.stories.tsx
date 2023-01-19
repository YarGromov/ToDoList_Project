import React from 'react';
import {EditableSpan} from "./EditableSpan";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

export default {
    title: 'EditableSpan Component',
    component: EditableSpan
}

const changeCallback = action('Value changed')


export const EditableSpanBaseExample = () => {

    return <EditableSpan value={'Start value'} onChange={changeCallback}/>
}