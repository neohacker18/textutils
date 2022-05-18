import React from 'react'


export default function About(props) {
    // const[myStyle,setMyStyle]=useState({
    //     color:'#212529',
    //     backgroundColor:'white',
    //     border: '2px solid white'
    // })

    let aboutStyle={
        color:props.mode==='dark'?'white':'#212529'
    }
    let myStyle={
        color:props.mode==='dark'?'white':'#212529',
        backgroundColor:props.mode==='dark'?'#212529':'white'
    }
    let freeStyle={
        color:props.mode==='dark'?'white':'#212529',
        backgroundColor:props.mode==='dark'?'#212529':'white',
        border:props.mode==='dark'?'1px solid white':''
    }
    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if(myStyle.color==='white')
    //     {
    //         setMyStyle({
    //             color:'#212529',
    //             backgroundColor:'white',
    //             border:'2px solid white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'#212529'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }

  return (
    <div className='container' style={aboutStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Textutils gives you a way to analyze your text quickly and efficiently.</strong> Be it word count, character count or other facilities.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={freeStyle}>
            <h2 className="accordion-header" id="headingTwo" >
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={freeStyle}>
                TextUtils is a <strong>free</strong> character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software words in <strong>any</strong> web browsers such as <code>Chrome</code>, <code>Firefox</code>, <code>Internet Explorer</code>, <code>Safari</code>, <code>Opera</code>. It suits to count characters in facebook, blog, book, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
