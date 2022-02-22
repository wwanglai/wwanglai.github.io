
var menuType = 6;





window.onload=function(){


    /* xhtml compliant external links workaround script
if (!document.getElementsByTagName) return; 
var externalLinks = document.getElementsByTagName("a"); 
for (var i=0; i<externalLinks.length; i++) 
{ 
var externalLink = externalLinks[i]; 
if (externalLink.getAttribute("href") && externalLink.getAttribute("rel") == "external")
{
externalLink.target = "_blank";
}
}
*/
    /*
setTimeout("alert('Hello world!')", 1000);
setTimeout(function() { alert("Hello world!"); }, 1000);
alert("OnCl\x69\x65ntMous\x65\x4fver"); 
alert("\x4fnClien\x74\x49temF\x6f\x63us"); 

alert("\x6d\x6fuseover" + "," + "Mouse\x4f\x76erHan\x64\x6cer"); 


alert("\x20rtlcontex\x74\x20Rad\x4d\x65n\x75\x5f"+"     " + "_\x72\x74l"); 

alert("\x76ar Sende\x72\x20= a\x72\x67um\x65\156t\x73\x5b0];\x20\166a\x72 Arg\x75ments \x3d\040\x61rgum\x65\156\x74\163[\x31];"); 

alert("\x75l"); 
alert("\x52\x61\x64\x43\x61\x6c\x6c\x62\x61\x63\x6b\x4e\x61\x6d\x65\x73\x70\x61\x63\x65"); 

Test_NameSpace_1();
*/


    //createContainer();
    //createSideBarLeft();

    CreateMenuItemFromBottom();




    var elHomePageHoder = document.getElementById("div-1c");

    createPanelbarNav(elHomePageHoder);


    var elPanelbarNavSubItemHoder = document.getElementById("tbodyPanelbarNavTitle");  //document.getElementById("div-1c");

    elPanelbarNavSubItemHoder.insertRow(1);

    elPanelbarNavSubItemHoder.rows[1].insertCell(0);

    elPanelbarNavSubItemHoder.rows[1].cells[0].colSpan="2";

    createPanelbarNavSubItem(elPanelbarNavSubItemHoder.rows[1].cells[0]);


    var elli_Products = document.getElementById("li_Products");

    CreateTopMenuSubItem(elli_Products);

    var elli_CtrolsForNET = document.getElementById("li_CtrolsForNET");

    CreateTopMenuSubSubItem(elli_CtrolsForNET);


    // SetTopMenu("ctl00_ctl00_topMenu");

    window["ctl00_ctl00_topMenu"] = new RadMenu("ctl00_ctl00_topMenu");

    //window["ctl00_ctl00_topMenu"].Initialize({"Skin":"telerikCom","Attributes":{"imagesbasedir":"~/images/menu/","overlay":"True"}},{"ctl00_ctl00_topMenu_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m12":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m13":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m14":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m15":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m16":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m17":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m12":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m13":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2":{"CssClass":"focused","NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m12":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m13":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m14":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m15":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m16":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m17":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m18":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m19":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m20":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m21":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m22":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m23":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m7":{"NavigateAfterClick":true}});
    //window["ctl00_ctl00_topMenu"].Initialize({"Skin":"telerikCom","Attributes":{"imagesbasedir":"~/images/menu/","overlay":"True"}},{"ctl00_ctl00_topMenu_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m12":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m13":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m14":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m15":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m16":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m17":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m12":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m13":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m14":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m15":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m16":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m17":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m18":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m19":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m20":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m21":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m22":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m23":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m7":{"NavigateAfterClick":true}});

    //window["ctl00_ctl00_topMenu"].Initialize({"Skin":"telerikCom","Attributes":{"imagesbasedir":"~/images/menu/","overlay":"True"}},{"ctl00_ctl00_topMenu_m0":{"CssClass":"focused","NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0":{"CssClass":"focused","NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m12":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m13":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m14":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m15":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m16":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m1_m17":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m0_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m0_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m2_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m1_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m11":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m12":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m13":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m14":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m15":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m16":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m17":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m18":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m19":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m20":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m21":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m22":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m5_m23":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m2_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m7":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m8":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m9":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m3_m10":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m1_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m2_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m4_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m5_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m4_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m0":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m1":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m2":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m3_m3":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m4":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m5":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m6":{"NavigateAfterClick":true},"ctl00_ctl00_topMenu_m5_m7":{"NavigateAfterClick":true}});


    window["ctl00_ctl00_topMenu"].Initialize(
    {
        "Skin":"telerikCom",
        "Attributes":{
            "imagesbasedir":"~/images/menu/",
            "overlay":"True"
        }
    },
    {
        "a_Products":{
            "CssClass":"focused",
            "NavigateAfterClick":true
        },        // ctl00_ctl00_topMenu_m0
        "a_CtrolsForNET":{
            "CssClass":"focused",
            "NavigateAfterClick":true
        },    // ctl00_ctl00_topMenu_m0_m0
        "a_TopMenuSubSubItem_Overview":{
            "NavigateAfterClick":true
        },           // ctl00_ctl00_topMenu_m0_m0_m0
        "a_TopMenuSubSubItem_UIControls":{
            "NavigateAfterClick":true
        },         // ctl00_ctl00_topMenu_m0_m0_m1
        "ctl00_ctl00_topMenu_m0_m0_m1_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m7":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m8":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m9":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m10":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m11":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m12":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m13":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m14":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m15":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m16":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m1_m17":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m7":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m8":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m9":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m0_m10":{
            "NavigateAfterClick":true
        },
        "a_TopMenuSubSubItem_BrowserSupport":{
            "NavigateAfterClick":true
        },      // ctl00_ctl00_topMenu_m0_m0_m11
        "a_CtrolsForWIN":{
            "NavigateAfterClick":true
        },                        // ctl00_ctl00_topMenu_m0_m1
        "ctl00_ctl00_topMenu_m0_m1_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m1_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m1_m1_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m1_m1_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m1_m1_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m1_m1_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m1_m1_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m1_m1_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m0_m1_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m2_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m2_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m2_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m2_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m2_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m3_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m3_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m3_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m1_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m1_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m1_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m1_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m1_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m1_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m1_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m1_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m2_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m7":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m8":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m9":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m10":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m11":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m12":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m13":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m14":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m15":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m16":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m17":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m18":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m19":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m20":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m21":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m22":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m5_m23":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m7":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m8":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m9":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m2_m10":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m7":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m8":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m9":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m3_m10":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m1_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m1_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m1_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m2_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m2_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m2_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m4_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m4_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m4_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m4_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m4_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m5_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m5_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m5_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m5_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m4_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m3_m0":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m3_m1":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m3_m2":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m3_m3":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m4":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m5":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m6":{
            "NavigateAfterClick":true
        },
        "ctl00_ctl00_topMenu_m5_m7":{
            "NavigateAfterClick":true
        }
    });



}


function createSideBarLeft()
{

    try {


        var divSideToolBarLeft = document.createElement("div");
        divSideToolBarLeft.id = "SideToolBarLeft";
        //--------------
        /*
        var text = "asdg                     adgadsfdgddfggfdgfdsgfretretrtretrfrgdsfadfadsfdafsfdffdfddffdfdafadsfadsfdasfasdfadsf"

        var txtNode=document.createTextNode(text);
        divSideToolBarLeft.appendChild(txtNode);
   */     
        //-------------------------
        ////////////        document.body.appendChild(divSideToolBarLeft);	// or some other node
         
        var divContainer = document.getElementById("Container");
        divContainer.appendChild(divSideToolBarLeft);	
        
        
        
        divSideToolBarLeft.style.position = "absolute";
      
        divSideToolBarLeft.style.top = "0px";
        divSideToolBarLeft.style.left = "0px";
           
      
        
        divSideToolBarLeft.style.borderRight = "2px solid black";
        
        
        divSideToolBarLeft.style.borderBottom = "2px solid black";
        divSideToolBarLeft.style.borderLeft = "2px dotted red";
        divSideToolBarLeft.style.borderTop = "2px dotted blue";
        
        divSideToolBarLeft.style.float = "left";
        divSideToolBarLeft.style.height = "600";    // "150px"
        
        divSideToolBarLeft.style.width = "2%";    // "150px"
     
        //        divSideToolBarLeft.addEventListener("mouseover", highlight, false);
        //        divSideToolBarLeft.addEventListener("mouseout",  normal,    false);


        divSideToolBarLeft.style.background = "#ccc";



    } catch (oException) {
        alert(oException.message); //outputs “Two numbers are required.”
    }

}


function createContainer()
{

    try {


        var divContainer = document.createElement("div");
        divContainer.id = "Container";

        document.body.appendChild(divContainer);	// or some other node
        
        divContainer.style.position = "absolute";
      
        divContainer.style.left = "50%";
        //           divContainer.style.top = "0px";


        divContainer.style.borderRight = "2px solid black";
        
        
        divContainer.style.borderBottom = "2px solid black";
        divContainer.style.borderLeft = "2px dotted red";
        divContainer.style.borderTop = "2px dotted blue";


        divContainer.style.marginLeft = "-300px";
        divContainer.style.width = "50%";    // "150px"

        divContainer.style.marginTop = "10px";
           
      
        divContainer.style.height = "600";    // "150px"
        
     
    //        divContainer.addEventListener("mouseover", highlight, false);
    //        divContainer.addEventListener("mouseout",  normal,    false);





    } catch (oException) {
        alert(oException.message); //outputs “Two numbers are required.”
    }

}


function createPanelbarNavWrapper()
{

    try {


        var divPanelbarNavWrapper = document.createElement("div");
        divPanelbarNavWrapper.id = "PanelbarNavWrapper";





        document.body.appendChild(divPanelbarNavWrapper);	// or some other node
        

    } catch (oException) {
        alert(oException.message); //outputs “Two numbers are required.”
    }

}

function createPanelbarNav(ParentElement)
{

    var submenutype = "drop"  // "right"

    try {


 
 
        var tablePanelbarNavTitle = document.createElement("table");
        tablePanelbarNavTitle.setAttribute("id","tablePanelbarNavTitle");

        //        tablePanelbarNavTitle.style.className = "header";
        //        tablePanelbarNavTitle.setAttribute("class","header");
        
        /*
        tablePanelbarNavTitle.style.backgroundposition = "right bottom";  // 217px
        tablePanelbarNavTitle.style.paddingleft = "5px";  // 217px
        tablePanelbarNavTitle.style.fontsize = "11px";  // 217px
        tablePanelbarNavTitle.style.backgroundimage = "url(images/navigation/sideNavCategoryBg.gif)";  // 217px
*/   
        /*
        tablePanelbarNavTitle.setAttribute("background-position","right bottom");
       tablePanelbarNavTitle.setAttribute("padding-left","5px");
        tablePanelbarNavTitle.setAttribute("font-size","11px");
        tablePanelbarNavTitle.setAttribute("background-image","url(../images/navigation/sideNavCategoryBg.gif)");
        tablePanelbarNavTitle.setAttribute("cursor","pointer");
    */    
        
        
        //       tablePanelbarNavTitle.style.visibility = "hidden";
        tablePanelbarNavTitle.style.width = "166px";  // 217px

        tablePanelbarNavTitle.style.cellSpacing = "0";
        tablePanelbarNavTitle.style.cellPadding = "0";
        tablePanelbarNavTitle.style.border = "0";
        tablePanelbarNavTitle.setAttribute("margin", "0px");

        //oTable.setAttribute("width","100%");
        //oTable.setAttribute("border", "1");
        /*
        oTable.setAttribute("font-size", "11px");
        oTable.setAttribute("left", "0px");
        oTable.setAttribute("margin", "0px");
        oTable.setAttribute("position", "absolute");
        oTable.setAttribute("top", "0px");
        oTable.setAttribute("border-collapse", "collapse");
        */

        //create the tbody
        var tbodyPanelbarNavTitle = document.createElement("tbody");
        tbodyPanelbarNavTitle.id = "tbodyPanelbarNavTitle";
        tablePanelbarNavTitle.appendChild(tbodyPanelbarNavTitle);
        //create the first row
        tbodyPanelbarNavTitle.insertRow(0);
        
        tbodyPanelbarNavTitle.rows[0].className = "header";
        
        //        tbodyPanelbarNavTitle.rows[0].style.background = "url(images/menu4.gif)";
        
        tbodyPanelbarNavTitle.rows[0].onmouseover = function(){
            imgPanelbarNavTitle.src="images/Loading.gif";
            tbodyPanelbarNavTitle.rows[0].style.color = "#83ca07"; // "red";
 
            // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","underline");    // 无效！
                                                                                          
            // tbodyPanelbarNav.rows[0].setAttribute("color","#83ca07","important");  // 不能用！
            if (tablePanelbarNavSubItem)
            {
                tablePanelbarNavSubItem.style.visibility = "visible";
            }
        }
        
        tbodyPanelbarNavTitle.rows[0].onmouseout = function(){
            imgPanelbarNavTitle.src="images/cs.gif";
            tbodyPanelbarNavTitle.rows[0].style.color = "#666666"; // "black";
            // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","none");         // 无效！
 
            // tbodyPanelbarNav.rows[0].setAttribute("color","#666666","important");  // 不能用！
            if (tablePanelbarNavSubItem)
            {
                tablePanelbarNavSubItem.style.visibility = "hidden";
            }
                                         
        }
        /*
        
        
        
        tbodyPanelbarNavTitle.rows[0].onclick = function(){
                                                    imgPanelbarNavTitle.src="images/cs.gif";
                                                    tbodyPanelbarNavTitle.rows[0].style.color = "black"; // "black";                                        
                                                    // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","none");         // 无效！
 
                                                    // tbodyPanelbarNav.rows[0].setAttribute("color","#666666","important");  // 不能用！
                                                    if (tablePanelbarNavSubItem)
                                                    {
                                                        tablePanelbarNavSubItem.style.visibility = "visible";
                                                    }
                                              
                                              }
        
        
        
*/        
        
        tbodyPanelbarNavTitle.rows[0].insertCell(0);
        
        
        tbodyPanelbarNavTitle.rows[0].cells[0].setAttribute("id","cellPanelbarNavTitle_Image");
        tbodyPanelbarNavTitle.rows[0].cells[0].setAttribute("width","1px");
        //       tbodyPanelbarNavTitle.rows[0].cells[0].setAttribute("white-space","nowrap");
        
        var imgPanelbarNavTitle =  document.createElement("img");
        imgPanelbarNavTitle.setAttribute("id","imgPanelbarNavTitle");
        imgPanelbarNavTitle.setAttribute("alt","");
        
        imgPanelbarNavTitle.setAttribute("src","images/cs.gif");
        
        /*
        
        imgPanelbarNavTitle.onmouseover = function(){
                                                    this.src="images/c.gif";
                                                    tbodyPanelbarNavTitle.rows[0].style.color = "red";                                        
                                               }
        
        imgPanelbarNavTitle.onmouseout = function(){
                                                    this.src="images/cs.gif";
                                                    tbodyPanelbarNavTitle.rows[0].style.color = "black";                                        
                                               }
*/
              
        tbodyPanelbarNavTitle.rows[0].cells[0].appendChild(imgPanelbarNavTitle);
        
        
        
        
        tbodyPanelbarNavTitle.rows[0].insertCell(1);
        
        
        tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("id","cellPanelbarNavTitle_Text");
        // tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("width","100%");
        //        tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("white-space","nowrap");
        
        textPanelbarNavTitle = "r.a.d.controls";
        var txtNode=document.createTextNode(textPanelbarNavTitle);
        
        
        tbodyPanelbarNavTitle.rows[0].cells[1].onmouseover = function(){
            // this.style.color="red";
            this.style.textdecoration = "underline";
        }
        
        tbodyPanelbarNavTitle.rows[0].cells[1].onmouseout = function(){
            // this.style.color="black";
            this.style.textdecoration = "none";
        }
  
 
        /*

        var spanPanelbarNavTitle =  document.createElement("span");
        spanPanelbarNavTitle.setAttribute("id","spanPanelbarNavTitle");
   
   
        spanPanelbarNavTitle.appendChild(txtNode);
   */
        tbodyPanelbarNavTitle.rows[0].cells[1].appendChild(txtNode);   //appendChild(txtNode);  spanPanelbarNavTitle
        
     
        
        //create the second row
        tbodyPanelbarNavTitle.insertRow(1);
        
        tbodyPanelbarNavTitle.rows[1].className = "header";
        
        tbodyPanelbarNavTitle.rows[1].onmouseover = function(){
            imgPanelbarNavTitle_ajax.src="images/Loading.gif";
            tbodyPanelbarNavTitle.rows[1].style.color = "#83ca07"; // "red";
 
        // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","underline");    // 无效！
                                                                                          
        // tbodyPanelbarNav.rows[0].setAttribute("color","#83ca07","important");  // 不能用！
        }
        
        tbodyPanelbarNavTitle.rows[1].onmouseout = function(){
            imgPanelbarNavTitle_ajax.src="images/cs.gif";
            tbodyPanelbarNavTitle.rows[1].style.color = "#666666"; // "black";
        // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","none");         // 无效！
 
        // tbodyPanelbarNav.rows[0].setAttribute("color","#666666","important");  // 不能用！
        }
        
        tbodyPanelbarNavTitle.rows[1].insertCell(0);
        
        tbodyPanelbarNavTitle.rows[1].cells[0].setAttribute("id","cellPanelbarNavTitle_ajax");
        tbodyPanelbarNavTitle.rows[1].cells[0].setAttribute("width","1px");
        // tbodyPanelbarNavTitle.rows[1].cells[0].setAttribute("white-space","nowrap");
        
        var imgPanelbarNavTitle_ajax =  document.createElement("img");
        imgPanelbarNavTitle_ajax.setAttribute("id","imgPanelbarNavTitle_ajax");
        imgPanelbarNavTitle_ajax.setAttribute("alt","");
        
        imgPanelbarNavTitle_ajax.setAttribute("src","images/cs.gif");
        
        
        /*
        
        imgPanelbarNavTitle_ajax.onmouseover = function(){
                                                    this.src="images/c.gif";
                                                    tbodyPanelbarNavTitle.rows[1].style.color = "red";                                        
                                               }
        
        imgPanelbarNavTitle_ajax.onmouseout = function(){
                                                    this.src="images/cs.gif";
                                                    tbodyPanelbarNavTitle.rows[1].style.color = "black";                                        
                                               }
*/
              
        tbodyPanelbarNavTitle.rows[1].cells[0].appendChild(imgPanelbarNavTitle_ajax);
        
        
        tbodyPanelbarNavTitle.rows[1].insertCell(1);
        
        
        tbodyPanelbarNavTitle.rows[1].cells[1].setAttribute("id","cellPanelbarNavTitle_ajax_Text");
        // tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("width","100%");
        //        tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("white-space","nowrap");
        
        textPanelbarNavTitle_ajax = "r.a.d.ajax";
        txtNode=document.createTextNode(textPanelbarNavTitle_ajax);
        
        tbodyPanelbarNavTitle.rows[1].cells[1].onmouseover = function(){
            // this.style.color="red";
            this.style.textdecoration = "underline";
        }
        
        tbodyPanelbarNavTitle.rows[1].cells[1].onmouseout = function(){
            // this.style.color="black";
            this.style.textdecoration = "none";
        }
  
 
        /*

        var spanPanelbarNavTitle_ajax =  document.createElement("span");
        spanPanelbarNavTitle_ajax.setAttribute("id","spanPanelbarNavTitle_ajax");
   
   
        spanPanelbarNavTitle_ajax.appendChild(txtNode);
   */
        tbodyPanelbarNavTitle.rows[1].cells[1].appendChild(txtNode);   //appendChild(txtNode);  spanPanelbarNavTitle
        
        
        
        
        
        
        //create the third row
        tbodyPanelbarNavTitle.insertRow(2);
        
        tbodyPanelbarNavTitle.rows[2].className = "header";
        
        tbodyPanelbarNavTitle.rows[2].onmouseover = function(){
            imgPanelbarNavTitle_calendar.src="images/Loading.gif";
            tbodyPanelbarNavTitle.rows[2].style.color = "#83ca07"; // "red";
 
        // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","underline");    // 无效！
                                                                                          
        // tbodyPanelbarNav.rows[0].setAttribute("color","#83ca07","important");  // 不能用！
        }
        
        tbodyPanelbarNavTitle.rows[2].onmouseout = function(){
            imgPanelbarNavTitle_calendar.src="images/cs.gif";
            tbodyPanelbarNavTitle.rows[2].style.color = "#666666"; // "black";
        // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","none");         // 无效！
 
        // tbodyPanelbarNav.rows[0].setAttribute("color","#666666","important");  // 不能用！
        }
        
        tbodyPanelbarNavTitle.rows[2].insertCell(0);
        
        tbodyPanelbarNavTitle.rows[2].cells[0].setAttribute("id","cellPanelbarNavTitle_calendar");
        tbodyPanelbarNavTitle.rows[2].cells[0].setAttribute("width","1px");
        // tbodyPanelbarNavTitle.rows[1].cells[0].setAttribute("white-space","nowrap");
        
        var imgPanelbarNavTitle_calendar =  document.createElement("img");
        imgPanelbarNavTitle_calendar.setAttribute("id","imgPanelbarNavTitle_calendar");
        imgPanelbarNavTitle_calendar.setAttribute("alt","");
        
        imgPanelbarNavTitle_calendar.setAttribute("src","images/cs.gif");
        
        
        /*
        
        imgPanelbarNavTitle_calendar.onmouseover = function(){
                                                    this.src="images/c.gif";
                                                    tbodyPanelbarNavTitle.rows[1].style.color = "red";                                        
                                               }
        
        imgPanelbarNavTitle_calendar.onmouseout = function(){
                                                    this.src="images/cs.gif";
                                                    tbodyPanelbarNavTitle.rows[1].style.color = "black";                                        
                                               }
*/
              
        tbodyPanelbarNavTitle.rows[2].cells[0].appendChild(imgPanelbarNavTitle_calendar);
        
        
        tbodyPanelbarNavTitle.rows[2].insertCell(1);
        
        
        tbodyPanelbarNavTitle.rows[2].cells[1].setAttribute("id","cellPanelbarNavTitle_calendar_Text");
        // tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("width","100%");
        //        tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("white-space","nowrap");
        
        textPanelbarNavTitle_calendar = "r.a.d.calendar";
        txtNode=document.createTextNode(textPanelbarNavTitle_calendar);
        
        tbodyPanelbarNavTitle.rows[2].cells[1].onmouseover = function(){
            // this.style.color="red";
            this.style.textdecoration = "underline";
        }
        
        tbodyPanelbarNavTitle.rows[2].cells[1].onmouseout = function(){
            // this.style.color="black";
            this.style.textdecoration = "none";
        }
  
 
        /*

        var spanPanelbarNavTitle_calendar =  document.createElement("span");
        spanPanelbarNavTitle_calendar.setAttribute("id","spanPanelbarNavTitle_calendar");
   
   
        spanPanelbarNavTitle_calendar.appendChild(txtNode);
   */
        tbodyPanelbarNavTitle.rows[2].cells[1].appendChild(txtNode);   //appendChild(txtNode);  spanPanelbarNavTitle
        
      
      

        //create the fourth row
        tbodyPanelbarNavTitle.insertRow(3);
        
        tbodyPanelbarNavTitle.rows[3].className = "header";
        
        tbodyPanelbarNavTitle.rows[3].onmouseover = function(){
            imgPanelbarNavTitle_chart.src="images/Loading.gif";
            tbodyPanelbarNavTitle.rows[3].style.color = "#83ca07"; // "red";
 
        // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","underline");    // 无效！
                                                                                          
        // tbodyPanelbarNav.rows[0].setAttribute("color","#83ca07","important");  // 不能用！
        }
        
        tbodyPanelbarNavTitle.rows[3].onmouseout = function(){
            imgPanelbarNavTitle_chart.src="images/cs.gif";
            tbodyPanelbarNavTitle.rows[3].style.color = "#666666"; // "black";
        // tbodyPanelbarNav.rows[0].setAttribute("text-decoration","none");         // 无效！
 
        // tbodyPanelbarNav.rows[0].setAttribute("color","#666666","important");  // 不能用！
        }
        
        tbodyPanelbarNavTitle.rows[3].insertCell(0);
        
        tbodyPanelbarNavTitle.rows[3].cells[0].setAttribute("id","cellPanelbarNavTitle_chart");
        tbodyPanelbarNavTitle.rows[3].cells[0].setAttribute("width","1px");
        // tbodyPanelbarNavTitle.rows[1].cells[0].setAttribute("white-space","nowrap");
        
        var imgPanelbarNavTitle_chart =  document.createElement("img");
        imgPanelbarNavTitle_chart.setAttribute("id","imgPanelbarNavTitle_chart");
        imgPanelbarNavTitle_chart.setAttribute("alt","");
        
        imgPanelbarNavTitle_chart.setAttribute("src","images/cs.gif");
        
        
        /*
        
        imgPanelbarNavTitle_chart.onmouseover = function(){
                                                    this.src="images/c.gif";
                                                    tbodyPanelbarNavTitle.rows[1].style.color = "red";                                        
                                               }
        
        imgPanelbarNavTitle_chart.onmouseout = function(){
                                                    this.src="images/cs.gif";
                                                    tbodyPanelbarNavTitle.rows[1].style.color = "black";                                        
                                               }
*/
              
        tbodyPanelbarNavTitle.rows[3].cells[0].appendChild(imgPanelbarNavTitle_chart);
        
        
        tbodyPanelbarNavTitle.rows[3].insertCell(1);
        
        
        tbodyPanelbarNavTitle.rows[3].cells[1].setAttribute("id","cellPanelbarNavTitle_chart_Text");
        // tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("width","100%");
        //        tbodyPanelbarNavTitle.rows[0].cells[1].setAttribute("white-space","nowrap");
        
        textPanelbarNavTitle_chart = "r.a.d.chart";
        txtNode=document.createTextNode(textPanelbarNavTitle_chart);
        
        tbodyPanelbarNavTitle.rows[3].cells[1].onmouseover = function(){
            // this.style.color="red";
            this.style.textdecoration = "underline";
        }
        
        tbodyPanelbarNavTitle.rows[3].cells[1].onmouseout = function(){
            // this.style.color="black";
            this.style.textdecoration = "none";
        }

  
 
        /*

        var spanPanelbarNavTitle_chart =  document.createElement("span");
        spanPanelbarNavTitle_chart.setAttribute("id","spanPanelbarNavTitle_chart");
   
   
        spanPanelbarNavTitle_chart.appendChild(txtNode);
   */
        tbodyPanelbarNavTitle.rows[3].cells[1].appendChild(txtNode);   //appendChild(txtNode);  spanPanelbarNavTitle

        
        /*

        
        //create the first row
        tbodyPanelbarNav.insertRow(3);
        tbodyPanelbarNav.rows[3].insertCell(0);
        
        tbodyPanelbarNav.rows[3].cells[0].setAttribute("id","panelbarNav_PI2");
        tbodyPanelbarNav.rows[3].cells[0].setAttribute("width","100%");
        tbodyPanelbarNav.rows[3].cells[0].setAttribute("white-space","nowrap");
        
        textPanelbarNav = "r.a.d.chart";
        var txtNode=document.createTextNode(textPanelbarNav);
        
        tbodyPanelbarNav.rows[3].cells[0].appendChild(txtNode);
        
 */       
        
        //add the table to the document body
        ParentElement.appendChild(tablePanelbarNavTitle);

 
 
 
 
 
 
 
        

    } catch (oException) {
        alert(oException.message); //outputs “Two numbers are required.”
    }

}


















