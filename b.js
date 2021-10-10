const dom={

    bm: document.getElementById('bm'),
    bt: document.getElementById('bt'),
    bn: document.getElementById('bn'),
    data: document.getElementById('d'),
    imageAll:document.getElementById('imageAll'),
}
//מוזיקה
dom.bm.onclick=()=>{
  let a=[];
  dom.imageAll.innerHTML="";
  fetch('https://pixabay.com/api/?key=23789515-8968976941a1898a003b78de7&category=music&image_type=photo')
  .then(response => response.json())
  .then(data => {
  
    a=data;
    console.log(a.hits[3])
  
    for(let i=0;i<20;i++){
      // dom.data.innerHTML+=a[i].login +`<br/>` ; 
      let div=`<div id="hh">
      <img src="${a.hits[i].previewURL}.jpg">
      </div>`;
     dom.imageAll.innerHTML+=div;
    }
   
  });
}
//מוזיקה
dom.bt.onclick=()=>{
    let a=[];
    dom.imageAll.innerHTML="";
    fetch('https://pixabay.com/api/?key=23789515-8968976941a1898a003b78de7&category=music&image_type=photo')
    .then(response => response.json())
    .then(data => {
    
      a=data;
      console.log(a.hits[3])
    
      for(let i=0;i<20;i++){
        // dom.data.innerHTML+=a[i].login +`<br/>` ; 
        let div=`<div id="hh">
       
         <img src="${a.hits[i].previewURL}.jpg">
        </div>`;
       dom.imageAll.innerHTML+=div;
      }
     
    });
  }
  //מוזיקה
dom.bn.onclick=()=>{
    let a=[];
    dom.imageAll.innerHTML="";
    fetch('https://pixabay.com/api/?key=23789515-8968976941a1898a003b78de7&category=music&image_type=photo')
    .then(response => response.json())
    .then(data => {
    
      a=data;
      console.log(a.hits[3])
    
      for(let i=0;i<20;i++){
        // dom.data.innerHTML+=a[i].login +`<br/>` ; 
        let div=`<div id="hh" alt="Slick Image">
        
        <img src="${a.hits[i].previewURL}.jpg">
        </div>`;
       dom.imageAll.innerHTML+=div;
      }
     
    });
  }
