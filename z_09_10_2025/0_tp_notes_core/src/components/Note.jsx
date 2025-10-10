import styles from './../css/Note.module.css'

const Note =({note, priority, setlistNotes, listnotes, index})=> {

    const deleteNote =()=> {
        setlistNotes(listnotes.filter((note,i)=> i!=index))
    }

    return (
        <div className={`border bg-light ${styles.noteCard}` }>
            <p className='mb-0'>{note} - <span className={priority==="High"? styles.high : priority=="Low"? styles.low : styles.medium}> {priority} </span></p> 
            <button className='btn btn-danger' onClick={deleteNote}>Delete</button>
        </div>
    ) 

}

export default Note;