function createPanelbarNavSubItem(ParentElement)
{

    var submenutype = "drop"  // "right"

    try {


 
 
        var tablePanelbarNavSubItem = document.createElement("table");
        tablePanelbarNavSubItem.setAttribute("id","tablePanelbarNavSubItem");

        tablePanelbarNavSubItem.style.className = "navigation_item";
        //        tablePanelbarNavSubItem.setAttribute("class","header");
        
        /*
        tablePanelbarNavSubItem.style.backgroundposition = "right bottom";  // 217px
        tablePanelbarNavSubItem.style.paddingleft = "5px";  // 217px
        tablePanelbarNavSubItem.style.fontsize = "11px";  // 217px
        tablePanelbarNavSubItem.style.backgroundimage = "url(images/navigation/sideNavCategoryBg.gif)";  // 217px
*/   
        /*
        tablePanelbarNavSubItem.setAttribute("background-position","right bottom");
       tablePanelbarNavSubItem.setAttribute("padding-left","5px");
        tablePanelbarNavSubItem.setAttribute("font-size","11px");
        tablePanelbarNavSubItem.setAttribute("background-image","url(../images/navigation/sideNavCategoryBg.gif)");
        tablePanelbarNavSubItem.setAttribute("cursor","pointer");
    */    
        
        
        tablePanelbarNavSubItem.style.visibility = "hidden";
        tablePanelbarNavSubItem.style.width = "100%";  // 217px

        tablePanelbarNavSubItem.style.cellSpacing = "0";
        tablePanelbarNavSubItem.style.cellPadding = "0";
        tablePanelbarNavSubItem.style.border = "0";
        //        tablePanelbarNavSubItem.setAttribute("margin", "0px");

        //oTable.setAttribute("width","100%");
        //oTable.setAttribute("border", "1");
        /*
        oTable.setAttribute("font-size", "11px");
        oTable.setAttribute("left", "0px");
        oTable.setAttribute("margin", "0px");
        oTable.setAttribute("position", "absolute");
        oTable.setAttribute("top", "0px");
        oTable.setAttribute("border-collapse", "collapse");
        */

        //create the tbody
        var tbodyPanelbarNavSubItem = document.createElement("tbody");
        tablePanelbarNavSubItem.appendChild(tbodyPanelbarNavSubItem);
        //create the first row
        tbodyPanelbarNavSubItem.insertRow(0);
        
        //        tbodyPanelbarNavSubItem.rows[0].className = "header";
        
        //        tbodyPanelbarNavSubItem.rows[0].style.background = "url(images/menu4.gif)";
        
        tbodyPanelbarNavSubItem.rows[0].onmouseover = function(){
            imgPanelbarNavSubItem_Overview.src="images/Loading.gif";
            tbodyPanelbarNavSubItem.rows[0].style.color = "red"; // "red";
 
        // tbodyPanelbarNavSubItem.rows[0].setAttribute("text-decoration","underline");    // 无效！
                                                                                          
        // tbodyPanelbarNavSubItem.rows[0].setAttribute("color","#83ca07","important");  // 不能用！
        }
        
        tbodyPanelbarNavSubItem.rows[0].onmouseout = function(){
            imgPanelbarNavSubItem_Overview.src="images/cs.gif";
            tbodyPanelbarNavSubItem.rows[0].style.color = "#666666"; // "black";
        // tbodyPanelbarNavSubItem.rows[0].setAttribute("text-decoration","none");         // 无效！
 
        // tbodyPanelbarNavSubItem.rows[0].setAttribute("color","#666666","important");  // 不能用！
        }
        
        
        
        
        tbodyPanelbarNavSubItem.rows[0].insertCell(0);
        
        
        tbodyPanelbarNavSubItem.rows[0].cells[0].setAttribute("id","cellPanelbarNavSubItem_Overview_Image");
        tbodyPanelbarNavSubItem.rows[0].cells[0].setAttribute("width","1px");
        //       tbodyPanelbarNavSubItem.rows[0].cells[0].setAttribute("white-space","nowrap");
        
        var imgPanelbarNavSubItem_Overview =  document.createElement("img");
        imgPanelbarNavSubItem_Overview.setAttribute("id","imgPanelbarNavSubItem_Overview");
        imgPanelbarNavSubItem_Overview.setAttribute("alt","");
        
        imgPanelbarNavSubItem_Overview.setAttribute("src","images/cs.gif");
        
        /*
        
        imgPanelbarNavSubItem.onmouseover = function(){
                                                    this.src="images/c.gif";
                                                    tbodyPanelbarNavSubItem.rows[0].style.color = "red";                                        
                                               }
        
        imgPanelbarNavSubItem.onmouseout = function(){
                                                    this.src="images/cs.gif";
                                                    tbodyPanelbarNavSubItem.rows[0].style.color = "black";                                        
                                               }
*/
              
        tbodyPanelbarNavSubItem.rows[0].cells[0].appendChild(imgPanelbarNavSubItem_Overview);
        
        
        
        
        tbodyPanelbarNavSubItem.rows[0].insertCell(1);
        
        
        tbodyPanelbarNavSubItem.rows[0].cells[1].setAttribute("id","cellPanelbarNavSubItem_Overview_Text");
        // tbodyPanelbarNavSubItem.rows[0].cells[1].setAttribute("width","100%");
        //        tbodyPanelbarNavSubItem.rows[0].cells[1].setAttribute("white-space","nowrap");
        
        textPanelbarNavSubItem_Overview = "Overview";
        var txtNode=document.createTextNode(textPanelbarNavSubItem_Overview);
        
        
        tbodyPanelbarNavSubItem.rows[0].cells[1].onmouseover = function(){
            // this.style.color="red";
            this.style.textdecoration = "underline";
        }
        
        tbodyPanelbarNavSubItem.rows[0].cells[1].onmouseout = function(){
            // this.style.color="black";
            this.style.textdecoration = "none";
        }
  
 
        /*

        var spanPanelbarNavSubItem_Overview =  document.createElement("span");
        spanPanelbarNavSubItem_Overview.setAttribute("id","spanPanelbarNavSubItem_Overview");
   
   
        spanPanelbarNavSubItem_Overview.appendChild(txtNode);
   */
        tbodyPanelbarNavSubItem.rows[0].cells[1].appendChild(txtNode);   //appendChild(txtNode);  spanPanelbarNavSubItem_Overview
        
     
        
        //create the second row
        tbodyPanelbarNavSubItem.insertRow(1);
        
        //tbodyPanelbarNavSubItem.rows[1].className = "header";
        
        tbodyPanelbarNavSubItem.rows[1].onmouseover = function(){
            imgPanelbarNavSubItem_WhatsNew.src="images/Loading.gif";
            tbodyPanelbarNavSubItem.rows[1].style.color = "#83ca07"; // "red";
 
        // tbodyPanelbarNavSubItem.rows[0].setAttribute("text-decoration","underline");    // 无效！
                                                                                          
        // tbodyPanelbarNavSubItem.rows[0].setAttribute("color","#83ca07","important");  // 不能用！
        }
        
        tbodyPanelbarNavSubItem.rows[1].onmouseout = function(){
            imgPanelbarNavSubItem_WhatsNew.src="images/cs.gif";
            tbodyPanelbarNavSubItem.rows[1].style.color = "#666666"; // "black";
        // tbodyPanelbarNavSubItem.rows[0].setAttribute("text-decoration","none");         // 无效！
 
        // tbodyPanelbarNavSubItem.rows[0].setAttribute("color","#666666","important");  // 不能用！
        }
        
        tbodyPanelbarNavSubItem.rows[1].insertCell(0);
        
        tbodyPanelbarNavSubItem.rows[1].cells[0].setAttribute("id","cellPanelbarNavTitle_WhatsNew");
        tbodyPanelbarNavSubItem.rows[1].cells[0].setAttribute("width","1px");
        // tbodyPanelbarNavSubItem.rows[1].cells[0].setAttribute("white-space","nowrap");
        
        var imgPanelbarNavSubItem_WhatsNew =  document.createElement("img");
        imgPanelbarNavSubItem_WhatsNew.setAttribute("id","imgPanelbarNavSubItem_WhatsNew");
        imgPanelbarNavSubItem_WhatsNew.setAttribute("alt","");
        
        imgPanelbarNavSubItem_WhatsNew.setAttribute("src","images/cs.gif");
        
        
        /*
        
        imgPanelbarNavSubItem_WhatsNew.onmouseover = function(){
                                                    this.src="images/c.gif";
                                                    tbodyPanelbarNavSubItem.rows[1].style.color = "red";                                        
                                               }
        
        imgPanelbarNavSubItem_WhatsNew.onmouseout = function(){
                                                    this.src="images/cs.gif";
                                                    tbodyPanelbarNavSubItem.rows[1].style.color = "black";                                        
                                               }
*/
              
        tbodyPanelbarNavSubItem.rows[1].cells[0].appendChild(imgPanelbarNavSubItem_WhatsNew);
        
        
        tbodyPanelbarNavSubItem.rows[1].insertCell(1);
        
        
        tbodyPanelbarNavSubItem.rows[1].cells[1].setAttribute("id","cellPanelbarNavSubItem_WhatsNew_Text");
        // tbodyPanelbarNavSubItem.rows[0].cells[1].setAttribute("width","100%");
        //        tbodyPanelbarNavSubItem.rows[0].cells[1].setAttribute("white-space","nowrap");
        
        textPanelbarNavSubItem_WhatsNew = "What's New";
        txtNode=document.createTextNode(textPanelbarNavSubItem_WhatsNew);
        
        tbodyPanelbarNavSubItem.rows[1].cells[1].onmouseover = function(){
            // this.style.color="red";
            this.style.textdecoration = "underline";
        }
        
        tbodyPanelbarNavSubItem.rows[1].cells[1].onmouseout = function(){
            // this.style.color="black";
            this.style.textdecoration = "none";
        }
  
 
        /*

        var spanPanelbarNavSubItem_WhatsNew =  document.createElement("span");
        spanPanelbarNavSubItem_WhatsNew.setAttribute("id","spanPanelbarNavSubItem_WhatsNew");
   
   
        spanPanelbarNavSubItem_WhatsNew.appendChild(txtNode);
   */
        tbodyPanelbarNavSubItem.rows[1].cells[1].appendChild(txtNode);   //appendChild(txtNode);  spanPanelbarNavSubItem_WhatsNew
        
        
        
        
        
        
        //create the third row

        
        /*

        
        //create the first row
        tbodyPanelbarNav.insertRow(3);
        tbodyPanelbarNav.rows[3].insertCell(0);
        
        tbodyPanelbarNav.rows[3].cells[0].setAttribute("id","panelbarNav_PI2");
        tbodyPanelbarNav.rows[3].cells[0].setAttribute("width","100%");
        tbodyPanelbarNav.rows[3].cells[0].setAttribute("white-space","nowrap");
        
        textPanelbarNav = "r.a.d.chart";
        var txtNode=document.createTextNode(textPanelbarNav);
        
        tbodyPanelbarNav.rows[3].cells[0].appendChild(txtNode);
        
 */       
        
        //add the table to the document body
        ParentElement.appendChild(tablePanelbarNavSubItem);

 
 
 
 
 
 
 
        

    } catch (oException) {
        alert(oException.message); //outputs “Two numbers are required.”
    }

}

function ShowHidePanelbar()
{




}

function PropertyCollections(){
}






function toggle(sId) 
{
    var obj = document.getElementById(sId);
    obj.style.display = (obj.style.display == "none") ? "block" : "none";
}



//--------三明电信网络监控中心

function menuShow(obj,maxh,obj2,obj3)
{
    if(obj.style.pixelHeight<maxh)
    {
        obj.style.pixelHeight+=maxh/5;
        obj.filters.alpha.opacity+=20;
        obj2.src="images/l_menu_point03.gif";
        if(obj.style.pixelHeight==maxh/5)
            obj.style.display='block';
        myObj=obj;
        myMaxh=maxh;
        myObj2=obj2;
        myObj3=obj3;
        setTimeout('menuShow(myObj,myMaxh,myObj2,myObj3)','5');
    }
}
function menuHide(obj,maxh,obj2,obj3)
{
    if(obj.style.pixelHeight>0)
    {
        if(obj.style.pixelHeight==maxh/5)
            obj.style.display='none';
        obj.style.pixelHeight-=maxh/5;
        obj.filters.alpha.opacity-=20;
        obj2.src="images/l_menu_point01.gif";
        myObj=obj;
        myMaxh=maxh;
        myObj2=obj2;
        myObj3=obj3;
        setTimeout('menuHide(myObj,myMaxh,myObj2,myObj3)','5');
    }
    else
    if(whichContinue)
        whichContinue.click();
}
function menuChange(obj,maxh,obj2,obj3)
{
    if(obj.style.pixelHeight)
    {
        menuHide(obj,maxh,obj2,obj3);
        whichOpen='';
        whichcontinue='';
    }
    else
    if(whichOpen)
    {
        whichContinue=obj3;
        whichOpen.click();
    }
    else
    {
        menuShow(obj,maxh,obj2,obj3);
        whichOpen=obj3;
        whichContinue='';
    }
}
//-------------------------------


function ShowAll()
/**
*close all the layers
*/
{
    for(var i = 0; i < document.all.length; i++)
    {
        if (document.all(i).className == "collapsed")
        {
            document.all(i).className = "expanded" ;
        }
    }
}

