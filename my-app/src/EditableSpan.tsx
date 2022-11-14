import React, {useState} from "react";

type EditableSpanPropsType = {
    title: string

}

export function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => setEditMode(true);
    let activateViewMode = () => setEditMode(false);

    return editMode
        ? <input value={props.title} onBlur={activateViewMode}/>
        :<span onDoubleClick={activateEditMode}>{props.title}</span>
}