// contact us 
let CONTACT_DETAIL="https://tifinco.com:5000/admin/k_show";

let UPDATE_CONTACT="https://tifinco.com:5000/admin/kitchencontactus";


//Raw material link
let ADDROWMATERIAL = "https://tifinco.com:5000/admin/K_rawmaterial";


let  VIEWRAW = "https://tifinco.com:5000/admin/getuser";


let RAWMATERIAL_LIST = "https://tifinco.com:5000/admin/getuser";
let SEARCH =   "https://tifinco.com:5000/admin/getsearch";
let PRODUCT_DELETE =`https://tifinco.com:5000/admin/delete_rawmaterial`;
let FILTER_LINK = "https://tifinco.com:5000/admin/getfilter"
let UPDATE_PRODUCT = `https://tifinco.com:5000/admin/update`;
let GET_USERID = "https://tifinco.com:5000/admin/getoneid";
let LASTRAWMATERIAL="https://tifinco.com:5000/admin/lastrow_rawmaterial"


///master menu 
let MASTERMENU="https://tifinco.com:5000/admin/Mastermenu";



let MASTERMENULIST="https://tifinco.com:5000/admin/Masterlistshow";


let MASTERMENUSEARCH="https://tifinco.com:5000/admin/getsearchmastermenu";
let MASTERMENUDELETE="https://tifinco.com:5000/admin/delete_mastermenu";
let MASTERMENUFILTER="https://tifinco.com:5000/admin/Filtermenu";
let RANDOMGENRATOR="https://tifinco.com:5000/admin/insertunlikefood";
let RANDOMFOOD1="https://tifinco.com:5000/admin/RandomNoG";
var INSERTRANDOM="https://tifinco.com:5000/admin/InserRandomfood";



//for menus



let ADD_MENU = `https://tifinco.com:5000/admin/K_menuinsert`;
let SHOW_MENU = `https://tifinco.com:5000/admin/getmenuuser`;

let SEARCHMENUS = "https://tifinco.com:5000/admin/getsearchmenus";
let DELETEMENUS =`https://tifinco.com:5000/admin/deletemenus`;
let FILTERMENUS = "https://tifinco.com:5000/admin/getfiltermenus"
// let UPDATE_PRODUCT = `https://tifinco.com:5000/admin/updateproduct`;
let GET_ONE_MENUS= "https://tifinco.com:5000/admin/getOnemenus";
let TODAYMENU="https://tifinco.com:5000/admin/Todaymenu";
let K_TODAYMENURAWMATERIAL="https://tifinco.com:5000/admin/K_Todaylunch";

//today menu
 let LASTROW="https://tifinco.com:5000/admin/lastrow" ;


 
 //// Order list
 let SHOW_ORDER="https://tifinco.com:5000/admin/getorder";

 let DELETE_ORDER="https://tifinco.com:5000/admin/deleteorder/:id";
 let FILTERORDER="https://tifinco.com:5000/admin/Filterorder"; 
 let CURRENTORDER="https://tifinco.com:5000/admin/currentorder" ;
 
//customewr plan 

//master unlike food 
let UNLIKEFOOD="https://tifinco.com:5000/admin/addUnlikefood";

let RANDOMFOOD ="https://tifinco.com:5000/admin/insertunlikefood";



//customewr plan 

let GET_CUSTOMER_PLAN_DETAIL = "https://tifinco.com:5000/admin/getUserplandetail";
let GET_PLAN_BY_ID = "https://tifinco.com:5000/admin/getUserplandetail_id"
let USER_PLAN_SEARCH = "https://tifinco.com:5000/admin/searchuserplan";
let USR_PLAN_FILTER = "https://tifinco.com:5000/admin/filteruserplan";
let ACTIVE_USER_PLAN = "https://tifinco.com:5000/admin/activeUsers";
 /// COUNTING 

  let RAWMATIALCOUNT="https://tifinco.com:5000/admin/count";
let MENUCOUNT  ="https://tifinco.com:5000/admin/countmenu";
let ORDERCOUNT="https://tifinco.com:5000/admin/Countorder";
let CUSTOMERCOUNT="https://tifinco.com:5000/admin/CountUSER";

///////// Today lunch dashboard


