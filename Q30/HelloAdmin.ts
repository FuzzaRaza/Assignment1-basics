var usernames:string[]=new Array('admin','ali','furqan','umer','sam');
for(var n=0;n<usernames.length;n++)
{
    if (usernames[n]=='admin')
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if(usernames[n]!='admin')
    {
        console.log("Hello ",usernames[n],",thank you for logging in again.");
    }
    else{}
}