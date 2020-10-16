function Mendchigee(){
    return <h1>halo</h1>    
} 
function Mendchilgee123(props){
  return <h1> { props.ner}</h1>
} 
function Mendchilgee1010(props)  
{
     return( 
     <div>
        <h1>{props.ner}</h1>
        <p>{props.nas}</p>
    </div>
    )

    } function Etsegcomp(props)  {
        return(
            <div>
            <Mendchigee/> 
            <Mendchilgee123 ner={props.ner}/>
            <Mendchilgee1010 ner={props.ner} nas={props.nas}/>
            <table>
              <tr><td>{props.angi[0]}</td></tr>
              <tr><td>{props.angi[1]}</td></tr>
              <tr><td>{props.angi[2]}</td></tr>

            </table>



            </div>
        )
    }
ReactDOM.render(
   
    //<Mendchilgee123 ner ="hello"/>,
   //<Mendchilgee1010 ner="hello" nas='20'/>,
   <Etsegcomp ner="hall" nas="21" angi={['px', 'mc','nbb']}/>,
    document.getElementById('root')
  );  
  