//***************  vegitable count ******************* */
var ECOVEG="https://tifinco.com:5000/admin/EcoCustomercountveg";
var ECONONVEG="https://tifinco.com:5000/admin/EcoCustomercountnonveg";
var PREMINUMVEG="https://tifinco.com:5000/admin/PremiumCustomercountveg";
var PREMINUMNONVEG="https://tifinco.com:5000/admin/PremiumCustomercountnonveg";
var EXCUTIVEVEG="https://tifinco.com:5000/admin/ExcutiveCustomercountveg";
var EXCUTIVENONVEG="https://tifinco.com:5000/admin/ExcutiveCustomercountnonveg"

var GETRANDOMFOODCHAGES="https://tifinco.com:5000/admin/getRandomfoodMaterial"
var TODAY_LUNCH="https://tifinco.com:5000/admin/Todaylunch";
var TODAY_DINNER="https://tifinco.com:5000/admin/TodayDinner";

let TODAYLUNCHREF="https://tifinco.com:5000/admin/Todaylunchref"

let TODAYDINNERREF = "https://tifinco.com:5000/admin/Todaydinnerref"

var UPDATELUNCH="https://tifinco.com:5000/admin/UpdateTodaylunch";
var UPDATETODAYDINNER="https://tifinco.com:5000/admin/UpdateTodaydinner"



// /////// Tomorrow dashboard 

var TOMORROW_LUNCH ="https://tifinco.com:5000/admin/Tomorrowlunch";

var TOMORROW_DINNER= 'https://tifinco.com:5000/admin/TomorrowDinner';

let TOMORROWLUNCHREF ="https://tifinco.com:5000/admin/Tomorrowlunchref";

let TOMORROWDINNERREF = "https://tifinco.com:5000/admin/Tomorrowdinnerref";
/////////////  tiffin count 


var TIFFINDINNERCOUNT="https://tifinco.com:5000/admin/Tiffindinnercount";
var TIFINLUNCHCOUNT="https://tifinco.com:5000/admin/Tiffinlunchcount"
var TIFFINROTICOUNT="https://tifinco.com:5000/admin/Tiffinroticount";


export {CONTACT_DETAIL,UPDATE_CONTACT,
    
    ADDROWMATERIAL,RAWMATERIAL_LIST,SEARCH,PRODUCT_DELETE,FILTER_LINK,UPDATE_PRODUCT,GET_USERID,LASTRAWMATERIAL,

/// MASTER MENU
MASTERMENU,MASTERMENULIST,MASTERMENUSEARCH,MASTERMENUDELETE,MASTERMENUFILTER,RANDOMGENRATOR,INSERTRANDOM,RANDOMFOOD1,
//MENUS

SEARCHMENUS,DELETEMENUS,FILTERMENUS,GET_ONE_MENUS,ADD_MENU,SHOW_MENU,TODAYMENU,GETRANDOMFOODCHAGES,
//TODAY MENU
LASTROW,
//order list
SHOW_ORDER,FILTERORDER,DELETE_ORDER,CURRENTORDER,
// customer

GET_CUSTOMER_PLAN_DETAIL,USER_PLAN_SEARCH,USR_PLAN_FILTER,GET_PLAN_BY_ID,ACTIVE_USER_PLAN,
RAWMATIALCOUNT,MENUCOUNT,ORDERCOUNT,CUSTOMERCOUNT,
//UNLIKE FOOD
UNLIKEFOOD,RANDOMFOOD,
//TODAY LUNCH DASHBOARD
TODAY_LUNCH,TODAY_DINNER,TODAYLUNCHREF,TODAYDINNERREF,UPDATELUNCH,UPDATETODAYDINNER,
// TOMORROW DASHBOARD 
TOMORROW_LUNCH,TOMORROW_DINNER,TOMORROWLUNCHREF,TOMORROWDINNERREF,TIFFINROTICOUNT,TIFFINDINNERCOUNT,TIFINLUNCHCOUNT,
// VEGITABLE COUNT
ECOVEG,ECONONVEG,PREMINUMVEG,PREMINUMNONVEG,EXCUTIVEVEG,EXCUTIVENONVEG,K_TODAYMENURAWMATERIAL
}



