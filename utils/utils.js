const paths = Object.assign({},
    { p1q1: "https://drive.google.com/file/d/1WgTKZltshjzN1AIEc73Ime4U5QWLoRIu/preview"},
    { p1s1: "https://drive.google.com/file/d/1Cb8pHIGa42XYE57U8fTHEmZjl-LxMuRQ/preview"},
    { p1q2: "https://drive.google.com/file/d/1QchuqfT9I9teG-SV8c37U1Ej5iCjFsMq/preview"},
    { p1s2: "https://drive.google.com/file/d/1LbzVkC-FDc4yZHltyIhakSBIjBpwAnaL/preview"},
    { p1q3: "https://drive.google.com/file/d/1GetTjJADPmUOLj-porZOJuBkj2WvcOa-/preview"},
    { p1s3: "https://drive.google.com/file/d/1j9s4iK4MO9XHcZxK22l_Qw5j3ALkOgeR/preview"},
    { p1q4: "https://drive.google.com/file/d/1K8vvfqMC6d0myf36xI8br195wM6iVNlX/preview"},
    { p1s4: "https://drive.google.com/file/d/1HWv9TpuZxr-h1_f2D_BQUS_aLgWLXU5s/preview"},
    { p1q5: "https://drive.google.com/file/d/1A6ggif21_RfgRj-58nWuNDyonwSjdtB4/preview"},
    { p1s5: "https://drive.google.com/file/d/1lN5a-4CRcfgjS8ZpByQ2JKI9t5G4Wpn7/preview"},
    { p1q6: "https://drive.google.com/file/d/1fL9IeikWN-SAqwF6ggnjpiGMGe1dbfW4/preview"},
    { p1s6: "https://drive.google.com/file/d/14AOwvMSJnaksD2kWA9Rxn0ZOv7ECZBb6/preview"},
    { p1q7: "https://drive.google.com/file/d/1DECNIuUkPt8xT05IlbexYyDlSjkZRb5m/preview"},
    { p1s7: "https://drive.google.com/file/d/13S8O_vhmgjByLdGrr8Fn8PN8yXU5ejmi/preview"},
    { p1q8: "https://drive.google.com/file/d/1zc3EODCbyIiBIIJQdN60ELpF0NwGmM9r/preview"},
    { p1s8: "https://drive.google.com/file/d/10FGNDaQYajYjcah5AVABZMqJiKhurFT4/preview"},
    { p3q1: ""},
    { p3s1: ""},
    { p3q2: ""},
    { p3s2: ""},
    { p3q3: ""},
    { p3s3: ""},
    { p3q4: ""},
    { p3s4: ""},
    { p3q5: ""},
    { p3s5: ""},
    { p3q6: ""},
    { p3s6: ""},
);


const titles = [ `{ "title":"CS Wizard" }`, `// CS Wizard`, `/* CS Wizard */`,'CS Wizard']
let titleNum = titles.length-1
const titleClick = ()=>{
    const title = document.getElementById('title')
    if (titleNum < titles.length - 1) {
        titleNum++
    } else {
        titleNum = 0
    }
    title.innerText = titles[titleNum]
}



export {paths, titles,titleNum,titleClick}