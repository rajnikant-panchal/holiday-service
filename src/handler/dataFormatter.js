
const json = require("../common/config.json");

let formatJsonData = obj => {
        return {
            "Date" : obj.date,
            "Day":obj.day,
            "Holiday":obj.holiday_name,
            "State(s)":obj.applicable_state
        }
    }

module.exports.getData = (type, val) => {

    if(type==='all'){
        return json.data.map(formatJsonData);
    }else if(type === 'date'){
       let arr = json.data.filter(obj => obj.date.toLowerCase === val.toLowerCase);
       if(arr.length>0){
           return arr[0];
       }else{
           return "No Holiday"
       }
    }else if(type === 'state'){
        console.log("in state");
        let arr = json.data.filter(obj => obj.applicable_state.includes(val));
        console.log(arr)
        if(arr.length>0){
            return arr;
        }else{
            return "No Holiday"
        }
     }
    
  };