// This program was created para mas sayon ang pag compute sa future sa computer bussiness ni papa.
// waspclastbought tells kung ang previous nga napalit kay box ba or pc. If waspclastbought is false, last nga gipalit kay box, if waspclastbought is true, last nga gipalit kay pc
// Sa pagdeduct sa money, dapat mag alternate ang pag palit ug pc ug box
var months=12*3,avera=1400,pc=5,cafinal=8700,monthname='November',year=2017,boxprice=5000,pcprice=20000,waspclastbought=true;

//completepcarr is the number of computers that are produced in that month
//nopcarr and no boxarr are the total number of boxes and pcs finished within that month, one complete pc requires one pc and one box, which is stored in completepcarr
var completepcarr=new Array();
completepcarr[0]=0;
var nopcarr=new Array();
nopcarr[0]=0;
var noboxarr=new Array();
noboxarr[0]=0;
var pcarr=new Array();
pcarr[0]=pc;

for (var firstar=1; firstar<=months; firstar++)
    {
        var $monthslater=montonum(monthname)+firstar;
        cafinal+=pcarr[firstar-1]*avera+stipend($monthslater%12);
        /////////////////////////////////////////////
        var initcap=cafinal;
        var checks=new Array();
        checks=deducheck(cafinal);
        var nobox=checks[0];
		noboxarr[firstar]=noboxarr[firstar-1]+nobox;
		
        var nopc=checks[1];
		nopcarr[firstar]=nopcarr[firstar-1]+nopc;
        cafinal=checks[2];
        /////////////////////////////////////////////
        completepcarr[firstar]=0;
        
        while(nopcarr[firstar]>0 && noboxarr[firstar]>0)
			{
				completepcarr[firstar]+=1;
				noboxarr[firstar]-=1;
				nopcarr[firstar]-=1;
			}
        
		pcarr[firstar]=pcarr[firstar-1];
		// Delayed by two months code addition, thanks to Sir Calvo.
         if(firstar-2>=0)
			{pcarr[firstar]+=completepcarr[firstar-2];}
   
       
        var usdphprate =1;
        
        $('table').append('<tr><td>'+firstar+'</td><td>'+numtomon($monthslater)+'</td><td>'+yearcheck($monthslater)+'</td><td>'+(initcap/usdphprate).toFixed(2)+'</td><td>'+pcarr[firstar]+'</td><td>'+nobox+'</td><td>'+nopc+'</td><td>'+(cafinal/usdphprate).toFixed(2)+'</td><td>'+(pcarr[firstar]*avera/usdphprate).toFixed(2)+'</td></tr>');
    }



//converts a number to months
function numtomon(num){
    num=num%12;
    first=[1,2,3,4,5,6,7,8,9,10,11,0];
    second=[ 'January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    switch (num){
       
            case first[0]: return second[0];
            case first[1]: return second[1];
            case first[2]: return second[2];
            case first[3]: return second[3];
            case first[4]: return second[4];
            case first[5]: return second[5];
            case first[6]: return second[6];
            case first[7]: return second[7];
            case first[8]: return second[8];
            case first[9]: return second[9];
            case first[10]: return second[10];
            case first[11]: return second[11];
               }
}
//converts a month to numbers
function montonum(mon){
    second=[1,2,3,4,5,6,7,8,9,10,11,0];
    first=[ 'January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    switch (mon){
       
            case first[0]: return second[0];
            case first[1]: return second[1];
            case first[2]: return second[2];
            case first[3]: return second[3];
            case first[4]: return second[4];
            case first[5]: return second[5];
            case first[6]: return second[6];
            case first[7]: return second[7];
            case first[8]: return second[8];
            case first[9]: return second[9];
            case first[10]: return second[10];
            case first[11]: return second[11];
               }
            
}
// Based on the pshs Stipend Distribution System, Pisay Does not release stipend in the months of June and July in the contemporary times, June and July corresponds to the numbers 6 and 7 in this system.. Thus the use of the numbers
function stipend(num){
    if (num==6 || num==7)
    {return 0;}
    else
    {return 4000;}
}
// Adds a year to the current year whenever January hits
function yearcheck(num){
    if (num%12==1)
    {year++;}
    return year;
}
// Returns a Yes or A no, depending on the number
function yesno(num){
    if (num>=1)
        return 'Yes';
    if (num==0)
        return 'No';
}

function deducheck(num){

    var price=whatprice(waspclastbought),pccount=0,boxcount=0;
    while (num>=price)
        {
            num-=price;
            if (waspclastbought)
                boxcount++;
            else
                pccount++;
            waspclastbought=!waspclastbought;
            price=whatprice(waspclastbought);
        }
        return [boxcount,pccount,num];
}
function whatprice(bool){
    switch (bool){
            case true:return boxprice;
            case false:return pcprice;
                    }
}