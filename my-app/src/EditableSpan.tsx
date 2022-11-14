import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string

}

export function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState('')

    let activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    };
    let activateViewMode = () => setEditMode(false);
    let onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return editMode
        ? <input value={title} onBlur={activateViewMode} onChange={onChangeTitleHandler} autoFocus/>
        :<span onDoubleClick={activateEditMode}>{props.title}</span>
}