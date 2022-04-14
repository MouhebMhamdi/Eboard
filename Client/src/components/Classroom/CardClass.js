import React , {useState,useEffect} from 'react';
import '../css/CardClass.css';
import CardItemClass from './CardItemClass';
import { Grid, Label, Segment ,  } from 'semantic-ui-react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUserConnect } from '../../utils/api';
import { useHistory } from "react-router";
import {
  selectclass,
  fetchclass,
} from "../../redux/slices/classline";
import ReactPaginate from 'react-paginate';
import { getclassApi } from '../../utils/Class';





export default function CardClass () {
  const [currentUser,setCurrentUser]=useState(undefined);
  const dispatch = useDispatch();
  const [classs] = useSelector(selectclass);
  const [pageNumber, setPageNumber] = useState(0);
  const [CsPerPage] = useState(3);
  const pagesVisited = pageNumber * CsPerPage ;
  const history = useHistory();

const aff = (id) => {
   return "Level " + id + "th";
  
};
const getObj = (obj) => {
  return  Math.ceil(obj.length / CsPerPage) ;
 
};
const selectClass = async (classSelected) => {
  const res = await getclassApi.getclassById(classSelected);
  console.log(res.classOwner);
  localStorage.setItem("idClass", JSON.stringify(res));
  history.push("/feed");
};
useEffect(() => {

  dispatch(fetchclass(currentUser,"Active"));

  
    
    axios.get(getUserConnect,{
      headers: {
          'Authorization':`Bearer ${JSON.parse(localStorage.getItem("login")).AccessToken}`
      }
  }).then(rslt=>{
      setCurrentUser(rslt.data[0]._id);
  })
 

  }, [currentUser]);
  
  
 

  const changePage = ({ selected }) => {
  setPageNumber(selected);
  };
   
  return (
      <div className='cards__Class__wrapper'>
    {classs?.map((cl, index) => (
      <Grid columns={1} rows={3} key ={index}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>
        {aff(cl._id)}

        </Label>
          <ul className='cards__Class__items' >
          
          {cl.classObjet?.slice(pagesVisited, pagesVisited + CsPerPage).map((f , i) => (
        <div  key={i} onClick={() => selectClass(f._id)}>
            <CardItemClass  
              src={f.file}
              course={f.className}
              teacher={f.classOwner.FirstName+' '+f.classOwner.LastName}
              class={f.classSection}
              meet ='OFFLINE'
              src1={f.classOwner.User.file}
              classes={f}
              
              
            />
                 
                 </div>
            ))}
            
          
          </ul>
          
          <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={getObj(cl.classObjet)}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </Segment>
      
      </Grid.Column>
      </Grid>
    ))}
      </div>
    
  );
}



