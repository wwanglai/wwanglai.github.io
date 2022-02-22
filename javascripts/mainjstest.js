window.onload=function(){

    CreateMenuItemFromBottom();


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

    function PropertyCollections(){
    }

    function CreateMenuItemFromBottom()
    {

        var newdiv = document.createElement("div");
        newdiv.id = "ctl00_ctl00_topMenu";
        // set div attributes

        newdiv.className = "menu RadMenu_telerikCom ";



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


        objAnchorPropertyArray = new Array(objProductsAnchorProperty,
            objPurchaseAnchorProperty
            );
 
        addAnchorArrayByObject(newul, true, objAnchorPropertyArray);

        newdiv.appendChild(newul);


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


    window["ctl00_ctl00_topMenu"] = new RadMenu("ctl00_ctl00_topMenu");

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



//
//    function highlight( ) { /* Event-handler code goes here */
//
//
//        //        setTimeout("alert('Hello world!')", 1000);
//
//        alert("\x6d\x6fuseover" + "," + "Mouse\x4f\x76erHan\x64\x6cer");
//
//    }
//    document.getElementById("a_Products").attachEvent("onmouseover", highlight);
//
//
//
//    // Here are an event handler and an element we want to register it on
//    function genericHandler( ) { /* code that uses the this keyword */
//        setTimeout("alert('Hello world!')", 1000);
//    }
//    var element = document.getElementById("a_Purchase");
//
//    // We can register this handler with the Level 0 API
//    element.onmouseover = genericHandler;
//
//    // Or we can use a closure
//    element.attachEvent("onmouseover", function( ) {
//        // Invoke the handler as a method of element
//        genericHandler.call(element, event);
//    });
//


}

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
}

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


RadMenu.prototype.RegisterDisposeOnUnload= function ()
{
    if (!RadControlsNamespace.Browser.IsIE)return;
    var I4=this ;
    this.l9= function (){
        I4.Dispose();
    };
    window.attachEvent("\x6fnu\x6e\x6coad",this.l9);
};

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


function RadMenuItemState(){}

RadMenuItemState= {
    Closed: 0,
    Open: 1,
    AboutToClose: 2,
    AboutToOpen: 3
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

