import styles from './../css/NotesForm.module.css'
import { useState } from "react";

const NotesForm = ({listnotes, setlistNotes})=> {
    const [note,setNote] = useState('')
    const [priority,setPriority] = useState('')
    const [errors,setErrores] = useState({note: '', priority: ''})


    const addNote = (e)=>{
        e.preventDefault()
        const errorsCopy = {...errors}
        !note? errorsCopy.note = "Empty input" :  errorsCopy.note = '';
        !priority? errorsCopy.priority = 'Select not selected': errorsCopy.priority='';
        
        if(!note || !priority){
            setErrores(errorsCopy)
            return;}


        setlistNotes([...listnotes, {note, priority}])
        setNote('')
        setPriority('')
        setErrores({note: '', priority: ''})
            
    }

    return (
        <div>
            <form onSubmit={(e)=> addNote(e)}>
                <div>
                    <input type="text" placeholder='Write down your note' className="input-group-text" name="note" id={styles.note} value={note} onChange={e=> setNote(e.target.value)}/>
                    {errors.note && <p style={{color: "red"}}>{errors.note}</p>}
                </div>
                <div>
                    <select className="form-select" name="priority" id={styles.priority} value={priority} onChange={e=> setPriority(e.target.value)}>
                        <option value="---">---</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    {errors.priority && <p style={{color: "red"}}>{errors.priority}</p>}
                </div>
                <button className={`btn btn-primary ${styles.addBtn}`} >Add note</button>
            </form>
        </div>
    )
}


export default NotesForm;