let getScore = (nums) =>{
    let ans=0;
    let len=nums.length
    let fmeCount=0;
    for(let i=0;i<len && fmeCount<10;){
        let fmeScore=nums[i];
        if(nums[i]==10){
            fmeScore+=nums[i+1]+nums[i+2]
            i++;
            fmeCount++;
        }
        else{
            if(nums[i]+nums[i+1]==10){
                fmeScore+=nums[i+1]+nums[i+2];
                i+=2;
                fmeCount++;
            }
            else{
                fmeScore+=nums[i+1];
                i+=2;
                fmeCount++;
            }
        }
        ans+=fmeScore;
    }
    return ans;
}

console.log(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
console.log(getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

module.exports= {getScore};