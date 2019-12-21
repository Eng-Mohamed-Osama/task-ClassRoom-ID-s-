//the Main Array
let students = [
    {
        name : 'marko',
        img : 'img1',
        id: 13
    },
    {
        name : 'dina',
        img : 'img5',
        id: 71
    },
    {
        name : 'rana',
        img : 'img3',
        id: 10
    },
    {
        name : 'reem',
        img : 'img5',
        id: 41
    },
    {
        name : 'mohamed',
        img : 'img4',
        id: 22
    }
]
//function that loop through the array to output them in the DOM
function addcont(){
    let res ='';
        for (let st of students){
            res += `
            <div>
                <h3>${st.name}</h3>
                <img src = 'imgs/${st.img}.jpg'>
                <span>${st.id}</span>
            </div>
            `;
            console.log(res);
        }
        document.getElementById('container').innerHTML = res;
}
addcont();
// Adding a Card function
function str(){
    let nameVal = document.getElementById('addName').value;
    let imgVal = document.getElementById('addPic').value;
    let idVal = document.getElementById('Num').value;
    if(nameVal != "" && imgVal != "" && idVal != ""){
        let a = 
            {
                name : nameVal,
                img : imgVal,
                id: idVal
            }
        students.push(a)
        addcont();
        document.getElementById('addName').value = "";
        document.getElementById('addPic').value = "";
        document.getElementById('Num').value = "";
    }else{
        alert("please insert the student Data");
    }

} 
// Getting a random Card function
function rand(){
    let con = document.getElementById('container').children;
    let newarr = [];
    for(i=0;i<con.length;i++){
        newarr.push(con[i]);
        console.log(newarr[i]);
        console.log(newarr);
    }
    var randomItem = newarr[Math.floor(Math.random()*newarr.length)];
    document.getElementById('random').innerHTML = randomItem.innerHTML;
}