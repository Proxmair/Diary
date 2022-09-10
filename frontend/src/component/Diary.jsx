import React, { useState, useEffect, Fragment } from 'react'
import { GrAdd } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'
import { FcPrevious, FcNext } from 'react-icons/fc'
import axios from 'axios';
import {useAlert} from 'react-alert'
import {useDispatch} from 'react-redux'
import {logout} from '../actions/user';
let innitialSubject = [
  {
    name: "Maths",
    notes: [
      {
        heading: "Heading",
        date: "09/09/2022",
        pageno: 0,
        text: "Text"
      }
    ]
  }
]


const Diary = () => {
  const dispatch=useDispatch();
  const alert=useAlert();
  let flag = true;

  const [email, setemail] = useState('');
  const [name, setname] = useState('Anonymous')

  const [subjectIndex, setsubjectIndex] = useState(0);
  const [currentPage, setcurrentPage] = useState(0);
  const [Subjects, setSubjects] = useState(innitialSubject);
  const [editSubject, seteditSubject] = useState(true);
  const [editPage, seteditPage] = useState(true);
  useEffect(() => {
    if (flag) {
      getSubjects();
      flag = false;
    }
  }, [])

  const getSubjects = async () => {
    try {
      const { data } = await axios.get("/api/v1/user");
      if(data.subjects.length!==0){
        innitialSubject=data.subjects;
        setSubjects(data.subjects);
      }
      else{
        innitialSubject=[
          {
            name: "Subject",
            notes: [
              {
                heading: "Heading",
                date: "09/09/2022",
                pageno: 0,
                text: "Text"
              }
            ]
          }
        ]
        setSubjects(innitialSubject);
      }
      setemail(data.email);
      setname(data.name);
    } catch (error) {
    }
  }
  const subjecthandler = index => e => {
    if (e.target.id !== '') {
      setcurrentPage(0);
      setsubjectIndex(index)
    }
  }
  const handleCurrentPage = (e) => {
    let nowpage;
    if (e.target.id === "next") {
      nowpage = (currentPage + 1) % innitialSubject[subjectIndex].notes.length;
      setcurrentPage(nowpage)
    }
    else if (e.target.id === "prev") {
      nowpage = (innitialSubject[subjectIndex].notes.length - 1 + currentPage) % innitialSubject[subjectIndex].notes.length;
      setcurrentPage(nowpage)
    }
  }
  const addSubjectHandler = () => {
    if (innitialSubject.length < 10) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      innitialSubject.push({
        name: "Subject",
        notes: [
          {
            heading: "heading",
            date: today,
            pageno: 0,
            text: "text"
          }
        ]
      });
      setSubjects(innitialSubject);
      setsubjectIndex(innitialSubject.length - 1);
    }
  }
  const editSubjectHandler = () => {
    seteditSubject(!editSubject)
  }
  const newSubjectNameHandler = (e) => {
    innitialSubject[e.target.id].name = e.target.value;
    setSubjects([...innitialSubject]);
  }
  const deleteSubjectHandler = index => (e) => {
    if (innitialSubject.length > 1) {
      if (subjectIndex === (innitialSubject.length - 1)) {
        setsubjectIndex(subjectIndex - 1)
      }
      innitialSubject = [...innitialSubject.slice(0, index), ...innitialSubject.slice(index + 1)];
      setSubjects([...innitialSubject]);
    }
  }
  const addPageHandler = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    innitialSubject[subjectIndex].notes.push(
      {
        heading: "heading",
        date: today,
        pageno: innitialSubject[subjectIndex].notes.length,
        text: "text"
      }
    )
    setSubjects([...innitialSubject]);
    setcurrentPage(innitialSubject[subjectIndex].notes.length - 1)
  }
  const editPageHandler = () => {
    seteditPage(!editPage);
  }
  const newNotesHandler = (e) => {
    if (e.target.type === "text") {
      innitialSubject[subjectIndex].notes[currentPage].heading = e.target.value;
    }
    else {
      innitialSubject[subjectIndex].notes[currentPage].text = e.target.value;
    }
    setSubjects([...innitialSubject]);
  }
  const deletePageHandler = () => {
    console.log('delete')
    if (innitialSubject[subjectIndex].notes.length > 1) {
      if (currentPage === (innitialSubject[subjectIndex].notes.length - 1)) {
        setcurrentPage(currentPage - 1);
      }
      innitialSubject[subjectIndex].notes = [...innitialSubject[subjectIndex].notes.slice(0, currentPage), ...innitialSubject[subjectIndex].notes.slice(currentPage + 1)];
      setSubjects([...innitialSubject]);
    }
  }
  const updateDiaryHandler=async(e)=>{
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/v1/update",
        {
          email,
          Subjects
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert.success(data.message);
    } catch (error) {
      alert.error(error);
    }
    
  }
  const logoutHandler=()=>{
    dispatch(logout());
  }

  return (
    <Fragment>
      <h1 className='diary-username' >Welcome <br/>{name} </h1>
      <div className='diary-container'>
        <div className='subject-container'>
          <h2>Subject</h2>
          <ul>
            {Subjects.map((subject, index) =>
              <li id={`${index}`} key={index} onClick={subjecthandler(index)}>
                <input
                  onChange={newSubjectNameHandler}
                  id={`${index}`}
                  disabled={editSubject}
                  type="text"
                  value={subject.name} />
                <MdDelete onClick={deleteSubjectHandler(index)} />
              </li>
            )}
          </ul>
          <div>
            <GrAdd onClick={addSubjectHandler} />
            <AiTwotoneEdit onClick={editSubjectHandler} />
          </div>
        </div>
        <div className='page-container'>
          <h2>{Subjects[subjectIndex].name}</h2>
          <div>
            <div><input onChange={newNotesHandler} disabled={editPage} type='text' value={Subjects[subjectIndex].notes[currentPage].heading} /></div>
            <div><p>{Subjects[subjectIndex].notes[currentPage].date}</p></div>
            <div><p>Page no: <span>{currentPage+1}</span></p></div>
          </div>
          <textarea disabled={editPage} value={Subjects[subjectIndex].notes[currentPage].text} rows={14} onChange={newNotesHandler} />
          <div className='page-icons'>
            <FcPrevious id='prev' onClick={handleCurrentPage} /><MdDelete onClick={deletePageHandler} /><GrAdd onClick={addPageHandler} /><AiTwotoneEdit onClick={editPageHandler} /><FcNext id='next' onClick={handleCurrentPage} />
          </div>
        </div>
      </div>
      <button onClick={updateDiaryHandler} className='diary-btn diary-save'>Save</button>
      <button onClick={logoutHandler} className='diary-btn diary-logout' >Logout</button> 


    </Fragment>
  )
}

export default Diary