function CloseAll()
/**
*expand all the layers
*/
{
    for(var i = 0; i < document.all.length; i++)
    {
        if (document.all(i).className == "expanded")
        {
            document.all(i).className = "collapsed" ;
        }
    }
}

function outliner()
{
    var child = document.all[event.srcElement.getAttribute("child",false)];
    if (null != child){
        if(child.className == "collapsed")
        {
            child.className = "expanded";
            return;
        }
        if(child.className == "expanded")
        {
            child.className = "collapsed";
            return;
        }
    }
}

//-->

//----------------------------------WebMapUI

function PropertyShowHide(nums1)
{
    var picShow=document.getElementById("center_img1");

    if(nums1==1)
    {
        ww = "98%" + "," + "10,*";
        top.logicmain.rows=ww;
        top.lbottomframe.tableMainInfo.style.display = "none";
        picShow.src="../image/zup.gif";
        picShow.alt="显示/隐藏菜单";
        nums1=0;
        return(nums1);
    }
    else
    {
        ww = "65%" + "," + "10,*";

        top.logicmain.rows=ww;
        top.lbottomframe.tableMainInfo.style.display = "";
        picShow.src="../image/zdown.gif";
        picShow.alt="显示/隐藏菜单";
        nums1=1;
        return(nums1);
    }
}

function PropertyRouteShowHide(nums1)
{
    var picShow=document.getElementById("center_img1");

    if(nums1==1)
    {
        ww = "98%" + "," + "10,*";
        top.bottom.rightframe.rightmain.rows=ww;
        top.bottom.rightframe.rbottomframe.tableMainInfo.style.display = "none";
        picShow.src="../image/zup.gif";
        picShow.alt="显示/隐藏菜单";
        nums1=0;
        return(nums1);
    }
    else
    {
        ww = "65%" + "," + "10,*";

        top.bottom.rightframe.rightmain.rows=ww;
        top.bottom.rightframe.rbottomframe.tableMainInfo.style.display = "";
        picShow.src="../image/zdown.gif";
        picShow.alt="显示/隐藏菜单";
        nums1=1;
        return(nums1);
    }
}


//-------------------------------------------------
function AppendStyleSheet(O,o)
{
    if (!o)
    {
        return; 
    }
    var I=(navigator.appName=="\x4dicrosoft I\x6e\x74ern\x65\x74 E\x78\x70lor\x65\162") && ((navigator.userAgent.toLowerCase().indexOf("\x6dac")!=-1) || (navigator.appVersion.toLowerCase().indexOf("\x6dac")!=-1));
    var A=(navigator.userAgent.toLowerCase().indexOf("safari")!=-1); 
    if (I || A)
    {
        document.write("<"+"\x6cink"+"\x20rel=\047\x73ty\x6c\145s\x68\145e\x74\047 \x74\x79pe\x3d\x27t\x65xt/c\x73s\047\x20href\x3d\047"+o+"\047\x3e");
    }
    else 
    {
        var U=document.createElement("link"); 
        U.rel="styl\x65\x73heet"; 
        U.type="\x74ext/css"; 
        U.href=o; 
        document.getElementById(O+"StyleSheetH\x6f\x6cder").appendChild(U);
    }
}




function addAnchorByObject(el, ChildElArray, objAnchorProperty)
{
    var thisEl = el;
    for(var i=0;i<ChildElArray.length;i++){
        var ChildEl=document.createElement(ChildElArray[i]);
        ChildEl.id  = ChildElArray[i] + "_" + objAnchorProperty.id;

        if (objAnchorProperty.className)
        {
            ChildEl.className  = objAnchorProperty.className;
        }
        if (ChildElArray[i]=="a") {
            // create a new anchor
            // newanchor = document.createElement("a");
            // set anchor attributes e.g. href
            ChildEl.href = objAnchorProperty.href;
    
    
            if (objAnchorProperty.target)
            {
                ChildEl.target  = objAnchorProperty.target;
            }

            if (objAnchorProperty.onclick)
            {
                ChildEl.onclick = objAnchorProperty.onclick;
            }
    
            if (objAnchorProperty.onmouseover)
            {
                ChildEl.onmouseover = objAnchorProperty.onmouseover;
            }
    
    
            // now create clickable text
            //sometext = document.createTextNode("click this link");
            var txtNode=document.createTextNode(objAnchorProperty.text);


            // add to the anchor
            // newanchor.appendChild(sometext);
    
            if (objAnchorProperty.WithSpan)
            {
                var spanContainer=document.createElement("span");
                spanContainer.id = "span" + "_" + objAnchorProperty.id;
        
                if (objAnchorProperty.spanClassName)
                {
                    spanContainer.className  = objAnchorProperty.spanClassName;
                }
        
                spanContainer.appendChild(txtNode);
                ChildEl.appendChild(spanContainer);
            }
            else if (objAnchorProperty.WithImage)
            {
                var imgContainer=document.createElement("img");
                if (objAnchorProperty.text)
                {
                    imgContainer.id = "img" + "_" + objAnchorProperty.text;
                }
        
        
        
                if (objAnchorProperty.imgsrc)
                {
                    imgContainer.src  = objAnchorProperty.imgsrc;
                }
        
                if (objAnchorProperty.imgalt)
                {
                    imgContainer.alt  = objAnchorProperty.imgalt;
                }
        
                if (objAnchorProperty.imgClassName)
                {
                    imgContainer.className  = objAnchorProperty.imgClassName;
                }
                ChildEl.appendChild(imgContainer);
    
            }
            else
            {
                // add to the anchor
                // newanchor.appendChild(sometext);
                ChildEl.appendChild(txtNode);
            }
    
    
        // stick anchor onto an existing object
        // obj1 = document.getElementById("one");
        // obj1.appendChild(newanchor);
        /* 在下面了
        thisEl.appendChild(ChildEl);
    */
    
        }
        thisEl.appendChild(ChildEl);
        thisEl = ChildEl;
    }
}


function addAnchorArrayByObject(ChildEl,WithAnchor,objAnchorArray){
    for(var i=0;i<objAnchorArray.length;i++){
        var container=document.createElement(objAnchorArray[i].ParentElementName);
        container.id = objAnchorArray[i].ParentElementName + "_" + objAnchorArray[i].id;
        if (objAnchorArray[i].ParentElementClassName)
        {
            //           alert(objAnchorArray[i].ParentElementClassName);
            container.className = objAnchorArray[i].ParentElementClassName;
        }
        
        if (objAnchorArray[i].onclick)
        {
            //            alert(objAnchorArray[i].ParentElementClassName);
            container.onclick = objAnchorArray[i].onclick;
        }
        
        if (objAnchorArray[i].onmouseover)
        {
            //            alert(objAnchorArray[i].ParentElementClassName);
            container.onmouseover = objAnchorArray[i].onmouseover;
        }
        
        if(!WithAnchor){
            alert(WithAnchor);
             
            var txtNode=document.createTextNode(objAnchorProperty.text);

            // add to the anchor
            // newanchor.appendChild(sometext);
            
            if (objAnchorArray[i].WithSpan)
            {
                var spanContainer=document.createElement("span");
                spanContainer.id = "span" + "_" + objAnchorArray[i].id;
                spanContainer.appendChild(txtNode);
                container.appendChild(spanContainer);
            }
            else
            {
                container.appendChild(txtNode);
                
            }
            
            ChildEl.appendChild(container);

            if (objAnchorArray[i].onmouseover)
            {
                //            alert(objAnchorArray[i].ParentElementClassName);
                ChildEl.onmouseover = "alert('OnCl\x69\x65ntMous\x65\x4fver'); ";//objAnchorArray[i].onmouseover;
            }

        }
        else
        {
            var TagArray=new Array("a");
            addAnchorByObject(container,TagArray,objAnchorArray[i]);
            /*
            if (container.id == "li"+ "_" + "Products")
            {
            
                 addTableAnchorArrayByObject(container,true,TagArray);
            
            
            }
*/
            ChildEl.appendChild(container);

        }

    
    
    }



}

