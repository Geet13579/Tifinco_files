// ------------------ADD TIFFINS -----------------------


let ADD_TIFFIN = "https://tifinco.com:5000/admin/addtiffin"; 
let SHOW_TIFFIN_LIST = "https://tifinco.com:5000/admin/showtiffin";
let SEARCH_TIFFINS = "https://tifinco.com:5000/admin/searchtiffin";

let GET_ONETIFFIN = "https://tifinco.com:5000/admin/getOnetiffin";

let GETLAST_TIFFIN = "https://tifinco.com:5000/admin/showlasttiffin"



//   ------------------Discard Tiffins-------------------------------------
let MOVE_DISCARD_TIFFIN ="https://tifinco.com:5000/admin/disscardOnetiffin"

let SHOW_DISCARD_TIFFIN ="https://tifinco.com:5000/admin/showdiscardtiffin"

let SEARCH_DISCARD_TIFFINS = "https://tifinco.com:5000/admin/searchdiscardtiffins";

let DELETEONE_DISCARD_TIFFIN="https://tifinco.com:5000/admin/deleteOnedistiffin";


let DELETMul_DISCARD_TIFFIN = "https://tifinco.com:5000/admin/deletemanydistiffin";

//  ----------------------------ADD ALLOCATE TIFFINS------------------------------
let GET_PLANINFO = "https://tifinco.com:5000/admin/get_planInfo";
let GET_TIFFINS = "https://tifinco.com:5000/admin/get_tiffins";
let GET_USERDATA = "https://tifinco.com:5000/admin/get_userdata";
let INSERT_TIFFIN_ALLOCATED_DATA = "https://tifinco.com:5000/admin/insert_tiffin_allocated_data";


// -------------------------------- SHOW TIFFIN ALLOCATED USERS--------------------------
let GET_TIFFIN_ALLOCATED_USER = "https://tifinco.com:5000/admin/get_tiffin_Allocate_User";

// -------------------------------GET_TIFFINPRICE --------------------------------------
let GET_TIFFINPRICE = "https://tifinco.com:5000/admin/get_TiffinPrice";
let INSERT_TIFFIN_PRICE = "https://tifinco.com:5000/admin/insert_TiffinPrice";
let DELETE_TIFFIN_PRICE = "https://tifinco.com:5000/admin/delete_TiffinPrice";
 
export
{
    
    ADD_TIFFIN,SHOW_TIFFIN_LIST,SEARCH_TIFFINS,GET_ONETIFFIN,
    
    
    MOVE_DISCARD_TIFFIN,SHOW_DISCARD_TIFFIN,SEARCH_DISCARD_TIFFINS,DELETEONE_DISCARD_TIFFIN,DELETMul_DISCARD_TIFFIN,GETLAST_TIFFIN,


    GET_PLANINFO,GET_TIFFINS, GET_USERDATA, INSERT_TIFFIN_ALLOCATED_DATA,

    GET_TIFFIN_ALLOCATED_USER,

    GET_TIFFINPRICE , INSERT_TIFFIN_PRICE, DELETE_TIFFIN_PRICE
}