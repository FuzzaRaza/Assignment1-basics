var nums:number[]=new Array(1,2,3,4,5,6,7,8,9);
var ord:number[]=new Array();
console.log(nums);
for (var i=0;i<nums.length;i++)
{
    if (nums[i]==1)
    {
        console.log(nums[i],"st");
    }
    else if(nums[i]==2)
    {
        console.log(nums[i],"nd");
    }
    else if(nums[i]==3)
    {
        console.log(nums[i],"rd");
    }
    else
    {
        console.log(nums[i],"th");
    }
}