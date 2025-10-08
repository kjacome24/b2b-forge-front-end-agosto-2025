import { useState } from "react";
import styles from './../css/NotesForm.module.css'

const NotesForm = () => {
    const [note,setNote] = useState('')
    const [priority,setPriority] = useState('')

    return (
        <div className={styles.cardNotes}>
            <form >
                <div>
                    <input type="text" className="form-group" id="note" name="note" placeholder="Wirte down your note" value={note}  onChange={(e)=> setNote(e.target.value)}/>
                </div>
                <div>
                    <select name="priority" id="priority" value={priority} onChange={(e=> setPriority(e.target.value))}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <button className="btn btn-primary">Add Note</button>
            </form>
        </div>
    )
}


export default NotesForm;