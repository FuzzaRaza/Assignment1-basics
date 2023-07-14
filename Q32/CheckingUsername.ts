
var current_users:string[]=new Array('shahid','ali','furqan','umer','sam');
var new_users:string[]=new Array('farkhanda','faraz','fariha','Sam','ali');
var Invalid_user:string[]=new Array();
var ValidUser:string[]=new Array();
ValidUser=new_users;
var n=0;
var indx:number[]=new Array();
console.log("new users:",new_users);
for (var i=0;i<new_users.length;i++)
{
    new_users[i]=new_users[i].toLowerCase();
    for(var j=0;j<current_users.length;j++)
    {
        current_users[j]=current_users[j].toLowerCase();
        if(new_users[i]==current_users[j])
        {
            Invalid_user[n]=new_users[i];
            indx[n]=i;
            n=n+1;
        }
        else{}
    }
}
indx.reverse();
for(var k=0;k<n;k++)
{
    console.log(Invalid_user[k]," username is not available. You need to enter a new username.");
    
    ValidUser.splice(indx[k],1);
}

for(var l=0;l<ValidUser.length;l++)
{
    console.log(ValidUser[l],"username is available");
}
