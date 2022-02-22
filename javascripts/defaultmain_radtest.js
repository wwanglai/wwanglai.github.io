var menuType = 6;

window.onload=function(){

    /*
setTimeout("alert('Hello world!')", 1000);
setTimeout(function() {
    alert("Hello world!");
}, 1000);
alert("OnCl\x69\x65ntMous\x65\x4fver");
alert("\x4fnClien\x74\x49temF\x6f\x63us");
    
alert("\x6d\x6fuseover" + "," + "Mouse\x4f\x76erHan\x64\x6cer"); 

alert("\x20rtlcontex\x74\x20Rad\x4d\x65n\x75\x5f"+"     " + "_\x72\x74l"); 

alert("\x76ar Sende\x72\x20= a\x72\x67um\x65\156t\x73\x5b0];\x20\166a\x72 Arg\x75ments \x3d\040\x61rgum\x65\156\x74\163[\x31];"); 

alert("\x75l"); 
alert("\x52\x61\x64\x43\x61\x6c\x6c\x62\x61\x63\x6b\x4e\x61\x6d\x65\x73\x70\x61\x63\x65"); 

Test_NameSpace_1();
*/

    window["ctl00_ctl00_topMenu"] = new RadMenu("ctl00_ctl00_topMenu");

}

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