function CreateMenuItemFromBottom()
{

    var newdiv = document.createElement("div");
    newdiv.id = "ctl00_ctl00_topMenu";
    // set div attributes
    if (menuType == 1) 
    { 
        newdiv.className = "menu1";
    }
    else if (menuType == 2) 
    { 
        newdiv.className = "menu2";
    }
    else if (menuType == 3) 
    { 
        newdiv.className = "menu3";
    }
    else if (menuType == 4) 
    { 
    
    
        newdiv.className = "menu4";
    }
    else if (menuType == 5) 
    { 
        newdiv.className = "menu5";
    }    
    else if (menuType == 6) 
    { 
        newdiv.className = "menu RadMenu_telerikCom ";
    }    
    
    if (menuType == 1) 
    { 
        var newul = document.createElement("ul");
        newul.id = "ul_Home";
    }
    else if (menuType == 2) 
    { 
        newul = document.createElement("ul");
        newul.id = "ul_Home";
    }
    else if (menuType == 3) 
    { 
 
        //创建类objMenuAnchorProperty的实例
        var objMenuAnchorProperty=new PropertyCollections();

        objMenuAnchorProperty.ParentElementName="li";
        objMenuAnchorProperty.id="Menu";
        objMenuAnchorProperty.text="M E N U";

        objMenuAnchorProperty.href="http://www.cssplay.co.uk/menus/drop_examples.html#nogo";
     
    }
    else if (menuType == 4) 
    { 
    }
    else if (menuType == 5) 
    { 
    }    
    else if (menuType == 6) 
    { 
    }    
    
    newul = document.createElement("ul");
    newul.id = "ul_Category";
    newul.className = "horizontal rootGroup";

    //创建类objProductsAnchor的实例
    var objProductsAnchorProperty=new PropertyCollections();

    objProductsAnchorProperty.ParentElementName="li";
    
    objProductsAnchorProperty.ParentElementClassName="item first";
    
    objProductsAnchorProperty.id="Products";
    
    objProductsAnchorProperty.className="link";   //"link focused";
    objProductsAnchorProperty.WithSpan=true;
    
    objProductsAnchorProperty.spanClassName="text";

    objProductsAnchorProperty.text="Products";

    objProductsAnchorProperty.href="Main.aspx";
     
    objProductsAnchorProperty.target="_blank";
     
     
    //   objProductsAnchorProperty.onclick="AOnClick()";
    
    //   objProductsAnchorProperty.onmouseover="ClientMouseOverHandler()";
    
    
    
    
    //创建类objProductsAnchor的实例
    var objPurchaseAnchorProperty=new PropertyCollections();

    objPurchaseAnchorProperty.ParentElementName="li";
    
    objPurchaseAnchorProperty.ParentElementClassName="item";
    
    objPurchaseAnchorProperty.id="Purchase";
    
    objPurchaseAnchorProperty.className="link";   //"link focused";
    objPurchaseAnchorProperty.WithSpan=true;
    
    objPurchaseAnchorProperty.spanClassName="text";

    objPurchaseAnchorProperty.text="Purchase";

    objPurchaseAnchorProperty.href="Main.aspx";
     
    objPurchaseAnchorProperty.target="_blank";
     
     
    //   objPurchaseAnchorProperty.onclick="AOnClick()";
    
    
    //创建类objProductsAnchor的实例
    var objSupportAnchorProperty=new PropertyCollections();

    objSupportAnchorProperty.ParentElementName="li";
    
    objSupportAnchorProperty.ParentElementClassName="item";
    
    objSupportAnchorProperty.id="Support";
    
    objSupportAnchorProperty.className="link";   //"link focused";
    objSupportAnchorProperty.WithSpan=true;
    
    objSupportAnchorProperty.spanClassName="text";

    objSupportAnchorProperty.text="Support";

    objSupportAnchorProperty.href="Main.aspx";
     
    objSupportAnchorProperty.target="_blank";
     
     
    //   objSupportAnchorProperty.onclick="AOnClick()";
    
    
    
    //创建类objProductsAnchor的实例
    var objCommunityAnchorProperty=new PropertyCollections();

    objCommunityAnchorProperty.ParentElementName="li";
    
    objCommunityAnchorProperty.ParentElementClassName="item";
    
    objCommunityAnchorProperty.id="Community";
    
    objCommunityAnchorProperty.className="link";   //"link focused";
    objCommunityAnchorProperty.WithSpan=true;
    
    objCommunityAnchorProperty.spanClassName="text";

    objCommunityAnchorProperty.text="Community";

    objCommunityAnchorProperty.href="Main.aspx";
     
    objCommunityAnchorProperty.target="_blank";
     
     
    //   objCommunityAnchorProperty.onclick="AOnClick()";
    
    
    //创建类objProductsAnchor的实例
    var objCorporateAnchorProperty=new PropertyCollections();

    objCorporateAnchorProperty.ParentElementName="li";
    
    objCorporateAnchorProperty.ParentElementClassName="item";
    
    objCorporateAnchorProperty.id="Corporate";
    
    objCorporateAnchorProperty.className="link";   //"link focused";
    objCorporateAnchorProperty.WithSpan=true;
    
    objCorporateAnchorProperty.spanClassName="text";

    objCorporateAnchorProperty.text="Corporate";

    objCorporateAnchorProperty.href="Main.aspx";
     
    objCorporateAnchorProperty.target="_blank";
     
     
    //   objCorporateAnchorProperty.onclick="AOnClick()";
    
    
    //创建类objProductsAnchor的实例
    var objClientNetAnchorProperty=new PropertyCollections();

    objClientNetAnchorProperty.ParentElementName="li";
    
    objClientNetAnchorProperty.ParentElementClassName="item last";
    
    objClientNetAnchorProperty.id="ClientNet";
    
    objClientNetAnchorProperty.className="link";   //"link focused";
    objClientNetAnchorProperty.WithSpan=true;
    
    objClientNetAnchorProperty.spanClassName="text";

    objClientNetAnchorProperty.text="Client.net";

    objClientNetAnchorProperty.href="Main.aspx";
     
    objClientNetAnchorProperty.target="_blank";
     
     
    //   objClientNetAnchorProperty.onclick="AOnClick()";
    
    if (menuType ==1)
    {
        objAnchorPropertyArray = new Array(objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==2)
    {
        objAnchorPropertyArray = new Array(objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==3)
    {
        objAnchorPropertyArray = new Array(objMenuAnchorProperty);
    }
    else if (menuType ==4)
    {
        objAnchorPropertyArray = new Array(objHomeAnchorProperty, objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==5)
    {
        objAnchorPropertyArray = new Array(objHomeAnchorProperty, objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==6)
    {
        objAnchorPropertyArray = new Array(objProductsAnchorProperty, 
            objPurchaseAnchorProperty,
            objSupportAnchorProperty,
            objCommunityAnchorProperty,
            objCorporateAnchorProperty,
            objClientNetAnchorProperty
            );
    }
    
    addAnchorArrayByObject(newul, true, objAnchorPropertyArray);

    newdiv.appendChild(newul);
    
    if (menuType == 4) 
    {
        var newdivContainer = document.createElement("div");
        newdivContainer.className = "container4";
        newdivContainer.id = "menuContainer";
        newdivContainer.appendChild(newdiv);
        document.body.appendChild(newdivContainer);	// or some other node

    }
    else if (menuType == 6)
    {
    
        /*    */

        var newdivGlobalHolder = document.createElement("div");
        newdivGlobalHolder.id = "div-GlobalHolder";
        newdivGlobalHolder.className = "GlobalHomePageHolder"; //"homepageHolder2";

        var newdivHomepageHolder = document.createElement("div");
        newdivHomepageHolder.id = "div-1";
        newdivHomepageHolder.className = "topNavSeclevel"; //"homepageHolder2";

        newdivContainer = document.createElement("div");
        newdivContainer.id = "div-1b";
        newdivContainer.className = "topNavBgSeclevel"; //"topNavBgSeclevel2";
       
        newdivContainer.appendChild(document.createElement("br"));
       
        newdivContainer.appendChild(newdiv);
     
        /*
       
    //创建类objProductsAnchor的实例
    var objLogoHolderAnchorProperty=new PropertyCollections();

    objLogoHolderAnchorProperty.ParentElementName="div";
    
    objLogoHolderAnchorProperty.ParentElementClassName="LogoHolder";
    
    objLogoHolderAnchorProperty.id="LogoHolder";
    
    objLogoHolderAnchorProperty.WithImage=true;
    
    objLogoHolderAnchorProperty.imgsrc="images/Homepage/telecomLogo.gif";

    objLogoHolderAnchorProperty.imgalt="China Telecom";

    objLogoHolderAnchorProperty.imgClassName="LogoImage";
    
    objLogoHolderAnchorProperty.href="/";
     
    objAnchorPropertyArray = new Array(objLogoHolderAnchorProperty);
    
    addAnchorArrayByObject(newdivHomepageHolder, true, objAnchorPropertyArray);
 
*/                                                                                                                                                                                                                                                                                                                                     
    
        var imgLogoHolder = document.createElement("img");
        imgLogoHolder.style.float = "left";
        imgLogoHolder.alt = "telerik";
        imgLogoHolder.src = "images/homepage/telecomLogo.gif";

        var aLogoHolder = document.createElement("a");
        aLogoHolder.href = "/";
        aLogoHolder.appendChild(imgLogoHolder);

        var newdivLogoHolder = document.createElement("div");
        newdivLogoHolder.id = "div-1a";
        //       newdivLogoHolder.className = "LogoHolder2";
        /*
       newdivLogoHolder.style.width = "230px";
       newdivLogoHolder.style.float = "left";
       */

        //      newdivLogoHolder.style.backgroundimage = "url(../images/Homepage/telecomLogo.gif)";
        newdivLogoHolder.appendChild(aLogoHolder);
    
      
      
      
      
        var newdivSidePanelbarHolder = document.createElement("div");
        newdivSidePanelbarHolder.id = "div-1c";
        //       newdivContainer.className = "topNavBgSeclevel2";
       
       
       
       
       
        //     newdivSidePanelbarHolder.appendChild(newdiv);
      
      
      
      
      
        newdivHomepageHolder.appendChild(newdivLogoHolder);

    


        newdivHomepageHolder.appendChild(newdivContainer);
    
    
        newdivHomepageHolder.appendChild(newdivSidePanelbarHolder);
    
    
        newdivGlobalHolder.appendChild(newdivHomepageHolder);
      
    
        document.body.appendChild(newdivGlobalHolder);	//newdivHomepageHolder      // or some other node
    
    
    
    }
    else
    {
        document.body.appendChild(newdiv);	// or some other node
    }
}


function CreateTopMenuSubItem(ParentElement)
{

    var newdiv = document.createElement("div");
    newdiv.id = "divTopMenuSubItem";
    newdiv.className = "slide";
    
    newul = document.createElement("ul");
    newul.id = "ul_TopMenuSubItem";
    newul.className = "vertical group level1";

    //创建类objProductsAnchor的实例
    var objCtrolsForNETAnchorProperty=new PropertyCollections();

    objCtrolsForNETAnchorProperty.ParentElementName="li";
    
    objCtrolsForNETAnchorProperty.ParentElementClassName="item first";
    
    objCtrolsForNETAnchorProperty.id="CtrolsForNET";
    
    objCtrolsForNETAnchorProperty.className="link focused";   //"link focused";
    objCtrolsForNETAnchorProperty.WithSpan=true;
    
    objCtrolsForNETAnchorProperty.spanClassName="text";

    objCtrolsForNETAnchorProperty.text="r.a.d.controls for ASP.NET";

    objCtrolsForNETAnchorProperty.href="Main.aspx";
     
    objCtrolsForNETAnchorProperty.target="_blank";
     
     
    //    objCtrolsForNETAnchorProperty.onclick="AOnClick()";
    
    
    
    //创建类objProductsAnchor的实例
    var objCtrolsForWINAnchorProperty=new PropertyCollections();

    objCtrolsForWINAnchorProperty.ParentElementName="li";
    
    objCtrolsForWINAnchorProperty.ParentElementClassName="item last";
    
    objCtrolsForWINAnchorProperty.id="CtrolsForWIN";
    
    objCtrolsForWINAnchorProperty.className="link";   //"link focused";
    objCtrolsForWINAnchorProperty.WithSpan=true;
    
    objCtrolsForWINAnchorProperty.spanClassName="text";

    objCtrolsForWINAnchorProperty.text="r.a.d.controls for WinForms";

    objCtrolsForWINAnchorProperty.href="Main.aspx";
     
    objCtrolsForWINAnchorProperty.target="_blank";
     
     
    //   objCtrolsForWINAnchorProperty.onclick="AOnClick()";
    
    

    
    if (menuType ==1)
    {
        objAnchorPropertyArray = new Array(objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==2)
    {
        objAnchorPropertyArray = new Array(objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==3)
    {
        objAnchorPropertyArray = new Array(objMenuAnchorProperty);
    }
    else if (menuType ==4)
    {
        objAnchorPropertyArray = new Array(objHomeAnchorProperty, objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==5)
    {
        objAnchorPropertyArray = new Array(objHomeAnchorProperty, objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==6)
    {
        objAnchorPropertyArray = new Array(objCtrolsForNETAnchorProperty, 
            objCtrolsForWINAnchorProperty
            );
    }
    
    addAnchorArrayByObject(newul, true, objAnchorPropertyArray);

    newdiv.appendChild(newul);
    
    if (menuType == 4) 
    {
        var newdivContainer = document.createElement("div");
        newdivContainer.className = "container4";
        newdivContainer.id = "menuContainer";
        newdivContainer.appendChild(newdiv);
        document.body.appendChild(newdivContainer);	// or some other node

    }
    else if (menuType == 6)
    {
    
        ParentElement.appendChild(newdiv);	// or some other node
       

    
    
    
    }
    else
    {
        document.body.appendChild(newdiv);	// or some other node
    }
}


function CreateTopMenuSubSubItem(ParentElement)
{

    var newdiv = document.createElement("div");
    newdiv.id = "divTopMenuSubSubItem";
    newdiv.className = "slide";
    
    newul = document.createElement("ul");
    newul.id = "ul_TopMenuSubSubItem";
    newul.className = "vertical group level2";

    //创建类objProductsAnchor的实例
    var objTopMenuSubSubItemOverviewAnchorProperty=new PropertyCollections();

    objTopMenuSubSubItemOverviewAnchorProperty.ParentElementName="li";
    
    objTopMenuSubSubItemOverviewAnchorProperty.ParentElementClassName="item first";
    
    objTopMenuSubSubItemOverviewAnchorProperty.id="TopMenuSubSubItem_Overview";
    
    objTopMenuSubSubItemOverviewAnchorProperty.className="link focused";   //"link focused";
    objTopMenuSubSubItemOverviewAnchorProperty.WithSpan=true;
    
    objTopMenuSubSubItemOverviewAnchorProperty.spanClassName="text";

    objTopMenuSubSubItemOverviewAnchorProperty.text="Overview";

    objTopMenuSubSubItemOverviewAnchorProperty.href="Main.aspx";
     
    objTopMenuSubSubItemOverviewAnchorProperty.target="_blank";
     
     
    //    objCtrolsForNETAnchorProperty.onclick="AOnClick()";
    
    //创建类objProductsAnchor的实例
    var objTopMenuSubSubItemUIControlsAnchorProperty=new PropertyCollections();


    objTopMenuSubSubItemUIControlsAnchorProperty.ParentElementName="li";
    
    objTopMenuSubSubItemUIControlsAnchorProperty.ParentElementClassName="item";
    
    objTopMenuSubSubItemUIControlsAnchorProperty.id="TopMenuSubSubItem_UIControls";
    
    objTopMenuSubSubItemUIControlsAnchorProperty.className="link";   //"link focused";
    objTopMenuSubSubItemUIControlsAnchorProperty.WithSpan=true;
    
    objTopMenuSubSubItemUIControlsAnchorProperty.spanClassName="text";

    objTopMenuSubSubItemUIControlsAnchorProperty.text="18 Advanced UI Controls";

    objTopMenuSubSubItemUIControlsAnchorProperty.href="Main.aspx";
     
    objTopMenuSubSubItemUIControlsAnchorProperty.target="_blank";
     
     
    //   objCtrolsForWINAnchorProperty.onclick="AOnClick()";
        
    
    //创建类objProductsAnchor的实例
    var objTopMenuSubSubItemBrowserSupportAnchorProperty=new PropertyCollections();

    objTopMenuSubSubItemBrowserSupportAnchorProperty.ParentElementName="li";
    
    objTopMenuSubSubItemBrowserSupportAnchorProperty.ParentElementClassName="item last";
    
    objTopMenuSubSubItemBrowserSupportAnchorProperty.id="TopMenuSubSubItem_BrowserSupport";
    
    objTopMenuSubSubItemBrowserSupportAnchorProperty.className="link";   //"link focused";
    objTopMenuSubSubItemBrowserSupportAnchorProperty.WithSpan=true;
    
    objTopMenuSubSubItemBrowserSupportAnchorProperty.spanClassName="text";

    objTopMenuSubSubItemBrowserSupportAnchorProperty.text="Browser Support";

    objTopMenuSubSubItemBrowserSupportAnchorProperty.href="Main.aspx";
     
    objTopMenuSubSubItemBrowserSupportAnchorProperty.target="_blank";
     
     
    //   objCtrolsForWINAnchorProperty.onclick="AOnClick()";
    
    

    
    if (menuType ==1)
    {
        objAnchorPropertyArray = new Array(objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==2)
    {
        objAnchorPropertyArray = new Array(objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==3)
    {
        objAnchorPropertyArray = new Array(objMenuAnchorProperty);
    }
    else if (menuType ==4)
    {
        objAnchorPropertyArray = new Array(objHomeAnchorProperty, objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==5)
    {
        objAnchorPropertyArray = new Array(objHomeAnchorProperty, objProductsAnchorProperty, objServicesAnchorProperty, objContactUsAnchorProperty, objSiteMapAnchorProperty, objNewsAnchorProperty);
    }
    else if (menuType ==6)
    {
        objAnchorPropertyArray = new Array(objTopMenuSubSubItemOverviewAnchorProperty, 
            objTopMenuSubSubItemUIControlsAnchorProperty,
            objTopMenuSubSubItemBrowserSupportAnchorProperty
            );
    }
    
    addAnchorArrayByObject(newul, true, objAnchorPropertyArray);

    newdiv.appendChild(newul);
    
    if (menuType == 4) 
    {
        var newdivContainer = document.createElement("div");
        newdivContainer.className = "container4";
        newdivContainer.id = "menuContainer";
        newdivContainer.appendChild(newdiv);
        document.body.appendChild(newdivContainer);	// or some other node

    }
    else if (menuType == 6)
    {
    
        ParentElement.appendChild(newdiv);	// or some other node
       

    
    
    
    }
    else
    {
        document.body.appendChild(newdiv);	// or some other node
    }
}

function secBoard(n)
{
    for(i=0;i<secTable.cells.length;i++)
        secTable.cells[i].className="sec1";
    secTable.cells[n].className="sec2";
    for(i=0;i<mainTable.tBodies.length;i++)
        mainTable.tBodies[i].style.display="none";
    mainTable.tBodies[n].style.display="block";
}
  
  
function AOnClick()
{
    if (this.className == "link focused")
    {
        this.className="link";
    }
    else
    {
        this.className="link focused";
    
    }
}



function ClientMouseOverHandler(sender, eventArgs)
{
    var tabStrip = sender;
    var tab = eventArgs.Tab;
    var browserEvents = eventArgs.EventObject;

    alert("You have just moved over the " + tab.Text + " tabs in the " + tabStrip.ID + " tabstrip");
    alert("Mouse coordinates: " + browserEvents.clientX + ":" + browserEvents.clientY);
} 

 
 
 
/*
 
function RadControlsNamespace()
{
    function Scroll(){
　    //empty
    }
}
 
 
 
 
 
RadControlsNamespace.Scroll.prototype.AttachArrows= function ()
{
var If=this.CreateArrow("&laqu\x6f\x3b",1,this.LeftArrowClass); 
var og=this.CreateArrow("&raquo;",-1,this.RightArrowClass); 
this.LeftArrow=If; 
this.RightArrow=og; 
if (this.IsVertical)
{
If.style.left="\x30\160\x78"; 
og.style.left="\x30px"; 
if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Middle)
{
If.style.top="\x30px"; 
og.style.bottom="0px"; 
}
else if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Left)
{
If.style.top="0p\x78"; 
og.style.top=If.offsetHeight+"\x70x"; 
}
else 
{
og.style.bottom="\x30px"; 
If.style.bottom=If.offsetHeight+"px"; 
}
}else 
{If.style.top="\x30\x70x"; 
og.style.top="\x30px"; 
if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Middle)
{
If.style.left="-1p\x78"; 
og.style.right="-1px"; 
}
else if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Left)
{
If.style.left="-1px"; 
og.style.left=(If.offsetWidth-1)+"p\x78"; 
}
else 
{og.style.right="\x2d1px"; 
If.style.right=(og.offsetWidth-1)+"px"; 
}
}
};
 
 

RadControlsNamespace.Scroll.prototype.CreateArrow= function (Og,lg,cssClass)
{
var ig=document.createElement("a"); 
ig.href="#"; 
ig.className=cssClass; 
ig.innerHTML="\x26nbsp;"; 
ig.style.zIndex="\x32000"; 
this.Element.parentNode.appendChild(ig); 
var I4=this ; 
ig.ScrollDirection=lg; 
if (this.ScrollOnHover)
{
ig.onmousedown= function ()
{
if (this.disabled)
{
return false; 
}
I4.ScrollAmount=3; 
return true; 
};
ig.onmouseup= function ()
{
I4.ScrollAmount=1; 
};
ig.onmouseover= function ()
{
if (this.disabled)
{
return false; 
}
I4.ScrollAmount=1; 
I4.Scroll(this.ScrollDirection); 
return true; 
};
ig.onmouseout= function ()
{
I4.Ig=0; 
I4.Stop(); 
return false; 
};}
else 
{
ig.onmousedown= function ()
{
I4.Scroll(this.ScrollDirection); 
};
ig.onmouseup= function ()
{
I4.Stop(); 
};
}
ig.onclick= function ()
{
return false; 
};
return ig; 
};


*/

function InsertBeforeElement(newElement, referenceElement)
{
    // usage : insertedElement = parentElement.insertBefore(newElement, referenceElement)
    // If referenceElement is null, newElement is inserted at the end of the list of child nodes.

    // insertedElement The node being inserted, that is newElement
    // parentElement The parent of the newly inserted node.
    // newElement The node to insert.
    // referenceElement The node before which newElement is inserted.

    /*
//There is no insertAfter method, however it can be emulated using a combination of insertBefore and nextSibling. 

//From the above example, sp1 could be inserted after sp2 using: 

//parentDiv.insertBefore(sp1, sp2.nextSibling);
*/


    // create an empty element node
    // without an ID, any attributes, or any content
    var sp1 = document.createElement("span");

    // give it an id attribute called 'newSpan'
    sp1.setAttribute("id", "newSpan");

    // create some content for the newly created element.
    var sp1_content = document.createTextNode("This is a new span element. ");

    // apply that content to the new element
    sp1.appendChild(sp1_content);

    var sp2 = document.getElementById("childSpan");
    var parentDiv = sp2.parentNode;

    // insert the new element into the DOM before sp2
    parentDiv.insertBefore(sp1, sp2);





}

if (typeof window.RadControlsNamespace=="unde\x66\x69\156\x65\x64")
{
    window.RadControlsNamespace= {} ;
}

window.RadControlsNamespace.Box= 
{
    GetOuterWidth:function (D)
    {
        return D.offsetWidth;
    } ,
    GetOuterHeight:function (D)
    {
        return D.offsetHeight;
    } ,
    SetOuterHeight:function (D,height)
    {
        if (height==0 || height=="")
        {
            D.style.height="";
        }
        else
        {
            D.style.height=height+"px";
            var Od=D.offsetHeight-height;
            var ld=height-Od;
            if (ld>0)
            {
                D.style.height=ld+"\x70x";
            }
            else
            {
                D.style.height="";
            }
        }
    } ,
    SetOuterWidth:function (D,width)
    {
        if (width==0 || width=="")
        {
            D.style.width="";
        }
        else
        {
            D.style.width=width+"px";
            var Od=D.offsetWidth-width;
            var oe=width-Od;
            if (oe>0)
            {
                D.style.width=oe+"px";
            }
            else
            {
                D.style.width="";
            }
        }
    } ,
    GetPropertyValue:function (D,Oe)
    {
        var computedStyle=this.GetStyle(D);
        return this.GetStyleValues(computedStyle,Oe);
    } ,
    GetStyle:function (D)
    {
        if (document.defaultView && document.defaultView.getComputedStyle)
        {
            return document.defaultView.getComputedStyle(D,null);
        }
        else if (D.currentStyle)
        {
            return D.currentStyle;
        }
        else
        {
            return D.style;
        }
    }
};


if (typeof window.RadControlsNamespace=="\x75\x6edefined")
{
    window.RadControlsNamespace= {} ;
}
window.RadControlsNamespace.Browser= {} ; 
window.RadControlsNamespace.Browser.ParseBrowserInfo= function ()
{ 
    this.IsMacIE=(navigator.appName=="\x4dicrosoft \x49\x6eter\x6e\x65t \x45\170\x70\x6cor\x65\x72") && ((navigator.userAgent.toLowerCase().indexOf("mac")!=-1) || (navigator.appVersion.toLowerCase().indexOf("mac")!=-1));
    this.IsSafari=(navigator.userAgent.toLowerCase().indexOf("sa\x66\x61ri")!=-1);
    this.IsMozilla=window.netscape && !window.opera;
    this.IsOpera=window.opera;
    this.IsOpera9=window.opera && (parseInt(window.opera.version())>8);
    this.IsIE=!this.IsMacIE && !this.IsMozilla && !this.IsOpera && !this.IsSafari;
    this.StandardsMode=this.IsSafari || this.IsOpera9 || this.IsMozilla || document.compatMode=="CSS1Compa\x74";
    this.IsMac=/\x4d\x61\x63/.test(navigator.userAgent);
};
RadControlsNamespace.Browser.ParseBrowserInfo();




function RadMenu(RadTopMenuID)
{
    var o8=window[RadTopMenuID];
    if (o8!=null && o8.Dispose)
    {
        o8.Dispose();
    }
    this.DomElement=document.getElementById(RadTopMenuID);
    this.ChildItemList=RadMenu.GetFirstChildByTagName(this.DomElement,"\x75l");
    this.StateField=document.getElementById(RadTopMenuID+"_Hidden");
    this.Items=[];
    this.AllItems=[];
    this.OpenedItem=null;
    this.LastExpandedItem=null;
    this.ExpandAnimation= {} ;
    this.CollapseAnimation= {} ;
    this.CollapseDelay=500;
    this.ExpandDelay=0;
    this.ID=RadTopMenuID;
    this.Skin="Ou\x74\x6cook";
    this.RightToLeft= false;
    this.EnableScreenBoundaryDetection= true;
    this.InUpdate= false;
    this.Initialized= false;
    this.State= {} ;
    this.ItemState= {} ;
    this.CausesValidation= true;
    this.Flow=RadMenuNamespace.ItemFlow.Horizontal;
    this.ClickToOpen= false;
    this.Enabled= true;
    this.EnableAutoScroll= false;
    this.Clicked= false;
    this.OriginalZIndex=this.DomElement.style.zIndex;
    this.Attributes= {} ;
    RadControlsNamespace.EventMixin.Initialize(this );
    RadControlsNamespace.DomEventMixin.Initialize(this );
}

RadMenu.JSONIncludeDeep= {
    "\x41ttribu\x74\x65s": true
} ; 

RadMenu.CreateState= function (I4)
{
    I4.InitialState= {} ;
    for (var i in I4)
    {
        var type=typeof I4[i];
        if (type=="\x6eumber" || type=="\x73tring" || type=="\x62oolean")I4.InitialState[i]=I4[i];
    }
};

RadMenu.GetFirstChildByTagName= function (parentNode,tagName)
{
    var O8=parentNode.getElementsByTagName(tagName)[0];
    if (O8 && O8.parentNode==parentNode)
    {
        return O8;
    }
    return null;
};


RadMenu.prototype.Initialize= 
    function (C,i8)
    {
        this.LoadConfiguration(C);
        this.ItemData=i8;
        this.DetermineDirection();
        this.ApplyRTL();
        if (this.IsContext)
        {
            this.InitContextMenu();
        }
        this.CreateControlHierarchy(this,0);
        if (!this.Enabled)
        {
            this.Disable();
        }
        if (this.Flow==RadMenuNamespace.ItemFlow.Vertical)
        {
            this.FixRootItemWidth();
        }
        this.RegisterDisposeOnUnload();
        this.Initialized= true;
        RadMenu.CreateState(this );
        this.RaiseEvent("\x4fn\x43\x6cientL\x6f\x61d",null);
    } ;


RadMenu.prototype.LoadConfiguration= function (C)
{
    for (var i6 in C){
        this[i6]=C[i6];
    }
    if (!this.DefaultGroupSettings)
    {
        this.DefaultGroupSettings= {} ;
    }
    if (typeof this.DefaultGroupSettings.Flow=="\x75ndefined")
    {
        this.DefaultGroupSettings.Flow=RadMenuNamespace.ItemFlow.Vertical;
    }
    if (typeof this.DefaultGroupSettings.ExpandDirection=="undefined")
    {
        this.DefaultGroupSettings.ExpandDirection=RadMenuNamespace.ExpandDirection.Auto;
    }
    if (typeof this.DefaultGroupSettings.OffsetX=="undef\x69\x6eed")
    {
        this.DefaultGroupSettings.OffsetX=0;
    }
    if (typeof this.DefaultGroupSettings.OffsetY=="\x75ndefi\x6e\x65d")

    {
        this.DefaultGroupSettings.OffsetY=0;
    }
} ; 



RadMenu.prototype.DetermineDirection= function ()
{
    var I8=this.DomElement;
    while (I8.tagName.toLowerCase()!="\x68tml")
    {
        if (I8.dir)
        {
            this.RightToLeft=(I8.dir.toLowerCase()=="r\x74\x6c");
            return;
        }
        I8=I8.parentNode;
    }
    this.RightToLeft= false;
};



RadMenu.prototype.ApplyRTL= function (){
    if (!this.RightToLeft)return;
    if (RadControlsNamespace.Browser.IsIE)
    {
        this.DomElement.dir="ltr";
    }
    if (!this.IsContext)
    {
        this.DomElement.className+="\x20rtl Ra\x64\x4denu_"+this.Skin+"_rtl";
    }
    else
    {
        this.DomElement.className+="\x20rtlcontex\x74\x20Rad\x4d\x65n\x75\x5f"+this.Skin+"_\x72\x74l";
    }
};
RadMenu.prototype.InitContextMenu= function ()
{ 
    this.Ease=new RadControlsNamespace.Ease(this.ChildItemList,this,0,0,null, true);
    this.Flow=RadMenuNamespace.ItemFlow.Vertical;
    this.Ease.SetSide("\164\x6f\x70");
    this.AttachDomEvent(document,"\x63\x6fntext\x6d\x65nu","\x4fnContext\x4d\x65nu");
    this.AttachDomEvent(document,"\x63lick","\x4f\x6eDocume\x6e\x74Clic\x6b");
    if (!RadMenuNamespace.ContextMenus)
    {
        RadMenuNamespace.ContextMenus= {} ;
    }
    if (!RadMenuNamespace.ContextElements)
    {
        RadMenuNamespace.ContextElements= {} ;
    }
    if (this.ContextMenuElementID)
    {
        RadMenuNamespace.ContextElements[this.ContextMenuElementID]= true;
    }
    RadMenuNamespace.ContextMenus[this.ID]=this ;
};
RadMenu.prototype.OnContextMenu= function (e)
{ 
    this.ContextElement=document.getElementById(this.ContextMenuElementID);
    if (this.ContextMenuElementID && !this.ContextElement)
    {
        return;
    }
    var o9=this.EventSource(e);
    if (this.ContextElement)
    {
        if (o9==this.ContextElement || this.IsChildOf(this.ContextElement,o9))
        {
            this.Show(e);
            RadControlsNamespace.DomEvent.PreventDefault(e);
            RadControlsNamespace.DomEvent.StopPropagation(e);
        }
    }
    else if (!RadMenuNamespace.ContextElements[o9.id])
    {
        this.Show(e);
        RadControlsNamespace.DomEvent.PreventDefault(e);
        RadControlsNamespace.DomEvent.StopPropagation(e);
    }
};
RadMenu.prototype.IsChildOf= function (parent,O8)
{
    if (O8==parent)
    {
        return false;
    }
    while (O8 && (O8!=document.body))
    {
        if (O8==parent)
        {
            return true;
        }
        try
        {
            O8=O8.parentNode;
        }
        catch (e)
        {
            return false;
        }
    }
    return false;
} ; 
RadMenu.prototype.OnDocumentClick= function (e)
{
    var o9=this.EventSource(e);
    if (this.IsChildOf(this.DomElement,o9))
    {
        if (!this.O9(o9))
        {
            return;
        }
    }
    this.Hide();
};

















RadMenu.prototype.Enable= function ()
{ 
    this.Enabled= true;
    this.DomElement.disabled="";
    for (var i=0; i<this.AllItems.length; i++)
    {
        this.AllItems[i].Enable();
    }
};

RadMenu.prototype.Disable= function ()
{ 
    this.Enabled= false;
    this.DomElement.disabled="disabled";
    for (var i=0; i<this.AllItems.length; i++)
    {
        this.AllItems[i].Disable();
    }
};

RadMenu.prototype.Focus= function ()
{ 
    this.DomElement.focus();
};

RadMenu.prototype.RegisterDisposeOnUnload= function ()
{
    if (!RadControlsNamespace.Browser.IsIE)return;
    var I4=this ;
    this.l9= function (){
        I4.Dispose();
    };
    window.attachEvent("\x6fnu\x6e\x6coad",this.l9);
};
RadMenu.prototype.Dispose= function ()
{
    for (var i=0; i<this.AllItems.length; i++){
        this.AllItems[i].Dispose();
    }
    if (this.Detached && this.DomElement)
    {
        if (this.DomElement.parentNode)
        {
            this.DomElement.parentNode.removeChild(this.DomElement);
        }
    }
    if (RadControlsNamespace.Browser.IsIE)
    {
        window.detachEvent("\157\x6e\x75nload",this.l9);
        this.l9=null;
    }
    this.DomElement=null;
    this.ChildItemList=null;
    this.DisposeDomEventHandlers();
    if (this.IsContext && RadMenuNamespace.ContextMenus)
    {
        RadMenuNamespace.ContextMenus[this.ID]=null;
    }
};

RadMenu.prototype.CreateMenuItem= function (parent,o2)
{
    var item=new RadMenuItem(o2);
    item.Index=parent.Items.length;
    parent.Items[parent.Items.length]=item;
    item.GlobalIndex=this.AllItems.length;
    this.AllItems[this.AllItems.length]=item;
    item.Parent=parent;
    item.Menu=this ;
    return item;
} ;
 
RadMenu.prototype.CreateControlHierarchy= function (parent,i9)
{
    parent.Level=i9;
    var D=parent.ChildItemList;
    if (!D)
    {
        return;
    }
    for (var i=0; i<D.childNodes.length; i++)
    {
        var I9=D.childNodes[i];
        if (I9.nodeType==3)continue;
        var item=this.CreateMenuItem(parent,I9);
        item.Initialize();
        if (i9==0)
        {
            item.PostInitialize();
        }
        this.CreateControlHierarchy(item,i9+1);
    }
} ; 

RadMenu.prototype.FixItemWidth= function (item)
{
    var oa=0;
    var Oa=0;
    var ul=item.ChildItemList;
    for (var i=0; i<ul.childNodes.length; i++)
    {
        var li=ul.childNodes[i];
        if (li.nodeType==3)continue;
        var D=RadMenu.GetFirstChildByTagName(li,"a");
        if (!D)
        {
            D=li;
        }
        oa=Math.max(RadControlsNamespace.Box.GetOuterWidth(D),oa);
    }
    for ( i=0; i<ul.childNodes.length; i++)
    {
        li=ul.childNodes[i];
        if (li.nodeType==3)continue;
        if (RadControlsNamespace.Browser.IsOpera)
        {
            li.style.cssFloat="\x6e\x6fne";
        }
        var a=RadMenu.GetFirstChildByTagName(li,"a");
        if (a)
        {
            var la=!RadMenu.GetFirstChildByTagName(a,"\x73\x70an").firstChild;
            if (!RadControlsNamespace.Browser.IsIE || !la)
            {
                RadControlsNamespace.Box.SetOuterWidth(a,oa);
            }
        }
        else {
            li.style.width=oa+"px";
        }
    }

    if (RadControlsNamespace.Browser.IsSafari)
    {
        ul.style.width=RadMenu.GetFirstChildByTagName(ul,"\x6c\x69").offsetWidth+"\x70x";
    }
} ; 
RadMenu.prototype.FixRootItemWidth= function ()
{
    var I4=this ;
    var ia= function (){
        I4.FixItemWidth(I4);
    };
    if (this.RenderInProgress() || RadControlsNamespace.Browser.IsOpera || RadControlsNamespace.Browser.IsSafari)
    {
        if (window.addEventListener)
        {
            window.addEventListener("\x6coad",ia, false);
        }
        else
        {
            window.attachEvent("onload",ia);
        }
    }else
    {
        ia();
    }
};

RadMenu.prototype.FixListWidth= function (item)
{
    var Ia=0;
    var ul=item.ChildItemList;
    for (var i=0; i<ul.childNodes.length; i++)
    {
        var node=ul.childNodes[i];
        if (node.nodeType==3)continue;
        Ia+=node.offsetWidth;
        node.style.clear="\x6eone";
    }
    ul.style.width=Ia+"px";
} ;
 
RadMenu.prototype.LoadConfiguration= function (C)
{
    for (var i6 in C)
    {
        this[i6]=C[i6];
    }
    if (!this.DefaultGroupSettings)
    {
        this.DefaultGroupSettings= {} ;
    }
    if (typeof this.DefaultGroupSettings.Flow=="\x75ndefined")
    {
        this.DefaultGroupSettings.Flow=RadMenuNamespace.ItemFlow.Vertical;
    }
    if (typeof this.DefaultGroupSettings.ExpandDirection=="undefined")
    {
        this.DefaultGroupSettings.ExpandDirection=RadMenuNamespace.ExpandDirection.Auto;
    }
    if (typeof this.DefaultGroupSettings.OffsetX=="undef\x69\x6eed")
    {
        this.DefaultGroupSettings.OffsetX=0;
    }
    if (typeof this.DefaultGroupSettings.OffsetY=="\x75ndefi\x6e\x65d")
    {
        this.DefaultGroupSettings.OffsetY=0;
    }
} ; 

RadMenu.prototype.Close= function (C)
{
    if (this.OpenedItem)
    {
        this.OpenedItem.Close();
    }
} ; 

RadMenu.prototype.FindItemByText= function (text)
{
    for (var i=0; i<this.AllItems.length; i++)
    {
        if (this.AllItems[i].Text==text)
        {
            return this.AllItems[i];
        }
    }
    return null;
} ; 

RadMenu.prototype.FindItemById= function (id)
{
    for (var i=0; i<this.AllItems.length; i++)
    {
        if (this.AllItems[i].ID==id)
        {
            return this.AllItems[i];
        }
    }
    return null;
} ; 

RadMenu.prototype.FindItemByValue= function (value)
{
    for (var i=0; i<this.AllItems.length; i++)
    {
        if (this.AllItems[i].Value==value)
        {
            return this.AllItems[i];
        }
    }
    return null;
} ; 

RadMenu.prototype.FindItemByUrl= function (ob)
{
    for (var i=0; i<this.AllItems.length; i++)
    {
        if (this.AllItems[i].NavigateUrl==ob)
        {
            return this.AllItems[i];
        }
    }
    return null;
} ; 

RadMenu.prototype.SetContextElementID= function (id)
{
    if (!RadMenuNamespace.ContextElements)
    {
        RadMenuNamespace.ContextElements= {} ;
    }
    if (this.ContextMenuElementID)
    {
        RadMenuNamespace.ContextElements[this.ContextMenuElementID]= false;
    }
    this.ContextMenuElementID=id;
    RadMenuNamespace.ContextElements[this.ContextMenuElementID]= false;
};

RadMenu.prototype.RecordState= function ()
{
    if (this.InUpdate || !this.Initialized)
    {
        return;
    }
    var Ob=JSON.stringify(this,this.InitialState,RadMenu.JSONIncludeDeep);
    var lb=[];
    for (var i in this.ItemState)
    {
        if (this.ItemState[i]=="")
            continue;
        lb[lb.length]=this.ItemState[i];
    }
    this.StateField.value="{\042Stat\x65\x22:"+Ob+"\x2c\042\x49\x74em\x53\x74ate\x22\072{"+lb.join(",")+"}}";
};

RadMenu.prototype.SetAttribute= function (name,value)
{ 
    this.Attributes[name]=value;
    this.RecordState();
};

RadMenu.prototype.GetAttribute= function (name)
{
    return this.Attributes[name];
};

function ib(Ib)
{
    document.body.appendChild(document.createTextNode(Ib));
    document.body.appendChild(document.createElement("HR"));
}

function RadMenuItem(o2)
{ 
    this.DomElement=o2;
    this.LinkElement=RadMenu.GetFirstChildByTagName(this.DomElement,"\x61");
    if (this.LinkElement==null)
    {
        this.ID=this.DomElement.id;
        this.TextElement=RadMenu.GetFirstChildByTagName(this.DomElement,"span");
        this.NavigateUrl="";
    }else
    {
        this.ID=this.LinkElement.id;
        this.TextElement=RadMenu.GetFirstChildByTagName(this.LinkElement,"span");
        this.NavigateUrl=this.LinkElement.href;
    }
    this.IsSeparator= false;
    this.AnimationContainer=null;
    this.OpenedItem=null;
    this.FocusedItem=null;
    this.Items=[];
    this.Attributes= {} ;
    this.Index=-1;
    this.Level=-1;
    this.Parent=null;
    this.Menu=null;
    this.GroupSettings= {} ;
    this.TimeoutPointer=null;
    this.Templated= false;
    this.FocusedCssClass="focus\x65\144";
    this.ClickedCssClass="clicked";
    this.ExpandedCssClass="\x65xpanded";
    this.DisabledCssClass="\x64isabled";
    this.CssClass="";
    this.State=RadMenuItemState.Closed;
    this.Focused= false;
    this.Clicked= false;
    this.Enabled= true;
    this.Initialized= false;
}

RadMenuItem.prototype.PostInitializeItems= function ()
{
    for (var i=0; i<this.Items.length; i++)

    {
        this.Items[i].PostInitialize();
    }
};

RadMenuItem.prototype.SetText= function (text)
{ 
    this.PostInitialize();
    this.TextElement.innerHTML=text;
    this.Text=text;
    this.RecordState();
};

RadMenuItem.prototype.SetValue= function (value)
{ 
    this.PostInitialize();
    this.Value=value;
    this.RecordState();
};

RadMenuItem.prototype.InitializeDomElements= function ()
{
    if (!this.Templated)
    {
        this.AnimationContainer=RadMenu.GetFirstChildByTagName(this.DomElement,"d\x69v");
        this.ImageElement=RadMenu.GetFirstChildByTagName(this.LinkElement || this.DomElement,"img");
        if (this.ImageElement)
        {
            this.ImageUrl=this.ImageElement.src;
        }
    }
    else
    {
        this.TextElement=RadMenu.GetFirstChildByTagName(this.DomElement,"\x64iv");
        this.AnimationContainer=this.TextElement.nextSibling;
    }
    if (this.AnimationContainer)
    {
        var ul=this.AnimationContainer.getElementsByTagName("\x75l")[0];
        this.ChildItemList=ul;
        if (this.ChildItemList.parentNode!=this.AnimationContainer)
        {
            this.ScrollWrap=this.ChildItemList.parentNode;
        }
    }
};

RadMenuItem.prototype.Initialize= function ()
{
    RadControlsNamespace.DomEventMixin.Initialize(this );
    this.LoadConfiguration();
    this.InitializeDomElements();
    this.DetermineExpandDirection();
    if (this.AnimationContainer)
    {
        this.Ease=new RadControlsNamespace.Ease(this.ScrollWrap || this.ChildItemList,this.Menu,this.GroupSettings.OffsetX,this.GroupSettings.OffsetY,this, true);
        var O2=this.GroupSettings.ExpandDirection;
        var l2=RadMenuNamespace.ExpandDirectionPropertyName[O2];
        this.Ease.SetSide(l2);
        this.TextElement.className="\x74ext expand"+this.Ease.GetSide();
        this.AnimationContainer.style.zIndex=this.GlobalIndex+10;
        this.ChildItemList.style.zIndex=this.GlobalIndex+10;
        if (this.ScrollWrap)
        {
            this.CreateScroll();
        }
    }
    if (this.TextElement && this.TextElement.firstChild)
    {
        this.Text=this.TextElement.firstChild.nodeValue;
    }
    this.OriginalZIndex=Math.max(this.DomElement.style.zIndex,this.Menu.OriginalZIndex);
} ; 

RadMenuItem.prototype.PostInitialize= function ()
{
    if (this.Initialized){
        return;
    }
    this.AttachEventHandlers();
    this.RenderAccessKey();
    RadMenu.CreateState(this );
    this.UpdateCssClass();
    this.Initialized= true;
};

RadMenuItem.prototype.RenderAccessKey= function ()
{
    if (this.IsSeparator || this.Templated)
    {
        return;
    }
    var accessKey=this.LinkElement.accessKey.toLowerCase();
    if (!accessKey)
    {
        return;
    }
    var text=this.TextElement.firstChild.nodeValue;
    var i2=text.toLowerCase().indexOf(accessKey);
    if (i2==-1)
    {
        return;
    }

    this.TextElement.innerHTML=text.substr(0,i2)+"\x3cu>"+text.substr(i2,1)+"</u>"+text.substr(i2+1,text.length);
};

RadMenuItem.prototype.CreateScroll= function ()
{ 
    this.ScrollWrap.style.zIndex=this.GlobalIndex+10;
    this.BuildScrollObject( false);
};
RadMenuItem.prototype.BuildScrollObject= function (I2){
    var o3=RadMenuNamespace.ItemFlow.Vertical==this.GroupSettings.Flow;
    var options= {
        PerTabScrolling: false ,
        ScrollButtonsPosition: 1,
        ScrollPosition: 0
    } ;
    this.Scroll=new RadControlsNamespace.Scroll(this.ChildItemList,o3,options);

    this.Scroll.ScrollOnHover= true;
    this.Scroll.LeaveGapsForArrows= false;
    this.Scroll.WrapNeeded=I2;
    if (this.GroupSettings.Flow==RadMenuNamespace.ItemFlow.Vertical)
    {
        this.Scroll.LeftArrowClass="topArrow";
        this.Scroll.LeftArrowClassDisabled="\x74opArrowDi\x73\x61ble\x64";
        this.Scroll.RightArrowClass="bottomArr\x6f\x77";
        this.Scroll.RightArrowClassDisabled="bottomArro\x77\x44isab\x6c\x65d";
    }
};


RadMenuItem.prototype.CreateRuntimeScroll= function (height)
{
    if (this.Scroll)
    {
        this.Scroll.SetHeight(height);
        return;
    }
    this.BuildScrollObject( true);
    this.Scroll.Initialize();
    this.ScrollWrap=this.ChildItemList.parentNode;
    this.Ease.Element=this.ScrollWrap;
    this.Ease.Overlay.Element=this.ScrollWrap;
    this.ScrollWrap.className="scrollWrap";
    this.Scroll.SetHeight(height);
};
RadMenuItem.prototype.Dispose= function ()
{
    if (!this.Initialized)return;
    this.DisposeDomEventHandlers();
    if (this.Ease)
    {
        this.Ease.Dispose();
    }
    this.DomElement=null;
    this.LinkElement=null;
    this.AnimationContainer=null;
};

RadMenuItem.prototype.Focus= function ()
{
    if (!this.CanFocus())
    {
        return;
    }
    this.PostInitializeItems();
    if (this.Parent.OpenedItem)
    {
        this.Parent.OpenedItem.Close();
    }
    if (this.Parent.State!=RadMenuItemState.Open && this.Parent.Open)
    {
        this.Parent.Open();
    }
    this.Parent.FocusedItem=this ;
    if (!this.Focused && this.LinkElement)
    {
        this.LinkElement.focus();
    }
    this.CancelMenuClose();
    this.UpdateCssClass();
    this.RaiseEvent("\x4fnClien\x74\x49temF\x6f\x63us");
};
RadMenuItem.prototype.Blur= function ()
{
    if (this.IsSeparator)
    {
        return;
    }
    if (this.Focused)
    {
        this.LinkElement.blur();
    }
    this.Parent.FocusedItem=null;
    this.UpdateCssClass();
    this.RaiseEvent("On\x43\x6cientIt\x65\x6dBlu\x72");
};

RadMenuItem.prototype.Open= function ()
{ 
    this.PostInitializeItems();
    this.Menu.AboutToCollapse= false;
    if (this.Parent!=this.Menu && this.Parent.State!=RadMenuItemState.Open)
    {
        this.Parent.Open();
    }
    this.Parent.OpenedItem=this ;
    clearTimeout(this.TimeoutPointer);
    this.State=RadMenuItemState.Open;
    if (!this.AnimationContainer)return;
    var O3=RadControlsNamespace.Screen.GetViewPortSize();
    this.ChildItemList.style.display="block";
    this.Ease.ShowElements();
    if (this.GroupSettings.Flow==RadMenuNamespace.ItemFlow.Vertical)
    {
        this.Menu.FixItemWidth(this );
    }
    else
    {
        this.Menu.FixListWidth(this );
    }
    if (this.Menu.EnableAutoScroll && this.ChildItemList.offsetHeight>O3.height)
    {
        if (!this.ScrollWrap || this.ScrollWrap.offsetHeight>O3.height)
        {
            this.CreateRuntimeScroll(O3.height+"px");
            this.Ease.ShowElements();
            this.Ease.UpdateContainerSize();
        }
    }
    this.Ease.SetSide(this.GetEaseSide());
    this.Ease.UpdateContainerSize();
    if (this.Scroll)
    {
        this.CalculateScrollWrapSize();
        this.Scroll.Initialize();
    }
    this.PositionChildContainer(O3);
    this.Ease.In();
    this.UpdateCssClass();
    this.DomElement.style.zIndex=this.OriginalZIndex+1000;
    this.Menu.DomElement.style.zIndex=this.OriginalZIndex+1000;
    this.CancelMenuClose();
    this.RaiseEvent("On\x43lientItem\x4f\x70en");
} ; 

RadMenuItem.prototype.GetEaseSide= function ()
{
    var O2=this.GroupSettings.ExpandDirection;
    return RadMenuNamespace.ExpandDirectionPropertyName[O2];
};
RadMenuItem.prototype.RaiseEvent= function (o)
{
    return this.Menu.RaiseEvent(o, {
        Item: this
    } );
};

RadMenuItem.prototype.UpdateCssClass= function ()
{
    if (this.IsSeparator || this.Templated)
    {
        return;
    }
    var cssClass="link "+this.CssClass;
    if (this.Focused)
    {
        cssClass=cssClass+" "+this.FocusedCssClass;
    }
    if (this.State==RadMenuItemState.Open)
    {
        cssClass=cssClass+"\x20"+this.ExpandedCssClass;
    }
    if (this.Clicked)
    {
        cssClass=cssClass+" "+this.ClickedCssClass;
    }
    if (!this.Enabled)
    {
        cssClass=cssClass+" "+this.DisabledCssClass;
    }
    this.LinkElement.className=cssClass;
};

RadMenuItem.prototype.Enable= function ()
{
    if (this.IsSeparator || this.Templated)
    {
        return;
    }
    this.LinkElement.disabled="";
    this.Enabled= true;
    this.EnableDomEventHandling();
    this.UpdateCssClass();
};

RadMenuItem.prototype.Disable= function ()
{
    if (this.IsSeparator || this.Templated)
    {
        return;
    }
    this.LinkElement.disabled="disabled";
    this.Enabled= false;
    this.DisableDomEventHandling();
    this.UpdateCssClass();
};

RadMenuItem.prototype.Close= function ()
{
    if (this.IsSeparator)
    {
        return;
    }
    if (this.State==RadMenuItemState.Closed)
    {
        return;
    }
    if (this.OpenedItem)
    {
        this.OpenedItem.Close();
    }
    this.Parent.OpenedItem=null;
    clearTimeout(this.TimeoutPointer);
    this.State=RadMenuItemState.Closed;
    if (!this.AnimationContainer)
        return;
    if (this.Level==1)
    {
        this.Menu.AboutToCollapse= true;
    }
    this.Ease.Out();
    this.UpdateCssClass();
    this.DomElement.style.zIndex=this.OriginalZIndex;
    this.HideChildren();
} ; 
RadMenuItem.prototype.OnCollapseComplete= function ()
{
    if (this.Menu.AboutToCollapse)
    {
        if (this.Level==1)
        {
            this.Menu.DomElement.style.zIndex=this.Menu.OriginalZIndex;
        }
    }
    this.RaiseEvent("On\x43lientIt\x65\x6dClo\x73\x65");
};

RadMenuItem.prototype.HideChildren= function ()
{
    for (var i=0; i<this.Items.length; i++)
    {
        if (this.Items[i].AnimationContainer)
        {
            this.Items[i].AnimationContainer.style.display="\x6eone";
        }
    }
};
RadMenuItem.prototype.CalculateScrollWrapSize= function ()
{
    if (!this.ScrollWrap)
    {
        return;
    }
    if (!this.ScrollWrap.style.height)
    {
        this.ScrollWrap.style.height=this.ChildItemList.offsetHeight+"px";
    }
    if (!this.ScrollWrap.style.width)
    {
        this.ScrollWrap.style.width=this.ChildItemList.offsetWidth+"\x70\170";
    }
} ; 

RadMenuItem.prototype.AttachEventHandlers= function ()
{ 
    this.AttachDomEvent(this.DomElement,"\x6d\x6fuseover","Mouse\x4f\x76erHan\x64\x6cer");
    this.AttachDomEvent(this.DomElement,"mouseout","MouseOut\x48\x61ndle\x72");
    if (this.IsSeparator || this.Templated)
    {
        return;
    }
    this.AttachDomEvent(this.LinkElement,"\x63lick","Cli\x63\x6bHandle\x72", true);
    this.AttachDomEvent(this.LinkElement,"\x6douseout","HR\x65\x66MouseOu\x74\x48and\x6cer");
    this.AttachDomEvent(this.LinkElement,"\x6douseover","HRefMouseO\x76\x65rHan\x64\x6cer");
    this.AttachDomEvent(this.LinkElement,"mouse\x64\x6fwn","MouseD\x6f\x77nHand\x6c\x65r");
    this.AttachDomEvent(this.LinkElement,"mouseup","MouseUpH\x61\x6edler");
    this.AttachDomEvent(this.LinkElement,"\x62lur","\x42lurHan\x64\x6cer");
    this.AttachDomEvent(this.LinkElement,"\x66ocus","\106oc\x75\x73Handle\x72");
    this.AttachDomEvent(this.LinkElement,"keydown","KeyDownHand\x6c\x65r");
} ;

 
RadMenuItem.prototype.MouseDownHandler= function (e)
{ 
    this.Clicked= true;
    this.UpdateCssClass();
};

RadMenuItem.prototype.MouseUpHandler= function (e)
{ 
    this.Clicked= false;
    this.UpdateCssClass();
};
RadMenuItem.prototype.HRefMouseOutHandler= function (e)
{
    var l3=RadControlsNamespace.DomEvent.GetRelatedTarget(e);
    if (this.Menu.IsChildOf(this.LinkElement,l3) || l3==this.LinkElement)
    {
        return;
    }
    if (this.ImageOverUrl && this.ImageElement)
    {
        this.ImageElement.src=this.ImageUrl;
    }
    this.RaiseEvent("\x4fnClient\x4d\x6fuseO\x75\x74");
};

RadMenuItem.prototype.HRefMouseOverHandler= function (e)
{
    var i3=RadControlsNamespace.DomEvent.GetRelatedTarget(e);
    if (this.Menu.IsChildOf(this.LinkElement,i3) || this.LinkElement==i3)
    {
        return;
    }
    if (this.ImageOverUrl && this.ImageElement)
    {
        this.ImageElement.src=this.ImageOverUrl;
    }
    this.RaiseEvent("OnCl\x69\x65ntMous\x65\x4fver");
};
RadMenuItem.prototype.KeyDownHandler= function (e)
{
    var I3= {
        left: 37,
        o4: 38,
        right: 39,
        O4: 40,
        l4: 27
    } ;
    var keyCode=RadControlsNamespace.DomEvent.GetKeyCode(e);
    if (keyCode==I3.right)
    {
        if (this.Menu.RightToLeft)
        {
            this.HandleLeftArrow();
        }
        else
        {
            this.HandleRightArrow();
        }
    }else if (keyCode==I3.left)
    {
        if (this.Menu.RightToLeft)
        {
            this.HandleRightArrow();
        }
        else
        {
            this.HandleLeftArrow();
        }
    }
    else if (keyCode==I3.o4)
    {
        this.HandleUpArrow();
    }
    else if (keyCode==I3.O4)
    {
        this.HandleDownArrow();
    }
    else if (keyCode==I3.l4)
    {
        this.Parent.Focus();
    }
    else
    {
        return;
    }
    RadControlsNamespace.DomEvent.PreventDefault(e);
};

RadMenuItem.prototype.FocusHandler= function (e){
    this.Focused= true;
    this.Focus();
};

RadMenuItem.prototype.ScheduleMenuClose= function (i4){
    var menu=this.Menu;
    clearTimeout(this.Menu.CloseTimeout);

    this.Menu.CloseTimeout=setTimeout( function (){
        menu.Close();
        menu.Clicked= false;
    } ,i4);
};

RadMenuItem.prototype.CancelMenuClose= function ()
{
    clearTimeout(this.Menu.CloseTimeout);
};
RadMenuItem.prototype.BlurHandler= function (e)
{
    if (this.LinkElement.offsetWidth)
    {
        this.ScheduleMenuClose(100);
    }
    this.Focused= false;
    this.Menu.Clicked= false;
    this.Blur();
};

RadMenuItem.prototype.NavigatesToURL= function ()
{
    if (location.href+"\x23"==this.NavigateUrl || location.href==this.NavigateUrl)
    {
        return false;
    }
    return (new RegExp("//")).test(this.LinkElement.href);
};

RadMenuItem.prototype.Validate= function ()
{
    if (!this.Menu.CausesValidation || this.NavigatesToURL()){
        return true;
    }
    if (typeof(Page_ClientValidate)!="function")
    {
        return true;
    }
    return Page_ClientValidate(this.Menu.ValidationGroup);
};

RadMenuItem.prototype.ClickHandler= function (e)
{
    if (!this.Enabled)
    {
        return RadControlsNamespace.DomEvent.PreventDefault(e);
    }
    if (!this.RaiseEvent("On\x43lientItemC\x6c\x69ckin\x67"))
    {
        return RadControlsNamespace.DomEvent.PreventDefault(e);
    }
    if (!this.Validate())
    {
        return RadControlsNamespace.DomEvent.PreventDefault(e);
    }
    var returnValue= true;
    if (!this.Menu.ClickToOpen)
    {
        returnValue= true;
    }
    else if (this.Level>1)
    {
        returnValue= true;
    }
    else
    {
        if (!this.Menu.Clicked)
        {
            this.Open();
        }
        else
        {
            this.Close();
        }
        this.Menu.Clicked=!this.Menu.Clicked;
    }
    this.RaiseEvent("O\x6eClientItemC\x6c\x69cke\x64");
    if (!this.NavigateAfterClick || !returnValue)
    {
        RadControlsNamespace.DomEvent.PreventDefault(e);
    }
};


RadMenuItem.prototype.MouseOverHandler= function (e)
{
    var i3=RadControlsNamespace.DomEvent.GetRelatedTarget(e);
    if (this.Menu.IsChildOf(this.DomElement,i3) || this.DomElement==i3)
    {
        return;
    }
    if (this.Menu.ClickToOpen && !this.Menu.Clicked)
    {
        return;
    }
    if (this.State==RadMenuItemState.Open || this.State==RadMenuItemState.AboutToOpen)
    {
        return;
    }
    this.Menu.LastOpenedItem=this ;
    if (this.State==RadMenuItemState.AboutToClose)
    {
        clearTimeout(this.TimeoutPointer);
        this.State=RadMenuItemState.Open;
        return;
    }

    if (this.Parent.OpenedItem)
    {
        this.Parent.OpenedItem.Close();
    }
    this.Parent.OpenedItem=this ;
    this.State=RadMenuItemState.AboutToOpen;
    var I4=this ;
    var o5= function ()
    {
        I4.Open();
    };
    this.TimeoutPointer=setTimeout(o5,this.Menu.ExpandDelay);

} ; 

RadMenuItem.prototype.MouseOutHandler= function (e)
{
    var l3=RadControlsNamespace.DomEvent.GetRelatedTarget(e);
    if ((!l3) || this.Menu.IsChildOf(this.DomElement,l3) || l3==this.DomElement)
    {
        return;
    }
    if (this.Menu.ClickToOpen)
    {
        return;
    }

    if (this.State==RadMenuItemState.Closed || this.State==RadMenuItemState.AboutToClose)
    {
        return;
    }
    if (this.State==RadMenuItemState.AboutToOpen)
    {
        clearTimeout(this.TimeoutPointer);
        this.State=RadMenuItemState.Closed;
        this.Parent.OpenedItem=null;
        return;
    }
    this.State=RadMenuItemState.AboutToClose;
    var I4=this ;
    var o5= function ()
    {
        I4.Close();
    };
    this.TimeoutPointer=setTimeout(o5,this.Menu.CollapseDelay);
} ; 

RadMenuItem.prototype.PositionChildContainer= function (O3){
    var top=0;
    var left=0;
    var O2=this.GroupSettings.ExpandDirection;
    var l2=RadMenuNamespace.ExpandDirectionPropertyName[O2];
    var O5=this.DomElement;
    var l5=RadControlsNamespace.Box.GetOuterHeight(O5);
    var i5=RadControlsNamespace.Box.GetOuterWidth(O5);
    var I5=this.AnimationContainer;
    var o6=RadControlsNamespace.Box.GetOuterHeight(I5);
    var O6=RadControlsNamespace.Box.GetOuterWidth(I5);

    if (O2==RadMenuNamespace.ExpandDirection.Down)
    {
        top=l5;
    }
    else if (O2==RadMenuNamespace.ExpandDirection.Right)
    {
        left=i5;
    }
    this.SetContainerPosition(left,top);
    var l6=RadControlsNamespace.Screen.GetElementPosition(I5);
    if (this.Menu.RightToLeft){
        left=i5-O6;
    }
    if (!this.Menu.EnableScreenBoundaryDetection)
    {
        this.Ease.SetSide(l2);
        this.TextElement.className="\x74\x65xt expand"+this.Ease.GetSide();
        return;
    }
    if (RadControlsNamespace.Screen.ElementOverflowsRight(O3,I5) && O2==RadMenuNamespace.ExpandDirection.Right)
    {
        O2=RadMenuNamespace.ExpandDirection.Left;
        l2="\162\x69\x67ht";
        left=0;
    }
    else if (l6.x-O6<0 && O2==RadMenuNamespace.ExpandDirection.Left)
    {
        O2=RadMenuNamespace.ExpandDirection.Right;
        l2="\x6ceft";
        left=i5;
    }
    else if (l6.y-o6<0 && O2==RadMenuNamespace.ExpandDirection.Up)
    {
        O2=RadMenuNamespace.ExpandDirection.Down;
        l2="\x74op";
        top=l5;
    }
    else if (RadControlsNamespace.Screen.ElementOverflowsBottom(O3,I5) && O2==RadMenuNamespace.ExpandDirection.Down)
    {
        O2=RadMenuNamespace.ExpandDirection.Up;
        l2="bottom";
        top=l5;
    }
    if (RadControlsNamespace.Screen.ElementOverflowsRight(O3,I5) && (O2==RadMenuNamespace.ExpandDirection.Down || O2==RadMenuNamespace.ExpandDirection.Up)){
        left=O3.width-(l6.x+O6);
    }
    else if (RadControlsNamespace.Screen.ElementOverflowsBottom(O3,I5))
    {
        if (O2==RadMenuNamespace.ExpandDirection.Left || O2==RadMenuNamespace.ExpandDirection.Right)
        {
            top=O3.height-(l6.y+o6);
        }
    }
    this.SetContainerPosition(left,top);
    this.Ease.SetSide(l2);
    this.TextElement.className="text ex\x70\x61nd"+this.Ease.GetSide();
} ; 

RadMenuItem.prototype.SetContainerPosition= function (left,top)
{ 
    this.AnimationContainer.style.top=(top+this.GroupSettings.OffsetY)+"\x70x";
    this.AnimationContainer.style.left=(left+this.GroupSettings.OffsetX)+"px";
};

RadMenuItem.prototype.SetAttribute= function (name,value)
{ 
    this.PostInitialize();
    this.Attributes[name]=value;
    this.RecordState();
};

RadMenuItem.prototype.SetImageUrl= function (src)
{ 

    this.PostInitialize();
    this.ImageUrl=src;
    this.ImageElement.src=src;
    this.RecordState();
};

RadMenuItem.prototype.SetImageOverUrl= function (src)
{ 
    this.PostInitialize();

    this.ImageOverUrl=src;
    this.RecordState();
};

RadMenuItem.prototype.GetAttribute= function (name){
    return this.Attributes[name];
};

RadMenuItem.prototype.DetermineExpandDirection= function (){
    if (this.GroupSettings.ExpandDirection!=RadMenuNamespace.ExpandDirection.Auto){
        return;
    }
    if (this.Parent.Flow==RadMenuNamespace.ItemFlow.Vertical){
        if (this.Menu.RightToLeft){
            this.GroupSettings.ExpandDirection=RadMenuNamespace.ExpandDirection.Left;
        }else {
            this.GroupSettings.ExpandDirection=RadMenuNamespace.ExpandDirection.Right;
        }
    }else {
    this.GroupSettings.ExpandDirection=RadMenuNamespace.ExpandDirection.Down;
}
};

RadMenuItem.prototype.LoadConfiguration= function ()
{
    if (this.Menu.ItemData[this.ID])
    {
        for (var i6 in this.Menu.ItemData[this.ID])
        {
            this[i6]=this.Menu.ItemData[this.ID][i6];
        }
    }
    var I6=this.Menu.DefaultGroupSettings;
    if (typeof this.GroupSettings.Flow=="\x75n\x64\x65fined")
    {
        this.GroupSettings.Flow=I6.Flow;
    }
    this.Flow=this.GroupSettings.Flow;
    if (typeof this.GroupSettings.ExpandDirection=="u\x6e\x64efined")
    {
        this.GroupSettings.ExpandDirection=I6.ExpandDirection;
    }
    if (typeof this.GroupSettings.OffsetX=="undefi\x6e\x65d")
    {
        this.GroupSettings.OffsetX=I6.OffsetX;
    }
    if (typeof this.GroupSettings.OffsetY=="\x75ndefi\x6e\x65d")
    {
        this.GroupSettings.OffsetY=I6.OffsetY;
    }
    if (!this.Enabled)
    {
        this.Disable();
    }
} ; 

RadMenuItem.prototype.HandleRightArrow= function (){
    if (this.Parent.Flow==RadMenuNamespace.ItemFlow.Horizontal){
        this.FocusNextItem();
    }
    else
    {
        if (this.Items.length && this.GroupSettings.ExpandDirection==RadMenuNamespace.ExpandDirection.Right){
            this.FocusFirstChild();
        }else if (this.Parent.GroupSettings && this.Parent.GroupSettings.ExpandDirection==RadMenuNamespace.ExpandDirection.Left){
            this.Parent.Focus();
        }else {
            if (this.Menu.OpenedItem){
                this.Menu.OpenedItem.GetNextItem().Focus();
            }
        }
    }
};

RadMenuItem.prototype.HandleLeftArrow= function ()
{
    if (this.Parent.Flow==RadMenuNamespace.ItemFlow.Horizontal)
    {
        this.FocusPreviousItem();
    }
    else
    {
        if (this.Items.length && this.GroupSettings.ExpandDirection==RadMenuNamespace.ExpandDirection.Left)
        {
            this.FocusFirstChild();
        }
        else if (this.Parent.GroupSettings && this.Parent.GroupSettings.ExpandDirection==RadMenuNamespace.ExpandDirection.Right)
        {
            this.Parent.Focus();
        }
        else
        {
            if (this.Menu.OpenedItem)
            {
                this.Menu.OpenedItem.GetPreviousItem().Focus();
            }
        }
    }
};

RadMenuItem.prototype.HandleUpArrow= function ()
{
    if (this.Parent.Flow==RadMenuNamespace.ItemFlow.Vertical)
    {
        this.FocusPreviousItem();
    }
    else
    {
        this.FocusLastChild();
    }
};

RadMenuItem.prototype.HandleDownArrow= function ()
{
    if (this.Parent.Flow==RadMenuNamespace.ItemFlow.Vertical)
    {
        this.FocusNextItem();
    }
    else
    {
        this.FocusFirstChild();
    }
};

RadMenuItem.prototype.GetNextItem= function ()
{
    if (this.Index==this.Parent.Items.length-1)
    {
        return this.Parent.Items[0];
    }
    return this.Parent.Items[this.Index+1];
};

RadMenuItem.prototype.GetPreviousItem= function ()
{
    if (this.Index==0)
    {
        return this.Parent.Items[this.Parent.Items.length-1];
    }
    return this.Parent.Items[this.Index-1];
};

RadMenuItem.prototype.CanFocus= function ()
{
    return (!this.IsSeparator) && this.Enabled;
};

RadMenuItem.prototype.FocusFirstChild= function ()
{
    if (!this.Items.length)
    {
        return;
    }
    var item=this.Items[0];
    while (!item.CanFocus())
    {
        item=item.GetNextItem();
        if (item==this.Items[0])
        {
            return;
        }
    }
    item.Focus();
};

RadMenuItem.prototype.FocusLastChild= function ()
{
    if (!this.Items.length)
    {
        return;
    }
    var item=this.Items[this.Items.length-1];
    while (!item.CanFocus())
    {
        item=item.GetPreviousItem();
        if (this.Items.length-1)
        {
            return;
        }
    }
    item.Focus();
};

RadMenuItem.prototype.FocusNextItem= function ()
{
    var item=this.GetNextItem();
    while (!item.CanFocus())
    {
        item=item.GetNextItem();
    }
    item.Focus();
};


RadMenuItem.prototype.FocusPreviousItem= function ()
{
    var item=this.GetPreviousItem();
    while (!item.CanFocus())
    {
        item=item.GetPreviousItem();
    }
    item.Focus();
};
RadMenuItem.prototype.RecordState= function ()
{
    var o7=JSON.stringify(this,this.InitialState,RadMenu.JSONIncludeDeep);
    if (o7=="\x7b}")
    {
        this.Menu.ItemState[this.ID]="";
    }
    else
    {
        this.Menu.ItemState[this.ID]="\042"+this.ID+"\042\x3a"+o7;
    }
    this.Menu.RecordState();
};

function RadMenuItemState(){}

RadMenuItemState= {
    Closed: 0,
    Open: 1,
    AboutToClose: 2,
    AboutToOpen: 3
};
;


if (typeof window.RadControlsNamespace=="\x75\x6edefined")
{
    window.RadControlsNamespace= {} ;
}

window.RadControlsNamespace.Screen= 
{
    GetViewPortSize:function ()
    {
        var width=0;
        var height=0;
        var Io=document.body;
        if (window.innerWidth)
        {
            width=window.innerWidth;
            height=window.innerHeight;
        }
        else
        {
            if (RadControlsNamespace.Browser.StandardsMode)
            {
                Io=document.documentElement;
            }
            width=Io.clientWidth;
            height=Io.clientHeight;
        }
        width+=Io.scrollLeft;
        height+=Io.scrollTop;
        return {
            width:width-6,
            height:height-6
            } ;
    } ,
    GetElementPosition:function (I8)
    {
        var parent=null;
        var op= {
            x: 0,
            y: 0
        } ;
        var box;
        if (I8.getBoundingClientRect)
        {
            box=I8.getBoundingClientRect();
            var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
            var scrollLeft=document.documentElement.scrollLeft || document.body.scrollLeft;
            op.x=box.left+scrollLeft-2;
            op.y=box.top+scrollTop-2;
            return op;
        }
        else if (document.getBoxObjectFor)
        {
            box=document.getBoxObjectFor(I8);
            op.x=box.x-2;
            op.y=box.y-2;
        }
        else
        {
            op.x=I8.offsetLeft;
            op.y=I8.offsetTop;
            parent=I8.offsetParent;

            if (parent!=I8)
            {
                while (parent)
                {
                    op.x+=parent.offsetLeft;
                    op.y+=parent.offsetTop;
                    parent=parent.offsetParent;
                }
            }
        }

        if (window.opera)
        {
            parent=I8.offsetParent;
            while (parent && parent.tagName!="\x42O\x44\x59" && parent.tagName!="\x48TML")
            {
                op.x-=parent.scrollLeft;
                op.y-=parent.scrollTop;
                parent=parent.offsetParent;
            }
        }
        else
        {
            parent=I8.parentNode;
            while (parent && parent.tagName!="\x42ODY" && parent.tagName!="HTML")
            {
                op.x-=parent.scrollLeft;
                op.y-=parent.scrollTop;
                parent=parent.parentNode;
            }
        }
        return op;
    } ,
    ElementOverflowsTop:function (D)
    {
        return this.GetElementPosition(D).y<0;
    } ,
    ElementOverflowsLeft:function (D)
    {
        return this.GetElementPosition(D).x<0;
    } ,
    ElementOverflowsBottom:function (Op,D)
    {
        var lp=this.GetElementPosition(D).y+RadControlsNamespace.Box.GetOuterHeight(D);
        return lp>Op.height;
    } ,
    ElementOverflowsRight:function (Op,D)
    {
        var ip=this.GetElementPosition(D).x+RadControlsNamespace.Box.GetOuterWidth(D);
        return ip>Op.width;
    }
};












if (typeof window.RadMenuNamespace=="undef\x69\x6e\x65d")
{
    window.RadMenuNamespace= {} ;

}
RadMenuNamespace.ItemFlow = {
    Vertical: 0,
    Horizontal: 1
} ; 


RadMenuNamespace.ExpandDirection= {
    Auto: 0,
    Up: 1,
    Down: 2,
    Left: 3,
    Right: 4
} ; 
RadMenuNamespace.ExpandDirectionPropertyName= {
    "1": "\x62ottom",
    "2": "t\x6f\x70",
    "\x33": "righ\x74",
    "4": "left"
} ; 





if (typeof window.RadControlsNamespace=="undefined")
{
    window.RadControlsNamespace= {} ;
}



RadControlsNamespace.DomEventMixin= 
{
    Initialize:function (O){
        O.CreateEventHandler=this.CreateEventHandler;
        O.AttachDomEvent=this.AttachDomEvent;
        O.DetachDomEvent=this.DetachDomEvent;
        O.DisposeDomEventHandlers=this.DisposeDomEventHandlers;
        O.DomEventHandlers=[];
        O.DomEventHandlersHash= {} ;
        O._domEventHandlingEnabled= true;
        O.EnableDomEventHandling=this.EnableDomEventHandling;
        O.DisableDomEventHandling=this.DisableDomEventHandling;
    } ,
    EnableDomEventHandling:function (){
        this._domEventHandlingEnabled= true;
    } ,
    DisableDomEventHandling:function (){
        this._domEventHandlingEnabled= false;
    } ,
    CreateEventHandler:function (Ok,lk){
        var I4=this ;
        return function (e){
            if (!I4._domEventHandlingEnabled && !lk){
                return false;
            }
            return I4[Ok](e || window.event);
        };

} ,
AttachDomEvent:function (D,o,ik,lk)
{
    var eventHandler=this.CreateEventHandler(ik,lk);
    var Ik= {
        "E\x6c\x65\x6dent":D,
        "\x4eame":o,
        "\x48\x61ndler":eventHandler
    } ;
    this.DomEventHandlers[this.DomEventHandlers.length]=Ik;
    this.DomEventHandlersHash[ik]=eventHandler;
    if (D.addEventListener)
    {
        D.addEventListener(o,eventHandler, false);
    }
    else if (D.attachEvent)
    {
        D.attachEvent("on"+o,eventHandler);
    }
} ,
DetachDomEvent:function (D,o,eventHandler)
{
    if (typeof eventHandler=="\x73\x74\x72ing")
    {
        eventHandler=this.DomEventHandlersHash[eventHandler];
    }
    if (!D)
    {
        return;
    }
    if (D.removeEventListener)
    {
        D.removeEventListener(o,eventHandler, false);
    }
    else if (D.detachEvent)
    {
        D.detachEvent("on"+o,eventHandler);
    }
} ,
DisposeDomEventHandlers:function ()
{
    for (var i=0; i<this.DomEventHandlers.length; i++)
    {
        this.DetachDomEvent(this.DomEventHandlers[i].Element,this.DomEventHandlers[i].Name,this.DomEventHandlers[i].Handler);
        this.DomEventHandlers[i].Element=null;
    }
}
};


RadControlsNamespace.DomEvent= {} ; 
RadControlsNamespace.DomEvent.PreventDefault= function (e)
{
    if (!e)return true;
    if (e.preventDefault)
    {
        e.preventDefault();
    }
    e.returnValue= false;
    return false;
};
                                    
RadControlsNamespace.DomEvent.StopPropagation= function (e)
{
    if (!e)return;
    if (e.stopPropagation)
    {
        e.stopPropagation();
    }
    else
    {
        e.cancelBubble= true;
    }
};
                                    
RadControlsNamespace.DomEvent.GetTarget= function (e)
{
    if (!e)return null;
    return e.target || e.srcElement;
};
                                    
RadControlsNamespace.DomEvent.GetRelatedTarget= function (e)
{
    if (!e)return null;
    return e.relatedTarget || (e.type=="\x6d\x6f\165\x73\x65out"?e.toElement:e.fromElement);
};
                                    
RadControlsNamespace.DomEvent.GetKeyCode= function (e)
{
    if (!e)return 0;
    return e.which || e.keyCode;
};
                                    
                                    
if (typeof window.RadControlsNamespace=="\x75\x6edefined")
{
    window.RadControlsNamespace= {} ;
}


RadControlsNamespace.Ease= function (D,C,offsetX,offsetY,c,B)
{ 
    this.Element=D;
    if (B)
    {
        this.Overlay=new RadControlsNamespace.Overlay(D);
    }
    this.OffsetX=offsetX;
    this.OffsetY=offsetY;
    this.Invert= false;
    var parent=this.Element.parentNode;
    this.ExpandConfig=this.MergeConfig(C.ExpandAnimation);
    this.CollapseConfig=this.MergeConfig(C.CollapseAnimation);
    this.Ticker=new RadControlsNamespace.Ticker(this );
    this.Listener=c;
    this.SlideParent= false;
};
                                    
RadControlsNamespace.Ease.Coef=0; 


RadControlsNamespace.Ease.prototype= 
{                                    
    SetSide:function (o0)
    {
        this.InitialSide=o0.charAt(0).toUpperCase()+o0.substr(1,o0.length-1);
        this.Invert= false;
        if (o0=="\162\x69ght")
        {
            o0="\x6c\145ft";
            this.Invert= true;
        }
        if (o0=="\x62ottom")
        {
            o0="to\x70";
            this.Invert= true;
        }
        this.Side=o0;
        this.Horizontal=o0=="\x6ceft";
    } ,
    MergeConfig:function (O0)
    {
        if (!O0.Type)
        {
            O0.Type="\x4futQuint";
        }
        if (!O0.Duration)
        {
            O0.Duration=200;
        }
        return O0;
    } ,
    GetSide:function ()
    {
        return this.InitialSide;
    } ,
    ShowElements:function ()
    {
        this.Element.parentNode.style.display="\x62\154ock";
        this.Element.style.display="\x62lock";
        this.Element.parentNode.style.overflow="\x68\x69dden";
    } ,
    Dispose:function ()
    {
        this.Ticker.Stop();
        this.Element=null;
        if (this.Overlay)
        {
            this.Overlay.Dispose();
        }
    } ,
    ResetState:function (l0)
    {
        this.ShowElements();
        if (l0)
        {
            var i0=(this.Horizontal?this.Element.offsetWidth: this.Element.offsetHeight);
            if (!this.Invert)
            {
                i0=-i0;
            }
            this.SetPosition(i0);
        }
        this.InitialPosition=this.GetPosition();
    } ,
    UpdateContainerSize:function ()
    {
        if (!this.Element.parentNode)
        {
            return;
        }
        if (!this.Element.offsetWidth || !this.Element.offsetHeight)
        {
            return;
        }
        if (this.Invert)
        {
            if (this.Side=="\x6ceft")
            {
                this.Element.parentNode.style.height=this.Element.offsetHeight+"\x70x";
            }
            else if (this.Side=="\x74op")
            {
                this.Element.parentNode.style.width=this.Element.offsetWidth+"\x70x";
            }
            return;
        }
        var top=0;
        var left=0;
        if (this.Element.style.top!="")
        {
            top=Math.max(parseInt(this.Element.style.top),0);
        }
        if (this.Element.style.left!="")
        {
            left=Math.max(parseInt(this.Element.style.left),0);
        }
        if (this.SlideParent)
        {
            top=parseInt(this.Element.style.top);
            if (isNaN(top))top=0;
        }
        if (this.Element.parentNode.style.height!=this.Element.offsetHeight+top+"px")
        {
            this.Element.parentNode.style.height=Math.max(this.Element.offsetHeight+top,0)+"p\x78";
        }
        if (this.Element.parentNode.style.width!=(this.Element.offsetWidth+left)+"\x70\170")
        {
            this.Element.parentNode.style.width=Math.max(this.Element.offsetWidth+left,0)+"\x70x";
        }
    } ,
    GetSize:function ()
    {
        return this.Horizontal?this.Element.offsetWidth: this.Element.offsetHeight;
    } ,
    GetPosition:function ()
    {
        if (!this.Element.style[this.Side])
        {
            return 0;
        }
        return parseInt(this.Element.style[this.Side]);
    } ,
    SetPosition:function (value)
    {
        this.Element.style[this.Side]=value+"\x70x";
    } ,
    Out:function ()
    {
        this.ResetState();
        this.Direction=-1;
        if (this.Invert)
        {
            this.Delta=this.GetSize()-this.GetPosition();
        }
        else
        {
            this.Delta=this.GetPosition()-this.GetSize();
        }
        this.Start(this.CollapseConfig);
    } ,
    In:function ()
    {
        this.ResetState( true);
        this.Direction=1;
        this.Delta=-this.GetPosition();
        this.Start(this.ExpandConfig);
    } ,
    Start:function (I0){
        if (I0.Type=="None")

        {
            this.UpdateContainerSize();
            this.Ticker.Stop();
            this.OnTickEnd();
            this.ChangePosition(this.InitialPosition+this.Delta);
            if (this.Overlay)
            {
                this.Overlay.Update();
            }
            this.UpdateContainerSize();
            return;
        }
        this.Tween=I0.Type;
        this.Ticker.Configure(I0);
        this.Ticker.Start();
        this.UpdateContainerSize();
    } ,
    ChangePosition:function (o1)
    {
        if (isNaN(o1))return;
        var O1,l1,i1;
        if (this.Invert)
        {
            if (this.Horizontal)
            {
                O1=this.Element.offsetWidth;
                l1="widt\x68";
                i1=this.OffsetX;
            }
            else
            {
                O1=this.Element.offsetHeight;
                l1="hei\x67\x68t";
                i1=this.OffsetY;
            }
            this.SetPosition(0);
            var I1=Math.max(1,O1-o1)+"px";
            this.Element.parentNode.style[l1]=I1;
            this.Element.parentNode.style[this.Side]=((O1-o1+i1)*-1)+"px";
        }
        else
        {
            this.Element.style[this.Side]=o1+"\x70x";
        }
    } ,
    OnTick:function (time)
    {
        var o1=Math.round(Penner[this.Tween](time,this.InitialPosition,this.Delta,this.Ticker.Duration));
        if (o1==this.InitialPosition+this.Delta)
        {
            this.Ticker.Stop();
        }
        this.ChangePosition(o1);
        this.UpdateContainerSize();
        if (this.Overlay)
        {
            this.Overlay.Update();
        }
    } ,
    OnTickEnd:function ()
    {
        try
        {
            if (this.Direction==0)
            {
                return;
            }
            if (this.Direction>0)
            {
                this.Element.parentNode.style.overflow="visible";
                if (this.Listener && this.Listener.OnExpandComplete)
                {
                    this.Listener.OnExpandComplete();
                }
            }else
            {
                this.Element.parentNode.style.display="none";
                if (this.Listener)
                {
                    this.Listener.OnCollapseComplete();
                }
            }
            this.ChangePosition(this.InitialPosition+this.Delta);
            this.Direction=0;
        }
        catch (e){}
    }
};
var Penner= {} ; 
Penner.Linear= function (Ip,b,Om,K)
{
    return Om*Ip/K+b;
} ; 
Penner.InQuad= function (Ip,b,Om,K)
{
    return Om*(Ip /= K)*Ip+b;
} ; 
Penner.OutQuad= function (Ip,b,Om,K)
{
    return -Om*(Ip /= K)*(Ip-2)+b;
} ; 
Penner.InOutQuad= function (Ip,b,Om,K)
{
    if ((Ip /= K/2)<1)return Om/2*Ip*Ip+b;
    return -Om/2*(( --Ip)*(Ip-2)-1)+b;
} ; 
Penner.InCubic= function (Ip,b,Om,K)
{
    return Om*(Ip /= K)*Ip*Ip+b;
} ; 
Penner.OutCubic= function (Ip,b,Om,K)
{
    return Om*((Ip=Ip/K-1)*Ip*Ip+1)+b;
} ; 
Penner.InOutCubic= function (Ip,b,Om,K){
    if ((Ip /= K/2)<1)return Om/2*Ip*Ip*Ip+b;
    return Om/2*((Ip-=2)*Ip*Ip+2)+b;
} ; 
Penner.InQuart= function (Ip,b,Om,K)
{
    return Om*(Ip /= K)*Ip*Ip*Ip+b;
} ; 
Penner.OutQuart= function (Ip,b,Om,K)
{
    return -Om*((Ip=Ip/K-1)*Ip*Ip*Ip-1)+b;
} ; 
Penner.InOutQuart= function (Ip,b,Om,K)
{
    if ((Ip /= K/2)<1)return Om/2*Ip*Ip*Ip*Ip+b;
    return -Om/2*((Ip-=2)*Ip*Ip*Ip-2)+b;
} ; 
Penner.InQuint= function (Ip,b,Om,K)
{
    return Om*(Ip /= K)*Ip*Ip*Ip*Ip+b;
} ; 
Penner.OutQuint= function (Ip,b,Om,K)
{
    return Om*((Ip=Ip/K-1)*Ip*Ip*Ip*Ip+1)+b;
} ; 
Penner.InOutQuint= function (Ip,b,Om,K)
{
    if ((Ip /= K/2)<1)return Om/2*Ip*Ip*Ip*Ip*Ip+b;
    return Om/2*((Ip-=2)*Ip*Ip*Ip*Ip+2)+b;
} ; 
Penner.InSine= function (Ip,b,Om,K)
{
    return -Om*Math.cos(Ip/K*(Math.PI/2))+Om+b;
} ; 
Penner.OutSine= function (Ip,b,Om,K)
{
    return Om*Math.sin(Ip/K*(Math.PI/2))+b;
} ; 
Penner.InOutSine= function (Ip,b,Om,K)
{
    return -Om/2*(Math.cos(Math.PI*Ip/K)-1)+b;
} ; 
Penner.InExpo= function (Ip,b,Om,K)
{
    return (Ip==0)?b:Om*Math.pow(2,10*(Ip/K-1))+b;
} ; 
Penner.OutExpo= function (Ip,b,Om,K)
{
    return (Ip==K)?b+Om:Om*(-Math.pow(2,-10*Ip/K)+1)+b;
} ; 
Penner.InOutExpo= function (Ip,b,Om,K)
{
    if (Ip==0)return b;
    if (Ip==K)return b+Om;
    if ((Ip /= K/2)<1)return Om/2*Math.pow(2,10*(Ip-1))+b;
    return Om/2*(-Math.pow(2,-10* --Ip)+2)+b;
} ; 
Penner.InCirc= function (Ip,b,Om,K)
{
    return -Om*(Math.sqrt(1-(Ip /= K)*Ip)-1)+b;
} ; 
Penner.OutCirc= function (Ip,b,Om,K)
{
    return Om*Math.sqrt(1-(Ip=Ip/K-1)*Ip)+b;
} ; 
Penner.InOutCirc= function (Ip,b,Om,K)
{
    if ((Ip /= K/2)<1)return -Om/2*(Math.sqrt(1-Ip*Ip)-1)+b;
    return Om/2*(Math.sqrt(1-(Ip-=2)*Ip)+1)+b;
} ; 
Penner.InElastic= function (Ip,b,Om,K,a,p)
{
    if (Ip==0)return b;
    if ((Ip /= K)==1)return b+Om;
    if (!p)p=K*.3;
    if ((!a) || a<Math.abs(Om))
    {
        a=Om;
        var s=p/4;
    }
    else
        s=p/(2*Math.PI)*Math.asin(Om/a);
    return -(a*Math.pow(2,10*(Ip-=1))*Math.sin((Ip*K-s)*(2*Math.PI)/p))+b;
} ; 
Penner.OutElastic= function (Ip,b,Om,K,a,p)
{
    if (Ip==0)return b;
    if ((Ip /= K)==1)return b+Om;
    if (!p)p=K*.3;
    if ((!a) || a<Math.abs(Om))
    {
        a=Om;
        var s=p/4;
    }
    else
        s=p/(2*Math.PI)*Math.asin(Om/a);
    return a*Math.pow(2,-10*Ip)*Math.sin((Ip*K-s)*(2*Math.PI)/p)+Om+b;
} ; 
Penner.InOutElastic= function (Ip,b,Om,K,a,p)
{
    if (Ip==0)return b;
    if ((Ip /= K/2)==2)return b+Om;
    if (!p)p=K*(.3*.15e1);
    if ((!a) || a<Math.abs(Om))
    {
        a=Om;
        var s=p/4;
    }
    else
        s=p/(2*Math.PI)*Math.asin(Om/a);
    if (Ip<1)return -.5*(a*Math.pow(2,10*(Ip-=1))*Math.sin((Ip*K-s)*(2*Math.PI)/p))+b;
    return a*Math.pow(2,-10*(Ip-=1))*Math.sin((Ip*K-s)*(2*Math.PI)/p)*.5+Om+b;
} ; 
Penner.InBack= function (Ip,b,Om,K,s)
{
    if (s==undefined)s=.170158e1;
    return Om*(Ip /= K)*Ip*((s+1)*Ip-s)+b;
} ; 
Penner.OutBack= function (Ip,b,Om,K,s)
{
    if (s==undefined)s=.170158e1;
    return Om*((Ip=Ip/K-1)*Ip*((s+1)*Ip+s)+1)+b;
} ; 
Penner.InOutBack= function (Ip,b,Om,K,s)
{
    if (s==undefined)s=.170158e1;
    if ((Ip /= K/2)<1)return Om/2*(Ip*Ip*(((s *= (.1525e1))+1)*Ip-s))+b;
    return Om/2*((Ip-=2)*Ip*(((s *= (.1525e1))+1)*Ip+s)+2)+b;
} ; 
Penner.InBounce= function (Ip,b,Om,K)
{
    return Om-Penner.OutBounce(K-Ip,0,Om,K)+b;
} ; 
Penner.OutBounce= function (Ip,b,Om,K)
{
    if ((Ip /= K)<(1/.275e1))
    {
        return Om*(.75625e1*Ip*Ip)+b;
    }
    else if (Ip<(2/.275e1))
    {
        return Om*(.75625e1*(Ip-=(.15e1/.275e1))*Ip+.75)+b;
    }
    else if (Ip<(.25e1/.275e1))
    {
        return Om*(.75625e1*(Ip-=(.225e1/.275e1))*Ip+.9375)+b;
    }
    else
    {
        return Om*(.75625e1*(Ip-=(.2625e1/.275e1))*Ip+.984375)+b;
    }
} ; 
Penner.InOutBounce= function (Ip,b,Om,K)
{
    if (Ip<K/2)return Penner.InBounce(Ip*2,0,Om,K)*.5+b;
    return Penner.OutBounce(Ip*2-K,0,Om,K)*.5+Om*.5+b;
} ;


if (typeof window.RadControlsNamespace=="\x75\x6edefined")
{
    window.RadControlsNamespace= {} ;
}

RadControlsNamespace.EventMixin= 
{
    Initialize:function (O)
    {
        O._listeners= {} ;
        O._eventsEnabled= true;
        O.AttachEvent=this.AttachEvent;
        O.DetachEvent=this.DetachEvent;
        O.RaiseEvent=this.RaiseEvent;
        O.EnableEvents=this.EnableEvents;
        O.DisableEvents=this.DisableEvents;
    } ,
    DisableEvents:function ()
    {
        this._eventsEnabled= false;
    } ,
    EnableEvents:function ()
    {
        this._eventsEnabled= true;
    } ,
    AttachEvent:function (o,Y)
    {
        if (!this._listeners[o])
        {
            this._listeners[o]=[];
        }
        this._listeners[o][this._listeners[o].length]=(RadControlsNamespace.EventMixin.ResolveFunction(Y));
    } ,
    DetachEvent:function (o,Y)
    {
        var I=this._listeners[o];
        if (!I)
        {
            return false;
        }
        var A=RadControlsNamespace.EventMixin.ResolveFunction(Y);
        for (var i=0; i<I.length; i++)
        {
            if (A==I[i])
            {
                I.splice(i,1);
                return true;
            }
        }
        return false;
    } ,
    ResolveFunction:function (U)
    {
        if (typeof(U)=="functio\x6e")
        {
            return U;
        }
        else if (typeof(window[U])=="\x66\165n\x63\x74ion")
        {
            return window[U];
        }
        else
        {
            return new Function("\x76ar Sende\x72\x20= a\x72\x67um\x65\156t\x73\x5b0];\x20\166a\x72 Arg\x75ments \x3d\040\x61rgum\x65\156\x74\163[\x31];"+U);
        }
    } ,
    RaiseEvent:function (o,Z)
    {
        if (!this._eventsEnabled)
        {
            return true;
        }
        var z= true;
        if (this[o])
        {
            var X=RadControlsNamespace.EventMixin.ResolveFunction(this[o])(this,Z);
            if (typeof(X)=="\x75ndefine\x64")
            {
                X= true;
            }
            z=z && X;
        }
        if (!this._listeners[o])return z;
        for (var i=0; i<this._listeners[o].length; i++)
        {
            var Y=this._listeners[o][i];
            X=Y(this,Z);
            if (typeof(X)=="\x75ndefined"){
                X= true;
            }
            z=z && X;
        }
        return z;
    }
} ;



if (typeof window.RadControlsNamespace=="\x75\x6edefined")
{
    window.RadControlsNamespace= {} ;
}
window.RadControlsNamespace.Overlay= function (D)
{
    if (!this.SupportsOverlay())
    {
        return;
    }
    this.Element=D;
    this.Shim=document.createElement("\x49FR\x41\x4dE");
    this.Shim.src="\x6aavascrip\x74\x3a\047\047\x3b";
    this.Element.parentNode.insertBefore(this.Shim,this.Element);
    if (D.style.zIndex>0)
    {
        this.Shim.style.zIndex=D.style.zIndex-1;
    }
    this.Shim.style.position="a\x62\x73olute";
    this.Shim.style.border="\x30\x70x";
    this.Shim.frameBorder=0;
    this.Shim.style.filter="\x70rogid:DXIm\x61\x67eTr\x61\x6esf\x6f\x72m.M\x69\143r\x6f\163o\x66t.Alp\x68a(styl\x65\075\x30,opac\x69\164y\x3d0)";
    this.Shim.disabled="d\x69\x73abled";
};


RadControlsNamespace.Overlay.prototype.SupportsOverlay= function ()
{
    return RadControlsNamespace.Browser.IsIE || (RadControlsNamespace.Browser.IsMozilla && RadControlsNamespace.Browser.IsMac);
};
                                    
RadControlsNamespace.Overlay.prototype.Update= function ()
{
    if (!this.SupportsOverlay())
    {
        return;
    }
    this.Shim.style.top=this.ToUnit(this.Element.style.top);
    this.Shim.style.left=this.ToUnit(this.Element.style.left);
    this.Shim.style.width=this.Element.offsetWidth+"px";
    this.Shim.style.height=this.Element.offsetHeight+"px";
};
                                    
RadControlsNamespace.Overlay.prototype.ToUnit= function (value)
{
    if (!value)return "\x30px";
    return parseInt(value)+"px";
};
                                    
RadControlsNamespace.Overlay.prototype.Dispose= function ()
{ 
    this.Element=null;
    this.Shim=null;
};





if (typeof window.RadControlsNamespace=="\x75\x6edefine\x64")
{
    window.RadControlsNamespace= {} ;
}

RadControlsNamespace.ScrollButtonsPosition= {
    Left: 0,
    Middle: 1,
    Right: 2
} ; 

RadControlsNamespace.Scroll= function (D,le,ie)
{ 
    this.Owner=ie;
    this.Element=D;
    this.IsVertical=le;
    this.ScrollButtonsPosition=ie.ScrollButtonsPosition;
    this.ScrollPosition=ie.ScrollPosition;
    this.PerTabScrolling=ie.PerTabScrolling;
    this.ScrollOnHover= false;
    this.WrapNeeded= false;
    this.LeaveGapsForArrows= true;
    this.LeftArrowClass="\x6ceft\x41\x72row";
    this.LeftArrowClassDisabled="leftAr\x72\x6fwDisa\x62\x6ced";
    this.RightArrowClass="rig\x68\x74Arrow";
    this.RightArrowClassDisabled="\x72ightArrowDis\x61\x62led";
    this.Initialized= false;
} ; 

RadControlsNamespace.Scroll.Create= function (D,le,ie)
{
    return new RadControlsNamespace.Scroll(D,le,ie);
};

RadControlsNamespace.Scroll.prototype.Initialize= function ()
{
    if (this.Initialized)
    {
        this.ApplyOverflow();
        this.CalculateMinMaxPosition();
        this.EvaluateArrowStatus();
        return false;
    }
    if ((this.Element.offsetWidth==0 && !this.IsVertical) || (this.Element.offsetHeight==0 && this.IsVertical))
    {
        return false;
    }
    this.Initialized= true;
    this.ScrollAmount=2;
    this.Direction=0;
    if (this.WrapNeeded)
    {
        var Ie=this.CreateScrollWrap();
    }
    this.ApplyOverflow();
    this.Element.style.position="r\x65lative";
    this.AttachArrows();
    this.CalculateMinMaxPosition();
    if (this.PerTabScrolling)
    {
        this.CalculateInitialTab();
    }
    this.AttachScrollMethods();
    this.EvaluateArrowStatus();
    this.AttachEventHandlers();
    this.ScrollTo(this.ScrollPosition);
    this.ApplyOverflow();
    return Ie;
} ; 

RadControlsNamespace.Scroll.prototype.ApplyOverflow= function (){
    if (RadControlsNamespace.Browser.IsIE)
    {
        this.Element.parentNode.style.overflow="vi\x73\x69ble";
        if (this.IsVertical)
        {
            this.Element.parentNode.style.overflowX="";
            this.Element.parentNode.style.overflowY="h\x69\x64den";
        }
        else
        {
            this.Element.parentNode.style.overflowX="\x68idden";
            this.Element.parentNode.style.overflowY="\x68idden";
        }
    }
    else
    {
        this.Element.parentNode.style.overflow="hidde\x6e";
    }
    if (!this.ScrollNeeded())
    {
        this.Element.parentNode.style.overflow="\x76isible";
        this.Element.parentNode.style.overflowX="visib\x6c\x65";
        this.Element.parentNode.style.overflowY="visible";
    }
};
RadControlsNamespace.Scroll.prototype.ResizeHandler= function ()
{
    if (!this.Initialized)
    {
        this.Initialize();
    }
    if (!this.Initialized)
    {
        return;
    }
    if (!this.Element.offsetHeight || !this.Element.offsetWidth)
    {
        return;
    }
    this.CalculateMinMaxPosition();
    if (this.Element.offsetWidth<this.Element.parentNode.offsetWidth)
    {
        this.ScrollTo(0);
    }
    var of=parseInt(this.IsVertical?this.Element.style.top: this.Element.style.left);
    if (isNaN(of))
    {
        of=0;
    }

    var I4=this ;

    setTimeout( function ()
    {
        I4.ApplyOverflow();
        I4.ScrollTo(of);
        I4.EvaluateArrowStatus();
    } ,100);
};

RadControlsNamespace.Scroll.prototype.AttachEventHandlers= function ()
{
    var D=this.Element;
    var I4=this ;
    var Of= function ()
    {
        I4.ResizeHandler();
    };
    if (window.addEventListener)
    {
        window.addEventListener("\x72e\x73\x69ze",Of, false);
    }
    else
    {
        window.attachEvent("onresize",Of);
    }
};

RadControlsNamespace.Scroll.prototype.AttachArrows= function ()
{
    var If=this.CreateArrow("&laqu\x6f\x3b",1,this.LeftArrowClass);
    var og=this.CreateArrow("&raquo;",-1,this.RightArrowClass);
    this.LeftArrow=If;
    this.RightArrow=og;
    if (this.IsVertical)
    {
        If.style.left="\x30\160\x78";
        og.style.left="\x30px";
        if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Middle)
        {
            If.style.top="\x30px";
            og.style.bottom="0px";
        }
        else if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Left)
        {
            If.style.top="0p\x78";
            og.style.top=If.offsetHeight+"\x70x";
        }
        else
        {
            og.style.bottom="\x30px";
            If.style.bottom=If.offsetHeight+"px";
        }
    }else
    {
        If.style.top="\x30\x70x";
        og.style.top="\x30px";
        if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Middle)
        {
            If.style.left="-1p\x78";
            og.style.right="-1px";
        }
        else if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Left)
        {
            If.style.left="-1px";
            og.style.left=(If.offsetWidth-1)+"p\x78";
        }
        else
        {
            og.style.right="\x2d1px";
            If.style.right=(og.offsetWidth-1)+"px";
        }
    }
};


RadControlsNamespace.Scroll.prototype.CreateArrow= function (Og,lg,cssClass)
{
    var ig=document.createElement("a");
    ig.href="#";
    ig.className=cssClass;
    ig.innerHTML="\x26nbsp;";
    ig.style.zIndex="\x32000";
    this.Element.parentNode.appendChild(ig);
    var I4=this ;
    ig.ScrollDirection=lg;
    if (this.ScrollOnHover)
    {
        ig.onmousedown= function ()
        {
            if (this.disabled)
            {
                return false;
            }
            I4.ScrollAmount=3;
            return true;
        };
        ig.onmouseup= function ()
        {
            I4.ScrollAmount=1;
        };
        ig.onmouseover= function ()
        {
            if (this.disabled)
            {
                return false;
            }
            I4.ScrollAmount=1;
            I4.Scroll(this.ScrollDirection);
            return true;
        };
        ig.onmouseout= function ()
        {
            I4.Ig=0;
            I4.Stop();
            return false;
        };

}
else 
{
    ig.onmousedown= function ()
    {
        I4.Scroll(this.ScrollDirection);
    };
    ig.onmouseup= function ()
    {
        I4.Stop();
    };
}
ig.onclick= function ()
{
    return false;
};
return ig; 
};

RadControlsNamespace.Scroll.prototype.SetHeight= function (value)
{
    if (parseInt(value)==0)
    {
        return;
    }
    this.Element.parentNode.style.height=value;
    this.Initialize();
};

RadControlsNamespace.Scroll.prototype.SetWidth= function (value)
{
    if (parseInt(value)==0)
    {
        return;
    }
    this.Element.parentNode.style.width=value;
    this.Initialize();
};
RadControlsNamespace.Scroll.prototype.CreateScrollWrap= function ()
{
    var Ie=document.createElement("d\x69v");
    var oh=this.Element.parentNode;
    Ie.appendChild(this.Element);
    Ie.style.position="relative";
    Ie.align="left";
    oh.appendChild(Ie);
    if (this.IsVertical)
    {
        Ie.style.styleFloat="\x6ceft";
        Ie.style.cssFloat="left";
        this.Element.style.display="none";
        Ie.style.height=Ie.parentNode.parentNode.offsetHeight+"\x70x";
        this.Element.style.display="block";
    }
    else
    {
        var Oh=0;
        for (var i=0; i<this.Element.childNodes.length; i++)
        {
            var node=this.Element.childNodes[i];
            if (!node.tagName)continue;
            Oh+=node.offsetWidth;
        }
        this.Element.style.width=(Oh+3)+"\x70x";
    }
    return Ie;
} ; 

RadControlsNamespace.Scroll.prototype.CalculateMinMaxPosition= function ()
{
    if (!this.Initialized)
    {
        return;
    }
    if (this.IsVertical)
    {
        var lh=this.Element.parentNode.offsetHeight-this.Element.offsetHeight;
        var ih=this.LeftArrow.offsetHeight;
        var Ih=this.RightArrow.offsetHeight;
    }
    else
    {
        lh=this.Element.parentNode.offsetWidth-this.Element.offsetWidth;
        ih=this.LeftArrow.offsetWidth;
        Ih=this.RightArrow.offsetWidth;
    }
    if (!this.LeaveGapsForArrows)
    {
        ih=0;
        Ih=0;
    }
    this.MaxScrollPosition=0;
    this.MinScrollPosition=lh-Ih-ih;
    if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Middle)
    {
        this.Offset=ih;
    }
    else if (this.ScrollButtonsPosition==RadControlsNamespace.ScrollButtonsPosition.Left)
    {
        this.Offset=ih+Ih;
    }
    else
    {
        this.Offset=0;
    }
};

RadControlsNamespace.Scroll.prototype.CalculateInitialTab= function ()
{
    var oi=this.Element.getElementsByTagName("\x6ci");
    if (oi.length>0)
    {
        var i=0;
        while (this.ScrollPosition<-(this.IsVertical?oi[i].offsetTop:oi[i].offsetLeft)){
            i++;
        }
        this.CurrentTab=i;
    }
};

RadControlsNamespace.Scroll.prototype.AttachScrollMethods= function ()
{
    if (this.PerTabScrolling)
    {
        this.Scroll=RadControlsNamespace.Scroll.StartPerTabScroll;
        this.Stop=RadControlsNamespace.Scroll.StopPerTabScroll;
    }
    else
    {
        this.Scroll=RadControlsNamespace.Scroll.StartSmoothScroll;
        this.Stop=RadControlsNamespace.Scroll.StopSmoothScroll;
    }
} ; 

RadControlsNamespace.Scroll.prototype.EvaluateArrowStatus= function ()
{
    var Oi=!(this.ScrollPosition>this.MinScrollPosition);
    var ii=!(this.ScrollPosition<this.MaxScrollPosition);
    this.RightArrow.disabled=Oi;
    this.LeftArrow.disabled=ii;
    if (ii)
    {
        if (this.LeftArrow.className!=this.LeftArrowClassDisabled)
        {
            this.LeftArrow.className=this.LeftArrowClassDisabled;
        }
    }
    else
    {
        if (this.LeftArrow.className!=this.LeftArrowClass)
        {
            this.LeftArrow.className=this.LeftArrowClass;
        }
    }
    if (Oi)
    {
        if (this.RightArrow.className!=this.RightArrowClassDisabled)
        {
            this.RightArrow.className=this.RightArrowClassDisabled;
        }
    }else
    {
        if (this.RightArrow.className!=this.RightArrowClass)
        {
            this.RightArrow.className=this.RightArrowClass;
        }
    }
};

RadControlsNamespace.Scroll.StartSmoothScroll= function (direction)
{ 
    this.Stop();
    this.Direction=direction;
    var I4=this ;
    var Ii= function ()
    {
        I4.ScrollBy(I4.Direction*I4.ScrollAmount);
    };

    Ii();
    this.oj=setInterval(Ii,10);
} ; 

RadControlsNamespace.Scroll.prototype.ScrollTo= function (position)
{
    position=Math.max(position,this.MinScrollPosition);
    position=Math.min(position,this.MaxScrollPosition);
    position+=this.Offset;
    if (this.IsVertical)
    {
        this.Element.style.top=position+"px";
    }
    else
    {
        this.Element.style.left=position+"px";
    }
    this.Owner.ScrollPosition=this.ScrollPosition=position-this.Offset;
    this.EvaluateArrowStatus();
};
RadControlsNamespace.Scroll.prototype.ScrollBy= function (Oj)
{
    var lj=this.ScrollPosition;
    this.ScrollTo(lj+Oj);
};
RadControlsNamespace.Scroll.StartPerTabScroll= function (direction)
{ 
    this.Stop();
    var oi=this.Element.getElementsByTagName("li");
    var ij=this.CurrentTab-direction;
    if (ij<0 || ij>oi.length){
        return;
    }
    var Ij=direction==-1?this.CurrentTab:ij;
    this.CurrentTab=ij;
    if (this.IsVertical)
    {
        var ok=oi[Ij].offsetHeight;
    }
    else
    {
        ok=oi[Ij].offsetWidth;
    }
    this.ScrollBy(ok*direction);
    this.EvaluateArrowStatus();
} ; 
RadControlsNamespace.Scroll.prototype.ScrollNeeded= function ()
{
    return true;
    if (this.IsVertical)
    {
        return this.Element.offsetHeight>this.Element.parentNode.offsetHeight;
    }
    return this.Element.offsetWidth>this.Element.parentNode.offsetWidth;
};
RadControlsNamespace.Scroll.StopSmoothScroll= function (direction)
{
    if (this.OnScrollStop)
    {
        this.OnScrollStop();
    }
    clearInterval(this.oj);
} ; 
RadControlsNamespace.Scroll.StopPerTabScroll= function (direction)
{
    if (this.OnScrollStop)
    {
        this.OnScrollStop();
    }
} ;



if (typeof window.RadControlsNamespace=="\165ndefin\x65\x64")
{
    window.RadControlsNamespace= {} ;
}

RadControlsNamespace.Ticker= function (c)
{ 
    this.Listener=c;
    this.IntervalPointer=null;
};
RadControlsNamespace.Ticker.prototype= 
{
    Configure:function (O0)
    {
        this.Duration=O0.Duration;
        this.Interval=16;
    } ,
    Start:function ()
    {
        clearInterval(this.IntervalPointer);
        this.TimeElapsed=0;
        var I4=this ;
        var o5= function ()
        {
            I4.Tick();
        };
        this.Tick();
        this.IntervalPointer=setInterval(o5,this.Interval);
    } ,
    Tick:function ()
    {
        this.TimeElapsed+=this.Interval;
        this.Listener.OnTick(this.TimeElapsed);
        if (this.TimeElapsed>=this.Duration)
        {
            this.Stop();
        }
    } ,
    Stop:function ()
    {
        if (this.IntervalPointer)
        {
            this.Listener.OnTickEnd();
            clearInterval(this.IntervalPointer);
            this.IntervalPointer=null;
        }
    }
};









function Test_NameSpace_1()
{
    // Create the global symbol "com" if it doesn't exist
    // Throw an error if it does exist but is not an object
    var com;
    if (!com) com = {};
    else if (typeof com != "object")
        throw new Error("com already exists and is not an object");

    // Repeat the creation and type-checking code for the next level
    if (!com.davidflanagan) com.davidflanagan = {}
    else if (typeof com.davidflanagan != "object")
        throw new Error("com.davidflanagan already exists and is not an object");

    // Throw an error if com.davidflanagan.Class already exists
    if (com.davidflanagan.Class)
        throw new Error("com.davidflanagan.Class already exists");

    // Otherwise, create and populate the namespace with one big object literal
    com.davidflanagan.Class = {
        define: function(data) { /* code here */ },
        provides: function(o, c) { /* code here */ }
    };

}



function TestNameSpace()
{
    /**
 * com/davidflanagan/Shapes.js: a module of classes representing shapes
 *
 * This module defines classes within the com.davidflanagan.shapes namespace
 * This module requires the com/davidflanagan/Class.js module
 **/
    // First, check for the Class module
    var com;  // Declare global symbol before testing for its presence
    if (!com || !com.davidflanagan || !com.davidflanagan.Class)
        throw new Error("com/davidflanagan/Class.js has not been loaded");

    // Import a symbol from that module
    var define = com.davidflanagan.Class.define;

    // We know from the test for the Class module that the com.davidflanagan
    // namespace exists, so we don't have to create it here.
    // We just create our shapes namespace within it.
    if (com.davidflanagan.shapes)
        throw new Error("com.davidflanagan.shapes namespace already exists");

    // Create the namespace
    com.davidflanagan.shapes = {};

    // Now define classes, storing their constructor functions in our namespace
    com.davidflanagan.shapes.Circle = define({ /* class data here */ });
    com.davidflanagan.shapes.Rectangle = define({ /* class data here */ });
    com.davidflanagan.shapes.Triangle = define({ /* class data here */});

}


